import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const {deployments, getNamedAccounts} = hre;
	const {deploy} = deployments;
	const useProxy = !hre.network.live;

	const {deployer} = await getNamedAccounts();

	await deploy('BleepsDemo', {
		from: deployer,
		args: [],
		proxy: useProxy,
		log: true,
		autoMine: true // speed up deployment on local network (ganache, hardhat), no effect on live networks
	});
};
export default func;
func.tags = ['BleepsDemo', 'BleepsDemo_deploy'];
