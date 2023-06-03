/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/context.tsx":
/*!************************************!*\
  !*** ./src/components/context.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyContext\": () => (/* binding */ MyContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MyContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({\n    data: \"\",\n    setData: ()=>{}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFPbkIsTUFBTUMsMEJBQVlELDBEQUFtQixDQUFpQjtJQUMzREcsTUFBTTtJQUNOQyxTQUFTLElBQU0sQ0FBQztBQUNsQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWdub3JlLWJyaWRnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRleHQudHN4PzFiYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgTXlDb250ZXh0VmFsdWUge1xuICBkYXRhOiBhbnk7XG4gIHNldERhdGE6IChkYXRhOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNeUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE15Q29udGV4dFZhbHVlPih7XG4gIGRhdGE6IFwiXCIsXG4gIHNldERhdGE6ICgpID0+IHt9LFxufSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNeUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGF0YSIsInNldERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/context.tsx\n");

/***/ }),

/***/ "./src/config/constants/pools.tsx":
/*!****************************************!*\
  !*** ./src/config/constants/pools.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ \"./src/config/constants/tokens.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/config/constants/types.tsx\");\n\n\nconst pools = [\n    {\n        poolId: 1,\n        name: \"4TOKEN-BNB LP\",\n        token: _tokens__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fourtoken,\n        locked: false,\n        stakingToken: {\n            56: \"0x9673f9fe264eD0af19ED18d1aC848F384f8fB5F9\"\n        },\n        earningToken: {\n            56: \"0x61B83eDF87Ea662C695439A807c386455c9E797C\"\n        },\n        contractAddress: {\n            56: \"0x640451baEa0BabDE2f3636FFCAfC0B7318e986d9\"\n        },\n        isLp: true,\n        poolCategory: _types__WEBPACK_IMPORTED_MODULE_1__.PoolCategory.NO_LOCK,\n        harvest: true,\n        sortOrder: 1,\n        isFinished: false\n    },\n    {\n        poolId: 2,\n        name: \"4TOKEN\",\n        token: _tokens__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fourtoken,\n        locked: true,\n        stakingToken: {\n            56: \"0x61B83eDF87Ea662C695439A807c386455c9E797C\"\n        },\n        earningToken: {\n            56: \"0x61B83eDF87Ea662C695439A807c386455c9E797C\"\n        },\n        contractAddress: {\n            56: \"0x0A971eBC2332D803285c04AC9D0d80Af9009D4B8\"\n        },\n        isLp: false,\n        poolCategory: _types__WEBPACK_IMPORTED_MODULE_1__.PoolCategory[\"15D_LOCK\"],\n        harvest: true,\n        sortOrder: 1,\n        isFinished: false\n    }\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pools);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2NvbnN0YW50cy9wb29scy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBQ3FCO0FBRW5ELE1BQU1FLFFBQXNCO0lBQzFCO1FBQ0VDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxPQUFPTCx5REFBZ0I7UUFDdkJPLFFBQVEsS0FBSztRQUNiQyxjQUFjO1lBQ1osSUFBSTtRQUNOO1FBQ0FDLGNBQWM7WUFDWixJQUFJO1FBQ047UUFDQUMsaUJBQWlCO1lBQ2YsSUFBSTtRQUNOO1FBQ0FDLE1BQU0sSUFBSTtRQUNWQyxjQUFjWCx3REFBb0I7UUFDbENhLFNBQVMsSUFBSTtRQUNiQyxXQUFXO1FBQ1hDLFlBQVksS0FBSztJQUNuQjtJQUNBO1FBQ0ViLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxPQUFPTCx5REFBZ0I7UUFDdkJPLFFBQVEsSUFBSTtRQUNaQyxjQUFjO1lBQ1osSUFBSTtRQUNOO1FBQ0FDLGNBQWM7WUFDWixJQUFJO1FBQ047UUFDQUMsaUJBQWlCO1lBQ2YsSUFBSTtRQUNOO1FBQ0FDLE1BQU0sS0FBSztRQUNYQyxjQUFjWCw0REFBd0I7UUFDdENhLFNBQVMsSUFBSTtRQUNiQyxXQUFXO1FBQ1hDLFlBQVksS0FBSztJQUNuQjtDQXFCRDtBQUVELGlFQUFlZCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWdub3JlLWJyaWRnZS8uL3NyYy9jb25maWcvY29uc3RhbnRzL3Bvb2xzLnRzeD80NzMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2tlbnMgZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgeyBQb29sQ29uZmlnLCBQb29sQ2F0ZWdvcnkgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBwb29sczogUG9vbENvbmZpZ1tdID0gW1xuICB7XG4gICAgcG9vbElkOiAxLFxuICAgIG5hbWU6IFwiNFRPS0VOLUJOQiBMUFwiLFxuICAgIHRva2VuOiB0b2tlbnMuZm91cnRva2VuLFxuICAgIGxvY2tlZDogZmFsc2UsXG4gICAgc3Rha2luZ1Rva2VuOiB7XG4gICAgICA1NjogXCIweDk2NzNmOWZlMjY0ZUQwYWYxOUVEMThkMWFDODQ4RjM4NGY4ZkI1RjlcIixcbiAgICB9LFxuICAgIGVhcm5pbmdUb2tlbjoge1xuICAgICAgNTY6IFwiMHg2MUI4M2VERjg3RWE2NjJDNjk1NDM5QTgwN2MzODY0NTVjOUU3OTdDXCIsXG4gICAgfSxcbiAgICBjb250cmFjdEFkZHJlc3M6IHtcbiAgICAgIDU2OiBcIjB4NjQwNDUxYmFFYTBCYWJERTJmMzYzNkZGQ0FmQzBCNzMxOGU5ODZkOVwiLFxuICAgIH0sXG4gICAgaXNMcDogdHJ1ZSxcbiAgICBwb29sQ2F0ZWdvcnk6IFBvb2xDYXRlZ29yeS5OT19MT0NLLFxuICAgIGhhcnZlc3Q6IHRydWUsXG4gICAgc29ydE9yZGVyOiAxLFxuICAgIGlzRmluaXNoZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgcG9vbElkOiAyLFxuICAgIG5hbWU6IFwiNFRPS0VOXCIsXG4gICAgdG9rZW46IHRva2Vucy5mb3VydG9rZW4sXG4gICAgbG9ja2VkOiB0cnVlLFxuICAgIHN0YWtpbmdUb2tlbjoge1xuICAgICAgNTY6IFwiMHg2MUI4M2VERjg3RWE2NjJDNjk1NDM5QTgwN2MzODY0NTVjOUU3OTdDXCIsXG4gICAgfSxcbiAgICBlYXJuaW5nVG9rZW46IHtcbiAgICAgIDU2OiBcIjB4NjFCODNlREY4N0VhNjYyQzY5NTQzOUE4MDdjMzg2NDU1YzlFNzk3Q1wiLFxuICAgIH0sXG4gICAgY29udHJhY3RBZGRyZXNzOiB7XG4gICAgICA1NjogXCIweDBBOTcxZUJDMjMzMkQ4MDMyODVjMDRBQzlEMGQ4MEFmOTAwOUQ0QjhcIixcbiAgICB9LFxuICAgIGlzTHA6IGZhbHNlLFxuICAgIHBvb2xDYXRlZ29yeTogUG9vbENhdGVnb3J5W1wiMTVEX0xPQ0tcIl0sXG4gICAgaGFydmVzdDogdHJ1ZSxcbiAgICBzb3J0T3JkZXI6IDEsXG4gICAgaXNGaW5pc2hlZDogZmFsc2UsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBwb29sSWQ6IDMsXG4gIC8vICAgbmFtZTogXCIxWSBMT0NLXCIsXG4gIC8vICAgdG9rZW46IHRva2Vucy5mb3VydG9rZW4sXG4gIC8vICAgbG9ja2VkOiB0cnVlLFxuICAvLyAgIHN0YWtpbmdUb2tlbjoge1xuICAvLyAgICAgNTY6IFwiMHg2MUI4M2VERjg3RWE2NjJDNjk1NDM5QTgwN2MzODY0NTVjOUU3OTdDXCIsXG4gIC8vICAgfSxcbiAgLy8gICBlYXJuaW5nVG9rZW46IHtcbiAgLy8gICAgIDU2OiBcIjB4NjFCODNlREY4N0VhNjYyQzY5NTQzOUE4MDdjMzg2NDU1YzlFNzk3Q1wiLFxuICAvLyAgIH0sXG4gIC8vICAgY29udHJhY3RBZGRyZXNzOiB7XG4gIC8vICAgICA1NjogXCIweGM2NkE5NDY5ZkE0RjVGOUFDNzA0ODRBQzc3NDg2NTJmRTc1MDA2RjdcIixcbiAgLy8gICB9LFxuICAvLyAgIGlzTHA6IGZhbHNlLFxuICAvLyAgIHBvb2xDYXRlZ29yeTogUG9vbENhdGVnb3J5W1wiMVlfTE9DS1wiXSxcbiAgLy8gICBoYXJ2ZXN0OiB0cnVlLFxuICAvLyAgIHNvcnRPcmRlcjogMSxcbiAgLy8gICBpc0ZpbmlzaGVkOiBmYWxzZSxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHBvb2xzO1xuIl0sIm5hbWVzIjpbInRva2VucyIsIlBvb2xDYXRlZ29yeSIsInBvb2xzIiwicG9vbElkIiwibmFtZSIsInRva2VuIiwiZm91cnRva2VuIiwibG9ja2VkIiwic3Rha2luZ1Rva2VuIiwiZWFybmluZ1Rva2VuIiwiY29udHJhY3RBZGRyZXNzIiwiaXNMcCIsInBvb2xDYXRlZ29yeSIsIk5PX0xPQ0siLCJoYXJ2ZXN0Iiwic29ydE9yZGVyIiwiaXNGaW5pc2hlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/constants/pools.tsx\n");

/***/ }),

