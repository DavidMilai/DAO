const { ethers } = require("hardhat"); 
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants/constants"); 



async function main() {
   const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
   const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
   await fakeNftMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNftMarketplace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    { 
      value: ethers.utils.parseEther("1"),
    }
  );
  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //FakeNFTMarketplace deployed to:  0x18921BD328dF2AbF2A879ea7Fa2F3A601483F4f1
  //CryptoDevsDAO deployed to:  0xb19Cb2eEd6C90e3E2b50BA466b2F3C085CA942f1