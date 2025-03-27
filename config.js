module.exports = {
  RPC: "http://localhost:26657", //assuming cosmopark local
  USDC_DENOM: "ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81",
  WASM_PATH: "../artifacts/contract.wasm",
  CONTRACT_ADDRESS: "",
  FORCE_ADDRESS: null, //force override mimic address. Requires your testnet to have signature checking off.
};
 