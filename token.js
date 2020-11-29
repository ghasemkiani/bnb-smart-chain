//	@ghasemkiani/binance-smart-chain/token

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Contract} = require("@ghasemkiani/binance-smart-chain/contract");
const {itoken} = require("@ghasemkiani/ethereum/itoken");

class Token extends cutil.mixin(Contract, itoken) {}

module.exports = {Token};
