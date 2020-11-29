//	@ghasemkiani/binance-smart-chain/account

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Base} = require("@ghasemkiani/commonbase/base");
const {util: utilBsc} = require("@ghasemkiani/binance-smart-chain/util");
const {Account: AccountEth} = require("@ghasemkiani/ethereum/account");
const {Client} = require("@ghasemkiani/bscscan-api/client");

class Account extends AccountEth {
}
cutil.extend(Account.prototype, {
	defutil: utilBsc,
	defScan: Client,
});

module.exports = {Account};
