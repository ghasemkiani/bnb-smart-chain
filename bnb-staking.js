//	@ghasemkiani/binance-smart-chain/bnb-staking

const {cutil} = require("@ghasemkiani/base/cutil");
const {Contract: ContractBsc} = require("@ghasemkiani/binance-smart-chain/contract");

class BnbStaking extends ContractBsc {
	async toGetUserInfo() {
		let address = this.account.address;
		let userInfo = await this.contract.methods.userInfo(address).call();
		return userInfo;
	}
	async toDeposit(amount = 0) {
		let value = this.util.toWei(amount);
		await this.toGetAbi();
		let data = this.contract.methods.deposit().encodeABI();
		return await this.toSendData(data, value);
	}
	async toWithdraw(amount = 0) {
		amount = this.util.toWei(amount);
		let value = 0;
		await this.toGetAbi();
		let data = this.contract.methods.withdraw(amount).encodeABI();
		return await this.toSendData(data, value);
	}
}
cutil.extend(BnbStaking.prototype, {
	address: "0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a",
});

module.exports = {BnbStaking};
