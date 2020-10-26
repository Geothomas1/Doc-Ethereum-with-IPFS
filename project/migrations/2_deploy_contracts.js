const ihash = artifacts.require("ihash");

module.exports = function(deployer) {
  deployer.deploy(ihash);
};
