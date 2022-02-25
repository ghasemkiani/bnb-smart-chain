//	@ghasemkiani/binance-smart-chain/iwContract

import {cutil} from "@ghasemkiani/base";
import {iwContract as iwContractEth} from "@ghasemkiani/ethereum";
import {Contract} from "./contract.js";

const iwContract = cutil.extend({}, iwContractEth, {
	Contract,
});

export {iwContract};
