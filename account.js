//	@ghasemkiani/binance-smart-chain/account

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Base} = require("@ghasemkiani/commonbase/base");
const {util: bscutil} = require("@ghasemkiani/binance-smart-chain/util");
const {Account: EthAccount} = require("@ghasemkiani/ethereum/account");

class Account extends EthAccount {
}
cutil.extend(Account.prototype, {
	defutil: bscutil,
	tok: "BNB",
});

module.exports = {Account};
