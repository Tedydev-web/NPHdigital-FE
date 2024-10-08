/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quang-cao-so",{

/***/ "./src/components/development/DetailsMarketing.jsx":
/*!*********************************************************!*\
  !*** ./src/components/development/DetailsMarketing.jsx ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/quang-cao-so.jsx":
/*!************************************!*\
  !*** ./src/pages/quang-cao-so.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_common_layout_RootLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/layout/RootLayout */ \"./src/components/common/layout/RootLayout.jsx\");\n/* harmony import */ var _components_development_DetailsMarketing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/development/DetailsMarketing */ \"./src/components/development/DetailsMarketing.jsx\");\n/* harmony import */ var _components_development_DetailsMarketing__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_development_DetailsMarketing__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_workflow_MarketingWorkflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/workflow/MarketingWorkflow */ \"./src/components/workflow/MarketingWorkflow.jsx\");\n/* harmony import */ var _components_service_MarketingService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/service/MarketingService */ \"./src/components/service/MarketingService.jsx\");\n/* harmony import */ var _components_faq_MarketingFaq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/faq/MarketingFaq */ \"./src/components/faq/MarketingFaq.jsx\");\n/* harmony import */ var _components_cta_DigitalAgencyCTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/cta/DigitalAgencyCTA */ \"./src/components/cta/DigitalAgencyCTA.jsx\");\n\n\n\n\n\n\n\n\nconst ServiceDetails = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Quảng c\\xe1o số - NPH Digital\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Service Details Description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_layout_RootLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    header: \"header3\",\n                    footer: \"footer3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_development_DetailsMarketing__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                            fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_workflow_MarketingWorkflow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_service_MarketingService__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_faq_MarketingFaq__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cta_DigitalAgencyCTA__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tedydev/Workhome/NPHdigital-FE/src/pages/quang-cao-so.jsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = ServiceDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceDetails);\nvar _c;\n$RefreshReg$(_c, \"ServiceDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVhbmctY2FvLXNvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2tDO0FBQ1U7QUFDRDtBQUNIO0FBQ1o7QUFDUTtBQUVqRSxNQUFNTyxpQkFBaUI7SUFDdEIscUJBQ0M7OzBCQUNDLDhEQUFDUCxrREFBSUE7O2tDQUNKLDhEQUFDUTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDQUMsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7O2tDQUVULDhEQUFDRjt3QkFDQUMsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDQzswQkFDQSw0RUFBQ1gsNEVBQVVBO29CQUNWWSxRQUFPO29CQUNQQyxRQUFPOztzQ0FDUCw4REFBQ1osaUZBQWdCQTs7Ozs7c0NBQ2pCLDhEQUFDQyw4RUFBaUJBOzs7OztzQ0FDbEIsOERBQUNDLDRFQUFnQkE7Ozs7O3NDQUNqQiw4REFBQ0Msb0VBQVlBOzs7OztzQ0FDYiw4REFBQ0Msd0VBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0tBM0JNQztBQTZCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcXVhbmctY2FvLXNvLmpzeD82OGNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm9vdExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9Sb290TGF5b3V0JztcbmltcG9ydCBEZXRhaWxzTWFya2V0aW5nIGZyb20gJ0AvY29tcG9uZW50cy9kZXZlbG9wbWVudC9EZXRhaWxzTWFya2V0aW5nJztcbmltcG9ydCBNYXJrZXRpbmdXb3JrZmxvdyBmcm9tICdAL2NvbXBvbmVudHMvd29ya2Zsb3cvTWFya2V0aW5nV29ya2Zsb3cnO1xuaW1wb3J0IE1hcmtldGluZ1NlcnZpY2UgZnJvbSAnQC9jb21wb25lbnRzL3NlcnZpY2UvTWFya2V0aW5nU2VydmljZSc7XG5pbXBvcnQgTWFya2V0aW5nRmFxIGZyb20gJ0AvY29tcG9uZW50cy9mYXEvTWFya2V0aW5nRmFxJztcbmltcG9ydCBEaWdpdGFsQWdlbmN5Q1RBIGZyb20gJ0AvY29tcG9uZW50cy9jdGEvRGlnaXRhbEFnZW5jeUNUQSc7XG5cbmNvbnN0IFNlcnZpY2VEZXRhaWxzID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPlF14bqjbmcgY8OhbyBz4buRIC0gTlBIIERpZ2l0YWw8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0Y29udGVudD1cIlNlcnZpY2UgRGV0YWlscyBEZXNjcmlwdGlvblwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxSb290TGF5b3V0XG5cdFx0XHRcdFx0aGVhZGVyPVwiaGVhZGVyM1wiXG5cdFx0XHRcdFx0Zm9vdGVyPVwiZm9vdGVyM1wiPlxuXHRcdFx0XHRcdDxEZXRhaWxzTWFya2V0aW5nIC8+XG5cdFx0XHRcdFx0PE1hcmtldGluZ1dvcmtmbG93IC8+XG5cdFx0XHRcdFx0PE1hcmtldGluZ1NlcnZpY2UgLz5cblx0XHRcdFx0XHQ8TWFya2V0aW5nRmFxIC8+XG5cdFx0XHRcdFx0PERpZ2l0YWxBZ2VuY3lDVEEgLz5cblx0XHRcdFx0PC9Sb290TGF5b3V0PlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZURldGFpbHM7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlJvb3RMYXlvdXQiLCJEZXRhaWxzTWFya2V0aW5nIiwiTWFya2V0aW5nV29ya2Zsb3ciLCJNYXJrZXRpbmdTZXJ2aWNlIiwiTWFya2V0aW5nRmFxIiwiRGlnaXRhbEFnZW5jeUNUQSIsIlNlcnZpY2VEZXRhaWxzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiaGVhZGVyIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/quang-cao-so.jsx\n"));

/***/ })

});