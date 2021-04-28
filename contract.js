//	@ghasemkiani/binance-smart-chain/contract

const {cutil} = require("@ghasemkiani/base/cutil");
const {Account} = require("@ghasemkiani/binance-smart-chain/account");
const {icontract} = require("@ghasemkiani/ethereum/icontract");

class Contract extends cutil.mixin(Account, icontract) {}

module.exports = {Contract};
