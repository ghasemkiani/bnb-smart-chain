//	@ghasemkiani/binance-smart-chain/iwToken

import {cutil} from "@ghasemkiani/base";
import {iwToken as iwTokenEth} from "@ghasemkiani/ethereum";
import {Token} from "./token.js";

const iwToken = cutil.extend({}, iwTokenEth, {
	Token,
});

export {iwToken};
