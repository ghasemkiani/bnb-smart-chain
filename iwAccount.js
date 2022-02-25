//	@ghasemkiani/binance-smart-chain/iwAccount

import {cutil} from "@ghasemkiani/base";
import {iwAccount as iwAccountEth} from "@ghasemkiani/ethereum";
import {Account} from "./account.js";

const iwAccount = cutil.extend({}, iwAccountEth, {
	Account,
});

export {iwAccount};
