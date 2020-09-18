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
		"USDT": "0x55d398326f99059fF775485246999027B3197955",
		"BUSD": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
		"BTCB": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
		"ETH": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
		"BCH": "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
		"LTC": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
		"ANY": "0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa",
		"SWAP": "0x095418A82BC2439703b69fbE1210824F2247D77c",
		"BLP": "0xc2Eed0F5a0dc28cfa895084bC0a9B8B8279aE492",
		"DOT": "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
		"LINK": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
		"BURGER": "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
		"BAKE": "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
		"CREAM": "0xd4CB328A82bDf5f03eB737f37Fa6B370aef3e888",
		"FOR": "0x658A109C5900BC6d2357c87549B651670E5b0539",
		"TUNA": "0x40929FB2008c830731A3d972950bC13f70161c75",
		"SPARTA": "0xE4Ae305ebE1AbE663f261Bc00534067C80ad677C",
		"ANKR": "0xf307910A4c7bbc79691fD374889b36d8531B08e3",
	},
});

const util = new Util();

module.exports = {Util, util};
