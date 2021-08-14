//	@ghasemkiani/binance-smart-chain/contract

import {cutil} from "@ghasemkiani/base";
import {icontract} from "@ghasemkiani/ethereum";
import {Account} from "./account.js";

class Contract extends cutil.mixin(Account, icontract) {}

export {Contract};
