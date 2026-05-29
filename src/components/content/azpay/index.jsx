import '@styles';
import { ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';

import { ABI } from './config';
import { fetchNetworks, syncNetworks } from './networks';
import { discoverInjected, switchTo } from './wallet';
import './styles.less';

const short = (addr) => `${addr.slice(0, 6)}…${addr.slice(-4)}`;
const fmtEth = (wei) => {
  const s = ethers.formatEther(wei);
  return s.includes('.') ? s.replace(/0+$/, '').replace(/\.$/, '') : s;
};

// One read-only RPC provider per network, created on demand.
const rpcCache = {};
const rpcFor = (net) => {
  if (!rpcCache[net.id]) {
    rpcCache[net.id] = new ethers.JsonRpcProvider(net.rpcUrl, net.id);
  }
  return rpcCache[net.id];
};

const AZPay = () => {
  // Networks AZPay is deployed on, resolved from the repo's pyproject.toml.
  // syncNetworks() gives an instant value (cache or fallback); fetchNetworks()
  // refreshes from GitHub on mount.
  const [networks, setNetworks] = useState(syncNetworks);

  const [providers, setProviders] = useState([]); // discovered wallets
  const [picking, setPicking] = useState(false);
  const [provider, setProvider] = useState(null); // active EIP-1193 provider
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);

  // Network being viewed when the wallet isn't dictating one.
  const [selectedId, setSelectedId] = useState(syncNetworks()[0].id);

  const [amount, setAmount] = useState('0.01');
  const [track, setTrack] = useState(true);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null); // { kind, msg, hash? }

  const [stats, setStats] = useState(null);
  const [contributions, setContributions] = useState(null);

  const getNetwork = useCallback(
    (id) => networks.find((n) => n.id === id),
    [networks],
  );

  const walletNetwork = account ? getNetwork(chainId) : null;
  const connectedUnsupported = Boolean(account) && !walletNetwork;
  // The network whose stats we show and (when connected) pay on.
  const viewNetwork = walletNetwork || getNetwork(selectedId) || networks[0];

  // ---- reads -------------------------------------------------------------

  const loadStats = useCallback(async (net) => {
    try {
      const c = new ethers.Contract(net.contract, ABI, rpcFor(net));
      const [totalRaised, uniquePayers, balance] = await Promise.all([
        c.total_raised(),
        c.unique_payers(),
        c.contract_balance(),
      ]);
      setStats({ net: net.id, totalRaised, uniquePayers, balance });
    } catch (err) {
      console.warn('Failed to load AZPay stats', err);
      setStats(null);
    }
  }, []);

  // Aggregate what an address has funded (tracked payments) across every chain.
  const loadContributions = useCallback(async (addr, nets) => {
    if (!addr) {
      setContributions(null);
      return;
    }
    const perNetwork = await Promise.all(
      nets.map(async (net) => {
        try {
          const c = new ethers.Contract(net.contract, ABI, rpcFor(net));
          const p = await c.payers(addr);
          return { net, total: p.total, count: p.count };
        } catch (err) {
          console.warn(`Failed to load contributions on ${net.name}`, err);
          return { net, total: 0n, count: 0n };
        }
      }),
    );
    const total = perNetwork.reduce((a, r) => a + r.total, 0n);
    const count = perNetwork.reduce((a, r) => a + r.count, 0n);
    setContributions({ perNetwork, total, count });
  }, []);

  // Refresh the deployed-network list from GitHub on mount.
  useEffect(() => {
    fetchNetworks().then((nets) => {
      if (nets && nets.length) setNetworks(nets);
    });
  }, []);

  // Keep the viewed network valid as the list resolves.
  useEffect(() => {
    if (networks.length && !networks.some((n) => n.id === selectedId)) {
      setSelectedId(networks[0].id);
    }
  }, [networks, selectedId]);

  useEffect(() => {
    loadStats(viewNetwork);
  }, [viewNetwork, loadStats]);
  useEffect(() => {
    loadContributions(account, networks);
  }, [account, networks, loadContributions]);

  // Populate the wallet list for the connect flow (no popup on load).
  useEffect(() => {
    discoverInjected().then(setProviders);
  }, []);

  // ---- connection --------------------------------------------------------

  const attach = useCallback((prov) => {
    if (!prov || !prov.on) return;
    prov.on('accountsChanged', (accts) =>
      setAccount(accts && accts.length ? ethers.getAddress(accts[0]) : null),
    );
    prov.on('chainChanged', (cid) =>
      setChainId(typeof cid === 'string' ? parseInt(cid, 16) : Number(cid)),
    );
    prov.on('disconnect', () => {
      setProvider(null);
      setAccount(null);
      setChainId(null);
    });
  }, []);

  const connectWith = useCallback(
    async (detail) => {
      setPicking(false);
      setBusy(true);
      try {
        const prov = detail.provider;
        const accts = await prov.request({ method: 'eth_requestAccounts' });
        const cid = await prov.request({ method: 'eth_chainId' });
        setProvider(prov);
        setAccount(accts && accts.length ? ethers.getAddress(accts[0]) : null);
        setChainId(parseInt(cid, 16));
        attach(prov);
        setStatus(null);
      } catch (err) {
        setStatus({ kind: 'error', msg: friendlyError(err) });
      } finally {
        setBusy(false);
      }
    },
    [attach],
  );

  const connect = useCallback(async () => {
    // Re-discover on click in case the wallet announced after page load.
    let list = providers;
    if (list.length === 0) {
      list = await discoverInjected();
      setProviders(list);
    }
    if (list.length === 0) {
      setStatus({
        kind: 'error',
        msg: 'No wallet detected. Install MetaMask or Rainbow and reload.',
      });
      return;
    }
    if (list.length === 1) {
      connectWith(list[0]);
    } else {
      setPicking(true);
    }
  }, [providers, connectWith]);

  const disconnect = useCallback(async () => {
    try {
      if (provider && provider.disconnect) await provider.disconnect();
    } catch {
      /* ignore */
    }
    setProvider(null);
    setAccount(null);
    setChainId(null);
    setStatus(null);
  }, [provider]);

  // Pick a network: switch the wallet if connected, else just change the view.
  const chooseNetwork = useCallback(
    async (net) => {
      setSelectedId(net.id);
      if (!provider) return;
      try {
        await switchTo(provider, net);
        const cid = await provider.request({ method: 'eth_chainId' });
        setChainId(parseInt(cid, 16));
      } catch (err) {
        setStatus({ kind: 'error', msg: friendlyError(err) });
      }
    },
    [provider],
  );

  // ---- pay ---------------------------------------------------------------

  const pay = useCallback(async () => {
    if (!walletNetwork) return;
    let value;
    try {
      value = ethers.parseEther(amount.trim());
    } catch {
      setStatus({ kind: 'error', msg: 'Enter a valid ETH amount.' });
      return;
    }
    if (value <= 0n) {
      setStatus({ kind: 'error', msg: 'Amount must be greater than 0.' });
      return;
    }
    setBusy(true);
    setStatus({ kind: 'info', msg: 'Confirm the transaction in your wallet…' });
    try {
      const browser = new ethers.BrowserProvider(provider, walletNetwork.id);
      const signer = await browser.getSigner();
      const contract = new ethers.Contract(walletNetwork.contract, ABI, signer);
      const tx = await contract.pay(track, { value });
      setStatus({
        kind: 'info',
        msg: 'Transaction sent — waiting for confirmation…',
        hash: tx.hash,
      });
      await tx.wait();
      setStatus({
        kind: 'success',
        msg: `Thank you! Sent ${amount} ${walletNetwork.currency.symbol} on ${walletNetwork.name}.`,
        hash: tx.hash,
      });
      loadStats(walletNetwork);
      loadContributions(account, networks);
    } catch (err) {
      setStatus({ kind: 'error', msg: friendlyError(err) });
    } finally {
      setBusy(false);
    }
  }, [
    walletNetwork,
    amount,
    track,
    provider,
    account,
    networks,
    loadStats,
    loadContributions,
  ]);

  const explorerTx = (hash) =>
    `${(walletNetwork || viewNetwork).explorer}/tx/${hash}`;

  // ---- render ------------------------------------------------------------

  return (
    <div className="azpay">
      <h1 className="projectTypeTitle">Support me</h1>
      <div className="azpayIntro">
        This sends ETH to my{' '}
        <a className="contentLink" href="https://github.com/antazoey/azpay">
          AZPay
        </a>{' '}
        contract. Connect a wallet, pick an amount, and pay. Toggle{' '}
        <em>tracked</em> to be counted in the public payer pool, or leave it off
        to stay out of it.
      </div>

      {/* Network selector / switcher */}
      {networks.length > 1 && (
        <div className="azpayNetworks">
          {networks.map((net) => (
            <button
              key={net.id}
              className={`azpayNetwork${net.id === viewNetwork.id ? ' azpayNetworkActive' : ''}`}
              onClick={() => chooseNetwork(net)}
            >
              {net.name}
            </button>
          ))}
        </div>
      )}

      {/* Connection bar */}
      <div className="azpayBar">
        {account ? (
          <>
            <span className="azpayAccount" title={account}>
              ● {short(account)}
              {walletNetwork ? ` · ${walletNetwork.name}` : ''}
            </span>
            <button className="azpayBtn azpayBtnGhost" onClick={disconnect}>
              disconnect
            </button>
          </>
        ) : (
          <button className="azpayBtn" disabled={busy} onClick={connect}>
            Connect wallet
          </button>
        )}
      </div>

      {/* Wallet picker (only when multiple wallets are installed) */}
      {picking && !account && providers.length > 1 && (
        <div className="azpayPicker">
          <div className="azpayPickerHead">Choose a wallet</div>
          {providers.map((w) => (
            <button
              key={w.info.uuid}
              className="azpayWallet"
              onClick={() => connectWith(w)}
            >
              {w.info.icon && (
                <img src={w.info.icon} alt="" className="azpayWalletIcon" />
              )}
              {w.info.name}
            </button>
          ))}
        </div>
      )}

      {connectedUnsupported && (
        <div className="azpayBanner">
          AZPay isn’t deployed on your wallet’s current network. Switch to{' '}
          {networks.map((net, i) => (
            <React.Fragment key={net.id}>
              {i > 0 && ' or '}
              <button
                className="azpayBtn azpayBtnGhost"
                onClick={() => chooseNetwork(net)}
              >
                {net.name}
              </button>
            </React.Fragment>
          ))}
          .
        </div>
      )}

      {/* Pay form */}
      <div className="azpayForm">
        <label className="azpayLabel">
          Amount ({viewNetwork.currency.symbol})
          <input
            className="azpayInput"
            type="number"
            min="0"
            step="0.001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            inputMode="decimal"
          />
        </label>

        <label className="azpayCheck">
          <input
            type="checkbox"
            checked={track}
            onChange={(e) => setTrack(e.target.checked)}
          />
          Count me in the public payer pool (tracked)
        </label>

        <button
          className="azpayBtn azpayPay"
          disabled={busy || !account || connectedUnsupported}
          onClick={pay}
        >
          {busy
            ? 'Working…'
            : !account
              ? 'Connect a wallet to pay'
              : connectedUnsupported
                ? 'Switch to a supported network'
                : `Pay ${amount || '0'} ${walletNetwork.currency.symbol} on ${walletNetwork.name}`}
        </button>
      </div>

      {status && (
        <div className={`azpayStatus azpay-${status.kind}`}>
          {status.msg}
          {status.hash && (
            <>
              {' '}
              <a className="contentLink" href={explorerTx(status.hash)}>
                view tx
              </a>
            </>
          )}
        </div>
      )}

      {/* Your contributions (across all configured networks) */}
      {account && contributions && (
        <div className="azpayMine">
          <div className="azpayMineTitle">Your contributions</div>
          {contributions.count > 0n ? (
            <>
              <div className="azpayMineTotal">
                {fmtEth(contributions.total)} ETH over{' '}
                {contributions.count.toString()} payment
                {contributions.count === 1n ? '' : 's'} 💚
              </div>
              <ul className="azpayMineList">
                {contributions.perNetwork
                  .filter((r) => r.count > 0n)
                  .map((r) => (
                    <li key={r.net.id}>
                      {r.net.name}: {fmtEth(r.total)} {r.net.currency.symbol} (
                      {r.count.toString()})
                    </li>
                  ))}
              </ul>
              <div className="azpayMineNote">tracked payments only</div>
            </>
          ) : (
            <div className="azpayMineTotal">
              No tracked contributions yet — be the first 💚
            </div>
          )}
        </div>
      )}

      {/* Live stats for the viewed network */}
      <div className="azpayStatsHead">
        {viewNetwork.name} {networks.length > 1 ? 'totals' : ''}
      </div>
      <div className="azpayStats">
        <div className="azpayStat">
          <span className="azpayStatNum">
            {stats && stats.net === viewNetwork.id
              ? fmtEth(stats.totalRaised)
              : '—'}
          </span>
          <span className="azpayStatLabel">
            {viewNetwork.currency.symbol} raised
          </span>
        </div>
        <div className="azpayStat">
          <span className="azpayStatNum">
            {stats && stats.net === viewNetwork.id
              ? stats.uniquePayers.toString()
              : '—'}
          </span>
          <span className="azpayStatLabel">unique payers</span>
        </div>
        <div className="azpayStat">
          <span className="azpayStatNum">
            {stats && stats.net === viewNetwork.id
              ? fmtEth(stats.balance)
              : '—'}
          </span>
          <span className="azpayStatLabel">
            {viewNetwork.currency.symbol} in contract
          </span>
        </div>
      </div>
    </div>
  );
};

function friendlyError(err) {
  if (!err) return 'Something went wrong.';
  const code = err.code;
  if (code === 4001 || code === 'ACTION_REJECTED')
    return 'Request rejected in wallet.';
  if (err.shortMessage) return err.shortMessage;
  if (err.message) return err.message;
  return String(err);
}

export default AZPay;
