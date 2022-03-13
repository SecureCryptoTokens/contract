const { ethers, upgrades } = require('hardhat');

async function main () {
  try{    
    const Token1 = await ethers.getContractFactory('Token');
    console.log('Deploying Token...');
    const token1 = await upgrades.deployProxy(Token1, ["", 
    "Secure Crypto", 
    "SECR", 
    "1000000000000",
    "",
    "",
    [20,
    20,
    20],    
    [20,
    20,
    20]   
  ], { initializer: 'initialize' });
    await token1.deployed();
    console.log('Token deployed to:', token1.address);
  }catch(err){
    console.log(err);
  }
}

main();