/***/ "./src/config/constants/tokens.tsx":
/*!*****************************************!*\
  !*** ./src/config/constants/tokens.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tokens = {\n    fourtoken: {\n        symbol: \"4TOKEN\",\n        address: {\n            56: \"0x61B83eDF87Ea662C695439A807c386455c9E797C\"\n        },\n        decimals: 18,\n        projectLink: \"https://4ignorefud.com/\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokens);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2NvbnN0YW50cy90b2tlbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTO0lBQ2JDLFdBQVc7UUFDVEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsSUFBSTtRQUNOO1FBQ0FDLFVBQVU7UUFDVkMsYUFBYTtJQUNmO0FBQ0Y7QUFFQSxpRUFBZUwsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbm9yZS1icmlkZ2UvLi9zcmMvY29uZmlnL2NvbnN0YW50cy90b2tlbnMudHN4P2JkMTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9rZW5zID0ge1xuICBmb3VydG9rZW46IHtcbiAgICBzeW1ib2w6IFwiNFRPS0VOXCIsXG4gICAgYWRkcmVzczoge1xuICAgICAgNTY6IFwiMHg2MUI4M2VERjg3RWE2NjJDNjk1NDM5QTgwN2MzODY0NTVjOUU3OTdDXCIsXG4gICAgfSxcbiAgICBkZWNpbWFsczogMTgsXG4gICAgcHJvamVjdExpbms6IFwiaHR0cHM6Ly80aWdub3JlZnVkLmNvbS9cIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRva2VucztcbiJdLCJuYW1lcyI6WyJ0b2tlbnMiLCJmb3VydG9rZW4iLCJzeW1ib2wiLCJhZGRyZXNzIiwiZGVjaW1hbHMiLCJwcm9qZWN0TGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/constants/tokens.tsx\n");

/***/ }),

