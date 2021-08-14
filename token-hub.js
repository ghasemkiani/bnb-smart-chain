//	@ghasemkiani/binance-smart-chain/token-hub

import {cutil} from "@ghasemkiani/base";
import {util as utilBsc} from "./util.js";
import {Contract} from "./contract.js";

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

export {TokenHub};
