//	@ghasemkiani/bnb-smart-chain/defi

import {cutil} from "@ghasemkiani/base";
import {DeFi as DeFiEth} from "@ghasemkiani/ethereum";
import {Client} from "@ghasemkiani/bscscan-api";
import {util as utilBsc} from "./util.js";
import {iwAccount as iwAccountBsc} from "./iwAccount.js";
import {iwContract as iwContractBsc} from "./iwContract.js";
import {iwToken as iwTokenBsc} from "./iwToken.js";

class DeFi extends cutil.mixin(DeFiEth, iwAccountBsc, iwContractBsc, iwTokenBsc) {
}
cutil.extend(DeFi.prototype, {
	defutil: utilBsc,
	defScan: Client,
});

export {DeFi};