/***/ "./src/config/constants/types.tsx":
/*!****************************************!*\
  !*** ./src/config/constants/types.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PoolCategory\": () => (/* binding */ PoolCategory)\n/* harmony export */ });\nvar PoolCategory;\n(function(PoolCategory) {\n    PoolCategory[\"NO_LOCK\"] = \"No Lock\";\n    PoolCategory[\"15D_LOCK\"] = \"15D Lock\";\n    PoolCategory[\"1Y_LOCK\"] = \"1Y Lock\";\n})(PoolCategory || (PoolCategory = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2NvbnN0YW50cy90eXBlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztJQWFPO1VBQUtBLFlBQVk7SUFBWkEsYUFDVixhQUFZO0lBREZBLGFBRVYsY0FBYTtJQUZIQSxhQUdWLGFBQVk7R0FIRkEsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWdub3JlLWJyaWRnZS8uL3NyYy9jb25maWcvY29uc3RhbnRzL3R5cGVzLnRzeD9mYWYyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzcyB7XG4gIDk3Pzogc3RyaW5nO1xuICA1Njogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuIHtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGFkZHJlc3M/OiBBZGRyZXNzO1xuICBkZWNpbWFscz86IG51bWJlcjtcbiAgcHJvamVjdExpbms/OiBzdHJpbmc7XG4gIGJ1c2RQcmljZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gUG9vbENhdGVnb3J5IHtcbiAgXCJOT19MT0NLXCIgPSBcIk5vIExvY2tcIixcbiAgXCIxNURfTE9DS1wiID0gXCIxNUQgTG9ja1wiLFxuICBcIjFZX0xPQ0tcIiA9IFwiMVkgTG9ja1wiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvb2xDb25maWcge1xuICBwb29sSWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICB0b2tlbjogVG9rZW47XG4gIGxvY2tlZDogYm9vbGVhbjtcbiAgZWFybmluZ1Rva2VuOiBBZGRyZXNzO1xuICBzdGFraW5nVG9rZW46IEFkZHJlc3M7XG4gIGNvbnRyYWN0QWRkcmVzczogQWRkcmVzcztcbiAgcG9vbENhdGVnb3J5OiBQb29sQ2F0ZWdvcnk7XG4gIHNvcnRPcmRlcj86IG51bWJlcjtcbiAgaGFydmVzdD86IGJvb2xlYW47XG4gIGlzTHA6IGJvb2xlYW47XG4gIGlzRmluaXNoZWQ/OiBib29sZWFuO1xuICBlbmFibGVFbWVyZ2VuY3lXaXRoZHJhdz86IGJvb2xlYW47XG59XG4iXSwibmFtZXMiOlsiUG9vbENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/constants/types.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/index */ \"./src/state/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/context */ \"./src/components/context.tsx\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, _web3modal_react__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, wagmi_chains__WEBPACK_IMPORTED_MODULE_11__]);\n([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, _web3modal_react__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, wagmi_chains__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst projectId = \"c45abae0d5434194c80ee42de201f62c\";\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_11__.bsc\n], [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mProvider)({\n        projectId\n    })\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.w3mConnectors)({\n        projectId,\n        version: 1,\n        chains\n    }),\n    provider\n});\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_2__.EthereumClient(wagmiClient, chains);\nfunction App({ Component , pageProps  }) {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(\"\");\n    const contextValue = {\n        data,\n        setData\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {\n            store: _state_index__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n                    client: wagmiClient,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context__WEBPACK_IMPORTED_MODULE_10__.MyContext.Provider, {\n                        value: contextValue,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/krishanbandara/Documents/DEFI_Projects/ignorefud/dashboard/src/pages/_app.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                                fileName: \"/Users/krishanbandara/Documents/DEFI_Projects/ignorefud/dashboard/src/pages/_app.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishanbandara/Documents/DEFI_Projects/ignorefud/dashboard/src/pages/_app.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/krishanbandara/Documents/DEFI_Projects/ignorefud/dashboard/src/pages/_app.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_4__.Web3Modal, {\n                    projectId: projectId,\n                    ethereumClient: ethereumClient,\n                    themeVariables: {\n                        \"--w3m-accent-color\": \"#115657\",\n                        \"--w3m-logo-image-url\": \"/images/logo_name.png\",\n                        \"--w3m-background-color\": \"#115657\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/krishanbandara/Documents/DEFI_Projects/ignorefud/dashboard/src/pages/_app.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/krishanbandara/Documents/DEFI_Projects/ignorefud/dashboard/src/pages/_app.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUtEO0FBRWtEO0FBRWxDO0FBQ0c7QUFDRztBQUNoQjtBQUNJO0FBQ0s7QUFFSztBQUNMO0FBRTVDLE1BQU1hLFlBQVlDLGtDQUFrQztBQUNwRCxNQUFNLEVBQUVHLE9BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdmLHNEQUFlQSxDQUMxQztJQUFDUyw4Q0FBR0E7Q0FBQyxFQUNMO0lBQUNWLGdFQUFXQSxDQUFDO1FBQUVXO0lBQVU7Q0FBRztBQUc5QixNQUFNTSxjQUFjZixtREFBWUEsQ0FBQztJQUMvQmdCLGFBQWEsSUFBSTtJQUNqQkMsWUFBWXBCLGtFQUFhQSxDQUFDO1FBQUVZO1FBQVdTLFNBQVM7UUFBR0w7SUFBTztJQUMxREM7QUFDRjtBQUVBLE1BQU1LLGlCQUFpQixJQUFJdkIsK0RBQWNBLENBQUNtQixhQUFhRjtBQU94QyxTQUFTTyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNbUIsZUFBK0I7UUFDbkNGO1FBQ0FDO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ25CLGlEQUFRQTtZQUFDRCxPQUFPQSxvREFBS0E7OzhCQUNwQiw4REFBQ0gsOENBQVdBO29CQUFDeUIsUUFBUVg7OEJBQ25CLDRFQUFDUixvRUFBa0I7d0JBQUNvQixPQUFPRjs7MENBQ3pCLDhEQUFDSjtnQ0FBVyxHQUFHQyxTQUFTOzs7Ozs7MENBQ3hCLDhEQUFDbkIsMERBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUduQiw4REFBQ0QsdURBQVNBO29CQUNSTyxXQUFXQTtvQkFDWFUsZ0JBQWdCQTtvQkFDaEJTLGdCQUFnQjt3QkFDZCxzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsMEJBQTBCO29CQUM1Qjs7Ozs7Ozs7Ozs7OztBQUtWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25vcmUtYnJpZGdlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7XG4gIEV0aGVyZXVtQ2xpZW50LFxuICB3M21Db25uZWN0b3JzLFxuICB3M21Qcm92aWRlcixcbn0gZnJvbSBcIkB3ZWIzbW9kYWwvZXRoZXJldW1cIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCB1c2VDb25uZWN0LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgY2hhaW5saXN0IH0gZnJvbSBcIkAvY29uZmlnL2NoYWluc1wiO1xuaW1wb3J0IHsgV2ViM01vZGFsIH0gZnJvbSBcIkB3ZWIzbW9kYWwvcmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkubWluLmNzc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdGF0ZS9pbmRleFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnMvaW5qZWN0ZWRcIjtcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IHsgbWFpbm5ldCwgYnNjIH0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuXG5jb25zdCBwcm9qZWN0SWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEITtcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbYnNjXSxcbiAgW3czbVByb3ZpZGVyKHsgcHJvamVjdElkIH0pXVxuKTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9yczogdzNtQ29ubmVjdG9ycyh7IHByb2plY3RJZCwgdmVyc2lvbjogMSwgY2hhaW5zIH0pLFxuICBwcm92aWRlcixcbn0pO1xuXG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNsaWVudCwgY2hhaW5zKTtcblxuaW50ZXJmYWNlIE15Q29udGV4dFZhbHVlIHtcbiAgZGF0YTogc3RyaW5nO1xuICBzZXREYXRhOiAoZGF0YTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjb250ZXh0VmFsdWU6IE15Q29udGV4dFZhbHVlID0ge1xuICAgIGRhdGEsXG4gICAgc2V0RGF0YSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgICA8TXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgICAgPC9NeUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgICAgIDxXZWIzTW9kYWxcbiAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cbiAgICAgICAgICBldGhlcmV1bUNsaWVudD17ZXRoZXJldW1DbGllbnR9XG4gICAgICAgICAgdGhlbWVWYXJpYWJsZXM9e3tcbiAgICAgICAgICAgIFwiLS13M20tYWNjZW50LWNvbG9yXCI6IFwiIzExNTY1N1wiLFxuICAgICAgICAgICAgXCItLXczbS1sb2dvLWltYWdlLXVybFwiOiBcIi9pbWFnZXMvbG9nb19uYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCItLXczbS1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzExNTY1N1wiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkV0aGVyZXVtQ2xpZW50IiwidzNtQ29ubmVjdG9ycyIsInczbVByb3ZpZGVyIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJXZWIzTW9kYWwiLCJUb2FzdENvbnRhaW5lciIsInN0b3JlIiwiUHJvdmlkZXIiLCJ1c2VTdGF0ZSIsIk15Q29udGV4dCIsImJzYyIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QUk9KRUNUX0lEIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyIsInZlcnNpb24iLCJldGhlcmV1bUNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRhdGEiLCJzZXREYXRhIiwiY29udGV4dFZhbHVlIiwiY2xpZW50IiwidmFsdWUiLCJ0aGVtZVZhcmlhYmxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/state/index.tsx":
/*!*****************************!*\
  !*** ./src/state/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pools */ \"./src/state/pools/index.tsx\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    devTools: \"development\" !== \"production\",\n    reducer: {\n        pools: _pools__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n});\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDUjtBQUNQO0FBRW5DLE1BQU1HLFFBQVFILGdFQUFjQSxDQUFDO0lBQzNCSSxVQUFVQyxrQkFBeUI7SUFDbkNDLFNBQVM7UUFDUEMsT0FBT0wsOENBQVlBO0lBQ3JCO0FBQ0Y7QUFNTyxNQUFNTSxpQkFBaUIsSUFBTVAsd0RBQVdBLEdBQWdCO0FBRS9ELGlFQUFlRSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWdub3JlLWJyaWRnZS8uL3NyYy9zdGF0ZS9pbmRleC50c3g/NjhhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHBvb2xzUmVkdWNlciBmcm9tIFwiLi9wb29sc1wiO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgZGV2VG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIixcbiAgcmVkdWNlcjoge1xuICAgIHBvb2xzOiBwb29sc1JlZHVjZXIsXG4gIH0sXG59KTtcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvdXNhZ2UvdXNhZ2Utd2l0aC10eXBlc2NyaXB0I2dldHRpbmctdGhlLWRpc3BhdGNoLXR5cGVcbiAqL1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSAoKSA9PiB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJ1c2VEaXNwYXRjaCIsInBvb2xzUmVkdWNlciIsInN0b3JlIiwiZGV2VG9vbHMiLCJwcm9jZXNzIiwicmVkdWNlciIsInBvb2xzIiwidXNlQXBwRGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/state/index.tsx\n");

/***/ }),

