import {expect} from './chai-setup';
import {ethers, deployments, getUnnamedAccounts} from 'hardhat';
import {setupUsers} from './utils/users';
import {BleepsDemo} from '../typechain';

const setup = deployments.createFixture(async () => {
	await deployments.fixture('BleepsDemo');
	const contracts = {
		BleepsDemo: <BleepsDemo>await ethers.getContract('BleepsDemo')
	};
	const users = await setupUsers(await getUnnamedAccounts(), contracts);
	return {
		...contracts,
		users
	};
});

describe('BleepsDemo', function () {
	it('works', async function () {
		const state = await setup();
		expect(state).to.be.not.null;
	});
});
