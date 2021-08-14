//	@ghasemkiani/binance-smart-chain/defi

import {cutil} from "@ghasemkiani/base";
import {DeFi as DeFiEth} from "@ghasemkiani/ethereum";
import {Client} from "@ghasemkiani/bscscan-api";
import {util as utilBsc} from "./util.js";
import {iwToken as iwTokenBsc} from "./iwToken.js";

class DeFi extends cutil.mixin(DeFiEth, iwTokenBsc) {
}
cutil.extend(DeFi.prototype, {
	defutil: utilBsc,
	defScan: Client,
});

export {DeFi};
