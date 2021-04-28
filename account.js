//	@ghasemkiani/binance-smart-chain/account

const {cutil} = require("@ghasemkiani/base/cutil");
const {Obj: Base} = require("@ghasemkiani/base/obj");
const {util: utilBsc} = require("@ghasemkiani/binance-smart-chain/util");
const {Account: AccountEth} = require("@ghasemkiani/ethereum/account");
const {Client} = require("@ghasemkiani/bscscan-api/client");

class Account extends AccountEth {
	async toTransferToBinanceChain({toAddress, asset, amount}) {
		
	}
}
cutil.extend(Account.prototype, {
	defutil: utilBsc,
	defScan: Client,
});

module.exports = {Account};