/***/ "./src/state/pools/fetchPools.ts":
/*!***************************************!*\
  !*** ./src/state/pools/fetchPools.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_constants_pools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/constants/pools */ \"./src/config/constants/pools.tsx\");\n\n\nconst fetchPools = async ()=>{\n    const data = await Promise.all(_config_constants_pools__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(async (poolsConfigs)=>{\n        const apr = 18;\n        return {\n            ...poolsConfigs,\n            tokenAmount: 0,\n            tvlToken: 0,\n            tvlInUSD: 0,\n            apr: apr\n        };\n    }));\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPools);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvcG9vbHMvZmV0Y2hQb29scy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQzRCO0FBRXRELE1BQU1FLGFBQWEsVUFBWTtJQUM3QixNQUFNQyxPQUFPLE1BQU1DLFFBQVFDLEdBQUcsQ0FDNUJKLG1FQUFjLENBQUMsT0FBT00sZUFBaUI7UUFDckMsTUFBTUMsTUFBTTtRQUNaLE9BQU87WUFDTCxHQUFHRCxZQUFZO1lBQ2ZFLGFBQWE7WUFDYkMsVUFBVTtZQUNWQyxVQUFVO1lBQ1ZILEtBQUtBO1FBQ1A7SUFDRjtJQUdGLE9BQU9MO0FBQ1Q7QUFFQSxpRUFBZUQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbm9yZS1icmlkZ2UvLi9zcmMvc3RhdGUvcG9vbHMvZmV0Y2hQb29scy50cz80ZWMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwb29sQ29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uc3RhbnRzL3Bvb2xzXCI7XG5cbmNvbnN0IGZldGNoUG9vbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBwb29sQ29uZmlnLm1hcChhc3luYyAocG9vbHNDb25maWdzKSA9PiB7XG4gICAgICBjb25zdCBhcHIgPSAxODtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBvb2xzQ29uZmlncyxcbiAgICAgICAgdG9rZW5BbW91bnQ6IDAsXG4gICAgICAgIHR2bFRva2VuOiAwLFxuICAgICAgICB0dmxJblVTRDogMCxcbiAgICAgICAgYXByOiBhcHIsXG4gICAgICB9O1xuICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFBvb2xzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwicG9vbENvbmZpZyIsImZldGNoUG9vbHMiLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInBvb2xzQ29uZmlncyIsImFwciIsInRva2VuQW1vdW50IiwidHZsVG9rZW4iLCJ0dmxJblVTRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/state/pools/fetchPools.ts\n");

