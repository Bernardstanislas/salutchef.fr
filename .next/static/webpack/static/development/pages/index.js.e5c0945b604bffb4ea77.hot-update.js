webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Recipe/Steps/Step.tsx":
/*!******************************************!*\
  !*** ./components/Recipe/Steps/Step.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/stan/Documents/code/salutchef.fr/components/Recipe/Steps/Step.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var Step = function Step(props) {
  return __jsx("div", {
    className: "border-b border-current divide-x divide-current flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-20 flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, props.number)), __jsx("div", {
    className: "p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Step);

/***/ }),

/***/ "./components/Recipe/Steps/index.tsx":
/*!*******************************************!*\
  !*** ./components/Recipe/Steps/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Step */ "./components/Recipe/Steps/Step.tsx");
var _this = undefined,
    _jsxFileName = "/Users/stan/Documents/code/salutchef.fr/components/Recipe/Steps/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var Steps = function Steps(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "h-16 flex items-center justify-center border-b border-current",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "text-lg font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "\xC9tapes")), __jsx(_Step__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: 1,
    text: "Mettre le r\xE9cipient pour monter les blancs au r\xE9frig\xE9rateur, ainsi que le fouet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_Step__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: 2,
    text: "Commencer \xE0 monter les blancs en neige, avec le fouet \xE9lectrique en vitesse lente (1/3 du max)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_Step__WEBPACK_IMPORTED_MODULE_1__["default"], {
    number: 2,
    text: "Lorsque la mousse appara\xEEt, verser la moiti\xE9 du sucre blanc, en pluie, tout en continuant \xE0 fouetter. Augmenter la vitesse du fout aux 2/3 du max",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./components/Recipe/index.tsx":
/*!*************************************!*\
  !*** ./components/Recipe/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duration */ "./components/Recipe/Duration.tsx");
/* harmony import */ var _Ingedients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ingedients */ "./components/Recipe/Ingedients/index.tsx");
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Steps */ "./components/Recipe/Steps/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/stan/Documents/code/salutchef.fr/components/Recipe/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





var Recipe = function Recipe(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("img", {
    src: "/dogs.jpg",
    alt: "Dogs",
    className: "border-b border-current",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "h-16 flex items-center justify-center border-b border-current",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Macarons")), __jsx(_Duration__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_Ingedients__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_Steps__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Recipe);

/***/ })

})
//# sourceMappingURL=index.js.e5c0945b604bffb4ea77.hot-update.js.map