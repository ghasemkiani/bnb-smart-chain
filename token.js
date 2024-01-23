//	@ghasemkiani/bnb-smart-chain/token

import {cutil} from "@ghasemkiani/base";
import {itoken} from "@ghasemkiani/ethereum";
import {Contract} from "./contract.js";

class Token extends cutil.mixin(Contract, itoken) {}

export {Token};
