(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/front/pages/home/Home.js":
/*!**************************************!*\
  !*** ./src/front/pages/home/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap/lib/Jumbotron */ "./node_modules/reactstrap/lib/Jumbotron.js");
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _styled_HomeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/HomeInfo */ "./src/front/pages/home/styled/HomeInfo.js");
/* harmony import */ var _styled_MainTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled/MainTitle */ "./src/front/pages/home/styled/MainTitle.js");
/* harmony import */ var _styled_LightNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled/LightNote */ "./src/front/pages/home/styled/LightNote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// #region imports





 // #endregion
// #region flow types

// #endregion
var Home =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    // #region lifecycle
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_HomeInfo__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_MainTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "ReactJS 16.4+ Bootstrap 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "with Hot Reload (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "react-hot-loader 4+"), ")!!!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and React 16.3+ Context API"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and React Router v4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and webpack 4.x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and babel 7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and styled-components (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_LightNote__WEBPACK_IMPORTED_MODULE_5__["default"], null, "so keep using SCSS like styles and benefit performant css-in-js"), ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Starter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        className: "btn btn-success btn-lg",
        to: '/about'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-info"
      }), "\xA0 go to about")))));
    } // #endregion

  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/front/pages/home/index.js":
/*!***************************************!*\
  !*** ./src/front/pages/home/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/front/pages/home/Home.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
// #region imports


 // #endregion

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])())(_Home__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/front/pages/home/styled/HomeInfo.js":
/*!*************************************************!*\
  !*** ./src/front/pages/home/styled/HomeInfo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports
 // #endregion

var HomeInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (HomeInfo);

/***/ }),

/***/ "./src/front/pages/home/styled/LightNote.js":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/LightNote.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.7em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports
 // #endregion

var LightNote = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].i(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (LightNote);

/***/ }),

/***/ "./src/front/pages/home/styled/MainTitle.js":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/MainTitle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #222 !important;\n  font-weight: 800;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports
 // #endregion

var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (MainTitle);

/***/ })

}]);
//# sourceMappingURL=0.952bbb64d532bc81700d.js.map