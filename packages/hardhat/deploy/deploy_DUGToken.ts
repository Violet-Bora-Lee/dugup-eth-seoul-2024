import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys the MyToken contract using the deployer account.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployDUGToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("DUGToken", {
    from: deployer,
    args: [], // MyToken constructor does not require any arguments
    log: true,
    autoMine: true,
  });

  const dugToken = await hre.ethers.getContract("DUGToken", deployer);
  console.log("MyToken (DUG Coin) deployed to:", dugToken.address);
};

export default deployDUGToken;
deployDUGToken.tags = ["DUGToken"];
