const path = require("path");
require("dotenv").config({path: "./.env"});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777, // This is already correct
      gas: 6721975,
      gasPrice: 20000000000
    },
    
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", AccountIndex)
      },
      network_id: 5777,
      gas: 6721975,
      gasPrice: 20000000000
    },
    
    // Updated testnet configurations
    sepolia: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, AccountIndex)
      },
      network_id: 11155111,
      gas: 6000000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    
    goerli: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, AccountIndex)
      },
      network_id: 5,
      gas: 6000000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    
    // Mainnet configuration (commented out for safety)
    // mainnet: {
    //   provider: function() {
    //     return new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, AccountIndex)
    //   },
    //   network_id: 1,
    //   gas: 6000000,
    //   gasPrice: 20000000000,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // }
  },
  
  // Mocha testing configuration
  mocha: {
    timeout: 100000
  },
  
  // Compiler configuration
  compilers: {
    solc: {
      version: "0.8.20",    // This is already correct for OpenZeppelin v5.3.0
    }
  },
  
  // Plugin configuration
  plugins: [
    'truffle-plugin-verify'
  ],
  
  // API keys for contract verification
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
};