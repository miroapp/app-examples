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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;

var icon24 = '<g id="icon-24" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n'
    + '        <g id="icon-48" transform="translate(1.000000, 2.000000)" fill="currentColor" fill-rule="nonzero">\n'
    + '            <path d="M10,15 L12.8786797,15 C13.154822,15 13.3786797,14.7761424 13.3786797,14.5 C13.3786797,14.3673918 13.3260012,14.2402148 13.232233,14.1464466 L7.35355339,8.26776695 C6.37724266,7.29145622 6.37724266,5.70854378 7.35355339,4.73223305 C7.82239434,4.2633921 8.45827912,4 9.12132034,4 L13,4 L13,1.28305684 C13,0.73077209 13.4477153,0.283056839 14,0.283056839 C14.1840048,0.283056839 14.3644421,0.333825725 14.52145,0.429775006 L20.6037206,4.14671817 C21.0749752,4.43470705 21.2235413,5.05019547 20.9355525,5.52145001 C20.8528289,5.6568159 20.7390865,5.77055823 20.6037206,5.85328183 L14.52145,9.57022499 C14.0501955,9.85821388 13.4347071,9.70964771 13.1467182,9.23839317 C13.0507689,9.08138526 13,8.90094791 13,8.71694316 L13,6 L9.12132034,6 C8.9887121,6 8.86153514,6.05267842 8.76776695,6.14644661 C8.57250481,6.34170876 8.57250481,6.65829124 8.76776695,6.85355339 L14.6464466,12.732233 C15.1152876,13.201074 15.3786797,13.8369588 15.3786797,14.5 C15.3786797,15.8807119 14.2593915,17 12.8786797,17 L9.99996671,17 L6.20711855,20.7927219 C5.81657341,21.1832069 5.18342659,21.1832069 4.79288145,20.7927219 L0.707118552,16.707095 C0.316575989,16.316589 0.316565449,15.683424 0.70708324,15.2928932 C0.707087164,15.2928893 0.707091087,15.2928854 0.707106781,15.2928932 L4.79289322,11.2071068 C5.18341751,10.8165825 5.81658249,10.8165825 6.20710678,11.2071068 L10,15 Z M15,6.93388632 L18.1645413,5 L15,3.06611368 L15,6.93388632 Z" id="Combined-Shape"></path>\n'
    + '        </g>\n'
    + '    </g>';
miro.onReady(function () { return __awaiter(_this, void 0, void 0, function () {
    var params;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                miro.initialize({
                    extensionPoints: {
                        bottomBar: function () { return __awaiter(_this, void 0, void 0, function () {
                            var permissions, canEdit, authorized;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, miro.currentUser.getCurrentBoardPermissions()];
                                    case 1:
                                        permissions = _a.sent();
                                        canEdit = permissions.findIndex(function (p) { return p === 'EDIT_CONTENT'; }) !== -1;
                                        return [4 /*yield*/, miro.isAuthorized()];
                                    case 2:
                                        authorized = _a.sent();
                                        if (authorized && canEdit) {
                                            return [2 /*return*/, {
                                                    title: 'Prototype',
                                                    svgIcon: icon24,
                                                    onClick: function () {
                                                        miro.board.ui.openBottomPanel('bottom-panel.html', { width: config__WEBPACK_IMPORTED_MODULE_0__["EDIT_WIDTH"] });
                                                    },
                                                }];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); },
                    },
                });
                return [4 /*yield*/, miro.board.__getParamsFromURL()];
            case 1:
                params = _a.sent();
                if (params.runPrototyping) {
                    miro.showNotification('Enter prototyping mode...');
                    miro.addListener('ALL_WIDGETS_LOADED', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            miro.__setRuntimeState({ enterPrototypingMode: true });
                            miro.board.ui.openBottomPanel('bottom-panel.html');
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
        }
    });
}); });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ID", function() { return APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_WIDTH", function() { return EDIT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_WIDTH", function() { return PLAY_WIDTH; });
var APP_ID = '3074457347180096573';
var EDIT_WIDTH = 280;
var PLAY_WIDTH = 320;


/***/ })
/******/ ]);