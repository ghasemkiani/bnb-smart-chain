//	@ghasemkiani/binance-smart-chain/token-hub

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Contract} = require("@ghasemkiani/binance-smart-chain/contract");

class TokenHub extends Contract {
	//
}
cutil.extend(TokenHub.prototype, {
	address: "0x0000000000000000000000000000000000001004",
});

module.exports = {TokenHub};
