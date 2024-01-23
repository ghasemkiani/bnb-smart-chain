//	@ghasemkiani/bnb-smart-chain/account

import {cutil} from "@ghasemkiani/base";
import {Account as AccountEth} from "@ghasemkiani/ethereum";
import {Client} from "@ghasemkiani/bscscan-api";
import {util as utilBsc} from "./util.js";

class Account extends AccountEth {
	async toTransferToBinanceChain({toAddress, asset, amount}) {
		
	}
}
cutil.extend(Account.prototype, {
	defutil: utilBsc,
	defScan: Client,
});

export {Account};
