const EthVoting = artifacts.require("EthVoting");

module.exports = function (deployer) {
  deployer.deploy(EthVoting);
};
