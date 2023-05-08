(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ chainlist)
/* harmony export */ });
const chainlist = {
    coreDAO: {
        id: 1116,
        name: "Core DAO",
        network: "coredao",
        nativeCurrency: {
            decimals: 18,
            name: "Core DAO",
            symbol: "CORE"
        },
        rpcUrls: {
            public: {
                http: [
                    "https://rpc.coredao.org"
                ]
            },
            default: {
                http: [
                    "https://rpc.coredao.org"
                ]
            }
        },
        blockExplorers: {
            etherscan: {
                name: "CoredaoScan",
                url: "https://scan.coredao.org"
            },
            default: {
                name: "CoredaoScan",
                url: "https://scan.coredao.org"
            }
        },
        contracts: {
        }
    },
    bscChain: {
        id: 56,
        name: "BSC Chain",
        network: "bsc",
        nativeCurrency: {
            decimals: 18,
            name: "BSC Chain",
            symbol: "BSC"
        },
        rpcUrls: {
            public: {
                http: [
                    "https://bsc-dataseed1.binance.org/"
                ]
            },
            default: {
                http: [
                    "https://rpc.coredao.org"
                ]
            }
        },
        blockExplorers: {
            etherscan: {
                name: "BscScan",
                url: "https://bscscan.com"
            },
            default: {
                name: "BscScan",
                url: "https://bscscan.com"
            }
        },
        contracts: {
        }
    }
};


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6703);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8998);
/* harmony import */ var _config_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3640);
/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9867);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3326);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, _web3modal_react__WEBPACK_IMPORTED_MODULE_5__]);
([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, _web3modal_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const projectId = "c45abae0d5434194c80ee42de201f62c";
const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([
    _config_chains__WEBPACK_IMPORTED_MODULE_4__/* .chainlist.coreDAO */ .x.coreDAO,
    _config_chains__WEBPACK_IMPORTED_MODULE_4__/* .chainlist.bscChain */ .x.bscChain
], [
    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mProvider)({
        projectId
    })
]);
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({
    autoConnect: true,
    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mConnectors)({
        projectId,
        version: 1,
        chains
    }),
    provider
});
const ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.EthereumClient(wagmiClient, chains);
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {
                client: wagmiClient,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3modal_react__WEBPACK_IMPORTED_MODULE_5__.Web3Modal, {
                projectId: projectId,
                ethereumClient: ethereumClient
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3326:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6703:
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ 9867:
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ 8998:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9212));
module.exports = __webpack_exports__;

})();