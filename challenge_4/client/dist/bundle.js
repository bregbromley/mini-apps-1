/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nconsole.log('i ran');\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n      currentPlayer: 'R',\n      win: false\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"myFunc\",\n    value: function myFunc(e) {\n      if (this.state.win) {\n        return;\n      }\n\n      var x = e.dataset.x;\n      var y = e.dataset.y;\n      var board = this.state.board;\n      var max = 5;\n\n      for (var i = 0; i < board.length; i++) {\n        if (board[i][y] !== 0) {\n          max--;\n        }\n\n        console.log(max);\n      }\n\n      board[max][y] = this.state.currentPlayer;\n      this.setState({\n        board: board\n      });\n      var target = document.querySelector(\"[data-x='\".concat(max, \"'][data-y='\").concat(y, \"']\"));\n      target.innerHTML = \"\".concat(this.state.currentPlayer);\n      var b = this.state.board;\n      var c = this.state.currentPlayer;\n\n      if (checkWinHor(b, c) || checkWinVir(b, c) || checkWinDi(b, c) || checkWinDiRe(b, c)) {\n        console.log(\"\".concat(c, \" WINS!!\"));\n        this.setState({\n          win: true\n        });\n      }\n\n      if (this.state.currentPlayer === 'R') {\n        this.setState({\n          currentPlayer: 'Y'\n        });\n      } else {\n        this.setState({\n          currentPlayer: 'R'\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var copyBoard = this.state.board; // console.log(copyBoard)\n\n      return /*#__PURE__*/React.createElement(\"table\", {\n        bgcolor: \"FF5733\",\n        onClick: function onClick() {\n          _this2.myFunc(event.target);\n        }\n      }, /*#__PURE__*/React.createElement(\"tbody\", null, /*#__PURE__*/React.createElement(Row, {\n        x: 0,\n        board: copyBoard\n      }), /*#__PURE__*/React.createElement(Row, {\n        x: 1\n      }), /*#__PURE__*/React.createElement(Row, {\n        x: 2\n      }), /*#__PURE__*/React.createElement(Row, {\n        x: 3\n      }), /*#__PURE__*/React.createElement(Row, {\n        x: 4\n      }), /*#__PURE__*/React.createElement(Row, {\n        x: 5\n      })));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nvar checkWinHor = function checkWinHor(board, player) {\n  var count = 0;\n  var win = false;\n\n  for (var i = 0; i < board.length; i++) {\n    for (var j = 0; j < board[i].length; j++) {\n      if (count === 4) {\n        win = true;\n      }\n\n      if (board[i][j] === player) {\n        count++;\n      } else {\n        count = 0;\n      }\n    }\n  }\n\n  return win;\n};\n\nvar checkWinVir = function checkWinVir(board, player) {\n  var count = 0;\n  var win = false;\n\n  for (var i = 0; i < 7; i++) {\n    for (var j = 0; j < board.length; j++) {\n      if (count === 4) {\n        var win = true;\n      }\n\n      if (board[j][i] === player) {\n        count++;\n      } else {\n        count = 0;\n      }\n    }\n  }\n\n  return win;\n};\n\nvar checkWinDi = function checkWinDi(board, player) {\n  var win = false;\n\n  for (var i = 0; i < 6; i++) {\n    var row = i;\n    var count = 0;\n\n    for (var j = 0; j < 7; j++) {\n      var col = j;\n\n      while (col < 7 && row < 6) {\n        if (count === 4) {\n          var win = true;\n        }\n\n        if (board[row][col] === player) {\n          count++;\n        } else {\n          count = 0;\n        }\n\n        row++;\n        col++;\n      }\n    }\n\n    if (win) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar checkWinDiRe = function checkWinDiRe(board, player) {\n  var win = false;\n\n  for (var i = 5; i >= 0; i--) {\n    var row = i;\n    var count = 0;\n\n    for (var j = 0; j < 7; j++) {\n      var col = j;\n\n      while (col < 7 && row >= 0) {\n        if (count === 4) {\n          win = true;\n        }\n\n        if (board[row][col] === player) {\n          count++;\n        } else {\n          count = 0;\n        }\n\n        row--;\n        col++;\n      }\n    }\n\n    if (win) {\n      return true;\n    }\n  }\n\n  return false;\n}; // 30,21,12,03\n// 40,31,22,13,04\n// 50,41,32,23,14,05\n// 51,42,33,24,15,06\n// 52,43,34,25,16\n// 53,44,35,26\n\n\nvar Row = function Row(_ref) {\n  var x = _ref.x,\n      board = _ref.board;\n  return /*#__PURE__*/React.createElement(\"tr\", {\n    height: \"50\"\n  }, /*#__PURE__*/React.createElement(\"td\", {\n    width: \"50\",\n    bgcolor: \"FDFEFE\",\n    \"data-x\": x,\n    \"data-y\": 0\n  }), /*#__PURE__*/React.createElement(\"td\", {\n    width: \"50\",\n    bgcolor: \"FDFEFE\",\n    \"data-x\": x,\n    \"data-y\": 1\n  }), /*#__PURE__*/React.createElement(\"td\", {\n    width: \"50\",\n    bgcolor: \"FDFEFE\",\n    \"data-x\": x,\n    \"data-y\": 2\n  }), /*#__PURE__*/React.createElement(\"td\", {\n    width: \"50\",\n    bgcolor: \"FDFEFE\",\n    \"data-x\": x,\n    \"data-y\": 3\n  }), /*#__PURE__*/React.createElement(\"td\", {\n    width: \"50\",\n    bgcolor: \"FDFEFE\",\n    \"data-x\": x,\n    \"data-y\": 4\n  }), /*#__PURE__*/React.createElement(\"td\", {\n    width: \"50\",\n    bgcolor: \"FDFEFE\",\n    \"data-x\": x,\n    \"data-y\": 5\n  }), /*#__PURE__*/React.createElement(\"td\", {\n    width: \"50\",\n    bgcolor: \"FDFEFE\",\n    \"data-x\": x,\n    \"data-y\": 6\n  }));\n};\n\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2kgcmFuJyk7XG5cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBib2FyZDogW1xuICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDBdXG4gICAgICBdLFxuICAgICAgY3VycmVudFBsYXllcjogJ1InLFxuICAgICAgd2luOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIG15RnVuYyhlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUud2luKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHggPSBlLmRhdGFzZXQueDtcbiAgICB2YXIgeSA9IGUuZGF0YXNldC55O1xuICAgIHZhciBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgdmFyIG1heCA9IDU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGJvYXJkW2ldW3ldICE9PSAwKSB7XG4gICAgICAgIG1heC0tO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cobWF4KTtcbiAgICB9XG4gICAgYm9hcmRbbWF4XVt5XSA9IHRoaXMuc3RhdGUuY3VycmVudFBsYXllcjtcbiAgICB0aGlzLnNldFN0YXRlKHtib2FyZDogYm9hcmR9KVxuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke21heH0nXVtkYXRhLXk9JyR7eX0nXWApXG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IGAke3RoaXMuc3RhdGUuY3VycmVudFBsYXllcn1gO1xuICAgIHZhciBiID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICB2YXIgYyA9IHRoaXMuc3RhdGUuY3VycmVudFBsYXllcjtcbiAgICBpZiAoY2hlY2tXaW5Ib3IoYixjKSB8fCBjaGVja1dpblZpcihiLGMpIHx8IGNoZWNrV2luRGkoYixjKSB8fCBjaGVja1dpbkRpUmUoYixjKSkge1xuICAgICAgY29uc29sZS5sb2coYCR7Y30gV0lOUyEhYCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3aW46IHRydWV9KVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyID09PSAnUicpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQbGF5ZXI6ICdZJ30pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQbGF5ZXI6ICdSJ30pXG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKXtcbiAgICB2YXIgY29weUJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICAvLyBjb25zb2xlLmxvZyhjb3B5Qm9hcmQpXG4gICAgcmV0dXJuKFxuICAgIDx0YWJsZSBiZ2NvbG9yPVwiRkY1NzMzXCIgb25DbGljaz17KCk9Pnt0aGlzLm15RnVuYyhldmVudC50YXJnZXQpfX0+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDxSb3cgeD17MH0gYm9hcmQ9e2NvcHlCb2FyZH0vPlxuICAgICAgICA8Um93IHg9ezF9Lz5cbiAgICAgICAgPFJvdyB4PXsyfS8+XG4gICAgICAgIDxSb3cgeD17M30vPlxuICAgICAgICA8Um93IHg9ezR9Lz5cbiAgICAgICAgPFJvdyB4PXs1fS8+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbnZhciBjaGVja1dpbkhvciA9IGZ1bmN0aW9uKGJvYXJkLCBwbGF5ZXIpIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgdmFyIHdpbiA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKXtcbiAgICAgIGlmIChjb3VudCA9PT0gNCkge1xuICAgICAgICB3aW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY291bnQrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gd2luO1xufVxuXG52YXIgY2hlY2tXaW5WaXIgPSBmdW5jdGlvbihib2FyZCwgcGxheWVyKSB7XG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciB3aW4gPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspe1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYm9hcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChjb3VudCA9PT0gNCkge1xuICAgICAgICB2YXIgd2luID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChib2FyZFtqXVtpXSA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50KytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdpbjtcbn1cblxudmFyIGNoZWNrV2luRGkgPSBmdW5jdGlvbihib2FyZCwgcGxheWVyKSB7XG4gIHZhciB3aW4gPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB2YXIgcm93ID0gaTtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNzsgaisrKXtcbiAgICAgIHZhciBjb2wgPSBqO1xuICAgICAgd2hpbGUgKGNvbCA8IDcgJiYgcm93IDwgNikge1xuICAgICAgICBpZiAoY291bnQgPT09IDQpIHtcbiAgICAgICAgICB2YXIgd2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdID09PSBwbGF5ZXIpe1xuICAgICAgICAgIGNvdW50KytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcm93Kys7XG4gICAgICAgIGNvbCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2luKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxudmFyIGNoZWNrV2luRGlSZSA9IGZ1bmN0aW9uKGJvYXJkLCBwbGF5ZXIpIHtcbiAgdmFyIHdpbiA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gNTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcm93ID0gaTtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICB2YXIgY29sID0gajtcbiAgICAgIHdoaWxlIChjb2wgPCA3ICYmIHJvdyA+PSAwKSB7XG4gICAgICAgIGlmIChjb3VudCA9PT0gNCkge1xuICAgICAgICAgIHdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSA9PT0gcGxheWVyKSB7XG4gICAgICAgICAgY291bnQrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByb3ctLTtcbiAgICAgICAgY29sKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3aW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIDMwLDIxLDEyLDAzXG4vLyA0MCwzMSwyMiwxMywwNFxuLy8gNTAsNDEsMzIsMjMsMTQsMDVcbi8vIDUxLDQyLDMzLDI0LDE1LDA2XG4vLyA1Miw0MywzNCwyNSwxNlxuLy8gNTMsNDQsMzUsMjZcblxudmFyIFJvdyA9ICh7eCwgYm9hcmR9KSA9PiAoXG4gICAgPHRyIGhlaWdodD0nNTAnPlxuICAgICAgICA8dGQgd2lkdGg9XCI1MFwiIGJnY29sb3I9XCJGREZFRkVcIiBkYXRhLXg9e3h9IGRhdGEteT17MH0+PC90ZD5cbiAgICAgICAgPHRkIHdpZHRoPVwiNTBcIiBiZ2NvbG9yPVwiRkRGRUZFXCIgZGF0YS14PXt4fSBkYXRhLXk9ezF9PjwvdGQ+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjUwXCIgYmdjb2xvcj1cIkZERkVGRVwiIGRhdGEteD17eH0gZGF0YS15PXsyfT48L3RkPlxuICAgICAgICA8dGQgd2lkdGg9XCI1MFwiIGJnY29sb3I9XCJGREZFRkVcIiBkYXRhLXg9e3h9IGRhdGEteT17M30+PC90ZD5cbiAgICAgICAgPHRkIHdpZHRoPVwiNTBcIiBiZ2NvbG9yPVwiRkRGRUZFXCIgZGF0YS14PXt4fSBkYXRhLXk9ezR9PjwvdGQ+XG4gICAgICAgIDx0ZCB3aWR0aD1cIjUwXCIgYmdjb2xvcj1cIkZERkVGRVwiIGRhdGEteD17eH0gZGF0YS15PXs1fT48L3RkPlxuICAgICAgICA8dGQgd2lkdGg9XCI1MFwiIGJnY29sb3I9XCJGREZFRkVcIiBkYXRhLXg9e3h9IGRhdGEteT17Nn0+PC90ZD5cbiAgICAgIDwvdHI+XG4pO1xuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQVZBO0FBRkE7QUFjQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTs7OztBQWhFQTtBQUNBO0FBa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFDQTtBQVlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });