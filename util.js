//	@ghasemkiani/binance-smart-chain/util

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Base} = require("@ghasemkiani/commonbase/base");
const {Util: EthUtil} = require("@ghasemkiani/ethereum/util");

class Util extends EthUtil {
}
cutil.extend(Util.prototype, {
	DEFAULT_URL: "https://bsc-dataseed1.binance.org:443",
	NODE_KEY: "BSC_NODE",
	contracts: {
		"USDT": "0x55d398326f99059ff775485246999027b3197955",
		"BUSD": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
		"BTCB": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
		"ETH": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
		"LTC": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
		"ANY": "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa",
		"SWAP": "0x095418a82bc2439703b69fbe1210824f2247d77c",
		"BLP": "0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492",
		"DOT": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
		"LINK": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
		"BURGER": "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
		"BAKE": "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
		"CREAM": "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888",
		"FOR": "0x658a109c5900bc6d2357c87549b651670e5b0539",
		"TUNA": "0x40929fb2008c830731a3d972950bc13f70161c75",
	},
});

const util = new Util();

module.exports = {Util, util};
