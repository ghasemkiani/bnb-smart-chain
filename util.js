//	@ghasemkiani/binance-smart-chain/util

const {cutil} = require("@ghasemkiani/base/cutil");
const {Obj: Base} = require("@ghasemkiani/base/obj");
const {Util: EthUtil} = require("@ghasemkiani/ethereum/util");

class Util extends EthUtil {
}
cutil.extend(Util.prototype, {
	tok: "BNB",
	DEFAULT_URL: "https://bsc-dataseed1.binance.org:443",
	NODE_KEY: "BSC_NODE",
	contracts: {
		"CROSS_CHAIN_CONTRACT_ADDR": "0x0000000000000000000000000000000000002000",
		"GOV_HUB_ADDR": "0x0000000000000000000000000000000000001007",
		"INCENTIVIZE_ADDR": "0x0000000000000000000000000000000000001005",
		"LIGHT_CLIENT_ADDR": "0x0000000000000000000000000000000000001003",
		"RELAYERHUB_CONTRACT_ADDR": "0x0000000000000000000000000000000000001006",
		"SLASH_CONTRACT_ADDR": "0x0000000000000000000000000000000000001001",
		"SYSTEM_REWARD_ADDR": "0x0000000000000000000000000000000000001002",
		"TOKEN_HUB_ADDR": "0x0000000000000000000000000000000000001004",
		"TOKEN_MANAGER_ADDR": "0x0000000000000000000000000000000000001008",
		"VALIDATOR_CONTRACT_ADDR": "0x0000000000000000000000000000000000001000",
		
		"WBNB": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
		"USDT": "0x55d398326f99059fF775485246999027B3197955",
		"BUSD": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
		"BTCB": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
		"ETH": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
		"EOS": "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
		"BCH": "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
		"LTC": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
		"CAKE": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
		"DRUGS": "0xfD26889cd6454D8751562f1c0FcF88b18B46F7B7",
		"SYRUP": "0x009cf7bc57584b7998236eff51b98a168dcea9b0",
		"SWAP": "0x83034714666B0EB2209Aafc1B1CBB2AB9c6100Db",
		"SWAP": "0x095418A82BC2439703b69fbE1210824F2247D77c",
		"ANY": "0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa",
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
		"XVS": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
		"FREE": "0x12e34cdf6a031a10fe241864c32fb03a4fdad739",
		"BEER": "0xbB8DB5e17BBe9c90Da8E3445E335b82d7cc53575",
		"INNBC": "0xdF1F0026374d4BCc490BE5E316963Cf6Df2FfF19",
		"STORM": "0xc0E7Ba97E9C802656C2B3eA8f27FAD6E60f0a795",
		"ALPHA": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
		"XRP": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
		"ATOM": "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
		"YFI": "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
		"UNI": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
		"FIL": "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
		"INJ": "0xa2b726b1145a4773f68593cf171187d8ebe4d495",
		"USDC": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
		"SXP": "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
		"CTK": "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
		"YFII": "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
		"DAI": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
		"XTZ": "0x16939ef78684453bfDFb47825F8a5F714f12623a",
		"METH": "0xfcb5DF42e06A39E233dc707bb3a80311eFD11576",
		"JNTR/b": "0x78e1936f065Fd4082387622878C7d11c9f05ECF4",
		"BAMBOO": "0x6a1CD7377C7b2FD42151C93206AF5089b4658372",
		"FROG": "0xC808592e5b4585F982bc728d63b227634bc007a4",
		"STAX": "0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4",
		"KP3RB": "0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81",
		"COMP": "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
		"PSG": "0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1",
		"PIZZA": "0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB",
		
		"PEACH": "0xaCd6b5f76Db153FB45EAE6D5be5BDbd45d1b2A8C",
		"MILK": "0x8E9f5173e16Ff93F81579d73A7f9723324d6B6aF",
		"crXRP": "0xAa46e2c21B7763a73DB48e9b318899253E66e20C",
		"PROM": "0xaF53d56ff99f1322515E54FdDE93FF8b3b7DAFd5",
		"BFI": "0xAFa4f3D72f0803B50C99663B3E90806d9D290770",
		"BKIT": "0x17d68Ba1cA7E903cdb17A4a4EA5BDC475a0A1466",
		"RBASE": "0xbFE7e0e61c4AC4dF7C92349DEF0C1148d3f9e360",
		// "CAKE": "0x7d813C828b0d1083Bb08b38841C45304A920060b",
		"JULb": "0x32dFFc3fE8E3EF3571bF8a72c0d0015C5373f41D",
		"BNX": "0xF7682a5d3e587652ab770e8c98eB2Fd786022b7B",
		"THUGS": "0xE10e9822A5de22F8761919310DDA35CD997d63c0",
		"DEGEN": "0xb37B51C5C4C934468B49b55FeC15e76c9b538fF3",
		"TWT": "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
		// "USDT": "0x097E428494F5373F22679E68D1a1e50d0A507966",
		// "BTCB": "0x9621579a532C9052B1F3CE8e3022716120Ba4187",
		"KIWI": "0x28db020a1c976167cDe0d2B78221ED4659d9ec0a",
		"ADA": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
		"Saturn": "0xDB0DEc74E23394D1883E2Ee859dB98D6fE357695",
		"LFI": "0x2282d18c5232Ac20A41c0a0709367BecaDe2F751",
		"STR": "0x17028c42a8BB4011f28e975c520A72A0e939Eee1",
		"PHO": "0xb9784C1633ef3b839563B988c323798634714368",
		"DEGO": "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
		"NN": "0x897fE07d613037c206429628611A2665E18C657d",
		"MARS": "0x7e440598f8f63FCCd9B12A606263A02A06cFb16a",
		"YFMR": "0x9B3Ed616c4FF49023A89f4dA8B85CcE22C0f8Cb3",
		"anyLINK": "0x3af577F9D8c86ae8DBCBF51FE9836c9DF825759d",
		"anyDAI": "0x1dC56F2705Ff2983f31fb5964CC3E19749A7CBA7",
		"anyYFI": "0x9883Ae441105f815b472517389B979F031B5c87e",
		"anyOMG": "0xe6358c1D7A91915abBa46D9855Bd6418898fc091",
		"anyCOMP": "0x2EDe13880e11B19B7D6113a86Ac7aC84aC651042",
		"anyETH": "0x6F817a0cE8F7640Add3bC0c1C2298635043c2423",
		"anyUSDT": "0xB46d67fB63770052A07d5b7C14Ed858A8c90f825",
		"anyFSN": "0x4f6318e97011fE21fDfce3fFCf868d44e5f6994A",
		"BBTC": "0x43E428c2420202c86213AeF77cA1F7f144E0AAE7",
		"BZAR": "0x3791cC676C34F82e9438Ed9752eC5dBC983a0BBc",
		// "LFI": "0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640",
		// "DEGEN": "0xc410b2C84ff954b5eE3dd1b0a0d3B4A8436E6E55",
		"JNTR": "0x5f2Caa99Fc378248Ac02CbbAaC27e3Fa155Ed2C4",
		"BSC": "0x17bc015607Fdf93e7C949e9Ca22f96907cFBeF88",
		
		"XMPT": "0x20118F8e38494EF7aEAd4B1095Fb0f1F309A4A70",
		"KIT1": "0x595b9C47F795CF996D10baAfADA94E51375e5e11",
		"BFMOON": "0x0eb13e07161F846F1B1c3443C3Be32297cC10703",
		"anyUNI": "0x99C5A2Fcc97b59FE6D0B56e21e72B002F644123F",
		"RUG_OCT01": "0x7fC1236aBfb10d5325eFc513128023EB83306642",
		"IOTX": "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
		"anyBTC": "0x54261774905f3e6E9718f2ABb10ed6555cae308a",
		"YFN": "0x185dF0EFfA412C4a4Ac0ea6831aAdEAC614613cC",
		"FCBTA": "0x0bED697011c89E6fB2E7156FF7e606B080bA1E3b",
		"CLT": "0xE35Ac677fAa9f0A712EFa5b7d3053246F02669F0",
		
		"ht": "0xD5ee7aB08487031127d9dABa64AD7eaF8945a1C6",
		"Rocket": "0xcc30F06AD0544B070083c46032E9aFbD8386D5d1",
		"UUU": "0x027Bb276B75FC39E4f81478f4Ac3ee689BeF7202",
		
		"mTSLA": "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3",
		"mAMZN": "0x3947B992DC0147D2D89dF0392213781b04B25075",
		"mNFLX": "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc",
		"mGOOGL": "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f",
		"UST": "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
		
		"bROOBEE": "0xE64F5Cb844946C1F102Bd25bBD87a5aB4aE89Fbe",
		"bOPEN": "0xF35262a9d427F96d2437379eF090db986eaE5d42",
		"CHS": "0xaDD8A06fd58761A5047426e160B2B88AD3B9D464",
		"BIFI": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
		"EGG": "0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
		"TOAD": "0x22D67B3f6aCdf8c0682f6FB20590E902DeEA6BA1",
		"TASTE": "0xF34b702924751434Bdf83Acc2766947d4c38fBEE",
		"BBOO": "0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68",
		"DGNZ": "0xb68a67048596502A8B88f1C10ABFF4fA99dfEc71",
		"BOR": "0x92D7756c60dcfD4c689290E8A9F4d263b3b32241",
		"BUNNY": "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
		"XUSD": "0xE4B16FE631CC2c51f27130a1732B6E9E222f6d01",
		"REX": "0x9bCcaD20c95233bfFb356D69482560120060827a",
		"WOOL": "0x02E3eFcc9d912fbf2bf33D39F43427b56512C9B4",
		"BTD": "0xD1102332a213E21faF78B69C03572031F3552c33",
		"HONEY": "0x1B0CF55E3F9f82B9D24dEaa4E6CD7239d41F4657",
		"CUPCAKE": "0x04cEA7111eefaa1a88819e4CD18fc70462Cc05CA",
		"Ramen": "0x4F47A0d15c1E53F3d94c069C7D16977c29F9CB6B",
		"SLME": "0x4fCfA6cC8914ab455B5b33Df916d90BFe70b6AB1",
		"ysH": "0x01bDCC22CE27F089977d155eB55B3FE235e284Ef",
		"CANDY": "0x0c9a6AC31Ec0A7bA26F22A18256B1c71a5691D63",
		"DITTO": "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
		"WORLD": "0x31FFbe9bf84b4d9d02cd40eCcAB4Af1E2877Bbc6",
		"NANA": "0x355ad7aBB7bdD53beC94c068F3ABbCB2E2571d0D",
		"SPAZ": "0x37109a51e712471Bd2C72d8D70718627e7fF0032",
		"NUGGET": "0x3C51acebd9e5DBCa970204707A9049912bE1bE44",
		"Rose": "0x459AF65245d0E40eFa29c95d394c1E90c69c22B9",
		"yGOAT": "0x47fF6511939AB379D7756B003F61010b9EAb3077",
		"VAI": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
		"KIMOCHI": "0x4dA95bd392811897cde899d25FACe253a424BfD4",
		"BSCX": "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
		"AQUA": "0x61aD00BF78EAC98158A5f83144B245F91C2e95BC",
		"DODO": "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
		"BREW": "0x790Be81C3cA0e53974bE2688cDb954732C9862e1",
		"KEBAB": "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
		"VIKING": "0x896eDE222D3f7f3414e136a2791BDB08AAa25Ce0",
		"TACO": "0x9066e87Bac891409D690cfEfA41379b34af06391",
		"DONUT": "0x9359732B2821585F9CFC00e53Ce9CDc5a8B5CCe0",
		"yPANDA": "0x9806aec346064183b5cE441313231DFf89811f7A",
		"WEED": "0x9E7942a24be24B18A56CEac7bA9926C5FBFc4E27",
		"AUTO": "0xa184088a740c695E156F91f5cC086a06bb78b827",
		"ORAI": "0xA325Ad6D9c92B55A3Fc5aD7e412B1518F96441C0",
		"LASAGNA": "0xA3b1012108Baf7d9a42E93BbfbBb0251c9576E70",
		"BR34P": "0xa86d305A36cDB815af991834B46aD3d7FbB38523",
		"BAND": "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
		"LOTUS": "0xAF05B0F5cf144A767aE466d7D85Fe2CDa244d0a2",
		"DYNO": "0xBAC605f2dEF5271a92F1aB4bA4d8b1B3764BaCB9",
		"BFI": "0xbE609EAcbFca10F6E5504D39E3B113F808389056",
		"ONE": "0xbF95B7730EaBacFee75382cCbf09cd81a881F8A6",
		"BULL": "0xC027df92684407b5aB3ab768c46F352323e94c5b",
		"TRIP": "0xC7D142fB276042d99b49a5fE84c8BbD484Dbeca8",
		"CROW": "0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E",
		"MEOWTH": "0xE561479bEbEE0e606c19bB1973Fc4761613e3C42",
		"GOAT": "0xF189009FDe9be86afFEcA5dbf7F3d232357BC5fb",
		"REEF": "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
		"Guava": "0xf3997A83ebc7d70071947a0573FB051Cab63FcbC",
		"ICE": "0xF6a90D441f2B99AC89761713d6245461dD3495E2",
		"MOCHI": "0x055daB90880613a556a5ae2903B2682f8A5b8d27",
		"sBDO": "0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740",
		"VLAD": "0x279d41f3f78fe5C1f0BA41aE963d6E545113C973",
		"SALT": "0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4",
		"IST": "0x39C3F3d8896069787E455753164721eC6DF4662e",
		"OXS": "0x39e2A8f8C11521743F54D6bC347a19a55C5FFC4c",
		"OXB": "0x3fd5B5746315E3F8d43A46b09c826a001EBb977d",
		"TSUKI": "0x3Fd9e7041C45622e8026199A46f763C9807f66f3",
		"BNB1000": "0x40A91AC080744B42C80F98AF48873fa7AF97A286",
		"SMOKE": "0x5239fE1A8c0b6ece6AD6009D15315e02B1E7c4Ea",
		"GADOSHI": "0x619b20C554Df4f915173a0f4F34C82e6c2CD944D",
		"EXF": "0x6306e883493824Ccf606D90E25F68a28e47b98a3",
		"MSC": "0x8C784C49097Dcc637b93232e15810D53871992BF",
		"CT": "0x9130Ae8e2826947cf8B6a06333890b4E8A1667c7",
		"THOR": "0x91a92482526EB04E60E4372A919B74027f1ad935",
		"SATV": "0xb821A7EFFa2b85B72947A830F43ddd0397E41A3A",
		"RAKE": "0xbDa8D53fe0F164915b46cd2EcfFD94254b6086a2",
		"UBU": "0xd2DdFba7bb12f6e70c2AAB6B6bf9EdaEf42ed22F",
		"KIND": "0xE8148De8c8c3441257Ce3A093746B37c569a6D3E",
		"yIMPS": "0xF776C730A2b32192B5d8c69b196A6d7628e3cD33",
		"BDO": "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
		"ALEPH": "0x82D2f8E02Afb160Dd5A480a617692e62de9038C4",
		"MDO": "0x35e869B7456462b81cdB5e6e42434bD27f3F788c",
		"SOUPS": "0x69F27E70E820197A6e495219D9aC34C8C6dA7EeE",
		"UNFI": "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
		"HARD": "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
		"YBURN": "0x09CE0504de344dAdB2E28fCd46F2566Ae6908Fa8",
		"GAMBIT": "0x0d9699bF75752A4bf9754b7318c5c365da643f51",
		"YES": "0x164Fa1e6CF4125769df68245e942ea2F456aD47C",
		"SPG": "0x3aabCf53A1930A42E18D938C019E83Ebee50a849",
		"JulD": "0x5A41F637C3f7553dBa6dDC2D3cA92641096577ea",
		"BDAY": "0x645748Fa7e54A818310aFDad898410bcB54FC4E0",
		"DGM": "0x78A470740Ec26bA65F4d1065E0dfab9C8d155ECd",
		"SOAK": "0x849233FF1aea15D80EF658B2871664C9Ca994063",
		"NUTS": "0x8893D5fA71389673C5c4b9b3cb4EE1ba71207556",
		"gROOT": "0x8B571fE684133aCA1E926bEB86cb545E549C832D",
		"PROPEL": "0x9B44Df3318972bE845d83f961735609137C4C23c",
		"TULIP": "0xa2df0D085da2664F5270A3f7979d7026cd21ED12",
		"FEG": "0xacFC95585D80Ab62f67A14C566C1b7a49Fe91167",
		"LYPTUS": "0xBA26397cdFF25F0D26E815d218Ef3C77609ae7f1",
		"SHEMALE": "0x021443316C1a86b7bADb537F948bE82de4F67e69",
		"WYNAUT": "0x067a5ad3f0f91AcF512fFE66Ea77f37b4DcaaF18",
		"bSRK": "0x14b1166aB53A237c8cEaeE2BBc4BbCa200cb7da8",
		"COOKIE": "0x266608075fBC9Db7D7FB1932C95f77f6d4c6F164",
		"rvel": "0x33c2030362Bd574CfBCed5857D0e4e4AeA3E98C6",
		"QUAI": "0x3B9131CC0026256c01513373Ef5607b2eD4fA3fd",
		"MC": "0x523Ab90ff20b829F44Da29F38FBD2C996a972d5C",
		"ABS": "0x6c5FE6e99D2484db7E4BF34F365ABA42d0E4dC20",
		"WAULT": "0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9",
		"CHIk": "0x893411cAcf9E62A744D9fc0f72F7fb1b1373B6cD",
		"hSOV": "0xAACb422F5F60978bFF9c716CF38cd56d1E4Ded77",
		"LIT": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
		"BTS": "0xc2e1acef50aE55661855E8dcB72adB182A3cC259",
		"BOTS": "0xDcFd0F840B3a26F0FB4FB0c2fCb6a9033FEbe77B",
		"CZD": "0xEDB4C8396DEB55ECE0aac6BaaA273B6543F76A7d",
		"ACS": "0x4197C6EF3879a08cD51e5560da5064B773aa1d29",
		"NYAN": "0x45b07DF4FE00202dd31F2D95f6C06f3A029625D5",
		"WOW": "0x4DA996C5Fe84755C80e108cf96Fe705174c5e36A",
		"BEEZ": "0xD0e924FC4783d2C66932475E9706dbf357017539",
		"LION": "0xF25287989d9636BFDa6fFD49dF96258F465e4405",
		"bwJUP": "0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7",
		"MILK": "0x26aB5131DD666B4179aC909926ee3C18eE05E470",
		"SOUP": "0x94F559aE621F1c810F31a6a620Ad7376776fe09E",
		"D100": "0x9d8AAC497A4b8fe697dd63101d793F0C6A6EEbB6",
		"SFP": "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
		"XWIN": "0xd88ca08d8eec1E9E09562213Ae83A7853ebB5d28",
		"TNT": "0xfCECb86e3aB242B6761C1eC00F272d62dEf19F0c",
		"OAT": "0xFF9D1A4Bc6cfD3D6b9E5217F01571340E4A5FF1E",
		"TPT": "0xECa41281c24451168a37211F0bc2b8645AF45092",
		"DOGE": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
		"ZEE": "0x44754455564474A89358B2C2265883DF993b12F0",
		
		"DFD": "0x9899a98b222fCb2f3dbee7dF45d943093a4ff9ff",
		"ALPACA": "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
		"τBTC": "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c",
		"SWINGBY": "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739",
		"XED": "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f",
		"HAKKA": "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",
		"CGG": "0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2",
		"MIX": "0xB67754f5b4C704A24d2db68e661b2875a4dDD197",
		"SUTER": "0x4CfbBdfBd5BF0814472fF35C72717Bd095ADa055",
		"HZN": "0xC0eFf7749b125444953ef89682201Fb8c6A917CD",
		"ALPA": "0xc5E6689C9c8B02be7C49912Ef19e79cF24977f03",
		"PERL": "0x0F9E4D49f25de22c2202aF916B681FBB3790497B",
		"TLM": "0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
		"JGN": "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75",
		"EPS": "0xA7f552078dcC247C2684336020c03648500C6d9F",
		"ARPA": "0x6F769E65c14Ebd1f68817F5f1DcDb61Cfa2D6f7e",
		"ITAM": "0x04C747b40Be4D535fC83D09939fb0f626F32800B",
		"BONDLY": "0x96058f8C3e16576D9BD68766f3836d9A33158f89",
		"TKO": "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
		"APYS": "0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7",
		"HOO": "0xE1d1F66215998786110Ba0102ef558b22224C016",
		"ODDZ": "0xCD40F2670CF58720b694968698A5514e924F742d",
		"EASY": "0x7C17c8bED8d14bAccE824D020f994F4880D6Ab3B",
		"NRV": "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
		"DEGO": "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
		"GUM": "0xc53708664b99DF348dd27C3Ac0759d2DA9c40462",
		"pBTC": "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C",
		"DFT": "0x42712dF5009c20fee340B245b510c0395896cF6e",
		"SWTH": "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
		"LIEN": "0x5d684ADaf3FcFe9CFb5ceDe3abf02F0Cdd1012E3",
		"ZIL": "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
		"pCWS": "0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd",
		"bBadger": "0x1F7216fdB338247512Ec99715587bb97BBf96eae",
		"bDIGG": "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA",
		"LTO": "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd",
		"MIR": "0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9",
		"TRADE": "0x7af173F350D916358AF3e218Bdf2178494Beb748",
		"DUSK": "0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C",
		"BIFI": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
		"TXL": "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5",
		"COS": "0x96Dd399F9c3AFda1F194182F71600F1B65946501",
		"BUNNY": "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
		"ALICE": "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
		"FOR": "0x658A109C5900BC6d2357c87549B651670E5b0539",
		"BUX": "0x211FfbE424b90e25a15531ca322adF1559779E45",
		"NULS": "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B",
		"BELT": "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
		"RAMP": "0x8519EA49c997f50cefFa444d240fB655e89248Aa",
		"BFI": "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
		"DEXE": "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
		"BEL": "0x8443f091997f06a61670B735ED92734F5628692F",
		"TPT": "0xECa41281c24451168a37211F0bc2b8645AF45092",
		"WATCH": "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0",
		"xMARK": "0x26A5dFab467d4f58fB266648CAe769503CEC9580",
		"DITTO": "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
	},
	tokenDecimals: {
		"BTCB": 18,
		"BUSD": 6,
		"DOGE": 8,
	},
	contractProxies: {
		"0xbA2aE424d960c26247Dd6c32edC70B295c744C43": "0xBA5Fe23f8a3a24BEd3236F05F2FcF35fd0BF0B5C",
		"0x7C17c8bED8d14bAccE824D020f994F4880D6Ab3B": "0xBA5Fe23f8a3a24BEd3236F05F2FcF35fd0BF0B5C",
	},
});

const util = new Util();

module.exports = {Util, util};
