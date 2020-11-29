//	@ghasemkiani/binance-smart-chain/bnb-staking

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Contract: ContractBsc} = require("@ghasemkiani/binance-smart-chain/contract");

class BnbStaking extends ContractBsc {
	async toDeposit(amount = 0) {
		let value = amount;
		await this.toGetAbi();
		let data = this.contract.methods.deposit().encodeABI();
		return await this.toSendData(data, value);
	}
}
cutil.extend(BnbStaking.prototype, {
	address: "0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a",
});

module.exports = {BnbStaking};
