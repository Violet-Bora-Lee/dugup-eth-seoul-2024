import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys the CodeToNFT contract using the deployer account.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployCodeToNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // The address of the deployed DUG coin contract
  const dugCoinAddress = "0xc081A4434729b7dd431DEc627fE32B387f383bE7";

  await deploy("CodeToNFT", {
    from: deployer,
    // Constructor arguments: DUG coin contract address
    args: [dugCoinAddress],
    log: true,
    autoMine: true,
  });

  // Get the deployed CodeToNFT contract to interact with it after deploying.
  const codeToNFT = await hre.ethers.getContract("CodeToNFT", deployer);
  console.log("CodeToNFT deployed to:", codeToNFT.address);
};

export default deployCodeToNFT;
deployCodeToNFT.tags = ["CodeToNFT"];
