const { ethers, upgrades } = require('hardhat');

async function main () {
  try{
    const BridgeBase = await ethers.getContractFactory('BridgeBase');
    console.log('Deploying BridgeBase...');
    const bridgeBase = await upgrades.deployProxy(BridgeBase, ["", ""], 
    { initializer: 'initialize' });
    await bridgeBase.deployed();
    console.log('BridgeBase deployed to:', bridgeBase.address);
  }catch(err){
    console.log(err);
  }
}

main();