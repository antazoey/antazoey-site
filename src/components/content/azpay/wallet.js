// Wallet connection helpers for the AZPay dApp.
//
// We discover injected wallets via EIP-6963 and hand back the standard
// EIP-1193 providers each one announces. Discovery (rather than reading
// `window.ethereum` directly) means that when several wallets are installed
// they no longer fight over a single slot — each is a distinct provider we can
// target, which sidesteps the "wrong/broken wallet won injection" failures.

const legacyName = (p) =>
  p.isMetaMask
    ? 'MetaMask'
    : p.isRainbow
      ? 'Rainbow'
      : p.isCoinbaseWallet
        ? 'Coinbase Wallet'
        : 'Browser wallet';

// Discover injected wallets. Primary source is EIP-6963 announcements; we also
// fold in the legacy `window.ethereum(.providers)` list so a wallet that's slow
// or buggy about announcing (looking at you, Rainbow) still shows up. Deduped
// by name so you reliably get one button per installed wallet.
export function discoverInjected() {
  return new Promise((resolve) => {
    const byName = new Map();
    const add = (detail) => {
      if (
        detail &&
        detail.info &&
        detail.provider &&
        !byName.has(detail.info.name)
      ) {
        byName.set(detail.info.name, detail);
      }
    };
    const onAnnounce = (event) => add(event.detail);

    window.addEventListener('eip6963:announceProvider', onAnnounce);
    window.dispatchEvent(new Event('eip6963:requestProvider'));
    // Some wallets announce a beat late; nudge once more.
    setTimeout(
      () => window.dispatchEvent(new Event('eip6963:requestProvider')),
      200,
    );

    setTimeout(() => {
      window.removeEventListener('eip6963:announceProvider', onAnnounce);

      // Supplement with legacy injected providers EIP-6963 may have missed.
      const eth = window.ethereum;
      if (eth) {
        const arr = Array.isArray(eth.providers) ? eth.providers : [eth];
        arr.forEach((p, i) => {
          const name = legacyName(p);
          if (!byName.has(name)) {
            byName.set(name, {
              info: {
                uuid: `legacy-${name}-${i}`,
                name,
                rdns: `legacy.${name}`,
              },
              provider: p,
            });
          }
        });
      }
      resolve(Array.from(byName.values()));
    }, 500);
  });
}

// Ask a connected wallet to switch to (or add) the given network.
export async function switchTo(provider, network) {
  const current = await provider.request({ method: 'eth_chainId' });
  if (parseInt(current, 16) === network.id) return;
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: network.hexId }],
    });
  } catch (err) {
    // 4902 = chain not added to the wallet yet.
    if (err && err.code === 4902) {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: network.hexId,
            chainName: network.name,
            nativeCurrency: network.currency,
            rpcUrls: [network.rpcUrl],
            blockExplorerUrls: [network.explorer],
          },
        ],
      });
    } else {
      throw err;
    }
  }
}
