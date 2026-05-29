// Resolves the list of networks AZPay is deployed on by reading the canonical
// deployment records from the azpay repo's pyproject.toml at runtime, so the
// frontend never has to hardcode addresses. Results are cached in localStorage
// for instant subsequent loads, with FALLBACK_NETWORKS as the offline default.

import { CHAIN_META, DEPLOYMENTS_URL, FALLBACK_NETWORKS } from './config';

const CACHE_KEY = 'azpay.networks.v1';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

// Pull `[[tool.ape.deployments.<ecosystem>.<network>]]` blocks out of the TOML.
// Skips commented (#) lines and keeps only AZPay deployments with a real address.
export function parseDeployments(toml) {
  const out = [];
  const headerRe =
    /^\s*\[\[tool\.ape\.deployments\.([a-z0-9_]+)\.([a-z0-9_]+)\]\]\s*$/i;
  const lines = toml.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trimStart().startsWith('#')) continue;
    const header = headerRe.exec(lines[i]);
    if (!header) continue;
    const [, ecosystem, network] = header;
    let contractType = null;
    let address = null;
    // Scan the block body until the next section header.
    for (let j = i + 1; j < lines.length; j++) {
      const line = lines[j];
      if (/^\s*\[/.test(line)) break; // next [section] or [[section]]
      if (line.trimStart().startsWith('#')) continue;
      const ct = /contract_type\s*=\s*"([^"]+)"/.exec(line);
      if (ct) contractType = ct[1];
      const ad = /address\s*=\s*"(0x[0-9a-fA-F]{40})"/.exec(line);
      if (ad) address = ad[1];
    }
    if (address && (!contractType || contractType === 'AZPay')) {
      out.push({ ecosystem, network, address });
    }
  }
  return out;
}

// Join parsed deployments with chain metadata. Unknown chains (no CHAIN_META
// entry) are dropped — add one to config.js to surface them.
function toNetworks(deployments) {
  return deployments
    .map((d) => {
      const meta = CHAIN_META[`${d.ecosystem}.${d.network}`];
      return meta ? { ...meta, contract: d.address } : null;
    })
    .filter(Boolean);
}

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { ts, networks } = JSON.parse(raw);
    if (!Array.isArray(networks) || networks.length === 0) return null;
    return { fresh: Date.now() - ts < CACHE_TTL, networks };
  } catch {
    return null;
  }
}

function writeCache(networks) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ ts: Date.now(), networks }),
    );
  } catch {
    /* localStorage unavailable — fine, we just refetch next time */
  }
}

// Best value available synchronously for first paint: cache, else fallback.
export function syncNetworks() {
  const cached = readCache();
  return cached ? cached.networks : FALLBACK_NETWORKS;
}

// Fetch the live records from GitHub, parse, cache, and return them. Falls back
// to cache (even if stale) and then FALLBACK_NETWORKS on any failure.
export async function fetchNetworks() {
  try {
    const res = await fetch(DEPLOYMENTS_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const networks = toNetworks(parseDeployments(await res.text()));
    if (networks.length === 0) throw new Error('no deployments parsed');
    writeCache(networks);
    return networks;
  } catch (err) {
    console.warn('Falling back for AZPay networks:', err);
    const cached = readCache();
    return cached ? cached.networks : FALLBACK_NETWORKS;
  }
}
