//	@ghasemkiani/binance-smart-chain/iwToken

const {cutil} = require("@ghasemkiani/base/cutil");
const {iwToken: iwTokenEth} = require("@ghasemkiani/ethereum/iwToken");
const {Token} = require("@ghasemkiani/binance-smart-chain/token");

const iwToken = cutil.extend({}, iwTokenEth, {
	Token,
});

module.exports = {iwToken};