/***/ }),

/***/ "./src/state/pools/index.tsx":
/*!***********************************!*\
  !*** ./src/state/pools/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"farmsSlice\": () => (/* binding */ farmsSlice),\n/* harmony export */   \"fetchPoolsPublicDataAsync\": () => (/* binding */ fetchPoolsPublicDataAsync),\n/* harmony export */   \"fetchPoolsUserDataAsync\": () => (/* binding */ fetchPoolsUserDataAsync),\n/* harmony export */   \"setPoolsPublicData\": () => (/* binding */ setPoolsPublicData),\n/* harmony export */   \"setPoolsUserData\": () => (/* binding */ setPoolsUserData)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_constants_pools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/constants/pools */ \"./src/config/constants/pools.tsx\");\n/* harmony import */ var _fetchPools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchPools */ \"./src/state/pools/fetchPools.ts\");\n\n\n\nconst initialState = {\n    data: [\n        ..._config_constants_pools__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ]\n};\nconst farmsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Pools\",\n    initialState,\n    reducers: {\n        setPoolsPublicData: (state, action)=>{\n            const liveFarmsData = action.payload;\n            state.data = state.data.map((pool)=>{\n                const liveFarmData = liveFarmsData.find((f)=>f.poolId === pool.poolId);\n                return {\n                    ...pool,\n                    ...liveFarmData\n                };\n            });\n        },\n        setPoolsUserData: (state, action)=>{\n            const { arrayOfUserDataObjects  } = action.payload;\n            arrayOfUserDataObjects.forEach((userDataEl)=>{\n                const { index  } = userDataEl;\n                state.data[index] = {\n                    ...state.data[index],\n                    userData: userDataEl\n                };\n            });\n        }\n    }\n});\nconst fetchPoolsPublicDataAsync = ()=>async (dispatch)=>{\n        const pools = await (0,_fetchPools__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        dispatch(setPoolsPublicData(pools));\n    };\nconst fetchPoolsUserDataAsync = (account)=>async (dispatch)=>{\n    // const userPoolmAllowances = await fetchPoolUserAllowances(account);\n    // const userPoolTokenBalances = await fetchPoolUserTokenBalances(account);\n    // const userFarmEarnings = await fetchPoolUserEarn(account);\n    // const userPoolStaked = await fetchPoolUserStakedBalances(account);\n    // const arrayOfUserDataObjects = userPoolmAllowances?.map(\n    //   (farmAllowance, index) => {\n    //     return {\n    //       index,\n    //       allowance: userPoolmAllowances?.[index] ?? 0,\n    //       tokenBalance: userPoolTokenBalances?.[index] ?? 0,\n    //       stakedBalance: userPoolStaked?.[index] ?? 0,\n    //       earnings: userFarmEarnings?.[index],\n    //       // dualEarnings: userFarmDualEarnings[index],\n    //       // constraintBalances: userConstraintBalances[index],\n    //     };\n    //   }\n    // );\n    // dispatch(setPoolsUserData({ arrayOfUserDataObjects }));\n    };\nconst { setPoolsPublicData , setPoolsUserData  } = farmsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (farmsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvcG9vbHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDTztBQUVoQjtBQUV0QyxNQUFNRyxlQUEyQjtJQUFFQyxNQUFNO1dBQUlILCtEQUFVQTtLQUFDO0FBQUM7QUFDbEQsTUFBTUksYUFBYUwsNkRBQVdBLENBQUM7SUFDcENNLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxvQkFBb0IsQ0FBQ0MsT0FBT0MsU0FBVztZQUNyQyxNQUFNQyxnQkFBd0JELE9BQU9FLE9BQU87WUFDNUNILE1BQU1MLElBQUksR0FBR0ssTUFBTUwsSUFBSSxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsT0FBUztnQkFDcEMsTUFBTUMsZUFBZUosY0FBY0ssSUFBSSxDQUNyQyxDQUFDQyxJQUFNQSxFQUFFQyxNQUFNLEtBQUtKLEtBQUtJLE1BQU07Z0JBRWpDLE9BQU87b0JBQUUsR0FBR0osSUFBSTtvQkFBRSxHQUFHQyxZQUFZO2dCQUFDO1lBQ3BDO1FBQ0Y7UUFDQUksa0JBQWtCLENBQUNWLE9BQU9DLFNBQVc7WUFDbkMsTUFBTSxFQUFFVSx1QkFBc0IsRUFBRSxHQUFHVixPQUFPRSxPQUFPO1lBQ2pEUSx1QkFBdUJDLE9BQU8sQ0FBQyxDQUFDQyxhQUFvQjtnQkFDbEQsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0Q7Z0JBQ2xCYixNQUFNTCxJQUFJLENBQUNtQixNQUFNLEdBQUc7b0JBQUUsR0FBR2QsTUFBTUwsSUFBSSxDQUFDbUIsTUFBTTtvQkFBRUMsVUFBVUY7Z0JBQVc7WUFDbkU7UUFDRjtJQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU1HLDRCQUE0QixJQUFNLE9BQU9DLFdBQWtCO1FBQ3RFLE1BQU1DLFFBQVEsTUFBTXpCLHVEQUFVQTtRQUM5QndCLFNBQVNsQixtQkFBbUJtQjtJQUM5QixFQUFFO0FBRUssTUFBTUMsMEJBQ1gsQ0FBQ0MsVUFBb0IsT0FBT0gsV0FBa0I7SUFDNUMsc0VBQXNFO0lBQ3RFLDJFQUEyRTtJQUMzRSw2REFBNkQ7SUFDN0QscUVBQXFFO0lBQ3JFLDJEQUEyRDtJQUMzRCxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQsMkRBQTJEO0lBQzNELHFEQUFxRDtJQUNyRCw2Q0FBNkM7SUFDN0Msc0RBQXNEO0lBQ3RELDhEQUE4RDtJQUM5RCxTQUFTO0lBQ1QsTUFBTTtJQUNOLEtBQUs7SUFDTCwwREFBMEQ7SUFDNUQsRUFBRTtBQUVHLE1BQU0sRUFBRWxCLG1CQUFrQixFQUFFVyxpQkFBZ0IsRUFBRSxHQUFHZCxXQUFXeUIsT0FBTyxDQUFDO0FBRTNFLGlFQUFlekIsV0FBVzBCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbm9yZS1icmlkZ2UvLi9zcmMvc3RhdGUvcG9vbHMvaW5kZXgudHN4P2UxOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IFBvb2xDb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25zdGFudHMvcG9vbHNcIjtcbmltcG9ydCB7IFBvb2xzU3RhdGUsIFBvb2wgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBmZXRjaFBvb2xzIGZyb20gXCIuL2ZldGNoUG9vbHNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBQb29sc1N0YXRlID0geyBkYXRhOiBbLi4uUG9vbENvbmZpZ10gfTtcbmV4cG9ydCBjb25zdCBmYXJtc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcIlBvb2xzXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRQb29sc1B1YmxpY0RhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBsaXZlRmFybXNEYXRhOiBQb29sW10gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLmRhdGEgPSBzdGF0ZS5kYXRhLm1hcCgocG9vbCkgPT4ge1xuICAgICAgICBjb25zdCBsaXZlRmFybURhdGEgPSBsaXZlRmFybXNEYXRhLmZpbmQoXG4gICAgICAgICAgKGYpID0+IGYucG9vbElkID09PSBwb29sLnBvb2xJZFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyAuLi5wb29sLCAuLi5saXZlRmFybURhdGEgfTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0UG9vbHNVc2VyRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHsgYXJyYXlPZlVzZXJEYXRhT2JqZWN0cyB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBhcnJheU9mVXNlckRhdGFPYmplY3RzLmZvckVhY2goKHVzZXJEYXRhRWw6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCB7IGluZGV4IH0gPSB1c2VyRGF0YUVsO1xuICAgICAgICBzdGF0ZS5kYXRhW2luZGV4XSA9IHsgLi4uc3RhdGUuZGF0YVtpbmRleF0sIHVzZXJEYXRhOiB1c2VyRGF0YUVsIH07XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvb2xzUHVibGljRGF0YUFzeW5jID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgY29uc3QgcG9vbHMgPSBhd2FpdCBmZXRjaFBvb2xzKCk7XG4gIGRpc3BhdGNoKHNldFBvb2xzUHVibGljRGF0YShwb29scykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUG9vbHNVc2VyRGF0YUFzeW5jID1cbiAgKGFjY291bnQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgICAvLyBjb25zdCB1c2VyUG9vbG1BbGxvd2FuY2VzID0gYXdhaXQgZmV0Y2hQb29sVXNlckFsbG93YW5jZXMoYWNjb3VudCk7XG4gICAgLy8gY29uc3QgdXNlclBvb2xUb2tlbkJhbGFuY2VzID0gYXdhaXQgZmV0Y2hQb29sVXNlclRva2VuQmFsYW5jZXMoYWNjb3VudCk7XG4gICAgLy8gY29uc3QgdXNlckZhcm1FYXJuaW5ncyA9IGF3YWl0IGZldGNoUG9vbFVzZXJFYXJuKGFjY291bnQpO1xuICAgIC8vIGNvbnN0IHVzZXJQb29sU3Rha2VkID0gYXdhaXQgZmV0Y2hQb29sVXNlclN0YWtlZEJhbGFuY2VzKGFjY291bnQpO1xuICAgIC8vIGNvbnN0IGFycmF5T2ZVc2VyRGF0YU9iamVjdHMgPSB1c2VyUG9vbG1BbGxvd2FuY2VzPy5tYXAoXG4gICAgLy8gICAoZmFybUFsbG93YW5jZSwgaW5kZXgpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICBpbmRleCxcbiAgICAvLyAgICAgICBhbGxvd2FuY2U6IHVzZXJQb29sbUFsbG93YW5jZXM/LltpbmRleF0gPz8gMCxcbiAgICAvLyAgICAgICB0b2tlbkJhbGFuY2U6IHVzZXJQb29sVG9rZW5CYWxhbmNlcz8uW2luZGV4XSA/PyAwLFxuICAgIC8vICAgICAgIHN0YWtlZEJhbGFuY2U6IHVzZXJQb29sU3Rha2VkPy5baW5kZXhdID8/IDAsXG4gICAgLy8gICAgICAgZWFybmluZ3M6IHVzZXJGYXJtRWFybmluZ3M/LltpbmRleF0sXG4gICAgLy8gICAgICAgLy8gZHVhbEVhcm5pbmdzOiB1c2VyRmFybUR1YWxFYXJuaW5nc1tpbmRleF0sXG4gICAgLy8gICAgICAgLy8gY29uc3RyYWludEJhbGFuY2VzOiB1c2VyQ29uc3RyYWludEJhbGFuY2VzW2luZGV4XSxcbiAgICAvLyAgICAgfTtcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICAgIC8vIGRpc3BhdGNoKHNldFBvb2xzVXNlckRhdGEoeyBhcnJheU9mVXNlckRhdGFPYmplY3RzIH0pKTtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0UG9vbHNQdWJsaWNEYXRhLCBzZXRQb29sc1VzZXJEYXRhIH0gPSBmYXJtc1NsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGZhcm1zU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIlBvb2xDb25maWciLCJmZXRjaFBvb2xzIiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsImZhcm1zU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRQb29sc1B1YmxpY0RhdGEiLCJzdGF0ZSIsImFjdGlvbiIsImxpdmVGYXJtc0RhdGEiLCJwYXlsb2FkIiwibWFwIiwicG9vbCIsImxpdmVGYXJtRGF0YSIsImZpbmQiLCJmIiwicG9vbElkIiwic2V0UG9vbHNVc2VyRGF0YSIsImFycmF5T2ZVc2VyRGF0YU9iamVjdHMiLCJmb3JFYWNoIiwidXNlckRhdGFFbCIsImluZGV4IiwidXNlckRhdGEiLCJmZXRjaFBvb2xzUHVibGljRGF0YUFzeW5jIiwiZGlzcGF0Y2giLCJwb29scyIsImZldGNoUG9vbHNVc2VyRGF0YUFzeW5jIiwiYWNjb3VudCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/state/pools/index.tsx\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethereum":
/*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();