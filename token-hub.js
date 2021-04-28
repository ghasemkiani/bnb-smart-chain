//	@ghasemkiani/binance-smart-chain/token-hub

const {cutil} = require("@ghasemkiani/base/cutil");
const {util: utilBsc} = require("@ghasemkiani/binance-smart-chain/util");
const {Contract} = require("@ghasemkiani/binance-smart-chain/contract");

class TokenHub extends Contract {
	async toGetBoundBep2Symbol(contractAddr) {
		let boundBep2Symbol = await this.contract.methods.getBoundBep2Symbol(contractAddr).call();
		return boundBep2Symbol;
	}
	async toGetBoundContract(bep2Symbol) {
		let contractAddr = await this.contract.methods.getBoundContract(bep2Symbol).call();
		return contractAddr;
	}
	async toGetMiniRelayFee() {
		let miniRelayFee = await this.contract.methods.getMiniRelayFee().call();
		return miniRelayFee;
	}
}
cutil.extend(TokenHub.prototype, {
	address: utilBsc.contracts.TOKEN_HUB_ADDR,
});

module.exports = {TokenHub};
