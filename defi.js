//	@ghasemkiani/binance-smart-chain/defi

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {util: utilBsc} = require("@ghasemkiani/binance-smart-chain/util");
const {DeFi: DeFiEth} = require("@ghasemkiani/ethereum/defi");
const {Client} = require("@ghasemkiani/bscscan-api/client");
const {iwToken: iwTokenBsc} = require("@ghasemkiani/binance-smart-chain/iwToken");

class DeFi extends cutil.mixin(DeFiEth, iwTokenBsc) {
}
cutil.extend(DeFi.prototype, {
	defutil: utilBsc,
	defScan: Client,
});

module.exports = {DeFi};
