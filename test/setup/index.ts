import {ethers, deployments, getUnnamedAccounts} from 'hardhat';
import {setupUsers} from '../utils/users';
import {setTimestamp} from '../utils/time';
import {nextSunday} from '../../utils/time';
import {MandalaToken} from '../../typechain';

export const CommitmentHashZero = '0x000000000000000000000000000000000000000000000000';

export const setup = deployments.createFixture(async () => {
	await deployments.fixture('MandalaToken');
	await setTimestamp(nextSunday());
	const contracts = {
		MandalaToken: <MandalaToken>await ethers.getContract('MandalaToken')
	};
	const users = await setupUsers(await getUnnamedAccounts(), contracts);

	return {
		...contracts,
		users
	};
});

export type Setup = Awaited<ReturnType<typeof setup>>;
