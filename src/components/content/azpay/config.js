// Configuration for the AZPay dApp.
//
// The list of networks the dApp offers is NOT hardcoded here — it's pulled at
// runtime from the canonical deployment records in the azpay repo's
// pyproject.toml (see networks.js). This file only provides:
//   * CHAIN_META   — chain metadata (id/RPC/explorer/currency) keyed by the
//                    Ape "ecosystem.network" name used in pyproject.toml.
//   * FALLBACK_NETWORKS — a known-good list for first paint / if GitHub is down.
//   * DEPLOYMENTS_URL   — where to fetch the deployment records from.
//   * ABI               — the bits of the contract this page touches.
//
// To support a new chain: deploy AZPay there (which records it in
// pyproject.toml), and — if it's a chain not already below — add one CHAIN_META
// entry. Nothing else changes.

// Raw pyproject.toml from the azpay repo (CORS-enabled by GitHub).
export const DEPLOYMENTS_URL =
  'https://raw.githubusercontent.com/antazoey/azpay/main/pyproject.toml';

// Chain metadata keyed by Ape's "<ecosystem>.<network>" deployment key.
export const CHAIN_META = {
  'ethereum.mainnet': {
    id: 1,
    hexId: '0x1',
    name: 'Ethereum',
    currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: 'https://eth.llamarpc.com',
    explorer: 'https://etherscan.io',
  },
  'ethereum.sepolia': {
    id: 11155111,
    hexId: '0xaa36a7',
    name: 'Sepolia',
    currency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: 'https://ethereum-sepolia-rpc.publicnode.com',
    explorer: 'https://sepolia.etherscan.io',
  },
  'arbitrum.mainnet': {
    id: 42161,
    hexId: '0xa4b1',
    name: 'Arbitrum One',
    currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    explorer: 'https://arbiscan.io',
  },
  'arbitrum.sepolia': {
    id: 421614,
    hexId: '0x66eee',
    name: 'Arbitrum Sepolia',
    currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
    explorer: 'https://sepolia.arbiscan.io',
  },
  'optimism.mainnet': {
    id: 10,
    hexId: '0xa',
    name: 'Optimism',
    currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: 'https://mainnet.optimism.io',
    explorer: 'https://optimistic.etherscan.io',
  },
  'base.mainnet': {
    id: 8453,
    hexId: '0x2105',
    name: 'Base',
    currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: 'https://mainnet.base.org',
    explorer: 'https://basescan.org',
  },
  'polygon.mainnet': {
    id: 137,
    hexId: '0x89',
    name: 'Polygon',
    currency: { name: 'POL', symbol: 'POL', decimals: 18 },
    rpcUrl: 'https://polygon-rpc.com',
    explorer: 'https://polygonscan.com',
  },
};

// Shown immediately while the live records load, and used if the fetch fails.
// Mirrors the Arbitrum deployment currently recorded in pyproject.toml.
export const FALLBACK_NETWORKS = [
  {
    ...CHAIN_META['arbitrum.mainnet'],
    contract: '0x58Fb3a60b19BD2FA2dB19FB68fc423B9c66f4055',
  },
  {
    ...CHAIN_META['ethereum.mainnet'],
    contract: '0x5bc7d97a4c33fd463f5f0475b502b53cacaa7c05',
  },
];

// Minimal ABI — only the bits this page touches.
export const ABI = [
  {
    inputs: [{ name: 'track', type: 'bool' }],
    name: 'pay',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'total_raised',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unique_payers',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contract_balance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'arg0', type: 'address' }],
    name: 'payers',
    outputs: [
      {
        components: [
          { name: 'total', type: 'uint256' },
          { name: 'count', type: 'uint256' },
        ],
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
