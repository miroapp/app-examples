var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) =>
  __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
  };
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (
    (module2 && typeof module2 === "object") ||
    typeof module2 === "function"
  ) {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, {
          get: () => module2[key],
          enumerable:
            !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        "default",
        !isNodeMode && module2 && module2.__esModule
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true }
      )
    ),
    module2
  );
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/@supabase/supabase-js/dist/main/lib/version.js
var require_version = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.version = void 0;
    exports2.version = "1.35.3";
  },
});

// node_modules/@supabase/supabase-js/dist/main/lib/constants.js
var require_constants = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.STORAGE_KEY = exports2.DEFAULT_HEADERS = void 0;
    var version_1 = require_version();
    exports2.DEFAULT_HEADERS = {
      "X-Client-Info": `supabase-js/${version_1.version}`,
    };
    exports2.STORAGE_KEY = "supabase.auth.token";
  },
});

// node_modules/@supabase/supabase-js/dist/main/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isBrowser = exports2.stripTrailingSlash = exports2.uuid = void 0;
    function uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r2 = (Math.random() * 16) | 0,
            v = c == "x" ? r2 : (r2 & 3) | 8;
          return v.toString(16);
        }
      );
    }
    exports2.uuid = uuid;
    function stripTrailingSlash(url) {
      return url.replace(/\/$/, "");
    }
    exports2.stripTrailingSlash = stripTrailingSlash;
    var isBrowser = () => typeof window !== "undefined";
    exports2.isBrowser = isBrowser;
  },
});

// node_modules/@supabase/gotrue-js/dist/main/lib/version.js
var require_version2 = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.version = void 0;
    exports2.version = "1.22.15";
  },
});

// node_modules/@supabase/gotrue-js/dist/main/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.COOKIE_OPTIONS =
      exports2.STORAGE_KEY =
      exports2.NETWORK_FAILURE =
      exports2.EXPIRY_MARGIN =
      exports2.DEFAULT_HEADERS =
      exports2.AUDIENCE =
      exports2.GOTRUE_URL =
        void 0;
    var version_1 = require_version2();
    exports2.GOTRUE_URL = "http://localhost:9999";
    exports2.AUDIENCE = "";
    exports2.DEFAULT_HEADERS = {
      "X-Client-Info": `gotrue-js/${version_1.version}`,
    };
    exports2.EXPIRY_MARGIN = 10;
    exports2.NETWORK_FAILURE = {
      ERROR_MESSAGE: "Request Failed",
      MAX_RETRIES: 10,
      RETRY_INTERVAL: 2,
    };
    exports2.STORAGE_KEY = "supabase.auth.token";
    exports2.COOKIE_OPTIONS = {
      name: "sb",
      lifetime: 60 * 60 * 8,
      domain: "",
      path: "/",
      sameSite: "lax",
    };
  },
});

// node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js
var require_fetch = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.remove = exports2.put = exports2.post = exports2.get = void 0;
    var constants_1 = require_constants2();
    var _getErrorMessage = (err) =>
      err.msg ||
      err.message ||
      err.error_description ||
      err.error ||
      JSON.stringify(err);
    var handleError = (error, reject) => {
      if (!(error === null || error === void 0 ? void 0 : error.status)) {
        return reject({ message: constants_1.NETWORK_FAILURE.ERROR_MESSAGE });
      }
      if (typeof error.json !== "function") {
        return reject(error);
      }
      error.json().then((err) => {
        return reject({
          message: _getErrorMessage(err),
          status:
            (error === null || error === void 0 ? void 0 : error.status) || 500,
        });
      });
    };
    var _getRequestParams = (method, options, body) => {
      const params = {
        method,
        headers:
          (options === null || options === void 0 ? void 0 : options.headers) ||
          {},
      };
      if (method === "GET") {
        return params;
      }
      params.headers = Object.assign(
        { "Content-Type": "text/plain;charset=UTF-8" },
        options === null || options === void 0 ? void 0 : options.headers
      );
      params.body = JSON.stringify(body);
      return params;
    };
    function _handleRequest(fetcher, method, url, options, body) {
      return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          fetcher(url, _getRequestParams(method, options, body))
            .then((result) => {
              if (!result.ok) throw result;
              if (
                options === null || options === void 0
                  ? void 0
                  : options.noResolveJson
              )
                return resolve;
              return result.json();
            })
            .then((data) => resolve(data))
            .catch((error) => handleError(error, reject));
        });
      });
    }
    function get(fetcher, url, options) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, "GET", url, options);
      });
    }
    exports2.get = get;
    function post(fetcher, url, body, options) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, "POST", url, options, body);
      });
    }
    exports2.post = post;
    function put(fetcher, url, body, options) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, "PUT", url, options, body);
      });
    }
    exports2.put = put;
    function remove(fetcher, url, body, options) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, "DELETE", url, options, body);
      });
    }
    exports2.remove = remove;
  },
});

// node_modules/@supabase/gotrue-js/dist/main/lib/cookies.js
var require_cookies = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/cookies.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.deleteCookie =
      exports2.setCookie =
      exports2.setCookies =
      exports2.getCookieString =
        void 0;
    function serialize(name, val, options) {
      const opt = options || {};
      const enc = encodeURIComponent;
      const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      const value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      let str = name + "=" + value;
      if (opt.maxAge != null) {
        const maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        const sameSite =
          typeof opt.sameSite === "string"
            ? opt.sameSite.toLowerCase()
            : opt.sameSite;
        switch (sameSite) {
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function isSecureEnvironment(req) {
      if (!req || !req.headers || !req.headers.host) {
        throw new Error('The "host" request header is not available');
      }
      const host =
        (req.headers.host.indexOf(":") > -1 &&
          req.headers.host.split(":")[0]) ||
        req.headers.host;
      if (
        ["localhost", "127.0.0.1"].indexOf(host) > -1 ||
        host.endsWith(".local")
      ) {
        return false;
      }
      return true;
    }
    function serializeCookie(cookie, secure) {
      var _a4, _b, _c;
      return serialize(cookie.name, cookie.value, {
        maxAge: cookie.maxAge,
        expires: new Date(Date.now() + cookie.maxAge * 1e3),
        httpOnly: true,
        secure,
        path: (_a4 = cookie.path) !== null && _a4 !== void 0 ? _a4 : "/",
        domain: (_b = cookie.domain) !== null && _b !== void 0 ? _b : "",
        sameSite: (_c = cookie.sameSite) !== null && _c !== void 0 ? _c : "lax",
      });
    }
    function getCookieString(req, res, cookies) {
      const strCookies = cookies.map((c) =>
        serializeCookie(c, isSecureEnvironment(req))
      );
      const previousCookies = res.getHeader("Set-Cookie");
      if (previousCookies) {
        if (previousCookies instanceof Array) {
          Array.prototype.push.apply(strCookies, previousCookies);
        } else if (typeof previousCookies === "string") {
          strCookies.push(previousCookies);
        }
      }
      return strCookies;
    }
    exports2.getCookieString = getCookieString;
    function setCookies(req, res, cookies) {
      res.setHeader("Set-Cookie", getCookieString(req, res, cookies));
    }
    exports2.setCookies = setCookies;
    function setCookie(req, res, cookie) {
      setCookies(req, res, [cookie]);
    }
    exports2.setCookie = setCookie;
    function deleteCookie(req, res, name) {
      setCookie(req, res, {
        name,
        value: "",
        maxAge: -1,
      });
    }
    exports2.deleteCookie = deleteCookie;
  },
});

// node_modules/webidl-conversions/lib/index.js
var require_lib = __commonJS({
  "node_modules/webidl-conversions/lib/index.js"(exports2, module2) {
    "use strict";
    var conversions = {};
    module2.exports = conversions;
    function sign(x2) {
      return x2 < 0 ? -1 : 1;
    }
    function evenRound(x2) {
      if (x2 % 1 === 0.5 && (x2 & 1) === 0) {
        return Math.floor(x2);
      } else {
        return Math.round(x2);
      }
    }
    function createNumberConversion(bitLength, typeOpts) {
      if (!typeOpts.unsigned) {
        --bitLength;
      }
      const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
      const upperBound = Math.pow(2, bitLength) - 1;
      const moduloVal = typeOpts.moduloBitLength
        ? Math.pow(2, typeOpts.moduloBitLength)
        : Math.pow(2, bitLength);
      const moduloBound = typeOpts.moduloBitLength
        ? Math.pow(2, typeOpts.moduloBitLength - 1)
        : Math.pow(2, bitLength - 1);
      return function (V, opts) {
        if (!opts) opts = {};
        let x2 = +V;
        if (opts.enforceRange) {
          if (!Number.isFinite(x2)) {
            throw new TypeError("Argument is not a finite number");
          }
          x2 = sign(x2) * Math.floor(Math.abs(x2));
          if (x2 < lowerBound || x2 > upperBound) {
            throw new TypeError("Argument is not in byte range");
          }
          return x2;
        }
        if (!isNaN(x2) && opts.clamp) {
          x2 = evenRound(x2);
          if (x2 < lowerBound) x2 = lowerBound;
          if (x2 > upperBound) x2 = upperBound;
          return x2;
        }
        if (!Number.isFinite(x2) || x2 === 0) {
          return 0;
        }
        x2 = sign(x2) * Math.floor(Math.abs(x2));
        x2 = x2 % moduloVal;
        if (!typeOpts.unsigned && x2 >= moduloBound) {
          return x2 - moduloVal;
        } else if (typeOpts.unsigned) {
          if (x2 < 0) {
            x2 += moduloVal;
          } else if (x2 === -0) {
            return 0;
          }
        }
        return x2;
      };
    }
    conversions["void"] = function () {
      return void 0;
    };
    conversions["boolean"] = function (val) {
      return !!val;
    };
    conversions["byte"] = createNumberConversion(8, { unsigned: false });
    conversions["octet"] = createNumberConversion(8, { unsigned: true });
    conversions["short"] = createNumberConversion(16, { unsigned: false });
    conversions["unsigned short"] = createNumberConversion(16, {
      unsigned: true,
    });
    conversions["long"] = createNumberConversion(32, { unsigned: false });
    conversions["unsigned long"] = createNumberConversion(32, {
      unsigned: true,
    });
    conversions["long long"] = createNumberConversion(32, {
      unsigned: false,
      moduloBitLength: 64,
    });
    conversions["unsigned long long"] = createNumberConversion(32, {
      unsigned: true,
      moduloBitLength: 64,
    });
    conversions["double"] = function (V) {
      const x2 = +V;
      if (!Number.isFinite(x2)) {
        throw new TypeError("Argument is not a finite floating-point value");
      }
      return x2;
    };
    conversions["unrestricted double"] = function (V) {
      const x2 = +V;
      if (isNaN(x2)) {
        throw new TypeError("Argument is NaN");
      }
      return x2;
    };
    conversions["float"] = conversions["double"];
    conversions["unrestricted float"] = conversions["unrestricted double"];
    conversions["DOMString"] = function (V, opts) {
      if (!opts) opts = {};
      if (opts.treatNullAsEmptyString && V === null) {
        return "";
      }
      return String(V);
    };
    conversions["ByteString"] = function (V, opts) {
      const x2 = String(V);
      let c = void 0;
      for (let i2 = 0; (c = x2.codePointAt(i2)) !== void 0; ++i2) {
        if (c > 255) {
          throw new TypeError("Argument is not a valid bytestring");
        }
      }
      return x2;
    };
    conversions["USVString"] = function (V) {
      const S2 = String(V);
      const n = S2.length;
      const U = [];
      for (let i2 = 0; i2 < n; ++i2) {
        const c = S2.charCodeAt(i2);
        if (c < 55296 || c > 57343) {
          U.push(String.fromCodePoint(c));
        } else if (56320 <= c && c <= 57343) {
          U.push(String.fromCodePoint(65533));
        } else {
          if (i2 === n - 1) {
            U.push(String.fromCodePoint(65533));
          } else {
            const d = S2.charCodeAt(i2 + 1);
            if (56320 <= d && d <= 57343) {
              const a = c & 1023;
              const b = d & 1023;
              U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
              ++i2;
            } else {
              U.push(String.fromCodePoint(65533));
            }
          }
        }
      }
      return U.join("");
    };
    conversions["Date"] = function (V, opts) {
      if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
      }
      if (isNaN(V)) {
        return void 0;
      }
      return V;
    };
    conversions["RegExp"] = function (V, opts) {
      if (!(V instanceof RegExp)) {
        V = new RegExp(V);
      }
      return V;
    };
  },
});

// node_modules/whatwg-url/lib/utils.js
var require_utils = __commonJS({
  "node_modules/whatwg-url/lib/utils.js"(exports2, module2) {
    "use strict";
    module2.exports.mixin = function mixin(target, source) {
      const keys = Object.getOwnPropertyNames(source);
      for (let i2 = 0; i2 < keys.length; ++i2) {
        Object.defineProperty(
          target,
          keys[i2],
          Object.getOwnPropertyDescriptor(source, keys[i2])
        );
      }
    };
    module2.exports.wrapperSymbol = Symbol("wrapper");
    module2.exports.implSymbol = Symbol("impl");
    module2.exports.wrapperForImpl = function (impl) {
      return impl[module2.exports.wrapperSymbol];
    };
    module2.exports.implForWrapper = function (wrapper) {
      return wrapper[module2.exports.implSymbol];
    };
  },
});

// node_modules/tr46/lib/mappingTable.json
var require_mappingTable = __commonJS({
  "node_modules/tr46/lib/mappingTable.json"(exports2, module2) {
    module2.exports = [
      [[0, 44], "disallowed_STD3_valid"],
      [[45, 46], "valid"],
      [[47, 47], "disallowed_STD3_valid"],
      [[48, 57], "valid"],
      [[58, 64], "disallowed_STD3_valid"],
      [[65, 65], "mapped", [97]],
      [[66, 66], "mapped", [98]],
      [[67, 67], "mapped", [99]],
      [[68, 68], "mapped", [100]],
      [[69, 69], "mapped", [101]],
      [[70, 70], "mapped", [102]],
      [[71, 71], "mapped", [103]],
      [[72, 72], "mapped", [104]],
      [[73, 73], "mapped", [105]],
      [[74, 74], "mapped", [106]],
      [[75, 75], "mapped", [107]],
      [[76, 76], "mapped", [108]],
      [[77, 77], "mapped", [109]],
      [[78, 78], "mapped", [110]],
      [[79, 79], "mapped", [111]],
      [[80, 80], "mapped", [112]],
      [[81, 81], "mapped", [113]],
      [[82, 82], "mapped", [114]],
      [[83, 83], "mapped", [115]],
      [[84, 84], "mapped", [116]],
      [[85, 85], "mapped", [117]],
      [[86, 86], "mapped", [118]],
      [[87, 87], "mapped", [119]],
      [[88, 88], "mapped", [120]],
      [[89, 89], "mapped", [121]],
      [[90, 90], "mapped", [122]],
      [[91, 96], "disallowed_STD3_valid"],
      [[97, 122], "valid"],
      [[123, 127], "disallowed_STD3_valid"],
      [[128, 159], "disallowed"],
      [[160, 160], "disallowed_STD3_mapped", [32]],
      [[161, 167], "valid", [], "NV8"],
      [[168, 168], "disallowed_STD3_mapped", [32, 776]],
      [[169, 169], "valid", [], "NV8"],
      [[170, 170], "mapped", [97]],
      [[171, 172], "valid", [], "NV8"],
      [[173, 173], "ignored"],
      [[174, 174], "valid", [], "NV8"],
      [[175, 175], "disallowed_STD3_mapped", [32, 772]],
      [[176, 177], "valid", [], "NV8"],
      [[178, 178], "mapped", [50]],
      [[179, 179], "mapped", [51]],
      [[180, 180], "disallowed_STD3_mapped", [32, 769]],
      [[181, 181], "mapped", [956]],
      [[182, 182], "valid", [], "NV8"],
      [[183, 183], "valid"],
      [[184, 184], "disallowed_STD3_mapped", [32, 807]],
      [[185, 185], "mapped", [49]],
      [[186, 186], "mapped", [111]],
      [[187, 187], "valid", [], "NV8"],
      [[188, 188], "mapped", [49, 8260, 52]],
      [[189, 189], "mapped", [49, 8260, 50]],
      [[190, 190], "mapped", [51, 8260, 52]],
      [[191, 191], "valid", [], "NV8"],
      [[192, 192], "mapped", [224]],
      [[193, 193], "mapped", [225]],
      [[194, 194], "mapped", [226]],
      [[195, 195], "mapped", [227]],
      [[196, 196], "mapped", [228]],
      [[197, 197], "mapped", [229]],
      [[198, 198], "mapped", [230]],
      [[199, 199], "mapped", [231]],
      [[200, 200], "mapped", [232]],
      [[201, 201], "mapped", [233]],
      [[202, 202], "mapped", [234]],
      [[203, 203], "mapped", [235]],
      [[204, 204], "mapped", [236]],
      [[205, 205], "mapped", [237]],
      [[206, 206], "mapped", [238]],
      [[207, 207], "mapped", [239]],
      [[208, 208], "mapped", [240]],
      [[209, 209], "mapped", [241]],
      [[210, 210], "mapped", [242]],
      [[211, 211], "mapped", [243]],
      [[212, 212], "mapped", [244]],
      [[213, 213], "mapped", [245]],
      [[214, 214], "mapped", [246]],
      [[215, 215], "valid", [], "NV8"],
      [[216, 216], "mapped", [248]],
      [[217, 217], "mapped", [249]],
      [[218, 218], "mapped", [250]],
      [[219, 219], "mapped", [251]],
      [[220, 220], "mapped", [252]],
      [[221, 221], "mapped", [253]],
      [[222, 222], "mapped", [254]],
      [[223, 223], "deviation", [115, 115]],
      [[224, 246], "valid"],
      [[247, 247], "valid", [], "NV8"],
      [[248, 255], "valid"],
      [[256, 256], "mapped", [257]],
      [[257, 257], "valid"],
      [[258, 258], "mapped", [259]],
      [[259, 259], "valid"],
      [[260, 260], "mapped", [261]],
      [[261, 261], "valid"],
      [[262, 262], "mapped", [263]],
      [[263, 263], "valid"],
      [[264, 264], "mapped", [265]],
      [[265, 265], "valid"],
      [[266, 266], "mapped", [267]],
      [[267, 267], "valid"],
      [[268, 268], "mapped", [269]],
      [[269, 269], "valid"],
      [[270, 270], "mapped", [271]],
      [[271, 271], "valid"],
      [[272, 272], "mapped", [273]],
      [[273, 273], "valid"],
      [[274, 274], "mapped", [275]],
      [[275, 275], "valid"],
      [[276, 276], "mapped", [277]],
      [[277, 277], "valid"],
      [[278, 278], "mapped", [279]],
      [[279, 279], "valid"],
      [[280, 280], "mapped", [281]],
      [[281, 281], "valid"],
      [[282, 282], "mapped", [283]],
      [[283, 283], "valid"],
      [[284, 284], "mapped", [285]],
      [[285, 285], "valid"],
      [[286, 286], "mapped", [287]],
      [[287, 287], "valid"],
      [[288, 288], "mapped", [289]],
      [[289, 289], "valid"],
      [[290, 290], "mapped", [291]],
      [[291, 291], "valid"],
      [[292, 292], "mapped", [293]],
      [[293, 293], "valid"],
      [[294, 294], "mapped", [295]],
      [[295, 295], "valid"],
      [[296, 296], "mapped", [297]],
      [[297, 297], "valid"],
      [[298, 298], "mapped", [299]],
      [[299, 299], "valid"],
      [[300, 300], "mapped", [301]],
      [[301, 301], "valid"],
      [[302, 302], "mapped", [303]],
      [[303, 303], "valid"],
      [[304, 304], "mapped", [105, 775]],
      [[305, 305], "valid"],
      [[306, 307], "mapped", [105, 106]],
      [[308, 308], "mapped", [309]],
      [[309, 309], "valid"],
      [[310, 310], "mapped", [311]],
      [[311, 312], "valid"],
      [[313, 313], "mapped", [314]],
      [[314, 314], "valid"],
      [[315, 315], "mapped", [316]],
      [[316, 316], "valid"],
      [[317, 317], "mapped", [318]],
      [[318, 318], "valid"],
      [[319, 320], "mapped", [108, 183]],
      [[321, 321], "mapped", [322]],
      [[322, 322], "valid"],
      [[323, 323], "mapped", [324]],
      [[324, 324], "valid"],
      [[325, 325], "mapped", [326]],
      [[326, 326], "valid"],
      [[327, 327], "mapped", [328]],
      [[328, 328], "valid"],
      [[329, 329], "mapped", [700, 110]],
      [[330, 330], "mapped", [331]],
      [[331, 331], "valid"],
      [[332, 332], "mapped", [333]],
      [[333, 333], "valid"],
      [[334, 334], "mapped", [335]],
      [[335, 335], "valid"],
      [[336, 336], "mapped", [337]],
      [[337, 337], "valid"],
      [[338, 338], "mapped", [339]],
      [[339, 339], "valid"],
      [[340, 340], "mapped", [341]],
      [[341, 341], "valid"],
      [[342, 342], "mapped", [343]],
      [[343, 343], "valid"],
      [[344, 344], "mapped", [345]],
      [[345, 345], "valid"],
      [[346, 346], "mapped", [347]],
      [[347, 347], "valid"],
      [[348, 348], "mapped", [349]],
      [[349, 349], "valid"],
      [[350, 350], "mapped", [351]],
      [[351, 351], "valid"],
      [[352, 352], "mapped", [353]],
      [[353, 353], "valid"],
      [[354, 354], "mapped", [355]],
      [[355, 355], "valid"],
      [[356, 356], "mapped", [357]],
      [[357, 357], "valid"],
      [[358, 358], "mapped", [359]],
      [[359, 359], "valid"],
      [[360, 360], "mapped", [361]],
      [[361, 361], "valid"],
      [[362, 362], "mapped", [363]],
      [[363, 363], "valid"],
      [[364, 364], "mapped", [365]],
      [[365, 365], "valid"],
      [[366, 366], "mapped", [367]],
      [[367, 367], "valid"],
      [[368, 368], "mapped", [369]],
      [[369, 369], "valid"],
      [[370, 370], "mapped", [371]],
      [[371, 371], "valid"],
      [[372, 372], "mapped", [373]],
      [[373, 373], "valid"],
      [[374, 374], "mapped", [375]],
      [[375, 375], "valid"],
      [[376, 376], "mapped", [255]],
      [[377, 377], "mapped", [378]],
      [[378, 378], "valid"],
      [[379, 379], "mapped", [380]],
      [[380, 380], "valid"],
      [[381, 381], "mapped", [382]],
      [[382, 382], "valid"],
      [[383, 383], "mapped", [115]],
      [[384, 384], "valid"],
      [[385, 385], "mapped", [595]],
      [[386, 386], "mapped", [387]],
      [[387, 387], "valid"],
      [[388, 388], "mapped", [389]],
      [[389, 389], "valid"],
      [[390, 390], "mapped", [596]],
      [[391, 391], "mapped", [392]],
      [[392, 392], "valid"],
      [[393, 393], "mapped", [598]],
      [[394, 394], "mapped", [599]],
      [[395, 395], "mapped", [396]],
      [[396, 397], "valid"],
      [[398, 398], "mapped", [477]],
      [[399, 399], "mapped", [601]],
      [[400, 400], "mapped", [603]],
      [[401, 401], "mapped", [402]],
      [[402, 402], "valid"],
      [[403, 403], "mapped", [608]],
      [[404, 404], "mapped", [611]],
      [[405, 405], "valid"],
      [[406, 406], "mapped", [617]],
      [[407, 407], "mapped", [616]],
      [[408, 408], "mapped", [409]],
      [[409, 411], "valid"],
      [[412, 412], "mapped", [623]],
      [[413, 413], "mapped", [626]],
      [[414, 414], "valid"],
      [[415, 415], "mapped", [629]],
      [[416, 416], "mapped", [417]],
      [[417, 417], "valid"],
      [[418, 418], "mapped", [419]],
      [[419, 419], "valid"],
      [[420, 420], "mapped", [421]],
      [[421, 421], "valid"],
      [[422, 422], "mapped", [640]],
      [[423, 423], "mapped", [424]],
      [[424, 424], "valid"],
      [[425, 425], "mapped", [643]],
      [[426, 427], "valid"],
      [[428, 428], "mapped", [429]],
      [[429, 429], "valid"],
      [[430, 430], "mapped", [648]],
      [[431, 431], "mapped", [432]],
      [[432, 432], "valid"],
      [[433, 433], "mapped", [650]],
      [[434, 434], "mapped", [651]],
      [[435, 435], "mapped", [436]],
      [[436, 436], "valid"],
      [[437, 437], "mapped", [438]],
      [[438, 438], "valid"],
      [[439, 439], "mapped", [658]],
      [[440, 440], "mapped", [441]],
      [[441, 443], "valid"],
      [[444, 444], "mapped", [445]],
      [[445, 451], "valid"],
      [[452, 454], "mapped", [100, 382]],
      [[455, 457], "mapped", [108, 106]],
      [[458, 460], "mapped", [110, 106]],
      [[461, 461], "mapped", [462]],
      [[462, 462], "valid"],
      [[463, 463], "mapped", [464]],
      [[464, 464], "valid"],
      [[465, 465], "mapped", [466]],
      [[466, 466], "valid"],
      [[467, 467], "mapped", [468]],
      [[468, 468], "valid"],
      [[469, 469], "mapped", [470]],
      [[470, 470], "valid"],
      [[471, 471], "mapped", [472]],
      [[472, 472], "valid"],
      [[473, 473], "mapped", [474]],
      [[474, 474], "valid"],
      [[475, 475], "mapped", [476]],
      [[476, 477], "valid"],
      [[478, 478], "mapped", [479]],
      [[479, 479], "valid"],
      [[480, 480], "mapped", [481]],
      [[481, 481], "valid"],
      [[482, 482], "mapped", [483]],
      [[483, 483], "valid"],
      [[484, 484], "mapped", [485]],
      [[485, 485], "valid"],
      [[486, 486], "mapped", [487]],
      [[487, 487], "valid"],
      [[488, 488], "mapped", [489]],
      [[489, 489], "valid"],
      [[490, 490], "mapped", [491]],
      [[491, 491], "valid"],
      [[492, 492], "mapped", [493]],
      [[493, 493], "valid"],
      [[494, 494], "mapped", [495]],
      [[495, 496], "valid"],
      [[497, 499], "mapped", [100, 122]],
      [[500, 500], "mapped", [501]],
      [[501, 501], "valid"],
      [[502, 502], "mapped", [405]],
      [[503, 503], "mapped", [447]],
      [[504, 504], "mapped", [505]],
      [[505, 505], "valid"],
      [[506, 506], "mapped", [507]],
      [[507, 507], "valid"],
      [[508, 508], "mapped", [509]],
      [[509, 509], "valid"],
      [[510, 510], "mapped", [511]],
      [[511, 511], "valid"],
      [[512, 512], "mapped", [513]],
      [[513, 513], "valid"],
      [[514, 514], "mapped", [515]],
      [[515, 515], "valid"],
      [[516, 516], "mapped", [517]],
      [[517, 517], "valid"],
      [[518, 518], "mapped", [519]],
      [[519, 519], "valid"],
      [[520, 520], "mapped", [521]],
      [[521, 521], "valid"],
      [[522, 522], "mapped", [523]],
      [[523, 523], "valid"],
      [[524, 524], "mapped", [525]],
      [[525, 525], "valid"],
      [[526, 526], "mapped", [527]],
      [[527, 527], "valid"],
      [[528, 528], "mapped", [529]],
      [[529, 529], "valid"],
      [[530, 530], "mapped", [531]],
      [[531, 531], "valid"],
      [[532, 532], "mapped", [533]],
      [[533, 533], "valid"],
      [[534, 534], "mapped", [535]],
      [[535, 535], "valid"],
      [[536, 536], "mapped", [537]],
      [[537, 537], "valid"],
      [[538, 538], "mapped", [539]],
      [[539, 539], "valid"],
      [[540, 540], "mapped", [541]],
      [[541, 541], "valid"],
      [[542, 542], "mapped", [543]],
      [[543, 543], "valid"],
      [[544, 544], "mapped", [414]],
      [[545, 545], "valid"],
      [[546, 546], "mapped", [547]],
      [[547, 547], "valid"],
      [[548, 548], "mapped", [549]],
      [[549, 549], "valid"],
      [[550, 550], "mapped", [551]],
      [[551, 551], "valid"],
      [[552, 552], "mapped", [553]],
      [[553, 553], "valid"],
      [[554, 554], "mapped", [555]],
      [[555, 555], "valid"],
      [[556, 556], "mapped", [557]],
      [[557, 557], "valid"],
      [[558, 558], "mapped", [559]],
      [[559, 559], "valid"],
      [[560, 560], "mapped", [561]],
      [[561, 561], "valid"],
      [[562, 562], "mapped", [563]],
      [[563, 563], "valid"],
      [[564, 566], "valid"],
      [[567, 569], "valid"],
      [[570, 570], "mapped", [11365]],
      [[571, 571], "mapped", [572]],
      [[572, 572], "valid"],
      [[573, 573], "mapped", [410]],
      [[574, 574], "mapped", [11366]],
      [[575, 576], "valid"],
      [[577, 577], "mapped", [578]],
      [[578, 578], "valid"],
      [[579, 579], "mapped", [384]],
      [[580, 580], "mapped", [649]],
      [[581, 581], "mapped", [652]],
      [[582, 582], "mapped", [583]],
      [[583, 583], "valid"],
      [[584, 584], "mapped", [585]],
      [[585, 585], "valid"],
      [[586, 586], "mapped", [587]],
      [[587, 587], "valid"],
      [[588, 588], "mapped", [589]],
      [[589, 589], "valid"],
      [[590, 590], "mapped", [591]],
      [[591, 591], "valid"],
      [[592, 680], "valid"],
      [[681, 685], "valid"],
      [[686, 687], "valid"],
      [[688, 688], "mapped", [104]],
      [[689, 689], "mapped", [614]],
      [[690, 690], "mapped", [106]],
      [[691, 691], "mapped", [114]],
      [[692, 692], "mapped", [633]],
      [[693, 693], "mapped", [635]],
      [[694, 694], "mapped", [641]],
      [[695, 695], "mapped", [119]],
      [[696, 696], "mapped", [121]],
      [[697, 705], "valid"],
      [[706, 709], "valid", [], "NV8"],
      [[710, 721], "valid"],
      [[722, 727], "valid", [], "NV8"],
      [[728, 728], "disallowed_STD3_mapped", [32, 774]],
      [[729, 729], "disallowed_STD3_mapped", [32, 775]],
      [[730, 730], "disallowed_STD3_mapped", [32, 778]],
      [[731, 731], "disallowed_STD3_mapped", [32, 808]],
      [[732, 732], "disallowed_STD3_mapped", [32, 771]],
      [[733, 733], "disallowed_STD3_mapped", [32, 779]],
      [[734, 734], "valid", [], "NV8"],
      [[735, 735], "valid", [], "NV8"],
      [[736, 736], "mapped", [611]],
      [[737, 737], "mapped", [108]],
      [[738, 738], "mapped", [115]],
      [[739, 739], "mapped", [120]],
      [[740, 740], "mapped", [661]],
      [[741, 745], "valid", [], "NV8"],
      [[746, 747], "valid", [], "NV8"],
      [[748, 748], "valid"],
      [[749, 749], "valid", [], "NV8"],
      [[750, 750], "valid"],
      [[751, 767], "valid", [], "NV8"],
      [[768, 831], "valid"],
      [[832, 832], "mapped", [768]],
      [[833, 833], "mapped", [769]],
      [[834, 834], "valid"],
      [[835, 835], "mapped", [787]],
      [[836, 836], "mapped", [776, 769]],
      [[837, 837], "mapped", [953]],
      [[838, 846], "valid"],
      [[847, 847], "ignored"],
      [[848, 855], "valid"],
      [[856, 860], "valid"],
      [[861, 863], "valid"],
      [[864, 865], "valid"],
      [[866, 866], "valid"],
      [[867, 879], "valid"],
      [[880, 880], "mapped", [881]],
      [[881, 881], "valid"],
      [[882, 882], "mapped", [883]],
      [[883, 883], "valid"],
      [[884, 884], "mapped", [697]],
      [[885, 885], "valid"],
      [[886, 886], "mapped", [887]],
      [[887, 887], "valid"],
      [[888, 889], "disallowed"],
      [[890, 890], "disallowed_STD3_mapped", [32, 953]],
      [[891, 893], "valid"],
      [[894, 894], "disallowed_STD3_mapped", [59]],
      [[895, 895], "mapped", [1011]],
      [[896, 899], "disallowed"],
      [[900, 900], "disallowed_STD3_mapped", [32, 769]],
      [[901, 901], "disallowed_STD3_mapped", [32, 776, 769]],
      [[902, 902], "mapped", [940]],
      [[903, 903], "mapped", [183]],
      [[904, 904], "mapped", [941]],
      [[905, 905], "mapped", [942]],
      [[906, 906], "mapped", [943]],
      [[907, 907], "disallowed"],
      [[908, 908], "mapped", [972]],
      [[909, 909], "disallowed"],
      [[910, 910], "mapped", [973]],
      [[911, 911], "mapped", [974]],
      [[912, 912], "valid"],
      [[913, 913], "mapped", [945]],
      [[914, 914], "mapped", [946]],
      [[915, 915], "mapped", [947]],
      [[916, 916], "mapped", [948]],
      [[917, 917], "mapped", [949]],
      [[918, 918], "mapped", [950]],
      [[919, 919], "mapped", [951]],
      [[920, 920], "mapped", [952]],
      [[921, 921], "mapped", [953]],
      [[922, 922], "mapped", [954]],
      [[923, 923], "mapped", [955]],
      [[924, 924], "mapped", [956]],
      [[925, 925], "mapped", [957]],
      [[926, 926], "mapped", [958]],
      [[927, 927], "mapped", [959]],
      [[928, 928], "mapped", [960]],
      [[929, 929], "mapped", [961]],
      [[930, 930], "disallowed"],
      [[931, 931], "mapped", [963]],
      [[932, 932], "mapped", [964]],
      [[933, 933], "mapped", [965]],
      [[934, 934], "mapped", [966]],
      [[935, 935], "mapped", [967]],
      [[936, 936], "mapped", [968]],
      [[937, 937], "mapped", [969]],
      [[938, 938], "mapped", [970]],
      [[939, 939], "mapped", [971]],
      [[940, 961], "valid"],
      [[962, 962], "deviation", [963]],
      [[963, 974], "valid"],
      [[975, 975], "mapped", [983]],
      [[976, 976], "mapped", [946]],
      [[977, 977], "mapped", [952]],
      [[978, 978], "mapped", [965]],
      [[979, 979], "mapped", [973]],
      [[980, 980], "mapped", [971]],
      [[981, 981], "mapped", [966]],
      [[982, 982], "mapped", [960]],
      [[983, 983], "valid"],
      [[984, 984], "mapped", [985]],
      [[985, 985], "valid"],
      [[986, 986], "mapped", [987]],
      [[987, 987], "valid"],
      [[988, 988], "mapped", [989]],
      [[989, 989], "valid"],
      [[990, 990], "mapped", [991]],
      [[991, 991], "valid"],
      [[992, 992], "mapped", [993]],
      [[993, 993], "valid"],
      [[994, 994], "mapped", [995]],
      [[995, 995], "valid"],
      [[996, 996], "mapped", [997]],
      [[997, 997], "valid"],
      [[998, 998], "mapped", [999]],
      [[999, 999], "valid"],
      [[1e3, 1e3], "mapped", [1001]],
      [[1001, 1001], "valid"],
      [[1002, 1002], "mapped", [1003]],
      [[1003, 1003], "valid"],
      [[1004, 1004], "mapped", [1005]],
      [[1005, 1005], "valid"],
      [[1006, 1006], "mapped", [1007]],
      [[1007, 1007], "valid"],
      [[1008, 1008], "mapped", [954]],
      [[1009, 1009], "mapped", [961]],
      [[1010, 1010], "mapped", [963]],
      [[1011, 1011], "valid"],
      [[1012, 1012], "mapped", [952]],
      [[1013, 1013], "mapped", [949]],
      [[1014, 1014], "valid", [], "NV8"],
      [[1015, 1015], "mapped", [1016]],
      [[1016, 1016], "valid"],
      [[1017, 1017], "mapped", [963]],
      [[1018, 1018], "mapped", [1019]],
      [[1019, 1019], "valid"],
      [[1020, 1020], "valid"],
      [[1021, 1021], "mapped", [891]],
      [[1022, 1022], "mapped", [892]],
      [[1023, 1023], "mapped", [893]],
      [[1024, 1024], "mapped", [1104]],
      [[1025, 1025], "mapped", [1105]],
      [[1026, 1026], "mapped", [1106]],
      [[1027, 1027], "mapped", [1107]],
      [[1028, 1028], "mapped", [1108]],
      [[1029, 1029], "mapped", [1109]],
      [[1030, 1030], "mapped", [1110]],
      [[1031, 1031], "mapped", [1111]],
      [[1032, 1032], "mapped", [1112]],
      [[1033, 1033], "mapped", [1113]],
      [[1034, 1034], "mapped", [1114]],
      [[1035, 1035], "mapped", [1115]],
      [[1036, 1036], "mapped", [1116]],
      [[1037, 1037], "mapped", [1117]],
      [[1038, 1038], "mapped", [1118]],
      [[1039, 1039], "mapped", [1119]],
      [[1040, 1040], "mapped", [1072]],
      [[1041, 1041], "mapped", [1073]],
      [[1042, 1042], "mapped", [1074]],
      [[1043, 1043], "mapped", [1075]],
      [[1044, 1044], "mapped", [1076]],
      [[1045, 1045], "mapped", [1077]],
      [[1046, 1046], "mapped", [1078]],
      [[1047, 1047], "mapped", [1079]],
      [[1048, 1048], "mapped", [1080]],
      [[1049, 1049], "mapped", [1081]],
      [[1050, 1050], "mapped", [1082]],
      [[1051, 1051], "mapped", [1083]],
      [[1052, 1052], "mapped", [1084]],
      [[1053, 1053], "mapped", [1085]],
      [[1054, 1054], "mapped", [1086]],
      [[1055, 1055], "mapped", [1087]],
      [[1056, 1056], "mapped", [1088]],
      [[1057, 1057], "mapped", [1089]],
      [[1058, 1058], "mapped", [1090]],
      [[1059, 1059], "mapped", [1091]],
      [[1060, 1060], "mapped", [1092]],
      [[1061, 1061], "mapped", [1093]],
      [[1062, 1062], "mapped", [1094]],
      [[1063, 1063], "mapped", [1095]],
      [[1064, 1064], "mapped", [1096]],
      [[1065, 1065], "mapped", [1097]],
      [[1066, 1066], "mapped", [1098]],
      [[1067, 1067], "mapped", [1099]],
      [[1068, 1068], "mapped", [1100]],
      [[1069, 1069], "mapped", [1101]],
      [[1070, 1070], "mapped", [1102]],
      [[1071, 1071], "mapped", [1103]],
      [[1072, 1103], "valid"],
      [[1104, 1104], "valid"],
      [[1105, 1116], "valid"],
      [[1117, 1117], "valid"],
      [[1118, 1119], "valid"],
      [[1120, 1120], "mapped", [1121]],
      [[1121, 1121], "valid"],
      [[1122, 1122], "mapped", [1123]],
      [[1123, 1123], "valid"],
      [[1124, 1124], "mapped", [1125]],
      [[1125, 1125], "valid"],
      [[1126, 1126], "mapped", [1127]],
      [[1127, 1127], "valid"],
      [[1128, 1128], "mapped", [1129]],
      [[1129, 1129], "valid"],
      [[1130, 1130], "mapped", [1131]],
      [[1131, 1131], "valid"],
      [[1132, 1132], "mapped", [1133]],
      [[1133, 1133], "valid"],
      [[1134, 1134], "mapped", [1135]],
      [[1135, 1135], "valid"],
      [[1136, 1136], "mapped", [1137]],
      [[1137, 1137], "valid"],
      [[1138, 1138], "mapped", [1139]],
      [[1139, 1139], "valid"],
      [[1140, 1140], "mapped", [1141]],
      [[1141, 1141], "valid"],
      [[1142, 1142], "mapped", [1143]],
      [[1143, 1143], "valid"],
      [[1144, 1144], "mapped", [1145]],
      [[1145, 1145], "valid"],
      [[1146, 1146], "mapped", [1147]],
      [[1147, 1147], "valid"],
      [[1148, 1148], "mapped", [1149]],
      [[1149, 1149], "valid"],
      [[1150, 1150], "mapped", [1151]],
      [[1151, 1151], "valid"],
      [[1152, 1152], "mapped", [1153]],
      [[1153, 1153], "valid"],
      [[1154, 1154], "valid", [], "NV8"],
      [[1155, 1158], "valid"],
      [[1159, 1159], "valid"],
      [[1160, 1161], "valid", [], "NV8"],
      [[1162, 1162], "mapped", [1163]],
      [[1163, 1163], "valid"],
      [[1164, 1164], "mapped", [1165]],
      [[1165, 1165], "valid"],
      [[1166, 1166], "mapped", [1167]],
      [[1167, 1167], "valid"],
      [[1168, 1168], "mapped", [1169]],
      [[1169, 1169], "valid"],
      [[1170, 1170], "mapped", [1171]],
      [[1171, 1171], "valid"],
      [[1172, 1172], "mapped", [1173]],
      [[1173, 1173], "valid"],
      [[1174, 1174], "mapped", [1175]],
      [[1175, 1175], "valid"],
      [[1176, 1176], "mapped", [1177]],
      [[1177, 1177], "valid"],
      [[1178, 1178], "mapped", [1179]],
      [[1179, 1179], "valid"],
      [[1180, 1180], "mapped", [1181]],
      [[1181, 1181], "valid"],
      [[1182, 1182], "mapped", [1183]],
      [[1183, 1183], "valid"],
      [[1184, 1184], "mapped", [1185]],
      [[1185, 1185], "valid"],
      [[1186, 1186], "mapped", [1187]],
      [[1187, 1187], "valid"],
      [[1188, 1188], "mapped", [1189]],
      [[1189, 1189], "valid"],
      [[1190, 1190], "mapped", [1191]],
      [[1191, 1191], "valid"],
      [[1192, 1192], "mapped", [1193]],
      [[1193, 1193], "valid"],
      [[1194, 1194], "mapped", [1195]],
      [[1195, 1195], "valid"],
      [[1196, 1196], "mapped", [1197]],
      [[1197, 1197], "valid"],
      [[1198, 1198], "mapped", [1199]],
      [[1199, 1199], "valid"],
      [[1200, 1200], "mapped", [1201]],
      [[1201, 1201], "valid"],
      [[1202, 1202], "mapped", [1203]],
      [[1203, 1203], "valid"],
      [[1204, 1204], "mapped", [1205]],
      [[1205, 1205], "valid"],
      [[1206, 1206], "mapped", [1207]],
      [[1207, 1207], "valid"],
      [[1208, 1208], "mapped", [1209]],
      [[1209, 1209], "valid"],
      [[1210, 1210], "mapped", [1211]],
      [[1211, 1211], "valid"],
      [[1212, 1212], "mapped", [1213]],
      [[1213, 1213], "valid"],
      [[1214, 1214], "mapped", [1215]],
      [[1215, 1215], "valid"],
      [[1216, 1216], "disallowed"],
      [[1217, 1217], "mapped", [1218]],
      [[1218, 1218], "valid"],
      [[1219, 1219], "mapped", [1220]],
      [[1220, 1220], "valid"],
      [[1221, 1221], "mapped", [1222]],
      [[1222, 1222], "valid"],
      [[1223, 1223], "mapped", [1224]],
      [[1224, 1224], "valid"],
      [[1225, 1225], "mapped", [1226]],
      [[1226, 1226], "valid"],
      [[1227, 1227], "mapped", [1228]],
      [[1228, 1228], "valid"],
      [[1229, 1229], "mapped", [1230]],
      [[1230, 1230], "valid"],
      [[1231, 1231], "valid"],
      [[1232, 1232], "mapped", [1233]],
      [[1233, 1233], "valid"],
      [[1234, 1234], "mapped", [1235]],
      [[1235, 1235], "valid"],
      [[1236, 1236], "mapped", [1237]],
      [[1237, 1237], "valid"],
      [[1238, 1238], "mapped", [1239]],
      [[1239, 1239], "valid"],
      [[1240, 1240], "mapped", [1241]],
      [[1241, 1241], "valid"],
      [[1242, 1242], "mapped", [1243]],
      [[1243, 1243], "valid"],
      [[1244, 1244], "mapped", [1245]],
      [[1245, 1245], "valid"],
      [[1246, 1246], "mapped", [1247]],
      [[1247, 1247], "valid"],
      [[1248, 1248], "mapped", [1249]],
      [[1249, 1249], "valid"],
      [[1250, 1250], "mapped", [1251]],
      [[1251, 1251], "valid"],
      [[1252, 1252], "mapped", [1253]],
      [[1253, 1253], "valid"],
      [[1254, 1254], "mapped", [1255]],
      [[1255, 1255], "valid"],
      [[1256, 1256], "mapped", [1257]],
      [[1257, 1257], "valid"],
      [[1258, 1258], "mapped", [1259]],
      [[1259, 1259], "valid"],
      [[1260, 1260], "mapped", [1261]],
      [[1261, 1261], "valid"],
      [[1262, 1262], "mapped", [1263]],
      [[1263, 1263], "valid"],
      [[1264, 1264], "mapped", [1265]],
      [[1265, 1265], "valid"],
      [[1266, 1266], "mapped", [1267]],
      [[1267, 1267], "valid"],
      [[1268, 1268], "mapped", [1269]],
      [[1269, 1269], "valid"],
      [[1270, 1270], "mapped", [1271]],
      [[1271, 1271], "valid"],
      [[1272, 1272], "mapped", [1273]],
      [[1273, 1273], "valid"],
      [[1274, 1274], "mapped", [1275]],
      [[1275, 1275], "valid"],
      [[1276, 1276], "mapped", [1277]],
      [[1277, 1277], "valid"],
      [[1278, 1278], "mapped", [1279]],
      [[1279, 1279], "valid"],
      [[1280, 1280], "mapped", [1281]],
      [[1281, 1281], "valid"],
      [[1282, 1282], "mapped", [1283]],
      [[1283, 1283], "valid"],
      [[1284, 1284], "mapped", [1285]],
      [[1285, 1285], "valid"],
      [[1286, 1286], "mapped", [1287]],
      [[1287, 1287], "valid"],
      [[1288, 1288], "mapped", [1289]],
      [[1289, 1289], "valid"],
      [[1290, 1290], "mapped", [1291]],
      [[1291, 1291], "valid"],
      [[1292, 1292], "mapped", [1293]],
      [[1293, 1293], "valid"],
      [[1294, 1294], "mapped", [1295]],
      [[1295, 1295], "valid"],
      [[1296, 1296], "mapped", [1297]],
      [[1297, 1297], "valid"],
      [[1298, 1298], "mapped", [1299]],
      [[1299, 1299], "valid"],
      [[1300, 1300], "mapped", [1301]],
      [[1301, 1301], "valid"],
      [[1302, 1302], "mapped", [1303]],
      [[1303, 1303], "valid"],
      [[1304, 1304], "mapped", [1305]],
      [[1305, 1305], "valid"],
      [[1306, 1306], "mapped", [1307]],
      [[1307, 1307], "valid"],
      [[1308, 1308], "mapped", [1309]],
      [[1309, 1309], "valid"],
      [[1310, 1310], "mapped", [1311]],
      [[1311, 1311], "valid"],
      [[1312, 1312], "mapped", [1313]],
      [[1313, 1313], "valid"],
      [[1314, 1314], "mapped", [1315]],
      [[1315, 1315], "valid"],
      [[1316, 1316], "mapped", [1317]],
      [[1317, 1317], "valid"],
      [[1318, 1318], "mapped", [1319]],
      [[1319, 1319], "valid"],
      [[1320, 1320], "mapped", [1321]],
      [[1321, 1321], "valid"],
      [[1322, 1322], "mapped", [1323]],
      [[1323, 1323], "valid"],
      [[1324, 1324], "mapped", [1325]],
      [[1325, 1325], "valid"],
      [[1326, 1326], "mapped", [1327]],
      [[1327, 1327], "valid"],
      [[1328, 1328], "disallowed"],
      [[1329, 1329], "mapped", [1377]],
      [[1330, 1330], "mapped", [1378]],
      [[1331, 1331], "mapped", [1379]],
      [[1332, 1332], "mapped", [1380]],
      [[1333, 1333], "mapped", [1381]],
      [[1334, 1334], "mapped", [1382]],
      [[1335, 1335], "mapped", [1383]],
      [[1336, 1336], "mapped", [1384]],
      [[1337, 1337], "mapped", [1385]],
      [[1338, 1338], "mapped", [1386]],
      [[1339, 1339], "mapped", [1387]],
      [[1340, 1340], "mapped", [1388]],
      [[1341, 1341], "mapped", [1389]],
      [[1342, 1342], "mapped", [1390]],
      [[1343, 1343], "mapped", [1391]],
      [[1344, 1344], "mapped", [1392]],
      [[1345, 1345], "mapped", [1393]],
      [[1346, 1346], "mapped", [1394]],
      [[1347, 1347], "mapped", [1395]],
      [[1348, 1348], "mapped", [1396]],
      [[1349, 1349], "mapped", [1397]],
      [[1350, 1350], "mapped", [1398]],
      [[1351, 1351], "mapped", [1399]],
      [[1352, 1352], "mapped", [1400]],
      [[1353, 1353], "mapped", [1401]],
      [[1354, 1354], "mapped", [1402]],
      [[1355, 1355], "mapped", [1403]],
      [[1356, 1356], "mapped", [1404]],
      [[1357, 1357], "mapped", [1405]],
      [[1358, 1358], "mapped", [1406]],
      [[1359, 1359], "mapped", [1407]],
      [[1360, 1360], "mapped", [1408]],
      [[1361, 1361], "mapped", [1409]],
      [[1362, 1362], "mapped", [1410]],
      [[1363, 1363], "mapped", [1411]],
      [[1364, 1364], "mapped", [1412]],
      [[1365, 1365], "mapped", [1413]],
      [[1366, 1366], "mapped", [1414]],
      [[1367, 1368], "disallowed"],
      [[1369, 1369], "valid"],
      [[1370, 1375], "valid", [], "NV8"],
      [[1376, 1376], "disallowed"],
      [[1377, 1414], "valid"],
      [[1415, 1415], "mapped", [1381, 1410]],
      [[1416, 1416], "disallowed"],
      [[1417, 1417], "valid", [], "NV8"],
      [[1418, 1418], "valid", [], "NV8"],
      [[1419, 1420], "disallowed"],
      [[1421, 1422], "valid", [], "NV8"],
      [[1423, 1423], "valid", [], "NV8"],
      [[1424, 1424], "disallowed"],
      [[1425, 1441], "valid"],
      [[1442, 1442], "valid"],
      [[1443, 1455], "valid"],
      [[1456, 1465], "valid"],
      [[1466, 1466], "valid"],
      [[1467, 1469], "valid"],
      [[1470, 1470], "valid", [], "NV8"],
      [[1471, 1471], "valid"],
      [[1472, 1472], "valid", [], "NV8"],
      [[1473, 1474], "valid"],
      [[1475, 1475], "valid", [], "NV8"],
      [[1476, 1476], "valid"],
      [[1477, 1477], "valid"],
      [[1478, 1478], "valid", [], "NV8"],
      [[1479, 1479], "valid"],
      [[1480, 1487], "disallowed"],
      [[1488, 1514], "valid"],
      [[1515, 1519], "disallowed"],
      [[1520, 1524], "valid"],
      [[1525, 1535], "disallowed"],
      [[1536, 1539], "disallowed"],
      [[1540, 1540], "disallowed"],
      [[1541, 1541], "disallowed"],
      [[1542, 1546], "valid", [], "NV8"],
      [[1547, 1547], "valid", [], "NV8"],
      [[1548, 1548], "valid", [], "NV8"],
      [[1549, 1551], "valid", [], "NV8"],
      [[1552, 1557], "valid"],
      [[1558, 1562], "valid"],
      [[1563, 1563], "valid", [], "NV8"],
      [[1564, 1564], "disallowed"],
      [[1565, 1565], "disallowed"],
      [[1566, 1566], "valid", [], "NV8"],
      [[1567, 1567], "valid", [], "NV8"],
      [[1568, 1568], "valid"],
      [[1569, 1594], "valid"],
      [[1595, 1599], "valid"],
      [[1600, 1600], "valid", [], "NV8"],
      [[1601, 1618], "valid"],
      [[1619, 1621], "valid"],
      [[1622, 1624], "valid"],
      [[1625, 1630], "valid"],
      [[1631, 1631], "valid"],
      [[1632, 1641], "valid"],
      [[1642, 1645], "valid", [], "NV8"],
      [[1646, 1647], "valid"],
      [[1648, 1652], "valid"],
      [[1653, 1653], "mapped", [1575, 1652]],
      [[1654, 1654], "mapped", [1608, 1652]],
      [[1655, 1655], "mapped", [1735, 1652]],
      [[1656, 1656], "mapped", [1610, 1652]],
      [[1657, 1719], "valid"],
      [[1720, 1721], "valid"],
      [[1722, 1726], "valid"],
      [[1727, 1727], "valid"],
      [[1728, 1742], "valid"],
      [[1743, 1743], "valid"],
      [[1744, 1747], "valid"],
      [[1748, 1748], "valid", [], "NV8"],
      [[1749, 1756], "valid"],
      [[1757, 1757], "disallowed"],
      [[1758, 1758], "valid", [], "NV8"],
      [[1759, 1768], "valid"],
      [[1769, 1769], "valid", [], "NV8"],
      [[1770, 1773], "valid"],
      [[1774, 1775], "valid"],
      [[1776, 1785], "valid"],
      [[1786, 1790], "valid"],
      [[1791, 1791], "valid"],
      [[1792, 1805], "valid", [], "NV8"],
      [[1806, 1806], "disallowed"],
      [[1807, 1807], "disallowed"],
      [[1808, 1836], "valid"],
      [[1837, 1839], "valid"],
      [[1840, 1866], "valid"],
      [[1867, 1868], "disallowed"],
      [[1869, 1871], "valid"],
      [[1872, 1901], "valid"],
      [[1902, 1919], "valid"],
      [[1920, 1968], "valid"],
      [[1969, 1969], "valid"],
      [[1970, 1983], "disallowed"],
      [[1984, 2037], "valid"],
      [[2038, 2042], "valid", [], "NV8"],
      [[2043, 2047], "disallowed"],
      [[2048, 2093], "valid"],
      [[2094, 2095], "disallowed"],
      [[2096, 2110], "valid", [], "NV8"],
      [[2111, 2111], "disallowed"],
      [[2112, 2139], "valid"],
      [[2140, 2141], "disallowed"],
      [[2142, 2142], "valid", [], "NV8"],
      [[2143, 2207], "disallowed"],
      [[2208, 2208], "valid"],
      [[2209, 2209], "valid"],
      [[2210, 2220], "valid"],
      [[2221, 2226], "valid"],
      [[2227, 2228], "valid"],
      [[2229, 2274], "disallowed"],
      [[2275, 2275], "valid"],
      [[2276, 2302], "valid"],
      [[2303, 2303], "valid"],
      [[2304, 2304], "valid"],
      [[2305, 2307], "valid"],
      [[2308, 2308], "valid"],
      [[2309, 2361], "valid"],
      [[2362, 2363], "valid"],
      [[2364, 2381], "valid"],
      [[2382, 2382], "valid"],
      [[2383, 2383], "valid"],
      [[2384, 2388], "valid"],
      [[2389, 2389], "valid"],
      [[2390, 2391], "valid"],
      [[2392, 2392], "mapped", [2325, 2364]],
      [[2393, 2393], "mapped", [2326, 2364]],
      [[2394, 2394], "mapped", [2327, 2364]],
      [[2395, 2395], "mapped", [2332, 2364]],
      [[2396, 2396], "mapped", [2337, 2364]],
      [[2397, 2397], "mapped", [2338, 2364]],
      [[2398, 2398], "mapped", [2347, 2364]],
      [[2399, 2399], "mapped", [2351, 2364]],
      [[2400, 2403], "valid"],
      [[2404, 2405], "valid", [], "NV8"],
      [[2406, 2415], "valid"],
      [[2416, 2416], "valid", [], "NV8"],
      [[2417, 2418], "valid"],
      [[2419, 2423], "valid"],
      [[2424, 2424], "valid"],
      [[2425, 2426], "valid"],
      [[2427, 2428], "valid"],
      [[2429, 2429], "valid"],
      [[2430, 2431], "valid"],
      [[2432, 2432], "valid"],
      [[2433, 2435], "valid"],
      [[2436, 2436], "disallowed"],
      [[2437, 2444], "valid"],
      [[2445, 2446], "disallowed"],
      [[2447, 2448], "valid"],
      [[2449, 2450], "disallowed"],
      [[2451, 2472], "valid"],
      [[2473, 2473], "disallowed"],
      [[2474, 2480], "valid"],
      [[2481, 2481], "disallowed"],
      [[2482, 2482], "valid"],
      [[2483, 2485], "disallowed"],
      [[2486, 2489], "valid"],
      [[2490, 2491], "disallowed"],
      [[2492, 2492], "valid"],
      [[2493, 2493], "valid"],
      [[2494, 2500], "valid"],
      [[2501, 2502], "disallowed"],
      [[2503, 2504], "valid"],
      [[2505, 2506], "disallowed"],
      [[2507, 2509], "valid"],
      [[2510, 2510], "valid"],
      [[2511, 2518], "disallowed"],
      [[2519, 2519], "valid"],
      [[2520, 2523], "disallowed"],
      [[2524, 2524], "mapped", [2465, 2492]],
      [[2525, 2525], "mapped", [2466, 2492]],
      [[2526, 2526], "disallowed"],
      [[2527, 2527], "mapped", [2479, 2492]],
      [[2528, 2531], "valid"],
      [[2532, 2533], "disallowed"],
      [[2534, 2545], "valid"],
      [[2546, 2554], "valid", [], "NV8"],
      [[2555, 2555], "valid", [], "NV8"],
      [[2556, 2560], "disallowed"],
      [[2561, 2561], "valid"],
      [[2562, 2562], "valid"],
      [[2563, 2563], "valid"],
      [[2564, 2564], "disallowed"],
      [[2565, 2570], "valid"],
      [[2571, 2574], "disallowed"],
      [[2575, 2576], "valid"],
      [[2577, 2578], "disallowed"],
      [[2579, 2600], "valid"],
      [[2601, 2601], "disallowed"],
      [[2602, 2608], "valid"],
      [[2609, 2609], "disallowed"],
      [[2610, 2610], "valid"],
      [[2611, 2611], "mapped", [2610, 2620]],
      [[2612, 2612], "disallowed"],
      [[2613, 2613], "valid"],
      [[2614, 2614], "mapped", [2616, 2620]],
      [[2615, 2615], "disallowed"],
      [[2616, 2617], "valid"],
      [[2618, 2619], "disallowed"],
      [[2620, 2620], "valid"],
      [[2621, 2621], "disallowed"],
      [[2622, 2626], "valid"],
      [[2627, 2630], "disallowed"],
      [[2631, 2632], "valid"],
      [[2633, 2634], "disallowed"],
      [[2635, 2637], "valid"],
      [[2638, 2640], "disallowed"],
      [[2641, 2641], "valid"],
      [[2642, 2648], "disallowed"],
      [[2649, 2649], "mapped", [2582, 2620]],
      [[2650, 2650], "mapped", [2583, 2620]],
      [[2651, 2651], "mapped", [2588, 2620]],
      [[2652, 2652], "valid"],
      [[2653, 2653], "disallowed"],
      [[2654, 2654], "mapped", [2603, 2620]],
      [[2655, 2661], "disallowed"],
      [[2662, 2676], "valid"],
      [[2677, 2677], "valid"],
      [[2678, 2688], "disallowed"],
      [[2689, 2691], "valid"],
      [[2692, 2692], "disallowed"],
      [[2693, 2699], "valid"],
      [[2700, 2700], "valid"],
      [[2701, 2701], "valid"],
      [[2702, 2702], "disallowed"],
      [[2703, 2705], "valid"],
      [[2706, 2706], "disallowed"],
      [[2707, 2728], "valid"],
      [[2729, 2729], "disallowed"],
      [[2730, 2736], "valid"],
      [[2737, 2737], "disallowed"],
      [[2738, 2739], "valid"],
      [[2740, 2740], "disallowed"],
      [[2741, 2745], "valid"],
      [[2746, 2747], "disallowed"],
      [[2748, 2757], "valid"],
      [[2758, 2758], "disallowed"],
      [[2759, 2761], "valid"],
      [[2762, 2762], "disallowed"],
      [[2763, 2765], "valid"],
      [[2766, 2767], "disallowed"],
      [[2768, 2768], "valid"],
      [[2769, 2783], "disallowed"],
      [[2784, 2784], "valid"],
      [[2785, 2787], "valid"],
      [[2788, 2789], "disallowed"],
      [[2790, 2799], "valid"],
      [[2800, 2800], "valid", [], "NV8"],
      [[2801, 2801], "valid", [], "NV8"],
      [[2802, 2808], "disallowed"],
      [[2809, 2809], "valid"],
      [[2810, 2816], "disallowed"],
      [[2817, 2819], "valid"],
      [[2820, 2820], "disallowed"],
      [[2821, 2828], "valid"],
      [[2829, 2830], "disallowed"],
      [[2831, 2832], "valid"],
      [[2833, 2834], "disallowed"],
      [[2835, 2856], "valid"],
      [[2857, 2857], "disallowed"],
      [[2858, 2864], "valid"],
      [[2865, 2865], "disallowed"],
      [[2866, 2867], "valid"],
      [[2868, 2868], "disallowed"],
      [[2869, 2869], "valid"],
      [[2870, 2873], "valid"],
      [[2874, 2875], "disallowed"],
      [[2876, 2883], "valid"],
      [[2884, 2884], "valid"],
      [[2885, 2886], "disallowed"],
      [[2887, 2888], "valid"],
      [[2889, 2890], "disallowed"],
      [[2891, 2893], "valid"],
      [[2894, 2901], "disallowed"],
      [[2902, 2903], "valid"],
      [[2904, 2907], "disallowed"],
      [[2908, 2908], "mapped", [2849, 2876]],
      [[2909, 2909], "mapped", [2850, 2876]],
      [[2910, 2910], "disallowed"],
      [[2911, 2913], "valid"],
      [[2914, 2915], "valid"],
      [[2916, 2917], "disallowed"],
      [[2918, 2927], "valid"],
      [[2928, 2928], "valid", [], "NV8"],
      [[2929, 2929], "valid"],
      [[2930, 2935], "valid", [], "NV8"],
      [[2936, 2945], "disallowed"],
      [[2946, 2947], "valid"],
      [[2948, 2948], "disallowed"],
      [[2949, 2954], "valid"],
      [[2955, 2957], "disallowed"],
      [[2958, 2960], "valid"],
      [[2961, 2961], "disallowed"],
      [[2962, 2965], "valid"],
      [[2966, 2968], "disallowed"],
      [[2969, 2970], "valid"],
      [[2971, 2971], "disallowed"],
      [[2972, 2972], "valid"],
      [[2973, 2973], "disallowed"],
      [[2974, 2975], "valid"],
      [[2976, 2978], "disallowed"],
      [[2979, 2980], "valid"],
      [[2981, 2983], "disallowed"],
      [[2984, 2986], "valid"],
      [[2987, 2989], "disallowed"],
      [[2990, 2997], "valid"],
      [[2998, 2998], "valid"],
      [[2999, 3001], "valid"],
      [[3002, 3005], "disallowed"],
      [[3006, 3010], "valid"],
      [[3011, 3013], "disallowed"],
      [[3014, 3016], "valid"],
      [[3017, 3017], "disallowed"],
      [[3018, 3021], "valid"],
      [[3022, 3023], "disallowed"],
      [[3024, 3024], "valid"],
      [[3025, 3030], "disallowed"],
      [[3031, 3031], "valid"],
      [[3032, 3045], "disallowed"],
      [[3046, 3046], "valid"],
      [[3047, 3055], "valid"],
      [[3056, 3058], "valid", [], "NV8"],
      [[3059, 3066], "valid", [], "NV8"],
      [[3067, 3071], "disallowed"],
      [[3072, 3072], "valid"],
      [[3073, 3075], "valid"],
      [[3076, 3076], "disallowed"],
      [[3077, 3084], "valid"],
      [[3085, 3085], "disallowed"],
      [[3086, 3088], "valid"],
      [[3089, 3089], "disallowed"],
      [[3090, 3112], "valid"],
      [[3113, 3113], "disallowed"],
      [[3114, 3123], "valid"],
      [[3124, 3124], "valid"],
      [[3125, 3129], "valid"],
      [[3130, 3132], "disallowed"],
      [[3133, 3133], "valid"],
      [[3134, 3140], "valid"],
      [[3141, 3141], "disallowed"],
      [[3142, 3144], "valid"],
      [[3145, 3145], "disallowed"],
      [[3146, 3149], "valid"],
      [[3150, 3156], "disallowed"],
      [[3157, 3158], "valid"],
      [[3159, 3159], "disallowed"],
      [[3160, 3161], "valid"],
      [[3162, 3162], "valid"],
      [[3163, 3167], "disallowed"],
      [[3168, 3169], "valid"],
      [[3170, 3171], "valid"],
      [[3172, 3173], "disallowed"],
      [[3174, 3183], "valid"],
      [[3184, 3191], "disallowed"],
      [[3192, 3199], "valid", [], "NV8"],
      [[3200, 3200], "disallowed"],
      [[3201, 3201], "valid"],
      [[3202, 3203], "valid"],
      [[3204, 3204], "disallowed"],
      [[3205, 3212], "valid"],
      [[3213, 3213], "disallowed"],
      [[3214, 3216], "valid"],
      [[3217, 3217], "disallowed"],
      [[3218, 3240], "valid"],
      [[3241, 3241], "disallowed"],
      [[3242, 3251], "valid"],
      [[3252, 3252], "disallowed"],
      [[3253, 3257], "valid"],
      [[3258, 3259], "disallowed"],
      [[3260, 3261], "valid"],
      [[3262, 3268], "valid"],
      [[3269, 3269], "disallowed"],
      [[3270, 3272], "valid"],
      [[3273, 3273], "disallowed"],
      [[3274, 3277], "valid"],
      [[3278, 3284], "disallowed"],
      [[3285, 3286], "valid"],
      [[3287, 3293], "disallowed"],
      [[3294, 3294], "valid"],
      [[3295, 3295], "disallowed"],
      [[3296, 3297], "valid"],
      [[3298, 3299], "valid"],
      [[3300, 3301], "disallowed"],
      [[3302, 3311], "valid"],
      [[3312, 3312], "disallowed"],
      [[3313, 3314], "valid"],
      [[3315, 3328], "disallowed"],
      [[3329, 3329], "valid"],
      [[3330, 3331], "valid"],
      [[3332, 3332], "disallowed"],
      [[3333, 3340], "valid"],
      [[3341, 3341], "disallowed"],
      [[3342, 3344], "valid"],
      [[3345, 3345], "disallowed"],
      [[3346, 3368], "valid"],
      [[3369, 3369], "valid"],
      [[3370, 3385], "valid"],
      [[3386, 3386], "valid"],
      [[3387, 3388], "disallowed"],
      [[3389, 3389], "valid"],
      [[3390, 3395], "valid"],
      [[3396, 3396], "valid"],
      [[3397, 3397], "disallowed"],
      [[3398, 3400], "valid"],
      [[3401, 3401], "disallowed"],
      [[3402, 3405], "valid"],
      [[3406, 3406], "valid"],
      [[3407, 3414], "disallowed"],
      [[3415, 3415], "valid"],
      [[3416, 3422], "disallowed"],
      [[3423, 3423], "valid"],
      [[3424, 3425], "valid"],
      [[3426, 3427], "valid"],
      [[3428, 3429], "disallowed"],
      [[3430, 3439], "valid"],
      [[3440, 3445], "valid", [], "NV8"],
      [[3446, 3448], "disallowed"],
      [[3449, 3449], "valid", [], "NV8"],
      [[3450, 3455], "valid"],
      [[3456, 3457], "disallowed"],
      [[3458, 3459], "valid"],
      [[3460, 3460], "disallowed"],
      [[3461, 3478], "valid"],
      [[3479, 3481], "disallowed"],
      [[3482, 3505], "valid"],
      [[3506, 3506], "disallowed"],
      [[3507, 3515], "valid"],
      [[3516, 3516], "disallowed"],
      [[3517, 3517], "valid"],
      [[3518, 3519], "disallowed"],
      [[3520, 3526], "valid"],
      [[3527, 3529], "disallowed"],
      [[3530, 3530], "valid"],
      [[3531, 3534], "disallowed"],
      [[3535, 3540], "valid"],
      [[3541, 3541], "disallowed"],
      [[3542, 3542], "valid"],
      [[3543, 3543], "disallowed"],
      [[3544, 3551], "valid"],
      [[3552, 3557], "disallowed"],
      [[3558, 3567], "valid"],
      [[3568, 3569], "disallowed"],
      [[3570, 3571], "valid"],
      [[3572, 3572], "valid", [], "NV8"],
      [[3573, 3584], "disallowed"],
      [[3585, 3634], "valid"],
      [[3635, 3635], "mapped", [3661, 3634]],
      [[3636, 3642], "valid"],
      [[3643, 3646], "disallowed"],
      [[3647, 3647], "valid", [], "NV8"],
      [[3648, 3662], "valid"],
      [[3663, 3663], "valid", [], "NV8"],
      [[3664, 3673], "valid"],
      [[3674, 3675], "valid", [], "NV8"],
      [[3676, 3712], "disallowed"],
      [[3713, 3714], "valid"],
      [[3715, 3715], "disallowed"],
      [[3716, 3716], "valid"],
      [[3717, 3718], "disallowed"],
      [[3719, 3720], "valid"],
      [[3721, 3721], "disallowed"],
      [[3722, 3722], "valid"],
      [[3723, 3724], "disallowed"],
      [[3725, 3725], "valid"],
      [[3726, 3731], "disallowed"],
      [[3732, 3735], "valid"],
      [[3736, 3736], "disallowed"],
      [[3737, 3743], "valid"],
      [[3744, 3744], "disallowed"],
      [[3745, 3747], "valid"],
      [[3748, 3748], "disallowed"],
      [[3749, 3749], "valid"],
      [[3750, 3750], "disallowed"],
      [[3751, 3751], "valid"],
      [[3752, 3753], "disallowed"],
      [[3754, 3755], "valid"],
      [[3756, 3756], "disallowed"],
      [[3757, 3762], "valid"],
      [[3763, 3763], "mapped", [3789, 3762]],
      [[3764, 3769], "valid"],
      [[3770, 3770], "disallowed"],
      [[3771, 3773], "valid"],
      [[3774, 3775], "disallowed"],
      [[3776, 3780], "valid"],
      [[3781, 3781], "disallowed"],
      [[3782, 3782], "valid"],
      [[3783, 3783], "disallowed"],
      [[3784, 3789], "valid"],
      [[3790, 3791], "disallowed"],
      [[3792, 3801], "valid"],
      [[3802, 3803], "disallowed"],
      [[3804, 3804], "mapped", [3755, 3737]],
      [[3805, 3805], "mapped", [3755, 3745]],
      [[3806, 3807], "valid"],
      [[3808, 3839], "disallowed"],
      [[3840, 3840], "valid"],
      [[3841, 3850], "valid", [], "NV8"],
      [[3851, 3851], "valid"],
      [[3852, 3852], "mapped", [3851]],
      [[3853, 3863], "valid", [], "NV8"],
      [[3864, 3865], "valid"],
      [[3866, 3871], "valid", [], "NV8"],
      [[3872, 3881], "valid"],
      [[3882, 3892], "valid", [], "NV8"],
      [[3893, 3893], "valid"],
      [[3894, 3894], "valid", [], "NV8"],
      [[3895, 3895], "valid"],
      [[3896, 3896], "valid", [], "NV8"],
      [[3897, 3897], "valid"],
      [[3898, 3901], "valid", [], "NV8"],
      [[3902, 3906], "valid"],
      [[3907, 3907], "mapped", [3906, 4023]],
      [[3908, 3911], "valid"],
      [[3912, 3912], "disallowed"],
      [[3913, 3916], "valid"],
      [[3917, 3917], "mapped", [3916, 4023]],
      [[3918, 3921], "valid"],
      [[3922, 3922], "mapped", [3921, 4023]],
      [[3923, 3926], "valid"],
      [[3927, 3927], "mapped", [3926, 4023]],
      [[3928, 3931], "valid"],
      [[3932, 3932], "mapped", [3931, 4023]],
      [[3933, 3944], "valid"],
      [[3945, 3945], "mapped", [3904, 4021]],
      [[3946, 3946], "valid"],
      [[3947, 3948], "valid"],
      [[3949, 3952], "disallowed"],
      [[3953, 3954], "valid"],
      [[3955, 3955], "mapped", [3953, 3954]],
      [[3956, 3956], "valid"],
      [[3957, 3957], "mapped", [3953, 3956]],
      [[3958, 3958], "mapped", [4018, 3968]],
      [[3959, 3959], "mapped", [4018, 3953, 3968]],
      [[3960, 3960], "mapped", [4019, 3968]],
      [[3961, 3961], "mapped", [4019, 3953, 3968]],
      [[3962, 3968], "valid"],
      [[3969, 3969], "mapped", [3953, 3968]],
      [[3970, 3972], "valid"],
      [[3973, 3973], "valid", [], "NV8"],
      [[3974, 3979], "valid"],
      [[3980, 3983], "valid"],
      [[3984, 3986], "valid"],
      [[3987, 3987], "mapped", [3986, 4023]],
      [[3988, 3989], "valid"],
      [[3990, 3990], "valid"],
      [[3991, 3991], "valid"],
      [[3992, 3992], "disallowed"],
      [[3993, 3996], "valid"],
      [[3997, 3997], "mapped", [3996, 4023]],
      [[3998, 4001], "valid"],
      [[4002, 4002], "mapped", [4001, 4023]],
      [[4003, 4006], "valid"],
      [[4007, 4007], "mapped", [4006, 4023]],
      [[4008, 4011], "valid"],
      [[4012, 4012], "mapped", [4011, 4023]],
      [[4013, 4013], "valid"],
      [[4014, 4016], "valid"],
      [[4017, 4023], "valid"],
      [[4024, 4024], "valid"],
      [[4025, 4025], "mapped", [3984, 4021]],
      [[4026, 4028], "valid"],
      [[4029, 4029], "disallowed"],
      [[4030, 4037], "valid", [], "NV8"],
      [[4038, 4038], "valid"],
      [[4039, 4044], "valid", [], "NV8"],
      [[4045, 4045], "disallowed"],
      [[4046, 4046], "valid", [], "NV8"],
      [[4047, 4047], "valid", [], "NV8"],
      [[4048, 4049], "valid", [], "NV8"],
      [[4050, 4052], "valid", [], "NV8"],
      [[4053, 4056], "valid", [], "NV8"],
      [[4057, 4058], "valid", [], "NV8"],
      [[4059, 4095], "disallowed"],
      [[4096, 4129], "valid"],
      [[4130, 4130], "valid"],
      [[4131, 4135], "valid"],
      [[4136, 4136], "valid"],
      [[4137, 4138], "valid"],
      [[4139, 4139], "valid"],
      [[4140, 4146], "valid"],
      [[4147, 4149], "valid"],
      [[4150, 4153], "valid"],
      [[4154, 4159], "valid"],
      [[4160, 4169], "valid"],
      [[4170, 4175], "valid", [], "NV8"],
      [[4176, 4185], "valid"],
      [[4186, 4249], "valid"],
      [[4250, 4253], "valid"],
      [[4254, 4255], "valid", [], "NV8"],
      [[4256, 4293], "disallowed"],
      [[4294, 4294], "disallowed"],
      [[4295, 4295], "mapped", [11559]],
      [[4296, 4300], "disallowed"],
      [[4301, 4301], "mapped", [11565]],
      [[4302, 4303], "disallowed"],
      [[4304, 4342], "valid"],
      [[4343, 4344], "valid"],
      [[4345, 4346], "valid"],
      [[4347, 4347], "valid", [], "NV8"],
      [[4348, 4348], "mapped", [4316]],
      [[4349, 4351], "valid"],
      [[4352, 4441], "valid", [], "NV8"],
      [[4442, 4446], "valid", [], "NV8"],
      [[4447, 4448], "disallowed"],
      [[4449, 4514], "valid", [], "NV8"],
      [[4515, 4519], "valid", [], "NV8"],
      [[4520, 4601], "valid", [], "NV8"],
      [[4602, 4607], "valid", [], "NV8"],
      [[4608, 4614], "valid"],
      [[4615, 4615], "valid"],
      [[4616, 4678], "valid"],
      [[4679, 4679], "valid"],
      [[4680, 4680], "valid"],
      [[4681, 4681], "disallowed"],
      [[4682, 4685], "valid"],
      [[4686, 4687], "disallowed"],
      [[4688, 4694], "valid"],
      [[4695, 4695], "disallowed"],
      [[4696, 4696], "valid"],
      [[4697, 4697], "disallowed"],
      [[4698, 4701], "valid"],
      [[4702, 4703], "disallowed"],
      [[4704, 4742], "valid"],
      [[4743, 4743], "valid"],
      [[4744, 4744], "valid"],
      [[4745, 4745], "disallowed"],
      [[4746, 4749], "valid"],
      [[4750, 4751], "disallowed"],
      [[4752, 4782], "valid"],
      [[4783, 4783], "valid"],
      [[4784, 4784], "valid"],
      [[4785, 4785], "disallowed"],
      [[4786, 4789], "valid"],
      [[4790, 4791], "disallowed"],
      [[4792, 4798], "valid"],
      [[4799, 4799], "disallowed"],
      [[4800, 4800], "valid"],
      [[4801, 4801], "disallowed"],
      [[4802, 4805], "valid"],
      [[4806, 4807], "disallowed"],
      [[4808, 4814], "valid"],
      [[4815, 4815], "valid"],
      [[4816, 4822], "valid"],
      [[4823, 4823], "disallowed"],
      [[4824, 4846], "valid"],
      [[4847, 4847], "valid"],
      [[4848, 4878], "valid"],
      [[4879, 4879], "valid"],
      [[4880, 4880], "valid"],
      [[4881, 4881], "disallowed"],
      [[4882, 4885], "valid"],
      [[4886, 4887], "disallowed"],
      [[4888, 4894], "valid"],
      [[4895, 4895], "valid"],
      [[4896, 4934], "valid"],
      [[4935, 4935], "valid"],
      [[4936, 4954], "valid"],
      [[4955, 4956], "disallowed"],
      [[4957, 4958], "valid"],
      [[4959, 4959], "valid"],
      [[4960, 4960], "valid", [], "NV8"],
      [[4961, 4988], "valid", [], "NV8"],
      [[4989, 4991], "disallowed"],
      [[4992, 5007], "valid"],
      [[5008, 5017], "valid", [], "NV8"],
      [[5018, 5023], "disallowed"],
      [[5024, 5108], "valid"],
      [[5109, 5109], "valid"],
      [[5110, 5111], "disallowed"],
      [[5112, 5112], "mapped", [5104]],
      [[5113, 5113], "mapped", [5105]],
      [[5114, 5114], "mapped", [5106]],
      [[5115, 5115], "mapped", [5107]],
      [[5116, 5116], "mapped", [5108]],
      [[5117, 5117], "mapped", [5109]],
      [[5118, 5119], "disallowed"],
      [[5120, 5120], "valid", [], "NV8"],
      [[5121, 5740], "valid"],
      [[5741, 5742], "valid", [], "NV8"],
      [[5743, 5750], "valid"],
      [[5751, 5759], "valid"],
      [[5760, 5760], "disallowed"],
      [[5761, 5786], "valid"],
      [[5787, 5788], "valid", [], "NV8"],
      [[5789, 5791], "disallowed"],
      [[5792, 5866], "valid"],
      [[5867, 5872], "valid", [], "NV8"],
      [[5873, 5880], "valid"],
      [[5881, 5887], "disallowed"],
      [[5888, 5900], "valid"],
      [[5901, 5901], "disallowed"],
      [[5902, 5908], "valid"],
      [[5909, 5919], "disallowed"],
      [[5920, 5940], "valid"],
      [[5941, 5942], "valid", [], "NV8"],
      [[5943, 5951], "disallowed"],
      [[5952, 5971], "valid"],
      [[5972, 5983], "disallowed"],
      [[5984, 5996], "valid"],
      [[5997, 5997], "disallowed"],
      [[5998, 6e3], "valid"],
      [[6001, 6001], "disallowed"],
      [[6002, 6003], "valid"],
      [[6004, 6015], "disallowed"],
      [[6016, 6067], "valid"],
      [[6068, 6069], "disallowed"],
      [[6070, 6099], "valid"],
      [[6100, 6102], "valid", [], "NV8"],
      [[6103, 6103], "valid"],
      [[6104, 6107], "valid", [], "NV8"],
      [[6108, 6108], "valid"],
      [[6109, 6109], "valid"],
      [[6110, 6111], "disallowed"],
      [[6112, 6121], "valid"],
      [[6122, 6127], "disallowed"],
      [[6128, 6137], "valid", [], "NV8"],
      [[6138, 6143], "disallowed"],
      [[6144, 6149], "valid", [], "NV8"],
      [[6150, 6150], "disallowed"],
      [[6151, 6154], "valid", [], "NV8"],
      [[6155, 6157], "ignored"],
      [[6158, 6158], "disallowed"],
      [[6159, 6159], "disallowed"],
      [[6160, 6169], "valid"],
      [[6170, 6175], "disallowed"],
      [[6176, 6263], "valid"],
      [[6264, 6271], "disallowed"],
      [[6272, 6313], "valid"],
      [[6314, 6314], "valid"],
      [[6315, 6319], "disallowed"],
      [[6320, 6389], "valid"],
      [[6390, 6399], "disallowed"],
      [[6400, 6428], "valid"],
      [[6429, 6430], "valid"],
      [[6431, 6431], "disallowed"],
      [[6432, 6443], "valid"],
      [[6444, 6447], "disallowed"],
      [[6448, 6459], "valid"],
      [[6460, 6463], "disallowed"],
      [[6464, 6464], "valid", [], "NV8"],
      [[6465, 6467], "disallowed"],
      [[6468, 6469], "valid", [], "NV8"],
      [[6470, 6509], "valid"],
      [[6510, 6511], "disallowed"],
      [[6512, 6516], "valid"],
      [[6517, 6527], "disallowed"],
      [[6528, 6569], "valid"],
      [[6570, 6571], "valid"],
      [[6572, 6575], "disallowed"],
      [[6576, 6601], "valid"],
      [[6602, 6607], "disallowed"],
      [[6608, 6617], "valid"],
      [[6618, 6618], "valid", [], "XV8"],
      [[6619, 6621], "disallowed"],
      [[6622, 6623], "valid", [], "NV8"],
      [[6624, 6655], "valid", [], "NV8"],
      [[6656, 6683], "valid"],
      [[6684, 6685], "disallowed"],
      [[6686, 6687], "valid", [], "NV8"],
      [[6688, 6750], "valid"],
      [[6751, 6751], "disallowed"],
      [[6752, 6780], "valid"],
      [[6781, 6782], "disallowed"],
      [[6783, 6793], "valid"],
      [[6794, 6799], "disallowed"],
      [[6800, 6809], "valid"],
      [[6810, 6815], "disallowed"],
      [[6816, 6822], "valid", [], "NV8"],
      [[6823, 6823], "valid"],
      [[6824, 6829], "valid", [], "NV8"],
      [[6830, 6831], "disallowed"],
      [[6832, 6845], "valid"],
      [[6846, 6846], "valid", [], "NV8"],
      [[6847, 6911], "disallowed"],
      [[6912, 6987], "valid"],
      [[6988, 6991], "disallowed"],
      [[6992, 7001], "valid"],
      [[7002, 7018], "valid", [], "NV8"],
      [[7019, 7027], "valid"],
      [[7028, 7036], "valid", [], "NV8"],
      [[7037, 7039], "disallowed"],
      [[7040, 7082], "valid"],
      [[7083, 7085], "valid"],
      [[7086, 7097], "valid"],
      [[7098, 7103], "valid"],
      [[7104, 7155], "valid"],
      [[7156, 7163], "disallowed"],
      [[7164, 7167], "valid", [], "NV8"],
      [[7168, 7223], "valid"],
      [[7224, 7226], "disallowed"],
      [[7227, 7231], "valid", [], "NV8"],
      [[7232, 7241], "valid"],
      [[7242, 7244], "disallowed"],
      [[7245, 7293], "valid"],
      [[7294, 7295], "valid", [], "NV8"],
      [[7296, 7359], "disallowed"],
      [[7360, 7367], "valid", [], "NV8"],
      [[7368, 7375], "disallowed"],
      [[7376, 7378], "valid"],
      [[7379, 7379], "valid", [], "NV8"],
      [[7380, 7410], "valid"],
      [[7411, 7414], "valid"],
      [[7415, 7415], "disallowed"],
      [[7416, 7417], "valid"],
      [[7418, 7423], "disallowed"],
      [[7424, 7467], "valid"],
      [[7468, 7468], "mapped", [97]],
      [[7469, 7469], "mapped", [230]],
      [[7470, 7470], "mapped", [98]],
      [[7471, 7471], "valid"],
      [[7472, 7472], "mapped", [100]],
      [[7473, 7473], "mapped", [101]],
      [[7474, 7474], "mapped", [477]],
      [[7475, 7475], "mapped", [103]],
      [[7476, 7476], "mapped", [104]],
      [[7477, 7477], "mapped", [105]],
      [[7478, 7478], "mapped", [106]],
      [[7479, 7479], "mapped", [107]],
      [[7480, 7480], "mapped", [108]],
      [[7481, 7481], "mapped", [109]],
      [[7482, 7482], "mapped", [110]],
      [[7483, 7483], "valid"],
      [[7484, 7484], "mapped", [111]],
      [[7485, 7485], "mapped", [547]],
      [[7486, 7486], "mapped", [112]],
      [[7487, 7487], "mapped", [114]],
      [[7488, 7488], "mapped", [116]],
      [[7489, 7489], "mapped", [117]],
      [[7490, 7490], "mapped", [119]],
      [[7491, 7491], "mapped", [97]],
      [[7492, 7492], "mapped", [592]],
      [[7493, 7493], "mapped", [593]],
      [[7494, 7494], "mapped", [7426]],
      [[7495, 7495], "mapped", [98]],
      [[7496, 7496], "mapped", [100]],
      [[7497, 7497], "mapped", [101]],
      [[7498, 7498], "mapped", [601]],
      [[7499, 7499], "mapped", [603]],
      [[7500, 7500], "mapped", [604]],
      [[7501, 7501], "mapped", [103]],
      [[7502, 7502], "valid"],
      [[7503, 7503], "mapped", [107]],
      [[7504, 7504], "mapped", [109]],
      [[7505, 7505], "mapped", [331]],
      [[7506, 7506], "mapped", [111]],
      [[7507, 7507], "mapped", [596]],
      [[7508, 7508], "mapped", [7446]],
      [[7509, 7509], "mapped", [7447]],
      [[7510, 7510], "mapped", [112]],
      [[7511, 7511], "mapped", [116]],
      [[7512, 7512], "mapped", [117]],
      [[7513, 7513], "mapped", [7453]],
      [[7514, 7514], "mapped", [623]],
      [[7515, 7515], "mapped", [118]],
      [[7516, 7516], "mapped", [7461]],
      [[7517, 7517], "mapped", [946]],
      [[7518, 7518], "mapped", [947]],
      [[7519, 7519], "mapped", [948]],
      [[7520, 7520], "mapped", [966]],
      [[7521, 7521], "mapped", [967]],
      [[7522, 7522], "mapped", [105]],
      [[7523, 7523], "mapped", [114]],
      [[7524, 7524], "mapped", [117]],
      [[7525, 7525], "mapped", [118]],
      [[7526, 7526], "mapped", [946]],
      [[7527, 7527], "mapped", [947]],
      [[7528, 7528], "mapped", [961]],
      [[7529, 7529], "mapped", [966]],
      [[7530, 7530], "mapped", [967]],
      [[7531, 7531], "valid"],
      [[7532, 7543], "valid"],
      [[7544, 7544], "mapped", [1085]],
      [[7545, 7578], "valid"],
      [[7579, 7579], "mapped", [594]],
      [[7580, 7580], "mapped", [99]],
      [[7581, 7581], "mapped", [597]],
      [[7582, 7582], "mapped", [240]],
      [[7583, 7583], "mapped", [604]],
      [[7584, 7584], "mapped", [102]],
      [[7585, 7585], "mapped", [607]],
      [[7586, 7586], "mapped", [609]],
      [[7587, 7587], "mapped", [613]],
      [[7588, 7588], "mapped", [616]],
      [[7589, 7589], "mapped", [617]],
      [[7590, 7590], "mapped", [618]],
      [[7591, 7591], "mapped", [7547]],
      [[7592, 7592], "mapped", [669]],
      [[7593, 7593], "mapped", [621]],
      [[7594, 7594], "mapped", [7557]],
      [[7595, 7595], "mapped", [671]],
      [[7596, 7596], "mapped", [625]],
      [[7597, 7597], "mapped", [624]],
      [[7598, 7598], "mapped", [626]],
      [[7599, 7599], "mapped", [627]],
      [[7600, 7600], "mapped", [628]],
      [[7601, 7601], "mapped", [629]],
      [[7602, 7602], "mapped", [632]],
      [[7603, 7603], "mapped", [642]],
      [[7604, 7604], "mapped", [643]],
      [[7605, 7605], "mapped", [427]],
      [[7606, 7606], "mapped", [649]],
      [[7607, 7607], "mapped", [650]],
      [[7608, 7608], "mapped", [7452]],
      [[7609, 7609], "mapped", [651]],
      [[7610, 7610], "mapped", [652]],
      [[7611, 7611], "mapped", [122]],
      [[7612, 7612], "mapped", [656]],
      [[7613, 7613], "mapped", [657]],
      [[7614, 7614], "mapped", [658]],
      [[7615, 7615], "mapped", [952]],
      [[7616, 7619], "valid"],
      [[7620, 7626], "valid"],
      [[7627, 7654], "valid"],
      [[7655, 7669], "valid"],
      [[7670, 7675], "disallowed"],
      [[7676, 7676], "valid"],
      [[7677, 7677], "valid"],
      [[7678, 7679], "valid"],
      [[7680, 7680], "mapped", [7681]],
      [[7681, 7681], "valid"],
      [[7682, 7682], "mapped", [7683]],
      [[7683, 7683], "valid"],
      [[7684, 7684], "mapped", [7685]],
      [[7685, 7685], "valid"],
      [[7686, 7686], "mapped", [7687]],
      [[7687, 7687], "valid"],
      [[7688, 7688], "mapped", [7689]],
      [[7689, 7689], "valid"],
      [[7690, 7690], "mapped", [7691]],
      [[7691, 7691], "valid"],
      [[7692, 7692], "mapped", [7693]],
      [[7693, 7693], "valid"],
      [[7694, 7694], "mapped", [7695]],
      [[7695, 7695], "valid"],
      [[7696, 7696], "mapped", [7697]],
      [[7697, 7697], "valid"],
      [[7698, 7698], "mapped", [7699]],
      [[7699, 7699], "valid"],
      [[7700, 7700], "mapped", [7701]],
      [[7701, 7701], "valid"],
      [[7702, 7702], "mapped", [7703]],
      [[7703, 7703], "valid"],
      [[7704, 7704], "mapped", [7705]],
      [[7705, 7705], "valid"],
      [[7706, 7706], "mapped", [7707]],
      [[7707, 7707], "valid"],
      [[7708, 7708], "mapped", [7709]],
      [[7709, 7709], "valid"],
      [[7710, 7710], "mapped", [7711]],
      [[7711, 7711], "valid"],
      [[7712, 7712], "mapped", [7713]],
      [[7713, 7713], "valid"],
      [[7714, 7714], "mapped", [7715]],
      [[7715, 7715], "valid"],
      [[7716, 7716], "mapped", [7717]],
      [[7717, 7717], "valid"],
      [[7718, 7718], "mapped", [7719]],
      [[7719, 7719], "valid"],
      [[7720, 7720], "mapped", [7721]],
      [[7721, 7721], "valid"],
      [[7722, 7722], "mapped", [7723]],
      [[7723, 7723], "valid"],
      [[7724, 7724], "mapped", [7725]],
      [[7725, 7725], "valid"],
      [[7726, 7726], "mapped", [7727]],
      [[7727, 7727], "valid"],
      [[7728, 7728], "mapped", [7729]],
      [[7729, 7729], "valid"],
      [[7730, 7730], "mapped", [7731]],
      [[7731, 7731], "valid"],
      [[7732, 7732], "mapped", [7733]],
      [[7733, 7733], "valid"],
      [[7734, 7734], "mapped", [7735]],
      [[7735, 7735], "valid"],
      [[7736, 7736], "mapped", [7737]],
      [[7737, 7737], "valid"],
      [[7738, 7738], "mapped", [7739]],
      [[7739, 7739], "valid"],
      [[7740, 7740], "mapped", [7741]],
      [[7741, 7741], "valid"],
      [[7742, 7742], "mapped", [7743]],
      [[7743, 7743], "valid"],
      [[7744, 7744], "mapped", [7745]],
      [[7745, 7745], "valid"],
      [[7746, 7746], "mapped", [7747]],
      [[7747, 7747], "valid"],
      [[7748, 7748], "mapped", [7749]],
      [[7749, 7749], "valid"],
      [[7750, 7750], "mapped", [7751]],
      [[7751, 7751], "valid"],
      [[7752, 7752], "mapped", [7753]],
      [[7753, 7753], "valid"],
      [[7754, 7754], "mapped", [7755]],
      [[7755, 7755], "valid"],
      [[7756, 7756], "mapped", [7757]],
      [[7757, 7757], "valid"],
      [[7758, 7758], "mapped", [7759]],
      [[7759, 7759], "valid"],
      [[7760, 7760], "mapped", [7761]],
      [[7761, 7761], "valid"],
      [[7762, 7762], "mapped", [7763]],
      [[7763, 7763], "valid"],
      [[7764, 7764], "mapped", [7765]],
      [[7765, 7765], "valid"],
      [[7766, 7766], "mapped", [7767]],
      [[7767, 7767], "valid"],
      [[7768, 7768], "mapped", [7769]],
      [[7769, 7769], "valid"],
      [[7770, 7770], "mapped", [7771]],
      [[7771, 7771], "valid"],
      [[7772, 7772], "mapped", [7773]],
      [[7773, 7773], "valid"],
      [[7774, 7774], "mapped", [7775]],
      [[7775, 7775], "valid"],
      [[7776, 7776], "mapped", [7777]],
      [[7777, 7777], "valid"],
      [[7778, 7778], "mapped", [7779]],
      [[7779, 7779], "valid"],
      [[7780, 7780], "mapped", [7781]],
      [[7781, 7781], "valid"],
      [[7782, 7782], "mapped", [7783]],
      [[7783, 7783], "valid"],
      [[7784, 7784], "mapped", [7785]],
      [[7785, 7785], "valid"],
      [[7786, 7786], "mapped", [7787]],
      [[7787, 7787], "valid"],
      [[7788, 7788], "mapped", [7789]],
      [[7789, 7789], "valid"],
      [[7790, 7790], "mapped", [7791]],
      [[7791, 7791], "valid"],
      [[7792, 7792], "mapped", [7793]],
      [[7793, 7793], "valid"],
      [[7794, 7794], "mapped", [7795]],
      [[7795, 7795], "valid"],
      [[7796, 7796], "mapped", [7797]],
      [[7797, 7797], "valid"],
      [[7798, 7798], "mapped", [7799]],
      [[7799, 7799], "valid"],
      [[7800, 7800], "mapped", [7801]],
      [[7801, 7801], "valid"],
      [[7802, 7802], "mapped", [7803]],
      [[7803, 7803], "valid"],
      [[7804, 7804], "mapped", [7805]],
      [[7805, 7805], "valid"],
      [[7806, 7806], "mapped", [7807]],
      [[7807, 7807], "valid"],
      [[7808, 7808], "mapped", [7809]],
      [[7809, 7809], "valid"],
      [[7810, 7810], "mapped", [7811]],
      [[7811, 7811], "valid"],
      [[7812, 7812], "mapped", [7813]],
      [[7813, 7813], "valid"],
      [[7814, 7814], "mapped", [7815]],
      [[7815, 7815], "valid"],
      [[7816, 7816], "mapped", [7817]],
      [[7817, 7817], "valid"],
      [[7818, 7818], "mapped", [7819]],
      [[7819, 7819], "valid"],
      [[7820, 7820], "mapped", [7821]],
      [[7821, 7821], "valid"],
      [[7822, 7822], "mapped", [7823]],
      [[7823, 7823], "valid"],
      [[7824, 7824], "mapped", [7825]],
      [[7825, 7825], "valid"],
      [[7826, 7826], "mapped", [7827]],
      [[7827, 7827], "valid"],
      [[7828, 7828], "mapped", [7829]],
      [[7829, 7833], "valid"],
      [[7834, 7834], "mapped", [97, 702]],
      [[7835, 7835], "mapped", [7777]],
      [[7836, 7837], "valid"],
      [[7838, 7838], "mapped", [115, 115]],
      [[7839, 7839], "valid"],
      [[7840, 7840], "mapped", [7841]],
      [[7841, 7841], "valid"],
      [[7842, 7842], "mapped", [7843]],
      [[7843, 7843], "valid"],
      [[7844, 7844], "mapped", [7845]],
      [[7845, 7845], "valid"],
      [[7846, 7846], "mapped", [7847]],
      [[7847, 7847], "valid"],
      [[7848, 7848], "mapped", [7849]],
      [[7849, 7849], "valid"],
      [[7850, 7850], "mapped", [7851]],
      [[7851, 7851], "valid"],
      [[7852, 7852], "mapped", [7853]],
      [[7853, 7853], "valid"],
      [[7854, 7854], "mapped", [7855]],
      [[7855, 7855], "valid"],
      [[7856, 7856], "mapped", [7857]],
      [[7857, 7857], "valid"],
      [[7858, 7858], "mapped", [7859]],
      [[7859, 7859], "valid"],
      [[7860, 7860], "mapped", [7861]],
      [[7861, 7861], "valid"],
      [[7862, 7862], "mapped", [7863]],
      [[7863, 7863], "valid"],
      [[7864, 7864], "mapped", [7865]],
      [[7865, 7865], "valid"],
      [[7866, 7866], "mapped", [7867]],
      [[7867, 7867], "valid"],
      [[7868, 7868], "mapped", [7869]],
      [[7869, 7869], "valid"],
      [[7870, 7870], "mapped", [7871]],
      [[7871, 7871], "valid"],
      [[7872, 7872], "mapped", [7873]],
      [[7873, 7873], "valid"],
      [[7874, 7874], "mapped", [7875]],
      [[7875, 7875], "valid"],
      [[7876, 7876], "mapped", [7877]],
      [[7877, 7877], "valid"],
      [[7878, 7878], "mapped", [7879]],
      [[7879, 7879], "valid"],
      [[7880, 7880], "mapped", [7881]],
      [[7881, 7881], "valid"],
      [[7882, 7882], "mapped", [7883]],
      [[7883, 7883], "valid"],
      [[7884, 7884], "mapped", [7885]],
      [[7885, 7885], "valid"],
      [[7886, 7886], "mapped", [7887]],
      [[7887, 7887], "valid"],
      [[7888, 7888], "mapped", [7889]],
      [[7889, 7889], "valid"],
      [[7890, 7890], "mapped", [7891]],
      [[7891, 7891], "valid"],
      [[7892, 7892], "mapped", [7893]],
      [[7893, 7893], "valid"],
      [[7894, 7894], "mapped", [7895]],
      [[7895, 7895], "valid"],
      [[7896, 7896], "mapped", [7897]],
      [[7897, 7897], "valid"],
      [[7898, 7898], "mapped", [7899]],
      [[7899, 7899], "valid"],
      [[7900, 7900], "mapped", [7901]],
      [[7901, 7901], "valid"],
      [[7902, 7902], "mapped", [7903]],
      [[7903, 7903], "valid"],
      [[7904, 7904], "mapped", [7905]],
      [[7905, 7905], "valid"],
      [[7906, 7906], "mapped", [7907]],
      [[7907, 7907], "valid"],
      [[7908, 7908], "mapped", [7909]],
      [[7909, 7909], "valid"],
      [[7910, 7910], "mapped", [7911]],
      [[7911, 7911], "valid"],
      [[7912, 7912], "mapped", [7913]],
      [[7913, 7913], "valid"],
      [[7914, 7914], "mapped", [7915]],
      [[7915, 7915], "valid"],
      [[7916, 7916], "mapped", [7917]],
      [[7917, 7917], "valid"],
      [[7918, 7918], "mapped", [7919]],
      [[7919, 7919], "valid"],
      [[7920, 7920], "mapped", [7921]],
      [[7921, 7921], "valid"],
      [[7922, 7922], "mapped", [7923]],
      [[7923, 7923], "valid"],
      [[7924, 7924], "mapped", [7925]],
      [[7925, 7925], "valid"],
      [[7926, 7926], "mapped", [7927]],
      [[7927, 7927], "valid"],
      [[7928, 7928], "mapped", [7929]],
      [[7929, 7929], "valid"],
      [[7930, 7930], "mapped", [7931]],
      [[7931, 7931], "valid"],
      [[7932, 7932], "mapped", [7933]],
      [[7933, 7933], "valid"],
      [[7934, 7934], "mapped", [7935]],
      [[7935, 7935], "valid"],
      [[7936, 7943], "valid"],
      [[7944, 7944], "mapped", [7936]],
      [[7945, 7945], "mapped", [7937]],
      [[7946, 7946], "mapped", [7938]],
      [[7947, 7947], "mapped", [7939]],
      [[7948, 7948], "mapped", [7940]],
      [[7949, 7949], "mapped", [7941]],
      [[7950, 7950], "mapped", [7942]],
      [[7951, 7951], "mapped", [7943]],
      [[7952, 7957], "valid"],
      [[7958, 7959], "disallowed"],
      [[7960, 7960], "mapped", [7952]],
      [[7961, 7961], "mapped", [7953]],
      [[7962, 7962], "mapped", [7954]],
      [[7963, 7963], "mapped", [7955]],
      [[7964, 7964], "mapped", [7956]],
      [[7965, 7965], "mapped", [7957]],
      [[7966, 7967], "disallowed"],
      [[7968, 7975], "valid"],
      [[7976, 7976], "mapped", [7968]],
      [[7977, 7977], "mapped", [7969]],
      [[7978, 7978], "mapped", [7970]],
      [[7979, 7979], "mapped", [7971]],
      [[7980, 7980], "mapped", [7972]],
      [[7981, 7981], "mapped", [7973]],
      [[7982, 7982], "mapped", [7974]],
      [[7983, 7983], "mapped", [7975]],
      [[7984, 7991], "valid"],
      [[7992, 7992], "mapped", [7984]],
      [[7993, 7993], "mapped", [7985]],
      [[7994, 7994], "mapped", [7986]],
      [[7995, 7995], "mapped", [7987]],
      [[7996, 7996], "mapped", [7988]],
      [[7997, 7997], "mapped", [7989]],
      [[7998, 7998], "mapped", [7990]],
      [[7999, 7999], "mapped", [7991]],
      [[8e3, 8005], "valid"],
      [[8006, 8007], "disallowed"],
      [[8008, 8008], "mapped", [8e3]],
      [[8009, 8009], "mapped", [8001]],
      [[8010, 8010], "mapped", [8002]],
      [[8011, 8011], "mapped", [8003]],
      [[8012, 8012], "mapped", [8004]],
      [[8013, 8013], "mapped", [8005]],
      [[8014, 8015], "disallowed"],
      [[8016, 8023], "valid"],
      [[8024, 8024], "disallowed"],
      [[8025, 8025], "mapped", [8017]],
      [[8026, 8026], "disallowed"],
      [[8027, 8027], "mapped", [8019]],
      [[8028, 8028], "disallowed"],
      [[8029, 8029], "mapped", [8021]],
      [[8030, 8030], "disallowed"],
      [[8031, 8031], "mapped", [8023]],
      [[8032, 8039], "valid"],
      [[8040, 8040], "mapped", [8032]],
      [[8041, 8041], "mapped", [8033]],
      [[8042, 8042], "mapped", [8034]],
      [[8043, 8043], "mapped", [8035]],
      [[8044, 8044], "mapped", [8036]],
      [[8045, 8045], "mapped", [8037]],
      [[8046, 8046], "mapped", [8038]],
      [[8047, 8047], "mapped", [8039]],
      [[8048, 8048], "valid"],
      [[8049, 8049], "mapped", [940]],
      [[8050, 8050], "valid"],
      [[8051, 8051], "mapped", [941]],
      [[8052, 8052], "valid"],
      [[8053, 8053], "mapped", [942]],
      [[8054, 8054], "valid"],
      [[8055, 8055], "mapped", [943]],
      [[8056, 8056], "valid"],
      [[8057, 8057], "mapped", [972]],
      [[8058, 8058], "valid"],
      [[8059, 8059], "mapped", [973]],
      [[8060, 8060], "valid"],
      [[8061, 8061], "mapped", [974]],
      [[8062, 8063], "disallowed"],
      [[8064, 8064], "mapped", [7936, 953]],
      [[8065, 8065], "mapped", [7937, 953]],
      [[8066, 8066], "mapped", [7938, 953]],
      [[8067, 8067], "mapped", [7939, 953]],
      [[8068, 8068], "mapped", [7940, 953]],
      [[8069, 8069], "mapped", [7941, 953]],
      [[8070, 8070], "mapped", [7942, 953]],
      [[8071, 8071], "mapped", [7943, 953]],
      [[8072, 8072], "mapped", [7936, 953]],
      [[8073, 8073], "mapped", [7937, 953]],
      [[8074, 8074], "mapped", [7938, 953]],
      [[8075, 8075], "mapped", [7939, 953]],
      [[8076, 8076], "mapped", [7940, 953]],
      [[8077, 8077], "mapped", [7941, 953]],
      [[8078, 8078], "mapped", [7942, 953]],
      [[8079, 8079], "mapped", [7943, 953]],
      [[8080, 8080], "mapped", [7968, 953]],
      [[8081, 8081], "mapped", [7969, 953]],
      [[8082, 8082], "mapped", [7970, 953]],
      [[8083, 8083], "mapped", [7971, 953]],
      [[8084, 8084], "mapped", [7972, 953]],
      [[8085, 8085], "mapped", [7973, 953]],
      [[8086, 8086], "mapped", [7974, 953]],
      [[8087, 8087], "mapped", [7975, 953]],
      [[8088, 8088], "mapped", [7968, 953]],
      [[8089, 8089], "mapped", [7969, 953]],
      [[8090, 8090], "mapped", [7970, 953]],
      [[8091, 8091], "mapped", [7971, 953]],
      [[8092, 8092], "mapped", [7972, 953]],
      [[8093, 8093], "mapped", [7973, 953]],
      [[8094, 8094], "mapped", [7974, 953]],
      [[8095, 8095], "mapped", [7975, 953]],
      [[8096, 8096], "mapped", [8032, 953]],
      [[8097, 8097], "mapped", [8033, 953]],
      [[8098, 8098], "mapped", [8034, 953]],
      [[8099, 8099], "mapped", [8035, 953]],
      [[8100, 8100], "mapped", [8036, 953]],
      [[8101, 8101], "mapped", [8037, 953]],
      [[8102, 8102], "mapped", [8038, 953]],
      [[8103, 8103], "mapped", [8039, 953]],
      [[8104, 8104], "mapped", [8032, 953]],
      [[8105, 8105], "mapped", [8033, 953]],
      [[8106, 8106], "mapped", [8034, 953]],
      [[8107, 8107], "mapped", [8035, 953]],
      [[8108, 8108], "mapped", [8036, 953]],
      [[8109, 8109], "mapped", [8037, 953]],
      [[8110, 8110], "mapped", [8038, 953]],
      [[8111, 8111], "mapped", [8039, 953]],
      [[8112, 8113], "valid"],
      [[8114, 8114], "mapped", [8048, 953]],
      [[8115, 8115], "mapped", [945, 953]],
      [[8116, 8116], "mapped", [940, 953]],
      [[8117, 8117], "disallowed"],
      [[8118, 8118], "valid"],
      [[8119, 8119], "mapped", [8118, 953]],
      [[8120, 8120], "mapped", [8112]],
      [[8121, 8121], "mapped", [8113]],
      [[8122, 8122], "mapped", [8048]],
      [[8123, 8123], "mapped", [940]],
      [[8124, 8124], "mapped", [945, 953]],
      [[8125, 8125], "disallowed_STD3_mapped", [32, 787]],
      [[8126, 8126], "mapped", [953]],
      [[8127, 8127], "disallowed_STD3_mapped", [32, 787]],
      [[8128, 8128], "disallowed_STD3_mapped", [32, 834]],
      [[8129, 8129], "disallowed_STD3_mapped", [32, 776, 834]],
      [[8130, 8130], "mapped", [8052, 953]],
      [[8131, 8131], "mapped", [951, 953]],
      [[8132, 8132], "mapped", [942, 953]],
      [[8133, 8133], "disallowed"],
      [[8134, 8134], "valid"],
      [[8135, 8135], "mapped", [8134, 953]],
      [[8136, 8136], "mapped", [8050]],
      [[8137, 8137], "mapped", [941]],
      [[8138, 8138], "mapped", [8052]],
      [[8139, 8139], "mapped", [942]],
      [[8140, 8140], "mapped", [951, 953]],
      [[8141, 8141], "disallowed_STD3_mapped", [32, 787, 768]],
      [[8142, 8142], "disallowed_STD3_mapped", [32, 787, 769]],
      [[8143, 8143], "disallowed_STD3_mapped", [32, 787, 834]],
      [[8144, 8146], "valid"],
      [[8147, 8147], "mapped", [912]],
      [[8148, 8149], "disallowed"],
      [[8150, 8151], "valid"],
      [[8152, 8152], "mapped", [8144]],
      [[8153, 8153], "mapped", [8145]],
      [[8154, 8154], "mapped", [8054]],
      [[8155, 8155], "mapped", [943]],
      [[8156, 8156], "disallowed"],
      [[8157, 8157], "disallowed_STD3_mapped", [32, 788, 768]],
      [[8158, 8158], "disallowed_STD3_mapped", [32, 788, 769]],
      [[8159, 8159], "disallowed_STD3_mapped", [32, 788, 834]],
      [[8160, 8162], "valid"],
      [[8163, 8163], "mapped", [944]],
      [[8164, 8167], "valid"],
      [[8168, 8168], "mapped", [8160]],
      [[8169, 8169], "mapped", [8161]],
      [[8170, 8170], "mapped", [8058]],
      [[8171, 8171], "mapped", [973]],
      [[8172, 8172], "mapped", [8165]],
      [[8173, 8173], "disallowed_STD3_mapped", [32, 776, 768]],
      [[8174, 8174], "disallowed_STD3_mapped", [32, 776, 769]],
      [[8175, 8175], "disallowed_STD3_mapped", [96]],
      [[8176, 8177], "disallowed"],
      [[8178, 8178], "mapped", [8060, 953]],
      [[8179, 8179], "mapped", [969, 953]],
      [[8180, 8180], "mapped", [974, 953]],
      [[8181, 8181], "disallowed"],
      [[8182, 8182], "valid"],
      [[8183, 8183], "mapped", [8182, 953]],
      [[8184, 8184], "mapped", [8056]],
      [[8185, 8185], "mapped", [972]],
      [[8186, 8186], "mapped", [8060]],
      [[8187, 8187], "mapped", [974]],
      [[8188, 8188], "mapped", [969, 953]],
      [[8189, 8189], "disallowed_STD3_mapped", [32, 769]],
      [[8190, 8190], "disallowed_STD3_mapped", [32, 788]],
      [[8191, 8191], "disallowed"],
      [[8192, 8202], "disallowed_STD3_mapped", [32]],
      [[8203, 8203], "ignored"],
      [[8204, 8205], "deviation", []],
      [[8206, 8207], "disallowed"],
      [[8208, 8208], "valid", [], "NV8"],
      [[8209, 8209], "mapped", [8208]],
      [[8210, 8214], "valid", [], "NV8"],
      [[8215, 8215], "disallowed_STD3_mapped", [32, 819]],
      [[8216, 8227], "valid", [], "NV8"],
      [[8228, 8230], "disallowed"],
      [[8231, 8231], "valid", [], "NV8"],
      [[8232, 8238], "disallowed"],
      [[8239, 8239], "disallowed_STD3_mapped", [32]],
      [[8240, 8242], "valid", [], "NV8"],
      [[8243, 8243], "mapped", [8242, 8242]],
      [[8244, 8244], "mapped", [8242, 8242, 8242]],
      [[8245, 8245], "valid", [], "NV8"],
      [[8246, 8246], "mapped", [8245, 8245]],
      [[8247, 8247], "mapped", [8245, 8245, 8245]],
      [[8248, 8251], "valid", [], "NV8"],
      [[8252, 8252], "disallowed_STD3_mapped", [33, 33]],
      [[8253, 8253], "valid", [], "NV8"],
      [[8254, 8254], "disallowed_STD3_mapped", [32, 773]],
      [[8255, 8262], "valid", [], "NV8"],
      [[8263, 8263], "disallowed_STD3_mapped", [63, 63]],
      [[8264, 8264], "disallowed_STD3_mapped", [63, 33]],
      [[8265, 8265], "disallowed_STD3_mapped", [33, 63]],
      [[8266, 8269], "valid", [], "NV8"],
      [[8270, 8274], "valid", [], "NV8"],
      [[8275, 8276], "valid", [], "NV8"],
      [[8277, 8278], "valid", [], "NV8"],
      [[8279, 8279], "mapped", [8242, 8242, 8242, 8242]],
      [[8280, 8286], "valid", [], "NV8"],
      [[8287, 8287], "disallowed_STD3_mapped", [32]],
      [[8288, 8288], "ignored"],
      [[8289, 8291], "disallowed"],
      [[8292, 8292], "ignored"],
      [[8293, 8293], "disallowed"],
      [[8294, 8297], "disallowed"],
      [[8298, 8303], "disallowed"],
      [[8304, 8304], "mapped", [48]],
      [[8305, 8305], "mapped", [105]],
      [[8306, 8307], "disallowed"],
      [[8308, 8308], "mapped", [52]],
      [[8309, 8309], "mapped", [53]],
      [[8310, 8310], "mapped", [54]],
      [[8311, 8311], "mapped", [55]],
      [[8312, 8312], "mapped", [56]],
      [[8313, 8313], "mapped", [57]],
      [[8314, 8314], "disallowed_STD3_mapped", [43]],
      [[8315, 8315], "mapped", [8722]],
      [[8316, 8316], "disallowed_STD3_mapped", [61]],
      [[8317, 8317], "disallowed_STD3_mapped", [40]],
      [[8318, 8318], "disallowed_STD3_mapped", [41]],
      [[8319, 8319], "mapped", [110]],
      [[8320, 8320], "mapped", [48]],
      [[8321, 8321], "mapped", [49]],
      [[8322, 8322], "mapped", [50]],
      [[8323, 8323], "mapped", [51]],
      [[8324, 8324], "mapped", [52]],
      [[8325, 8325], "mapped", [53]],
      [[8326, 8326], "mapped", [54]],
      [[8327, 8327], "mapped", [55]],
      [[8328, 8328], "mapped", [56]],
      [[8329, 8329], "mapped", [57]],
      [[8330, 8330], "disallowed_STD3_mapped", [43]],
      [[8331, 8331], "mapped", [8722]],
      [[8332, 8332], "disallowed_STD3_mapped", [61]],
      [[8333, 8333], "disallowed_STD3_mapped", [40]],
      [[8334, 8334], "disallowed_STD3_mapped", [41]],
      [[8335, 8335], "disallowed"],
      [[8336, 8336], "mapped", [97]],
      [[8337, 8337], "mapped", [101]],
      [[8338, 8338], "mapped", [111]],
      [[8339, 8339], "mapped", [120]],
      [[8340, 8340], "mapped", [601]],
      [[8341, 8341], "mapped", [104]],
      [[8342, 8342], "mapped", [107]],
      [[8343, 8343], "mapped", [108]],
      [[8344, 8344], "mapped", [109]],
      [[8345, 8345], "mapped", [110]],
      [[8346, 8346], "mapped", [112]],
      [[8347, 8347], "mapped", [115]],
      [[8348, 8348], "mapped", [116]],
      [[8349, 8351], "disallowed"],
      [[8352, 8359], "valid", [], "NV8"],
      [[8360, 8360], "mapped", [114, 115]],
      [[8361, 8362], "valid", [], "NV8"],
      [[8363, 8363], "valid", [], "NV8"],
      [[8364, 8364], "valid", [], "NV8"],
      [[8365, 8367], "valid", [], "NV8"],
      [[8368, 8369], "valid", [], "NV8"],
      [[8370, 8373], "valid", [], "NV8"],
      [[8374, 8376], "valid", [], "NV8"],
      [[8377, 8377], "valid", [], "NV8"],
      [[8378, 8378], "valid", [], "NV8"],
      [[8379, 8381], "valid", [], "NV8"],
      [[8382, 8382], "valid", [], "NV8"],
      [[8383, 8399], "disallowed"],
      [[8400, 8417], "valid", [], "NV8"],
      [[8418, 8419], "valid", [], "NV8"],
      [[8420, 8426], "valid", [], "NV8"],
      [[8427, 8427], "valid", [], "NV8"],
      [[8428, 8431], "valid", [], "NV8"],
      [[8432, 8432], "valid", [], "NV8"],
      [[8433, 8447], "disallowed"],
      [[8448, 8448], "disallowed_STD3_mapped", [97, 47, 99]],
      [[8449, 8449], "disallowed_STD3_mapped", [97, 47, 115]],
      [[8450, 8450], "mapped", [99]],
      [[8451, 8451], "mapped", [176, 99]],
      [[8452, 8452], "valid", [], "NV8"],
      [[8453, 8453], "disallowed_STD3_mapped", [99, 47, 111]],
      [[8454, 8454], "disallowed_STD3_mapped", [99, 47, 117]],
      [[8455, 8455], "mapped", [603]],
      [[8456, 8456], "valid", [], "NV8"],
      [[8457, 8457], "mapped", [176, 102]],
      [[8458, 8458], "mapped", [103]],
      [[8459, 8462], "mapped", [104]],
      [[8463, 8463], "mapped", [295]],
      [[8464, 8465], "mapped", [105]],
      [[8466, 8467], "mapped", [108]],
      [[8468, 8468], "valid", [], "NV8"],
      [[8469, 8469], "mapped", [110]],
      [[8470, 8470], "mapped", [110, 111]],
      [[8471, 8472], "valid", [], "NV8"],
      [[8473, 8473], "mapped", [112]],
      [[8474, 8474], "mapped", [113]],
      [[8475, 8477], "mapped", [114]],
      [[8478, 8479], "valid", [], "NV8"],
      [[8480, 8480], "mapped", [115, 109]],
      [[8481, 8481], "mapped", [116, 101, 108]],
      [[8482, 8482], "mapped", [116, 109]],
      [[8483, 8483], "valid", [], "NV8"],
      [[8484, 8484], "mapped", [122]],
      [[8485, 8485], "valid", [], "NV8"],
      [[8486, 8486], "mapped", [969]],
      [[8487, 8487], "valid", [], "NV8"],
      [[8488, 8488], "mapped", [122]],
      [[8489, 8489], "valid", [], "NV8"],
      [[8490, 8490], "mapped", [107]],
      [[8491, 8491], "mapped", [229]],
      [[8492, 8492], "mapped", [98]],
      [[8493, 8493], "mapped", [99]],
      [[8494, 8494], "valid", [], "NV8"],
      [[8495, 8496], "mapped", [101]],
      [[8497, 8497], "mapped", [102]],
      [[8498, 8498], "disallowed"],
      [[8499, 8499], "mapped", [109]],
      [[8500, 8500], "mapped", [111]],
      [[8501, 8501], "mapped", [1488]],
      [[8502, 8502], "mapped", [1489]],
      [[8503, 8503], "mapped", [1490]],
      [[8504, 8504], "mapped", [1491]],
      [[8505, 8505], "mapped", [105]],
      [[8506, 8506], "valid", [], "NV8"],
      [[8507, 8507], "mapped", [102, 97, 120]],
      [[8508, 8508], "mapped", [960]],
      [[8509, 8510], "mapped", [947]],
      [[8511, 8511], "mapped", [960]],
      [[8512, 8512], "mapped", [8721]],
      [[8513, 8516], "valid", [], "NV8"],
      [[8517, 8518], "mapped", [100]],
      [[8519, 8519], "mapped", [101]],
      [[8520, 8520], "mapped", [105]],
      [[8521, 8521], "mapped", [106]],
      [[8522, 8523], "valid", [], "NV8"],
      [[8524, 8524], "valid", [], "NV8"],
      [[8525, 8525], "valid", [], "NV8"],
      [[8526, 8526], "valid"],
      [[8527, 8527], "valid", [], "NV8"],
      [[8528, 8528], "mapped", [49, 8260, 55]],
      [[8529, 8529], "mapped", [49, 8260, 57]],
      [[8530, 8530], "mapped", [49, 8260, 49, 48]],
      [[8531, 8531], "mapped", [49, 8260, 51]],
      [[8532, 8532], "mapped", [50, 8260, 51]],
      [[8533, 8533], "mapped", [49, 8260, 53]],
      [[8534, 8534], "mapped", [50, 8260, 53]],
      [[8535, 8535], "mapped", [51, 8260, 53]],
      [[8536, 8536], "mapped", [52, 8260, 53]],
      [[8537, 8537], "mapped", [49, 8260, 54]],
      [[8538, 8538], "mapped", [53, 8260, 54]],
      [[8539, 8539], "mapped", [49, 8260, 56]],
      [[8540, 8540], "mapped", [51, 8260, 56]],
      [[8541, 8541], "mapped", [53, 8260, 56]],
      [[8542, 8542], "mapped", [55, 8260, 56]],
      [[8543, 8543], "mapped", [49, 8260]],
      [[8544, 8544], "mapped", [105]],
      [[8545, 8545], "mapped", [105, 105]],
      [[8546, 8546], "mapped", [105, 105, 105]],
      [[8547, 8547], "mapped", [105, 118]],
      [[8548, 8548], "mapped", [118]],
      [[8549, 8549], "mapped", [118, 105]],
      [[8550, 8550], "mapped", [118, 105, 105]],
      [[8551, 8551], "mapped", [118, 105, 105, 105]],
      [[8552, 8552], "mapped", [105, 120]],
      [[8553, 8553], "mapped", [120]],
      [[8554, 8554], "mapped", [120, 105]],
      [[8555, 8555], "mapped", [120, 105, 105]],
      [[8556, 8556], "mapped", [108]],
      [[8557, 8557], "mapped", [99]],
      [[8558, 8558], "mapped", [100]],
      [[8559, 8559], "mapped", [109]],
      [[8560, 8560], "mapped", [105]],
      [[8561, 8561], "mapped", [105, 105]],
      [[8562, 8562], "mapped", [105, 105, 105]],
      [[8563, 8563], "mapped", [105, 118]],
      [[8564, 8564], "mapped", [118]],
      [[8565, 8565], "mapped", [118, 105]],
      [[8566, 8566], "mapped", [118, 105, 105]],
      [[8567, 8567], "mapped", [118, 105, 105, 105]],
      [[8568, 8568], "mapped", [105, 120]],
      [[8569, 8569], "mapped", [120]],
      [[8570, 8570], "mapped", [120, 105]],
      [[8571, 8571], "mapped", [120, 105, 105]],
      [[8572, 8572], "mapped", [108]],
      [[8573, 8573], "mapped", [99]],
      [[8574, 8574], "mapped", [100]],
      [[8575, 8575], "mapped", [109]],
      [[8576, 8578], "valid", [], "NV8"],
      [[8579, 8579], "disallowed"],
      [[8580, 8580], "valid"],
      [[8581, 8584], "valid", [], "NV8"],
      [[8585, 8585], "mapped", [48, 8260, 51]],
      [[8586, 8587], "valid", [], "NV8"],
      [[8588, 8591], "disallowed"],
      [[8592, 8682], "valid", [], "NV8"],
      [[8683, 8691], "valid", [], "NV8"],
      [[8692, 8703], "valid", [], "NV8"],
      [[8704, 8747], "valid", [], "NV8"],
      [[8748, 8748], "mapped", [8747, 8747]],
      [[8749, 8749], "mapped", [8747, 8747, 8747]],
      [[8750, 8750], "valid", [], "NV8"],
      [[8751, 8751], "mapped", [8750, 8750]],
      [[8752, 8752], "mapped", [8750, 8750, 8750]],
      [[8753, 8799], "valid", [], "NV8"],
      [[8800, 8800], "disallowed_STD3_valid"],
      [[8801, 8813], "valid", [], "NV8"],
      [[8814, 8815], "disallowed_STD3_valid"],
      [[8816, 8945], "valid", [], "NV8"],
      [[8946, 8959], "valid", [], "NV8"],
      [[8960, 8960], "valid", [], "NV8"],
      [[8961, 8961], "valid", [], "NV8"],
      [[8962, 9e3], "valid", [], "NV8"],
      [[9001, 9001], "mapped", [12296]],
      [[9002, 9002], "mapped", [12297]],
      [[9003, 9082], "valid", [], "NV8"],
      [[9083, 9083], "valid", [], "NV8"],
      [[9084, 9084], "valid", [], "NV8"],
      [[9085, 9114], "valid", [], "NV8"],
      [[9115, 9166], "valid", [], "NV8"],
      [[9167, 9168], "valid", [], "NV8"],
      [[9169, 9179], "valid", [], "NV8"],
      [[9180, 9191], "valid", [], "NV8"],
      [[9192, 9192], "valid", [], "NV8"],
      [[9193, 9203], "valid", [], "NV8"],
      [[9204, 9210], "valid", [], "NV8"],
      [[9211, 9215], "disallowed"],
      [[9216, 9252], "valid", [], "NV8"],
      [[9253, 9254], "valid", [], "NV8"],
      [[9255, 9279], "disallowed"],
      [[9280, 9290], "valid", [], "NV8"],
      [[9291, 9311], "disallowed"],
      [[9312, 9312], "mapped", [49]],
      [[9313, 9313], "mapped", [50]],
      [[9314, 9314], "mapped", [51]],
      [[9315, 9315], "mapped", [52]],
      [[9316, 9316], "mapped", [53]],
      [[9317, 9317], "mapped", [54]],
      [[9318, 9318], "mapped", [55]],
      [[9319, 9319], "mapped", [56]],
      [[9320, 9320], "mapped", [57]],
      [[9321, 9321], "mapped", [49, 48]],
      [[9322, 9322], "mapped", [49, 49]],
      [[9323, 9323], "mapped", [49, 50]],
      [[9324, 9324], "mapped", [49, 51]],
      [[9325, 9325], "mapped", [49, 52]],
      [[9326, 9326], "mapped", [49, 53]],
      [[9327, 9327], "mapped", [49, 54]],
      [[9328, 9328], "mapped", [49, 55]],
      [[9329, 9329], "mapped", [49, 56]],
      [[9330, 9330], "mapped", [49, 57]],
      [[9331, 9331], "mapped", [50, 48]],
      [[9332, 9332], "disallowed_STD3_mapped", [40, 49, 41]],
      [[9333, 9333], "disallowed_STD3_mapped", [40, 50, 41]],
      [[9334, 9334], "disallowed_STD3_mapped", [40, 51, 41]],
      [[9335, 9335], "disallowed_STD3_mapped", [40, 52, 41]],
      [[9336, 9336], "disallowed_STD3_mapped", [40, 53, 41]],
      [[9337, 9337], "disallowed_STD3_mapped", [40, 54, 41]],
      [[9338, 9338], "disallowed_STD3_mapped", [40, 55, 41]],
      [[9339, 9339], "disallowed_STD3_mapped", [40, 56, 41]],
      [[9340, 9340], "disallowed_STD3_mapped", [40, 57, 41]],
      [[9341, 9341], "disallowed_STD3_mapped", [40, 49, 48, 41]],
      [[9342, 9342], "disallowed_STD3_mapped", [40, 49, 49, 41]],
      [[9343, 9343], "disallowed_STD3_mapped", [40, 49, 50, 41]],
      [[9344, 9344], "disallowed_STD3_mapped", [40, 49, 51, 41]],
      [[9345, 9345], "disallowed_STD3_mapped", [40, 49, 52, 41]],
      [[9346, 9346], "disallowed_STD3_mapped", [40, 49, 53, 41]],
      [[9347, 9347], "disallowed_STD3_mapped", [40, 49, 54, 41]],
      [[9348, 9348], "disallowed_STD3_mapped", [40, 49, 55, 41]],
      [[9349, 9349], "disallowed_STD3_mapped", [40, 49, 56, 41]],
      [[9350, 9350], "disallowed_STD3_mapped", [40, 49, 57, 41]],
      [[9351, 9351], "disallowed_STD3_mapped", [40, 50, 48, 41]],
      [[9352, 9371], "disallowed"],
      [[9372, 9372], "disallowed_STD3_mapped", [40, 97, 41]],
      [[9373, 9373], "disallowed_STD3_mapped", [40, 98, 41]],
      [[9374, 9374], "disallowed_STD3_mapped", [40, 99, 41]],
      [[9375, 9375], "disallowed_STD3_mapped", [40, 100, 41]],
      [[9376, 9376], "disallowed_STD3_mapped", [40, 101, 41]],
      [[9377, 9377], "disallowed_STD3_mapped", [40, 102, 41]],
      [[9378, 9378], "disallowed_STD3_mapped", [40, 103, 41]],
      [[9379, 9379], "disallowed_STD3_mapped", [40, 104, 41]],
      [[9380, 9380], "disallowed_STD3_mapped", [40, 105, 41]],
      [[9381, 9381], "disallowed_STD3_mapped", [40, 106, 41]],
      [[9382, 9382], "disallowed_STD3_mapped", [40, 107, 41]],
      [[9383, 9383], "disallowed_STD3_mapped", [40, 108, 41]],
      [[9384, 9384], "disallowed_STD3_mapped", [40, 109, 41]],
      [[9385, 9385], "disallowed_STD3_mapped", [40, 110, 41]],
      [[9386, 9386], "disallowed_STD3_mapped", [40, 111, 41]],
      [[9387, 9387], "disallowed_STD3_mapped", [40, 112, 41]],
      [[9388, 9388], "disallowed_STD3_mapped", [40, 113, 41]],
      [[9389, 9389], "disallowed_STD3_mapped", [40, 114, 41]],
      [[9390, 9390], "disallowed_STD3_mapped", [40, 115, 41]],
      [[9391, 9391], "disallowed_STD3_mapped", [40, 116, 41]],
      [[9392, 9392], "disallowed_STD3_mapped", [40, 117, 41]],
      [[9393, 9393], "disallowed_STD3_mapped", [40, 118, 41]],
      [[9394, 9394], "disallowed_STD3_mapped", [40, 119, 41]],
      [[9395, 9395], "disallowed_STD3_mapped", [40, 120, 41]],
      [[9396, 9396], "disallowed_STD3_mapped", [40, 121, 41]],
      [[9397, 9397], "disallowed_STD3_mapped", [40, 122, 41]],
      [[9398, 9398], "mapped", [97]],
      [[9399, 9399], "mapped", [98]],
      [[9400, 9400], "mapped", [99]],
      [[9401, 9401], "mapped", [100]],
      [[9402, 9402], "mapped", [101]],
      [[9403, 9403], "mapped", [102]],
      [[9404, 9404], "mapped", [103]],
      [[9405, 9405], "mapped", [104]],
      [[9406, 9406], "mapped", [105]],
      [[9407, 9407], "mapped", [106]],
      [[9408, 9408], "mapped", [107]],
      [[9409, 9409], "mapped", [108]],
      [[9410, 9410], "mapped", [109]],
      [[9411, 9411], "mapped", [110]],
      [[9412, 9412], "mapped", [111]],
      [[9413, 9413], "mapped", [112]],
      [[9414, 9414], "mapped", [113]],
      [[9415, 9415], "mapped", [114]],
      [[9416, 9416], "mapped", [115]],
      [[9417, 9417], "mapped", [116]],
      [[9418, 9418], "mapped", [117]],
      [[9419, 9419], "mapped", [118]],
      [[9420, 9420], "mapped", [119]],
      [[9421, 9421], "mapped", [120]],
      [[9422, 9422], "mapped", [121]],
      [[9423, 9423], "mapped", [122]],
      [[9424, 9424], "mapped", [97]],
      [[9425, 9425], "mapped", [98]],
      [[9426, 9426], "mapped", [99]],
      [[9427, 9427], "mapped", [100]],
      [[9428, 9428], "mapped", [101]],
      [[9429, 9429], "mapped", [102]],
      [[9430, 9430], "mapped", [103]],
      [[9431, 9431], "mapped", [104]],
      [[9432, 9432], "mapped", [105]],
      [[9433, 9433], "mapped", [106]],
      [[9434, 9434], "mapped", [107]],
      [[9435, 9435], "mapped", [108]],
      [[9436, 9436], "mapped", [109]],
      [[9437, 9437], "mapped", [110]],
      [[9438, 9438], "mapped", [111]],
      [[9439, 9439], "mapped", [112]],
      [[9440, 9440], "mapped", [113]],
      [[9441, 9441], "mapped", [114]],
      [[9442, 9442], "mapped", [115]],
      [[9443, 9443], "mapped", [116]],
      [[9444, 9444], "mapped", [117]],
      [[9445, 9445], "mapped", [118]],
      [[9446, 9446], "mapped", [119]],
      [[9447, 9447], "mapped", [120]],
      [[9448, 9448], "mapped", [121]],
      [[9449, 9449], "mapped", [122]],
      [[9450, 9450], "mapped", [48]],
      [[9451, 9470], "valid", [], "NV8"],
      [[9471, 9471], "valid", [], "NV8"],
      [[9472, 9621], "valid", [], "NV8"],
      [[9622, 9631], "valid", [], "NV8"],
      [[9632, 9711], "valid", [], "NV8"],
      [[9712, 9719], "valid", [], "NV8"],
      [[9720, 9727], "valid", [], "NV8"],
      [[9728, 9747], "valid", [], "NV8"],
      [[9748, 9749], "valid", [], "NV8"],
      [[9750, 9751], "valid", [], "NV8"],
      [[9752, 9752], "valid", [], "NV8"],
      [[9753, 9753], "valid", [], "NV8"],
      [[9754, 9839], "valid", [], "NV8"],
      [[9840, 9841], "valid", [], "NV8"],
      [[9842, 9853], "valid", [], "NV8"],
      [[9854, 9855], "valid", [], "NV8"],
      [[9856, 9865], "valid", [], "NV8"],
      [[9866, 9873], "valid", [], "NV8"],
      [[9874, 9884], "valid", [], "NV8"],
      [[9885, 9885], "valid", [], "NV8"],
      [[9886, 9887], "valid", [], "NV8"],
      [[9888, 9889], "valid", [], "NV8"],
      [[9890, 9905], "valid", [], "NV8"],
      [[9906, 9906], "valid", [], "NV8"],
      [[9907, 9916], "valid", [], "NV8"],
      [[9917, 9919], "valid", [], "NV8"],
      [[9920, 9923], "valid", [], "NV8"],
      [[9924, 9933], "valid", [], "NV8"],
      [[9934, 9934], "valid", [], "NV8"],
      [[9935, 9953], "valid", [], "NV8"],
      [[9954, 9954], "valid", [], "NV8"],
      [[9955, 9955], "valid", [], "NV8"],
      [[9956, 9959], "valid", [], "NV8"],
      [[9960, 9983], "valid", [], "NV8"],
      [[9984, 9984], "valid", [], "NV8"],
      [[9985, 9988], "valid", [], "NV8"],
      [[9989, 9989], "valid", [], "NV8"],
      [[9990, 9993], "valid", [], "NV8"],
      [[9994, 9995], "valid", [], "NV8"],
      [[9996, 10023], "valid", [], "NV8"],
      [[10024, 10024], "valid", [], "NV8"],
      [[10025, 10059], "valid", [], "NV8"],
      [[10060, 10060], "valid", [], "NV8"],
      [[10061, 10061], "valid", [], "NV8"],
      [[10062, 10062], "valid", [], "NV8"],
      [[10063, 10066], "valid", [], "NV8"],
      [[10067, 10069], "valid", [], "NV8"],
      [[10070, 10070], "valid", [], "NV8"],
      [[10071, 10071], "valid", [], "NV8"],
      [[10072, 10078], "valid", [], "NV8"],
      [[10079, 10080], "valid", [], "NV8"],
      [[10081, 10087], "valid", [], "NV8"],
      [[10088, 10101], "valid", [], "NV8"],
      [[10102, 10132], "valid", [], "NV8"],
      [[10133, 10135], "valid", [], "NV8"],
      [[10136, 10159], "valid", [], "NV8"],
      [[10160, 10160], "valid", [], "NV8"],
      [[10161, 10174], "valid", [], "NV8"],
      [[10175, 10175], "valid", [], "NV8"],
      [[10176, 10182], "valid", [], "NV8"],
      [[10183, 10186], "valid", [], "NV8"],
      [[10187, 10187], "valid", [], "NV8"],
      [[10188, 10188], "valid", [], "NV8"],
      [[10189, 10189], "valid", [], "NV8"],
      [[10190, 10191], "valid", [], "NV8"],
      [[10192, 10219], "valid", [], "NV8"],
      [[10220, 10223], "valid", [], "NV8"],
      [[10224, 10239], "valid", [], "NV8"],
      [[10240, 10495], "valid", [], "NV8"],
      [[10496, 10763], "valid", [], "NV8"],
      [[10764, 10764], "mapped", [8747, 8747, 8747, 8747]],
      [[10765, 10867], "valid", [], "NV8"],
      [[10868, 10868], "disallowed_STD3_mapped", [58, 58, 61]],
      [[10869, 10869], "disallowed_STD3_mapped", [61, 61]],
      [[10870, 10870], "disallowed_STD3_mapped", [61, 61, 61]],
      [[10871, 10971], "valid", [], "NV8"],
      [[10972, 10972], "mapped", [10973, 824]],
      [[10973, 11007], "valid", [], "NV8"],
      [[11008, 11021], "valid", [], "NV8"],
      [[11022, 11027], "valid", [], "NV8"],
      [[11028, 11034], "valid", [], "NV8"],
      [[11035, 11039], "valid", [], "NV8"],
      [[11040, 11043], "valid", [], "NV8"],
      [[11044, 11084], "valid", [], "NV8"],
      [[11085, 11087], "valid", [], "NV8"],
      [[11088, 11092], "valid", [], "NV8"],
      [[11093, 11097], "valid", [], "NV8"],
      [[11098, 11123], "valid", [], "NV8"],
      [[11124, 11125], "disallowed"],
      [[11126, 11157], "valid", [], "NV8"],
      [[11158, 11159], "disallowed"],
      [[11160, 11193], "valid", [], "NV8"],
      [[11194, 11196], "disallowed"],
      [[11197, 11208], "valid", [], "NV8"],
      [[11209, 11209], "disallowed"],
      [[11210, 11217], "valid", [], "NV8"],
      [[11218, 11243], "disallowed"],
      [[11244, 11247], "valid", [], "NV8"],
      [[11248, 11263], "disallowed"],
      [[11264, 11264], "mapped", [11312]],
      [[11265, 11265], "mapped", [11313]],
      [[11266, 11266], "mapped", [11314]],
      [[11267, 11267], "mapped", [11315]],
      [[11268, 11268], "mapped", [11316]],
      [[11269, 11269], "mapped", [11317]],
      [[11270, 11270], "mapped", [11318]],
      [[11271, 11271], "mapped", [11319]],
      [[11272, 11272], "mapped", [11320]],
      [[11273, 11273], "mapped", [11321]],
      [[11274, 11274], "mapped", [11322]],
      [[11275, 11275], "mapped", [11323]],
      [[11276, 11276], "mapped", [11324]],
      [[11277, 11277], "mapped", [11325]],
      [[11278, 11278], "mapped", [11326]],
      [[11279, 11279], "mapped", [11327]],
      [[11280, 11280], "mapped", [11328]],
      [[11281, 11281], "mapped", [11329]],
      [[11282, 11282], "mapped", [11330]],
      [[11283, 11283], "mapped", [11331]],
      [[11284, 11284], "mapped", [11332]],
      [[11285, 11285], "mapped", [11333]],
      [[11286, 11286], "mapped", [11334]],
      [[11287, 11287], "mapped", [11335]],
      [[11288, 11288], "mapped", [11336]],
      [[11289, 11289], "mapped", [11337]],
      [[11290, 11290], "mapped", [11338]],
      [[11291, 11291], "mapped", [11339]],
      [[11292, 11292], "mapped", [11340]],
      [[11293, 11293], "mapped", [11341]],
      [[11294, 11294], "mapped", [11342]],
      [[11295, 11295], "mapped", [11343]],
      [[11296, 11296], "mapped", [11344]],
      [[11297, 11297], "mapped", [11345]],
      [[11298, 11298], "mapped", [11346]],
      [[11299, 11299], "mapped", [11347]],
      [[11300, 11300], "mapped", [11348]],
      [[11301, 11301], "mapped", [11349]],
      [[11302, 11302], "mapped", [11350]],
      [[11303, 11303], "mapped", [11351]],
      [[11304, 11304], "mapped", [11352]],
      [[11305, 11305], "mapped", [11353]],
      [[11306, 11306], "mapped", [11354]],
      [[11307, 11307], "mapped", [11355]],
      [[11308, 11308], "mapped", [11356]],
      [[11309, 11309], "mapped", [11357]],
      [[11310, 11310], "mapped", [11358]],
      [[11311, 11311], "disallowed"],
      [[11312, 11358], "valid"],
      [[11359, 11359], "disallowed"],
      [[11360, 11360], "mapped", [11361]],
      [[11361, 11361], "valid"],
      [[11362, 11362], "mapped", [619]],
      [[11363, 11363], "mapped", [7549]],
      [[11364, 11364], "mapped", [637]],
      [[11365, 11366], "valid"],
      [[11367, 11367], "mapped", [11368]],
      [[11368, 11368], "valid"],
      [[11369, 11369], "mapped", [11370]],
      [[11370, 11370], "valid"],
      [[11371, 11371], "mapped", [11372]],
      [[11372, 11372], "valid"],
      [[11373, 11373], "mapped", [593]],
      [[11374, 11374], "mapped", [625]],
      [[11375, 11375], "mapped", [592]],
      [[11376, 11376], "mapped", [594]],
      [[11377, 11377], "valid"],
      [[11378, 11378], "mapped", [11379]],
      [[11379, 11379], "valid"],
      [[11380, 11380], "valid"],
      [[11381, 11381], "mapped", [11382]],
      [[11382, 11383], "valid"],
      [[11384, 11387], "valid"],
      [[11388, 11388], "mapped", [106]],
      [[11389, 11389], "mapped", [118]],
      [[11390, 11390], "mapped", [575]],
      [[11391, 11391], "mapped", [576]],
      [[11392, 11392], "mapped", [11393]],
      [[11393, 11393], "valid"],
      [[11394, 11394], "mapped", [11395]],
      [[11395, 11395], "valid"],
      [[11396, 11396], "mapped", [11397]],
      [[11397, 11397], "valid"],
      [[11398, 11398], "mapped", [11399]],
      [[11399, 11399], "valid"],
      [[11400, 11400], "mapped", [11401]],
      [[11401, 11401], "valid"],
      [[11402, 11402], "mapped", [11403]],
      [[11403, 11403], "valid"],
      [[11404, 11404], "mapped", [11405]],
      [[11405, 11405], "valid"],
      [[11406, 11406], "mapped", [11407]],
      [[11407, 11407], "valid"],
      [[11408, 11408], "mapped", [11409]],
      [[11409, 11409], "valid"],
      [[11410, 11410], "mapped", [11411]],
      [[11411, 11411], "valid"],
      [[11412, 11412], "mapped", [11413]],
      [[11413, 11413], "valid"],
      [[11414, 11414], "mapped", [11415]],
      [[11415, 11415], "valid"],
      [[11416, 11416], "mapped", [11417]],
      [[11417, 11417], "valid"],
      [[11418, 11418], "mapped", [11419]],
      [[11419, 11419], "valid"],
      [[11420, 11420], "mapped", [11421]],
      [[11421, 11421], "valid"],
      [[11422, 11422], "mapped", [11423]],
      [[11423, 11423], "valid"],
      [[11424, 11424], "mapped", [11425]],
      [[11425, 11425], "valid"],
      [[11426, 11426], "mapped", [11427]],
      [[11427, 11427], "valid"],
      [[11428, 11428], "mapped", [11429]],
      [[11429, 11429], "valid"],
      [[11430, 11430], "mapped", [11431]],
      [[11431, 11431], "valid"],
      [[11432, 11432], "mapped", [11433]],
      [[11433, 11433], "valid"],
      [[11434, 11434], "mapped", [11435]],
      [[11435, 11435], "valid"],
      [[11436, 11436], "mapped", [11437]],
      [[11437, 11437], "valid"],
      [[11438, 11438], "mapped", [11439]],
      [[11439, 11439], "valid"],
      [[11440, 11440], "mapped", [11441]],
      [[11441, 11441], "valid"],
      [[11442, 11442], "mapped", [11443]],
      [[11443, 11443], "valid"],
      [[11444, 11444], "mapped", [11445]],
      [[11445, 11445], "valid"],
      [[11446, 11446], "mapped", [11447]],
      [[11447, 11447], "valid"],
      [[11448, 11448], "mapped", [11449]],
      [[11449, 11449], "valid"],
      [[11450, 11450], "mapped", [11451]],
      [[11451, 11451], "valid"],
      [[11452, 11452], "mapped", [11453]],
      [[11453, 11453], "valid"],
      [[11454, 11454], "mapped", [11455]],
      [[11455, 11455], "valid"],
      [[11456, 11456], "mapped", [11457]],
      [[11457, 11457], "valid"],
      [[11458, 11458], "mapped", [11459]],
      [[11459, 11459], "valid"],
      [[11460, 11460], "mapped", [11461]],
      [[11461, 11461], "valid"],
      [[11462, 11462], "mapped", [11463]],
      [[11463, 11463], "valid"],
      [[11464, 11464], "mapped", [11465]],
      [[11465, 11465], "valid"],
      [[11466, 11466], "mapped", [11467]],
      [[11467, 11467], "valid"],
      [[11468, 11468], "mapped", [11469]],
      [[11469, 11469], "valid"],
      [[11470, 11470], "mapped", [11471]],
      [[11471, 11471], "valid"],
      [[11472, 11472], "mapped", [11473]],
      [[11473, 11473], "valid"],
      [[11474, 11474], "mapped", [11475]],
      [[11475, 11475], "valid"],
      [[11476, 11476], "mapped", [11477]],
      [[11477, 11477], "valid"],
      [[11478, 11478], "mapped", [11479]],
      [[11479, 11479], "valid"],
      [[11480, 11480], "mapped", [11481]],
      [[11481, 11481], "valid"],
      [[11482, 11482], "mapped", [11483]],
      [[11483, 11483], "valid"],
      [[11484, 11484], "mapped", [11485]],
      [[11485, 11485], "valid"],
      [[11486, 11486], "mapped", [11487]],
      [[11487, 11487], "valid"],
      [[11488, 11488], "mapped", [11489]],
      [[11489, 11489], "valid"],
      [[11490, 11490], "mapped", [11491]],
      [[11491, 11492], "valid"],
      [[11493, 11498], "valid", [], "NV8"],
      [[11499, 11499], "mapped", [11500]],
      [[11500, 11500], "valid"],
      [[11501, 11501], "mapped", [11502]],
      [[11502, 11505], "valid"],
      [[11506, 11506], "mapped", [11507]],
      [[11507, 11507], "valid"],
      [[11508, 11512], "disallowed"],
      [[11513, 11519], "valid", [], "NV8"],
      [[11520, 11557], "valid"],
      [[11558, 11558], "disallowed"],
      [[11559, 11559], "valid"],
      [[11560, 11564], "disallowed"],
      [[11565, 11565], "valid"],
      [[11566, 11567], "disallowed"],
      [[11568, 11621], "valid"],
      [[11622, 11623], "valid"],
      [[11624, 11630], "disallowed"],
      [[11631, 11631], "mapped", [11617]],
      [[11632, 11632], "valid", [], "NV8"],
      [[11633, 11646], "disallowed"],
      [[11647, 11647], "valid"],
      [[11648, 11670], "valid"],
      [[11671, 11679], "disallowed"],
      [[11680, 11686], "valid"],
      [[11687, 11687], "disallowed"],
      [[11688, 11694], "valid"],
      [[11695, 11695], "disallowed"],
      [[11696, 11702], "valid"],
      [[11703, 11703], "disallowed"],
      [[11704, 11710], "valid"],
      [[11711, 11711], "disallowed"],
      [[11712, 11718], "valid"],
      [[11719, 11719], "disallowed"],
      [[11720, 11726], "valid"],
      [[11727, 11727], "disallowed"],
      [[11728, 11734], "valid"],
      [[11735, 11735], "disallowed"],
      [[11736, 11742], "valid"],
      [[11743, 11743], "disallowed"],
      [[11744, 11775], "valid"],
      [[11776, 11799], "valid", [], "NV8"],
      [[11800, 11803], "valid", [], "NV8"],
      [[11804, 11805], "valid", [], "NV8"],
      [[11806, 11822], "valid", [], "NV8"],
      [[11823, 11823], "valid"],
      [[11824, 11824], "valid", [], "NV8"],
      [[11825, 11825], "valid", [], "NV8"],
      [[11826, 11835], "valid", [], "NV8"],
      [[11836, 11842], "valid", [], "NV8"],
      [[11843, 11903], "disallowed"],
      [[11904, 11929], "valid", [], "NV8"],
      [[11930, 11930], "disallowed"],
      [[11931, 11934], "valid", [], "NV8"],
      [[11935, 11935], "mapped", [27597]],
      [[11936, 12018], "valid", [], "NV8"],
      [[12019, 12019], "mapped", [40863]],
      [[12020, 12031], "disallowed"],
      [[12032, 12032], "mapped", [19968]],
      [[12033, 12033], "mapped", [20008]],
      [[12034, 12034], "mapped", [20022]],
      [[12035, 12035], "mapped", [20031]],
      [[12036, 12036], "mapped", [20057]],
      [[12037, 12037], "mapped", [20101]],
      [[12038, 12038], "mapped", [20108]],
      [[12039, 12039], "mapped", [20128]],
      [[12040, 12040], "mapped", [20154]],
      [[12041, 12041], "mapped", [20799]],
      [[12042, 12042], "mapped", [20837]],
      [[12043, 12043], "mapped", [20843]],
      [[12044, 12044], "mapped", [20866]],
      [[12045, 12045], "mapped", [20886]],
      [[12046, 12046], "mapped", [20907]],
      [[12047, 12047], "mapped", [20960]],
      [[12048, 12048], "mapped", [20981]],
      [[12049, 12049], "mapped", [20992]],
      [[12050, 12050], "mapped", [21147]],
      [[12051, 12051], "mapped", [21241]],
      [[12052, 12052], "mapped", [21269]],
      [[12053, 12053], "mapped", [21274]],
      [[12054, 12054], "mapped", [21304]],
      [[12055, 12055], "mapped", [21313]],
      [[12056, 12056], "mapped", [21340]],
      [[12057, 12057], "mapped", [21353]],
      [[12058, 12058], "mapped", [21378]],
      [[12059, 12059], "mapped", [21430]],
      [[12060, 12060], "mapped", [21448]],
      [[12061, 12061], "mapped", [21475]],
      [[12062, 12062], "mapped", [22231]],
      [[12063, 12063], "mapped", [22303]],
      [[12064, 12064], "mapped", [22763]],
      [[12065, 12065], "mapped", [22786]],
      [[12066, 12066], "mapped", [22794]],
      [[12067, 12067], "mapped", [22805]],
      [[12068, 12068], "mapped", [22823]],
      [[12069, 12069], "mapped", [22899]],
      [[12070, 12070], "mapped", [23376]],
      [[12071, 12071], "mapped", [23424]],
      [[12072, 12072], "mapped", [23544]],
      [[12073, 12073], "mapped", [23567]],
      [[12074, 12074], "mapped", [23586]],
      [[12075, 12075], "mapped", [23608]],
      [[12076, 12076], "mapped", [23662]],
      [[12077, 12077], "mapped", [23665]],
      [[12078, 12078], "mapped", [24027]],
      [[12079, 12079], "mapped", [24037]],
      [[12080, 12080], "mapped", [24049]],
      [[12081, 12081], "mapped", [24062]],
      [[12082, 12082], "mapped", [24178]],
      [[12083, 12083], "mapped", [24186]],
      [[12084, 12084], "mapped", [24191]],
      [[12085, 12085], "mapped", [24308]],
      [[12086, 12086], "mapped", [24318]],
      [[12087, 12087], "mapped", [24331]],
      [[12088, 12088], "mapped", [24339]],
      [[12089, 12089], "mapped", [24400]],
      [[12090, 12090], "mapped", [24417]],
      [[12091, 12091], "mapped", [24435]],
      [[12092, 12092], "mapped", [24515]],
      [[12093, 12093], "mapped", [25096]],
      [[12094, 12094], "mapped", [25142]],
      [[12095, 12095], "mapped", [25163]],
      [[12096, 12096], "mapped", [25903]],
      [[12097, 12097], "mapped", [25908]],
      [[12098, 12098], "mapped", [25991]],
      [[12099, 12099], "mapped", [26007]],
      [[12100, 12100], "mapped", [26020]],
      [[12101, 12101], "mapped", [26041]],
      [[12102, 12102], "mapped", [26080]],
      [[12103, 12103], "mapped", [26085]],
      [[12104, 12104], "mapped", [26352]],
      [[12105, 12105], "mapped", [26376]],
      [[12106, 12106], "mapped", [26408]],
      [[12107, 12107], "mapped", [27424]],
      [[12108, 12108], "mapped", [27490]],
      [[12109, 12109], "mapped", [27513]],
      [[12110, 12110], "mapped", [27571]],
      [[12111, 12111], "mapped", [27595]],
      [[12112, 12112], "mapped", [27604]],
      [[12113, 12113], "mapped", [27611]],
      [[12114, 12114], "mapped", [27663]],
      [[12115, 12115], "mapped", [27668]],
      [[12116, 12116], "mapped", [27700]],
      [[12117, 12117], "mapped", [28779]],
      [[12118, 12118], "mapped", [29226]],
      [[12119, 12119], "mapped", [29238]],
      [[12120, 12120], "mapped", [29243]],
      [[12121, 12121], "mapped", [29247]],
      [[12122, 12122], "mapped", [29255]],
      [[12123, 12123], "mapped", [29273]],
      [[12124, 12124], "mapped", [29275]],
      [[12125, 12125], "mapped", [29356]],
      [[12126, 12126], "mapped", [29572]],
      [[12127, 12127], "mapped", [29577]],
      [[12128, 12128], "mapped", [29916]],
      [[12129, 12129], "mapped", [29926]],
      [[12130, 12130], "mapped", [29976]],
      [[12131, 12131], "mapped", [29983]],
      [[12132, 12132], "mapped", [29992]],
      [[12133, 12133], "mapped", [3e4]],
      [[12134, 12134], "mapped", [30091]],
      [[12135, 12135], "mapped", [30098]],
      [[12136, 12136], "mapped", [30326]],
      [[12137, 12137], "mapped", [30333]],
      [[12138, 12138], "mapped", [30382]],
      [[12139, 12139], "mapped", [30399]],
      [[12140, 12140], "mapped", [30446]],
      [[12141, 12141], "mapped", [30683]],
      [[12142, 12142], "mapped", [30690]],
      [[12143, 12143], "mapped", [30707]],
      [[12144, 12144], "mapped", [31034]],
      [[12145, 12145], "mapped", [31160]],
      [[12146, 12146], "mapped", [31166]],
      [[12147, 12147], "mapped", [31348]],
      [[12148, 12148], "mapped", [31435]],
      [[12149, 12149], "mapped", [31481]],
      [[12150, 12150], "mapped", [31859]],
      [[12151, 12151], "mapped", [31992]],
      [[12152, 12152], "mapped", [32566]],
      [[12153, 12153], "mapped", [32593]],
      [[12154, 12154], "mapped", [32650]],
      [[12155, 12155], "mapped", [32701]],
      [[12156, 12156], "mapped", [32769]],
      [[12157, 12157], "mapped", [32780]],
      [[12158, 12158], "mapped", [32786]],
      [[12159, 12159], "mapped", [32819]],
      [[12160, 12160], "mapped", [32895]],
      [[12161, 12161], "mapped", [32905]],
      [[12162, 12162], "mapped", [33251]],
      [[12163, 12163], "mapped", [33258]],
      [[12164, 12164], "mapped", [33267]],
      [[12165, 12165], "mapped", [33276]],
      [[12166, 12166], "mapped", [33292]],
      [[12167, 12167], "mapped", [33307]],
      [[12168, 12168], "mapped", [33311]],
      [[12169, 12169], "mapped", [33390]],
      [[12170, 12170], "mapped", [33394]],
      [[12171, 12171], "mapped", [33400]],
      [[12172, 12172], "mapped", [34381]],
      [[12173, 12173], "mapped", [34411]],
      [[12174, 12174], "mapped", [34880]],
      [[12175, 12175], "mapped", [34892]],
      [[12176, 12176], "mapped", [34915]],
      [[12177, 12177], "mapped", [35198]],
      [[12178, 12178], "mapped", [35211]],
      [[12179, 12179], "mapped", [35282]],
      [[12180, 12180], "mapped", [35328]],
      [[12181, 12181], "mapped", [35895]],
      [[12182, 12182], "mapped", [35910]],
      [[12183, 12183], "mapped", [35925]],
      [[12184, 12184], "mapped", [35960]],
      [[12185, 12185], "mapped", [35997]],
      [[12186, 12186], "mapped", [36196]],
      [[12187, 12187], "mapped", [36208]],
      [[12188, 12188], "mapped", [36275]],
      [[12189, 12189], "mapped", [36523]],
      [[12190, 12190], "mapped", [36554]],
      [[12191, 12191], "mapped", [36763]],
      [[12192, 12192], "mapped", [36784]],
      [[12193, 12193], "mapped", [36789]],
      [[12194, 12194], "mapped", [37009]],
      [[12195, 12195], "mapped", [37193]],
      [[12196, 12196], "mapped", [37318]],
      [[12197, 12197], "mapped", [37324]],
      [[12198, 12198], "mapped", [37329]],
      [[12199, 12199], "mapped", [38263]],
      [[12200, 12200], "mapped", [38272]],
      [[12201, 12201], "mapped", [38428]],
      [[12202, 12202], "mapped", [38582]],
      [[12203, 12203], "mapped", [38585]],
      [[12204, 12204], "mapped", [38632]],
      [[12205, 12205], "mapped", [38737]],
      [[12206, 12206], "mapped", [38750]],
      [[12207, 12207], "mapped", [38754]],
      [[12208, 12208], "mapped", [38761]],
      [[12209, 12209], "mapped", [38859]],
      [[12210, 12210], "mapped", [38893]],
      [[12211, 12211], "mapped", [38899]],
      [[12212, 12212], "mapped", [38913]],
      [[12213, 12213], "mapped", [39080]],
      [[12214, 12214], "mapped", [39131]],
      [[12215, 12215], "mapped", [39135]],
      [[12216, 12216], "mapped", [39318]],
      [[12217, 12217], "mapped", [39321]],
      [[12218, 12218], "mapped", [39340]],
      [[12219, 12219], "mapped", [39592]],
      [[12220, 12220], "mapped", [39640]],
      [[12221, 12221], "mapped", [39647]],
      [[12222, 12222], "mapped", [39717]],
      [[12223, 12223], "mapped", [39727]],
      [[12224, 12224], "mapped", [39730]],
      [[12225, 12225], "mapped", [39740]],
      [[12226, 12226], "mapped", [39770]],
      [[12227, 12227], "mapped", [40165]],
      [[12228, 12228], "mapped", [40565]],
      [[12229, 12229], "mapped", [40575]],
      [[12230, 12230], "mapped", [40613]],
      [[12231, 12231], "mapped", [40635]],
      [[12232, 12232], "mapped", [40643]],
      [[12233, 12233], "mapped", [40653]],
      [[12234, 12234], "mapped", [40657]],
      [[12235, 12235], "mapped", [40697]],
      [[12236, 12236], "mapped", [40701]],
      [[12237, 12237], "mapped", [40718]],
      [[12238, 12238], "mapped", [40723]],
      [[12239, 12239], "mapped", [40736]],
      [[12240, 12240], "mapped", [40763]],
      [[12241, 12241], "mapped", [40778]],
      [[12242, 12242], "mapped", [40786]],
      [[12243, 12243], "mapped", [40845]],
      [[12244, 12244], "mapped", [40860]],
      [[12245, 12245], "mapped", [40864]],
      [[12246, 12271], "disallowed"],
      [[12272, 12283], "disallowed"],
      [[12284, 12287], "disallowed"],
      [[12288, 12288], "disallowed_STD3_mapped", [32]],
      [[12289, 12289], "valid", [], "NV8"],
      [[12290, 12290], "mapped", [46]],
      [[12291, 12292], "valid", [], "NV8"],
      [[12293, 12295], "valid"],
      [[12296, 12329], "valid", [], "NV8"],
      [[12330, 12333], "valid"],
      [[12334, 12341], "valid", [], "NV8"],
      [[12342, 12342], "mapped", [12306]],
      [[12343, 12343], "valid", [], "NV8"],
      [[12344, 12344], "mapped", [21313]],
      [[12345, 12345], "mapped", [21316]],
      [[12346, 12346], "mapped", [21317]],
      [[12347, 12347], "valid", [], "NV8"],
      [[12348, 12348], "valid"],
      [[12349, 12349], "valid", [], "NV8"],
      [[12350, 12350], "valid", [], "NV8"],
      [[12351, 12351], "valid", [], "NV8"],
      [[12352, 12352], "disallowed"],
      [[12353, 12436], "valid"],
      [[12437, 12438], "valid"],
      [[12439, 12440], "disallowed"],
      [[12441, 12442], "valid"],
      [[12443, 12443], "disallowed_STD3_mapped", [32, 12441]],
      [[12444, 12444], "disallowed_STD3_mapped", [32, 12442]],
      [[12445, 12446], "valid"],
      [[12447, 12447], "mapped", [12424, 12426]],
      [[12448, 12448], "valid", [], "NV8"],
      [[12449, 12542], "valid"],
      [[12543, 12543], "mapped", [12467, 12488]],
      [[12544, 12548], "disallowed"],
      [[12549, 12588], "valid"],
      [[12589, 12589], "valid"],
      [[12590, 12592], "disallowed"],
      [[12593, 12593], "mapped", [4352]],
      [[12594, 12594], "mapped", [4353]],
      [[12595, 12595], "mapped", [4522]],
      [[12596, 12596], "mapped", [4354]],
      [[12597, 12597], "mapped", [4524]],
      [[12598, 12598], "mapped", [4525]],
      [[12599, 12599], "mapped", [4355]],
      [[12600, 12600], "mapped", [4356]],
      [[12601, 12601], "mapped", [4357]],
      [[12602, 12602], "mapped", [4528]],
      [[12603, 12603], "mapped", [4529]],
      [[12604, 12604], "mapped", [4530]],
      [[12605, 12605], "mapped", [4531]],
      [[12606, 12606], "mapped", [4532]],
      [[12607, 12607], "mapped", [4533]],
      [[12608, 12608], "mapped", [4378]],
      [[12609, 12609], "mapped", [4358]],
      [[12610, 12610], "mapped", [4359]],
      [[12611, 12611], "mapped", [4360]],
      [[12612, 12612], "mapped", [4385]],
      [[12613, 12613], "mapped", [4361]],
      [[12614, 12614], "mapped", [4362]],
      [[12615, 12615], "mapped", [4363]],
      [[12616, 12616], "mapped", [4364]],
      [[12617, 12617], "mapped", [4365]],
      [[12618, 12618], "mapped", [4366]],
      [[12619, 12619], "mapped", [4367]],
      [[12620, 12620], "mapped", [4368]],
      [[12621, 12621], "mapped", [4369]],
      [[12622, 12622], "mapped", [4370]],
      [[12623, 12623], "mapped", [4449]],
      [[12624, 12624], "mapped", [4450]],
      [[12625, 12625], "mapped", [4451]],
      [[12626, 12626], "mapped", [4452]],
      [[12627, 12627], "mapped", [4453]],
      [[12628, 12628], "mapped", [4454]],
      [[12629, 12629], "mapped", [4455]],
      [[12630, 12630], "mapped", [4456]],
      [[12631, 12631], "mapped", [4457]],
      [[12632, 12632], "mapped", [4458]],
      [[12633, 12633], "mapped", [4459]],
      [[12634, 12634], "mapped", [4460]],
      [[12635, 12635], "mapped", [4461]],
      [[12636, 12636], "mapped", [4462]],
      [[12637, 12637], "mapped", [4463]],
      [[12638, 12638], "mapped", [4464]],
      [[12639, 12639], "mapped", [4465]],
      [[12640, 12640], "mapped", [4466]],
      [[12641, 12641], "mapped", [4467]],
      [[12642, 12642], "mapped", [4468]],
      [[12643, 12643], "mapped", [4469]],
      [[12644, 12644], "disallowed"],
      [[12645, 12645], "mapped", [4372]],
      [[12646, 12646], "mapped", [4373]],
      [[12647, 12647], "mapped", [4551]],
      [[12648, 12648], "mapped", [4552]],
      [[12649, 12649], "mapped", [4556]],
      [[12650, 12650], "mapped", [4558]],
      [[12651, 12651], "mapped", [4563]],
      [[12652, 12652], "mapped", [4567]],
      [[12653, 12653], "mapped", [4569]],
      [[12654, 12654], "mapped", [4380]],
      [[12655, 12655], "mapped", [4573]],
      [[12656, 12656], "mapped", [4575]],
      [[12657, 12657], "mapped", [4381]],
      [[12658, 12658], "mapped", [4382]],
      [[12659, 12659], "mapped", [4384]],
      [[12660, 12660], "mapped", [4386]],
      [[12661, 12661], "mapped", [4387]],
      [[12662, 12662], "mapped", [4391]],
      [[12663, 12663], "mapped", [4393]],
      [[12664, 12664], "mapped", [4395]],
      [[12665, 12665], "mapped", [4396]],
      [[12666, 12666], "mapped", [4397]],
      [[12667, 12667], "mapped", [4398]],
      [[12668, 12668], "mapped", [4399]],
      [[12669, 12669], "mapped", [4402]],
      [[12670, 12670], "mapped", [4406]],
      [[12671, 12671], "mapped", [4416]],
      [[12672, 12672], "mapped", [4423]],
      [[12673, 12673], "mapped", [4428]],
      [[12674, 12674], "mapped", [4593]],
      [[12675, 12675], "mapped", [4594]],
      [[12676, 12676], "mapped", [4439]],
      [[12677, 12677], "mapped", [4440]],
      [[12678, 12678], "mapped", [4441]],
      [[12679, 12679], "mapped", [4484]],
      [[12680, 12680], "mapped", [4485]],
      [[12681, 12681], "mapped", [4488]],
      [[12682, 12682], "mapped", [4497]],
      [[12683, 12683], "mapped", [4498]],
      [[12684, 12684], "mapped", [4500]],
      [[12685, 12685], "mapped", [4510]],
      [[12686, 12686], "mapped", [4513]],
      [[12687, 12687], "disallowed"],
      [[12688, 12689], "valid", [], "NV8"],
      [[12690, 12690], "mapped", [19968]],
      [[12691, 12691], "mapped", [20108]],
      [[12692, 12692], "mapped", [19977]],
      [[12693, 12693], "mapped", [22235]],
      [[12694, 12694], "mapped", [19978]],
      [[12695, 12695], "mapped", [20013]],
      [[12696, 12696], "mapped", [19979]],
      [[12697, 12697], "mapped", [30002]],
      [[12698, 12698], "mapped", [20057]],
      [[12699, 12699], "mapped", [19993]],
      [[12700, 12700], "mapped", [19969]],
      [[12701, 12701], "mapped", [22825]],
      [[12702, 12702], "mapped", [22320]],
      [[12703, 12703], "mapped", [20154]],
      [[12704, 12727], "valid"],
      [[12728, 12730], "valid"],
      [[12731, 12735], "disallowed"],
      [[12736, 12751], "valid", [], "NV8"],
      [[12752, 12771], "valid", [], "NV8"],
      [[12772, 12783], "disallowed"],
      [[12784, 12799], "valid"],
      [[12800, 12800], "disallowed_STD3_mapped", [40, 4352, 41]],
      [[12801, 12801], "disallowed_STD3_mapped", [40, 4354, 41]],
      [[12802, 12802], "disallowed_STD3_mapped", [40, 4355, 41]],
      [[12803, 12803], "disallowed_STD3_mapped", [40, 4357, 41]],
      [[12804, 12804], "disallowed_STD3_mapped", [40, 4358, 41]],
      [[12805, 12805], "disallowed_STD3_mapped", [40, 4359, 41]],
      [[12806, 12806], "disallowed_STD3_mapped", [40, 4361, 41]],
      [[12807, 12807], "disallowed_STD3_mapped", [40, 4363, 41]],
      [[12808, 12808], "disallowed_STD3_mapped", [40, 4364, 41]],
      [[12809, 12809], "disallowed_STD3_mapped", [40, 4366, 41]],
      [[12810, 12810], "disallowed_STD3_mapped", [40, 4367, 41]],
      [[12811, 12811], "disallowed_STD3_mapped", [40, 4368, 41]],
      [[12812, 12812], "disallowed_STD3_mapped", [40, 4369, 41]],
      [[12813, 12813], "disallowed_STD3_mapped", [40, 4370, 41]],
      [[12814, 12814], "disallowed_STD3_mapped", [40, 44032, 41]],
      [[12815, 12815], "disallowed_STD3_mapped", [40, 45208, 41]],
      [[12816, 12816], "disallowed_STD3_mapped", [40, 45796, 41]],
      [[12817, 12817], "disallowed_STD3_mapped", [40, 46972, 41]],
      [[12818, 12818], "disallowed_STD3_mapped", [40, 47560, 41]],
      [[12819, 12819], "disallowed_STD3_mapped", [40, 48148, 41]],
      [[12820, 12820], "disallowed_STD3_mapped", [40, 49324, 41]],
      [[12821, 12821], "disallowed_STD3_mapped", [40, 50500, 41]],
      [[12822, 12822], "disallowed_STD3_mapped", [40, 51088, 41]],
      [[12823, 12823], "disallowed_STD3_mapped", [40, 52264, 41]],
      [[12824, 12824], "disallowed_STD3_mapped", [40, 52852, 41]],
      [[12825, 12825], "disallowed_STD3_mapped", [40, 53440, 41]],
      [[12826, 12826], "disallowed_STD3_mapped", [40, 54028, 41]],
      [[12827, 12827], "disallowed_STD3_mapped", [40, 54616, 41]],
      [[12828, 12828], "disallowed_STD3_mapped", [40, 51452, 41]],
      [[12829, 12829], "disallowed_STD3_mapped", [40, 50724, 51204, 41]],
      [[12830, 12830], "disallowed_STD3_mapped", [40, 50724, 54980, 41]],
      [[12831, 12831], "disallowed"],
      [[12832, 12832], "disallowed_STD3_mapped", [40, 19968, 41]],
      [[12833, 12833], "disallowed_STD3_mapped", [40, 20108, 41]],
      [[12834, 12834], "disallowed_STD3_mapped", [40, 19977, 41]],
      [[12835, 12835], "disallowed_STD3_mapped", [40, 22235, 41]],
      [[12836, 12836], "disallowed_STD3_mapped", [40, 20116, 41]],
      [[12837, 12837], "disallowed_STD3_mapped", [40, 20845, 41]],
      [[12838, 12838], "disallowed_STD3_mapped", [40, 19971, 41]],
      [[12839, 12839], "disallowed_STD3_mapped", [40, 20843, 41]],
      [[12840, 12840], "disallowed_STD3_mapped", [40, 20061, 41]],
      [[12841, 12841], "disallowed_STD3_mapped", [40, 21313, 41]],
      [[12842, 12842], "disallowed_STD3_mapped", [40, 26376, 41]],
      [[12843, 12843], "disallowed_STD3_mapped", [40, 28779, 41]],
      [[12844, 12844], "disallowed_STD3_mapped", [40, 27700, 41]],
      [[12845, 12845], "disallowed_STD3_mapped", [40, 26408, 41]],
      [[12846, 12846], "disallowed_STD3_mapped", [40, 37329, 41]],
      [[12847, 12847], "disallowed_STD3_mapped", [40, 22303, 41]],
      [[12848, 12848], "disallowed_STD3_mapped", [40, 26085, 41]],
      [[12849, 12849], "disallowed_STD3_mapped", [40, 26666, 41]],
      [[12850, 12850], "disallowed_STD3_mapped", [40, 26377, 41]],
      [[12851, 12851], "disallowed_STD3_mapped", [40, 31038, 41]],
      [[12852, 12852], "disallowed_STD3_mapped", [40, 21517, 41]],
      [[12853, 12853], "disallowed_STD3_mapped", [40, 29305, 41]],
      [[12854, 12854], "disallowed_STD3_mapped", [40, 36001, 41]],
      [[12855, 12855], "disallowed_STD3_mapped", [40, 31069, 41]],
      [[12856, 12856], "disallowed_STD3_mapped", [40, 21172, 41]],
      [[12857, 12857], "disallowed_STD3_mapped", [40, 20195, 41]],
      [[12858, 12858], "disallowed_STD3_mapped", [40, 21628, 41]],
      [[12859, 12859], "disallowed_STD3_mapped", [40, 23398, 41]],
      [[12860, 12860], "disallowed_STD3_mapped", [40, 30435, 41]],
      [[12861, 12861], "disallowed_STD3_mapped", [40, 20225, 41]],
      [[12862, 12862], "disallowed_STD3_mapped", [40, 36039, 41]],
      [[12863, 12863], "disallowed_STD3_mapped", [40, 21332, 41]],
      [[12864, 12864], "disallowed_STD3_mapped", [40, 31085, 41]],
      [[12865, 12865], "disallowed_STD3_mapped", [40, 20241, 41]],
      [[12866, 12866], "disallowed_STD3_mapped", [40, 33258, 41]],
      [[12867, 12867], "disallowed_STD3_mapped", [40, 33267, 41]],
      [[12868, 12868], "mapped", [21839]],
      [[12869, 12869], "mapped", [24188]],
      [[12870, 12870], "mapped", [25991]],
      [[12871, 12871], "mapped", [31631]],
      [[12872, 12879], "valid", [], "NV8"],
      [[12880, 12880], "mapped", [112, 116, 101]],
      [[12881, 12881], "mapped", [50, 49]],
      [[12882, 12882], "mapped", [50, 50]],
      [[12883, 12883], "mapped", [50, 51]],
      [[12884, 12884], "mapped", [50, 52]],
      [[12885, 12885], "mapped", [50, 53]],
      [[12886, 12886], "mapped", [50, 54]],
      [[12887, 12887], "mapped", [50, 55]],
      [[12888, 12888], "mapped", [50, 56]],
      [[12889, 12889], "mapped", [50, 57]],
      [[12890, 12890], "mapped", [51, 48]],
      [[12891, 12891], "mapped", [51, 49]],
      [[12892, 12892], "mapped", [51, 50]],
      [[12893, 12893], "mapped", [51, 51]],
      [[12894, 12894], "mapped", [51, 52]],
      [[12895, 12895], "mapped", [51, 53]],
      [[12896, 12896], "mapped", [4352]],
      [[12897, 12897], "mapped", [4354]],
      [[12898, 12898], "mapped", [4355]],
      [[12899, 12899], "mapped", [4357]],
      [[12900, 12900], "mapped", [4358]],
      [[12901, 12901], "mapped", [4359]],
      [[12902, 12902], "mapped", [4361]],
      [[12903, 12903], "mapped", [4363]],
      [[12904, 12904], "mapped", [4364]],
      [[12905, 12905], "mapped", [4366]],
      [[12906, 12906], "mapped", [4367]],
      [[12907, 12907], "mapped", [4368]],
      [[12908, 12908], "mapped", [4369]],
      [[12909, 12909], "mapped", [4370]],
      [[12910, 12910], "mapped", [44032]],
      [[12911, 12911], "mapped", [45208]],
      [[12912, 12912], "mapped", [45796]],
      [[12913, 12913], "mapped", [46972]],
      [[12914, 12914], "mapped", [47560]],
      [[12915, 12915], "mapped", [48148]],
      [[12916, 12916], "mapped", [49324]],
      [[12917, 12917], "mapped", [50500]],
      [[12918, 12918], "mapped", [51088]],
      [[12919, 12919], "mapped", [52264]],
      [[12920, 12920], "mapped", [52852]],
      [[12921, 12921], "mapped", [53440]],
      [[12922, 12922], "mapped", [54028]],
      [[12923, 12923], "mapped", [54616]],
      [[12924, 12924], "mapped", [52280, 44256]],
      [[12925, 12925], "mapped", [51452, 51032]],
      [[12926, 12926], "mapped", [50864]],
      [[12927, 12927], "valid", [], "NV8"],
      [[12928, 12928], "mapped", [19968]],
      [[12929, 12929], "mapped", [20108]],
      [[12930, 12930], "mapped", [19977]],
      [[12931, 12931], "mapped", [22235]],
      [[12932, 12932], "mapped", [20116]],
      [[12933, 12933], "mapped", [20845]],
      [[12934, 12934], "mapped", [19971]],
      [[12935, 12935], "mapped", [20843]],
      [[12936, 12936], "mapped", [20061]],
      [[12937, 12937], "mapped", [21313]],
      [[12938, 12938], "mapped", [26376]],
      [[12939, 12939], "mapped", [28779]],
      [[12940, 12940], "mapped", [27700]],
      [[12941, 12941], "mapped", [26408]],
      [[12942, 12942], "mapped", [37329]],
      [[12943, 12943], "mapped", [22303]],
      [[12944, 12944], "mapped", [26085]],
      [[12945, 12945], "mapped", [26666]],
      [[12946, 12946], "mapped", [26377]],
      [[12947, 12947], "mapped", [31038]],
      [[12948, 12948], "mapped", [21517]],
      [[12949, 12949], "mapped", [29305]],
      [[12950, 12950], "mapped", [36001]],
      [[12951, 12951], "mapped", [31069]],
      [[12952, 12952], "mapped", [21172]],
      [[12953, 12953], "mapped", [31192]],
      [[12954, 12954], "mapped", [30007]],
      [[12955, 12955], "mapped", [22899]],
      [[12956, 12956], "mapped", [36969]],
      [[12957, 12957], "mapped", [20778]],
      [[12958, 12958], "mapped", [21360]],
      [[12959, 12959], "mapped", [27880]],
      [[12960, 12960], "mapped", [38917]],
      [[12961, 12961], "mapped", [20241]],
      [[12962, 12962], "mapped", [20889]],
      [[12963, 12963], "mapped", [27491]],
      [[12964, 12964], "mapped", [19978]],
      [[12965, 12965], "mapped", [20013]],
      [[12966, 12966], "mapped", [19979]],
      [[12967, 12967], "mapped", [24038]],
      [[12968, 12968], "mapped", [21491]],
      [[12969, 12969], "mapped", [21307]],
      [[12970, 12970], "mapped", [23447]],
      [[12971, 12971], "mapped", [23398]],
      [[12972, 12972], "mapped", [30435]],
      [[12973, 12973], "mapped", [20225]],
      [[12974, 12974], "mapped", [36039]],
      [[12975, 12975], "mapped", [21332]],
      [[12976, 12976], "mapped", [22812]],
      [[12977, 12977], "mapped", [51, 54]],
      [[12978, 12978], "mapped", [51, 55]],
      [[12979, 12979], "mapped", [51, 56]],
      [[12980, 12980], "mapped", [51, 57]],
      [[12981, 12981], "mapped", [52, 48]],
      [[12982, 12982], "mapped", [52, 49]],
      [[12983, 12983], "mapped", [52, 50]],
      [[12984, 12984], "mapped", [52, 51]],
      [[12985, 12985], "mapped", [52, 52]],
      [[12986, 12986], "mapped", [52, 53]],
      [[12987, 12987], "mapped", [52, 54]],
      [[12988, 12988], "mapped", [52, 55]],
      [[12989, 12989], "mapped", [52, 56]],
      [[12990, 12990], "mapped", [52, 57]],
      [[12991, 12991], "mapped", [53, 48]],
      [[12992, 12992], "mapped", [49, 26376]],
      [[12993, 12993], "mapped", [50, 26376]],
      [[12994, 12994], "mapped", [51, 26376]],
      [[12995, 12995], "mapped", [52, 26376]],
      [[12996, 12996], "mapped", [53, 26376]],
      [[12997, 12997], "mapped", [54, 26376]],
      [[12998, 12998], "mapped", [55, 26376]],
      [[12999, 12999], "mapped", [56, 26376]],
      [[13e3, 13e3], "mapped", [57, 26376]],
      [[13001, 13001], "mapped", [49, 48, 26376]],
      [[13002, 13002], "mapped", [49, 49, 26376]],
      [[13003, 13003], "mapped", [49, 50, 26376]],
      [[13004, 13004], "mapped", [104, 103]],
      [[13005, 13005], "mapped", [101, 114, 103]],
      [[13006, 13006], "mapped", [101, 118]],
      [[13007, 13007], "mapped", [108, 116, 100]],
      [[13008, 13008], "mapped", [12450]],
      [[13009, 13009], "mapped", [12452]],
      [[13010, 13010], "mapped", [12454]],
      [[13011, 13011], "mapped", [12456]],
      [[13012, 13012], "mapped", [12458]],
      [[13013, 13013], "mapped", [12459]],
      [[13014, 13014], "mapped", [12461]],
      [[13015, 13015], "mapped", [12463]],
      [[13016, 13016], "mapped", [12465]],
      [[13017, 13017], "mapped", [12467]],
      [[13018, 13018], "mapped", [12469]],
      [[13019, 13019], "mapped", [12471]],
      [[13020, 13020], "mapped", [12473]],
      [[13021, 13021], "mapped", [12475]],
      [[13022, 13022], "mapped", [12477]],
      [[13023, 13023], "mapped", [12479]],
      [[13024, 13024], "mapped", [12481]],
      [[13025, 13025], "mapped", [12484]],
      [[13026, 13026], "mapped", [12486]],
      [[13027, 13027], "mapped", [12488]],
      [[13028, 13028], "mapped", [12490]],
      [[13029, 13029], "mapped", [12491]],
      [[13030, 13030], "mapped", [12492]],
      [[13031, 13031], "mapped", [12493]],
      [[13032, 13032], "mapped", [12494]],
      [[13033, 13033], "mapped", [12495]],
      [[13034, 13034], "mapped", [12498]],
      [[13035, 13035], "mapped", [12501]],
      [[13036, 13036], "mapped", [12504]],
      [[13037, 13037], "mapped", [12507]],
      [[13038, 13038], "mapped", [12510]],
      [[13039, 13039], "mapped", [12511]],
      [[13040, 13040], "mapped", [12512]],
      [[13041, 13041], "mapped", [12513]],
      [[13042, 13042], "mapped", [12514]],
      [[13043, 13043], "mapped", [12516]],
      [[13044, 13044], "mapped", [12518]],
      [[13045, 13045], "mapped", [12520]],
      [[13046, 13046], "mapped", [12521]],
      [[13047, 13047], "mapped", [12522]],
      [[13048, 13048], "mapped", [12523]],
      [[13049, 13049], "mapped", [12524]],
      [[13050, 13050], "mapped", [12525]],
      [[13051, 13051], "mapped", [12527]],
      [[13052, 13052], "mapped", [12528]],
      [[13053, 13053], "mapped", [12529]],
      [[13054, 13054], "mapped", [12530]],
      [[13055, 13055], "disallowed"],
      [[13056, 13056], "mapped", [12450, 12497, 12540, 12488]],
      [[13057, 13057], "mapped", [12450, 12523, 12501, 12449]],
      [[13058, 13058], "mapped", [12450, 12531, 12506, 12450]],
      [[13059, 13059], "mapped", [12450, 12540, 12523]],
      [[13060, 13060], "mapped", [12452, 12491, 12531, 12464]],
      [[13061, 13061], "mapped", [12452, 12531, 12481]],
      [[13062, 13062], "mapped", [12454, 12457, 12531]],
      [[13063, 13063], "mapped", [12456, 12473, 12463, 12540, 12489]],
      [[13064, 13064], "mapped", [12456, 12540, 12459, 12540]],
      [[13065, 13065], "mapped", [12458, 12531, 12473]],
      [[13066, 13066], "mapped", [12458, 12540, 12512]],
      [[13067, 13067], "mapped", [12459, 12452, 12522]],
      [[13068, 13068], "mapped", [12459, 12521, 12483, 12488]],
      [[13069, 13069], "mapped", [12459, 12525, 12522, 12540]],
      [[13070, 13070], "mapped", [12460, 12525, 12531]],
      [[13071, 13071], "mapped", [12460, 12531, 12510]],
      [[13072, 13072], "mapped", [12462, 12460]],
      [[13073, 13073], "mapped", [12462, 12491, 12540]],
      [[13074, 13074], "mapped", [12461, 12517, 12522, 12540]],
      [[13075, 13075], "mapped", [12462, 12523, 12480, 12540]],
      [[13076, 13076], "mapped", [12461, 12525]],
      [[13077, 13077], "mapped", [12461, 12525, 12464, 12521, 12512]],
      [[13078, 13078], "mapped", [12461, 12525, 12513, 12540, 12488, 12523]],
      [[13079, 13079], "mapped", [12461, 12525, 12527, 12483, 12488]],
      [[13080, 13080], "mapped", [12464, 12521, 12512]],
      [[13081, 13081], "mapped", [12464, 12521, 12512, 12488, 12531]],
      [[13082, 13082], "mapped", [12463, 12523, 12476, 12452, 12525]],
      [[13083, 13083], "mapped", [12463, 12525, 12540, 12493]],
      [[13084, 13084], "mapped", [12465, 12540, 12473]],
      [[13085, 13085], "mapped", [12467, 12523, 12490]],
      [[13086, 13086], "mapped", [12467, 12540, 12509]],
      [[13087, 13087], "mapped", [12469, 12452, 12463, 12523]],
      [[13088, 13088], "mapped", [12469, 12531, 12481, 12540, 12512]],
      [[13089, 13089], "mapped", [12471, 12522, 12531, 12464]],
      [[13090, 13090], "mapped", [12475, 12531, 12481]],
      [[13091, 13091], "mapped", [12475, 12531, 12488]],
      [[13092, 13092], "mapped", [12480, 12540, 12473]],
      [[13093, 13093], "mapped", [12487, 12471]],
      [[13094, 13094], "mapped", [12489, 12523]],
      [[13095, 13095], "mapped", [12488, 12531]],
      [[13096, 13096], "mapped", [12490, 12494]],
      [[13097, 13097], "mapped", [12494, 12483, 12488]],
      [[13098, 13098], "mapped", [12495, 12452, 12484]],
      [[13099, 13099], "mapped", [12497, 12540, 12475, 12531, 12488]],
      [[13100, 13100], "mapped", [12497, 12540, 12484]],
      [[13101, 13101], "mapped", [12496, 12540, 12524, 12523]],
      [[13102, 13102], "mapped", [12500, 12450, 12473, 12488, 12523]],
      [[13103, 13103], "mapped", [12500, 12463, 12523]],
      [[13104, 13104], "mapped", [12500, 12467]],
      [[13105, 13105], "mapped", [12499, 12523]],
      [[13106, 13106], "mapped", [12501, 12449, 12521, 12483, 12489]],
      [[13107, 13107], "mapped", [12501, 12451, 12540, 12488]],
      [[13108, 13108], "mapped", [12502, 12483, 12471, 12455, 12523]],
      [[13109, 13109], "mapped", [12501, 12521, 12531]],
      [[13110, 13110], "mapped", [12504, 12463, 12479, 12540, 12523]],
      [[13111, 13111], "mapped", [12506, 12477]],
      [[13112, 13112], "mapped", [12506, 12491, 12498]],
      [[13113, 13113], "mapped", [12504, 12523, 12484]],
      [[13114, 13114], "mapped", [12506, 12531, 12473]],
      [[13115, 13115], "mapped", [12506, 12540, 12472]],
      [[13116, 13116], "mapped", [12505, 12540, 12479]],
      [[13117, 13117], "mapped", [12509, 12452, 12531, 12488]],
      [[13118, 13118], "mapped", [12508, 12523, 12488]],
      [[13119, 13119], "mapped", [12507, 12531]],
      [[13120, 13120], "mapped", [12509, 12531, 12489]],
      [[13121, 13121], "mapped", [12507, 12540, 12523]],
      [[13122, 13122], "mapped", [12507, 12540, 12531]],
      [[13123, 13123], "mapped", [12510, 12452, 12463, 12525]],
      [[13124, 13124], "mapped", [12510, 12452, 12523]],
      [[13125, 13125], "mapped", [12510, 12483, 12495]],
      [[13126, 13126], "mapped", [12510, 12523, 12463]],
      [[13127, 13127], "mapped", [12510, 12531, 12471, 12519, 12531]],
      [[13128, 13128], "mapped", [12511, 12463, 12525, 12531]],
      [[13129, 13129], "mapped", [12511, 12522]],
      [[13130, 13130], "mapped", [12511, 12522, 12496, 12540, 12523]],
      [[13131, 13131], "mapped", [12513, 12460]],
      [[13132, 13132], "mapped", [12513, 12460, 12488, 12531]],
      [[13133, 13133], "mapped", [12513, 12540, 12488, 12523]],
      [[13134, 13134], "mapped", [12516, 12540, 12489]],
      [[13135, 13135], "mapped", [12516, 12540, 12523]],
      [[13136, 13136], "mapped", [12518, 12450, 12531]],
      [[13137, 13137], "mapped", [12522, 12483, 12488, 12523]],
      [[13138, 13138], "mapped", [12522, 12521]],
      [[13139, 13139], "mapped", [12523, 12500, 12540]],
      [[13140, 13140], "mapped", [12523, 12540, 12502, 12523]],
      [[13141, 13141], "mapped", [12524, 12512]],
      [[13142, 13142], "mapped", [12524, 12531, 12488, 12466, 12531]],
      [[13143, 13143], "mapped", [12527, 12483, 12488]],
      [[13144, 13144], "mapped", [48, 28857]],
      [[13145, 13145], "mapped", [49, 28857]],
      [[13146, 13146], "mapped", [50, 28857]],
      [[13147, 13147], "mapped", [51, 28857]],
      [[13148, 13148], "mapped", [52, 28857]],
      [[13149, 13149], "mapped", [53, 28857]],
      [[13150, 13150], "mapped", [54, 28857]],
      [[13151, 13151], "mapped", [55, 28857]],
      [[13152, 13152], "mapped", [56, 28857]],
      [[13153, 13153], "mapped", [57, 28857]],
      [[13154, 13154], "mapped", [49, 48, 28857]],
      [[13155, 13155], "mapped", [49, 49, 28857]],
      [[13156, 13156], "mapped", [49, 50, 28857]],
      [[13157, 13157], "mapped", [49, 51, 28857]],
      [[13158, 13158], "mapped", [49, 52, 28857]],
      [[13159, 13159], "mapped", [49, 53, 28857]],
      [[13160, 13160], "mapped", [49, 54, 28857]],
      [[13161, 13161], "mapped", [49, 55, 28857]],
      [[13162, 13162], "mapped", [49, 56, 28857]],
      [[13163, 13163], "mapped", [49, 57, 28857]],
      [[13164, 13164], "mapped", [50, 48, 28857]],
      [[13165, 13165], "mapped", [50, 49, 28857]],
      [[13166, 13166], "mapped", [50, 50, 28857]],
      [[13167, 13167], "mapped", [50, 51, 28857]],
      [[13168, 13168], "mapped", [50, 52, 28857]],
      [[13169, 13169], "mapped", [104, 112, 97]],
      [[13170, 13170], "mapped", [100, 97]],
      [[13171, 13171], "mapped", [97, 117]],
      [[13172, 13172], "mapped", [98, 97, 114]],
      [[13173, 13173], "mapped", [111, 118]],
      [[13174, 13174], "mapped", [112, 99]],
      [[13175, 13175], "mapped", [100, 109]],
      [[13176, 13176], "mapped", [100, 109, 50]],
      [[13177, 13177], "mapped", [100, 109, 51]],
      [[13178, 13178], "mapped", [105, 117]],
      [[13179, 13179], "mapped", [24179, 25104]],
      [[13180, 13180], "mapped", [26157, 21644]],
      [[13181, 13181], "mapped", [22823, 27491]],
      [[13182, 13182], "mapped", [26126, 27835]],
      [[13183, 13183], "mapped", [26666, 24335, 20250, 31038]],
      [[13184, 13184], "mapped", [112, 97]],
      [[13185, 13185], "mapped", [110, 97]],
      [[13186, 13186], "mapped", [956, 97]],
      [[13187, 13187], "mapped", [109, 97]],
      [[13188, 13188], "mapped", [107, 97]],
      [[13189, 13189], "mapped", [107, 98]],
      [[13190, 13190], "mapped", [109, 98]],
      [[13191, 13191], "mapped", [103, 98]],
      [[13192, 13192], "mapped", [99, 97, 108]],
      [[13193, 13193], "mapped", [107, 99, 97, 108]],
      [[13194, 13194], "mapped", [112, 102]],
      [[13195, 13195], "mapped", [110, 102]],
      [[13196, 13196], "mapped", [956, 102]],
      [[13197, 13197], "mapped", [956, 103]],
      [[13198, 13198], "mapped", [109, 103]],
      [[13199, 13199], "mapped", [107, 103]],
      [[13200, 13200], "mapped", [104, 122]],
      [[13201, 13201], "mapped", [107, 104, 122]],
      [[13202, 13202], "mapped", [109, 104, 122]],
      [[13203, 13203], "mapped", [103, 104, 122]],
      [[13204, 13204], "mapped", [116, 104, 122]],
      [[13205, 13205], "mapped", [956, 108]],
      [[13206, 13206], "mapped", [109, 108]],
      [[13207, 13207], "mapped", [100, 108]],
      [[13208, 13208], "mapped", [107, 108]],
      [[13209, 13209], "mapped", [102, 109]],
      [[13210, 13210], "mapped", [110, 109]],
      [[13211, 13211], "mapped", [956, 109]],
      [[13212, 13212], "mapped", [109, 109]],
      [[13213, 13213], "mapped", [99, 109]],
      [[13214, 13214], "mapped", [107, 109]],
      [[13215, 13215], "mapped", [109, 109, 50]],
      [[13216, 13216], "mapped", [99, 109, 50]],
      [[13217, 13217], "mapped", [109, 50]],
      [[13218, 13218], "mapped", [107, 109, 50]],
      [[13219, 13219], "mapped", [109, 109, 51]],
      [[13220, 13220], "mapped", [99, 109, 51]],
      [[13221, 13221], "mapped", [109, 51]],
      [[13222, 13222], "mapped", [107, 109, 51]],
      [[13223, 13223], "mapped", [109, 8725, 115]],
      [[13224, 13224], "mapped", [109, 8725, 115, 50]],
      [[13225, 13225], "mapped", [112, 97]],
      [[13226, 13226], "mapped", [107, 112, 97]],
      [[13227, 13227], "mapped", [109, 112, 97]],
      [[13228, 13228], "mapped", [103, 112, 97]],
      [[13229, 13229], "mapped", [114, 97, 100]],
      [[13230, 13230], "mapped", [114, 97, 100, 8725, 115]],
      [[13231, 13231], "mapped", [114, 97, 100, 8725, 115, 50]],
      [[13232, 13232], "mapped", [112, 115]],
      [[13233, 13233], "mapped", [110, 115]],
      [[13234, 13234], "mapped", [956, 115]],
      [[13235, 13235], "mapped", [109, 115]],
      [[13236, 13236], "mapped", [112, 118]],
      [[13237, 13237], "mapped", [110, 118]],
      [[13238, 13238], "mapped", [956, 118]],
      [[13239, 13239], "mapped", [109, 118]],
      [[13240, 13240], "mapped", [107, 118]],
      [[13241, 13241], "mapped", [109, 118]],
      [[13242, 13242], "mapped", [112, 119]],
      [[13243, 13243], "mapped", [110, 119]],
      [[13244, 13244], "mapped", [956, 119]],
      [[13245, 13245], "mapped", [109, 119]],
      [[13246, 13246], "mapped", [107, 119]],
      [[13247, 13247], "mapped", [109, 119]],
      [[13248, 13248], "mapped", [107, 969]],
      [[13249, 13249], "mapped", [109, 969]],
      [[13250, 13250], "disallowed"],
      [[13251, 13251], "mapped", [98, 113]],
      [[13252, 13252], "mapped", [99, 99]],
      [[13253, 13253], "mapped", [99, 100]],
      [[13254, 13254], "mapped", [99, 8725, 107, 103]],
      [[13255, 13255], "disallowed"],
      [[13256, 13256], "mapped", [100, 98]],
      [[13257, 13257], "mapped", [103, 121]],
      [[13258, 13258], "mapped", [104, 97]],
      [[13259, 13259], "mapped", [104, 112]],
      [[13260, 13260], "mapped", [105, 110]],
      [[13261, 13261], "mapped", [107, 107]],
      [[13262, 13262], "mapped", [107, 109]],
      [[13263, 13263], "mapped", [107, 116]],
      [[13264, 13264], "mapped", [108, 109]],
      [[13265, 13265], "mapped", [108, 110]],
      [[13266, 13266], "mapped", [108, 111, 103]],
      [[13267, 13267], "mapped", [108, 120]],
      [[13268, 13268], "mapped", [109, 98]],
      [[13269, 13269], "mapped", [109, 105, 108]],
      [[13270, 13270], "mapped", [109, 111, 108]],
      [[13271, 13271], "mapped", [112, 104]],
      [[13272, 13272], "disallowed"],
      [[13273, 13273], "mapped", [112, 112, 109]],
      [[13274, 13274], "mapped", [112, 114]],
      [[13275, 13275], "mapped", [115, 114]],
      [[13276, 13276], "mapped", [115, 118]],
      [[13277, 13277], "mapped", [119, 98]],
      [[13278, 13278], "mapped", [118, 8725, 109]],
      [[13279, 13279], "mapped", [97, 8725, 109]],
      [[13280, 13280], "mapped", [49, 26085]],
      [[13281, 13281], "mapped", [50, 26085]],
      [[13282, 13282], "mapped", [51, 26085]],
      [[13283, 13283], "mapped", [52, 26085]],
      [[13284, 13284], "mapped", [53, 26085]],
      [[13285, 13285], "mapped", [54, 26085]],
      [[13286, 13286], "mapped", [55, 26085]],
      [[13287, 13287], "mapped", [56, 26085]],
      [[13288, 13288], "mapped", [57, 26085]],
      [[13289, 13289], "mapped", [49, 48, 26085]],
      [[13290, 13290], "mapped", [49, 49, 26085]],
      [[13291, 13291], "mapped", [49, 50, 26085]],
      [[13292, 13292], "mapped", [49, 51, 26085]],
      [[13293, 13293], "mapped", [49, 52, 26085]],
      [[13294, 13294], "mapped", [49, 53, 26085]],
      [[13295, 13295], "mapped", [49, 54, 26085]],
      [[13296, 13296], "mapped", [49, 55, 26085]],
      [[13297, 13297], "mapped", [49, 56, 26085]],
      [[13298, 13298], "mapped", [49, 57, 26085]],
      [[13299, 13299], "mapped", [50, 48, 26085]],
      [[13300, 13300], "mapped", [50, 49, 26085]],
      [[13301, 13301], "mapped", [50, 50, 26085]],
      [[13302, 13302], "mapped", [50, 51, 26085]],
      [[13303, 13303], "mapped", [50, 52, 26085]],
      [[13304, 13304], "mapped", [50, 53, 26085]],
      [[13305, 13305], "mapped", [50, 54, 26085]],
      [[13306, 13306], "mapped", [50, 55, 26085]],
      [[13307, 13307], "mapped", [50, 56, 26085]],
      [[13308, 13308], "mapped", [50, 57, 26085]],
      [[13309, 13309], "mapped", [51, 48, 26085]],
      [[13310, 13310], "mapped", [51, 49, 26085]],
      [[13311, 13311], "mapped", [103, 97, 108]],
      [[13312, 19893], "valid"],
      [[19894, 19903], "disallowed"],
      [[19904, 19967], "valid", [], "NV8"],
      [[19968, 40869], "valid"],
      [[40870, 40891], "valid"],
      [[40892, 40899], "valid"],
      [[40900, 40907], "valid"],
      [[40908, 40908], "valid"],
      [[40909, 40917], "valid"],
      [[40918, 40959], "disallowed"],
      [[40960, 42124], "valid"],
      [[42125, 42127], "disallowed"],
      [[42128, 42145], "valid", [], "NV8"],
      [[42146, 42147], "valid", [], "NV8"],
      [[42148, 42163], "valid", [], "NV8"],
      [[42164, 42164], "valid", [], "NV8"],
      [[42165, 42176], "valid", [], "NV8"],
      [[42177, 42177], "valid", [], "NV8"],
      [[42178, 42180], "valid", [], "NV8"],
      [[42181, 42181], "valid", [], "NV8"],
      [[42182, 42182], "valid", [], "NV8"],
      [[42183, 42191], "disallowed"],
      [[42192, 42237], "valid"],
      [[42238, 42239], "valid", [], "NV8"],
      [[42240, 42508], "valid"],
      [[42509, 42511], "valid", [], "NV8"],
      [[42512, 42539], "valid"],
      [[42540, 42559], "disallowed"],
      [[42560, 42560], "mapped", [42561]],
      [[42561, 42561], "valid"],
      [[42562, 42562], "mapped", [42563]],
      [[42563, 42563], "valid"],
      [[42564, 42564], "mapped", [42565]],
      [[42565, 42565], "valid"],
      [[42566, 42566], "mapped", [42567]],
      [[42567, 42567], "valid"],
      [[42568, 42568], "mapped", [42569]],
      [[42569, 42569], "valid"],
      [[42570, 42570], "mapped", [42571]],
      [[42571, 42571], "valid"],
      [[42572, 42572], "mapped", [42573]],
      [[42573, 42573], "valid"],
      [[42574, 42574], "mapped", [42575]],
      [[42575, 42575], "valid"],
      [[42576, 42576], "mapped", [42577]],
      [[42577, 42577], "valid"],
      [[42578, 42578], "mapped", [42579]],
      [[42579, 42579], "valid"],
      [[42580, 42580], "mapped", [42581]],
      [[42581, 42581], "valid"],
      [[42582, 42582], "mapped", [42583]],
      [[42583, 42583], "valid"],
      [[42584, 42584], "mapped", [42585]],
      [[42585, 42585], "valid"],
      [[42586, 42586], "mapped", [42587]],
      [[42587, 42587], "valid"],
      [[42588, 42588], "mapped", [42589]],
      [[42589, 42589], "valid"],
      [[42590, 42590], "mapped", [42591]],
      [[42591, 42591], "valid"],
      [[42592, 42592], "mapped", [42593]],
      [[42593, 42593], "valid"],
      [[42594, 42594], "mapped", [42595]],
      [[42595, 42595], "valid"],
      [[42596, 42596], "mapped", [42597]],
      [[42597, 42597], "valid"],
      [[42598, 42598], "mapped", [42599]],
      [[42599, 42599], "valid"],
      [[42600, 42600], "mapped", [42601]],
      [[42601, 42601], "valid"],
      [[42602, 42602], "mapped", [42603]],
      [[42603, 42603], "valid"],
      [[42604, 42604], "mapped", [42605]],
      [[42605, 42607], "valid"],
      [[42608, 42611], "valid", [], "NV8"],
      [[42612, 42619], "valid"],
      [[42620, 42621], "valid"],
      [[42622, 42622], "valid", [], "NV8"],
      [[42623, 42623], "valid"],
      [[42624, 42624], "mapped", [42625]],
      [[42625, 42625], "valid"],
      [[42626, 42626], "mapped", [42627]],
      [[42627, 42627], "valid"],
      [[42628, 42628], "mapped", [42629]],
      [[42629, 42629], "valid"],
      [[42630, 42630], "mapped", [42631]],
      [[42631, 42631], "valid"],
      [[42632, 42632], "mapped", [42633]],
      [[42633, 42633], "valid"],
      [[42634, 42634], "mapped", [42635]],
      [[42635, 42635], "valid"],
      [[42636, 42636], "mapped", [42637]],
      [[42637, 42637], "valid"],
      [[42638, 42638], "mapped", [42639]],
      [[42639, 42639], "valid"],
      [[42640, 42640], "mapped", [42641]],
      [[42641, 42641], "valid"],
      [[42642, 42642], "mapped", [42643]],
      [[42643, 42643], "valid"],
      [[42644, 42644], "mapped", [42645]],
      [[42645, 42645], "valid"],
      [[42646, 42646], "mapped", [42647]],
      [[42647, 42647], "valid"],
      [[42648, 42648], "mapped", [42649]],
      [[42649, 42649], "valid"],
      [[42650, 42650], "mapped", [42651]],
      [[42651, 42651], "valid"],
      [[42652, 42652], "mapped", [1098]],
      [[42653, 42653], "mapped", [1100]],
      [[42654, 42654], "valid"],
      [[42655, 42655], "valid"],
      [[42656, 42725], "valid"],
      [[42726, 42735], "valid", [], "NV8"],
      [[42736, 42737], "valid"],
      [[42738, 42743], "valid", [], "NV8"],
      [[42744, 42751], "disallowed"],
      [[42752, 42774], "valid", [], "NV8"],
      [[42775, 42778], "valid"],
      [[42779, 42783], "valid"],
      [[42784, 42785], "valid", [], "NV8"],
      [[42786, 42786], "mapped", [42787]],
      [[42787, 42787], "valid"],
      [[42788, 42788], "mapped", [42789]],
      [[42789, 42789], "valid"],
      [[42790, 42790], "mapped", [42791]],
      [[42791, 42791], "valid"],
      [[42792, 42792], "mapped", [42793]],
      [[42793, 42793], "valid"],
      [[42794, 42794], "mapped", [42795]],
      [[42795, 42795], "valid"],
      [[42796, 42796], "mapped", [42797]],
      [[42797, 42797], "valid"],
      [[42798, 42798], "mapped", [42799]],
      [[42799, 42801], "valid"],
      [[42802, 42802], "mapped", [42803]],
      [[42803, 42803], "valid"],
      [[42804, 42804], "mapped", [42805]],
      [[42805, 42805], "valid"],
      [[42806, 42806], "mapped", [42807]],
      [[42807, 42807], "valid"],
      [[42808, 42808], "mapped", [42809]],
      [[42809, 42809], "valid"],
      [[42810, 42810], "mapped", [42811]],
      [[42811, 42811], "valid"],
      [[42812, 42812], "mapped", [42813]],
      [[42813, 42813], "valid"],
      [[42814, 42814], "mapped", [42815]],
      [[42815, 42815], "valid"],
      [[42816, 42816], "mapped", [42817]],
      [[42817, 42817], "valid"],
      [[42818, 42818], "mapped", [42819]],
      [[42819, 42819], "valid"],
      [[42820, 42820], "mapped", [42821]],
      [[42821, 42821], "valid"],
      [[42822, 42822], "mapped", [42823]],
      [[42823, 42823], "valid"],
      [[42824, 42824], "mapped", [42825]],
      [[42825, 42825], "valid"],
      [[42826, 42826], "mapped", [42827]],
      [[42827, 42827], "valid"],
      [[42828, 42828], "mapped", [42829]],
      [[42829, 42829], "valid"],
      [[42830, 42830], "mapped", [42831]],
      [[42831, 42831], "valid"],
      [[42832, 42832], "mapped", [42833]],
      [[42833, 42833], "valid"],
      [[42834, 42834], "mapped", [42835]],
      [[42835, 42835], "valid"],
      [[42836, 42836], "mapped", [42837]],
      [[42837, 42837], "valid"],
      [[42838, 42838], "mapped", [42839]],
      [[42839, 42839], "valid"],
      [[42840, 42840], "mapped", [42841]],
      [[42841, 42841], "valid"],
      [[42842, 42842], "mapped", [42843]],
      [[42843, 42843], "valid"],
      [[42844, 42844], "mapped", [42845]],
      [[42845, 42845], "valid"],
      [[42846, 42846], "mapped", [42847]],
      [[42847, 42847], "valid"],
      [[42848, 42848], "mapped", [42849]],
      [[42849, 42849], "valid"],
      [[42850, 42850], "mapped", [42851]],
      [[42851, 42851], "valid"],
      [[42852, 42852], "mapped", [42853]],
      [[42853, 42853], "valid"],
      [[42854, 42854], "mapped", [42855]],
      [[42855, 42855], "valid"],
      [[42856, 42856], "mapped", [42857]],
      [[42857, 42857], "valid"],
      [[42858, 42858], "mapped", [42859]],
      [[42859, 42859], "valid"],
      [[42860, 42860], "mapped", [42861]],
      [[42861, 42861], "valid"],
      [[42862, 42862], "mapped", [42863]],
      [[42863, 42863], "valid"],
      [[42864, 42864], "mapped", [42863]],
      [[42865, 42872], "valid"],
      [[42873, 42873], "mapped", [42874]],
      [[42874, 42874], "valid"],
      [[42875, 42875], "mapped", [42876]],
      [[42876, 42876], "valid"],
      [[42877, 42877], "mapped", [7545]],
      [[42878, 42878], "mapped", [42879]],
      [[42879, 42879], "valid"],
      [[42880, 42880], "mapped", [42881]],
      [[42881, 42881], "valid"],
      [[42882, 42882], "mapped", [42883]],
      [[42883, 42883], "valid"],
      [[42884, 42884], "mapped", [42885]],
      [[42885, 42885], "valid"],
      [[42886, 42886], "mapped", [42887]],
      [[42887, 42888], "valid"],
      [[42889, 42890], "valid", [], "NV8"],
      [[42891, 42891], "mapped", [42892]],
      [[42892, 42892], "valid"],
      [[42893, 42893], "mapped", [613]],
      [[42894, 42894], "valid"],
      [[42895, 42895], "valid"],
      [[42896, 42896], "mapped", [42897]],
      [[42897, 42897], "valid"],
      [[42898, 42898], "mapped", [42899]],
      [[42899, 42899], "valid"],
      [[42900, 42901], "valid"],
      [[42902, 42902], "mapped", [42903]],
      [[42903, 42903], "valid"],
      [[42904, 42904], "mapped", [42905]],
      [[42905, 42905], "valid"],
      [[42906, 42906], "mapped", [42907]],
      [[42907, 42907], "valid"],
      [[42908, 42908], "mapped", [42909]],
      [[42909, 42909], "valid"],
      [[42910, 42910], "mapped", [42911]],
      [[42911, 42911], "valid"],
      [[42912, 42912], "mapped", [42913]],
      [[42913, 42913], "valid"],
      [[42914, 42914], "mapped", [42915]],
      [[42915, 42915], "valid"],
      [[42916, 42916], "mapped", [42917]],
      [[42917, 42917], "valid"],
      [[42918, 42918], "mapped", [42919]],
      [[42919, 42919], "valid"],
      [[42920, 42920], "mapped", [42921]],
      [[42921, 42921], "valid"],
      [[42922, 42922], "mapped", [614]],
      [[42923, 42923], "mapped", [604]],
      [[42924, 42924], "mapped", [609]],
      [[42925, 42925], "mapped", [620]],
      [[42926, 42927], "disallowed"],
      [[42928, 42928], "mapped", [670]],
      [[42929, 42929], "mapped", [647]],
      [[42930, 42930], "mapped", [669]],
      [[42931, 42931], "mapped", [43859]],
      [[42932, 42932], "mapped", [42933]],
      [[42933, 42933], "valid"],
      [[42934, 42934], "mapped", [42935]],
      [[42935, 42935], "valid"],
      [[42936, 42998], "disallowed"],
      [[42999, 42999], "valid"],
      [[43e3, 43e3], "mapped", [295]],
      [[43001, 43001], "mapped", [339]],
      [[43002, 43002], "valid"],
      [[43003, 43007], "valid"],
      [[43008, 43047], "valid"],
      [[43048, 43051], "valid", [], "NV8"],
      [[43052, 43055], "disallowed"],
      [[43056, 43065], "valid", [], "NV8"],
      [[43066, 43071], "disallowed"],
      [[43072, 43123], "valid"],
      [[43124, 43127], "valid", [], "NV8"],
      [[43128, 43135], "disallowed"],
      [[43136, 43204], "valid"],
      [[43205, 43213], "disallowed"],
      [[43214, 43215], "valid", [], "NV8"],
      [[43216, 43225], "valid"],
      [[43226, 43231], "disallowed"],
      [[43232, 43255], "valid"],
      [[43256, 43258], "valid", [], "NV8"],
      [[43259, 43259], "valid"],
      [[43260, 43260], "valid", [], "NV8"],
      [[43261, 43261], "valid"],
      [[43262, 43263], "disallowed"],
      [[43264, 43309], "valid"],
      [[43310, 43311], "valid", [], "NV8"],
      [[43312, 43347], "valid"],
      [[43348, 43358], "disallowed"],
      [[43359, 43359], "valid", [], "NV8"],
      [[43360, 43388], "valid", [], "NV8"],
      [[43389, 43391], "disallowed"],
      [[43392, 43456], "valid"],
      [[43457, 43469], "valid", [], "NV8"],
      [[43470, 43470], "disallowed"],
      [[43471, 43481], "valid"],
      [[43482, 43485], "disallowed"],
      [[43486, 43487], "valid", [], "NV8"],
      [[43488, 43518], "valid"],
      [[43519, 43519], "disallowed"],
      [[43520, 43574], "valid"],
      [[43575, 43583], "disallowed"],
      [[43584, 43597], "valid"],
      [[43598, 43599], "disallowed"],
      [[43600, 43609], "valid"],
      [[43610, 43611], "disallowed"],
      [[43612, 43615], "valid", [], "NV8"],
      [[43616, 43638], "valid"],
      [[43639, 43641], "valid", [], "NV8"],
      [[43642, 43643], "valid"],
      [[43644, 43647], "valid"],
      [[43648, 43714], "valid"],
      [[43715, 43738], "disallowed"],
      [[43739, 43741], "valid"],
      [[43742, 43743], "valid", [], "NV8"],
      [[43744, 43759], "valid"],
      [[43760, 43761], "valid", [], "NV8"],
      [[43762, 43766], "valid"],
      [[43767, 43776], "disallowed"],
      [[43777, 43782], "valid"],
      [[43783, 43784], "disallowed"],
      [[43785, 43790], "valid"],
      [[43791, 43792], "disallowed"],
      [[43793, 43798], "valid"],
      [[43799, 43807], "disallowed"],
      [[43808, 43814], "valid"],
      [[43815, 43815], "disallowed"],
      [[43816, 43822], "valid"],
      [[43823, 43823], "disallowed"],
      [[43824, 43866], "valid"],
      [[43867, 43867], "valid", [], "NV8"],
      [[43868, 43868], "mapped", [42791]],
      [[43869, 43869], "mapped", [43831]],
      [[43870, 43870], "mapped", [619]],
      [[43871, 43871], "mapped", [43858]],
      [[43872, 43875], "valid"],
      [[43876, 43877], "valid"],
      [[43878, 43887], "disallowed"],
      [[43888, 43888], "mapped", [5024]],
      [[43889, 43889], "mapped", [5025]],
      [[43890, 43890], "mapped", [5026]],
      [[43891, 43891], "mapped", [5027]],
      [[43892, 43892], "mapped", [5028]],
      [[43893, 43893], "mapped", [5029]],
      [[43894, 43894], "mapped", [5030]],
      [[43895, 43895], "mapped", [5031]],
      [[43896, 43896], "mapped", [5032]],
      [[43897, 43897], "mapped", [5033]],
      [[43898, 43898], "mapped", [5034]],
      [[43899, 43899], "mapped", [5035]],
      [[43900, 43900], "mapped", [5036]],
      [[43901, 43901], "mapped", [5037]],
      [[43902, 43902], "mapped", [5038]],
      [[43903, 43903], "mapped", [5039]],
      [[43904, 43904], "mapped", [5040]],
      [[43905, 43905], "mapped", [5041]],
      [[43906, 43906], "mapped", [5042]],
      [[43907, 43907], "mapped", [5043]],
      [[43908, 43908], "mapped", [5044]],
      [[43909, 43909], "mapped", [5045]],
      [[43910, 43910], "mapped", [5046]],
      [[43911, 43911], "mapped", [5047]],
      [[43912, 43912], "mapped", [5048]],
      [[43913, 43913], "mapped", [5049]],
      [[43914, 43914], "mapped", [5050]],
      [[43915, 43915], "mapped", [5051]],
      [[43916, 43916], "mapped", [5052]],
      [[43917, 43917], "mapped", [5053]],
      [[43918, 43918], "mapped", [5054]],
      [[43919, 43919], "mapped", [5055]],
      [[43920, 43920], "mapped", [5056]],
      [[43921, 43921], "mapped", [5057]],
      [[43922, 43922], "mapped", [5058]],
      [[43923, 43923], "mapped", [5059]],
      [[43924, 43924], "mapped", [5060]],
      [[43925, 43925], "mapped", [5061]],
      [[43926, 43926], "mapped", [5062]],
      [[43927, 43927], "mapped", [5063]],
      [[43928, 43928], "mapped", [5064]],
      [[43929, 43929], "mapped", [5065]],
      [[43930, 43930], "mapped", [5066]],
      [[43931, 43931], "mapped", [5067]],
      [[43932, 43932], "mapped", [5068]],
      [[43933, 43933], "mapped", [5069]],
      [[43934, 43934], "mapped", [5070]],
      [[43935, 43935], "mapped", [5071]],
      [[43936, 43936], "mapped", [5072]],
      [[43937, 43937], "mapped", [5073]],
      [[43938, 43938], "mapped", [5074]],
      [[43939, 43939], "mapped", [5075]],
      [[43940, 43940], "mapped", [5076]],
      [[43941, 43941], "mapped", [5077]],
      [[43942, 43942], "mapped", [5078]],
      [[43943, 43943], "mapped", [5079]],
      [[43944, 43944], "mapped", [5080]],
      [[43945, 43945], "mapped", [5081]],
      [[43946, 43946], "mapped", [5082]],
      [[43947, 43947], "mapped", [5083]],
      [[43948, 43948], "mapped", [5084]],
      [[43949, 43949], "mapped", [5085]],
      [[43950, 43950], "mapped", [5086]],
      [[43951, 43951], "mapped", [5087]],
      [[43952, 43952], "mapped", [5088]],
      [[43953, 43953], "mapped", [5089]],
      [[43954, 43954], "mapped", [5090]],
      [[43955, 43955], "mapped", [5091]],
      [[43956, 43956], "mapped", [5092]],
      [[43957, 43957], "mapped", [5093]],
      [[43958, 43958], "mapped", [5094]],
      [[43959, 43959], "mapped", [5095]],
      [[43960, 43960], "mapped", [5096]],
      [[43961, 43961], "mapped", [5097]],
      [[43962, 43962], "mapped", [5098]],
      [[43963, 43963], "mapped", [5099]],
      [[43964, 43964], "mapped", [5100]],
      [[43965, 43965], "mapped", [5101]],
      [[43966, 43966], "mapped", [5102]],
      [[43967, 43967], "mapped", [5103]],
      [[43968, 44010], "valid"],
      [[44011, 44011], "valid", [], "NV8"],
      [[44012, 44013], "valid"],
      [[44014, 44015], "disallowed"],
      [[44016, 44025], "valid"],
      [[44026, 44031], "disallowed"],
      [[44032, 55203], "valid"],
      [[55204, 55215], "disallowed"],
      [[55216, 55238], "valid", [], "NV8"],
      [[55239, 55242], "disallowed"],
      [[55243, 55291], "valid", [], "NV8"],
      [[55292, 55295], "disallowed"],
      [[55296, 57343], "disallowed"],
      [[57344, 63743], "disallowed"],
      [[63744, 63744], "mapped", [35912]],
      [[63745, 63745], "mapped", [26356]],
      [[63746, 63746], "mapped", [36554]],
      [[63747, 63747], "mapped", [36040]],
      [[63748, 63748], "mapped", [28369]],
      [[63749, 63749], "mapped", [20018]],
      [[63750, 63750], "mapped", [21477]],
      [[63751, 63752], "mapped", [40860]],
      [[63753, 63753], "mapped", [22865]],
      [[63754, 63754], "mapped", [37329]],
      [[63755, 63755], "mapped", [21895]],
      [[63756, 63756], "mapped", [22856]],
      [[63757, 63757], "mapped", [25078]],
      [[63758, 63758], "mapped", [30313]],
      [[63759, 63759], "mapped", [32645]],
      [[63760, 63760], "mapped", [34367]],
      [[63761, 63761], "mapped", [34746]],
      [[63762, 63762], "mapped", [35064]],
      [[63763, 63763], "mapped", [37007]],
      [[63764, 63764], "mapped", [27138]],
      [[63765, 63765], "mapped", [27931]],
      [[63766, 63766], "mapped", [28889]],
      [[63767, 63767], "mapped", [29662]],
      [[63768, 63768], "mapped", [33853]],
      [[63769, 63769], "mapped", [37226]],
      [[63770, 63770], "mapped", [39409]],
      [[63771, 63771], "mapped", [20098]],
      [[63772, 63772], "mapped", [21365]],
      [[63773, 63773], "mapped", [27396]],
      [[63774, 63774], "mapped", [29211]],
      [[63775, 63775], "mapped", [34349]],
      [[63776, 63776], "mapped", [40478]],
      [[63777, 63777], "mapped", [23888]],
      [[63778, 63778], "mapped", [28651]],
      [[63779, 63779], "mapped", [34253]],
      [[63780, 63780], "mapped", [35172]],
      [[63781, 63781], "mapped", [25289]],
      [[63782, 63782], "mapped", [33240]],
      [[63783, 63783], "mapped", [34847]],
      [[63784, 63784], "mapped", [24266]],
      [[63785, 63785], "mapped", [26391]],
      [[63786, 63786], "mapped", [28010]],
      [[63787, 63787], "mapped", [29436]],
      [[63788, 63788], "mapped", [37070]],
      [[63789, 63789], "mapped", [20358]],
      [[63790, 63790], "mapped", [20919]],
      [[63791, 63791], "mapped", [21214]],
      [[63792, 63792], "mapped", [25796]],
      [[63793, 63793], "mapped", [27347]],
      [[63794, 63794], "mapped", [29200]],
      [[63795, 63795], "mapped", [30439]],
      [[63796, 63796], "mapped", [32769]],
      [[63797, 63797], "mapped", [34310]],
      [[63798, 63798], "mapped", [34396]],
      [[63799, 63799], "mapped", [36335]],
      [[63800, 63800], "mapped", [38706]],
      [[63801, 63801], "mapped", [39791]],
      [[63802, 63802], "mapped", [40442]],
      [[63803, 63803], "mapped", [30860]],
      [[63804, 63804], "mapped", [31103]],
      [[63805, 63805], "mapped", [32160]],
      [[63806, 63806], "mapped", [33737]],
      [[63807, 63807], "mapped", [37636]],
      [[63808, 63808], "mapped", [40575]],
      [[63809, 63809], "mapped", [35542]],
      [[63810, 63810], "mapped", [22751]],
      [[63811, 63811], "mapped", [24324]],
      [[63812, 63812], "mapped", [31840]],
      [[63813, 63813], "mapped", [32894]],
      [[63814, 63814], "mapped", [29282]],
      [[63815, 63815], "mapped", [30922]],
      [[63816, 63816], "mapped", [36034]],
      [[63817, 63817], "mapped", [38647]],
      [[63818, 63818], "mapped", [22744]],
      [[63819, 63819], "mapped", [23650]],
      [[63820, 63820], "mapped", [27155]],
      [[63821, 63821], "mapped", [28122]],
      [[63822, 63822], "mapped", [28431]],
      [[63823, 63823], "mapped", [32047]],
      [[63824, 63824], "mapped", [32311]],
      [[63825, 63825], "mapped", [38475]],
      [[63826, 63826], "mapped", [21202]],
      [[63827, 63827], "mapped", [32907]],
      [[63828, 63828], "mapped", [20956]],
      [[63829, 63829], "mapped", [20940]],
      [[63830, 63830], "mapped", [31260]],
      [[63831, 63831], "mapped", [32190]],
      [[63832, 63832], "mapped", [33777]],
      [[63833, 63833], "mapped", [38517]],
      [[63834, 63834], "mapped", [35712]],
      [[63835, 63835], "mapped", [25295]],
      [[63836, 63836], "mapped", [27138]],
      [[63837, 63837], "mapped", [35582]],
      [[63838, 63838], "mapped", [20025]],
      [[63839, 63839], "mapped", [23527]],
      [[63840, 63840], "mapped", [24594]],
      [[63841, 63841], "mapped", [29575]],
      [[63842, 63842], "mapped", [30064]],
      [[63843, 63843], "mapped", [21271]],
      [[63844, 63844], "mapped", [30971]],
      [[63845, 63845], "mapped", [20415]],
      [[63846, 63846], "mapped", [24489]],
      [[63847, 63847], "mapped", [19981]],
      [[63848, 63848], "mapped", [27852]],
      [[63849, 63849], "mapped", [25976]],
      [[63850, 63850], "mapped", [32034]],
      [[63851, 63851], "mapped", [21443]],
      [[63852, 63852], "mapped", [22622]],
      [[63853, 63853], "mapped", [30465]],
      [[63854, 63854], "mapped", [33865]],
      [[63855, 63855], "mapped", [35498]],
      [[63856, 63856], "mapped", [27578]],
      [[63857, 63857], "mapped", [36784]],
      [[63858, 63858], "mapped", [27784]],
      [[63859, 63859], "mapped", [25342]],
      [[63860, 63860], "mapped", [33509]],
      [[63861, 63861], "mapped", [25504]],
      [[63862, 63862], "mapped", [30053]],
      [[63863, 63863], "mapped", [20142]],
      [[63864, 63864], "mapped", [20841]],
      [[63865, 63865], "mapped", [20937]],
      [[63866, 63866], "mapped", [26753]],
      [[63867, 63867], "mapped", [31975]],
      [[63868, 63868], "mapped", [33391]],
      [[63869, 63869], "mapped", [35538]],
      [[63870, 63870], "mapped", [37327]],
      [[63871, 63871], "mapped", [21237]],
      [[63872, 63872], "mapped", [21570]],
      [[63873, 63873], "mapped", [22899]],
      [[63874, 63874], "mapped", [24300]],
      [[63875, 63875], "mapped", [26053]],
      [[63876, 63876], "mapped", [28670]],
      [[63877, 63877], "mapped", [31018]],
      [[63878, 63878], "mapped", [38317]],
      [[63879, 63879], "mapped", [39530]],
      [[63880, 63880], "mapped", [40599]],
      [[63881, 63881], "mapped", [40654]],
      [[63882, 63882], "mapped", [21147]],
      [[63883, 63883], "mapped", [26310]],
      [[63884, 63884], "mapped", [27511]],
      [[63885, 63885], "mapped", [36706]],
      [[63886, 63886], "mapped", [24180]],
      [[63887, 63887], "mapped", [24976]],
      [[63888, 63888], "mapped", [25088]],
      [[63889, 63889], "mapped", [25754]],
      [[63890, 63890], "mapped", [28451]],
      [[63891, 63891], "mapped", [29001]],
      [[63892, 63892], "mapped", [29833]],
      [[63893, 63893], "mapped", [31178]],
      [[63894, 63894], "mapped", [32244]],
      [[63895, 63895], "mapped", [32879]],
      [[63896, 63896], "mapped", [36646]],
      [[63897, 63897], "mapped", [34030]],
      [[63898, 63898], "mapped", [36899]],
      [[63899, 63899], "mapped", [37706]],
      [[63900, 63900], "mapped", [21015]],
      [[63901, 63901], "mapped", [21155]],
      [[63902, 63902], "mapped", [21693]],
      [[63903, 63903], "mapped", [28872]],
      [[63904, 63904], "mapped", [35010]],
      [[63905, 63905], "mapped", [35498]],
      [[63906, 63906], "mapped", [24265]],
      [[63907, 63907], "mapped", [24565]],
      [[63908, 63908], "mapped", [25467]],
      [[63909, 63909], "mapped", [27566]],
      [[63910, 63910], "mapped", [31806]],
      [[63911, 63911], "mapped", [29557]],
      [[63912, 63912], "mapped", [20196]],
      [[63913, 63913], "mapped", [22265]],
      [[63914, 63914], "mapped", [23527]],
      [[63915, 63915], "mapped", [23994]],
      [[63916, 63916], "mapped", [24604]],
      [[63917, 63917], "mapped", [29618]],
      [[63918, 63918], "mapped", [29801]],
      [[63919, 63919], "mapped", [32666]],
      [[63920, 63920], "mapped", [32838]],
      [[63921, 63921], "mapped", [37428]],
      [[63922, 63922], "mapped", [38646]],
      [[63923, 63923], "mapped", [38728]],
      [[63924, 63924], "mapped", [38936]],
      [[63925, 63925], "mapped", [20363]],
      [[63926, 63926], "mapped", [31150]],
      [[63927, 63927], "mapped", [37300]],
      [[63928, 63928], "mapped", [38584]],
      [[63929, 63929], "mapped", [24801]],
      [[63930, 63930], "mapped", [20102]],
      [[63931, 63931], "mapped", [20698]],
      [[63932, 63932], "mapped", [23534]],
      [[63933, 63933], "mapped", [23615]],
      [[63934, 63934], "mapped", [26009]],
      [[63935, 63935], "mapped", [27138]],
      [[63936, 63936], "mapped", [29134]],
      [[63937, 63937], "mapped", [30274]],
      [[63938, 63938], "mapped", [34044]],
      [[63939, 63939], "mapped", [36988]],
      [[63940, 63940], "mapped", [40845]],
      [[63941, 63941], "mapped", [26248]],
      [[63942, 63942], "mapped", [38446]],
      [[63943, 63943], "mapped", [21129]],
      [[63944, 63944], "mapped", [26491]],
      [[63945, 63945], "mapped", [26611]],
      [[63946, 63946], "mapped", [27969]],
      [[63947, 63947], "mapped", [28316]],
      [[63948, 63948], "mapped", [29705]],
      [[63949, 63949], "mapped", [30041]],
      [[63950, 63950], "mapped", [30827]],
      [[63951, 63951], "mapped", [32016]],
      [[63952, 63952], "mapped", [39006]],
      [[63953, 63953], "mapped", [20845]],
      [[63954, 63954], "mapped", [25134]],
      [[63955, 63955], "mapped", [38520]],
      [[63956, 63956], "mapped", [20523]],
      [[63957, 63957], "mapped", [23833]],
      [[63958, 63958], "mapped", [28138]],
      [[63959, 63959], "mapped", [36650]],
      [[63960, 63960], "mapped", [24459]],
      [[63961, 63961], "mapped", [24900]],
      [[63962, 63962], "mapped", [26647]],
      [[63963, 63963], "mapped", [29575]],
      [[63964, 63964], "mapped", [38534]],
      [[63965, 63965], "mapped", [21033]],
      [[63966, 63966], "mapped", [21519]],
      [[63967, 63967], "mapped", [23653]],
      [[63968, 63968], "mapped", [26131]],
      [[63969, 63969], "mapped", [26446]],
      [[63970, 63970], "mapped", [26792]],
      [[63971, 63971], "mapped", [27877]],
      [[63972, 63972], "mapped", [29702]],
      [[63973, 63973], "mapped", [30178]],
      [[63974, 63974], "mapped", [32633]],
      [[63975, 63975], "mapped", [35023]],
      [[63976, 63976], "mapped", [35041]],
      [[63977, 63977], "mapped", [37324]],
      [[63978, 63978], "mapped", [38626]],
      [[63979, 63979], "mapped", [21311]],
      [[63980, 63980], "mapped", [28346]],
      [[63981, 63981], "mapped", [21533]],
      [[63982, 63982], "mapped", [29136]],
      [[63983, 63983], "mapped", [29848]],
      [[63984, 63984], "mapped", [34298]],
      [[63985, 63985], "mapped", [38563]],
      [[63986, 63986], "mapped", [40023]],
      [[63987, 63987], "mapped", [40607]],
      [[63988, 63988], "mapped", [26519]],
      [[63989, 63989], "mapped", [28107]],
      [[63990, 63990], "mapped", [33256]],
      [[63991, 63991], "mapped", [31435]],
      [[63992, 63992], "mapped", [31520]],
      [[63993, 63993], "mapped", [31890]],
      [[63994, 63994], "mapped", [29376]],
      [[63995, 63995], "mapped", [28825]],
      [[63996, 63996], "mapped", [35672]],
      [[63997, 63997], "mapped", [20160]],
      [[63998, 63998], "mapped", [33590]],
      [[63999, 63999], "mapped", [21050]],
      [[64e3, 64e3], "mapped", [20999]],
      [[64001, 64001], "mapped", [24230]],
      [[64002, 64002], "mapped", [25299]],
      [[64003, 64003], "mapped", [31958]],
      [[64004, 64004], "mapped", [23429]],
      [[64005, 64005], "mapped", [27934]],
      [[64006, 64006], "mapped", [26292]],
      [[64007, 64007], "mapped", [36667]],
      [[64008, 64008], "mapped", [34892]],
      [[64009, 64009], "mapped", [38477]],
      [[64010, 64010], "mapped", [35211]],
      [[64011, 64011], "mapped", [24275]],
      [[64012, 64012], "mapped", [20800]],
      [[64013, 64013], "mapped", [21952]],
      [[64014, 64015], "valid"],
      [[64016, 64016], "mapped", [22618]],
      [[64017, 64017], "valid"],
      [[64018, 64018], "mapped", [26228]],
      [[64019, 64020], "valid"],
      [[64021, 64021], "mapped", [20958]],
      [[64022, 64022], "mapped", [29482]],
      [[64023, 64023], "mapped", [30410]],
      [[64024, 64024], "mapped", [31036]],
      [[64025, 64025], "mapped", [31070]],
      [[64026, 64026], "mapped", [31077]],
      [[64027, 64027], "mapped", [31119]],
      [[64028, 64028], "mapped", [38742]],
      [[64029, 64029], "mapped", [31934]],
      [[64030, 64030], "mapped", [32701]],
      [[64031, 64031], "valid"],
      [[64032, 64032], "mapped", [34322]],
      [[64033, 64033], "valid"],
      [[64034, 64034], "mapped", [35576]],
      [[64035, 64036], "valid"],
      [[64037, 64037], "mapped", [36920]],
      [[64038, 64038], "mapped", [37117]],
      [[64039, 64041], "valid"],
      [[64042, 64042], "mapped", [39151]],
      [[64043, 64043], "mapped", [39164]],
      [[64044, 64044], "mapped", [39208]],
      [[64045, 64045], "mapped", [40372]],
      [[64046, 64046], "mapped", [37086]],
      [[64047, 64047], "mapped", [38583]],
      [[64048, 64048], "mapped", [20398]],
      [[64049, 64049], "mapped", [20711]],
      [[64050, 64050], "mapped", [20813]],
      [[64051, 64051], "mapped", [21193]],
      [[64052, 64052], "mapped", [21220]],
      [[64053, 64053], "mapped", [21329]],
      [[64054, 64054], "mapped", [21917]],
      [[64055, 64055], "mapped", [22022]],
      [[64056, 64056], "mapped", [22120]],
      [[64057, 64057], "mapped", [22592]],
      [[64058, 64058], "mapped", [22696]],
      [[64059, 64059], "mapped", [23652]],
      [[64060, 64060], "mapped", [23662]],
      [[64061, 64061], "mapped", [24724]],
      [[64062, 64062], "mapped", [24936]],
      [[64063, 64063], "mapped", [24974]],
      [[64064, 64064], "mapped", [25074]],
      [[64065, 64065], "mapped", [25935]],
      [[64066, 64066], "mapped", [26082]],
      [[64067, 64067], "mapped", [26257]],
      [[64068, 64068], "mapped", [26757]],
      [[64069, 64069], "mapped", [28023]],
      [[64070, 64070], "mapped", [28186]],
      [[64071, 64071], "mapped", [28450]],
      [[64072, 64072], "mapped", [29038]],
      [[64073, 64073], "mapped", [29227]],
      [[64074, 64074], "mapped", [29730]],
      [[64075, 64075], "mapped", [30865]],
      [[64076, 64076], "mapped", [31038]],
      [[64077, 64077], "mapped", [31049]],
      [[64078, 64078], "mapped", [31048]],
      [[64079, 64079], "mapped", [31056]],
      [[64080, 64080], "mapped", [31062]],
      [[64081, 64081], "mapped", [31069]],
      [[64082, 64082], "mapped", [31117]],
      [[64083, 64083], "mapped", [31118]],
      [[64084, 64084], "mapped", [31296]],
      [[64085, 64085], "mapped", [31361]],
      [[64086, 64086], "mapped", [31680]],
      [[64087, 64087], "mapped", [32244]],
      [[64088, 64088], "mapped", [32265]],
      [[64089, 64089], "mapped", [32321]],
      [[64090, 64090], "mapped", [32626]],
      [[64091, 64091], "mapped", [32773]],
      [[64092, 64092], "mapped", [33261]],
      [[64093, 64094], "mapped", [33401]],
      [[64095, 64095], "mapped", [33879]],
      [[64096, 64096], "mapped", [35088]],
      [[64097, 64097], "mapped", [35222]],
      [[64098, 64098], "mapped", [35585]],
      [[64099, 64099], "mapped", [35641]],
      [[64100, 64100], "mapped", [36051]],
      [[64101, 64101], "mapped", [36104]],
      [[64102, 64102], "mapped", [36790]],
      [[64103, 64103], "mapped", [36920]],
      [[64104, 64104], "mapped", [38627]],
      [[64105, 64105], "mapped", [38911]],
      [[64106, 64106], "mapped", [38971]],
      [[64107, 64107], "mapped", [24693]],
      [[64108, 64108], "mapped", [148206]],
      [[64109, 64109], "mapped", [33304]],
      [[64110, 64111], "disallowed"],
      [[64112, 64112], "mapped", [20006]],
      [[64113, 64113], "mapped", [20917]],
      [[64114, 64114], "mapped", [20840]],
      [[64115, 64115], "mapped", [20352]],
      [[64116, 64116], "mapped", [20805]],
      [[64117, 64117], "mapped", [20864]],
      [[64118, 64118], "mapped", [21191]],
      [[64119, 64119], "mapped", [21242]],
      [[64120, 64120], "mapped", [21917]],
      [[64121, 64121], "mapped", [21845]],
      [[64122, 64122], "mapped", [21913]],
      [[64123, 64123], "mapped", [21986]],
      [[64124, 64124], "mapped", [22618]],
      [[64125, 64125], "mapped", [22707]],
      [[64126, 64126], "mapped", [22852]],
      [[64127, 64127], "mapped", [22868]],
      [[64128, 64128], "mapped", [23138]],
      [[64129, 64129], "mapped", [23336]],
      [[64130, 64130], "mapped", [24274]],
      [[64131, 64131], "mapped", [24281]],
      [[64132, 64132], "mapped", [24425]],
      [[64133, 64133], "mapped", [24493]],
      [[64134, 64134], "mapped", [24792]],
      [[64135, 64135], "mapped", [24910]],
      [[64136, 64136], "mapped", [24840]],
      [[64137, 64137], "mapped", [24974]],
      [[64138, 64138], "mapped", [24928]],
      [[64139, 64139], "mapped", [25074]],
      [[64140, 64140], "mapped", [25140]],
      [[64141, 64141], "mapped", [25540]],
      [[64142, 64142], "mapped", [25628]],
      [[64143, 64143], "mapped", [25682]],
      [[64144, 64144], "mapped", [25942]],
      [[64145, 64145], "mapped", [26228]],
      [[64146, 64146], "mapped", [26391]],
      [[64147, 64147], "mapped", [26395]],
      [[64148, 64148], "mapped", [26454]],
      [[64149, 64149], "mapped", [27513]],
      [[64150, 64150], "mapped", [27578]],
      [[64151, 64151], "mapped", [27969]],
      [[64152, 64152], "mapped", [28379]],
      [[64153, 64153], "mapped", [28363]],
      [[64154, 64154], "mapped", [28450]],
      [[64155, 64155], "mapped", [28702]],
      [[64156, 64156], "mapped", [29038]],
      [[64157, 64157], "mapped", [30631]],
      [[64158, 64158], "mapped", [29237]],
      [[64159, 64159], "mapped", [29359]],
      [[64160, 64160], "mapped", [29482]],
      [[64161, 64161], "mapped", [29809]],
      [[64162, 64162], "mapped", [29958]],
      [[64163, 64163], "mapped", [30011]],
      [[64164, 64164], "mapped", [30237]],
      [[64165, 64165], "mapped", [30239]],
      [[64166, 64166], "mapped", [30410]],
      [[64167, 64167], "mapped", [30427]],
      [[64168, 64168], "mapped", [30452]],
      [[64169, 64169], "mapped", [30538]],
      [[64170, 64170], "mapped", [30528]],
      [[64171, 64171], "mapped", [30924]],
      [[64172, 64172], "mapped", [31409]],
      [[64173, 64173], "mapped", [31680]],
      [[64174, 64174], "mapped", [31867]],
      [[64175, 64175], "mapped", [32091]],
      [[64176, 64176], "mapped", [32244]],
      [[64177, 64177], "mapped", [32574]],
      [[64178, 64178], "mapped", [32773]],
      [[64179, 64179], "mapped", [33618]],
      [[64180, 64180], "mapped", [33775]],
      [[64181, 64181], "mapped", [34681]],
      [[64182, 64182], "mapped", [35137]],
      [[64183, 64183], "mapped", [35206]],
      [[64184, 64184], "mapped", [35222]],
      [[64185, 64185], "mapped", [35519]],
      [[64186, 64186], "mapped", [35576]],
      [[64187, 64187], "mapped", [35531]],
      [[64188, 64188], "mapped", [35585]],
      [[64189, 64189], "mapped", [35582]],
      [[64190, 64190], "mapped", [35565]],
      [[64191, 64191], "mapped", [35641]],
      [[64192, 64192], "mapped", [35722]],
      [[64193, 64193], "mapped", [36104]],
      [[64194, 64194], "mapped", [36664]],
      [[64195, 64195], "mapped", [36978]],
      [[64196, 64196], "mapped", [37273]],
      [[64197, 64197], "mapped", [37494]],
      [[64198, 64198], "mapped", [38524]],
      [[64199, 64199], "mapped", [38627]],
      [[64200, 64200], "mapped", [38742]],
      [[64201, 64201], "mapped", [38875]],
      [[64202, 64202], "mapped", [38911]],
      [[64203, 64203], "mapped", [38923]],
      [[64204, 64204], "mapped", [38971]],
      [[64205, 64205], "mapped", [39698]],
      [[64206, 64206], "mapped", [40860]],
      [[64207, 64207], "mapped", [141386]],
      [[64208, 64208], "mapped", [141380]],
      [[64209, 64209], "mapped", [144341]],
      [[64210, 64210], "mapped", [15261]],
      [[64211, 64211], "mapped", [16408]],
      [[64212, 64212], "mapped", [16441]],
      [[64213, 64213], "mapped", [152137]],
      [[64214, 64214], "mapped", [154832]],
      [[64215, 64215], "mapped", [163539]],
      [[64216, 64216], "mapped", [40771]],
      [[64217, 64217], "mapped", [40846]],
      [[64218, 64255], "disallowed"],
      [[64256, 64256], "mapped", [102, 102]],
      [[64257, 64257], "mapped", [102, 105]],
      [[64258, 64258], "mapped", [102, 108]],
      [[64259, 64259], "mapped", [102, 102, 105]],
      [[64260, 64260], "mapped", [102, 102, 108]],
      [[64261, 64262], "mapped", [115, 116]],
      [[64263, 64274], "disallowed"],
      [[64275, 64275], "mapped", [1396, 1398]],
      [[64276, 64276], "mapped", [1396, 1381]],
      [[64277, 64277], "mapped", [1396, 1387]],
      [[64278, 64278], "mapped", [1406, 1398]],
      [[64279, 64279], "mapped", [1396, 1389]],
      [[64280, 64284], "disallowed"],
      [[64285, 64285], "mapped", [1497, 1460]],
      [[64286, 64286], "valid"],
      [[64287, 64287], "mapped", [1522, 1463]],
      [[64288, 64288], "mapped", [1506]],
      [[64289, 64289], "mapped", [1488]],
      [[64290, 64290], "mapped", [1491]],
      [[64291, 64291], "mapped", [1492]],
      [[64292, 64292], "mapped", [1499]],
      [[64293, 64293], "mapped", [1500]],
      [[64294, 64294], "mapped", [1501]],
      [[64295, 64295], "mapped", [1512]],
      [[64296, 64296], "mapped", [1514]],
      [[64297, 64297], "disallowed_STD3_mapped", [43]],
      [[64298, 64298], "mapped", [1513, 1473]],
      [[64299, 64299], "mapped", [1513, 1474]],
      [[64300, 64300], "mapped", [1513, 1468, 1473]],
      [[64301, 64301], "mapped", [1513, 1468, 1474]],
      [[64302, 64302], "mapped", [1488, 1463]],
      [[64303, 64303], "mapped", [1488, 1464]],
      [[64304, 64304], "mapped", [1488, 1468]],
      [[64305, 64305], "mapped", [1489, 1468]],
      [[64306, 64306], "mapped", [1490, 1468]],
      [[64307, 64307], "mapped", [1491, 1468]],
      [[64308, 64308], "mapped", [1492, 1468]],
      [[64309, 64309], "mapped", [1493, 1468]],
      [[64310, 64310], "mapped", [1494, 1468]],
      [[64311, 64311], "disallowed"],
      [[64312, 64312], "mapped", [1496, 1468]],
      [[64313, 64313], "mapped", [1497, 1468]],
      [[64314, 64314], "mapped", [1498, 1468]],
      [[64315, 64315], "mapped", [1499, 1468]],
      [[64316, 64316], "mapped", [1500, 1468]],
      [[64317, 64317], "disallowed"],
      [[64318, 64318], "mapped", [1502, 1468]],
      [[64319, 64319], "disallowed"],
      [[64320, 64320], "mapped", [1504, 1468]],
      [[64321, 64321], "mapped", [1505, 1468]],
      [[64322, 64322], "disallowed"],
      [[64323, 64323], "mapped", [1507, 1468]],
      [[64324, 64324], "mapped", [1508, 1468]],
      [[64325, 64325], "disallowed"],
      [[64326, 64326], "mapped", [1510, 1468]],
      [[64327, 64327], "mapped", [1511, 1468]],
      [[64328, 64328], "mapped", [1512, 1468]],
      [[64329, 64329], "mapped", [1513, 1468]],
      [[64330, 64330], "mapped", [1514, 1468]],
      [[64331, 64331], "mapped", [1493, 1465]],
      [[64332, 64332], "mapped", [1489, 1471]],
      [[64333, 64333], "mapped", [1499, 1471]],
      [[64334, 64334], "mapped", [1508, 1471]],
      [[64335, 64335], "mapped", [1488, 1500]],
      [[64336, 64337], "mapped", [1649]],
      [[64338, 64341], "mapped", [1659]],
      [[64342, 64345], "mapped", [1662]],
      [[64346, 64349], "mapped", [1664]],
      [[64350, 64353], "mapped", [1658]],
      [[64354, 64357], "mapped", [1663]],
      [[64358, 64361], "mapped", [1657]],
      [[64362, 64365], "mapped", [1700]],
      [[64366, 64369], "mapped", [1702]],
      [[64370, 64373], "mapped", [1668]],
      [[64374, 64377], "mapped", [1667]],
      [[64378, 64381], "mapped", [1670]],
      [[64382, 64385], "mapped", [1671]],
      [[64386, 64387], "mapped", [1677]],
      [[64388, 64389], "mapped", [1676]],
      [[64390, 64391], "mapped", [1678]],
      [[64392, 64393], "mapped", [1672]],
      [[64394, 64395], "mapped", [1688]],
      [[64396, 64397], "mapped", [1681]],
      [[64398, 64401], "mapped", [1705]],
      [[64402, 64405], "mapped", [1711]],
      [[64406, 64409], "mapped", [1715]],
      [[64410, 64413], "mapped", [1713]],
      [[64414, 64415], "mapped", [1722]],
      [[64416, 64419], "mapped", [1723]],
      [[64420, 64421], "mapped", [1728]],
      [[64422, 64425], "mapped", [1729]],
      [[64426, 64429], "mapped", [1726]],
      [[64430, 64431], "mapped", [1746]],
      [[64432, 64433], "mapped", [1747]],
      [[64434, 64449], "valid", [], "NV8"],
      [[64450, 64466], "disallowed"],
      [[64467, 64470], "mapped", [1709]],
      [[64471, 64472], "mapped", [1735]],
      [[64473, 64474], "mapped", [1734]],
      [[64475, 64476], "mapped", [1736]],
      [[64477, 64477], "mapped", [1735, 1652]],
      [[64478, 64479], "mapped", [1739]],
      [[64480, 64481], "mapped", [1733]],
      [[64482, 64483], "mapped", [1737]],
      [[64484, 64487], "mapped", [1744]],
      [[64488, 64489], "mapped", [1609]],
      [[64490, 64491], "mapped", [1574, 1575]],
      [[64492, 64493], "mapped", [1574, 1749]],
      [[64494, 64495], "mapped", [1574, 1608]],
      [[64496, 64497], "mapped", [1574, 1735]],
      [[64498, 64499], "mapped", [1574, 1734]],
      [[64500, 64501], "mapped", [1574, 1736]],
      [[64502, 64504], "mapped", [1574, 1744]],
      [[64505, 64507], "mapped", [1574, 1609]],
      [[64508, 64511], "mapped", [1740]],
      [[64512, 64512], "mapped", [1574, 1580]],
      [[64513, 64513], "mapped", [1574, 1581]],
      [[64514, 64514], "mapped", [1574, 1605]],
      [[64515, 64515], "mapped", [1574, 1609]],
      [[64516, 64516], "mapped", [1574, 1610]],
      [[64517, 64517], "mapped", [1576, 1580]],
      [[64518, 64518], "mapped", [1576, 1581]],
      [[64519, 64519], "mapped", [1576, 1582]],
      [[64520, 64520], "mapped", [1576, 1605]],
      [[64521, 64521], "mapped", [1576, 1609]],
      [[64522, 64522], "mapped", [1576, 1610]],
      [[64523, 64523], "mapped", [1578, 1580]],
      [[64524, 64524], "mapped", [1578, 1581]],
      [[64525, 64525], "mapped", [1578, 1582]],
      [[64526, 64526], "mapped", [1578, 1605]],
      [[64527, 64527], "mapped", [1578, 1609]],
      [[64528, 64528], "mapped", [1578, 1610]],
      [[64529, 64529], "mapped", [1579, 1580]],
      [[64530, 64530], "mapped", [1579, 1605]],
      [[64531, 64531], "mapped", [1579, 1609]],
      [[64532, 64532], "mapped", [1579, 1610]],
      [[64533, 64533], "mapped", [1580, 1581]],
      [[64534, 64534], "mapped", [1580, 1605]],
      [[64535, 64535], "mapped", [1581, 1580]],
      [[64536, 64536], "mapped", [1581, 1605]],
      [[64537, 64537], "mapped", [1582, 1580]],
      [[64538, 64538], "mapped", [1582, 1581]],
      [[64539, 64539], "mapped", [1582, 1605]],
      [[64540, 64540], "mapped", [1587, 1580]],
      [[64541, 64541], "mapped", [1587, 1581]],
      [[64542, 64542], "mapped", [1587, 1582]],
      [[64543, 64543], "mapped", [1587, 1605]],
      [[64544, 64544], "mapped", [1589, 1581]],
      [[64545, 64545], "mapped", [1589, 1605]],
      [[64546, 64546], "mapped", [1590, 1580]],
      [[64547, 64547], "mapped", [1590, 1581]],
      [[64548, 64548], "mapped", [1590, 1582]],
      [[64549, 64549], "mapped", [1590, 1605]],
      [[64550, 64550], "mapped", [1591, 1581]],
      [[64551, 64551], "mapped", [1591, 1605]],
      [[64552, 64552], "mapped", [1592, 1605]],
      [[64553, 64553], "mapped", [1593, 1580]],
      [[64554, 64554], "mapped", [1593, 1605]],
      [[64555, 64555], "mapped", [1594, 1580]],
      [[64556, 64556], "mapped", [1594, 1605]],
      [[64557, 64557], "mapped", [1601, 1580]],
      [[64558, 64558], "mapped", [1601, 1581]],
      [[64559, 64559], "mapped", [1601, 1582]],
      [[64560, 64560], "mapped", [1601, 1605]],
      [[64561, 64561], "mapped", [1601, 1609]],
      [[64562, 64562], "mapped", [1601, 1610]],
      [[64563, 64563], "mapped", [1602, 1581]],
      [[64564, 64564], "mapped", [1602, 1605]],
      [[64565, 64565], "mapped", [1602, 1609]],
      [[64566, 64566], "mapped", [1602, 1610]],
      [[64567, 64567], "mapped", [1603, 1575]],
      [[64568, 64568], "mapped", [1603, 1580]],
      [[64569, 64569], "mapped", [1603, 1581]],
      [[64570, 64570], "mapped", [1603, 1582]],
      [[64571, 64571], "mapped", [1603, 1604]],
      [[64572, 64572], "mapped", [1603, 1605]],
      [[64573, 64573], "mapped", [1603, 1609]],
      [[64574, 64574], "mapped", [1603, 1610]],
      [[64575, 64575], "mapped", [1604, 1580]],
      [[64576, 64576], "mapped", [1604, 1581]],
      [[64577, 64577], "mapped", [1604, 1582]],
      [[64578, 64578], "mapped", [1604, 1605]],
      [[64579, 64579], "mapped", [1604, 1609]],
      [[64580, 64580], "mapped", [1604, 1610]],
      [[64581, 64581], "mapped", [1605, 1580]],
      [[64582, 64582], "mapped", [1605, 1581]],
      [[64583, 64583], "mapped", [1605, 1582]],
      [[64584, 64584], "mapped", [1605, 1605]],
      [[64585, 64585], "mapped", [1605, 1609]],
      [[64586, 64586], "mapped", [1605, 1610]],
      [[64587, 64587], "mapped", [1606, 1580]],
      [[64588, 64588], "mapped", [1606, 1581]],
      [[64589, 64589], "mapped", [1606, 1582]],
      [[64590, 64590], "mapped", [1606, 1605]],
      [[64591, 64591], "mapped", [1606, 1609]],
      [[64592, 64592], "mapped", [1606, 1610]],
      [[64593, 64593], "mapped", [1607, 1580]],
      [[64594, 64594], "mapped", [1607, 1605]],
      [[64595, 64595], "mapped", [1607, 1609]],
      [[64596, 64596], "mapped", [1607, 1610]],
      [[64597, 64597], "mapped", [1610, 1580]],
      [[64598, 64598], "mapped", [1610, 1581]],
      [[64599, 64599], "mapped", [1610, 1582]],
      [[64600, 64600], "mapped", [1610, 1605]],
      [[64601, 64601], "mapped", [1610, 1609]],
      [[64602, 64602], "mapped", [1610, 1610]],
      [[64603, 64603], "mapped", [1584, 1648]],
      [[64604, 64604], "mapped", [1585, 1648]],
      [[64605, 64605], "mapped", [1609, 1648]],
      [[64606, 64606], "disallowed_STD3_mapped", [32, 1612, 1617]],
      [[64607, 64607], "disallowed_STD3_mapped", [32, 1613, 1617]],
      [[64608, 64608], "disallowed_STD3_mapped", [32, 1614, 1617]],
      [[64609, 64609], "disallowed_STD3_mapped", [32, 1615, 1617]],
      [[64610, 64610], "disallowed_STD3_mapped", [32, 1616, 1617]],
      [[64611, 64611], "disallowed_STD3_mapped", [32, 1617, 1648]],
      [[64612, 64612], "mapped", [1574, 1585]],
      [[64613, 64613], "mapped", [1574, 1586]],
      [[64614, 64614], "mapped", [1574, 1605]],
      [[64615, 64615], "mapped", [1574, 1606]],
      [[64616, 64616], "mapped", [1574, 1609]],
      [[64617, 64617], "mapped", [1574, 1610]],
      [[64618, 64618], "mapped", [1576, 1585]],
      [[64619, 64619], "mapped", [1576, 1586]],
      [[64620, 64620], "mapped", [1576, 1605]],
      [[64621, 64621], "mapped", [1576, 1606]],
      [[64622, 64622], "mapped", [1576, 1609]],
      [[64623, 64623], "mapped", [1576, 1610]],
      [[64624, 64624], "mapped", [1578, 1585]],
      [[64625, 64625], "mapped", [1578, 1586]],
      [[64626, 64626], "mapped", [1578, 1605]],
      [[64627, 64627], "mapped", [1578, 1606]],
      [[64628, 64628], "mapped", [1578, 1609]],
      [[64629, 64629], "mapped", [1578, 1610]],
      [[64630, 64630], "mapped", [1579, 1585]],
      [[64631, 64631], "mapped", [1579, 1586]],
      [[64632, 64632], "mapped", [1579, 1605]],
      [[64633, 64633], "mapped", [1579, 1606]],
      [[64634, 64634], "mapped", [1579, 1609]],
      [[64635, 64635], "mapped", [1579, 1610]],
      [[64636, 64636], "mapped", [1601, 1609]],
      [[64637, 64637], "mapped", [1601, 1610]],
      [[64638, 64638], "mapped", [1602, 1609]],
      [[64639, 64639], "mapped", [1602, 1610]],
      [[64640, 64640], "mapped", [1603, 1575]],
      [[64641, 64641], "mapped", [1603, 1604]],
      [[64642, 64642], "mapped", [1603, 1605]],
      [[64643, 64643], "mapped", [1603, 1609]],
      [[64644, 64644], "mapped", [1603, 1610]],
      [[64645, 64645], "mapped", [1604, 1605]],
      [[64646, 64646], "mapped", [1604, 1609]],
      [[64647, 64647], "mapped", [1604, 1610]],
      [[64648, 64648], "mapped", [1605, 1575]],
      [[64649, 64649], "mapped", [1605, 1605]],
      [[64650, 64650], "mapped", [1606, 1585]],
      [[64651, 64651], "mapped", [1606, 1586]],
      [[64652, 64652], "mapped", [1606, 1605]],
      [[64653, 64653], "mapped", [1606, 1606]],
      [[64654, 64654], "mapped", [1606, 1609]],
      [[64655, 64655], "mapped", [1606, 1610]],
      [[64656, 64656], "mapped", [1609, 1648]],
      [[64657, 64657], "mapped", [1610, 1585]],
      [[64658, 64658], "mapped", [1610, 1586]],
      [[64659, 64659], "mapped", [1610, 1605]],
      [[64660, 64660], "mapped", [1610, 1606]],
      [[64661, 64661], "mapped", [1610, 1609]],
      [[64662, 64662], "mapped", [1610, 1610]],
      [[64663, 64663], "mapped", [1574, 1580]],
      [[64664, 64664], "mapped", [1574, 1581]],
      [[64665, 64665], "mapped", [1574, 1582]],
      [[64666, 64666], "mapped", [1574, 1605]],
      [[64667, 64667], "mapped", [1574, 1607]],
      [[64668, 64668], "mapped", [1576, 1580]],
      [[64669, 64669], "mapped", [1576, 1581]],
      [[64670, 64670], "mapped", [1576, 1582]],
      [[64671, 64671], "mapped", [1576, 1605]],
      [[64672, 64672], "mapped", [1576, 1607]],
      [[64673, 64673], "mapped", [1578, 1580]],
      [[64674, 64674], "mapped", [1578, 1581]],
      [[64675, 64675], "mapped", [1578, 1582]],
      [[64676, 64676], "mapped", [1578, 1605]],
      [[64677, 64677], "mapped", [1578, 1607]],
      [[64678, 64678], "mapped", [1579, 1605]],
      [[64679, 64679], "mapped", [1580, 1581]],
      [[64680, 64680], "mapped", [1580, 1605]],
      [[64681, 64681], "mapped", [1581, 1580]],
      [[64682, 64682], "mapped", [1581, 1605]],
      [[64683, 64683], "mapped", [1582, 1580]],
      [[64684, 64684], "mapped", [1582, 1605]],
      [[64685, 64685], "mapped", [1587, 1580]],
      [[64686, 64686], "mapped", [1587, 1581]],
      [[64687, 64687], "mapped", [1587, 1582]],
      [[64688, 64688], "mapped", [1587, 1605]],
      [[64689, 64689], "mapped", [1589, 1581]],
      [[64690, 64690], "mapped", [1589, 1582]],
      [[64691, 64691], "mapped", [1589, 1605]],
      [[64692, 64692], "mapped", [1590, 1580]],
      [[64693, 64693], "mapped", [1590, 1581]],
      [[64694, 64694], "mapped", [1590, 1582]],
      [[64695, 64695], "mapped", [1590, 1605]],
      [[64696, 64696], "mapped", [1591, 1581]],
      [[64697, 64697], "mapped", [1592, 1605]],
      [[64698, 64698], "mapped", [1593, 1580]],
      [[64699, 64699], "mapped", [1593, 1605]],
      [[64700, 64700], "mapped", [1594, 1580]],
      [[64701, 64701], "mapped", [1594, 1605]],
      [[64702, 64702], "mapped", [1601, 1580]],
      [[64703, 64703], "mapped", [1601, 1581]],
      [[64704, 64704], "mapped", [1601, 1582]],
      [[64705, 64705], "mapped", [1601, 1605]],
      [[64706, 64706], "mapped", [1602, 1581]],
      [[64707, 64707], "mapped", [1602, 1605]],
      [[64708, 64708], "mapped", [1603, 1580]],
      [[64709, 64709], "mapped", [1603, 1581]],
      [[64710, 64710], "mapped", [1603, 1582]],
      [[64711, 64711], "mapped", [1603, 1604]],
      [[64712, 64712], "mapped", [1603, 1605]],
      [[64713, 64713], "mapped", [1604, 1580]],
      [[64714, 64714], "mapped", [1604, 1581]],
      [[64715, 64715], "mapped", [1604, 1582]],
      [[64716, 64716], "mapped", [1604, 1605]],
      [[64717, 64717], "mapped", [1604, 1607]],
      [[64718, 64718], "mapped", [1605, 1580]],
      [[64719, 64719], "mapped", [1605, 1581]],
      [[64720, 64720], "mapped", [1605, 1582]],
      [[64721, 64721], "mapped", [1605, 1605]],
      [[64722, 64722], "mapped", [1606, 1580]],
      [[64723, 64723], "mapped", [1606, 1581]],
      [[64724, 64724], "mapped", [1606, 1582]],
      [[64725, 64725], "mapped", [1606, 1605]],
      [[64726, 64726], "mapped", [1606, 1607]],
      [[64727, 64727], "mapped", [1607, 1580]],
      [[64728, 64728], "mapped", [1607, 1605]],
      [[64729, 64729], "mapped", [1607, 1648]],
      [[64730, 64730], "mapped", [1610, 1580]],
      [[64731, 64731], "mapped", [1610, 1581]],
      [[64732, 64732], "mapped", [1610, 1582]],
      [[64733, 64733], "mapped", [1610, 1605]],
      [[64734, 64734], "mapped", [1610, 1607]],
      [[64735, 64735], "mapped", [1574, 1605]],
      [[64736, 64736], "mapped", [1574, 1607]],
      [[64737, 64737], "mapped", [1576, 1605]],
      [[64738, 64738], "mapped", [1576, 1607]],
      [[64739, 64739], "mapped", [1578, 1605]],
      [[64740, 64740], "mapped", [1578, 1607]],
      [[64741, 64741], "mapped", [1579, 1605]],
      [[64742, 64742], "mapped", [1579, 1607]],
      [[64743, 64743], "mapped", [1587, 1605]],
      [[64744, 64744], "mapped", [1587, 1607]],
      [[64745, 64745], "mapped", [1588, 1605]],
      [[64746, 64746], "mapped", [1588, 1607]],
      [[64747, 64747], "mapped", [1603, 1604]],
      [[64748, 64748], "mapped", [1603, 1605]],
      [[64749, 64749], "mapped", [1604, 1605]],
      [[64750, 64750], "mapped", [1606, 1605]],
      [[64751, 64751], "mapped", [1606, 1607]],
      [[64752, 64752], "mapped", [1610, 1605]],
      [[64753, 64753], "mapped", [1610, 1607]],
      [[64754, 64754], "mapped", [1600, 1614, 1617]],
      [[64755, 64755], "mapped", [1600, 1615, 1617]],
      [[64756, 64756], "mapped", [1600, 1616, 1617]],
      [[64757, 64757], "mapped", [1591, 1609]],
      [[64758, 64758], "mapped", [1591, 1610]],
      [[64759, 64759], "mapped", [1593, 1609]],
      [[64760, 64760], "mapped", [1593, 1610]],
      [[64761, 64761], "mapped", [1594, 1609]],
      [[64762, 64762], "mapped", [1594, 1610]],
      [[64763, 64763], "mapped", [1587, 1609]],
      [[64764, 64764], "mapped", [1587, 1610]],
      [[64765, 64765], "mapped", [1588, 1609]],
      [[64766, 64766], "mapped", [1588, 1610]],
      [[64767, 64767], "mapped", [1581, 1609]],
      [[64768, 64768], "mapped", [1581, 1610]],
      [[64769, 64769], "mapped", [1580, 1609]],
      [[64770, 64770], "mapped", [1580, 1610]],
      [[64771, 64771], "mapped", [1582, 1609]],
      [[64772, 64772], "mapped", [1582, 1610]],
      [[64773, 64773], "mapped", [1589, 1609]],
      [[64774, 64774], "mapped", [1589, 1610]],
      [[64775, 64775], "mapped", [1590, 1609]],
      [[64776, 64776], "mapped", [1590, 1610]],
      [[64777, 64777], "mapped", [1588, 1580]],
      [[64778, 64778], "mapped", [1588, 1581]],
      [[64779, 64779], "mapped", [1588, 1582]],
      [[64780, 64780], "mapped", [1588, 1605]],
      [[64781, 64781], "mapped", [1588, 1585]],
      [[64782, 64782], "mapped", [1587, 1585]],
      [[64783, 64783], "mapped", [1589, 1585]],
      [[64784, 64784], "mapped", [1590, 1585]],
      [[64785, 64785], "mapped", [1591, 1609]],
      [[64786, 64786], "mapped", [1591, 1610]],
      [[64787, 64787], "mapped", [1593, 1609]],
      [[64788, 64788], "mapped", [1593, 1610]],
      [[64789, 64789], "mapped", [1594, 1609]],
      [[64790, 64790], "mapped", [1594, 1610]],
      [[64791, 64791], "mapped", [1587, 1609]],
      [[64792, 64792], "mapped", [1587, 1610]],
      [[64793, 64793], "mapped", [1588, 1609]],
      [[64794, 64794], "mapped", [1588, 1610]],
      [[64795, 64795], "mapped", [1581, 1609]],
      [[64796, 64796], "mapped", [1581, 1610]],
      [[64797, 64797], "mapped", [1580, 1609]],
      [[64798, 64798], "mapped", [1580, 1610]],
      [[64799, 64799], "mapped", [1582, 1609]],
      [[64800, 64800], "mapped", [1582, 1610]],
      [[64801, 64801], "mapped", [1589, 1609]],
      [[64802, 64802], "mapped", [1589, 1610]],
      [[64803, 64803], "mapped", [1590, 1609]],
      [[64804, 64804], "mapped", [1590, 1610]],
      [[64805, 64805], "mapped", [1588, 1580]],
      [[64806, 64806], "mapped", [1588, 1581]],
      [[64807, 64807], "mapped", [1588, 1582]],
      [[64808, 64808], "mapped", [1588, 1605]],
      [[64809, 64809], "mapped", [1588, 1585]],
      [[64810, 64810], "mapped", [1587, 1585]],
      [[64811, 64811], "mapped", [1589, 1585]],
      [[64812, 64812], "mapped", [1590, 1585]],
      [[64813, 64813], "mapped", [1588, 1580]],
      [[64814, 64814], "mapped", [1588, 1581]],
      [[64815, 64815], "mapped", [1588, 1582]],
      [[64816, 64816], "mapped", [1588, 1605]],
      [[64817, 64817], "mapped", [1587, 1607]],
      [[64818, 64818], "mapped", [1588, 1607]],
      [[64819, 64819], "mapped", [1591, 1605]],
      [[64820, 64820], "mapped", [1587, 1580]],
      [[64821, 64821], "mapped", [1587, 1581]],
      [[64822, 64822], "mapped", [1587, 1582]],
      [[64823, 64823], "mapped", [1588, 1580]],
      [[64824, 64824], "mapped", [1588, 1581]],
      [[64825, 64825], "mapped", [1588, 1582]],
      [[64826, 64826], "mapped", [1591, 1605]],
      [[64827, 64827], "mapped", [1592, 1605]],
      [[64828, 64829], "mapped", [1575, 1611]],
      [[64830, 64831], "valid", [], "NV8"],
      [[64832, 64847], "disallowed"],
      [[64848, 64848], "mapped", [1578, 1580, 1605]],
      [[64849, 64850], "mapped", [1578, 1581, 1580]],
      [[64851, 64851], "mapped", [1578, 1581, 1605]],
      [[64852, 64852], "mapped", [1578, 1582, 1605]],
      [[64853, 64853], "mapped", [1578, 1605, 1580]],
      [[64854, 64854], "mapped", [1578, 1605, 1581]],
      [[64855, 64855], "mapped", [1578, 1605, 1582]],
      [[64856, 64857], "mapped", [1580, 1605, 1581]],
      [[64858, 64858], "mapped", [1581, 1605, 1610]],
      [[64859, 64859], "mapped", [1581, 1605, 1609]],
      [[64860, 64860], "mapped", [1587, 1581, 1580]],
      [[64861, 64861], "mapped", [1587, 1580, 1581]],
      [[64862, 64862], "mapped", [1587, 1580, 1609]],
      [[64863, 64864], "mapped", [1587, 1605, 1581]],
      [[64865, 64865], "mapped", [1587, 1605, 1580]],
      [[64866, 64867], "mapped", [1587, 1605, 1605]],
      [[64868, 64869], "mapped", [1589, 1581, 1581]],
      [[64870, 64870], "mapped", [1589, 1605, 1605]],
      [[64871, 64872], "mapped", [1588, 1581, 1605]],
      [[64873, 64873], "mapped", [1588, 1580, 1610]],
      [[64874, 64875], "mapped", [1588, 1605, 1582]],
      [[64876, 64877], "mapped", [1588, 1605, 1605]],
      [[64878, 64878], "mapped", [1590, 1581, 1609]],
      [[64879, 64880], "mapped", [1590, 1582, 1605]],
      [[64881, 64882], "mapped", [1591, 1605, 1581]],
      [[64883, 64883], "mapped", [1591, 1605, 1605]],
      [[64884, 64884], "mapped", [1591, 1605, 1610]],
      [[64885, 64885], "mapped", [1593, 1580, 1605]],
      [[64886, 64887], "mapped", [1593, 1605, 1605]],
      [[64888, 64888], "mapped", [1593, 1605, 1609]],
      [[64889, 64889], "mapped", [1594, 1605, 1605]],
      [[64890, 64890], "mapped", [1594, 1605, 1610]],
      [[64891, 64891], "mapped", [1594, 1605, 1609]],
      [[64892, 64893], "mapped", [1601, 1582, 1605]],
      [[64894, 64894], "mapped", [1602, 1605, 1581]],
      [[64895, 64895], "mapped", [1602, 1605, 1605]],
      [[64896, 64896], "mapped", [1604, 1581, 1605]],
      [[64897, 64897], "mapped", [1604, 1581, 1610]],
      [[64898, 64898], "mapped", [1604, 1581, 1609]],
      [[64899, 64900], "mapped", [1604, 1580, 1580]],
      [[64901, 64902], "mapped", [1604, 1582, 1605]],
      [[64903, 64904], "mapped", [1604, 1605, 1581]],
      [[64905, 64905], "mapped", [1605, 1581, 1580]],
      [[64906, 64906], "mapped", [1605, 1581, 1605]],
      [[64907, 64907], "mapped", [1605, 1581, 1610]],
      [[64908, 64908], "mapped", [1605, 1580, 1581]],
      [[64909, 64909], "mapped", [1605, 1580, 1605]],
      [[64910, 64910], "mapped", [1605, 1582, 1580]],
      [[64911, 64911], "mapped", [1605, 1582, 1605]],
      [[64912, 64913], "disallowed"],
      [[64914, 64914], "mapped", [1605, 1580, 1582]],
      [[64915, 64915], "mapped", [1607, 1605, 1580]],
      [[64916, 64916], "mapped", [1607, 1605, 1605]],
      [[64917, 64917], "mapped", [1606, 1581, 1605]],
      [[64918, 64918], "mapped", [1606, 1581, 1609]],
      [[64919, 64920], "mapped", [1606, 1580, 1605]],
      [[64921, 64921], "mapped", [1606, 1580, 1609]],
      [[64922, 64922], "mapped", [1606, 1605, 1610]],
      [[64923, 64923], "mapped", [1606, 1605, 1609]],
      [[64924, 64925], "mapped", [1610, 1605, 1605]],
      [[64926, 64926], "mapped", [1576, 1582, 1610]],
      [[64927, 64927], "mapped", [1578, 1580, 1610]],
      [[64928, 64928], "mapped", [1578, 1580, 1609]],
      [[64929, 64929], "mapped", [1578, 1582, 1610]],
      [[64930, 64930], "mapped", [1578, 1582, 1609]],
      [[64931, 64931], "mapped", [1578, 1605, 1610]],
      [[64932, 64932], "mapped", [1578, 1605, 1609]],
      [[64933, 64933], "mapped", [1580, 1605, 1610]],
      [[64934, 64934], "mapped", [1580, 1581, 1609]],
      [[64935, 64935], "mapped", [1580, 1605, 1609]],
      [[64936, 64936], "mapped", [1587, 1582, 1609]],
      [[64937, 64937], "mapped", [1589, 1581, 1610]],
      [[64938, 64938], "mapped", [1588, 1581, 1610]],
      [[64939, 64939], "mapped", [1590, 1581, 1610]],
      [[64940, 64940], "mapped", [1604, 1580, 1610]],
      [[64941, 64941], "mapped", [1604, 1605, 1610]],
      [[64942, 64942], "mapped", [1610, 1581, 1610]],
      [[64943, 64943], "mapped", [1610, 1580, 1610]],
      [[64944, 64944], "mapped", [1610, 1605, 1610]],
      [[64945, 64945], "mapped", [1605, 1605, 1610]],
      [[64946, 64946], "mapped", [1602, 1605, 1610]],
      [[64947, 64947], "mapped", [1606, 1581, 1610]],
      [[64948, 64948], "mapped", [1602, 1605, 1581]],
      [[64949, 64949], "mapped", [1604, 1581, 1605]],
      [[64950, 64950], "mapped", [1593, 1605, 1610]],
      [[64951, 64951], "mapped", [1603, 1605, 1610]],
      [[64952, 64952], "mapped", [1606, 1580, 1581]],
      [[64953, 64953], "mapped", [1605, 1582, 1610]],
      [[64954, 64954], "mapped", [1604, 1580, 1605]],
      [[64955, 64955], "mapped", [1603, 1605, 1605]],
      [[64956, 64956], "mapped", [1604, 1580, 1605]],
      [[64957, 64957], "mapped", [1606, 1580, 1581]],
      [[64958, 64958], "mapped", [1580, 1581, 1610]],
      [[64959, 64959], "mapped", [1581, 1580, 1610]],
      [[64960, 64960], "mapped", [1605, 1580, 1610]],
      [[64961, 64961], "mapped", [1601, 1605, 1610]],
      [[64962, 64962], "mapped", [1576, 1581, 1610]],
      [[64963, 64963], "mapped", [1603, 1605, 1605]],
      [[64964, 64964], "mapped", [1593, 1580, 1605]],
      [[64965, 64965], "mapped", [1589, 1605, 1605]],
      [[64966, 64966], "mapped", [1587, 1582, 1610]],
      [[64967, 64967], "mapped", [1606, 1580, 1610]],
      [[64968, 64975], "disallowed"],
      [[64976, 65007], "disallowed"],
      [[65008, 65008], "mapped", [1589, 1604, 1746]],
      [[65009, 65009], "mapped", [1602, 1604, 1746]],
      [[65010, 65010], "mapped", [1575, 1604, 1604, 1607]],
      [[65011, 65011], "mapped", [1575, 1603, 1576, 1585]],
      [[65012, 65012], "mapped", [1605, 1581, 1605, 1583]],
      [[65013, 65013], "mapped", [1589, 1604, 1593, 1605]],
      [[65014, 65014], "mapped", [1585, 1587, 1608, 1604]],
      [[65015, 65015], "mapped", [1593, 1604, 1610, 1607]],
      [[65016, 65016], "mapped", [1608, 1587, 1604, 1605]],
      [[65017, 65017], "mapped", [1589, 1604, 1609]],
      [
        [65018, 65018],
        "disallowed_STD3_mapped",
        [
          1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604, 1610,
          1607, 32, 1608, 1587, 1604, 1605,
        ],
      ],
      [
        [65019, 65019],
        "disallowed_STD3_mapped",
        [1580, 1604, 32, 1580, 1604, 1575, 1604, 1607],
      ],
      [[65020, 65020], "mapped", [1585, 1740, 1575, 1604]],
      [[65021, 65021], "valid", [], "NV8"],
      [[65022, 65023], "disallowed"],
      [[65024, 65039], "ignored"],
      [[65040, 65040], "disallowed_STD3_mapped", [44]],
      [[65041, 65041], "mapped", [12289]],
      [[65042, 65042], "disallowed"],
      [[65043, 65043], "disallowed_STD3_mapped", [58]],
      [[65044, 65044], "disallowed_STD3_mapped", [59]],
      [[65045, 65045], "disallowed_STD3_mapped", [33]],
      [[65046, 65046], "disallowed_STD3_mapped", [63]],
      [[65047, 65047], "mapped", [12310]],
      [[65048, 65048], "mapped", [12311]],
      [[65049, 65049], "disallowed"],
      [[65050, 65055], "disallowed"],
      [[65056, 65059], "valid"],
      [[65060, 65062], "valid"],
      [[65063, 65069], "valid"],
      [[65070, 65071], "valid"],
      [[65072, 65072], "disallowed"],
      [[65073, 65073], "mapped", [8212]],
      [[65074, 65074], "mapped", [8211]],
      [[65075, 65076], "disallowed_STD3_mapped", [95]],
      [[65077, 65077], "disallowed_STD3_mapped", [40]],
      [[65078, 65078], "disallowed_STD3_mapped", [41]],
      [[65079, 65079], "disallowed_STD3_mapped", [123]],
      [[65080, 65080], "disallowed_STD3_mapped", [125]],
      [[65081, 65081], "mapped", [12308]],
      [[65082, 65082], "mapped", [12309]],
      [[65083, 65083], "mapped", [12304]],
      [[65084, 65084], "mapped", [12305]],
      [[65085, 65085], "mapped", [12298]],
      [[65086, 65086], "mapped", [12299]],
      [[65087, 65087], "mapped", [12296]],
      [[65088, 65088], "mapped", [12297]],
      [[65089, 65089], "mapped", [12300]],
      [[65090, 65090], "mapped", [12301]],
      [[65091, 65091], "mapped", [12302]],
      [[65092, 65092], "mapped", [12303]],
      [[65093, 65094], "valid", [], "NV8"],
      [[65095, 65095], "disallowed_STD3_mapped", [91]],
      [[65096, 65096], "disallowed_STD3_mapped", [93]],
      [[65097, 65100], "disallowed_STD3_mapped", [32, 773]],
      [[65101, 65103], "disallowed_STD3_mapped", [95]],
      [[65104, 65104], "disallowed_STD3_mapped", [44]],
      [[65105, 65105], "mapped", [12289]],
      [[65106, 65106], "disallowed"],
      [[65107, 65107], "disallowed"],
      [[65108, 65108], "disallowed_STD3_mapped", [59]],
      [[65109, 65109], "disallowed_STD3_mapped", [58]],
      [[65110, 65110], "disallowed_STD3_mapped", [63]],
      [[65111, 65111], "disallowed_STD3_mapped", [33]],
      [[65112, 65112], "mapped", [8212]],
      [[65113, 65113], "disallowed_STD3_mapped", [40]],
      [[65114, 65114], "disallowed_STD3_mapped", [41]],
      [[65115, 65115], "disallowed_STD3_mapped", [123]],
      [[65116, 65116], "disallowed_STD3_mapped", [125]],
      [[65117, 65117], "mapped", [12308]],
      [[65118, 65118], "mapped", [12309]],
      [[65119, 65119], "disallowed_STD3_mapped", [35]],
      [[65120, 65120], "disallowed_STD3_mapped", [38]],
      [[65121, 65121], "disallowed_STD3_mapped", [42]],
      [[65122, 65122], "disallowed_STD3_mapped", [43]],
      [[65123, 65123], "mapped", [45]],
      [[65124, 65124], "disallowed_STD3_mapped", [60]],
      [[65125, 65125], "disallowed_STD3_mapped", [62]],
      [[65126, 65126], "disallowed_STD3_mapped", [61]],
      [[65127, 65127], "disallowed"],
      [[65128, 65128], "disallowed_STD3_mapped", [92]],
      [[65129, 65129], "disallowed_STD3_mapped", [36]],
      [[65130, 65130], "disallowed_STD3_mapped", [37]],
      [[65131, 65131], "disallowed_STD3_mapped", [64]],
      [[65132, 65135], "disallowed"],
      [[65136, 65136], "disallowed_STD3_mapped", [32, 1611]],
      [[65137, 65137], "mapped", [1600, 1611]],
      [[65138, 65138], "disallowed_STD3_mapped", [32, 1612]],
      [[65139, 65139], "valid"],
      [[65140, 65140], "disallowed_STD3_mapped", [32, 1613]],
      [[65141, 65141], "disallowed"],
      [[65142, 65142], "disallowed_STD3_mapped", [32, 1614]],
      [[65143, 65143], "mapped", [1600, 1614]],
      [[65144, 65144], "disallowed_STD3_mapped", [32, 1615]],
      [[65145, 65145], "mapped", [1600, 1615]],
      [[65146, 65146], "disallowed_STD3_mapped", [32, 1616]],
      [[65147, 65147], "mapped", [1600, 1616]],
      [[65148, 65148], "disallowed_STD3_mapped", [32, 1617]],
      [[65149, 65149], "mapped", [1600, 1617]],
      [[65150, 65150], "disallowed_STD3_mapped", [32, 1618]],
      [[65151, 65151], "mapped", [1600, 1618]],
      [[65152, 65152], "mapped", [1569]],
      [[65153, 65154], "mapped", [1570]],
      [[65155, 65156], "mapped", [1571]],
      [[65157, 65158], "mapped", [1572]],
      [[65159, 65160], "mapped", [1573]],
      [[65161, 65164], "mapped", [1574]],
      [[65165, 65166], "mapped", [1575]],
      [[65167, 65170], "mapped", [1576]],
      [[65171, 65172], "mapped", [1577]],
      [[65173, 65176], "mapped", [1578]],
      [[65177, 65180], "mapped", [1579]],
      [[65181, 65184], "mapped", [1580]],
      [[65185, 65188], "mapped", [1581]],
      [[65189, 65192], "mapped", [1582]],
      [[65193, 65194], "mapped", [1583]],
      [[65195, 65196], "mapped", [1584]],
      [[65197, 65198], "mapped", [1585]],
      [[65199, 65200], "mapped", [1586]],
      [[65201, 65204], "mapped", [1587]],
      [[65205, 65208], "mapped", [1588]],
      [[65209, 65212], "mapped", [1589]],
      [[65213, 65216], "mapped", [1590]],
      [[65217, 65220], "mapped", [1591]],
      [[65221, 65224], "mapped", [1592]],
      [[65225, 65228], "mapped", [1593]],
      [[65229, 65232], "mapped", [1594]],
      [[65233, 65236], "mapped", [1601]],
      [[65237, 65240], "mapped", [1602]],
      [[65241, 65244], "mapped", [1603]],
      [[65245, 65248], "mapped", [1604]],
      [[65249, 65252], "mapped", [1605]],
      [[65253, 65256], "mapped", [1606]],
      [[65257, 65260], "mapped", [1607]],
      [[65261, 65262], "mapped", [1608]],
      [[65263, 65264], "mapped", [1609]],
      [[65265, 65268], "mapped", [1610]],
      [[65269, 65270], "mapped", [1604, 1570]],
      [[65271, 65272], "mapped", [1604, 1571]],
      [[65273, 65274], "mapped", [1604, 1573]],
      [[65275, 65276], "mapped", [1604, 1575]],
      [[65277, 65278], "disallowed"],
      [[65279, 65279], "ignored"],
      [[65280, 65280], "disallowed"],
      [[65281, 65281], "disallowed_STD3_mapped", [33]],
      [[65282, 65282], "disallowed_STD3_mapped", [34]],
      [[65283, 65283], "disallowed_STD3_mapped", [35]],
      [[65284, 65284], "disallowed_STD3_mapped", [36]],
      [[65285, 65285], "disallowed_STD3_mapped", [37]],
      [[65286, 65286], "disallowed_STD3_mapped", [38]],
      [[65287, 65287], "disallowed_STD3_mapped", [39]],
      [[65288, 65288], "disallowed_STD3_mapped", [40]],
      [[65289, 65289], "disallowed_STD3_mapped", [41]],
      [[65290, 65290], "disallowed_STD3_mapped", [42]],
      [[65291, 65291], "disallowed_STD3_mapped", [43]],
      [[65292, 65292], "disallowed_STD3_mapped", [44]],
      [[65293, 65293], "mapped", [45]],
      [[65294, 65294], "mapped", [46]],
      [[65295, 65295], "disallowed_STD3_mapped", [47]],
      [[65296, 65296], "mapped", [48]],
      [[65297, 65297], "mapped", [49]],
      [[65298, 65298], "mapped", [50]],
      [[65299, 65299], "mapped", [51]],
      [[65300, 65300], "mapped", [52]],
      [[65301, 65301], "mapped", [53]],
      [[65302, 65302], "mapped", [54]],
      [[65303, 65303], "mapped", [55]],
      [[65304, 65304], "mapped", [56]],
      [[65305, 65305], "mapped", [57]],
      [[65306, 65306], "disallowed_STD3_mapped", [58]],
      [[65307, 65307], "disallowed_STD3_mapped", [59]],
      [[65308, 65308], "disallowed_STD3_mapped", [60]],
      [[65309, 65309], "disallowed_STD3_mapped", [61]],
      [[65310, 65310], "disallowed_STD3_mapped", [62]],
      [[65311, 65311], "disallowed_STD3_mapped", [63]],
      [[65312, 65312], "disallowed_STD3_mapped", [64]],
      [[65313, 65313], "mapped", [97]],
      [[65314, 65314], "mapped", [98]],
      [[65315, 65315], "mapped", [99]],
      [[65316, 65316], "mapped", [100]],
      [[65317, 65317], "mapped", [101]],
      [[65318, 65318], "mapped", [102]],
      [[65319, 65319], "mapped", [103]],
      [[65320, 65320], "mapped", [104]],
      [[65321, 65321], "mapped", [105]],
      [[65322, 65322], "mapped", [106]],
      [[65323, 65323], "mapped", [107]],
      [[65324, 65324], "mapped", [108]],
      [[65325, 65325], "mapped", [109]],
      [[65326, 65326], "mapped", [110]],
      [[65327, 65327], "mapped", [111]],
      [[65328, 65328], "mapped", [112]],
      [[65329, 65329], "mapped", [113]],
      [[65330, 65330], "mapped", [114]],
      [[65331, 65331], "mapped", [115]],
      [[65332, 65332], "mapped", [116]],
      [[65333, 65333], "mapped", [117]],
      [[65334, 65334], "mapped", [118]],
      [[65335, 65335], "mapped", [119]],
      [[65336, 65336], "mapped", [120]],
      [[65337, 65337], "mapped", [121]],
      [[65338, 65338], "mapped", [122]],
      [[65339, 65339], "disallowed_STD3_mapped", [91]],
      [[65340, 65340], "disallowed_STD3_mapped", [92]],
      [[65341, 65341], "disallowed_STD3_mapped", [93]],
      [[65342, 65342], "disallowed_STD3_mapped", [94]],
      [[65343, 65343], "disallowed_STD3_mapped", [95]],
      [[65344, 65344], "disallowed_STD3_mapped", [96]],
      [[65345, 65345], "mapped", [97]],
      [[65346, 65346], "mapped", [98]],
      [[65347, 65347], "mapped", [99]],
      [[65348, 65348], "mapped", [100]],
      [[65349, 65349], "mapped", [101]],
      [[65350, 65350], "mapped", [102]],
      [[65351, 65351], "mapped", [103]],
      [[65352, 65352], "mapped", [104]],
      [[65353, 65353], "mapped", [105]],
      [[65354, 65354], "mapped", [106]],
      [[65355, 65355], "mapped", [107]],
      [[65356, 65356], "mapped", [108]],
      [[65357, 65357], "mapped", [109]],
      [[65358, 65358], "mapped", [110]],
      [[65359, 65359], "mapped", [111]],
      [[65360, 65360], "mapped", [112]],
      [[65361, 65361], "mapped", [113]],
      [[65362, 65362], "mapped", [114]],
      [[65363, 65363], "mapped", [115]],
      [[65364, 65364], "mapped", [116]],
      [[65365, 65365], "mapped", [117]],
      [[65366, 65366], "mapped", [118]],
      [[65367, 65367], "mapped", [119]],
      [[65368, 65368], "mapped", [120]],
      [[65369, 65369], "mapped", [121]],
      [[65370, 65370], "mapped", [122]],
      [[65371, 65371], "disallowed_STD3_mapped", [123]],
      [[65372, 65372], "disallowed_STD3_mapped", [124]],
      [[65373, 65373], "disallowed_STD3_mapped", [125]],
      [[65374, 65374], "disallowed_STD3_mapped", [126]],
      [[65375, 65375], "mapped", [10629]],
      [[65376, 65376], "mapped", [10630]],
      [[65377, 65377], "mapped", [46]],
      [[65378, 65378], "mapped", [12300]],
      [[65379, 65379], "mapped", [12301]],
      [[65380, 65380], "mapped", [12289]],
      [[65381, 65381], "mapped", [12539]],
      [[65382, 65382], "mapped", [12530]],
      [[65383, 65383], "mapped", [12449]],
      [[65384, 65384], "mapped", [12451]],
      [[65385, 65385], "mapped", [12453]],
      [[65386, 65386], "mapped", [12455]],
      [[65387, 65387], "mapped", [12457]],
      [[65388, 65388], "mapped", [12515]],
      [[65389, 65389], "mapped", [12517]],
      [[65390, 65390], "mapped", [12519]],
      [[65391, 65391], "mapped", [12483]],
      [[65392, 65392], "mapped", [12540]],
      [[65393, 65393], "mapped", [12450]],
      [[65394, 65394], "mapped", [12452]],
      [[65395, 65395], "mapped", [12454]],
      [[65396, 65396], "mapped", [12456]],
      [[65397, 65397], "mapped", [12458]],
      [[65398, 65398], "mapped", [12459]],
      [[65399, 65399], "mapped", [12461]],
      [[65400, 65400], "mapped", [12463]],
      [[65401, 65401], "mapped", [12465]],
      [[65402, 65402], "mapped", [12467]],
      [[65403, 65403], "mapped", [12469]],
      [[65404, 65404], "mapped", [12471]],
      [[65405, 65405], "mapped", [12473]],
      [[65406, 65406], "mapped", [12475]],
      [[65407, 65407], "mapped", [12477]],
      [[65408, 65408], "mapped", [12479]],
      [[65409, 65409], "mapped", [12481]],
      [[65410, 65410], "mapped", [12484]],
      [[65411, 65411], "mapped", [12486]],
      [[65412, 65412], "mapped", [12488]],
      [[65413, 65413], "mapped", [12490]],
      [[65414, 65414], "mapped", [12491]],
      [[65415, 65415], "mapped", [12492]],
      [[65416, 65416], "mapped", [12493]],
      [[65417, 65417], "mapped", [12494]],
      [[65418, 65418], "mapped", [12495]],
      [[65419, 65419], "mapped", [12498]],
      [[65420, 65420], "mapped", [12501]],
      [[65421, 65421], "mapped", [12504]],
      [[65422, 65422], "mapped", [12507]],
      [[65423, 65423], "mapped", [12510]],
      [[65424, 65424], "mapped", [12511]],
      [[65425, 65425], "mapped", [12512]],
      [[65426, 65426], "mapped", [12513]],
      [[65427, 65427], "mapped", [12514]],
      [[65428, 65428], "mapped", [12516]],
      [[65429, 65429], "mapped", [12518]],
      [[65430, 65430], "mapped", [12520]],
      [[65431, 65431], "mapped", [12521]],
      [[65432, 65432], "mapped", [12522]],
      [[65433, 65433], "mapped", [12523]],
      [[65434, 65434], "mapped", [12524]],
      [[65435, 65435], "mapped", [12525]],
      [[65436, 65436], "mapped", [12527]],
      [[65437, 65437], "mapped", [12531]],
      [[65438, 65438], "mapped", [12441]],
      [[65439, 65439], "mapped", [12442]],
      [[65440, 65440], "disallowed"],
      [[65441, 65441], "mapped", [4352]],
      [[65442, 65442], "mapped", [4353]],
      [[65443, 65443], "mapped", [4522]],
      [[65444, 65444], "mapped", [4354]],
      [[65445, 65445], "mapped", [4524]],
      [[65446, 65446], "mapped", [4525]],
      [[65447, 65447], "mapped", [4355]],
      [[65448, 65448], "mapped", [4356]],
      [[65449, 65449], "mapped", [4357]],
      [[65450, 65450], "mapped", [4528]],
      [[65451, 65451], "mapped", [4529]],
      [[65452, 65452], "mapped", [4530]],
      [[65453, 65453], "mapped", [4531]],
      [[65454, 65454], "mapped", [4532]],
      [[65455, 65455], "mapped", [4533]],
      [[65456, 65456], "mapped", [4378]],
      [[65457, 65457], "mapped", [4358]],
      [[65458, 65458], "mapped", [4359]],
      [[65459, 65459], "mapped", [4360]],
      [[65460, 65460], "mapped", [4385]],
      [[65461, 65461], "mapped", [4361]],
      [[65462, 65462], "mapped", [4362]],
      [[65463, 65463], "mapped", [4363]],
      [[65464, 65464], "mapped", [4364]],
      [[65465, 65465], "mapped", [4365]],
      [[65466, 65466], "mapped", [4366]],
      [[65467, 65467], "mapped", [4367]],
      [[65468, 65468], "mapped", [4368]],
      [[65469, 65469], "mapped", [4369]],
      [[65470, 65470], "mapped", [4370]],
      [[65471, 65473], "disallowed"],
      [[65474, 65474], "mapped", [4449]],
      [[65475, 65475], "mapped", [4450]],
      [[65476, 65476], "mapped", [4451]],
      [[65477, 65477], "mapped", [4452]],
      [[65478, 65478], "mapped", [4453]],
      [[65479, 65479], "mapped", [4454]],
      [[65480, 65481], "disallowed"],
      [[65482, 65482], "mapped", [4455]],
      [[65483, 65483], "mapped", [4456]],
      [[65484, 65484], "mapped", [4457]],
      [[65485, 65485], "mapped", [4458]],
      [[65486, 65486], "mapped", [4459]],
      [[65487, 65487], "mapped", [4460]],
      [[65488, 65489], "disallowed"],
      [[65490, 65490], "mapped", [4461]],
      [[65491, 65491], "mapped", [4462]],
      [[65492, 65492], "mapped", [4463]],
      [[65493, 65493], "mapped", [4464]],
      [[65494, 65494], "mapped", [4465]],
      [[65495, 65495], "mapped", [4466]],
      [[65496, 65497], "disallowed"],
      [[65498, 65498], "mapped", [4467]],
      [[65499, 65499], "mapped", [4468]],
      [[65500, 65500], "mapped", [4469]],
      [[65501, 65503], "disallowed"],
      [[65504, 65504], "mapped", [162]],
      [[65505, 65505], "mapped", [163]],
      [[65506, 65506], "mapped", [172]],
      [[65507, 65507], "disallowed_STD3_mapped", [32, 772]],
      [[65508, 65508], "mapped", [166]],
      [[65509, 65509], "mapped", [165]],
      [[65510, 65510], "mapped", [8361]],
      [[65511, 65511], "disallowed"],
      [[65512, 65512], "mapped", [9474]],
      [[65513, 65513], "mapped", [8592]],
      [[65514, 65514], "mapped", [8593]],
      [[65515, 65515], "mapped", [8594]],
      [[65516, 65516], "mapped", [8595]],
      [[65517, 65517], "mapped", [9632]],
      [[65518, 65518], "mapped", [9675]],
      [[65519, 65528], "disallowed"],
      [[65529, 65531], "disallowed"],
      [[65532, 65532], "disallowed"],
      [[65533, 65533], "disallowed"],
      [[65534, 65535], "disallowed"],
      [[65536, 65547], "valid"],
      [[65548, 65548], "disallowed"],
      [[65549, 65574], "valid"],
      [[65575, 65575], "disallowed"],
      [[65576, 65594], "valid"],
      [[65595, 65595], "disallowed"],
      [[65596, 65597], "valid"],
      [[65598, 65598], "disallowed"],
      [[65599, 65613], "valid"],
      [[65614, 65615], "disallowed"],
      [[65616, 65629], "valid"],
      [[65630, 65663], "disallowed"],
      [[65664, 65786], "valid"],
      [[65787, 65791], "disallowed"],
      [[65792, 65794], "valid", [], "NV8"],
      [[65795, 65798], "disallowed"],
      [[65799, 65843], "valid", [], "NV8"],
      [[65844, 65846], "disallowed"],
      [[65847, 65855], "valid", [], "NV8"],
      [[65856, 65930], "valid", [], "NV8"],
      [[65931, 65932], "valid", [], "NV8"],
      [[65933, 65935], "disallowed"],
      [[65936, 65947], "valid", [], "NV8"],
      [[65948, 65951], "disallowed"],
      [[65952, 65952], "valid", [], "NV8"],
      [[65953, 65999], "disallowed"],
      [[66e3, 66044], "valid", [], "NV8"],
      [[66045, 66045], "valid"],
      [[66046, 66175], "disallowed"],
      [[66176, 66204], "valid"],
      [[66205, 66207], "disallowed"],
      [[66208, 66256], "valid"],
      [[66257, 66271], "disallowed"],
      [[66272, 66272], "valid"],
      [[66273, 66299], "valid", [], "NV8"],
      [[66300, 66303], "disallowed"],
      [[66304, 66334], "valid"],
      [[66335, 66335], "valid"],
      [[66336, 66339], "valid", [], "NV8"],
      [[66340, 66351], "disallowed"],
      [[66352, 66368], "valid"],
      [[66369, 66369], "valid", [], "NV8"],
      [[66370, 66377], "valid"],
      [[66378, 66378], "valid", [], "NV8"],
      [[66379, 66383], "disallowed"],
      [[66384, 66426], "valid"],
      [[66427, 66431], "disallowed"],
      [[66432, 66461], "valid"],
      [[66462, 66462], "disallowed"],
      [[66463, 66463], "valid", [], "NV8"],
      [[66464, 66499], "valid"],
      [[66500, 66503], "disallowed"],
      [[66504, 66511], "valid"],
      [[66512, 66517], "valid", [], "NV8"],
      [[66518, 66559], "disallowed"],
      [[66560, 66560], "mapped", [66600]],
      [[66561, 66561], "mapped", [66601]],
      [[66562, 66562], "mapped", [66602]],
      [[66563, 66563], "mapped", [66603]],
      [[66564, 66564], "mapped", [66604]],
      [[66565, 66565], "mapped", [66605]],
      [[66566, 66566], "mapped", [66606]],
      [[66567, 66567], "mapped", [66607]],
      [[66568, 66568], "mapped", [66608]],
      [[66569, 66569], "mapped", [66609]],
      [[66570, 66570], "mapped", [66610]],
      [[66571, 66571], "mapped", [66611]],
      [[66572, 66572], "mapped", [66612]],
      [[66573, 66573], "mapped", [66613]],
      [[66574, 66574], "mapped", [66614]],
      [[66575, 66575], "mapped", [66615]],
      [[66576, 66576], "mapped", [66616]],
      [[66577, 66577], "mapped", [66617]],
      [[66578, 66578], "mapped", [66618]],
      [[66579, 66579], "mapped", [66619]],
      [[66580, 66580], "mapped", [66620]],
      [[66581, 66581], "mapped", [66621]],
      [[66582, 66582], "mapped", [66622]],
      [[66583, 66583], "mapped", [66623]],
      [[66584, 66584], "mapped", [66624]],
      [[66585, 66585], "mapped", [66625]],
      [[66586, 66586], "mapped", [66626]],
      [[66587, 66587], "mapped", [66627]],
      [[66588, 66588], "mapped", [66628]],
      [[66589, 66589], "mapped", [66629]],
      [[66590, 66590], "mapped", [66630]],
      [[66591, 66591], "mapped", [66631]],
      [[66592, 66592], "mapped", [66632]],
      [[66593, 66593], "mapped", [66633]],
      [[66594, 66594], "mapped", [66634]],
      [[66595, 66595], "mapped", [66635]],
      [[66596, 66596], "mapped", [66636]],
      [[66597, 66597], "mapped", [66637]],
      [[66598, 66598], "mapped", [66638]],
      [[66599, 66599], "mapped", [66639]],
      [[66600, 66637], "valid"],
      [[66638, 66717], "valid"],
      [[66718, 66719], "disallowed"],
      [[66720, 66729], "valid"],
      [[66730, 66815], "disallowed"],
      [[66816, 66855], "valid"],
      [[66856, 66863], "disallowed"],
      [[66864, 66915], "valid"],
      [[66916, 66926], "disallowed"],
      [[66927, 66927], "valid", [], "NV8"],
      [[66928, 67071], "disallowed"],
      [[67072, 67382], "valid"],
      [[67383, 67391], "disallowed"],
      [[67392, 67413], "valid"],
      [[67414, 67423], "disallowed"],
      [[67424, 67431], "valid"],
      [[67432, 67583], "disallowed"],
      [[67584, 67589], "valid"],
      [[67590, 67591], "disallowed"],
      [[67592, 67592], "valid"],
      [[67593, 67593], "disallowed"],
      [[67594, 67637], "valid"],
      [[67638, 67638], "disallowed"],
      [[67639, 67640], "valid"],
      [[67641, 67643], "disallowed"],
      [[67644, 67644], "valid"],
      [[67645, 67646], "disallowed"],
      [[67647, 67647], "valid"],
      [[67648, 67669], "valid"],
      [[67670, 67670], "disallowed"],
      [[67671, 67679], "valid", [], "NV8"],
      [[67680, 67702], "valid"],
      [[67703, 67711], "valid", [], "NV8"],
      [[67712, 67742], "valid"],
      [[67743, 67750], "disallowed"],
      [[67751, 67759], "valid", [], "NV8"],
      [[67760, 67807], "disallowed"],
      [[67808, 67826], "valid"],
      [[67827, 67827], "disallowed"],
      [[67828, 67829], "valid"],
      [[67830, 67834], "disallowed"],
      [[67835, 67839], "valid", [], "NV8"],
      [[67840, 67861], "valid"],
      [[67862, 67865], "valid", [], "NV8"],
      [[67866, 67867], "valid", [], "NV8"],
      [[67868, 67870], "disallowed"],
      [[67871, 67871], "valid", [], "NV8"],
      [[67872, 67897], "valid"],
      [[67898, 67902], "disallowed"],
      [[67903, 67903], "valid", [], "NV8"],
      [[67904, 67967], "disallowed"],
      [[67968, 68023], "valid"],
      [[68024, 68027], "disallowed"],
      [[68028, 68029], "valid", [], "NV8"],
      [[68030, 68031], "valid"],
      [[68032, 68047], "valid", [], "NV8"],
      [[68048, 68049], "disallowed"],
      [[68050, 68095], "valid", [], "NV8"],
      [[68096, 68099], "valid"],
      [[68100, 68100], "disallowed"],
      [[68101, 68102], "valid"],
      [[68103, 68107], "disallowed"],
      [[68108, 68115], "valid"],
      [[68116, 68116], "disallowed"],
      [[68117, 68119], "valid"],
      [[68120, 68120], "disallowed"],
      [[68121, 68147], "valid"],
      [[68148, 68151], "disallowed"],
      [[68152, 68154], "valid"],
      [[68155, 68158], "disallowed"],
      [[68159, 68159], "valid"],
      [[68160, 68167], "valid", [], "NV8"],
      [[68168, 68175], "disallowed"],
      [[68176, 68184], "valid", [], "NV8"],
      [[68185, 68191], "disallowed"],
      [[68192, 68220], "valid"],
      [[68221, 68223], "valid", [], "NV8"],
      [[68224, 68252], "valid"],
      [[68253, 68255], "valid", [], "NV8"],
      [[68256, 68287], "disallowed"],
      [[68288, 68295], "valid"],
      [[68296, 68296], "valid", [], "NV8"],
      [[68297, 68326], "valid"],
      [[68327, 68330], "disallowed"],
      [[68331, 68342], "valid", [], "NV8"],
      [[68343, 68351], "disallowed"],
      [[68352, 68405], "valid"],
      [[68406, 68408], "disallowed"],
      [[68409, 68415], "valid", [], "NV8"],
      [[68416, 68437], "valid"],
      [[68438, 68439], "disallowed"],
      [[68440, 68447], "valid", [], "NV8"],
      [[68448, 68466], "valid"],
      [[68467, 68471], "disallowed"],
      [[68472, 68479], "valid", [], "NV8"],
      [[68480, 68497], "valid"],
      [[68498, 68504], "disallowed"],
      [[68505, 68508], "valid", [], "NV8"],
      [[68509, 68520], "disallowed"],
      [[68521, 68527], "valid", [], "NV8"],
      [[68528, 68607], "disallowed"],
      [[68608, 68680], "valid"],
      [[68681, 68735], "disallowed"],
      [[68736, 68736], "mapped", [68800]],
      [[68737, 68737], "mapped", [68801]],
      [[68738, 68738], "mapped", [68802]],
      [[68739, 68739], "mapped", [68803]],
      [[68740, 68740], "mapped", [68804]],
      [[68741, 68741], "mapped", [68805]],
      [[68742, 68742], "mapped", [68806]],
      [[68743, 68743], "mapped", [68807]],
      [[68744, 68744], "mapped", [68808]],
      [[68745, 68745], "mapped", [68809]],
      [[68746, 68746], "mapped", [68810]],
      [[68747, 68747], "mapped", [68811]],
      [[68748, 68748], "mapped", [68812]],
      [[68749, 68749], "mapped", [68813]],
      [[68750, 68750], "mapped", [68814]],
      [[68751, 68751], "mapped", [68815]],
      [[68752, 68752], "mapped", [68816]],
      [[68753, 68753], "mapped", [68817]],
      [[68754, 68754], "mapped", [68818]],
      [[68755, 68755], "mapped", [68819]],
      [[68756, 68756], "mapped", [68820]],
      [[68757, 68757], "mapped", [68821]],
      [[68758, 68758], "mapped", [68822]],
      [[68759, 68759], "mapped", [68823]],
      [[68760, 68760], "mapped", [68824]],
      [[68761, 68761], "mapped", [68825]],
      [[68762, 68762], "mapped", [68826]],
      [[68763, 68763], "mapped", [68827]],
      [[68764, 68764], "mapped", [68828]],
      [[68765, 68765], "mapped", [68829]],
      [[68766, 68766], "mapped", [68830]],
      [[68767, 68767], "mapped", [68831]],
      [[68768, 68768], "mapped", [68832]],
      [[68769, 68769], "mapped", [68833]],
      [[68770, 68770], "mapped", [68834]],
      [[68771, 68771], "mapped", [68835]],
      [[68772, 68772], "mapped", [68836]],
      [[68773, 68773], "mapped", [68837]],
      [[68774, 68774], "mapped", [68838]],
      [[68775, 68775], "mapped", [68839]],
      [[68776, 68776], "mapped", [68840]],
      [[68777, 68777], "mapped", [68841]],
      [[68778, 68778], "mapped", [68842]],
      [[68779, 68779], "mapped", [68843]],
      [[68780, 68780], "mapped", [68844]],
      [[68781, 68781], "mapped", [68845]],
      [[68782, 68782], "mapped", [68846]],
      [[68783, 68783], "mapped", [68847]],
      [[68784, 68784], "mapped", [68848]],
      [[68785, 68785], "mapped", [68849]],
      [[68786, 68786], "mapped", [68850]],
      [[68787, 68799], "disallowed"],
      [[68800, 68850], "valid"],
      [[68851, 68857], "disallowed"],
      [[68858, 68863], "valid", [], "NV8"],
      [[68864, 69215], "disallowed"],
      [[69216, 69246], "valid", [], "NV8"],
      [[69247, 69631], "disallowed"],
      [[69632, 69702], "valid"],
      [[69703, 69709], "valid", [], "NV8"],
      [[69710, 69713], "disallowed"],
      [[69714, 69733], "valid", [], "NV8"],
      [[69734, 69743], "valid"],
      [[69744, 69758], "disallowed"],
      [[69759, 69759], "valid"],
      [[69760, 69818], "valid"],
      [[69819, 69820], "valid", [], "NV8"],
      [[69821, 69821], "disallowed"],
      [[69822, 69825], "valid", [], "NV8"],
      [[69826, 69839], "disallowed"],
      [[69840, 69864], "valid"],
      [[69865, 69871], "disallowed"],
      [[69872, 69881], "valid"],
      [[69882, 69887], "disallowed"],
      [[69888, 69940], "valid"],
      [[69941, 69941], "disallowed"],
      [[69942, 69951], "valid"],
      [[69952, 69955], "valid", [], "NV8"],
      [[69956, 69967], "disallowed"],
      [[69968, 70003], "valid"],
      [[70004, 70005], "valid", [], "NV8"],
      [[70006, 70006], "valid"],
      [[70007, 70015], "disallowed"],
      [[70016, 70084], "valid"],
      [[70085, 70088], "valid", [], "NV8"],
      [[70089, 70089], "valid", [], "NV8"],
      [[70090, 70092], "valid"],
      [[70093, 70093], "valid", [], "NV8"],
      [[70094, 70095], "disallowed"],
      [[70096, 70105], "valid"],
      [[70106, 70106], "valid"],
      [[70107, 70107], "valid", [], "NV8"],
      [[70108, 70108], "valid"],
      [[70109, 70111], "valid", [], "NV8"],
      [[70112, 70112], "disallowed"],
      [[70113, 70132], "valid", [], "NV8"],
      [[70133, 70143], "disallowed"],
      [[70144, 70161], "valid"],
      [[70162, 70162], "disallowed"],
      [[70163, 70199], "valid"],
      [[70200, 70205], "valid", [], "NV8"],
      [[70206, 70271], "disallowed"],
      [[70272, 70278], "valid"],
      [[70279, 70279], "disallowed"],
      [[70280, 70280], "valid"],
      [[70281, 70281], "disallowed"],
      [[70282, 70285], "valid"],
      [[70286, 70286], "disallowed"],
      [[70287, 70301], "valid"],
      [[70302, 70302], "disallowed"],
      [[70303, 70312], "valid"],
      [[70313, 70313], "valid", [], "NV8"],
      [[70314, 70319], "disallowed"],
      [[70320, 70378], "valid"],
      [[70379, 70383], "disallowed"],
      [[70384, 70393], "valid"],
      [[70394, 70399], "disallowed"],
      [[70400, 70400], "valid"],
      [[70401, 70403], "valid"],
      [[70404, 70404], "disallowed"],
      [[70405, 70412], "valid"],
      [[70413, 70414], "disallowed"],
      [[70415, 70416], "valid"],
      [[70417, 70418], "disallowed"],
      [[70419, 70440], "valid"],
      [[70441, 70441], "disallowed"],
      [[70442, 70448], "valid"],
      [[70449, 70449], "disallowed"],
      [[70450, 70451], "valid"],
      [[70452, 70452], "disallowed"],
      [[70453, 70457], "valid"],
      [[70458, 70459], "disallowed"],
      [[70460, 70468], "valid"],
      [[70469, 70470], "disallowed"],
      [[70471, 70472], "valid"],
      [[70473, 70474], "disallowed"],
      [[70475, 70477], "valid"],
      [[70478, 70479], "disallowed"],
      [[70480, 70480], "valid"],
      [[70481, 70486], "disallowed"],
      [[70487, 70487], "valid"],
      [[70488, 70492], "disallowed"],
      [[70493, 70499], "valid"],
      [[70500, 70501], "disallowed"],
      [[70502, 70508], "valid"],
      [[70509, 70511], "disallowed"],
      [[70512, 70516], "valid"],
      [[70517, 70783], "disallowed"],
      [[70784, 70853], "valid"],
      [[70854, 70854], "valid", [], "NV8"],
      [[70855, 70855], "valid"],
      [[70856, 70863], "disallowed"],
      [[70864, 70873], "valid"],
      [[70874, 71039], "disallowed"],
      [[71040, 71093], "valid"],
      [[71094, 71095], "disallowed"],
      [[71096, 71104], "valid"],
      [[71105, 71113], "valid", [], "NV8"],
      [[71114, 71127], "valid", [], "NV8"],
      [[71128, 71133], "valid"],
      [[71134, 71167], "disallowed"],
      [[71168, 71232], "valid"],
      [[71233, 71235], "valid", [], "NV8"],
      [[71236, 71236], "valid"],
      [[71237, 71247], "disallowed"],
      [[71248, 71257], "valid"],
      [[71258, 71295], "disallowed"],
      [[71296, 71351], "valid"],
      [[71352, 71359], "disallowed"],
      [[71360, 71369], "valid"],
      [[71370, 71423], "disallowed"],
      [[71424, 71449], "valid"],
      [[71450, 71452], "disallowed"],
      [[71453, 71467], "valid"],
      [[71468, 71471], "disallowed"],
      [[71472, 71481], "valid"],
      [[71482, 71487], "valid", [], "NV8"],
      [[71488, 71839], "disallowed"],
      [[71840, 71840], "mapped", [71872]],
      [[71841, 71841], "mapped", [71873]],
      [[71842, 71842], "mapped", [71874]],
      [[71843, 71843], "mapped", [71875]],
      [[71844, 71844], "mapped", [71876]],
      [[71845, 71845], "mapped", [71877]],
      [[71846, 71846], "mapped", [71878]],
      [[71847, 71847], "mapped", [71879]],
      [[71848, 71848], "mapped", [71880]],
      [[71849, 71849], "mapped", [71881]],
      [[71850, 71850], "mapped", [71882]],
      [[71851, 71851], "mapped", [71883]],
      [[71852, 71852], "mapped", [71884]],
      [[71853, 71853], "mapped", [71885]],
      [[71854, 71854], "mapped", [71886]],
      [[71855, 71855], "mapped", [71887]],
      [[71856, 71856], "mapped", [71888]],
      [[71857, 71857], "mapped", [71889]],
      [[71858, 71858], "mapped", [71890]],
      [[71859, 71859], "mapped", [71891]],
      [[71860, 71860], "mapped", [71892]],
      [[71861, 71861], "mapped", [71893]],
      [[71862, 71862], "mapped", [71894]],
      [[71863, 71863], "mapped", [71895]],
      [[71864, 71864], "mapped", [71896]],
      [[71865, 71865], "mapped", [71897]],
      [[71866, 71866], "mapped", [71898]],
      [[71867, 71867], "mapped", [71899]],
      [[71868, 71868], "mapped", [71900]],
      [[71869, 71869], "mapped", [71901]],
      [[71870, 71870], "mapped", [71902]],
      [[71871, 71871], "mapped", [71903]],
      [[71872, 71913], "valid"],
      [[71914, 71922], "valid", [], "NV8"],
      [[71923, 71934], "disallowed"],
      [[71935, 71935], "valid"],
      [[71936, 72383], "disallowed"],
      [[72384, 72440], "valid"],
      [[72441, 73727], "disallowed"],
      [[73728, 74606], "valid"],
      [[74607, 74648], "valid"],
      [[74649, 74649], "valid"],
      [[74650, 74751], "disallowed"],
      [[74752, 74850], "valid", [], "NV8"],
      [[74851, 74862], "valid", [], "NV8"],
      [[74863, 74863], "disallowed"],
      [[74864, 74867], "valid", [], "NV8"],
      [[74868, 74868], "valid", [], "NV8"],
      [[74869, 74879], "disallowed"],
      [[74880, 75075], "valid"],
      [[75076, 77823], "disallowed"],
      [[77824, 78894], "valid"],
      [[78895, 82943], "disallowed"],
      [[82944, 83526], "valid"],
      [[83527, 92159], "disallowed"],
      [[92160, 92728], "valid"],
      [[92729, 92735], "disallowed"],
      [[92736, 92766], "valid"],
      [[92767, 92767], "disallowed"],
      [[92768, 92777], "valid"],
      [[92778, 92781], "disallowed"],
      [[92782, 92783], "valid", [], "NV8"],
      [[92784, 92879], "disallowed"],
      [[92880, 92909], "valid"],
      [[92910, 92911], "disallowed"],
      [[92912, 92916], "valid"],
      [[92917, 92917], "valid", [], "NV8"],
      [[92918, 92927], "disallowed"],
      [[92928, 92982], "valid"],
      [[92983, 92991], "valid", [], "NV8"],
      [[92992, 92995], "valid"],
      [[92996, 92997], "valid", [], "NV8"],
      [[92998, 93007], "disallowed"],
      [[93008, 93017], "valid"],
      [[93018, 93018], "disallowed"],
      [[93019, 93025], "valid", [], "NV8"],
      [[93026, 93026], "disallowed"],
      [[93027, 93047], "valid"],
      [[93048, 93052], "disallowed"],
      [[93053, 93071], "valid"],
      [[93072, 93951], "disallowed"],
      [[93952, 94020], "valid"],
      [[94021, 94031], "disallowed"],
      [[94032, 94078], "valid"],
      [[94079, 94094], "disallowed"],
      [[94095, 94111], "valid"],
      [[94112, 110591], "disallowed"],
      [[110592, 110593], "valid"],
      [[110594, 113663], "disallowed"],
      [[113664, 113770], "valid"],
      [[113771, 113775], "disallowed"],
      [[113776, 113788], "valid"],
      [[113789, 113791], "disallowed"],
      [[113792, 113800], "valid"],
      [[113801, 113807], "disallowed"],
      [[113808, 113817], "valid"],
      [[113818, 113819], "disallowed"],
      [[113820, 113820], "valid", [], "NV8"],
      [[113821, 113822], "valid"],
      [[113823, 113823], "valid", [], "NV8"],
      [[113824, 113827], "ignored"],
      [[113828, 118783], "disallowed"],
      [[118784, 119029], "valid", [], "NV8"],
      [[119030, 119039], "disallowed"],
      [[119040, 119078], "valid", [], "NV8"],
      [[119079, 119080], "disallowed"],
      [[119081, 119081], "valid", [], "NV8"],
      [[119082, 119133], "valid", [], "NV8"],
      [[119134, 119134], "mapped", [119127, 119141]],
      [[119135, 119135], "mapped", [119128, 119141]],
      [[119136, 119136], "mapped", [119128, 119141, 119150]],
      [[119137, 119137], "mapped", [119128, 119141, 119151]],
      [[119138, 119138], "mapped", [119128, 119141, 119152]],
      [[119139, 119139], "mapped", [119128, 119141, 119153]],
      [[119140, 119140], "mapped", [119128, 119141, 119154]],
      [[119141, 119154], "valid", [], "NV8"],
      [[119155, 119162], "disallowed"],
      [[119163, 119226], "valid", [], "NV8"],
      [[119227, 119227], "mapped", [119225, 119141]],
      [[119228, 119228], "mapped", [119226, 119141]],
      [[119229, 119229], "mapped", [119225, 119141, 119150]],
      [[119230, 119230], "mapped", [119226, 119141, 119150]],
      [[119231, 119231], "mapped", [119225, 119141, 119151]],
      [[119232, 119232], "mapped", [119226, 119141, 119151]],
      [[119233, 119261], "valid", [], "NV8"],
      [[119262, 119272], "valid", [], "NV8"],
      [[119273, 119295], "disallowed"],
      [[119296, 119365], "valid", [], "NV8"],
      [[119366, 119551], "disallowed"],
      [[119552, 119638], "valid", [], "NV8"],
      [[119639, 119647], "disallowed"],
      [[119648, 119665], "valid", [], "NV8"],
      [[119666, 119807], "disallowed"],
      [[119808, 119808], "mapped", [97]],
      [[119809, 119809], "mapped", [98]],
      [[119810, 119810], "mapped", [99]],
      [[119811, 119811], "mapped", [100]],
      [[119812, 119812], "mapped", [101]],
      [[119813, 119813], "mapped", [102]],
      [[119814, 119814], "mapped", [103]],
      [[119815, 119815], "mapped", [104]],
      [[119816, 119816], "mapped", [105]],
      [[119817, 119817], "mapped", [106]],
      [[119818, 119818], "mapped", [107]],
      [[119819, 119819], "mapped", [108]],
      [[119820, 119820], "mapped", [109]],
      [[119821, 119821], "mapped", [110]],
      [[119822, 119822], "mapped", [111]],
      [[119823, 119823], "mapped", [112]],
      [[119824, 119824], "mapped", [113]],
      [[119825, 119825], "mapped", [114]],
      [[119826, 119826], "mapped", [115]],
      [[119827, 119827], "mapped", [116]],
      [[119828, 119828], "mapped", [117]],
      [[119829, 119829], "mapped", [118]],
      [[119830, 119830], "mapped", [119]],
      [[119831, 119831], "mapped", [120]],
      [[119832, 119832], "mapped", [121]],
      [[119833, 119833], "mapped", [122]],
      [[119834, 119834], "mapped", [97]],
      [[119835, 119835], "mapped", [98]],
      [[119836, 119836], "mapped", [99]],
      [[119837, 119837], "mapped", [100]],
      [[119838, 119838], "mapped", [101]],
      [[119839, 119839], "mapped", [102]],
      [[119840, 119840], "mapped", [103]],
      [[119841, 119841], "mapped", [104]],
      [[119842, 119842], "mapped", [105]],
      [[119843, 119843], "mapped", [106]],
      [[119844, 119844], "mapped", [107]],
      [[119845, 119845], "mapped", [108]],
      [[119846, 119846], "mapped", [109]],
      [[119847, 119847], "mapped", [110]],
      [[119848, 119848], "mapped", [111]],
      [[119849, 119849], "mapped", [112]],
      [[119850, 119850], "mapped", [113]],
      [[119851, 119851], "mapped", [114]],
      [[119852, 119852], "mapped", [115]],
      [[119853, 119853], "mapped", [116]],
      [[119854, 119854], "mapped", [117]],
      [[119855, 119855], "mapped", [118]],
      [[119856, 119856], "mapped", [119]],
      [[119857, 119857], "mapped", [120]],
      [[119858, 119858], "mapped", [121]],
      [[119859, 119859], "mapped", [122]],
      [[119860, 119860], "mapped", [97]],
      [[119861, 119861], "mapped", [98]],
      [[119862, 119862], "mapped", [99]],
      [[119863, 119863], "mapped", [100]],
      [[119864, 119864], "mapped", [101]],
      [[119865, 119865], "mapped", [102]],
      [[119866, 119866], "mapped", [103]],
      [[119867, 119867], "mapped", [104]],
      [[119868, 119868], "mapped", [105]],
      [[119869, 119869], "mapped", [106]],
      [[119870, 119870], "mapped", [107]],
      [[119871, 119871], "mapped", [108]],
      [[119872, 119872], "mapped", [109]],
      [[119873, 119873], "mapped", [110]],
      [[119874, 119874], "mapped", [111]],
      [[119875, 119875], "mapped", [112]],
      [[119876, 119876], "mapped", [113]],
      [[119877, 119877], "mapped", [114]],
      [[119878, 119878], "mapped", [115]],
      [[119879, 119879], "mapped", [116]],
      [[119880, 119880], "mapped", [117]],
      [[119881, 119881], "mapped", [118]],
      [[119882, 119882], "mapped", [119]],
      [[119883, 119883], "mapped", [120]],
      [[119884, 119884], "mapped", [121]],
      [[119885, 119885], "mapped", [122]],
      [[119886, 119886], "mapped", [97]],
      [[119887, 119887], "mapped", [98]],
      [[119888, 119888], "mapped", [99]],
      [[119889, 119889], "mapped", [100]],
      [[119890, 119890], "mapped", [101]],
      [[119891, 119891], "mapped", [102]],
      [[119892, 119892], "mapped", [103]],
      [[119893, 119893], "disallowed"],
      [[119894, 119894], "mapped", [105]],
      [[119895, 119895], "mapped", [106]],
      [[119896, 119896], "mapped", [107]],
      [[119897, 119897], "mapped", [108]],
      [[119898, 119898], "mapped", [109]],
      [[119899, 119899], "mapped", [110]],
      [[119900, 119900], "mapped", [111]],
      [[119901, 119901], "mapped", [112]],
      [[119902, 119902], "mapped", [113]],
      [[119903, 119903], "mapped", [114]],
      [[119904, 119904], "mapped", [115]],
      [[119905, 119905], "mapped", [116]],
      [[119906, 119906], "mapped", [117]],
      [[119907, 119907], "mapped", [118]],
      [[119908, 119908], "mapped", [119]],
      [[119909, 119909], "mapped", [120]],
      [[119910, 119910], "mapped", [121]],
      [[119911, 119911], "mapped", [122]],
      [[119912, 119912], "mapped", [97]],
      [[119913, 119913], "mapped", [98]],
      [[119914, 119914], "mapped", [99]],
      [[119915, 119915], "mapped", [100]],
      [[119916, 119916], "mapped", [101]],
      [[119917, 119917], "mapped", [102]],
      [[119918, 119918], "mapped", [103]],
      [[119919, 119919], "mapped", [104]],
      [[119920, 119920], "mapped", [105]],
      [[119921, 119921], "mapped", [106]],
      [[119922, 119922], "mapped", [107]],
      [[119923, 119923], "mapped", [108]],
      [[119924, 119924], "mapped", [109]],
      [[119925, 119925], "mapped", [110]],
      [[119926, 119926], "mapped", [111]],
      [[119927, 119927], "mapped", [112]],
      [[119928, 119928], "mapped", [113]],
      [[119929, 119929], "mapped", [114]],
      [[119930, 119930], "mapped", [115]],
      [[119931, 119931], "mapped", [116]],
      [[119932, 119932], "mapped", [117]],
      [[119933, 119933], "mapped", [118]],
      [[119934, 119934], "mapped", [119]],
      [[119935, 119935], "mapped", [120]],
      [[119936, 119936], "mapped", [121]],
      [[119937, 119937], "mapped", [122]],
      [[119938, 119938], "mapped", [97]],
      [[119939, 119939], "mapped", [98]],
      [[119940, 119940], "mapped", [99]],
      [[119941, 119941], "mapped", [100]],
      [[119942, 119942], "mapped", [101]],
      [[119943, 119943], "mapped", [102]],
      [[119944, 119944], "mapped", [103]],
      [[119945, 119945], "mapped", [104]],
      [[119946, 119946], "mapped", [105]],
      [[119947, 119947], "mapped", [106]],
      [[119948, 119948], "mapped", [107]],
      [[119949, 119949], "mapped", [108]],
      [[119950, 119950], "mapped", [109]],
      [[119951, 119951], "mapped", [110]],
      [[119952, 119952], "mapped", [111]],
      [[119953, 119953], "mapped", [112]],
      [[119954, 119954], "mapped", [113]],
      [[119955, 119955], "mapped", [114]],
      [[119956, 119956], "mapped", [115]],
      [[119957, 119957], "mapped", [116]],
      [[119958, 119958], "mapped", [117]],
      [[119959, 119959], "mapped", [118]],
      [[119960, 119960], "mapped", [119]],
      [[119961, 119961], "mapped", [120]],
      [[119962, 119962], "mapped", [121]],
      [[119963, 119963], "mapped", [122]],
      [[119964, 119964], "mapped", [97]],
      [[119965, 119965], "disallowed"],
      [[119966, 119966], "mapped", [99]],
      [[119967, 119967], "mapped", [100]],
      [[119968, 119969], "disallowed"],
      [[119970, 119970], "mapped", [103]],
      [[119971, 119972], "disallowed"],
      [[119973, 119973], "mapped", [106]],
      [[119974, 119974], "mapped", [107]],
      [[119975, 119976], "disallowed"],
      [[119977, 119977], "mapped", [110]],
      [[119978, 119978], "mapped", [111]],
      [[119979, 119979], "mapped", [112]],
      [[119980, 119980], "mapped", [113]],
      [[119981, 119981], "disallowed"],
      [[119982, 119982], "mapped", [115]],
      [[119983, 119983], "mapped", [116]],
      [[119984, 119984], "mapped", [117]],
      [[119985, 119985], "mapped", [118]],
      [[119986, 119986], "mapped", [119]],
      [[119987, 119987], "mapped", [120]],
      [[119988, 119988], "mapped", [121]],
      [[119989, 119989], "mapped", [122]],
      [[119990, 119990], "mapped", [97]],
      [[119991, 119991], "mapped", [98]],
      [[119992, 119992], "mapped", [99]],
      [[119993, 119993], "mapped", [100]],
      [[119994, 119994], "disallowed"],
      [[119995, 119995], "mapped", [102]],
      [[119996, 119996], "disallowed"],
      [[119997, 119997], "mapped", [104]],
      [[119998, 119998], "mapped", [105]],
      [[119999, 119999], "mapped", [106]],
      [[12e4, 12e4], "mapped", [107]],
      [[120001, 120001], "mapped", [108]],
      [[120002, 120002], "mapped", [109]],
      [[120003, 120003], "mapped", [110]],
      [[120004, 120004], "disallowed"],
      [[120005, 120005], "mapped", [112]],
      [[120006, 120006], "mapped", [113]],
      [[120007, 120007], "mapped", [114]],
      [[120008, 120008], "mapped", [115]],
      [[120009, 120009], "mapped", [116]],
      [[120010, 120010], "mapped", [117]],
      [[120011, 120011], "mapped", [118]],
      [[120012, 120012], "mapped", [119]],
      [[120013, 120013], "mapped", [120]],
      [[120014, 120014], "mapped", [121]],
      [[120015, 120015], "mapped", [122]],
      [[120016, 120016], "mapped", [97]],
      [[120017, 120017], "mapped", [98]],
      [[120018, 120018], "mapped", [99]],
      [[120019, 120019], "mapped", [100]],
      [[120020, 120020], "mapped", [101]],
      [[120021, 120021], "mapped", [102]],
      [[120022, 120022], "mapped", [103]],
      [[120023, 120023], "mapped", [104]],
      [[120024, 120024], "mapped", [105]],
      [[120025, 120025], "mapped", [106]],
      [[120026, 120026], "mapped", [107]],
      [[120027, 120027], "mapped", [108]],
      [[120028, 120028], "mapped", [109]],
      [[120029, 120029], "mapped", [110]],
      [[120030, 120030], "mapped", [111]],
      [[120031, 120031], "mapped", [112]],
      [[120032, 120032], "mapped", [113]],
      [[120033, 120033], "mapped", [114]],
      [[120034, 120034], "mapped", [115]],
      [[120035, 120035], "mapped", [116]],
      [[120036, 120036], "mapped", [117]],
      [[120037, 120037], "mapped", [118]],
      [[120038, 120038], "mapped", [119]],
      [[120039, 120039], "mapped", [120]],
      [[120040, 120040], "mapped", [121]],
      [[120041, 120041], "mapped", [122]],
      [[120042, 120042], "mapped", [97]],
      [[120043, 120043], "mapped", [98]],
      [[120044, 120044], "mapped", [99]],
      [[120045, 120045], "mapped", [100]],
      [[120046, 120046], "mapped", [101]],
      [[120047, 120047], "mapped", [102]],
      [[120048, 120048], "mapped", [103]],
      [[120049, 120049], "mapped", [104]],
      [[120050, 120050], "mapped", [105]],
      [[120051, 120051], "mapped", [106]],
      [[120052, 120052], "mapped", [107]],
      [[120053, 120053], "mapped", [108]],
      [[120054, 120054], "mapped", [109]],
      [[120055, 120055], "mapped", [110]],
      [[120056, 120056], "mapped", [111]],
      [[120057, 120057], "mapped", [112]],
      [[120058, 120058], "mapped", [113]],
      [[120059, 120059], "mapped", [114]],
      [[120060, 120060], "mapped", [115]],
      [[120061, 120061], "mapped", [116]],
      [[120062, 120062], "mapped", [117]],
      [[120063, 120063], "mapped", [118]],
      [[120064, 120064], "mapped", [119]],
      [[120065, 120065], "mapped", [120]],
      [[120066, 120066], "mapped", [121]],
      [[120067, 120067], "mapped", [122]],
      [[120068, 120068], "mapped", [97]],
      [[120069, 120069], "mapped", [98]],
      [[120070, 120070], "disallowed"],
      [[120071, 120071], "mapped", [100]],
      [[120072, 120072], "mapped", [101]],
      [[120073, 120073], "mapped", [102]],
      [[120074, 120074], "mapped", [103]],
      [[120075, 120076], "disallowed"],
      [[120077, 120077], "mapped", [106]],
      [[120078, 120078], "mapped", [107]],
      [[120079, 120079], "mapped", [108]],
      [[120080, 120080], "mapped", [109]],
      [[120081, 120081], "mapped", [110]],
      [[120082, 120082], "mapped", [111]],
      [[120083, 120083], "mapped", [112]],
      [[120084, 120084], "mapped", [113]],
      [[120085, 120085], "disallowed"],
      [[120086, 120086], "mapped", [115]],
      [[120087, 120087], "mapped", [116]],
      [[120088, 120088], "mapped", [117]],
      [[120089, 120089], "mapped", [118]],
      [[120090, 120090], "mapped", [119]],
      [[120091, 120091], "mapped", [120]],
      [[120092, 120092], "mapped", [121]],
      [[120093, 120093], "disallowed"],
      [[120094, 120094], "mapped", [97]],
      [[120095, 120095], "mapped", [98]],
      [[120096, 120096], "mapped", [99]],
      [[120097, 120097], "mapped", [100]],
      [[120098, 120098], "mapped", [101]],
      [[120099, 120099], "mapped", [102]],
      [[120100, 120100], "mapped", [103]],
      [[120101, 120101], "mapped", [104]],
      [[120102, 120102], "mapped", [105]],
      [[120103, 120103], "mapped", [106]],
      [[120104, 120104], "mapped", [107]],
      [[120105, 120105], "mapped", [108]],
      [[120106, 120106], "mapped", [109]],
      [[120107, 120107], "mapped", [110]],
      [[120108, 120108], "mapped", [111]],
      [[120109, 120109], "mapped", [112]],
      [[120110, 120110], "mapped", [113]],
      [[120111, 120111], "mapped", [114]],
      [[120112, 120112], "mapped", [115]],
      [[120113, 120113], "mapped", [116]],
      [[120114, 120114], "mapped", [117]],
      [[120115, 120115], "mapped", [118]],
      [[120116, 120116], "mapped", [119]],
      [[120117, 120117], "mapped", [120]],
      [[120118, 120118], "mapped", [121]],
      [[120119, 120119], "mapped", [122]],
      [[120120, 120120], "mapped", [97]],
      [[120121, 120121], "mapped", [98]],
      [[120122, 120122], "disallowed"],
      [[120123, 120123], "mapped", [100]],
      [[120124, 120124], "mapped", [101]],
      [[120125, 120125], "mapped", [102]],
      [[120126, 120126], "mapped", [103]],
      [[120127, 120127], "disallowed"],
      [[120128, 120128], "mapped", [105]],
      [[120129, 120129], "mapped", [106]],
      [[120130, 120130], "mapped", [107]],
      [[120131, 120131], "mapped", [108]],
      [[120132, 120132], "mapped", [109]],
      [[120133, 120133], "disallowed"],
      [[120134, 120134], "mapped", [111]],
      [[120135, 120137], "disallowed"],
      [[120138, 120138], "mapped", [115]],
      [[120139, 120139], "mapped", [116]],
      [[120140, 120140], "mapped", [117]],
      [[120141, 120141], "mapped", [118]],
      [[120142, 120142], "mapped", [119]],
      [[120143, 120143], "mapped", [120]],
      [[120144, 120144], "mapped", [121]],
      [[120145, 120145], "disallowed"],
      [[120146, 120146], "mapped", [97]],
      [[120147, 120147], "mapped", [98]],
      [[120148, 120148], "mapped", [99]],
      [[120149, 120149], "mapped", [100]],
      [[120150, 120150], "mapped", [101]],
      [[120151, 120151], "mapped", [102]],
      [[120152, 120152], "mapped", [103]],
      [[120153, 120153], "mapped", [104]],
      [[120154, 120154], "mapped", [105]],
      [[120155, 120155], "mapped", [106]],
      [[120156, 120156], "mapped", [107]],
      [[120157, 120157], "mapped", [108]],
      [[120158, 120158], "mapped", [109]],
      [[120159, 120159], "mapped", [110]],
      [[120160, 120160], "mapped", [111]],
      [[120161, 120161], "mapped", [112]],
      [[120162, 120162], "mapped", [113]],
      [[120163, 120163], "mapped", [114]],
      [[120164, 120164], "mapped", [115]],
      [[120165, 120165], "mapped", [116]],
      [[120166, 120166], "mapped", [117]],
      [[120167, 120167], "mapped", [118]],
      [[120168, 120168], "mapped", [119]],
      [[120169, 120169], "mapped", [120]],
      [[120170, 120170], "mapped", [121]],
      [[120171, 120171], "mapped", [122]],
      [[120172, 120172], "mapped", [97]],
      [[120173, 120173], "mapped", [98]],
      [[120174, 120174], "mapped", [99]],
      [[120175, 120175], "mapped", [100]],
      [[120176, 120176], "mapped", [101]],
      [[120177, 120177], "mapped", [102]],
      [[120178, 120178], "mapped", [103]],
      [[120179, 120179], "mapped", [104]],
      [[120180, 120180], "mapped", [105]],
      [[120181, 120181], "mapped", [106]],
      [[120182, 120182], "mapped", [107]],
      [[120183, 120183], "mapped", [108]],
      [[120184, 120184], "mapped", [109]],
      [[120185, 120185], "mapped", [110]],
      [[120186, 120186], "mapped", [111]],
      [[120187, 120187], "mapped", [112]],
      [[120188, 120188], "mapped", [113]],
      [[120189, 120189], "mapped", [114]],
      [[120190, 120190], "mapped", [115]],
      [[120191, 120191], "mapped", [116]],
      [[120192, 120192], "mapped", [117]],
      [[120193, 120193], "mapped", [118]],
      [[120194, 120194], "mapped", [119]],
      [[120195, 120195], "mapped", [120]],
      [[120196, 120196], "mapped", [121]],
      [[120197, 120197], "mapped", [122]],
      [[120198, 120198], "mapped", [97]],
      [[120199, 120199], "mapped", [98]],
      [[120200, 120200], "mapped", [99]],
      [[120201, 120201], "mapped", [100]],
      [[120202, 120202], "mapped", [101]],
      [[120203, 120203], "mapped", [102]],
      [[120204, 120204], "mapped", [103]],
      [[120205, 120205], "mapped", [104]],
      [[120206, 120206], "mapped", [105]],
      [[120207, 120207], "mapped", [106]],
      [[120208, 120208], "mapped", [107]],
      [[120209, 120209], "mapped", [108]],
      [[120210, 120210], "mapped", [109]],
      [[120211, 120211], "mapped", [110]],
      [[120212, 120212], "mapped", [111]],
      [[120213, 120213], "mapped", [112]],
      [[120214, 120214], "mapped", [113]],
      [[120215, 120215], "mapped", [114]],
      [[120216, 120216], "mapped", [115]],
      [[120217, 120217], "mapped", [116]],
      [[120218, 120218], "mapped", [117]],
      [[120219, 120219], "mapped", [118]],
      [[120220, 120220], "mapped", [119]],
      [[120221, 120221], "mapped", [120]],
      [[120222, 120222], "mapped", [121]],
      [[120223, 120223], "mapped", [122]],
      [[120224, 120224], "mapped", [97]],
      [[120225, 120225], "mapped", [98]],
      [[120226, 120226], "mapped", [99]],
      [[120227, 120227], "mapped", [100]],
      [[120228, 120228], "mapped", [101]],
      [[120229, 120229], "mapped", [102]],
      [[120230, 120230], "mapped", [103]],
      [[120231, 120231], "mapped", [104]],
      [[120232, 120232], "mapped", [105]],
      [[120233, 120233], "mapped", [106]],
      [[120234, 120234], "mapped", [107]],
      [[120235, 120235], "mapped", [108]],
      [[120236, 120236], "mapped", [109]],
      [[120237, 120237], "mapped", [110]],
      [[120238, 120238], "mapped", [111]],
      [[120239, 120239], "mapped", [112]],
      [[120240, 120240], "mapped", [113]],
      [[120241, 120241], "mapped", [114]],
      [[120242, 120242], "mapped", [115]],
      [[120243, 120243], "mapped", [116]],
      [[120244, 120244], "mapped", [117]],
      [[120245, 120245], "mapped", [118]],
      [[120246, 120246], "mapped", [119]],
      [[120247, 120247], "mapped", [120]],
      [[120248, 120248], "mapped", [121]],
      [[120249, 120249], "mapped", [122]],
      [[120250, 120250], "mapped", [97]],
      [[120251, 120251], "mapped", [98]],
      [[120252, 120252], "mapped", [99]],
      [[120253, 120253], "mapped", [100]],
      [[120254, 120254], "mapped", [101]],
      [[120255, 120255], "mapped", [102]],
      [[120256, 120256], "mapped", [103]],
      [[120257, 120257], "mapped", [104]],
      [[120258, 120258], "mapped", [105]],
      [[120259, 120259], "mapped", [106]],
      [[120260, 120260], "mapped", [107]],
      [[120261, 120261], "mapped", [108]],
      [[120262, 120262], "mapped", [109]],
      [[120263, 120263], "mapped", [110]],
      [[120264, 120264], "mapped", [111]],
      [[120265, 120265], "mapped", [112]],
      [[120266, 120266], "mapped", [113]],
      [[120267, 120267], "mapped", [114]],
      [[120268, 120268], "mapped", [115]],
      [[120269, 120269], "mapped", [116]],
      [[120270, 120270], "mapped", [117]],
      [[120271, 120271], "mapped", [118]],
      [[120272, 120272], "mapped", [119]],
      [[120273, 120273], "mapped", [120]],
      [[120274, 120274], "mapped", [121]],
      [[120275, 120275], "mapped", [122]],
      [[120276, 120276], "mapped", [97]],
      [[120277, 120277], "mapped", [98]],
      [[120278, 120278], "mapped", [99]],
      [[120279, 120279], "mapped", [100]],
      [[120280, 120280], "mapped", [101]],
      [[120281, 120281], "mapped", [102]],
      [[120282, 120282], "mapped", [103]],
      [[120283, 120283], "mapped", [104]],
      [[120284, 120284], "mapped", [105]],
      [[120285, 120285], "mapped", [106]],
      [[120286, 120286], "mapped", [107]],
      [[120287, 120287], "mapped", [108]],
      [[120288, 120288], "mapped", [109]],
      [[120289, 120289], "mapped", [110]],
      [[120290, 120290], "mapped", [111]],
      [[120291, 120291], "mapped", [112]],
      [[120292, 120292], "mapped", [113]],
      [[120293, 120293], "mapped", [114]],
      [[120294, 120294], "mapped", [115]],
      [[120295, 120295], "mapped", [116]],
      [[120296, 120296], "mapped", [117]],
      [[120297, 120297], "mapped", [118]],
      [[120298, 120298], "mapped", [119]],
      [[120299, 120299], "mapped", [120]],
      [[120300, 120300], "mapped", [121]],
      [[120301, 120301], "mapped", [122]],
      [[120302, 120302], "mapped", [97]],
      [[120303, 120303], "mapped", [98]],
      [[120304, 120304], "mapped", [99]],
      [[120305, 120305], "mapped", [100]],
      [[120306, 120306], "mapped", [101]],
      [[120307, 120307], "mapped", [102]],
      [[120308, 120308], "mapped", [103]],
      [[120309, 120309], "mapped", [104]],
      [[120310, 120310], "mapped", [105]],
      [[120311, 120311], "mapped", [106]],
      [[120312, 120312], "mapped", [107]],
      [[120313, 120313], "mapped", [108]],
      [[120314, 120314], "mapped", [109]],
      [[120315, 120315], "mapped", [110]],
      [[120316, 120316], "mapped", [111]],
      [[120317, 120317], "mapped", [112]],
      [[120318, 120318], "mapped", [113]],
      [[120319, 120319], "mapped", [114]],
      [[120320, 120320], "mapped", [115]],
      [[120321, 120321], "mapped", [116]],
      [[120322, 120322], "mapped", [117]],
      [[120323, 120323], "mapped", [118]],
      [[120324, 120324], "mapped", [119]],
      [[120325, 120325], "mapped", [120]],
      [[120326, 120326], "mapped", [121]],
      [[120327, 120327], "mapped", [122]],
      [[120328, 120328], "mapped", [97]],
      [[120329, 120329], "mapped", [98]],
      [[120330, 120330], "mapped", [99]],
      [[120331, 120331], "mapped", [100]],
      [[120332, 120332], "mapped", [101]],
      [[120333, 120333], "mapped", [102]],
      [[120334, 120334], "mapped", [103]],
      [[120335, 120335], "mapped", [104]],
      [[120336, 120336], "mapped", [105]],
      [[120337, 120337], "mapped", [106]],
      [[120338, 120338], "mapped", [107]],
      [[120339, 120339], "mapped", [108]],
      [[120340, 120340], "mapped", [109]],
      [[120341, 120341], "mapped", [110]],
      [[120342, 120342], "mapped", [111]],
      [[120343, 120343], "mapped", [112]],
      [[120344, 120344], "mapped", [113]],
      [[120345, 120345], "mapped", [114]],
      [[120346, 120346], "mapped", [115]],
      [[120347, 120347], "mapped", [116]],
      [[120348, 120348], "mapped", [117]],
      [[120349, 120349], "mapped", [118]],
      [[120350, 120350], "mapped", [119]],
      [[120351, 120351], "mapped", [120]],
      [[120352, 120352], "mapped", [121]],
      [[120353, 120353], "mapped", [122]],
      [[120354, 120354], "mapped", [97]],
      [[120355, 120355], "mapped", [98]],
      [[120356, 120356], "mapped", [99]],
      [[120357, 120357], "mapped", [100]],
      [[120358, 120358], "mapped", [101]],
      [[120359, 120359], "mapped", [102]],
      [[120360, 120360], "mapped", [103]],
      [[120361, 120361], "mapped", [104]],
      [[120362, 120362], "mapped", [105]],
      [[120363, 120363], "mapped", [106]],
      [[120364, 120364], "mapped", [107]],
      [[120365, 120365], "mapped", [108]],
      [[120366, 120366], "mapped", [109]],
      [[120367, 120367], "mapped", [110]],
      [[120368, 120368], "mapped", [111]],
      [[120369, 120369], "mapped", [112]],
      [[120370, 120370], "mapped", [113]],
      [[120371, 120371], "mapped", [114]],
      [[120372, 120372], "mapped", [115]],
      [[120373, 120373], "mapped", [116]],
      [[120374, 120374], "mapped", [117]],
      [[120375, 120375], "mapped", [118]],
      [[120376, 120376], "mapped", [119]],
      [[120377, 120377], "mapped", [120]],
      [[120378, 120378], "mapped", [121]],
      [[120379, 120379], "mapped", [122]],
      [[120380, 120380], "mapped", [97]],
      [[120381, 120381], "mapped", [98]],
      [[120382, 120382], "mapped", [99]],
      [[120383, 120383], "mapped", [100]],
      [[120384, 120384], "mapped", [101]],
      [[120385, 120385], "mapped", [102]],
      [[120386, 120386], "mapped", [103]],
      [[120387, 120387], "mapped", [104]],
      [[120388, 120388], "mapped", [105]],
      [[120389, 120389], "mapped", [106]],
      [[120390, 120390], "mapped", [107]],
      [[120391, 120391], "mapped", [108]],
      [[120392, 120392], "mapped", [109]],
      [[120393, 120393], "mapped", [110]],
      [[120394, 120394], "mapped", [111]],
      [[120395, 120395], "mapped", [112]],
      [[120396, 120396], "mapped", [113]],
      [[120397, 120397], "mapped", [114]],
      [[120398, 120398], "mapped", [115]],
      [[120399, 120399], "mapped", [116]],
      [[120400, 120400], "mapped", [117]],
      [[120401, 120401], "mapped", [118]],
      [[120402, 120402], "mapped", [119]],
      [[120403, 120403], "mapped", [120]],
      [[120404, 120404], "mapped", [121]],
      [[120405, 120405], "mapped", [122]],
      [[120406, 120406], "mapped", [97]],
      [[120407, 120407], "mapped", [98]],
      [[120408, 120408], "mapped", [99]],
      [[120409, 120409], "mapped", [100]],
      [[120410, 120410], "mapped", [101]],
      [[120411, 120411], "mapped", [102]],
      [[120412, 120412], "mapped", [103]],
      [[120413, 120413], "mapped", [104]],
      [[120414, 120414], "mapped", [105]],
      [[120415, 120415], "mapped", [106]],
      [[120416, 120416], "mapped", [107]],
      [[120417, 120417], "mapped", [108]],
      [[120418, 120418], "mapped", [109]],
      [[120419, 120419], "mapped", [110]],
      [[120420, 120420], "mapped", [111]],
      [[120421, 120421], "mapped", [112]],
      [[120422, 120422], "mapped", [113]],
      [[120423, 120423], "mapped", [114]],
      [[120424, 120424], "mapped", [115]],
      [[120425, 120425], "mapped", [116]],
      [[120426, 120426], "mapped", [117]],
      [[120427, 120427], "mapped", [118]],
      [[120428, 120428], "mapped", [119]],
      [[120429, 120429], "mapped", [120]],
      [[120430, 120430], "mapped", [121]],
      [[120431, 120431], "mapped", [122]],
      [[120432, 120432], "mapped", [97]],
      [[120433, 120433], "mapped", [98]],
      [[120434, 120434], "mapped", [99]],
      [[120435, 120435], "mapped", [100]],
      [[120436, 120436], "mapped", [101]],
      [[120437, 120437], "mapped", [102]],
      [[120438, 120438], "mapped", [103]],
      [[120439, 120439], "mapped", [104]],
      [[120440, 120440], "mapped", [105]],
      [[120441, 120441], "mapped", [106]],
      [[120442, 120442], "mapped", [107]],
      [[120443, 120443], "mapped", [108]],
      [[120444, 120444], "mapped", [109]],
      [[120445, 120445], "mapped", [110]],
      [[120446, 120446], "mapped", [111]],
      [[120447, 120447], "mapped", [112]],
      [[120448, 120448], "mapped", [113]],
      [[120449, 120449], "mapped", [114]],
      [[120450, 120450], "mapped", [115]],
      [[120451, 120451], "mapped", [116]],
      [[120452, 120452], "mapped", [117]],
      [[120453, 120453], "mapped", [118]],
      [[120454, 120454], "mapped", [119]],
      [[120455, 120455], "mapped", [120]],
      [[120456, 120456], "mapped", [121]],
      [[120457, 120457], "mapped", [122]],
      [[120458, 120458], "mapped", [97]],
      [[120459, 120459], "mapped", [98]],
      [[120460, 120460], "mapped", [99]],
      [[120461, 120461], "mapped", [100]],
      [[120462, 120462], "mapped", [101]],
      [[120463, 120463], "mapped", [102]],
      [[120464, 120464], "mapped", [103]],
      [[120465, 120465], "mapped", [104]],
      [[120466, 120466], "mapped", [105]],
      [[120467, 120467], "mapped", [106]],
      [[120468, 120468], "mapped", [107]],
      [[120469, 120469], "mapped", [108]],
      [[120470, 120470], "mapped", [109]],
      [[120471, 120471], "mapped", [110]],
      [[120472, 120472], "mapped", [111]],
      [[120473, 120473], "mapped", [112]],
      [[120474, 120474], "mapped", [113]],
      [[120475, 120475], "mapped", [114]],
      [[120476, 120476], "mapped", [115]],
      [[120477, 120477], "mapped", [116]],
      [[120478, 120478], "mapped", [117]],
      [[120479, 120479], "mapped", [118]],
      [[120480, 120480], "mapped", [119]],
      [[120481, 120481], "mapped", [120]],
      [[120482, 120482], "mapped", [121]],
      [[120483, 120483], "mapped", [122]],
      [[120484, 120484], "mapped", [305]],
      [[120485, 120485], "mapped", [567]],
      [[120486, 120487], "disallowed"],
      [[120488, 120488], "mapped", [945]],
      [[120489, 120489], "mapped", [946]],
      [[120490, 120490], "mapped", [947]],
      [[120491, 120491], "mapped", [948]],
      [[120492, 120492], "mapped", [949]],
      [[120493, 120493], "mapped", [950]],
      [[120494, 120494], "mapped", [951]],
      [[120495, 120495], "mapped", [952]],
      [[120496, 120496], "mapped", [953]],
      [[120497, 120497], "mapped", [954]],
      [[120498, 120498], "mapped", [955]],
      [[120499, 120499], "mapped", [956]],
      [[120500, 120500], "mapped", [957]],
      [[120501, 120501], "mapped", [958]],
      [[120502, 120502], "mapped", [959]],
      [[120503, 120503], "mapped", [960]],
      [[120504, 120504], "mapped", [961]],
      [[120505, 120505], "mapped", [952]],
      [[120506, 120506], "mapped", [963]],
      [[120507, 120507], "mapped", [964]],
      [[120508, 120508], "mapped", [965]],
      [[120509, 120509], "mapped", [966]],
      [[120510, 120510], "mapped", [967]],
      [[120511, 120511], "mapped", [968]],
      [[120512, 120512], "mapped", [969]],
      [[120513, 120513], "mapped", [8711]],
      [[120514, 120514], "mapped", [945]],
      [[120515, 120515], "mapped", [946]],
      [[120516, 120516], "mapped", [947]],
      [[120517, 120517], "mapped", [948]],
      [[120518, 120518], "mapped", [949]],
      [[120519, 120519], "mapped", [950]],
      [[120520, 120520], "mapped", [951]],
      [[120521, 120521], "mapped", [952]],
      [[120522, 120522], "mapped", [953]],
      [[120523, 120523], "mapped", [954]],
      [[120524, 120524], "mapped", [955]],
      [[120525, 120525], "mapped", [956]],
      [[120526, 120526], "mapped", [957]],
      [[120527, 120527], "mapped", [958]],
      [[120528, 120528], "mapped", [959]],
      [[120529, 120529], "mapped", [960]],
      [[120530, 120530], "mapped", [961]],
      [[120531, 120532], "mapped", [963]],
      [[120533, 120533], "mapped", [964]],
      [[120534, 120534], "mapped", [965]],
      [[120535, 120535], "mapped", [966]],
      [[120536, 120536], "mapped", [967]],
      [[120537, 120537], "mapped", [968]],
      [[120538, 120538], "mapped", [969]],
      [[120539, 120539], "mapped", [8706]],
      [[120540, 120540], "mapped", [949]],
      [[120541, 120541], "mapped", [952]],
      [[120542, 120542], "mapped", [954]],
      [[120543, 120543], "mapped", [966]],
      [[120544, 120544], "mapped", [961]],
      [[120545, 120545], "mapped", [960]],
      [[120546, 120546], "mapped", [945]],
      [[120547, 120547], "mapped", [946]],
      [[120548, 120548], "mapped", [947]],
      [[120549, 120549], "mapped", [948]],
      [[120550, 120550], "mapped", [949]],
      [[120551, 120551], "mapped", [950]],
      [[120552, 120552], "mapped", [951]],
      [[120553, 120553], "mapped", [952]],
      [[120554, 120554], "mapped", [953]],
      [[120555, 120555], "mapped", [954]],
      [[120556, 120556], "mapped", [955]],
      [[120557, 120557], "mapped", [956]],
      [[120558, 120558], "mapped", [957]],
      [[120559, 120559], "mapped", [958]],
      [[120560, 120560], "mapped", [959]],
      [[120561, 120561], "mapped", [960]],
      [[120562, 120562], "mapped", [961]],
      [[120563, 120563], "mapped", [952]],
      [[120564, 120564], "mapped", [963]],
      [[120565, 120565], "mapped", [964]],
      [[120566, 120566], "mapped", [965]],
      [[120567, 120567], "mapped", [966]],
      [[120568, 120568], "mapped", [967]],
      [[120569, 120569], "mapped", [968]],
      [[120570, 120570], "mapped", [969]],
      [[120571, 120571], "mapped", [8711]],
      [[120572, 120572], "mapped", [945]],
      [[120573, 120573], "mapped", [946]],
      [[120574, 120574], "mapped", [947]],
      [[120575, 120575], "mapped", [948]],
      [[120576, 120576], "mapped", [949]],
      [[120577, 120577], "mapped", [950]],
      [[120578, 120578], "mapped", [951]],
      [[120579, 120579], "mapped", [952]],
      [[120580, 120580], "mapped", [953]],
      [[120581, 120581], "mapped", [954]],
      [[120582, 120582], "mapped", [955]],
      [[120583, 120583], "mapped", [956]],
      [[120584, 120584], "mapped", [957]],
      [[120585, 120585], "mapped", [958]],
      [[120586, 120586], "mapped", [959]],
      [[120587, 120587], "mapped", [960]],
      [[120588, 120588], "mapped", [961]],
      [[120589, 120590], "mapped", [963]],
      [[120591, 120591], "mapped", [964]],
      [[120592, 120592], "mapped", [965]],
      [[120593, 120593], "mapped", [966]],
      [[120594, 120594], "mapped", [967]],
      [[120595, 120595], "mapped", [968]],
      [[120596, 120596], "mapped", [969]],
      [[120597, 120597], "mapped", [8706]],
      [[120598, 120598], "mapped", [949]],
      [[120599, 120599], "mapped", [952]],
      [[120600, 120600], "mapped", [954]],
      [[120601, 120601], "mapped", [966]],
      [[120602, 120602], "mapped", [961]],
      [[120603, 120603], "mapped", [960]],
      [[120604, 120604], "mapped", [945]],
      [[120605, 120605], "mapped", [946]],
      [[120606, 120606], "mapped", [947]],
      [[120607, 120607], "mapped", [948]],
      [[120608, 120608], "mapped", [949]],
      [[120609, 120609], "mapped", [950]],
      [[120610, 120610], "mapped", [951]],
      [[120611, 120611], "mapped", [952]],
      [[120612, 120612], "mapped", [953]],
      [[120613, 120613], "mapped", [954]],
      [[120614, 120614], "mapped", [955]],
      [[120615, 120615], "mapped", [956]],
      [[120616, 120616], "mapped", [957]],
      [[120617, 120617], "mapped", [958]],
      [[120618, 120618], "mapped", [959]],
      [[120619, 120619], "mapped", [960]],
      [[120620, 120620], "mapped", [961]],
      [[120621, 120621], "mapped", [952]],
      [[120622, 120622], "mapped", [963]],
      [[120623, 120623], "mapped", [964]],
      [[120624, 120624], "mapped", [965]],
      [[120625, 120625], "mapped", [966]],
      [[120626, 120626], "mapped", [967]],
      [[120627, 120627], "mapped", [968]],
      [[120628, 120628], "mapped", [969]],
      [[120629, 120629], "mapped", [8711]],
      [[120630, 120630], "mapped", [945]],
      [[120631, 120631], "mapped", [946]],
      [[120632, 120632], "mapped", [947]],
      [[120633, 120633], "mapped", [948]],
      [[120634, 120634], "mapped", [949]],
      [[120635, 120635], "mapped", [950]],
      [[120636, 120636], "mapped", [951]],
      [[120637, 120637], "mapped", [952]],
      [[120638, 120638], "mapped", [953]],
      [[120639, 120639], "mapped", [954]],
      [[120640, 120640], "mapped", [955]],
      [[120641, 120641], "mapped", [956]],
      [[120642, 120642], "mapped", [957]],
      [[120643, 120643], "mapped", [958]],
      [[120644, 120644], "mapped", [959]],
      [[120645, 120645], "mapped", [960]],
      [[120646, 120646], "mapped", [961]],
      [[120647, 120648], "mapped", [963]],
      [[120649, 120649], "mapped", [964]],
      [[120650, 120650], "mapped", [965]],
      [[120651, 120651], "mapped", [966]],
      [[120652, 120652], "mapped", [967]],
      [[120653, 120653], "mapped", [968]],
      [[120654, 120654], "mapped", [969]],
      [[120655, 120655], "mapped", [8706]],
      [[120656, 120656], "mapped", [949]],
      [[120657, 120657], "mapped", [952]],
      [[120658, 120658], "mapped", [954]],
      [[120659, 120659], "mapped", [966]],
      [[120660, 120660], "mapped", [961]],
      [[120661, 120661], "mapped", [960]],
      [[120662, 120662], "mapped", [945]],
      [[120663, 120663], "mapped", [946]],
      [[120664, 120664], "mapped", [947]],
      [[120665, 120665], "mapped", [948]],
      [[120666, 120666], "mapped", [949]],
      [[120667, 120667], "mapped", [950]],
      [[120668, 120668], "mapped", [951]],
      [[120669, 120669], "mapped", [952]],
      [[120670, 120670], "mapped", [953]],
      [[120671, 120671], "mapped", [954]],
      [[120672, 120672], "mapped", [955]],
      [[120673, 120673], "mapped", [956]],
      [[120674, 120674], "mapped", [957]],
      [[120675, 120675], "mapped", [958]],
      [[120676, 120676], "mapped", [959]],
      [[120677, 120677], "mapped", [960]],
      [[120678, 120678], "mapped", [961]],
      [[120679, 120679], "mapped", [952]],
      [[120680, 120680], "mapped", [963]],
      [[120681, 120681], "mapped", [964]],
      [[120682, 120682], "mapped", [965]],
      [[120683, 120683], "mapped", [966]],
      [[120684, 120684], "mapped", [967]],
      [[120685, 120685], "mapped", [968]],
      [[120686, 120686], "mapped", [969]],
      [[120687, 120687], "mapped", [8711]],
      [[120688, 120688], "mapped", [945]],
      [[120689, 120689], "mapped", [946]],
      [[120690, 120690], "mapped", [947]],
      [[120691, 120691], "mapped", [948]],
      [[120692, 120692], "mapped", [949]],
      [[120693, 120693], "mapped", [950]],
      [[120694, 120694], "mapped", [951]],
      [[120695, 120695], "mapped", [952]],
      [[120696, 120696], "mapped", [953]],
      [[120697, 120697], "mapped", [954]],
      [[120698, 120698], "mapped", [955]],
      [[120699, 120699], "mapped", [956]],
      [[120700, 120700], "mapped", [957]],
      [[120701, 120701], "mapped", [958]],
      [[120702, 120702], "mapped", [959]],
      [[120703, 120703], "mapped", [960]],
      [[120704, 120704], "mapped", [961]],
      [[120705, 120706], "mapped", [963]],
      [[120707, 120707], "mapped", [964]],
      [[120708, 120708], "mapped", [965]],
      [[120709, 120709], "mapped", [966]],
      [[120710, 120710], "mapped", [967]],
      [[120711, 120711], "mapped", [968]],
      [[120712, 120712], "mapped", [969]],
      [[120713, 120713], "mapped", [8706]],
      [[120714, 120714], "mapped", [949]],
      [[120715, 120715], "mapped", [952]],
      [[120716, 120716], "mapped", [954]],
      [[120717, 120717], "mapped", [966]],
      [[120718, 120718], "mapped", [961]],
      [[120719, 120719], "mapped", [960]],
      [[120720, 120720], "mapped", [945]],
      [[120721, 120721], "mapped", [946]],
      [[120722, 120722], "mapped", [947]],
      [[120723, 120723], "mapped", [948]],
      [[120724, 120724], "mapped", [949]],
      [[120725, 120725], "mapped", [950]],
      [[120726, 120726], "mapped", [951]],
      [[120727, 120727], "mapped", [952]],
      [[120728, 120728], "mapped", [953]],
      [[120729, 120729], "mapped", [954]],
      [[120730, 120730], "mapped", [955]],
      [[120731, 120731], "mapped", [956]],
      [[120732, 120732], "mapped", [957]],
      [[120733, 120733], "mapped", [958]],
      [[120734, 120734], "mapped", [959]],
      [[120735, 120735], "mapped", [960]],
      [[120736, 120736], "mapped", [961]],
      [[120737, 120737], "mapped", [952]],
      [[120738, 120738], "mapped", [963]],
      [[120739, 120739], "mapped", [964]],
      [[120740, 120740], "mapped", [965]],
      [[120741, 120741], "mapped", [966]],
      [[120742, 120742], "mapped", [967]],
      [[120743, 120743], "mapped", [968]],
      [[120744, 120744], "mapped", [969]],
      [[120745, 120745], "mapped", [8711]],
      [[120746, 120746], "mapped", [945]],
      [[120747, 120747], "mapped", [946]],
      [[120748, 120748], "mapped", [947]],
      [[120749, 120749], "mapped", [948]],
      [[120750, 120750], "mapped", [949]],
      [[120751, 120751], "mapped", [950]],
      [[120752, 120752], "mapped", [951]],
      [[120753, 120753], "mapped", [952]],
      [[120754, 120754], "mapped", [953]],
      [[120755, 120755], "mapped", [954]],
      [[120756, 120756], "mapped", [955]],
      [[120757, 120757], "mapped", [956]],
      [[120758, 120758], "mapped", [957]],
      [[120759, 120759], "mapped", [958]],
      [[120760, 120760], "mapped", [959]],
      [[120761, 120761], "mapped", [960]],
      [[120762, 120762], "mapped", [961]],
      [[120763, 120764], "mapped", [963]],
      [[120765, 120765], "mapped", [964]],
      [[120766, 120766], "mapped", [965]],
      [[120767, 120767], "mapped", [966]],
      [[120768, 120768], "mapped", [967]],
      [[120769, 120769], "mapped", [968]],
      [[120770, 120770], "mapped", [969]],
      [[120771, 120771], "mapped", [8706]],
      [[120772, 120772], "mapped", [949]],
      [[120773, 120773], "mapped", [952]],
      [[120774, 120774], "mapped", [954]],
      [[120775, 120775], "mapped", [966]],
      [[120776, 120776], "mapped", [961]],
      [[120777, 120777], "mapped", [960]],
      [[120778, 120779], "mapped", [989]],
      [[120780, 120781], "disallowed"],
      [[120782, 120782], "mapped", [48]],
      [[120783, 120783], "mapped", [49]],
      [[120784, 120784], "mapped", [50]],
      [[120785, 120785], "mapped", [51]],
      [[120786, 120786], "mapped", [52]],
      [[120787, 120787], "mapped", [53]],
      [[120788, 120788], "mapped", [54]],
      [[120789, 120789], "mapped", [55]],
      [[120790, 120790], "mapped", [56]],
      [[120791, 120791], "mapped", [57]],
      [[120792, 120792], "mapped", [48]],
      [[120793, 120793], "mapped", [49]],
      [[120794, 120794], "mapped", [50]],
      [[120795, 120795], "mapped", [51]],
      [[120796, 120796], "mapped", [52]],
      [[120797, 120797], "mapped", [53]],
      [[120798, 120798], "mapped", [54]],
      [[120799, 120799], "mapped", [55]],
      [[120800, 120800], "mapped", [56]],
      [[120801, 120801], "mapped", [57]],
      [[120802, 120802], "mapped", [48]],
      [[120803, 120803], "mapped", [49]],
      [[120804, 120804], "mapped", [50]],
      [[120805, 120805], "mapped", [51]],
      [[120806, 120806], "mapped", [52]],
      [[120807, 120807], "mapped", [53]],
      [[120808, 120808], "mapped", [54]],
      [[120809, 120809], "mapped", [55]],
      [[120810, 120810], "mapped", [56]],
      [[120811, 120811], "mapped", [57]],
      [[120812, 120812], "mapped", [48]],
      [[120813, 120813], "mapped", [49]],
      [[120814, 120814], "mapped", [50]],
      [[120815, 120815], "mapped", [51]],
      [[120816, 120816], "mapped", [52]],
      [[120817, 120817], "mapped", [53]],
      [[120818, 120818], "mapped", [54]],
      [[120819, 120819], "mapped", [55]],
      [[120820, 120820], "mapped", [56]],
      [[120821, 120821], "mapped", [57]],
      [[120822, 120822], "mapped", [48]],
      [[120823, 120823], "mapped", [49]],
      [[120824, 120824], "mapped", [50]],
      [[120825, 120825], "mapped", [51]],
      [[120826, 120826], "mapped", [52]],
      [[120827, 120827], "mapped", [53]],
      [[120828, 120828], "mapped", [54]],
      [[120829, 120829], "mapped", [55]],
      [[120830, 120830], "mapped", [56]],
      [[120831, 120831], "mapped", [57]],
      [[120832, 121343], "valid", [], "NV8"],
      [[121344, 121398], "valid"],
      [[121399, 121402], "valid", [], "NV8"],
      [[121403, 121452], "valid"],
      [[121453, 121460], "valid", [], "NV8"],
      [[121461, 121461], "valid"],
      [[121462, 121475], "valid", [], "NV8"],
      [[121476, 121476], "valid"],
      [[121477, 121483], "valid", [], "NV8"],
      [[121484, 121498], "disallowed"],
      [[121499, 121503], "valid"],
      [[121504, 121504], "disallowed"],
      [[121505, 121519], "valid"],
      [[121520, 124927], "disallowed"],
      [[124928, 125124], "valid"],
      [[125125, 125126], "disallowed"],
      [[125127, 125135], "valid", [], "NV8"],
      [[125136, 125142], "valid"],
      [[125143, 126463], "disallowed"],
      [[126464, 126464], "mapped", [1575]],
      [[126465, 126465], "mapped", [1576]],
      [[126466, 126466], "mapped", [1580]],
      [[126467, 126467], "mapped", [1583]],
      [[126468, 126468], "disallowed"],
      [[126469, 126469], "mapped", [1608]],
      [[126470, 126470], "mapped", [1586]],
      [[126471, 126471], "mapped", [1581]],
      [[126472, 126472], "mapped", [1591]],
      [[126473, 126473], "mapped", [1610]],
      [[126474, 126474], "mapped", [1603]],
      [[126475, 126475], "mapped", [1604]],
      [[126476, 126476], "mapped", [1605]],
      [[126477, 126477], "mapped", [1606]],
      [[126478, 126478], "mapped", [1587]],
      [[126479, 126479], "mapped", [1593]],
      [[126480, 126480], "mapped", [1601]],
      [[126481, 126481], "mapped", [1589]],
      [[126482, 126482], "mapped", [1602]],
      [[126483, 126483], "mapped", [1585]],
      [[126484, 126484], "mapped", [1588]],
      [[126485, 126485], "mapped", [1578]],
      [[126486, 126486], "mapped", [1579]],
      [[126487, 126487], "mapped", [1582]],
      [[126488, 126488], "mapped", [1584]],
      [[126489, 126489], "mapped", [1590]],
      [[126490, 126490], "mapped", [1592]],
      [[126491, 126491], "mapped", [1594]],
      [[126492, 126492], "mapped", [1646]],
      [[126493, 126493], "mapped", [1722]],
      [[126494, 126494], "mapped", [1697]],
      [[126495, 126495], "mapped", [1647]],
      [[126496, 126496], "disallowed"],
      [[126497, 126497], "mapped", [1576]],
      [[126498, 126498], "mapped", [1580]],
      [[126499, 126499], "disallowed"],
      [[126500, 126500], "mapped", [1607]],
      [[126501, 126502], "disallowed"],
      [[126503, 126503], "mapped", [1581]],
      [[126504, 126504], "disallowed"],
      [[126505, 126505], "mapped", [1610]],
      [[126506, 126506], "mapped", [1603]],
      [[126507, 126507], "mapped", [1604]],
      [[126508, 126508], "mapped", [1605]],
      [[126509, 126509], "mapped", [1606]],
      [[126510, 126510], "mapped", [1587]],
      [[126511, 126511], "mapped", [1593]],
      [[126512, 126512], "mapped", [1601]],
      [[126513, 126513], "mapped", [1589]],
      [[126514, 126514], "mapped", [1602]],
      [[126515, 126515], "disallowed"],
      [[126516, 126516], "mapped", [1588]],
      [[126517, 126517], "mapped", [1578]],
      [[126518, 126518], "mapped", [1579]],
      [[126519, 126519], "mapped", [1582]],
      [[126520, 126520], "disallowed"],
      [[126521, 126521], "mapped", [1590]],
      [[126522, 126522], "disallowed"],
      [[126523, 126523], "mapped", [1594]],
      [[126524, 126529], "disallowed"],
      [[126530, 126530], "mapped", [1580]],
      [[126531, 126534], "disallowed"],
      [[126535, 126535], "mapped", [1581]],
      [[126536, 126536], "disallowed"],
      [[126537, 126537], "mapped", [1610]],
      [[126538, 126538], "disallowed"],
      [[126539, 126539], "mapped", [1604]],
      [[126540, 126540], "disallowed"],
      [[126541, 126541], "mapped", [1606]],
      [[126542, 126542], "mapped", [1587]],
      [[126543, 126543], "mapped", [1593]],
      [[126544, 126544], "disallowed"],
      [[126545, 126545], "mapped", [1589]],
      [[126546, 126546], "mapped", [1602]],
      [[126547, 126547], "disallowed"],
      [[126548, 126548], "mapped", [1588]],
      [[126549, 126550], "disallowed"],
      [[126551, 126551], "mapped", [1582]],
      [[126552, 126552], "disallowed"],
      [[126553, 126553], "mapped", [1590]],
      [[126554, 126554], "disallowed"],
      [[126555, 126555], "mapped", [1594]],
      [[126556, 126556], "disallowed"],
      [[126557, 126557], "mapped", [1722]],
      [[126558, 126558], "disallowed"],
      [[126559, 126559], "mapped", [1647]],
      [[126560, 126560], "disallowed"],
      [[126561, 126561], "mapped", [1576]],
      [[126562, 126562], "mapped", [1580]],
      [[126563, 126563], "disallowed"],
      [[126564, 126564], "mapped", [1607]],
      [[126565, 126566], "disallowed"],
      [[126567, 126567], "mapped", [1581]],
      [[126568, 126568], "mapped", [1591]],
      [[126569, 126569], "mapped", [1610]],
      [[126570, 126570], "mapped", [1603]],
      [[126571, 126571], "disallowed"],
      [[126572, 126572], "mapped", [1605]],
      [[126573, 126573], "mapped", [1606]],
      [[126574, 126574], "mapped", [1587]],
      [[126575, 126575], "mapped", [1593]],
      [[126576, 126576], "mapped", [1601]],
      [[126577, 126577], "mapped", [1589]],
      [[126578, 126578], "mapped", [1602]],
      [[126579, 126579], "disallowed"],
      [[126580, 126580], "mapped", [1588]],
      [[126581, 126581], "mapped", [1578]],
      [[126582, 126582], "mapped", [1579]],
      [[126583, 126583], "mapped", [1582]],
      [[126584, 126584], "disallowed"],
      [[126585, 126585], "mapped", [1590]],
      [[126586, 126586], "mapped", [1592]],
      [[126587, 126587], "mapped", [1594]],
      [[126588, 126588], "mapped", [1646]],
      [[126589, 126589], "disallowed"],
      [[126590, 126590], "mapped", [1697]],
      [[126591, 126591], "disallowed"],
      [[126592, 126592], "mapped", [1575]],
      [[126593, 126593], "mapped", [1576]],
      [[126594, 126594], "mapped", [1580]],
      [[126595, 126595], "mapped", [1583]],
      [[126596, 126596], "mapped", [1607]],
      [[126597, 126597], "mapped", [1608]],
      [[126598, 126598], "mapped", [1586]],
      [[126599, 126599], "mapped", [1581]],
      [[126600, 126600], "mapped", [1591]],
      [[126601, 126601], "mapped", [1610]],
      [[126602, 126602], "disallowed"],
      [[126603, 126603], "mapped", [1604]],
      [[126604, 126604], "mapped", [1605]],
      [[126605, 126605], "mapped", [1606]],
      [[126606, 126606], "mapped", [1587]],
      [[126607, 126607], "mapped", [1593]],
      [[126608, 126608], "mapped", [1601]],
      [[126609, 126609], "mapped", [1589]],
      [[126610, 126610], "mapped", [1602]],
      [[126611, 126611], "mapped", [1585]],
      [[126612, 126612], "mapped", [1588]],
      [[126613, 126613], "mapped", [1578]],
      [[126614, 126614], "mapped", [1579]],
      [[126615, 126615], "mapped", [1582]],
      [[126616, 126616], "mapped", [1584]],
      [[126617, 126617], "mapped", [1590]],
      [[126618, 126618], "mapped", [1592]],
      [[126619, 126619], "mapped", [1594]],
      [[126620, 126624], "disallowed"],
      [[126625, 126625], "mapped", [1576]],
      [[126626, 126626], "mapped", [1580]],
      [[126627, 126627], "mapped", [1583]],
      [[126628, 126628], "disallowed"],
      [[126629, 126629], "mapped", [1608]],
      [[126630, 126630], "mapped", [1586]],
      [[126631, 126631], "mapped", [1581]],
      [[126632, 126632], "mapped", [1591]],
      [[126633, 126633], "mapped", [1610]],
      [[126634, 126634], "disallowed"],
      [[126635, 126635], "mapped", [1604]],
      [[126636, 126636], "mapped", [1605]],
      [[126637, 126637], "mapped", [1606]],
      [[126638, 126638], "mapped", [1587]],
      [[126639, 126639], "mapped", [1593]],
      [[126640, 126640], "mapped", [1601]],
      [[126641, 126641], "mapped", [1589]],
      [[126642, 126642], "mapped", [1602]],
      [[126643, 126643], "mapped", [1585]],
      [[126644, 126644], "mapped", [1588]],
      [[126645, 126645], "mapped", [1578]],
      [[126646, 126646], "mapped", [1579]],
      [[126647, 126647], "mapped", [1582]],
      [[126648, 126648], "mapped", [1584]],
      [[126649, 126649], "mapped", [1590]],
      [[126650, 126650], "mapped", [1592]],
      [[126651, 126651], "mapped", [1594]],
      [[126652, 126703], "disallowed"],
      [[126704, 126705], "valid", [], "NV8"],
      [[126706, 126975], "disallowed"],
      [[126976, 127019], "valid", [], "NV8"],
      [[127020, 127023], "disallowed"],
      [[127024, 127123], "valid", [], "NV8"],
      [[127124, 127135], "disallowed"],
      [[127136, 127150], "valid", [], "NV8"],
      [[127151, 127152], "disallowed"],
      [[127153, 127166], "valid", [], "NV8"],
      [[127167, 127167], "valid", [], "NV8"],
      [[127168, 127168], "disallowed"],
      [[127169, 127183], "valid", [], "NV8"],
      [[127184, 127184], "disallowed"],
      [[127185, 127199], "valid", [], "NV8"],
      [[127200, 127221], "valid", [], "NV8"],
      [[127222, 127231], "disallowed"],
      [[127232, 127232], "disallowed"],
      [[127233, 127233], "disallowed_STD3_mapped", [48, 44]],
      [[127234, 127234], "disallowed_STD3_mapped", [49, 44]],
      [[127235, 127235], "disallowed_STD3_mapped", [50, 44]],
      [[127236, 127236], "disallowed_STD3_mapped", [51, 44]],
      [[127237, 127237], "disallowed_STD3_mapped", [52, 44]],
      [[127238, 127238], "disallowed_STD3_mapped", [53, 44]],
      [[127239, 127239], "disallowed_STD3_mapped", [54, 44]],
      [[127240, 127240], "disallowed_STD3_mapped", [55, 44]],
      [[127241, 127241], "disallowed_STD3_mapped", [56, 44]],
      [[127242, 127242], "disallowed_STD3_mapped", [57, 44]],
      [[127243, 127244], "valid", [], "NV8"],
      [[127245, 127247], "disallowed"],
      [[127248, 127248], "disallowed_STD3_mapped", [40, 97, 41]],
      [[127249, 127249], "disallowed_STD3_mapped", [40, 98, 41]],
      [[127250, 127250], "disallowed_STD3_mapped", [40, 99, 41]],
      [[127251, 127251], "disallowed_STD3_mapped", [40, 100, 41]],
      [[127252, 127252], "disallowed_STD3_mapped", [40, 101, 41]],
      [[127253, 127253], "disallowed_STD3_mapped", [40, 102, 41]],
      [[127254, 127254], "disallowed_STD3_mapped", [40, 103, 41]],
      [[127255, 127255], "disallowed_STD3_mapped", [40, 104, 41]],
      [[127256, 127256], "disallowed_STD3_mapped", [40, 105, 41]],
      [[127257, 127257], "disallowed_STD3_mapped", [40, 106, 41]],
      [[127258, 127258], "disallowed_STD3_mapped", [40, 107, 41]],
      [[127259, 127259], "disallowed_STD3_mapped", [40, 108, 41]],
      [[127260, 127260], "disallowed_STD3_mapped", [40, 109, 41]],
      [[127261, 127261], "disallowed_STD3_mapped", [40, 110, 41]],
      [[127262, 127262], "disallowed_STD3_mapped", [40, 111, 41]],
      [[127263, 127263], "disallowed_STD3_mapped", [40, 112, 41]],
      [[127264, 127264], "disallowed_STD3_mapped", [40, 113, 41]],
      [[127265, 127265], "disallowed_STD3_mapped", [40, 114, 41]],
      [[127266, 127266], "disallowed_STD3_mapped", [40, 115, 41]],
      [[127267, 127267], "disallowed_STD3_mapped", [40, 116, 41]],
      [[127268, 127268], "disallowed_STD3_mapped", [40, 117, 41]],
      [[127269, 127269], "disallowed_STD3_mapped", [40, 118, 41]],
      [[127270, 127270], "disallowed_STD3_mapped", [40, 119, 41]],
      [[127271, 127271], "disallowed_STD3_mapped", [40, 120, 41]],
      [[127272, 127272], "disallowed_STD3_mapped", [40, 121, 41]],
      [[127273, 127273], "disallowed_STD3_mapped", [40, 122, 41]],
      [[127274, 127274], "mapped", [12308, 115, 12309]],
      [[127275, 127275], "mapped", [99]],
      [[127276, 127276], "mapped", [114]],
      [[127277, 127277], "mapped", [99, 100]],
      [[127278, 127278], "mapped", [119, 122]],
      [[127279, 127279], "disallowed"],
      [[127280, 127280], "mapped", [97]],
      [[127281, 127281], "mapped", [98]],
      [[127282, 127282], "mapped", [99]],
      [[127283, 127283], "mapped", [100]],
      [[127284, 127284], "mapped", [101]],
      [[127285, 127285], "mapped", [102]],
      [[127286, 127286], "mapped", [103]],
      [[127287, 127287], "mapped", [104]],
      [[127288, 127288], "mapped", [105]],
      [[127289, 127289], "mapped", [106]],
      [[127290, 127290], "mapped", [107]],
      [[127291, 127291], "mapped", [108]],
      [[127292, 127292], "mapped", [109]],
      [[127293, 127293], "mapped", [110]],
      [[127294, 127294], "mapped", [111]],
      [[127295, 127295], "mapped", [112]],
      [[127296, 127296], "mapped", [113]],
      [[127297, 127297], "mapped", [114]],
      [[127298, 127298], "mapped", [115]],
      [[127299, 127299], "mapped", [116]],
      [[127300, 127300], "mapped", [117]],
      [[127301, 127301], "mapped", [118]],
      [[127302, 127302], "mapped", [119]],
      [[127303, 127303], "mapped", [120]],
      [[127304, 127304], "mapped", [121]],
      [[127305, 127305], "mapped", [122]],
      [[127306, 127306], "mapped", [104, 118]],
      [[127307, 127307], "mapped", [109, 118]],
      [[127308, 127308], "mapped", [115, 100]],
      [[127309, 127309], "mapped", [115, 115]],
      [[127310, 127310], "mapped", [112, 112, 118]],
      [[127311, 127311], "mapped", [119, 99]],
      [[127312, 127318], "valid", [], "NV8"],
      [[127319, 127319], "valid", [], "NV8"],
      [[127320, 127326], "valid", [], "NV8"],
      [[127327, 127327], "valid", [], "NV8"],
      [[127328, 127337], "valid", [], "NV8"],
      [[127338, 127338], "mapped", [109, 99]],
      [[127339, 127339], "mapped", [109, 100]],
      [[127340, 127343], "disallowed"],
      [[127344, 127352], "valid", [], "NV8"],
      [[127353, 127353], "valid", [], "NV8"],
      [[127354, 127354], "valid", [], "NV8"],
      [[127355, 127356], "valid", [], "NV8"],
      [[127357, 127358], "valid", [], "NV8"],
      [[127359, 127359], "valid", [], "NV8"],
      [[127360, 127369], "valid", [], "NV8"],
      [[127370, 127373], "valid", [], "NV8"],
      [[127374, 127375], "valid", [], "NV8"],
      [[127376, 127376], "mapped", [100, 106]],
      [[127377, 127386], "valid", [], "NV8"],
      [[127387, 127461], "disallowed"],
      [[127462, 127487], "valid", [], "NV8"],
      [[127488, 127488], "mapped", [12411, 12363]],
      [[127489, 127489], "mapped", [12467, 12467]],
      [[127490, 127490], "mapped", [12469]],
      [[127491, 127503], "disallowed"],
      [[127504, 127504], "mapped", [25163]],
      [[127505, 127505], "mapped", [23383]],
      [[127506, 127506], "mapped", [21452]],
      [[127507, 127507], "mapped", [12487]],
      [[127508, 127508], "mapped", [20108]],
      [[127509, 127509], "mapped", [22810]],
      [[127510, 127510], "mapped", [35299]],
      [[127511, 127511], "mapped", [22825]],
      [[127512, 127512], "mapped", [20132]],
      [[127513, 127513], "mapped", [26144]],
      [[127514, 127514], "mapped", [28961]],
      [[127515, 127515], "mapped", [26009]],
      [[127516, 127516], "mapped", [21069]],
      [[127517, 127517], "mapped", [24460]],
      [[127518, 127518], "mapped", [20877]],
      [[127519, 127519], "mapped", [26032]],
      [[127520, 127520], "mapped", [21021]],
      [[127521, 127521], "mapped", [32066]],
      [[127522, 127522], "mapped", [29983]],
      [[127523, 127523], "mapped", [36009]],
      [[127524, 127524], "mapped", [22768]],
      [[127525, 127525], "mapped", [21561]],
      [[127526, 127526], "mapped", [28436]],
      [[127527, 127527], "mapped", [25237]],
      [[127528, 127528], "mapped", [25429]],
      [[127529, 127529], "mapped", [19968]],
      [[127530, 127530], "mapped", [19977]],
      [[127531, 127531], "mapped", [36938]],
      [[127532, 127532], "mapped", [24038]],
      [[127533, 127533], "mapped", [20013]],
      [[127534, 127534], "mapped", [21491]],
      [[127535, 127535], "mapped", [25351]],
      [[127536, 127536], "mapped", [36208]],
      [[127537, 127537], "mapped", [25171]],
      [[127538, 127538], "mapped", [31105]],
      [[127539, 127539], "mapped", [31354]],
      [[127540, 127540], "mapped", [21512]],
      [[127541, 127541], "mapped", [28288]],
      [[127542, 127542], "mapped", [26377]],
      [[127543, 127543], "mapped", [26376]],
      [[127544, 127544], "mapped", [30003]],
      [[127545, 127545], "mapped", [21106]],
      [[127546, 127546], "mapped", [21942]],
      [[127547, 127551], "disallowed"],
      [[127552, 127552], "mapped", [12308, 26412, 12309]],
      [[127553, 127553], "mapped", [12308, 19977, 12309]],
      [[127554, 127554], "mapped", [12308, 20108, 12309]],
      [[127555, 127555], "mapped", [12308, 23433, 12309]],
      [[127556, 127556], "mapped", [12308, 28857, 12309]],
      [[127557, 127557], "mapped", [12308, 25171, 12309]],
      [[127558, 127558], "mapped", [12308, 30423, 12309]],
      [[127559, 127559], "mapped", [12308, 21213, 12309]],
      [[127560, 127560], "mapped", [12308, 25943, 12309]],
      [[127561, 127567], "disallowed"],
      [[127568, 127568], "mapped", [24471]],
      [[127569, 127569], "mapped", [21487]],
      [[127570, 127743], "disallowed"],
      [[127744, 127776], "valid", [], "NV8"],
      [[127777, 127788], "valid", [], "NV8"],
      [[127789, 127791], "valid", [], "NV8"],
      [[127792, 127797], "valid", [], "NV8"],
      [[127798, 127798], "valid", [], "NV8"],
      [[127799, 127868], "valid", [], "NV8"],
      [[127869, 127869], "valid", [], "NV8"],
      [[127870, 127871], "valid", [], "NV8"],
      [[127872, 127891], "valid", [], "NV8"],
      [[127892, 127903], "valid", [], "NV8"],
      [[127904, 127940], "valid", [], "NV8"],
      [[127941, 127941], "valid", [], "NV8"],
      [[127942, 127946], "valid", [], "NV8"],
      [[127947, 127950], "valid", [], "NV8"],
      [[127951, 127955], "valid", [], "NV8"],
      [[127956, 127967], "valid", [], "NV8"],
      [[127968, 127984], "valid", [], "NV8"],
      [[127985, 127991], "valid", [], "NV8"],
      [[127992, 127999], "valid", [], "NV8"],
      [[128e3, 128062], "valid", [], "NV8"],
      [[128063, 128063], "valid", [], "NV8"],
      [[128064, 128064], "valid", [], "NV8"],
      [[128065, 128065], "valid", [], "NV8"],
      [[128066, 128247], "valid", [], "NV8"],
      [[128248, 128248], "valid", [], "NV8"],
      [[128249, 128252], "valid", [], "NV8"],
      [[128253, 128254], "valid", [], "NV8"],
      [[128255, 128255], "valid", [], "NV8"],
      [[128256, 128317], "valid", [], "NV8"],
      [[128318, 128319], "valid", [], "NV8"],
      [[128320, 128323], "valid", [], "NV8"],
      [[128324, 128330], "valid", [], "NV8"],
      [[128331, 128335], "valid", [], "NV8"],
      [[128336, 128359], "valid", [], "NV8"],
      [[128360, 128377], "valid", [], "NV8"],
      [[128378, 128378], "disallowed"],
      [[128379, 128419], "valid", [], "NV8"],
      [[128420, 128420], "disallowed"],
      [[128421, 128506], "valid", [], "NV8"],
      [[128507, 128511], "valid", [], "NV8"],
      [[128512, 128512], "valid", [], "NV8"],
      [[128513, 128528], "valid", [], "NV8"],
      [[128529, 128529], "valid", [], "NV8"],
      [[128530, 128532], "valid", [], "NV8"],
      [[128533, 128533], "valid", [], "NV8"],
      [[128534, 128534], "valid", [], "NV8"],
      [[128535, 128535], "valid", [], "NV8"],
      [[128536, 128536], "valid", [], "NV8"],
      [[128537, 128537], "valid", [], "NV8"],
      [[128538, 128538], "valid", [], "NV8"],
      [[128539, 128539], "valid", [], "NV8"],
      [[128540, 128542], "valid", [], "NV8"],
      [[128543, 128543], "valid", [], "NV8"],
      [[128544, 128549], "valid", [], "NV8"],
      [[128550, 128551], "valid", [], "NV8"],
      [[128552, 128555], "valid", [], "NV8"],
      [[128556, 128556], "valid", [], "NV8"],
      [[128557, 128557], "valid", [], "NV8"],
      [[128558, 128559], "valid", [], "NV8"],
      [[128560, 128563], "valid", [], "NV8"],
      [[128564, 128564], "valid", [], "NV8"],
      [[128565, 128576], "valid", [], "NV8"],
      [[128577, 128578], "valid", [], "NV8"],
      [[128579, 128580], "valid", [], "NV8"],
      [[128581, 128591], "valid", [], "NV8"],
      [[128592, 128639], "valid", [], "NV8"],
      [[128640, 128709], "valid", [], "NV8"],
      [[128710, 128719], "valid", [], "NV8"],
      [[128720, 128720], "valid", [], "NV8"],
      [[128721, 128735], "disallowed"],
      [[128736, 128748], "valid", [], "NV8"],
      [[128749, 128751], "disallowed"],
      [[128752, 128755], "valid", [], "NV8"],
      [[128756, 128767], "disallowed"],
      [[128768, 128883], "valid", [], "NV8"],
      [[128884, 128895], "disallowed"],
      [[128896, 128980], "valid", [], "NV8"],
      [[128981, 129023], "disallowed"],
      [[129024, 129035], "valid", [], "NV8"],
      [[129036, 129039], "disallowed"],
      [[129040, 129095], "valid", [], "NV8"],
      [[129096, 129103], "disallowed"],
      [[129104, 129113], "valid", [], "NV8"],
      [[129114, 129119], "disallowed"],
      [[129120, 129159], "valid", [], "NV8"],
      [[129160, 129167], "disallowed"],
      [[129168, 129197], "valid", [], "NV8"],
      [[129198, 129295], "disallowed"],
      [[129296, 129304], "valid", [], "NV8"],
      [[129305, 129407], "disallowed"],
      [[129408, 129412], "valid", [], "NV8"],
      [[129413, 129471], "disallowed"],
      [[129472, 129472], "valid", [], "NV8"],
      [[129473, 131069], "disallowed"],
      [[131070, 131071], "disallowed"],
      [[131072, 173782], "valid"],
      [[173783, 173823], "disallowed"],
      [[173824, 177972], "valid"],
      [[177973, 177983], "disallowed"],
      [[177984, 178205], "valid"],
      [[178206, 178207], "disallowed"],
      [[178208, 183969], "valid"],
      [[183970, 194559], "disallowed"],
      [[194560, 194560], "mapped", [20029]],
      [[194561, 194561], "mapped", [20024]],
      [[194562, 194562], "mapped", [20033]],
      [[194563, 194563], "mapped", [131362]],
      [[194564, 194564], "mapped", [20320]],
      [[194565, 194565], "mapped", [20398]],
      [[194566, 194566], "mapped", [20411]],
      [[194567, 194567], "mapped", [20482]],
      [[194568, 194568], "mapped", [20602]],
      [[194569, 194569], "mapped", [20633]],
      [[194570, 194570], "mapped", [20711]],
      [[194571, 194571], "mapped", [20687]],
      [[194572, 194572], "mapped", [13470]],
      [[194573, 194573], "mapped", [132666]],
      [[194574, 194574], "mapped", [20813]],
      [[194575, 194575], "mapped", [20820]],
      [[194576, 194576], "mapped", [20836]],
      [[194577, 194577], "mapped", [20855]],
      [[194578, 194578], "mapped", [132380]],
      [[194579, 194579], "mapped", [13497]],
      [[194580, 194580], "mapped", [20839]],
      [[194581, 194581], "mapped", [20877]],
      [[194582, 194582], "mapped", [132427]],
      [[194583, 194583], "mapped", [20887]],
      [[194584, 194584], "mapped", [20900]],
      [[194585, 194585], "mapped", [20172]],
      [[194586, 194586], "mapped", [20908]],
      [[194587, 194587], "mapped", [20917]],
      [[194588, 194588], "mapped", [168415]],
      [[194589, 194589], "mapped", [20981]],
      [[194590, 194590], "mapped", [20995]],
      [[194591, 194591], "mapped", [13535]],
      [[194592, 194592], "mapped", [21051]],
      [[194593, 194593], "mapped", [21062]],
      [[194594, 194594], "mapped", [21106]],
      [[194595, 194595], "mapped", [21111]],
      [[194596, 194596], "mapped", [13589]],
      [[194597, 194597], "mapped", [21191]],
      [[194598, 194598], "mapped", [21193]],
      [[194599, 194599], "mapped", [21220]],
      [[194600, 194600], "mapped", [21242]],
      [[194601, 194601], "mapped", [21253]],
      [[194602, 194602], "mapped", [21254]],
      [[194603, 194603], "mapped", [21271]],
      [[194604, 194604], "mapped", [21321]],
      [[194605, 194605], "mapped", [21329]],
      [[194606, 194606], "mapped", [21338]],
      [[194607, 194607], "mapped", [21363]],
      [[194608, 194608], "mapped", [21373]],
      [[194609, 194611], "mapped", [21375]],
      [[194612, 194612], "mapped", [133676]],
      [[194613, 194613], "mapped", [28784]],
      [[194614, 194614], "mapped", [21450]],
      [[194615, 194615], "mapped", [21471]],
      [[194616, 194616], "mapped", [133987]],
      [[194617, 194617], "mapped", [21483]],
      [[194618, 194618], "mapped", [21489]],
      [[194619, 194619], "mapped", [21510]],
      [[194620, 194620], "mapped", [21662]],
      [[194621, 194621], "mapped", [21560]],
      [[194622, 194622], "mapped", [21576]],
      [[194623, 194623], "mapped", [21608]],
      [[194624, 194624], "mapped", [21666]],
      [[194625, 194625], "mapped", [21750]],
      [[194626, 194626], "mapped", [21776]],
      [[194627, 194627], "mapped", [21843]],
      [[194628, 194628], "mapped", [21859]],
      [[194629, 194630], "mapped", [21892]],
      [[194631, 194631], "mapped", [21913]],
      [[194632, 194632], "mapped", [21931]],
      [[194633, 194633], "mapped", [21939]],
      [[194634, 194634], "mapped", [21954]],
      [[194635, 194635], "mapped", [22294]],
      [[194636, 194636], "mapped", [22022]],
      [[194637, 194637], "mapped", [22295]],
      [[194638, 194638], "mapped", [22097]],
      [[194639, 194639], "mapped", [22132]],
      [[194640, 194640], "mapped", [20999]],
      [[194641, 194641], "mapped", [22766]],
      [[194642, 194642], "mapped", [22478]],
      [[194643, 194643], "mapped", [22516]],
      [[194644, 194644], "mapped", [22541]],
      [[194645, 194645], "mapped", [22411]],
      [[194646, 194646], "mapped", [22578]],
      [[194647, 194647], "mapped", [22577]],
      [[194648, 194648], "mapped", [22700]],
      [[194649, 194649], "mapped", [136420]],
      [[194650, 194650], "mapped", [22770]],
      [[194651, 194651], "mapped", [22775]],
      [[194652, 194652], "mapped", [22790]],
      [[194653, 194653], "mapped", [22810]],
      [[194654, 194654], "mapped", [22818]],
      [[194655, 194655], "mapped", [22882]],
      [[194656, 194656], "mapped", [136872]],
      [[194657, 194657], "mapped", [136938]],
      [[194658, 194658], "mapped", [23020]],
      [[194659, 194659], "mapped", [23067]],
      [[194660, 194660], "mapped", [23079]],
      [[194661, 194661], "mapped", [23e3]],
      [[194662, 194662], "mapped", [23142]],
      [[194663, 194663], "mapped", [14062]],
      [[194664, 194664], "disallowed"],
      [[194665, 194665], "mapped", [23304]],
      [[194666, 194667], "mapped", [23358]],
      [[194668, 194668], "mapped", [137672]],
      [[194669, 194669], "mapped", [23491]],
      [[194670, 194670], "mapped", [23512]],
      [[194671, 194671], "mapped", [23527]],
      [[194672, 194672], "mapped", [23539]],
      [[194673, 194673], "mapped", [138008]],
      [[194674, 194674], "mapped", [23551]],
      [[194675, 194675], "mapped", [23558]],
      [[194676, 194676], "disallowed"],
      [[194677, 194677], "mapped", [23586]],
      [[194678, 194678], "mapped", [14209]],
      [[194679, 194679], "mapped", [23648]],
      [[194680, 194680], "mapped", [23662]],
      [[194681, 194681], "mapped", [23744]],
      [[194682, 194682], "mapped", [23693]],
      [[194683, 194683], "mapped", [138724]],
      [[194684, 194684], "mapped", [23875]],
      [[194685, 194685], "mapped", [138726]],
      [[194686, 194686], "mapped", [23918]],
      [[194687, 194687], "mapped", [23915]],
      [[194688, 194688], "mapped", [23932]],
      [[194689, 194689], "mapped", [24033]],
      [[194690, 194690], "mapped", [24034]],
      [[194691, 194691], "mapped", [14383]],
      [[194692, 194692], "mapped", [24061]],
      [[194693, 194693], "mapped", [24104]],
      [[194694, 194694], "mapped", [24125]],
      [[194695, 194695], "mapped", [24169]],
      [[194696, 194696], "mapped", [14434]],
      [[194697, 194697], "mapped", [139651]],
      [[194698, 194698], "mapped", [14460]],
      [[194699, 194699], "mapped", [24240]],
      [[194700, 194700], "mapped", [24243]],
      [[194701, 194701], "mapped", [24246]],
      [[194702, 194702], "mapped", [24266]],
      [[194703, 194703], "mapped", [172946]],
      [[194704, 194704], "mapped", [24318]],
      [[194705, 194706], "mapped", [140081]],
      [[194707, 194707], "mapped", [33281]],
      [[194708, 194709], "mapped", [24354]],
      [[194710, 194710], "mapped", [14535]],
      [[194711, 194711], "mapped", [144056]],
      [[194712, 194712], "mapped", [156122]],
      [[194713, 194713], "mapped", [24418]],
      [[194714, 194714], "mapped", [24427]],
      [[194715, 194715], "mapped", [14563]],
      [[194716, 194716], "mapped", [24474]],
      [[194717, 194717], "mapped", [24525]],
      [[194718, 194718], "mapped", [24535]],
      [[194719, 194719], "mapped", [24569]],
      [[194720, 194720], "mapped", [24705]],
      [[194721, 194721], "mapped", [14650]],
      [[194722, 194722], "mapped", [14620]],
      [[194723, 194723], "mapped", [24724]],
      [[194724, 194724], "mapped", [141012]],
      [[194725, 194725], "mapped", [24775]],
      [[194726, 194726], "mapped", [24904]],
      [[194727, 194727], "mapped", [24908]],
      [[194728, 194728], "mapped", [24910]],
      [[194729, 194729], "mapped", [24908]],
      [[194730, 194730], "mapped", [24954]],
      [[194731, 194731], "mapped", [24974]],
      [[194732, 194732], "mapped", [25010]],
      [[194733, 194733], "mapped", [24996]],
      [[194734, 194734], "mapped", [25007]],
      [[194735, 194735], "mapped", [25054]],
      [[194736, 194736], "mapped", [25074]],
      [[194737, 194737], "mapped", [25078]],
      [[194738, 194738], "mapped", [25104]],
      [[194739, 194739], "mapped", [25115]],
      [[194740, 194740], "mapped", [25181]],
      [[194741, 194741], "mapped", [25265]],
      [[194742, 194742], "mapped", [25300]],
      [[194743, 194743], "mapped", [25424]],
      [[194744, 194744], "mapped", [142092]],
      [[194745, 194745], "mapped", [25405]],
      [[194746, 194746], "mapped", [25340]],
      [[194747, 194747], "mapped", [25448]],
      [[194748, 194748], "mapped", [25475]],
      [[194749, 194749], "mapped", [25572]],
      [[194750, 194750], "mapped", [142321]],
      [[194751, 194751], "mapped", [25634]],
      [[194752, 194752], "mapped", [25541]],
      [[194753, 194753], "mapped", [25513]],
      [[194754, 194754], "mapped", [14894]],
      [[194755, 194755], "mapped", [25705]],
      [[194756, 194756], "mapped", [25726]],
      [[194757, 194757], "mapped", [25757]],
      [[194758, 194758], "mapped", [25719]],
      [[194759, 194759], "mapped", [14956]],
      [[194760, 194760], "mapped", [25935]],
      [[194761, 194761], "mapped", [25964]],
      [[194762, 194762], "mapped", [143370]],
      [[194763, 194763], "mapped", [26083]],
      [[194764, 194764], "mapped", [26360]],
      [[194765, 194765], "mapped", [26185]],
      [[194766, 194766], "mapped", [15129]],
      [[194767, 194767], "mapped", [26257]],
      [[194768, 194768], "mapped", [15112]],
      [[194769, 194769], "mapped", [15076]],
      [[194770, 194770], "mapped", [20882]],
      [[194771, 194771], "mapped", [20885]],
      [[194772, 194772], "mapped", [26368]],
      [[194773, 194773], "mapped", [26268]],
      [[194774, 194774], "mapped", [32941]],
      [[194775, 194775], "mapped", [17369]],
      [[194776, 194776], "mapped", [26391]],
      [[194777, 194777], "mapped", [26395]],
      [[194778, 194778], "mapped", [26401]],
      [[194779, 194779], "mapped", [26462]],
      [[194780, 194780], "mapped", [26451]],
      [[194781, 194781], "mapped", [144323]],
      [[194782, 194782], "mapped", [15177]],
      [[194783, 194783], "mapped", [26618]],
      [[194784, 194784], "mapped", [26501]],
      [[194785, 194785], "mapped", [26706]],
      [[194786, 194786], "mapped", [26757]],
      [[194787, 194787], "mapped", [144493]],
      [[194788, 194788], "mapped", [26766]],
      [[194789, 194789], "mapped", [26655]],
      [[194790, 194790], "mapped", [26900]],
      [[194791, 194791], "mapped", [15261]],
      [[194792, 194792], "mapped", [26946]],
      [[194793, 194793], "mapped", [27043]],
      [[194794, 194794], "mapped", [27114]],
      [[194795, 194795], "mapped", [27304]],
      [[194796, 194796], "mapped", [145059]],
      [[194797, 194797], "mapped", [27355]],
      [[194798, 194798], "mapped", [15384]],
      [[194799, 194799], "mapped", [27425]],
      [[194800, 194800], "mapped", [145575]],
      [[194801, 194801], "mapped", [27476]],
      [[194802, 194802], "mapped", [15438]],
      [[194803, 194803], "mapped", [27506]],
      [[194804, 194804], "mapped", [27551]],
      [[194805, 194805], "mapped", [27578]],
      [[194806, 194806], "mapped", [27579]],
      [[194807, 194807], "mapped", [146061]],
      [[194808, 194808], "mapped", [138507]],
      [[194809, 194809], "mapped", [146170]],
      [[194810, 194810], "mapped", [27726]],
      [[194811, 194811], "mapped", [146620]],
      [[194812, 194812], "mapped", [27839]],
      [[194813, 194813], "mapped", [27853]],
      [[194814, 194814], "mapped", [27751]],
      [[194815, 194815], "mapped", [27926]],
      [[194816, 194816], "mapped", [27966]],
      [[194817, 194817], "mapped", [28023]],
      [[194818, 194818], "mapped", [27969]],
      [[194819, 194819], "mapped", [28009]],
      [[194820, 194820], "mapped", [28024]],
      [[194821, 194821], "mapped", [28037]],
      [[194822, 194822], "mapped", [146718]],
      [[194823, 194823], "mapped", [27956]],
      [[194824, 194824], "mapped", [28207]],
      [[194825, 194825], "mapped", [28270]],
      [[194826, 194826], "mapped", [15667]],
      [[194827, 194827], "mapped", [28363]],
      [[194828, 194828], "mapped", [28359]],
      [[194829, 194829], "mapped", [147153]],
      [[194830, 194830], "mapped", [28153]],
      [[194831, 194831], "mapped", [28526]],
      [[194832, 194832], "mapped", [147294]],
      [[194833, 194833], "mapped", [147342]],
      [[194834, 194834], "mapped", [28614]],
      [[194835, 194835], "mapped", [28729]],
      [[194836, 194836], "mapped", [28702]],
      [[194837, 194837], "mapped", [28699]],
      [[194838, 194838], "mapped", [15766]],
      [[194839, 194839], "mapped", [28746]],
      [[194840, 194840], "mapped", [28797]],
      [[194841, 194841], "mapped", [28791]],
      [[194842, 194842], "mapped", [28845]],
      [[194843, 194843], "mapped", [132389]],
      [[194844, 194844], "mapped", [28997]],
      [[194845, 194845], "mapped", [148067]],
      [[194846, 194846], "mapped", [29084]],
      [[194847, 194847], "disallowed"],
      [[194848, 194848], "mapped", [29224]],
      [[194849, 194849], "mapped", [29237]],
      [[194850, 194850], "mapped", [29264]],
      [[194851, 194851], "mapped", [149e3]],
      [[194852, 194852], "mapped", [29312]],
      [[194853, 194853], "mapped", [29333]],
      [[194854, 194854], "mapped", [149301]],
      [[194855, 194855], "mapped", [149524]],
      [[194856, 194856], "mapped", [29562]],
      [[194857, 194857], "mapped", [29579]],
      [[194858, 194858], "mapped", [16044]],
      [[194859, 194859], "mapped", [29605]],
      [[194860, 194861], "mapped", [16056]],
      [[194862, 194862], "mapped", [29767]],
      [[194863, 194863], "mapped", [29788]],
      [[194864, 194864], "mapped", [29809]],
      [[194865, 194865], "mapped", [29829]],
      [[194866, 194866], "mapped", [29898]],
      [[194867, 194867], "mapped", [16155]],
      [[194868, 194868], "mapped", [29988]],
      [[194869, 194869], "mapped", [150582]],
      [[194870, 194870], "mapped", [30014]],
      [[194871, 194871], "mapped", [150674]],
      [[194872, 194872], "mapped", [30064]],
      [[194873, 194873], "mapped", [139679]],
      [[194874, 194874], "mapped", [30224]],
      [[194875, 194875], "mapped", [151457]],
      [[194876, 194876], "mapped", [151480]],
      [[194877, 194877], "mapped", [151620]],
      [[194878, 194878], "mapped", [16380]],
      [[194879, 194879], "mapped", [16392]],
      [[194880, 194880], "mapped", [30452]],
      [[194881, 194881], "mapped", [151795]],
      [[194882, 194882], "mapped", [151794]],
      [[194883, 194883], "mapped", [151833]],
      [[194884, 194884], "mapped", [151859]],
      [[194885, 194885], "mapped", [30494]],
      [[194886, 194887], "mapped", [30495]],
      [[194888, 194888], "mapped", [30538]],
      [[194889, 194889], "mapped", [16441]],
      [[194890, 194890], "mapped", [30603]],
      [[194891, 194891], "mapped", [16454]],
      [[194892, 194892], "mapped", [16534]],
      [[194893, 194893], "mapped", [152605]],
      [[194894, 194894], "mapped", [30798]],
      [[194895, 194895], "mapped", [30860]],
      [[194896, 194896], "mapped", [30924]],
      [[194897, 194897], "mapped", [16611]],
      [[194898, 194898], "mapped", [153126]],
      [[194899, 194899], "mapped", [31062]],
      [[194900, 194900], "mapped", [153242]],
      [[194901, 194901], "mapped", [153285]],
      [[194902, 194902], "mapped", [31119]],
      [[194903, 194903], "mapped", [31211]],
      [[194904, 194904], "mapped", [16687]],
      [[194905, 194905], "mapped", [31296]],
      [[194906, 194906], "mapped", [31306]],
      [[194907, 194907], "mapped", [31311]],
      [[194908, 194908], "mapped", [153980]],
      [[194909, 194910], "mapped", [154279]],
      [[194911, 194911], "disallowed"],
      [[194912, 194912], "mapped", [16898]],
      [[194913, 194913], "mapped", [154539]],
      [[194914, 194914], "mapped", [31686]],
      [[194915, 194915], "mapped", [31689]],
      [[194916, 194916], "mapped", [16935]],
      [[194917, 194917], "mapped", [154752]],
      [[194918, 194918], "mapped", [31954]],
      [[194919, 194919], "mapped", [17056]],
      [[194920, 194920], "mapped", [31976]],
      [[194921, 194921], "mapped", [31971]],
      [[194922, 194922], "mapped", [32e3]],
      [[194923, 194923], "mapped", [155526]],
      [[194924, 194924], "mapped", [32099]],
      [[194925, 194925], "mapped", [17153]],
      [[194926, 194926], "mapped", [32199]],
      [[194927, 194927], "mapped", [32258]],
      [[194928, 194928], "mapped", [32325]],
      [[194929, 194929], "mapped", [17204]],
      [[194930, 194930], "mapped", [156200]],
      [[194931, 194931], "mapped", [156231]],
      [[194932, 194932], "mapped", [17241]],
      [[194933, 194933], "mapped", [156377]],
      [[194934, 194934], "mapped", [32634]],
      [[194935, 194935], "mapped", [156478]],
      [[194936, 194936], "mapped", [32661]],
      [[194937, 194937], "mapped", [32762]],
      [[194938, 194938], "mapped", [32773]],
      [[194939, 194939], "mapped", [156890]],
      [[194940, 194940], "mapped", [156963]],
      [[194941, 194941], "mapped", [32864]],
      [[194942, 194942], "mapped", [157096]],
      [[194943, 194943], "mapped", [32880]],
      [[194944, 194944], "mapped", [144223]],
      [[194945, 194945], "mapped", [17365]],
      [[194946, 194946], "mapped", [32946]],
      [[194947, 194947], "mapped", [33027]],
      [[194948, 194948], "mapped", [17419]],
      [[194949, 194949], "mapped", [33086]],
      [[194950, 194950], "mapped", [23221]],
      [[194951, 194951], "mapped", [157607]],
      [[194952, 194952], "mapped", [157621]],
      [[194953, 194953], "mapped", [144275]],
      [[194954, 194954], "mapped", [144284]],
      [[194955, 194955], "mapped", [33281]],
      [[194956, 194956], "mapped", [33284]],
      [[194957, 194957], "mapped", [36766]],
      [[194958, 194958], "mapped", [17515]],
      [[194959, 194959], "mapped", [33425]],
      [[194960, 194960], "mapped", [33419]],
      [[194961, 194961], "mapped", [33437]],
      [[194962, 194962], "mapped", [21171]],
      [[194963, 194963], "mapped", [33457]],
      [[194964, 194964], "mapped", [33459]],
      [[194965, 194965], "mapped", [33469]],
      [[194966, 194966], "mapped", [33510]],
      [[194967, 194967], "mapped", [158524]],
      [[194968, 194968], "mapped", [33509]],
      [[194969, 194969], "mapped", [33565]],
      [[194970, 194970], "mapped", [33635]],
      [[194971, 194971], "mapped", [33709]],
      [[194972, 194972], "mapped", [33571]],
      [[194973, 194973], "mapped", [33725]],
      [[194974, 194974], "mapped", [33767]],
      [[194975, 194975], "mapped", [33879]],
      [[194976, 194976], "mapped", [33619]],
      [[194977, 194977], "mapped", [33738]],
      [[194978, 194978], "mapped", [33740]],
      [[194979, 194979], "mapped", [33756]],
      [[194980, 194980], "mapped", [158774]],
      [[194981, 194981], "mapped", [159083]],
      [[194982, 194982], "mapped", [158933]],
      [[194983, 194983], "mapped", [17707]],
      [[194984, 194984], "mapped", [34033]],
      [[194985, 194985], "mapped", [34035]],
      [[194986, 194986], "mapped", [34070]],
      [[194987, 194987], "mapped", [160714]],
      [[194988, 194988], "mapped", [34148]],
      [[194989, 194989], "mapped", [159532]],
      [[194990, 194990], "mapped", [17757]],
      [[194991, 194991], "mapped", [17761]],
      [[194992, 194992], "mapped", [159665]],
      [[194993, 194993], "mapped", [159954]],
      [[194994, 194994], "mapped", [17771]],
      [[194995, 194995], "mapped", [34384]],
      [[194996, 194996], "mapped", [34396]],
      [[194997, 194997], "mapped", [34407]],
      [[194998, 194998], "mapped", [34409]],
      [[194999, 194999], "mapped", [34473]],
      [[195e3, 195e3], "mapped", [34440]],
      [[195001, 195001], "mapped", [34574]],
      [[195002, 195002], "mapped", [34530]],
      [[195003, 195003], "mapped", [34681]],
      [[195004, 195004], "mapped", [34600]],
      [[195005, 195005], "mapped", [34667]],
      [[195006, 195006], "mapped", [34694]],
      [[195007, 195007], "disallowed"],
      [[195008, 195008], "mapped", [34785]],
      [[195009, 195009], "mapped", [34817]],
      [[195010, 195010], "mapped", [17913]],
      [[195011, 195011], "mapped", [34912]],
      [[195012, 195012], "mapped", [34915]],
      [[195013, 195013], "mapped", [161383]],
      [[195014, 195014], "mapped", [35031]],
      [[195015, 195015], "mapped", [35038]],
      [[195016, 195016], "mapped", [17973]],
      [[195017, 195017], "mapped", [35066]],
      [[195018, 195018], "mapped", [13499]],
      [[195019, 195019], "mapped", [161966]],
      [[195020, 195020], "mapped", [162150]],
      [[195021, 195021], "mapped", [18110]],
      [[195022, 195022], "mapped", [18119]],
      [[195023, 195023], "mapped", [35488]],
      [[195024, 195024], "mapped", [35565]],
      [[195025, 195025], "mapped", [35722]],
      [[195026, 195026], "mapped", [35925]],
      [[195027, 195027], "mapped", [162984]],
      [[195028, 195028], "mapped", [36011]],
      [[195029, 195029], "mapped", [36033]],
      [[195030, 195030], "mapped", [36123]],
      [[195031, 195031], "mapped", [36215]],
      [[195032, 195032], "mapped", [163631]],
      [[195033, 195033], "mapped", [133124]],
      [[195034, 195034], "mapped", [36299]],
      [[195035, 195035], "mapped", [36284]],
      [[195036, 195036], "mapped", [36336]],
      [[195037, 195037], "mapped", [133342]],
      [[195038, 195038], "mapped", [36564]],
      [[195039, 195039], "mapped", [36664]],
      [[195040, 195040], "mapped", [165330]],
      [[195041, 195041], "mapped", [165357]],
      [[195042, 195042], "mapped", [37012]],
      [[195043, 195043], "mapped", [37105]],
      [[195044, 195044], "mapped", [37137]],
      [[195045, 195045], "mapped", [165678]],
      [[195046, 195046], "mapped", [37147]],
      [[195047, 195047], "mapped", [37432]],
      [[195048, 195048], "mapped", [37591]],
      [[195049, 195049], "mapped", [37592]],
      [[195050, 195050], "mapped", [37500]],
      [[195051, 195051], "mapped", [37881]],
      [[195052, 195052], "mapped", [37909]],
      [[195053, 195053], "mapped", [166906]],
      [[195054, 195054], "mapped", [38283]],
      [[195055, 195055], "mapped", [18837]],
      [[195056, 195056], "mapped", [38327]],
      [[195057, 195057], "mapped", [167287]],
      [[195058, 195058], "mapped", [18918]],
      [[195059, 195059], "mapped", [38595]],
      [[195060, 195060], "mapped", [23986]],
      [[195061, 195061], "mapped", [38691]],
      [[195062, 195062], "mapped", [168261]],
      [[195063, 195063], "mapped", [168474]],
      [[195064, 195064], "mapped", [19054]],
      [[195065, 195065], "mapped", [19062]],
      [[195066, 195066], "mapped", [38880]],
      [[195067, 195067], "mapped", [168970]],
      [[195068, 195068], "mapped", [19122]],
      [[195069, 195069], "mapped", [169110]],
      [[195070, 195071], "mapped", [38923]],
      [[195072, 195072], "mapped", [38953]],
      [[195073, 195073], "mapped", [169398]],
      [[195074, 195074], "mapped", [39138]],
      [[195075, 195075], "mapped", [19251]],
      [[195076, 195076], "mapped", [39209]],
      [[195077, 195077], "mapped", [39335]],
      [[195078, 195078], "mapped", [39362]],
      [[195079, 195079], "mapped", [39422]],
      [[195080, 195080], "mapped", [19406]],
      [[195081, 195081], "mapped", [170800]],
      [[195082, 195082], "mapped", [39698]],
      [[195083, 195083], "mapped", [4e4]],
      [[195084, 195084], "mapped", [40189]],
      [[195085, 195085], "mapped", [19662]],
      [[195086, 195086], "mapped", [19693]],
      [[195087, 195087], "mapped", [40295]],
      [[195088, 195088], "mapped", [172238]],
      [[195089, 195089], "mapped", [19704]],
      [[195090, 195090], "mapped", [172293]],
      [[195091, 195091], "mapped", [172558]],
      [[195092, 195092], "mapped", [172689]],
      [[195093, 195093], "mapped", [40635]],
      [[195094, 195094], "mapped", [19798]],
      [[195095, 195095], "mapped", [40697]],
      [[195096, 195096], "mapped", [40702]],
      [[195097, 195097], "mapped", [40709]],
      [[195098, 195098], "mapped", [40719]],
      [[195099, 195099], "mapped", [40726]],
      [[195100, 195100], "mapped", [40763]],
      [[195101, 195101], "mapped", [173568]],
      [[195102, 196605], "disallowed"],
      [[196606, 196607], "disallowed"],
      [[196608, 262141], "disallowed"],
      [[262142, 262143], "disallowed"],
      [[262144, 327677], "disallowed"],
      [[327678, 327679], "disallowed"],
      [[327680, 393213], "disallowed"],
      [[393214, 393215], "disallowed"],
      [[393216, 458749], "disallowed"],
      [[458750, 458751], "disallowed"],
      [[458752, 524285], "disallowed"],
      [[524286, 524287], "disallowed"],
      [[524288, 589821], "disallowed"],
      [[589822, 589823], "disallowed"],
      [[589824, 655357], "disallowed"],
      [[655358, 655359], "disallowed"],
      [[655360, 720893], "disallowed"],
      [[720894, 720895], "disallowed"],
      [[720896, 786429], "disallowed"],
      [[786430, 786431], "disallowed"],
      [[786432, 851965], "disallowed"],
      [[851966, 851967], "disallowed"],
      [[851968, 917501], "disallowed"],
      [[917502, 917503], "disallowed"],
      [[917504, 917504], "disallowed"],
      [[917505, 917505], "disallowed"],
      [[917506, 917535], "disallowed"],
      [[917536, 917631], "disallowed"],
      [[917632, 917759], "disallowed"],
      [[917760, 917999], "ignored"],
      [[918e3, 983037], "disallowed"],
      [[983038, 983039], "disallowed"],
      [[983040, 1048573], "disallowed"],
      [[1048574, 1048575], "disallowed"],
      [[1048576, 1114109], "disallowed"],
      [[1114110, 1114111], "disallowed"],
    ];
  },
});

// node_modules/tr46/index.js
var require_tr46 = __commonJS({
  "node_modules/tr46/index.js"(exports2, module2) {
    "use strict";
    var punycode = require("punycode");
    var mappingTable = require_mappingTable();
    var PROCESSING_OPTIONS = {
      TRANSITIONAL: 0,
      NONTRANSITIONAL: 1,
    };
    function normalize(str) {
      return str
        .split("\0")
        .map(function (s2) {
          return s2.normalize("NFC");
        })
        .join("\0");
    }
    function findStatus(val) {
      var start = 0;
      var end = mappingTable.length - 1;
      while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        var target = mappingTable[mid];
        if (target[0][0] <= val && target[0][1] >= val) {
          return target;
        } else if (target[0][0] > val) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      return null;
    }
    var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    function countSymbols(string) {
      return string.replace(regexAstralSymbols, "_").length;
    }
    function mapChars(domain_name, useSTD3, processing_option) {
      var hasError = false;
      var processed = "";
      var len = countSymbols(domain_name);
      for (var i2 = 0; i2 < len; ++i2) {
        var codePoint = domain_name.codePointAt(i2);
        var status = findStatus(codePoint);
        switch (status[1]) {
          case "disallowed":
            hasError = true;
            processed += String.fromCodePoint(codePoint);
            break;
          case "ignored":
            break;
          case "mapped":
            processed += String.fromCodePoint.apply(String, status[2]);
            break;
          case "deviation":
            if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
              processed += String.fromCodePoint.apply(String, status[2]);
            } else {
              processed += String.fromCodePoint(codePoint);
            }
            break;
          case "valid":
            processed += String.fromCodePoint(codePoint);
            break;
          case "disallowed_STD3_mapped":
            if (useSTD3) {
              hasError = true;
              processed += String.fromCodePoint(codePoint);
            } else {
              processed += String.fromCodePoint.apply(String, status[2]);
            }
            break;
          case "disallowed_STD3_valid":
            if (useSTD3) {
              hasError = true;
            }
            processed += String.fromCodePoint(codePoint);
            break;
        }
      }
      return {
        string: processed,
        error: hasError,
      };
    }
    var combiningMarksRegex =
      /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;
    function validateLabel(label, processing_option) {
      if (label.substr(0, 4) === "xn--") {
        label = punycode.toUnicode(label);
        processing_option = PROCESSING_OPTIONS.NONTRANSITIONAL;
      }
      var error = false;
      if (
        normalize(label) !== label ||
        (label[3] === "-" && label[4] === "-") ||
        label[0] === "-" ||
        label[label.length - 1] === "-" ||
        label.indexOf(".") !== -1 ||
        label.search(combiningMarksRegex) === 0
      ) {
        error = true;
      }
      var len = countSymbols(label);
      for (var i2 = 0; i2 < len; ++i2) {
        var status = findStatus(label.codePointAt(i2));
        if (
          (processing === PROCESSING_OPTIONS.TRANSITIONAL &&
            status[1] !== "valid") ||
          (processing === PROCESSING_OPTIONS.NONTRANSITIONAL &&
            status[1] !== "valid" &&
            status[1] !== "deviation")
        ) {
          error = true;
          break;
        }
      }
      return {
        label,
        error,
      };
    }
    function processing(domain_name, useSTD3, processing_option) {
      var result = mapChars(domain_name, useSTD3, processing_option);
      result.string = normalize(result.string);
      var labels = result.string.split(".");
      for (var i2 = 0; i2 < labels.length; ++i2) {
        try {
          var validation = validateLabel(labels[i2]);
          labels[i2] = validation.label;
          result.error = result.error || validation.error;
        } catch (e2) {
          result.error = true;
        }
      }
      return {
        string: labels.join("."),
        error: result.error,
      };
    }
    module2.exports.toASCII = function (
      domain_name,
      useSTD3,
      processing_option,
      verifyDnsLength
    ) {
      var result = processing(domain_name, useSTD3, processing_option);
      var labels = result.string.split(".");
      labels = labels.map(function (l) {
        try {
          return punycode.toASCII(l);
        } catch (e2) {
          result.error = true;
          return l;
        }
      });
      if (verifyDnsLength) {
        var total = labels.slice(0, labels.length - 1).join(".").length;
        if (total.length > 253 || total.length === 0) {
          result.error = true;
        }
        for (var i2 = 0; i2 < labels.length; ++i2) {
          if (labels.length > 63 || labels.length === 0) {
            result.error = true;
            break;
          }
        }
      }
      if (result.error) return null;
      return labels.join(".");
    };
    module2.exports.toUnicode = function (domain_name, useSTD3) {
      var result = processing(
        domain_name,
        useSTD3,
        PROCESSING_OPTIONS.NONTRANSITIONAL
      );
      return {
        domain: result.string,
        error: result.error,
      };
    };
    module2.exports.PROCESSING_OPTIONS = PROCESSING_OPTIONS;
  },
});

// node_modules/whatwg-url/lib/url-state-machine.js
var require_url_state_machine = __commonJS({
  "node_modules/whatwg-url/lib/url-state-machine.js"(exports2, module2) {
    "use strict";
    var punycode = require("punycode");
    var tr46 = require_tr46();
    var specialSchemes = {
      ftp: 21,
      file: null,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443,
    };
    var failure = Symbol("failure");
    function countSymbols(str) {
      return punycode.ucs2.decode(str).length;
    }
    function at(input, idx) {
      const c = input[idx];
      return isNaN(c) ? void 0 : String.fromCodePoint(c);
    }
    function isASCIIDigit(c) {
      return c >= 48 && c <= 57;
    }
    function isASCIIAlpha(c) {
      return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
    }
    function isASCIIAlphanumeric(c) {
      return isASCIIAlpha(c) || isASCIIDigit(c);
    }
    function isASCIIHex(c) {
      return isASCIIDigit(c) || (c >= 65 && c <= 70) || (c >= 97 && c <= 102);
    }
    function isSingleDot(buffer) {
      return buffer === "." || buffer.toLowerCase() === "%2e";
    }
    function isDoubleDot(buffer) {
      buffer = buffer.toLowerCase();
      return (
        buffer === ".." ||
        buffer === "%2e." ||
        buffer === ".%2e" ||
        buffer === "%2e%2e"
      );
    }
    function isWindowsDriveLetterCodePoints(cp1, cp2) {
      return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
    }
    function isWindowsDriveLetterString(string) {
      return (
        string.length === 2 &&
        isASCIIAlpha(string.codePointAt(0)) &&
        (string[1] === ":" || string[1] === "|")
      );
    }
    function isNormalizedWindowsDriveLetterString(string) {
      return (
        string.length === 2 &&
        isASCIIAlpha(string.codePointAt(0)) &&
        string[1] === ":"
      );
    }
    function containsForbiddenHostCodePoint(string) {
      return (
        string.search(
          /\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/
        ) !== -1
      );
    }
    function containsForbiddenHostCodePointExcludingPercent(string) {
      return (
        string.search(
          /\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/
        ) !== -1
      );
    }
    function isSpecialScheme(scheme) {
      return specialSchemes[scheme] !== void 0;
    }
    function isSpecial(url) {
      return isSpecialScheme(url.scheme);
    }
    function defaultPort(scheme) {
      return specialSchemes[scheme];
    }
    function percentEncode(c) {
      let hex = c.toString(16).toUpperCase();
      if (hex.length === 1) {
        hex = "0" + hex;
      }
      return "%" + hex;
    }
    function utf8PercentEncode(c) {
      const buf = new Buffer(c);
      let str = "";
      for (let i2 = 0; i2 < buf.length; ++i2) {
        str += percentEncode(buf[i2]);
      }
      return str;
    }
    function utf8PercentDecode(str) {
      const input = new Buffer(str);
      const output = [];
      for (let i2 = 0; i2 < input.length; ++i2) {
        if (input[i2] !== 37) {
          output.push(input[i2]);
        } else if (
          input[i2] === 37 &&
          isASCIIHex(input[i2 + 1]) &&
          isASCIIHex(input[i2 + 2])
        ) {
          output.push(parseInt(input.slice(i2 + 1, i2 + 3).toString(), 16));
          i2 += 2;
        } else {
          output.push(input[i2]);
        }
      }
      return new Buffer(output).toString();
    }
    function isC0ControlPercentEncode(c) {
      return c <= 31 || c > 126;
    }
    var extraPathPercentEncodeSet = /* @__PURE__ */ new Set([
      32, 34, 35, 60, 62, 63, 96, 123, 125,
    ]);
    function isPathPercentEncode(c) {
      return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
    }
    var extraUserinfoPercentEncodeSet = /* @__PURE__ */ new Set([
      47, 58, 59, 61, 64, 91, 92, 93, 94, 124,
    ]);
    function isUserinfoPercentEncode(c) {
      return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
    }
    function percentEncodeChar(c, encodeSetPredicate) {
      const cStr = String.fromCodePoint(c);
      if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
      }
      return cStr;
    }
    function parseIPv4Number(input) {
      let R = 10;
      if (
        input.length >= 2 &&
        input.charAt(0) === "0" &&
        input.charAt(1).toLowerCase() === "x"
      ) {
        input = input.substring(2);
        R = 16;
      } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
      }
      if (input === "") {
        return 0;
      }
      const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
      if (regex.test(input)) {
        return failure;
      }
      return parseInt(input, R);
    }
    function parseIPv4(input) {
      const parts = input.split(".");
      if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
          parts.pop();
        }
      }
      if (parts.length > 4) {
        return input;
      }
      const numbers = [];
      for (const part of parts) {
        if (part === "") {
          return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
          return input;
        }
        numbers.push(n);
      }
      for (let i2 = 0; i2 < numbers.length - 1; ++i2) {
        if (numbers[i2] > 255) {
          return failure;
        }
      }
      if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
      }
      let ipv4 = numbers.pop();
      let counter = 0;
      for (const n of numbers) {
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
      }
      return ipv4;
    }
    function serializeIPv4(address) {
      let output = "";
      let n = address;
      for (let i2 = 1; i2 <= 4; ++i2) {
        output = String(n % 256) + output;
        if (i2 !== 4) {
          output = "." + output;
        }
        n = Math.floor(n / 256);
      }
      return output;
    }
    function parseIPv6(input) {
      const address = [0, 0, 0, 0, 0, 0, 0, 0];
      let pieceIndex = 0;
      let compress = null;
      let pointer = 0;
      input = punycode.ucs2.decode(input);
      if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
          return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
      }
      while (pointer < input.length) {
        if (pieceIndex === 8) {
          return failure;
        }
        if (input[pointer] === 58) {
          if (compress !== null) {
            return failure;
          }
          ++pointer;
          ++pieceIndex;
          compress = pieceIndex;
          continue;
        }
        let value = 0;
        let length = 0;
        while (length < 4 && isASCIIHex(input[pointer])) {
          value = value * 16 + parseInt(at(input, pointer), 16);
          ++pointer;
          ++length;
        }
        if (input[pointer] === 46) {
          if (length === 0) {
            return failure;
          }
          pointer -= length;
          if (pieceIndex > 6) {
            return failure;
          }
          let numbersSeen = 0;
          while (input[pointer] !== void 0) {
            let ipv4Piece = null;
            if (numbersSeen > 0) {
              if (input[pointer] === 46 && numbersSeen < 4) {
                ++pointer;
              } else {
                return failure;
              }
            }
            if (!isASCIIDigit(input[pointer])) {
              return failure;
            }
            while (isASCIIDigit(input[pointer])) {
              const number = parseInt(at(input, pointer));
              if (ipv4Piece === null) {
                ipv4Piece = number;
              } else if (ipv4Piece === 0) {
                return failure;
              } else {
                ipv4Piece = ipv4Piece * 10 + number;
              }
              if (ipv4Piece > 255) {
                return failure;
              }
              ++pointer;
            }
            address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
            ++numbersSeen;
            if (numbersSeen === 2 || numbersSeen === 4) {
              ++pieceIndex;
            }
          }
          if (numbersSeen !== 4) {
            return failure;
          }
          break;
        } else if (input[pointer] === 58) {
          ++pointer;
          if (input[pointer] === void 0) {
            return failure;
          }
        } else if (input[pointer] !== void 0) {
          return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
      }
      if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while (pieceIndex !== 0 && swaps > 0) {
          const temp = address[compress + swaps - 1];
          address[compress + swaps - 1] = address[pieceIndex];
          address[pieceIndex] = temp;
          --pieceIndex;
          --swaps;
        }
      } else if (compress === null && pieceIndex !== 8) {
        return failure;
      }
      return address;
    }
    function serializeIPv6(address) {
      let output = "";
      const seqResult = findLongestZeroSequence(address);
      const compress = seqResult.idx;
      let ignore0 = false;
      for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
        if (ignore0 && address[pieceIndex] === 0) {
          continue;
        } else if (ignore0) {
          ignore0 = false;
        }
        if (compress === pieceIndex) {
          const separator = pieceIndex === 0 ? "::" : ":";
          output += separator;
          ignore0 = true;
          continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
          output += ":";
        }
      }
      return output;
    }
    function parseHost(input, isSpecialArg) {
      if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
          return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
      }
      if (!isSpecialArg) {
        return parseOpaqueHost(input);
      }
      const domain = utf8PercentDecode(input);
      const asciiDomain = tr46.toASCII(
        domain,
        false,
        tr46.PROCESSING_OPTIONS.NONTRANSITIONAL,
        false
      );
      if (asciiDomain === null) {
        return failure;
      }
      if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
      }
      const ipv4Host = parseIPv4(asciiDomain);
      if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
      }
      return asciiDomain;
    }
    function parseOpaqueHost(input) {
      if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
      }
      let output = "";
      const decoded = punycode.ucs2.decode(input);
      for (let i2 = 0; i2 < decoded.length; ++i2) {
        output += percentEncodeChar(decoded[i2], isC0ControlPercentEncode);
      }
      return output;
    }
    function findLongestZeroSequence(arr) {
      let maxIdx = null;
      let maxLen = 1;
      let currStart = null;
      let currLen = 0;
      for (let i2 = 0; i2 < arr.length; ++i2) {
        if (arr[i2] !== 0) {
          if (currLen > maxLen) {
            maxIdx = currStart;
            maxLen = currLen;
          }
          currStart = null;
          currLen = 0;
        } else {
          if (currStart === null) {
            currStart = i2;
          }
          ++currLen;
        }
      }
      if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
      }
      return {
        idx: maxIdx,
        len: maxLen,
      };
    }
    function serializeHost(host) {
      if (typeof host === "number") {
        return serializeIPv4(host);
      }
      if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
      }
      return host;
    }
    function trimControlChars(url) {
      return url.replace(
        /^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g,
        ""
      );
    }
    function trimTabAndNewline(url) {
      return url.replace(/\u0009|\u000A|\u000D/g, "");
    }
    function shortenPath(url) {
      const path = url.path;
      if (path.length === 0) {
        return;
      }
      if (
        url.scheme === "file" &&
        path.length === 1 &&
        isNormalizedWindowsDriveLetter(path[0])
      ) {
        return;
      }
      path.pop();
    }
    function includesCredentials(url) {
      return url.username !== "" || url.password !== "";
    }
    function cannotHaveAUsernamePasswordPort(url) {
      return (
        url.host === null ||
        url.host === "" ||
        url.cannotBeABaseURL ||
        url.scheme === "file"
      );
    }
    function isNormalizedWindowsDriveLetter(string) {
      return /^[A-Za-z]:$/.test(string);
    }
    function URLStateMachine(
      input,
      base,
      encodingOverride,
      url,
      stateOverride
    ) {
      this.pointer = 0;
      this.input = input;
      this.base = base || null;
      this.encodingOverride = encodingOverride || "utf-8";
      this.stateOverride = stateOverride;
      this.url = url;
      this.failure = false;
      this.parseError = false;
      if (!this.url) {
        this.url = {
          scheme: "",
          username: "",
          password: "",
          host: null,
          port: null,
          path: [],
          query: null,
          fragment: null,
          cannotBeABaseURL: false,
        };
        const res2 = trimControlChars(this.input);
        if (res2 !== this.input) {
          this.parseError = true;
        }
        this.input = res2;
      }
      const res = trimTabAndNewline(this.input);
      if (res !== this.input) {
        this.parseError = true;
      }
      this.input = res;
      this.state = stateOverride || "scheme start";
      this.buffer = "";
      this.atFlag = false;
      this.arrFlag = false;
      this.passwordTokenSeenFlag = false;
      this.input = punycode.ucs2.decode(this.input);
      for (; this.pointer <= this.input.length; ++this.pointer) {
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? void 0 : String.fromCodePoint(c);
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
          break;
        } else if (ret === failure) {
          this.failure = true;
          break;
        }
      }
    }
    URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(
      c,
      cStr
    ) {
      if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
      } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
      if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
      } else if (c === 58) {
        if (this.stateOverride) {
          if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
            return false;
          }
          if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
            return false;
          }
          if (
            (includesCredentials(this.url) || this.url.port !== null) &&
            this.buffer === "file"
          ) {
            return false;
          }
          if (
            this.url.scheme === "file" &&
            (this.url.host === "" || this.url.host === null)
          ) {
            return false;
          }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
          return false;
        }
        if (this.url.scheme === "file") {
          if (
            this.input[this.pointer + 1] !== 47 ||
            this.input[this.pointer + 2] !== 47
          ) {
            this.parseError = true;
          }
          this.state = "file";
        } else if (
          isSpecial(this.url) &&
          this.base !== null &&
          this.base.scheme === this.url.scheme
        ) {
          this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
          this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
          this.state = "path or authority";
          ++this.pointer;
        } else {
          this.url.cannotBeABaseURL = true;
          this.url.path.push("");
          this.state = "cannot-be-a-base-URL path";
        }
      } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
      if (this.base === null || (this.base.cannotBeABaseURL && c !== 35)) {
        return failure;
      } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
      } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
      } else {
        this.state = "relative";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse special relative or authority"] =
      function parseSpecialRelativeOrAuthority(c) {
        if (c === 47 && this.input[this.pointer + 1] === 47) {
          this.state = "special authority ignore slashes";
          ++this.pointer;
        } else {
          this.parseError = true;
          this.state = "relative";
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype["parse path or authority"] =
      function parsePathOrAuthority(c) {
        if (c === 47) {
          this.state = "authority";
        } else {
          this.state = "path";
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
      this.url.scheme = this.base.scheme;
      if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
      } else if (c === 47) {
        this.state = "relative slash";
      } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
      } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
      } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
      } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse relative slash"] =
      function parseRelativeSlash(c) {
        if (isSpecial(this.url) && (c === 47 || c === 92)) {
          if (c === 92) {
            this.parseError = true;
          }
          this.state = "special authority ignore slashes";
        } else if (c === 47) {
          this.state = "authority";
        } else {
          this.url.username = this.base.username;
          this.url.password = this.base.password;
          this.url.host = this.base.host;
          this.url.port = this.base.port;
          this.state = "path";
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype["parse special authority slashes"] =
      function parseSpecialAuthoritySlashes(c) {
        if (c === 47 && this.input[this.pointer + 1] === 47) {
          this.state = "special authority ignore slashes";
          ++this.pointer;
        } else {
          this.parseError = true;
          this.state = "special authority ignore slashes";
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype["parse special authority ignore slashes"] =
      function parseSpecialAuthorityIgnoreSlashes(c) {
        if (c !== 47 && c !== 92) {
          this.state = "authority";
          --this.pointer;
        } else {
          this.parseError = true;
        }
        return true;
      };
    URLStateMachine.prototype["parse authority"] = function parseAuthority(
      c,
      cStr
    ) {
      if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
          this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        const len = countSymbols(this.buffer);
        for (let pointer = 0; pointer < len; ++pointer) {
          const codePoint = this.buffer.codePointAt(pointer);
          if (codePoint === 58 && !this.passwordTokenSeenFlag) {
            this.passwordTokenSeenFlag = true;
            continue;
          }
          const encodedCodePoints = percentEncodeChar(
            codePoint,
            isUserinfoPercentEncode
          );
          if (this.passwordTokenSeenFlag) {
            this.url.password += encodedCodePoints;
          } else {
            this.url.username += encodedCodePoints;
          }
        }
        this.buffer = "";
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92)
      ) {
        if (this.atFlag && this.buffer === "") {
          this.parseError = true;
          return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
      } else {
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype[
      "parse host"
    ] = function parseHostName(c, cStr) {
      if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
      } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
          this.parseError = true;
          return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
          return false;
        }
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92)
      ) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
          this.parseError = true;
          return failure;
        } else if (
          this.stateOverride &&
          this.buffer === "" &&
          (includesCredentials(this.url) || this.url.port !== null)
        ) {
          this.parseError = true;
          return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
          return false;
        }
      } else {
        if (c === 91) {
          this.arrFlag = true;
        } else if (c === 93) {
          this.arrFlag = false;
        }
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
      if (isASCIIDigit(c)) {
        this.buffer += cStr;
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92) ||
        this.stateOverride
      ) {
        if (this.buffer !== "") {
          const port = parseInt(this.buffer);
          if (port > Math.pow(2, 16) - 1) {
            this.parseError = true;
            return failure;
          }
          this.url.port = port === defaultPort(this.url.scheme) ? null : port;
          this.buffer = "";
        }
        if (this.stateOverride) {
          return false;
        }
        this.state = "path start";
        --this.pointer;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    var fileOtherwiseCodePoints = /* @__PURE__ */ new Set([47, 92, 63, 35]);
    URLStateMachine.prototype["parse file"] = function parseFile(c) {
      this.url.scheme = "file";
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "file slash";
      } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
        } else if (c === 63) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = "";
          this.state = "query";
        } else if (c === 35) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
          this.url.fragment = "";
          this.state = "fragment";
        } else {
          if (
            this.input.length - this.pointer - 1 === 0 ||
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) ||
            (this.input.length - this.pointer - 1 >= 2 &&
              !fileOtherwiseCodePoints.has(this.input[this.pointer + 2]))
          ) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            shortenPath(this.url);
          } else {
            this.parseError = true;
          }
          this.state = "path";
          --this.pointer;
        }
      } else {
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "file host";
      } else {
        if (this.base !== null && this.base.scheme === "file") {
          if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
            this.url.path.push(this.base.path[0]);
          } else {
            this.url.host = this.base.host;
          }
        }
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse file host"] = function parseFileHost(
      c,
      cStr
    ) {
      if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
          this.parseError = true;
          this.state = "path";
        } else if (this.buffer === "") {
          this.url.host = "";
          if (this.stateOverride) {
            return false;
          }
          this.state = "path start";
        } else {
          let host = parseHost(this.buffer, isSpecial(this.url));
          if (host === failure) {
            return failure;
          }
          if (host === "localhost") {
            host = "";
          }
          this.url.host = host;
          if (this.stateOverride) {
            return false;
          }
          this.buffer = "";
          this.state = "path start";
        }
      } else {
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
      if (isSpecial(this.url)) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
          --this.pointer;
        }
      } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
      } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
      } else if (c !== void 0) {
        this.state = "path";
        if (c !== 47) {
          --this.pointer;
        }
      }
      return true;
    };
    URLStateMachine.prototype["parse path"] = function parsePath(c) {
      if (
        isNaN(c) ||
        c === 47 ||
        (isSpecial(this.url) && c === 92) ||
        (!this.stateOverride && (c === 63 || c === 35))
      ) {
        if (isSpecial(this.url) && c === 92) {
          this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
          shortenPath(this.url);
          if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
          }
        } else if (
          isSingleDot(this.buffer) &&
          c !== 47 &&
          !(isSpecial(this.url) && c === 92)
        ) {
          this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
          if (
            this.url.scheme === "file" &&
            this.url.path.length === 0 &&
            isWindowsDriveLetterString(this.buffer)
          ) {
            if (this.url.host !== "" && this.url.host !== null) {
              this.parseError = true;
              this.url.host = "";
            }
            this.buffer = this.buffer[0] + ":";
          }
          this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (
          this.url.scheme === "file" &&
          (c === void 0 || c === 63 || c === 35)
        ) {
          while (this.url.path.length > 1 && this.url.path[0] === "") {
            this.parseError = true;
            this.url.path.shift();
          }
        }
        if (c === 63) {
          this.url.query = "";
          this.state = "query";
        }
        if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        }
      } else {
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
      }
      return true;
    };
    URLStateMachine.prototype["parse cannot-be-a-base-URL path"] =
      function parseCannotBeABaseURLPath(c) {
        if (c === 63) {
          this.url.query = "";
          this.state = "query";
        } else if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        } else {
          if (!isNaN(c) && c !== 37) {
            this.parseError = true;
          }
          if (
            c === 37 &&
            (!isASCIIHex(this.input[this.pointer + 1]) ||
              !isASCIIHex(this.input[this.pointer + 2]))
          ) {
            this.parseError = true;
          }
          if (!isNaN(c)) {
            this.url.path[0] =
              this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
          }
        }
        return true;
      };
    URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
      if (isNaN(c) || (!this.stateOverride && c === 35)) {
        if (
          !isSpecial(this.url) ||
          this.url.scheme === "ws" ||
          this.url.scheme === "wss"
        ) {
          this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer);
        for (let i2 = 0; i2 < buffer.length; ++i2) {
          if (
            buffer[i2] < 33 ||
            buffer[i2] > 126 ||
            buffer[i2] === 34 ||
            buffer[i2] === 35 ||
            buffer[i2] === 60 ||
            buffer[i2] === 62
          ) {
            this.url.query += percentEncode(buffer[i2]);
          } else {
            this.url.query += String.fromCodePoint(buffer[i2]);
          }
        }
        this.buffer = "";
        if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        }
      } else {
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
      if (isNaN(c)) {
      } else if (c === 0) {
        this.parseError = true;
      } else {
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
      }
      return true;
    };
    function serializeURL(url, excludeFragment) {
      let output = url.scheme + ":";
      if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
          output += url.username;
          if (url.password !== "") {
            output += ":" + url.password;
          }
          output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
          output += ":" + url.port;
        }
      } else if (url.host === null && url.scheme === "file") {
        output += "//";
      }
      if (url.cannotBeABaseURL) {
        output += url.path[0];
      } else {
        for (const string of url.path) {
          output += "/" + string;
        }
      }
      if (url.query !== null) {
        output += "?" + url.query;
      }
      if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
      }
      return output;
    }
    function serializeOrigin(tuple) {
      let result = tuple.scheme + "://";
      result += serializeHost(tuple.host);
      if (tuple.port !== null) {
        result += ":" + tuple.port;
      }
      return result;
    }
    module2.exports.serializeURL = serializeURL;
    module2.exports.serializeURLOrigin = function (url) {
      switch (url.scheme) {
        case "blob":
          try {
            return module2.exports.serializeURLOrigin(
              module2.exports.parseURL(url.path[0])
            );
          } catch (e2) {
            return "null";
          }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
          return serializeOrigin({
            scheme: url.scheme,
            host: url.host,
            port: url.port,
          });
        case "file":
          return "file://";
        default:
          return "null";
      }
    };
    module2.exports.basicURLParse = function (input, options) {
      if (options === void 0) {
        options = {};
      }
      const usm = new URLStateMachine(
        input,
        options.baseURL,
        options.encodingOverride,
        options.url,
        options.stateOverride
      );
      if (usm.failure) {
        return "failure";
      }
      return usm.url;
    };
    module2.exports.setTheUsername = function (url, username) {
      url.username = "";
      const decoded = punycode.ucs2.decode(username);
      for (let i2 = 0; i2 < decoded.length; ++i2) {
        url.username += percentEncodeChar(decoded[i2], isUserinfoPercentEncode);
      }
    };
    module2.exports.setThePassword = function (url, password) {
      url.password = "";
      const decoded = punycode.ucs2.decode(password);
      for (let i2 = 0; i2 < decoded.length; ++i2) {
        url.password += percentEncodeChar(decoded[i2], isUserinfoPercentEncode);
      }
    };
    module2.exports.serializeHost = serializeHost;
    module2.exports.cannotHaveAUsernamePasswordPort =
      cannotHaveAUsernamePasswordPort;
    module2.exports.serializeInteger = function (integer) {
      return String(integer);
    };
    module2.exports.parseURL = function (input, options) {
      if (options === void 0) {
        options = {};
      }
      return module2.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride,
      });
    };
  },
});

// node_modules/whatwg-url/lib/URL-impl.js
var require_URL_impl = __commonJS({
  "node_modules/whatwg-url/lib/URL-impl.js"(exports2) {
    "use strict";
    var usm = require_url_state_machine();
    exports2.implementation = class URLImpl {
      constructor(constructorArgs) {
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== void 0) {
          parsedBase = usm.basicURLParse(base);
          if (parsedBase === "failure") {
            throw new TypeError("Invalid base URL");
          }
        }
        const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
        if (parsedURL === "failure") {
          throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
      }
      get href() {
        return usm.serializeURL(this._url);
      }
      set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
          throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
      }
      get origin() {
        return usm.serializeURLOrigin(this._url);
      }
      get protocol() {
        return this._url.scheme + ":";
      }
      set protocol(v) {
        usm.basicURLParse(v + ":", {
          url: this._url,
          stateOverride: "scheme start",
        });
      }
      get username() {
        return this._url.username;
      }
      set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        usm.setTheUsername(this._url, v);
      }
      get password() {
        return this._url.password;
      }
      set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        usm.setThePassword(this._url, v);
      }
      get host() {
        const url = this._url;
        if (url.host === null) {
          return "";
        }
        if (url.port === null) {
          return usm.serializeHost(url.host);
        }
        return (
          usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port)
        );
      }
      set host(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        usm.basicURLParse(v, { url: this._url, stateOverride: "host" });
      }
      get hostname() {
        if (this._url.host === null) {
          return "";
        }
        return usm.serializeHost(this._url.host);
      }
      set hostname(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        usm.basicURLParse(v, { url: this._url, stateOverride: "hostname" });
      }
      get port() {
        if (this._url.port === null) {
          return "";
        }
        return usm.serializeInteger(this._url.port);
      }
      set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        if (v === "") {
          this._url.port = null;
        } else {
          usm.basicURLParse(v, { url: this._url, stateOverride: "port" });
        }
      }
      get pathname() {
        if (this._url.cannotBeABaseURL) {
          return this._url.path[0];
        }
        if (this._url.path.length === 0) {
          return "";
        }
        return "/" + this._url.path.join("/");
      }
      set pathname(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        this._url.path = [];
        usm.basicURLParse(v, { url: this._url, stateOverride: "path start" });
      }
      get search() {
        if (this._url.query === null || this._url.query === "") {
          return "";
        }
        return "?" + this._url.query;
      }
      set search(v) {
        const url = this._url;
        if (v === "") {
          url.query = null;
          return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, { url, stateOverride: "query" });
      }
      get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
          return "";
        }
        return "#" + this._url.fragment;
      }
      set hash(v) {
        if (v === "") {
          this._url.fragment = null;
          return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, { url: this._url, stateOverride: "fragment" });
      }
      toJSON() {
        return this.href;
      }
    };
  },
});

// node_modules/whatwg-url/lib/URL.js
var require_URL = __commonJS({
  "node_modules/whatwg-url/lib/URL.js"(exports2, module2) {
    "use strict";
    var conversions = require_lib();
    var utils = require_utils();
    var Impl = require_URL_impl();
    var impl = utils.implSymbol;
    function URL2(url) {
      if (!this || this[impl] || !(this instanceof URL2)) {
        throw new TypeError(
          "Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function."
        );
      }
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'URL': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      for (let i2 = 0; i2 < arguments.length && i2 < 2; ++i2) {
        args[i2] = arguments[i2];
      }
      args[0] = conversions["USVString"](args[0]);
      if (args[1] !== void 0) {
        args[1] = conversions["USVString"](args[1]);
      }
      module2.exports.setup(this, args);
    }
    URL2.prototype.toJSON = function toJSON() {
      if (!this || !module2.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      const args = [];
      for (let i2 = 0; i2 < arguments.length && i2 < 0; ++i2) {
        args[i2] = arguments[i2];
      }
      return this[impl].toJSON.apply(this[impl], args);
    };
    Object.defineProperty(URL2.prototype, "href", {
      get() {
        return this[impl].href;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
      },
      enumerable: true,
      configurable: true,
    });
    URL2.prototype.toString = function () {
      if (!this || !module2.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      return this.href;
    };
    Object.defineProperty(URL2.prototype, "origin", {
      get() {
        return this[impl].origin;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "protocol", {
      get() {
        return this[impl].protocol;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "username", {
      get() {
        return this[impl].username;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "password", {
      get() {
        return this[impl].password;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "host", {
      get() {
        return this[impl].host;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "hostname", {
      get() {
        return this[impl].hostname;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "port", {
      get() {
        return this[impl].port;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "pathname", {
      get() {
        return this[impl].pathname;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "search", {
      get() {
        return this[impl].search;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "hash", {
      get() {
        return this[impl].hash;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
      },
      enumerable: true,
      configurable: true,
    });
    module2.exports = {
      is(obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
      },
      create(constructorArgs, privateData) {
        let obj = Object.create(URL2.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
      },
      setup(obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
      },
      interface: URL2,
      expose: {
        Window: { URL: URL2 },
        Worker: { URL: URL2 },
      },
    };
  },
});

// node_modules/whatwg-url/lib/public-api.js
var require_public_api = __commonJS({
  "node_modules/whatwg-url/lib/public-api.js"(exports2) {
    "use strict";
    exports2.URL = require_URL().interface;
    exports2.serializeURL = require_url_state_machine().serializeURL;
    exports2.serializeURLOrigin =
      require_url_state_machine().serializeURLOrigin;
    exports2.basicURLParse = require_url_state_machine().basicURLParse;
    exports2.setTheUsername = require_url_state_machine().setTheUsername;
    exports2.setThePassword = require_url_state_machine().setThePassword;
    exports2.serializeHost = require_url_state_machine().serializeHost;
    exports2.serializeInteger = require_url_state_machine().serializeInteger;
    exports2.parseURL = require_url_state_machine().parseURL;
  },
});

// node_modules/cross-fetch/node_modules/node-fetch/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/cross-fetch/node_modules/node-fetch/lib/index.js"(
    exports2,
    module2
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }
    var Stream3 = _interopDefault(require("stream"));
    var http3 = _interopDefault(require("http"));
    var Url = _interopDefault(require("url"));
    var whatwgUrl = _interopDefault(require_public_api());
    var https2 = _interopDefault(require("https"));
    var zlib2 = _interopDefault(require("zlib"));
    var Readable = Stream3.Readable;
    var BUFFER = Symbol("buffer");
    var TYPE = Symbol("type");
    var Blob3 = class {
      constructor() {
        this[TYPE] = "";
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
          const a = blobParts;
          const length = Number(a.length);
          for (let i2 = 0; i2 < length; i2++) {
            const element = a[i2];
            let buffer;
            if (element instanceof Buffer) {
              buffer = element;
            } else if (ArrayBuffer.isView(element)) {
              buffer = Buffer.from(
                element.buffer,
                element.byteOffset,
                element.byteLength
              );
            } else if (element instanceof ArrayBuffer) {
              buffer = Buffer.from(element);
            } else if (element instanceof Blob3) {
              buffer = element[BUFFER];
            } else {
              buffer = Buffer.from(
                typeof element === "string" ? element : String(element)
              );
            }
            size += buffer.length;
            buffers.push(buffer);
          }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type =
          options &&
          options.type !== void 0 &&
          String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
          this[TYPE] = type;
        }
      }
      get size() {
        return this[BUFFER].length;
      }
      get type() {
        return this[TYPE];
      }
      text() {
        return Promise.resolve(this[BUFFER].toString());
      }
      arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(
          buf.byteOffset,
          buf.byteOffset + buf.byteLength
        );
        return Promise.resolve(ab);
      }
      stream() {
        const readable = new Readable();
        readable._read = function () {};
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
      }
      toString() {
        return "[object Blob]";
      }
      slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === void 0) {
          relativeStart = 0;
        } else if (start < 0) {
          relativeStart = Math.max(size + start, 0);
        } else {
          relativeStart = Math.min(start, size);
        }
        if (end === void 0) {
          relativeEnd = size;
        } else if (end < 0) {
          relativeEnd = Math.max(size + end, 0);
        } else {
          relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob3([], { type: arguments[2] });
        blob[BUFFER] = slicedBuffer;
        return blob;
      }
    };
    Object.defineProperties(Blob3.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true },
    });
    Object.defineProperty(Blob3.prototype, Symbol.toStringTag, {
      value: "Blob",
      writable: false,
      enumerable: false,
      configurable: true,
    });
    function FetchError2(message, type, systemError) {
      Error.call(this, message);
      this.message = message;
      this.type = type;
      if (systemError) {
        this.code = this.errno = systemError.code;
      }
      Error.captureStackTrace(this, this.constructor);
    }
    FetchError2.prototype = Object.create(Error.prototype);
    FetchError2.prototype.constructor = FetchError2;
    FetchError2.prototype.name = "FetchError";
    var convert;
    try {
      convert = require("encoding").convert;
    } catch (e2) {}
    var INTERNALS4 = Symbol("Body internals");
    var PassThrough3 = Stream3.PassThrough;
    function Body2(body) {
      var _this = this;
      var _ref =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        _ref$size = _ref.size;
      let size = _ref$size === void 0 ? 0 : _ref$size;
      var _ref$timeout = _ref.timeout;
      let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
      if (body == null) {
        body = null;
      } else if (isURLSearchParams(body)) {
        body = Buffer.from(body.toString());
      } else if (isBlob2(body));
      else if (Buffer.isBuffer(body));
      else if (
        Object.prototype.toString.call(body) === "[object ArrayBuffer]"
      ) {
        body = Buffer.from(body);
      } else if (ArrayBuffer.isView(body)) {
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
      } else if (body instanceof Stream3);
      else {
        body = Buffer.from(String(body));
      }
      this[INTERNALS4] = {
        body,
        disturbed: false,
        error: null,
      };
      this.size = size;
      this.timeout = timeout;
      if (body instanceof Stream3) {
        body.on("error", function (err) {
          const error =
            err.name === "AbortError"
              ? err
              : new FetchError2(
                  `Invalid response body while trying to fetch ${_this.url}: ${err.message}`,
                  "system",
                  err
                );
          _this[INTERNALS4].error = error;
        });
      }
    }
    Body2.prototype = {
      get body() {
        return this[INTERNALS4].body;
      },
      get bodyUsed() {
        return this[INTERNALS4].disturbed;
      },
      arrayBuffer() {
        return consumeBody2.call(this).then(function (buf) {
          return buf.buffer.slice(
            buf.byteOffset,
            buf.byteOffset + buf.byteLength
          );
        });
      },
      blob() {
        let ct = (this.headers && this.headers.get("content-type")) || "";
        return consumeBody2.call(this).then(function (buf) {
          return Object.assign(
            new Blob3([], {
              type: ct.toLowerCase(),
            }),
            {
              [BUFFER]: buf,
            }
          );
        });
      },
      json() {
        var _this2 = this;
        return consumeBody2.call(this).then(function (buffer) {
          try {
            return JSON.parse(buffer.toString());
          } catch (err) {
            return Body2.Promise.reject(
              new FetchError2(
                `invalid json response body at ${_this2.url} reason: ${err.message}`,
                "invalid-json"
              )
            );
          }
        });
      },
      text() {
        return consumeBody2.call(this).then(function (buffer) {
          return buffer.toString();
        });
      },
      buffer() {
        return consumeBody2.call(this);
      },
      textConverted() {
        var _this3 = this;
        return consumeBody2.call(this).then(function (buffer) {
          return convertBody(buffer, _this3.headers);
        });
      },
    };
    Object.defineProperties(Body2.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true },
    });
    Body2.mixIn = function (proto) {
      for (const name of Object.getOwnPropertyNames(Body2.prototype)) {
        if (!(name in proto)) {
          const desc = Object.getOwnPropertyDescriptor(Body2.prototype, name);
          Object.defineProperty(proto, name, desc);
        }
      }
    };
    function consumeBody2() {
      var _this4 = this;
      if (this[INTERNALS4].disturbed) {
        return Body2.Promise.reject(
          new TypeError(`body used already for: ${this.url}`)
        );
      }
      this[INTERNALS4].disturbed = true;
      if (this[INTERNALS4].error) {
        return Body2.Promise.reject(this[INTERNALS4].error);
      }
      let body = this.body;
      if (body === null) {
        return Body2.Promise.resolve(Buffer.alloc(0));
      }
      if (isBlob2(body)) {
        body = body.stream();
      }
      if (Buffer.isBuffer(body)) {
        return Body2.Promise.resolve(body);
      }
      if (!(body instanceof Stream3)) {
        return Body2.Promise.resolve(Buffer.alloc(0));
      }
      let accum = [];
      let accumBytes = 0;
      let abort = false;
      return new Body2.Promise(function (resolve, reject) {
        let resTimeout;
        if (_this4.timeout) {
          resTimeout = setTimeout(function () {
            abort = true;
            reject(
              new FetchError2(
                `Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`,
                "body-timeout"
              )
            );
          }, _this4.timeout);
        }
        body.on("error", function (err) {
          if (err.name === "AbortError") {
            abort = true;
            reject(err);
          } else {
            reject(
              new FetchError2(
                `Invalid response body while trying to fetch ${_this4.url}: ${err.message}`,
                "system",
                err
              )
            );
          }
        });
        body.on("data", function (chunk) {
          if (abort || chunk === null) {
            return;
          }
          if (_this4.size && accumBytes + chunk.length > _this4.size) {
            abort = true;
            reject(
              new FetchError2(
                `content size at ${_this4.url} over limit: ${_this4.size}`,
                "max-size"
              )
            );
            return;
          }
          accumBytes += chunk.length;
          accum.push(chunk);
        });
        body.on("end", function () {
          if (abort) {
            return;
          }
          clearTimeout(resTimeout);
          try {
            resolve(Buffer.concat(accum, accumBytes));
          } catch (err) {
            reject(
              new FetchError2(
                `Could not create Buffer from response body for ${_this4.url}: ${err.message}`,
                "system",
                err
              )
            );
          }
        });
      });
    }
    function convertBody(buffer, headers) {
      if (typeof convert !== "function") {
        throw new Error(
          "The package `encoding` must be installed to use the textConverted() function"
        );
      }
      const ct = headers.get("content-type");
      let charset = "utf-8";
      let res, str;
      if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
      }
      str = buffer.slice(0, 1024).toString();
      if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
      }
      if (!res && str) {
        res =
          /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(
            str
          );
        if (!res) {
          res =
            /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(
              str
            );
          if (res) {
            res.pop();
          }
        }
        if (res) {
          res = /charset=(.*)/i.exec(res.pop());
        }
      }
      if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
      }
      if (res) {
        charset = res.pop();
        if (charset === "gb2312" || charset === "gbk") {
          charset = "gb18030";
        }
      }
      return convert(buffer, "UTF-8", charset).toString();
    }
    function isURLSearchParams(obj) {
      if (
        typeof obj !== "object" ||
        typeof obj.append !== "function" ||
        typeof obj.delete !== "function" ||
        typeof obj.get !== "function" ||
        typeof obj.getAll !== "function" ||
        typeof obj.has !== "function" ||
        typeof obj.set !== "function"
      ) {
        return false;
      }
      return (
        obj.constructor.name === "URLSearchParams" ||
        Object.prototype.toString.call(obj) === "[object URLSearchParams]" ||
        typeof obj.sort === "function"
      );
    }
    function isBlob2(obj) {
      return (
        typeof obj === "object" &&
        typeof obj.arrayBuffer === "function" &&
        typeof obj.type === "string" &&
        typeof obj.stream === "function" &&
        typeof obj.constructor === "function" &&
        typeof obj.constructor.name === "string" &&
        /^(Blob|File)$/.test(obj.constructor.name) &&
        /^(Blob|File)$/.test(obj[Symbol.toStringTag])
      );
    }
    function clone2(instance) {
      let p1, p2;
      let body = instance.body;
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof Stream3 && typeof body.getBoundary !== "function") {
        p1 = new PassThrough3();
        p2 = new PassThrough3();
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS4].body = p1;
        body = p2;
      }
      return body;
    }
    function extractContentType2(body) {
      if (body === null) {
        return null;
      } else if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      } else if (isURLSearchParams(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      } else if (isBlob2(body)) {
        return body.type || null;
      } else if (Buffer.isBuffer(body)) {
        return null;
      } else if (
        Object.prototype.toString.call(body) === "[object ArrayBuffer]"
      ) {
        return null;
      } else if (ArrayBuffer.isView(body)) {
        return null;
      } else if (typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${body.getBoundary()}`;
      } else if (body instanceof Stream3) {
        return null;
      } else {
        return "text/plain;charset=UTF-8";
      }
    }
    function getTotalBytes2(instance) {
      const body = instance.body;
      if (body === null) {
        return 0;
      } else if (isBlob2(body)) {
        return body.size;
      } else if (Buffer.isBuffer(body)) {
        return body.length;
      } else if (body && typeof body.getLengthSync === "function") {
        if (
          (body._lengthRetrievers && body._lengthRetrievers.length == 0) ||
          (body.hasKnownLength && body.hasKnownLength())
        ) {
          return body.getLengthSync();
        }
        return null;
      } else {
        return null;
      }
    }
    function writeToStream2(dest, instance) {
      const body = instance.body;
      if (body === null) {
        dest.end();
      } else if (isBlob2(body)) {
        body.stream().pipe(dest);
      } else if (Buffer.isBuffer(body)) {
        dest.write(body);
        dest.end();
      } else {
        body.pipe(dest);
      }
    }
    Body2.Promise = global.Promise;
    var invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
    var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
    function validateName(name) {
      name = `${name}`;
      if (invalidTokenRegex.test(name) || name === "") {
        throw new TypeError(`${name} is not a legal HTTP header name`);
      }
    }
    function validateValue(value) {
      value = `${value}`;
      if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
      }
    }
    function find(map, name) {
      name = name.toLowerCase();
      for (const key in map) {
        if (key.toLowerCase() === name) {
          return key;
        }
      }
      return void 0;
    }
    var MAP = Symbol("map");
    var Headers2 = class {
      constructor() {
        let init =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : void 0;
        this[MAP] = /* @__PURE__ */ Object.create(null);
        if (init instanceof Headers2) {
          const rawHeaders = init.raw();
          const headerNames = Object.keys(rawHeaders);
          for (const headerName of headerNames) {
            for (const value of rawHeaders[headerName]) {
              this.append(headerName, value);
            }
          }
          return;
        }
        if (init == null);
        else if (typeof init === "object") {
          const method = init[Symbol.iterator];
          if (method != null) {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            const pairs = [];
            for (const pair of init) {
              if (
                typeof pair !== "object" ||
                typeof pair[Symbol.iterator] !== "function"
              ) {
                throw new TypeError("Each header pair must be iterable");
              }
              pairs.push(Array.from(pair));
            }
            for (const pair of pairs) {
              if (pair.length !== 2) {
                throw new TypeError(
                  "Each header pair must be a name/value tuple"
                );
              }
              this.append(pair[0], pair[1]);
            }
          } else {
            for (const key of Object.keys(init)) {
              const value = init[key];
              this.append(key, value);
            }
          }
        } else {
          throw new TypeError("Provided initializer must be an object");
        }
      }
      get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === void 0) {
          return null;
        }
        return this[MAP][key].join(", ");
      }
      forEach(callback) {
        let thisArg =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : void 0;
        let pairs = getHeaders(this);
        let i2 = 0;
        while (i2 < pairs.length) {
          var _pairs$i = pairs[i2];
          const name = _pairs$i[0],
            value = _pairs$i[1];
          callback.call(thisArg, value, name, this);
          pairs = getHeaders(this);
          i2++;
        }
      }
      set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== void 0 ? key : name] = [value];
      }
      append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== void 0) {
          this[MAP][key].push(value);
        } else {
          this[MAP][name] = [value];
        }
      }
      has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== void 0;
      }
      delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== void 0) {
          delete this[MAP][key];
        }
      }
      raw() {
        return this[MAP];
      }
      keys() {
        return createHeadersIterator(this, "key");
      }
      values() {
        return createHeadersIterator(this, "value");
      }
      [Symbol.iterator]() {
        return createHeadersIterator(this, "key+value");
      }
    };
    Headers2.prototype.entries = Headers2.prototype[Symbol.iterator];
    Object.defineProperty(Headers2.prototype, Symbol.toStringTag, {
      value: "Headers",
      writable: false,
      enumerable: false,
      configurable: true,
    });
    Object.defineProperties(Headers2.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true },
    });
    function getHeaders(headers) {
      let kind =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : "key+value";
      const keys = Object.keys(headers[MAP]).sort();
      return keys.map(
        kind === "key"
          ? function (k) {
              return k.toLowerCase();
            }
          : kind === "value"
          ? function (k) {
              return headers[MAP][k].join(", ");
            }
          : function (k) {
              return [k.toLowerCase(), headers[MAP][k].join(", ")];
            }
      );
    }
    var INTERNAL = Symbol("internal");
    function createHeadersIterator(target, kind) {
      const iterator = Object.create(HeadersIteratorPrototype);
      iterator[INTERNAL] = {
        target,
        kind,
        index: 0,
      };
      return iterator;
    }
    var HeadersIteratorPrototype = Object.setPrototypeOf(
      {
        next() {
          if (
            !this ||
            Object.getPrototypeOf(this) !== HeadersIteratorPrototype
          ) {
            throw new TypeError("Value of `this` is not a HeadersIterator");
          }
          var _INTERNAL = this[INTERNAL];
          const target = _INTERNAL.target,
            kind = _INTERNAL.kind,
            index = _INTERNAL.index;
          const values = getHeaders(target, kind);
          const len = values.length;
          if (index >= len) {
            return {
              value: void 0,
              done: true,
            };
          }
          this[INTERNAL].index = index + 1;
          return {
            value: values[index],
            done: false,
          };
        },
      },
      Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
    );
    Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
      value: "HeadersIterator",
      writable: false,
      enumerable: false,
      configurable: true,
    });
    function exportNodeCompatibleHeaders(headers) {
      const obj = Object.assign({ __proto__: null }, headers[MAP]);
      const hostHeaderKey = find(headers[MAP], "Host");
      if (hostHeaderKey !== void 0) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
      }
      return obj;
    }
    function createHeadersLenient(obj) {
      const headers = new Headers2();
      for (const name of Object.keys(obj)) {
        if (invalidTokenRegex.test(name)) {
          continue;
        }
        if (Array.isArray(obj[name])) {
          for (const val of obj[name]) {
            if (invalidHeaderCharRegex.test(val)) {
              continue;
            }
            if (headers[MAP][name] === void 0) {
              headers[MAP][name] = [val];
            } else {
              headers[MAP][name].push(val);
            }
          }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
          headers[MAP][name] = [obj[name]];
        }
      }
      return headers;
    }
    var INTERNALS$1 = Symbol("Response internals");
    var STATUS_CODES = http3.STATUS_CODES;
    var Response2 = class {
      constructor() {
        let body =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        let opts =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Body2.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers2(opts.headers);
        if (body != null && !headers.has("Content-Type")) {
          const contentType = extractContentType2(body);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS$1] = {
          url: opts.url,
          status,
          statusText: opts.statusText || STATUS_CODES[status],
          headers,
          counter: opts.counter,
        };
      }
      get url() {
        return this[INTERNALS$1].url || "";
      }
      get status() {
        return this[INTERNALS$1].status;
      }
      get ok() {
        return (
          this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300
        );
      }
      get redirected() {
        return this[INTERNALS$1].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$1].statusText;
      }
      get headers() {
        return this[INTERNALS$1].headers;
      }
      clone() {
        return new Response2(clone2(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
        });
      }
    };
    Body2.mixIn(Response2.prototype);
    Object.defineProperties(Response2.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true },
    });
    Object.defineProperty(Response2.prototype, Symbol.toStringTag, {
      value: "Response",
      writable: false,
      enumerable: false,
      configurable: true,
    });
    var INTERNALS$2 = Symbol("Request internals");
    var URL2 = Url.URL || whatwgUrl.URL;
    var parse_url = Url.parse;
    var format_url = Url.format;
    function parseURL(urlStr) {
      if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL2(urlStr).toString();
      }
      return parse_url(urlStr);
    }
    var streamDestructionSupported = "destroy" in Stream3.Readable.prototype;
    function isRequest2(input) {
      return (
        typeof input === "object" && typeof input[INTERNALS$2] === "object"
      );
    }
    function isAbortSignal2(signal) {
      const proto =
        signal && typeof signal === "object" && Object.getPrototypeOf(signal);
      return !!(proto && proto.constructor.name === "AbortSignal");
    }
    var Request2 = class {
      constructor(input) {
        let init =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let parsedURL;
        if (!isRequest2(input)) {
          if (input && input.href) {
            parsedURL = parseURL(input.href);
          } else {
            parsedURL = parseURL(`${input}`);
          }
          input = {};
        } else {
          parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || "GET";
        method = method.toUpperCase();
        if (
          (init.body != null || (isRequest2(input) && input.body !== null)) &&
          (method === "GET" || method === "HEAD")
        ) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        let inputBody =
          init.body != null
            ? init.body
            : isRequest2(input) && input.body !== null
            ? clone2(input)
            : null;
        Body2.call(this, inputBody, {
          timeout: init.timeout || input.timeout || 0,
          size: init.size || input.size || 0,
        });
        const headers = new Headers2(init.headers || input.headers || {});
        if (inputBody != null && !headers.has("Content-Type")) {
          const contentType = extractContentType2(inputBody);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        let signal = isRequest2(input) ? input.signal : null;
        if ("signal" in init) signal = init.signal;
        if (signal != null && !isAbortSignal2(signal)) {
          throw new TypeError(
            "Expected signal to be an instanceof AbortSignal"
          );
        }
        this[INTERNALS$2] = {
          method,
          redirect: init.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal,
        };
        this.follow =
          init.follow !== void 0
            ? init.follow
            : input.follow !== void 0
            ? input.follow
            : 20;
        this.compress =
          init.compress !== void 0
            ? init.compress
            : input.compress !== void 0
            ? input.compress
            : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
      }
      get method() {
        return this[INTERNALS$2].method;
      }
      get url() {
        return format_url(this[INTERNALS$2].parsedURL);
      }
      get headers() {
        return this[INTERNALS$2].headers;
      }
      get redirect() {
        return this[INTERNALS$2].redirect;
      }
      get signal() {
        return this[INTERNALS$2].signal;
      }
      clone() {
        return new Request2(this);
      }
    };
    Body2.mixIn(Request2.prototype);
    Object.defineProperty(Request2.prototype, Symbol.toStringTag, {
      value: "Request",
      writable: false,
      enumerable: false,
      configurable: true,
    });
    Object.defineProperties(Request2.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true },
    });
    function getNodeRequestOptions2(request) {
      const parsedURL = request[INTERNALS$2].parsedURL;
      const headers = new Headers2(request[INTERNALS$2].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError("Only absolute URLs are supported");
      }
      if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError("Only HTTP(S) protocols are supported");
      }
      if (
        request.signal &&
        request.body instanceof Stream3.Readable &&
        !streamDestructionSupported
      ) {
        throw new Error(
          "Cancellation of streamed requests with AbortSignal is not supported in node < 8"
        );
      }
      let contentLengthValue = null;
      if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body != null) {
        const totalBytes = getTotalBytes2(request);
        if (typeof totalBytes === "number") {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (!headers.has("User-Agent")) {
        headers.set(
          "User-Agent",
          "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"
        );
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate");
      }
      let agent = request.agent;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent,
      });
    }
    function AbortError2(message) {
      Error.call(this, message);
      this.type = "aborted";
      this.message = message;
      Error.captureStackTrace(this, this.constructor);
    }
    AbortError2.prototype = Object.create(Error.prototype);
    AbortError2.prototype.constructor = AbortError2;
    AbortError2.prototype.name = "AbortError";
    var URL$1 = Url.URL || whatwgUrl.URL;
    var PassThrough$1 = Stream3.PassThrough;
    var isDomainOrSubdomain2 = function isDomainOrSubdomain3(
      destination,
      original
    ) {
      const orig = new URL$1(original).hostname;
      const dest = new URL$1(destination).hostname;
      return (
        orig === dest ||
        (orig[orig.length - dest.length - 1] === "." && orig.endsWith(dest))
      );
    };
    function fetch3(url, opts) {
      if (!fetch3.Promise) {
        throw new Error(
          "native promise missing, set fetch.Promise to your favorite alternative"
        );
      }
      Body2.Promise = fetch3.Promise;
      return new fetch3.Promise(function (resolve, reject) {
        const request = new Request2(url, opts);
        const options = getNodeRequestOptions2(request);
        const send = (options.protocol === "https:" ? https2 : http3).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort2() {
          let error = new AbortError2("The user aborted a request.");
          reject(error);
          if (request.body && request.body instanceof Stream3.Readable) {
            request.body.destroy(error);
          }
          if (!response || !response.body) return;
          response.body.emit("error", error);
        };
        if (signal && signal.aborted) {
          abort();
          return;
        }
        const abortAndFinalize = function abortAndFinalize2() {
          abort();
          finalize();
        };
        const req = send(options);
        let reqTimeout;
        if (signal) {
          signal.addEventListener("abort", abortAndFinalize);
        }
        function finalize() {
          req.abort();
          if (signal) signal.removeEventListener("abort", abortAndFinalize);
          clearTimeout(reqTimeout);
        }
        if (request.timeout) {
          req.once("socket", function (socket) {
            reqTimeout = setTimeout(function () {
              reject(
                new FetchError2(
                  `network timeout at: ${request.url}`,
                  "request-timeout"
                )
              );
              finalize();
            }, request.timeout);
          });
        }
        req.on("error", function (err) {
          reject(
            new FetchError2(
              `request to ${request.url} failed, reason: ${err.message}`,
              "system",
              err
            )
          );
          finalize();
        });
        req.on("response", function (res) {
          clearTimeout(reqTimeout);
          const headers = createHeadersLenient(res.headers);
          if (fetch3.isRedirect(res.statusCode)) {
            const location = headers.get("Location");
            let locationURL = null;
            try {
              locationURL =
                location === null
                  ? null
                  : new URL$1(location, request.url).toString();
            } catch (err) {
              if (request.redirect !== "manual") {
                reject(
                  new FetchError2(
                    `uri requested responds with an invalid redirect URL: ${location}`,
                    "invalid-redirect"
                  )
                );
                finalize();
                return;
              }
            }
            switch (request.redirect) {
              case "error":
                reject(
                  new FetchError2(
                    `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                    "no-redirect"
                  )
                );
                finalize();
                return;
              case "manual":
                if (locationURL !== null) {
                  try {
                    headers.set("Location", locationURL);
                  } catch (err) {
                    reject(err);
                  }
                }
                break;
              case "follow":
                if (locationURL === null) {
                  break;
                }
                if (request.counter >= request.follow) {
                  reject(
                    new FetchError2(
                      `maximum redirect reached at: ${request.url}`,
                      "max-redirect"
                    )
                  );
                  finalize();
                  return;
                }
                const requestOpts = {
                  headers: new Headers2(request.headers),
                  follow: request.follow,
                  counter: request.counter + 1,
                  agent: request.agent,
                  compress: request.compress,
                  method: request.method,
                  body: request.body,
                  signal: request.signal,
                  timeout: request.timeout,
                  size: request.size,
                };
                if (!isDomainOrSubdomain2(request.url, locationURL)) {
                  for (const name of [
                    "authorization",
                    "www-authenticate",
                    "cookie",
                    "cookie2",
                  ]) {
                    requestOpts.headers.delete(name);
                  }
                }
                if (
                  res.statusCode !== 303 &&
                  request.body &&
                  getTotalBytes2(request) === null
                ) {
                  reject(
                    new FetchError2(
                      "Cannot follow redirect with body being a readable stream",
                      "unsupported-redirect"
                    )
                  );
                  finalize();
                  return;
                }
                if (
                  res.statusCode === 303 ||
                  ((res.statusCode === 301 || res.statusCode === 302) &&
                    request.method === "POST")
                ) {
                  requestOpts.method = "GET";
                  requestOpts.body = void 0;
                  requestOpts.headers.delete("content-length");
                }
                resolve(fetch3(new Request2(locationURL, requestOpts)));
                finalize();
                return;
            }
          }
          res.once("end", function () {
            if (signal) signal.removeEventListener("abort", abortAndFinalize);
          });
          let body = res.pipe(new PassThrough$1());
          const response_options = {
            url: request.url,
            status: res.statusCode,
            statusText: res.statusMessage,
            headers,
            size: request.size,
            timeout: request.timeout,
            counter: request.counter,
          };
          const codings = headers.get("Content-Encoding");
          if (
            !request.compress ||
            request.method === "HEAD" ||
            codings === null ||
            res.statusCode === 204 ||
            res.statusCode === 304
          ) {
            response = new Response2(body, response_options);
            resolve(response);
            return;
          }
          const zlibOptions = {
            flush: zlib2.Z_SYNC_FLUSH,
            finishFlush: zlib2.Z_SYNC_FLUSH,
          };
          if (codings == "gzip" || codings == "x-gzip") {
            body = body.pipe(zlib2.createGunzip(zlibOptions));
            response = new Response2(body, response_options);
            resolve(response);
            return;
          }
          if (codings == "deflate" || codings == "x-deflate") {
            const raw = res.pipe(new PassThrough$1());
            raw.once("data", function (chunk) {
              if ((chunk[0] & 15) === 8) {
                body = body.pipe(zlib2.createInflate());
              } else {
                body = body.pipe(zlib2.createInflateRaw());
              }
              response = new Response2(body, response_options);
              resolve(response);
            });
            return;
          }
          if (
            codings == "br" &&
            typeof zlib2.createBrotliDecompress === "function"
          ) {
            body = body.pipe(zlib2.createBrotliDecompress());
            response = new Response2(body, response_options);
            resolve(response);
            return;
          }
          response = new Response2(body, response_options);
          resolve(response);
        });
        writeToStream2(req, request);
      });
    }
    fetch3.isRedirect = function (code) {
      return (
        code === 301 ||
        code === 302 ||
        code === 303 ||
        code === 307 ||
        code === 308
      );
    };
    fetch3.Promise = global.Promise;
    module2.exports = exports2 = fetch3;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = exports2;
    exports2.Headers = Headers2;
    exports2.Request = Request2;
    exports2.Response = Response2;
    exports2.FetchError = FetchError2;
  },
});

// node_modules/cross-fetch/dist/node-ponyfill.js
var require_node_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/node-ponyfill.js"(exports2, module2) {
    var nodeFetch = require_lib2();
    var realFetch = nodeFetch.default || nodeFetch;
    var fetch3 = function (url, options) {
      if (/^\/\//.test(url)) {
        url = "https:" + url;
      }
      return realFetch.call(this, url, options);
    };
    fetch3.ponyfill = true;
    module2.exports = exports2 = fetch3;
    exports2.fetch = fetch3;
    exports2.Headers = nodeFetch.Headers;
    exports2.Request = nodeFetch.Request;
    exports2.Response = nodeFetch.Response;
    exports2.default = fetch3;
  },
});

// node_modules/@supabase/gotrue-js/dist/main/lib/helpers.js
var require_helpers2 = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/helpers.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeItemAsync =
      exports2.getItemSynchronously =
      exports2.getItemAsync =
      exports2.setItemAsync =
      exports2.resolveFetch =
      exports2.getParameterByName =
      exports2.isBrowser =
      exports2.uuid =
      exports2.expiresAt =
        void 0;
    var cross_fetch_1 = __importDefault(require_node_ponyfill());
    function expiresAt(expiresIn) {
      const timeNow = Math.round(Date.now() / 1e3);
      return timeNow + expiresIn;
    }
    exports2.expiresAt = expiresAt;
    function uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r2 = (Math.random() * 16) | 0,
            v = c == "x" ? r2 : (r2 & 3) | 8;
          return v.toString(16);
        }
      );
    }
    exports2.uuid = uuid;
    var isBrowser = () => typeof window !== "undefined";
    exports2.isBrowser = isBrowser;
    function getParameterByName(name, url) {
      var _a4;
      if (!url)
        url =
          ((_a4 =
            window === null || window === void 0 ? void 0 : window.location) ===
            null || _a4 === void 0
            ? void 0
            : _a4.href) || "";
      name = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    exports2.getParameterByName = getParameterByName;
    var resolveFetch = (customFetch) => {
      let _fetch;
      if (customFetch) {
        _fetch = customFetch;
      } else if (typeof fetch === "undefined") {
        _fetch = cross_fetch_1.default;
      } else {
        _fetch = fetch;
      }
      return (...args) => _fetch(...args);
    };
    exports2.resolveFetch = resolveFetch;
    var setItemAsync = (storage, key, data) =>
      __awaiter(void 0, void 0, void 0, function* () {
        (0, exports2.isBrowser)() &&
          (yield storage === null || storage === void 0
            ? void 0
            : storage.setItem(key, JSON.stringify(data)));
      });
    exports2.setItemAsync = setItemAsync;
    var getItemAsync = (storage, key) =>
      __awaiter(void 0, void 0, void 0, function* () {
        const value =
          (0, exports2.isBrowser)() &&
          (yield storage === null || storage === void 0
            ? void 0
            : storage.getItem(key));
        if (!value) return null;
        try {
          return JSON.parse(value);
        } catch (_a4) {
          return value;
        }
      });
    exports2.getItemAsync = getItemAsync;
    var getItemSynchronously = (storage, key) => {
      const value =
        (0, exports2.isBrowser)() &&
        (storage === null || storage === void 0
          ? void 0
          : storage.getItem(key));
      if (!value || typeof value !== "string") {
        return null;
      }
      try {
        return JSON.parse(value);
      } catch (_a4) {
        return value;
      }
    };
    exports2.getItemSynchronously = getItemSynchronously;
    var removeItemAsync = (storage, key) =>
      __awaiter(void 0, void 0, void 0, function* () {
        (0, exports2.isBrowser)() &&
          (yield storage === null || storage === void 0
            ? void 0
            : storage.removeItem(key));
      });
    exports2.removeItemAsync = removeItemAsync;
  },
});

// node_modules/@supabase/gotrue-js/dist/main/GoTrueApi.js
var require_GoTrueApi = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/GoTrueApi.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var fetch_1 = require_fetch();
    var constants_1 = require_constants2();
    var cookies_1 = require_cookies();
    var helpers_1 = require_helpers2();
    var GoTrueApi = class {
      constructor({ url = "", headers = {}, cookieOptions, fetch: fetch3 }) {
        this.url = url;
        this.headers = headers;
        this.cookieOptions = Object.assign(
          Object.assign({}, constants_1.COOKIE_OPTIONS),
          cookieOptions
        );
        this.fetch = (0, helpers_1.resolveFetch)(fetch3);
      }
      _createRequestHeaders(jwt) {
        const headers = Object.assign({}, this.headers);
        headers["Authorization"] = `Bearer ${jwt}`;
        return headers;
      }
      cookieName() {
        var _a4;
        return (_a4 = this.cookieOptions.name) !== null && _a4 !== void 0
          ? _a4
          : "";
      }
      getUrlForProvider(provider, options) {
        const urlParams = [`provider=${encodeURIComponent(provider)}`];
        if (
          options === null || options === void 0 ? void 0 : options.redirectTo
        ) {
          urlParams.push(
            `redirect_to=${encodeURIComponent(options.redirectTo)}`
          );
        }
        if (options === null || options === void 0 ? void 0 : options.scopes) {
          urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
        }
        return `${this.url}/authorize?${urlParams.join("&")}`;
      }
      signUpWithEmail(email, password, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "";
            if (options.redirectTo) {
              queryString =
                "?redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/signup${queryString}`,
              {
                email,
                password,
                data: options.data,
                gotrue_meta_security: { hcaptcha_token: options.captchaToken },
              },
              { headers }
            );
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      signInWithEmail(email, password, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "?grant_type=password";
            if (options.redirectTo) {
              queryString +=
                "&redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/token${queryString}`,
              { email, password },
              { headers }
            );
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      signUpWithPhone(phone, password, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/signup`,
              {
                phone,
                password,
                data: options.data,
                gotrue_meta_security: { hcaptcha_token: options.captchaToken },
              },
              { headers }
            );
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      signInWithPhone(phone, password) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const queryString = "?grant_type=password";
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/token${queryString}`,
              { phone, password },
              { headers }
            );
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      signInWithOpenIDConnect({
        id_token,
        nonce,
        client_id,
        issuer,
        provider,
      }) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const queryString = "?grant_type=id_token";
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/token${queryString}`,
              { id_token, nonce, client_id, issuer, provider },
              { headers }
            );
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      sendMagicLinkEmail(email, options = {}) {
        var _a4;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "";
            if (options.redirectTo) {
              queryString +=
                "?redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const shouldCreateUser =
              (_a4 = options.shouldCreateUser) !== null && _a4 !== void 0
                ? _a4
                : true;
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/otp${queryString}`,
              {
                email,
                create_user: shouldCreateUser,
                gotrue_meta_security: { hcaptcha_token: options.captchaToken },
              },
              { headers }
            );
            return { data, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      sendMobileOTP(phone, options = {}) {
        var _a4;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const shouldCreateUser =
              (_a4 = options.shouldCreateUser) !== null && _a4 !== void 0
                ? _a4
                : true;
            const headers = Object.assign({}, this.headers);
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/otp`,
              {
                phone,
                create_user: shouldCreateUser,
                gotrue_meta_security: { hcaptcha_token: options.captchaToken },
              },
              { headers }
            );
            return { data, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      signOut(jwt) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            yield (0,
            fetch_1.post)(this.fetch, `${this.url}/logout`, {}, { headers: this._createRequestHeaders(jwt), noResolveJson: true });
            return { error: null };
          } catch (e2) {
            return { error: e2 };
          }
        });
      }
      verifyMobileOTP(phone, token, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/verify`,
              { phone, token, type: "sms", redirect_to: options.redirectTo },
              { headers }
            );
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      verifyOTP({ email, phone, token, type = "sms" }, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/verify`,
              { email, phone, token, type, redirect_to: options.redirectTo },
              { headers }
            );
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      inviteUserByEmail(email, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "";
            if (options.redirectTo) {
              queryString +=
                "?redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/invite${queryString}`,
              { email, data: options.data },
              { headers }
            );
            return { data, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      resetPasswordForEmail(email, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const headers = Object.assign({}, this.headers);
            let queryString = "";
            if (options.redirectTo) {
              queryString +=
                "?redirect_to=" + encodeURIComponent(options.redirectTo);
            }
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/recover${queryString}`,
              {
                email,
                gotrue_meta_security: { hcaptcha_token: options.captchaToken },
              },
              { headers }
            );
            return { data, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      refreshAccessToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/token?grant_type=refresh_token`,
              { refresh_token: refreshToken },
              { headers: this.headers }
            );
            const session = Object.assign({}, data);
            if (session.expires_in)
              session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      setAuthCookie(req, res) {
        if (req.method !== "POST") {
          res.setHeader("Allow", "POST");
          res.status(405).end("Method Not Allowed");
        }
        const { event, session } = req.body;
        if (!event) throw new Error("Auth event missing!");
        if (event === "SIGNED_IN") {
          if (!session) throw new Error("Auth session missing!");
          (0, cookies_1.setCookies)(
            req,
            res,
            [
              { key: "access-token", value: session.access_token },
              { key: "refresh-token", value: session.refresh_token },
            ].map((token) => {
              var _a4;
              return {
                name: `${this.cookieName()}-${token.key}`,
                value: token.value,
                domain: this.cookieOptions.domain,
                maxAge:
                  (_a4 = this.cookieOptions.lifetime) !== null && _a4 !== void 0
                    ? _a4
                    : 0,
                path: this.cookieOptions.path,
                sameSite: this.cookieOptions.sameSite,
              };
            })
          );
        }
        if (event === "SIGNED_OUT") {
          (0, cookies_1.setCookies)(
            req,
            res,
            ["access-token", "refresh-token"].map((key) => ({
              name: `${this.cookieName()}-${key}`,
              value: "",
              maxAge: -1,
            }))
          );
        }
        res.status(200).json({});
      }
      deleteAuthCookie(req, res, { redirectTo = "/" }) {
        (0, cookies_1.setCookies)(
          req,
          res,
          ["access-token", "refresh-token"].map((key) => ({
            name: `${this.cookieName()}-${key}`,
            value: "",
            maxAge: -1,
          }))
        );
        return res.redirect(307, redirectTo);
      }
      getAuthCookieString(req, res) {
        if (req.method !== "POST") {
          res.setHeader("Allow", "POST");
          res.status(405).end("Method Not Allowed");
        }
        const { event, session } = req.body;
        if (!event) throw new Error("Auth event missing!");
        if (event === "SIGNED_IN") {
          if (!session) throw new Error("Auth session missing!");
          return (0, cookies_1.getCookieString)(
            req,
            res,
            [
              { key: "access-token", value: session.access_token },
              { key: "refresh-token", value: session.refresh_token },
            ].map((token) => {
              var _a4;
              return {
                name: `${this.cookieName()}-${token.key}`,
                value: token.value,
                domain: this.cookieOptions.domain,
                maxAge:
                  (_a4 = this.cookieOptions.lifetime) !== null && _a4 !== void 0
                    ? _a4
                    : 0,
                path: this.cookieOptions.path,
                sameSite: this.cookieOptions.sameSite,
              };
            })
          );
        }
        if (event === "SIGNED_OUT") {
          return (0, cookies_1.getCookieString)(
            req,
            res,
            ["access-token", "refresh-token"].map((key) => ({
              name: `${this.cookieName()}-${key}`,
              value: "",
              maxAge: -1,
            }))
          );
        }
        return res.getHeader("Set-Cookie");
      }
      generateLink(type, email, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/admin/generate_link`,
              {
                type,
                email,
                password: options.password,
                data: options.data,
                redirect_to: options.redirectTo,
              },
              { headers: this.headers }
            );
            return { data, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      createUser(attributes) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, fetch_1.post)(
              this.fetch,
              `${this.url}/admin/users`,
              attributes,
              {
                headers: this.headers,
              }
            );
            return { user: data, data, error: null };
          } catch (e2) {
            return { user: null, data: null, error: e2 };
          }
        });
      }
      listUsers() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, fetch_1.get)(
              this.fetch,
              `${this.url}/admin/users`,
              {
                headers: this.headers,
              }
            );
            return { data: data.users, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      getUserById(uid) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, fetch_1.get)(
              this.fetch,
              `${this.url}/admin/users/${uid}`,
              {
                headers: this.headers,
              }
            );
            return { data, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      getUserByCookie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!req.cookies) {
              throw new Error(
                "Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!"
              );
            }
            const access_token =
              req.cookies[`${this.cookieName()}-access-token`];
            const refresh_token =
              req.cookies[`${this.cookieName()}-refresh-token`];
            if (!access_token) {
              throw new Error("No cookie found!");
            }
            const { user, error: getUserError } = yield this.getUser(
              access_token
            );
            if (getUserError) {
              if (!refresh_token)
                throw new Error("No refresh_token cookie found!");
              if (!res)
                throw new Error(
                  "You need to pass the res object to automatically refresh the session!"
                );
              const { data, error } = yield this.refreshAccessToken(
                refresh_token
              );
              if (error) {
                throw error;
              } else if (data) {
                (0, cookies_1.setCookies)(
                  req,
                  res,
                  [
                    { key: "access-token", value: data.access_token },
                    { key: "refresh-token", value: data.refresh_token },
                  ].map((token) => {
                    var _a4;
                    return {
                      name: `${this.cookieName()}-${token.key}`,
                      value: token.value,
                      domain: this.cookieOptions.domain,
                      maxAge:
                        (_a4 = this.cookieOptions.lifetime) !== null &&
                        _a4 !== void 0
                          ? _a4
                          : 0,
                      path: this.cookieOptions.path,
                      sameSite: this.cookieOptions.sameSite,
                    };
                  })
                );
                return {
                  token: data.access_token,
                  user: data.user,
                  data: data.user,
                  error: null,
                };
              }
            }
            return { token: access_token, user, data: user, error: null };
          } catch (e2) {
            return { token: null, user: null, data: null, error: e2 };
          }
        });
      }
      updateUserById(uid, attributes) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            this;
            const data = yield (0, fetch_1.put)(
              this.fetch,
              `${this.url}/admin/users/${uid}`,
              attributes,
              {
                headers: this.headers,
              }
            );
            return { user: data, data, error: null };
          } catch (e2) {
            return { user: null, data: null, error: e2 };
          }
        });
      }
      deleteUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, fetch_1.remove)(
              this.fetch,
              `${this.url}/admin/users/${uid}`,
              {},
              {
                headers: this.headers,
              }
            );
            return { user: data, data, error: null };
          } catch (e2) {
            return { user: null, data: null, error: e2 };
          }
        });
      }
      getUser(jwt) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, fetch_1.get)(
              this.fetch,
              `${this.url}/user`,
              {
                headers: this._createRequestHeaders(jwt),
              }
            );
            return { user: data, data, error: null };
          } catch (e2) {
            return { user: null, data: null, error: e2 };
          }
        });
      }
      updateUser(jwt, attributes) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, fetch_1.put)(
              this.fetch,
              `${this.url}/user`,
              attributes,
              {
                headers: this._createRequestHeaders(jwt),
              }
            );
            return { user: data, data, error: null };
          } catch (e2) {
            return { user: null, data: null, error: e2 };
          }
        });
      }
    };
    exports2.default = GoTrueApi;
  },
});

// node_modules/@supabase/gotrue-js/dist/main/lib/polyfills.js
var require_polyfills = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/polyfills.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.polyfillGlobalThis = void 0;
    function polyfillGlobalThis() {
      if (typeof globalThis === "object") return;
      try {
        Object.defineProperty(Object.prototype, "__magic__", {
          get: function () {
            return this;
          },
          configurable: true,
        });
        __magic__.globalThis = __magic__;
        delete Object.prototype.__magic__;
      } catch (e2) {
        if (typeof self !== "undefined") {
          self.globalThis = self;
        }
      }
    }
    exports2.polyfillGlobalThis = polyfillGlobalThis;
  },
});

// node_modules/@supabase/gotrue-js/dist/main/GoTrueClient.js
var require_GoTrueClient = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/GoTrueClient.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var GoTrueApi_1 = __importDefault(require_GoTrueApi());
    var helpers_1 = require_helpers2();
    var constants_1 = require_constants2();
    var polyfills_1 = require_polyfills();
    (0, polyfills_1.polyfillGlobalThis)();
    var DEFAULT_OPTIONS = {
      url: constants_1.GOTRUE_URL,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      multiTab: true,
      headers: constants_1.DEFAULT_HEADERS,
    };
    var GoTrueClient = class {
      constructor(options) {
        this.stateChangeEmitters = /* @__PURE__ */ new Map();
        this.networkRetries = 0;
        const settings = Object.assign(
          Object.assign({}, DEFAULT_OPTIONS),
          options
        );
        this.currentUser = null;
        this.currentSession = null;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.persistSession = settings.persistSession;
        this.multiTab = settings.multiTab;
        this.localStorage = settings.localStorage || globalThis.localStorage;
        this.api = new GoTrueApi_1.default({
          url: settings.url,
          headers: settings.headers,
          cookieOptions: settings.cookieOptions,
          fetch: settings.fetch,
        });
        this._recoverSession();
        this._recoverAndRefresh();
        this._listenForMultiTabEvents();
        this._handleVisibilityChange();
        if (
          settings.detectSessionInUrl &&
          (0, helpers_1.isBrowser)() &&
          !!(0, helpers_1.getParameterByName)("access_token")
        ) {
          this.getSessionFromUrl({ storeSession: true }).then(({ error }) => {
            if (error) {
              console.error("Error getting session from URL.", error);
            }
          });
        }
      }
      signUp({ email, password, phone }, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            this._removeSession();
            const { data, error } =
              phone && password
                ? yield this.api.signUpWithPhone(phone, password, {
                    data: options.data,
                    captchaToken: options.captchaToken,
                  })
                : yield this.api.signUpWithEmail(email, password, {
                    redirectTo: options.redirectTo,
                    data: options.data,
                    captchaToken: options.captchaToken,
                  });
            if (error) {
              throw error;
            }
            if (!data) {
              throw "An error occurred on sign up.";
            }
            let session = null;
            let user = null;
            if (data.access_token) {
              session = data;
              user = session.user;
              this._saveSession(session);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            if (data.id) {
              user = data;
            }
            return { user, session, error: null };
          } catch (e2) {
            return { user: null, session: null, error: e2 };
          }
        });
      }
      signIn(
        { email, phone, password, refreshToken, provider, oidc },
        options = {}
      ) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            this._removeSession();
            if (email && !password) {
              const { error } = yield this.api.sendMagicLinkEmail(email, {
                redirectTo: options.redirectTo,
                shouldCreateUser: options.shouldCreateUser,
                captchaToken: options.captchaToken,
              });
              return { user: null, session: null, error };
            }
            if (email && password) {
              return this._handleEmailSignIn(email, password, {
                redirectTo: options.redirectTo,
              });
            }
            if (phone && !password) {
              const { error } = yield this.api.sendMobileOTP(phone, {
                shouldCreateUser: options.shouldCreateUser,
                captchaToken: options.captchaToken,
              });
              return { user: null, session: null, error };
            }
            if (phone && password) {
              return this._handlePhoneSignIn(phone, password);
            }
            if (refreshToken) {
              const { error } = yield this._callRefreshToken(refreshToken);
              if (error) throw error;
              return {
                user: this.currentUser,
                session: this.currentSession,
                error: null,
              };
            }
            if (provider) {
              return this._handleProviderSignIn(provider, {
                redirectTo: options.redirectTo,
                scopes: options.scopes,
              });
            }
            if (oidc) {
              return this._handleOpenIDConnectSignIn(oidc);
            }
            throw new Error(
              `You must provide either an email, phone number, a third-party provider or OpenID Connect.`
            );
          } catch (e2) {
            return { user: null, session: null, error: e2 };
          }
        });
      }
      verifyOTP(params, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            this._removeSession();
            const { data, error } = yield this.api.verifyOTP(params, options);
            if (error) {
              throw error;
            }
            if (!data) {
              throw "An error occurred on token verification.";
            }
            let session = null;
            let user = null;
            if (data.access_token) {
              session = data;
              user = session.user;
              this._saveSession(session);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            if (data.id) {
              user = data;
            }
            return { user, session, error: null };
          } catch (e2) {
            return { user: null, session: null, error: e2 };
          }
        });
      }
      user() {
        return this.currentUser;
      }
      session() {
        return this.currentSession;
      }
      refreshSession() {
        var _a4;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (
              !((_a4 = this.currentSession) === null || _a4 === void 0
                ? void 0
                : _a4.access_token)
            )
              throw new Error("Not logged in.");
            const { error } = yield this._callRefreshToken();
            if (error) throw error;
            return {
              data: this.currentSession,
              user: this.currentUser,
              error: null,
            };
          } catch (e2) {
            return { data: null, user: null, error: e2 };
          }
        });
      }
      update(attributes) {
        var _a4;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (
              !((_a4 = this.currentSession) === null || _a4 === void 0
                ? void 0
                : _a4.access_token)
            )
              throw new Error("Not logged in.");
            const { user, error } = yield this.api.updateUser(
              this.currentSession.access_token,
              attributes
            );
            if (error) throw error;
            if (!user) throw Error("Invalid user data.");
            const session = Object.assign(
              Object.assign({}, this.currentSession),
              { user }
            );
            this._saveSession(session);
            this._notifyAllSubscribers("USER_UPDATED");
            return { data: user, user, error: null };
          } catch (e2) {
            return { data: null, user: null, error: e2 };
          }
        });
      }
      setSession(refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!refresh_token) {
              throw new Error("No current session.");
            }
            const { data, error } = yield this.api.refreshAccessToken(
              refresh_token
            );
            if (error) {
              return { session: null, error };
            }
            this._saveSession(data);
            this._notifyAllSubscribers("SIGNED_IN");
            return { session: data, error: null };
          } catch (e2) {
            return { error: e2, session: null };
          }
        });
      }
      setAuth(access_token) {
        this.currentSession = Object.assign(
          Object.assign({}, this.currentSession),
          { access_token, token_type: "bearer", user: this.user() }
        );
        this._notifyAllSubscribers("TOKEN_REFRESHED");
        return this.currentSession;
      }
      getSessionFromUrl(options) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!(0, helpers_1.isBrowser)())
              throw new Error("No browser detected.");
            const error_description = (0, helpers_1.getParameterByName)(
              "error_description"
            );
            if (error_description) throw new Error(error_description);
            const provider_token = (0, helpers_1.getParameterByName)(
              "provider_token"
            );
            const access_token = (0, helpers_1.getParameterByName)(
              "access_token"
            );
            if (!access_token) throw new Error("No access_token detected.");
            const expires_in = (0, helpers_1.getParameterByName)("expires_in");
            if (!expires_in) throw new Error("No expires_in detected.");
            const refresh_token = (0, helpers_1.getParameterByName)(
              "refresh_token"
            );
            if (!refresh_token) throw new Error("No refresh_token detected.");
            const token_type = (0, helpers_1.getParameterByName)("token_type");
            if (!token_type) throw new Error("No token_type detected.");
            const timeNow = Math.round(Date.now() / 1e3);
            const expires_at = timeNow + parseInt(expires_in);
            const { user, error } = yield this.api.getUser(access_token);
            if (error) throw error;
            const session = {
              provider_token,
              access_token,
              expires_in: parseInt(expires_in),
              expires_at,
              refresh_token,
              token_type,
              user,
            };
            if (
              options === null || options === void 0
                ? void 0
                : options.storeSession
            ) {
              this._saveSession(session);
              const recoveryMode = (0, helpers_1.getParameterByName)("type");
              this._notifyAllSubscribers("SIGNED_IN");
              if (recoveryMode === "recovery") {
                this._notifyAllSubscribers("PASSWORD_RECOVERY");
              }
            }
            window.location.hash = "";
            return { data: session, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      signOut() {
        var _a4;
        return __awaiter(this, void 0, void 0, function* () {
          const accessToken =
            (_a4 = this.currentSession) === null || _a4 === void 0
              ? void 0
              : _a4.access_token;
          this._removeSession();
          this._notifyAllSubscribers("SIGNED_OUT");
          if (accessToken) {
            const { error } = yield this.api.signOut(accessToken);
            if (error) return { error };
          }
          return { error: null };
        });
      }
      onAuthStateChange(callback) {
        try {
          const id = (0, helpers_1.uuid)();
          const subscription = {
            id,
            callback,
            unsubscribe: () => {
              this.stateChangeEmitters.delete(id);
            },
          };
          this.stateChangeEmitters.set(id, subscription);
          return { data: subscription, error: null };
        } catch (e2) {
          return { data: null, error: e2 };
        }
      }
      _handleEmailSignIn(email, password, options = {}) {
        var _a4, _b;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const { data, error } = yield this.api.signInWithEmail(
              email,
              password,
              {
                redirectTo: options.redirectTo,
              }
            );
            if (error || !data)
              return { data: null, user: null, session: null, error };
            if (
              ((_a4 = data === null || data === void 0 ? void 0 : data.user) ===
                null || _a4 === void 0
                ? void 0
                : _a4.confirmed_at) ||
              ((_b = data === null || data === void 0 ? void 0 : data.user) ===
                null || _b === void 0
                ? void 0
                : _b.email_confirmed_at)
            ) {
              this._saveSession(data);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            return { data, user: data.user, session: data, error: null };
          } catch (e2) {
            return { data: null, user: null, session: null, error: e2 };
          }
        });
      }
      _handlePhoneSignIn(phone, password) {
        var _a4;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const { data, error } = yield this.api.signInWithPhone(
              phone,
              password
            );
            if (error || !data)
              return { data: null, user: null, session: null, error };
            if (
              (_a4 = data === null || data === void 0 ? void 0 : data.user) ===
                null || _a4 === void 0
                ? void 0
                : _a4.phone_confirmed_at
            ) {
              this._saveSession(data);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            return { data, user: data.user, session: data, error: null };
          } catch (e2) {
            return { data: null, user: null, session: null, error: e2 };
          }
        });
      }
      _handleProviderSignIn(provider, options = {}) {
        const url = this.api.getUrlForProvider(provider, {
          redirectTo: options.redirectTo,
          scopes: options.scopes,
        });
        try {
          if ((0, helpers_1.isBrowser)()) {
            window.location.href = url;
          }
          return {
            provider,
            url,
            data: null,
            session: null,
            user: null,
            error: null,
          };
        } catch (e2) {
          if (url)
            return {
              provider,
              url,
              data: null,
              session: null,
              user: null,
              error: null,
            };
          return { data: null, user: null, session: null, error: e2 };
        }
      }
      _handleOpenIDConnectSignIn({
        id_token,
        nonce,
        client_id,
        issuer,
        provider,
      }) {
        return __awaiter(this, void 0, void 0, function* () {
          if (id_token && nonce && ((client_id && issuer) || provider)) {
            try {
              const { data, error } = yield this.api.signInWithOpenIDConnect({
                id_token,
                nonce,
                client_id,
                issuer,
                provider,
              });
              if (error || !data) return { user: null, session: null, error };
              this._saveSession(data);
              this._notifyAllSubscribers("SIGNED_IN");
              return { user: data.user, session: data, error: null };
            } catch (e2) {
              return { user: null, session: null, error: e2 };
            }
          }
          throw new Error(
            `You must provide a OpenID Connect provider with your id token and nonce.`
          );
        });
      }
      _recoverSession() {
        try {
          const data = (0, helpers_1.getItemSynchronously)(
            this.localStorage,
            constants_1.STORAGE_KEY
          );
          if (!data) return null;
          const { currentSession, expiresAt } = data;
          const timeNow = Math.round(Date.now() / 1e3);
          if (
            expiresAt >= timeNow + constants_1.EXPIRY_MARGIN &&
            (currentSession === null || currentSession === void 0
              ? void 0
              : currentSession.user)
          ) {
            this._saveSession(currentSession);
            this._notifyAllSubscribers("SIGNED_IN");
          }
        } catch (error) {
          console.log("error", error);
        }
      }
      _recoverAndRefresh() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield (0, helpers_1.getItemAsync)(
              this.localStorage,
              constants_1.STORAGE_KEY
            );
            if (!data) return null;
            const { currentSession, expiresAt } = data;
            const timeNow = Math.round(Date.now() / 1e3);
            if (expiresAt < timeNow + constants_1.EXPIRY_MARGIN) {
              if (this.autoRefreshToken && currentSession.refresh_token) {
                this.networkRetries++;
                const { error } = yield this._callRefreshToken(
                  currentSession.refresh_token
                );
                if (error) {
                  console.log(error.message);
                  if (
                    error.message ===
                      constants_1.NETWORK_FAILURE.ERROR_MESSAGE &&
                    this.networkRetries <
                      constants_1.NETWORK_FAILURE.MAX_RETRIES
                  ) {
                    if (this.refreshTokenTimer)
                      clearTimeout(this.refreshTokenTimer);
                    this.refreshTokenTimer = setTimeout(
                      () => this._recoverAndRefresh(),
                      Math.pow(
                        constants_1.NETWORK_FAILURE.RETRY_INTERVAL,
                        this.networkRetries
                      ) * 100
                    );
                    return;
                  }
                  yield this._removeSession();
                }
                this.networkRetries = 0;
              } else {
                this._removeSession();
              }
            } else if (!currentSession) {
              console.log("Current session is missing data.");
              this._removeSession();
            } else {
              this._saveSession(currentSession);
              this._notifyAllSubscribers("SIGNED_IN");
            }
          } catch (err) {
            console.error(err);
            return null;
          }
        });
      }
      _callRefreshToken(refresh_token) {
        var _a4;
        if (refresh_token === void 0) {
          refresh_token =
            (_a4 = this.currentSession) === null || _a4 === void 0
              ? void 0
              : _a4.refresh_token;
        }
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!refresh_token) {
              throw new Error("No current session.");
            }
            const { data, error } = yield this.api.refreshAccessToken(
              refresh_token
            );
            if (error) throw error;
            if (!data) throw Error("Invalid session data.");
            this._saveSession(data);
            this._notifyAllSubscribers("TOKEN_REFRESHED");
            this._notifyAllSubscribers("SIGNED_IN");
            return { data, error: null };
          } catch (e2) {
            return { data: null, error: e2 };
          }
        });
      }
      _notifyAllSubscribers(event) {
        this.stateChangeEmitters.forEach((x2) =>
          x2.callback(event, this.currentSession)
        );
      }
      _saveSession(session) {
        this.currentSession = session;
        this.currentUser = session.user;
        const expiresAt = session.expires_at;
        if (expiresAt) {
          const timeNow = Math.round(Date.now() / 1e3);
          const expiresIn = expiresAt - timeNow;
          const refreshDurationBeforeExpires =
            expiresIn > constants_1.EXPIRY_MARGIN
              ? constants_1.EXPIRY_MARGIN
              : 0.5;
          this._startAutoRefreshToken(
            (expiresIn - refreshDurationBeforeExpires) * 1e3
          );
        }
        if (this.persistSession && session.expires_at) {
          this._persistSession(this.currentSession);
        }
      }
      _persistSession(currentSession) {
        const data = { currentSession, expiresAt: currentSession.expires_at };
        (0, helpers_1.setItemAsync)(
          this.localStorage,
          constants_1.STORAGE_KEY,
          data
        );
      }
      _removeSession() {
        return __awaiter(this, void 0, void 0, function* () {
          this.currentSession = null;
          this.currentUser = null;
          if (this.refreshTokenTimer) clearTimeout(this.refreshTokenTimer);
          (0,
          helpers_1.removeItemAsync)(this.localStorage, constants_1.STORAGE_KEY);
        });
      }
      _startAutoRefreshToken(value) {
        if (this.refreshTokenTimer) clearTimeout(this.refreshTokenTimer);
        if (value <= 0 || !this.autoRefreshToken) return;
        this.refreshTokenTimer = setTimeout(
          () =>
            __awaiter(this, void 0, void 0, function* () {
              this.networkRetries++;
              const { error } = yield this._callRefreshToken();
              if (!error) this.networkRetries = 0;
              if (
                (error === null || error === void 0
                  ? void 0
                  : error.message) ===
                  constants_1.NETWORK_FAILURE.ERROR_MESSAGE &&
                this.networkRetries < constants_1.NETWORK_FAILURE.MAX_RETRIES
              )
                this._startAutoRefreshToken(
                  Math.pow(
                    constants_1.NETWORK_FAILURE.RETRY_INTERVAL,
                    this.networkRetries
                  ) * 100
                );
            }),
          value
        );
        if (typeof this.refreshTokenTimer.unref === "function")
          this.refreshTokenTimer.unref();
      }
      _listenForMultiTabEvents() {
        if (
          !this.multiTab ||
          !(0, helpers_1.isBrowser)() ||
          !(window === null || window === void 0
            ? void 0
            : window.addEventListener)
        ) {
          return false;
        }
        try {
          window === null || window === void 0
            ? void 0
            : window.addEventListener("storage", (e2) => {
                var _a4;
                if (e2.key === constants_1.STORAGE_KEY) {
                  const newSession = JSON.parse(String(e2.newValue));
                  if (
                    (_a4 =
                      newSession === null || newSession === void 0
                        ? void 0
                        : newSession.currentSession) === null || _a4 === void 0
                      ? void 0
                      : _a4.access_token
                  ) {
                    this._saveSession(newSession.currentSession);
                    this._notifyAllSubscribers("SIGNED_IN");
                  } else {
                    this._removeSession();
                    this._notifyAllSubscribers("SIGNED_OUT");
                  }
                }
              });
        } catch (error) {
          console.error("_listenForMultiTabEvents", error);
        }
      }
      _handleVisibilityChange() {
        if (
          !this.multiTab ||
          !(0, helpers_1.isBrowser)() ||
          !(window === null || window === void 0
            ? void 0
            : window.addEventListener)
        ) {
          return false;
        }
        try {
          window === null || window === void 0
            ? void 0
            : window.addEventListener("visibilitychange", () => {
                if (document.visibilityState === "visible") {
                  this._recoverAndRefresh();
                }
              });
        } catch (error) {
          console.error("_handleVisibilityChange", error);
        }
      }
    };
    exports2.default = GoTrueClient;
  },
});

// node_modules/@supabase/gotrue-js/dist/main/lib/types.js
var require_types = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  },
});

// node_modules/@supabase/gotrue-js/dist/main/index.js
var require_main = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/index.js"(exports2) {
    "use strict";
    var __createBinding =
      (exports2 && exports2.__createBinding) ||
      (Object.create
        ? function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m2[k];
              },
            });
          }
        : function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m2[k];
          });
    var __exportStar =
      (exports2 && exports2.__exportStar) ||
      function (m2, exports3) {
        for (var p in m2)
          if (
            p !== "default" &&
            !Object.prototype.hasOwnProperty.call(exports3, p)
          )
            __createBinding(exports3, m2, p);
      };
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GoTrueClient = exports2.GoTrueApi = void 0;
    var GoTrueApi_1 = __importDefault(require_GoTrueApi());
    exports2.GoTrueApi = GoTrueApi_1.default;
    var GoTrueClient_1 = __importDefault(require_GoTrueClient());
    exports2.GoTrueClient = GoTrueClient_1.default;
    __exportStar(require_types(), exports2);
  },
});

// node_modules/@supabase/supabase-js/dist/main/lib/SupabaseAuthClient.js
var require_SupabaseAuthClient = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/SupabaseAuthClient.js"(
    exports2
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SupabaseAuthClient = void 0;
    var gotrue_js_1 = require_main();
    var SupabaseAuthClient = class extends gotrue_js_1.GoTrueClient {
      constructor(options) {
        super(options);
      }
    };
    exports2.SupabaseAuthClient = SupabaseAuthClient;
  },
});

// node_modules/@supabase/postgrest-js/dist/main/lib/types.js
var require_types2 = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/types.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PostgrestBuilder = void 0;
    var cross_fetch_1 = __importDefault(require_node_ponyfill());
    var PostgrestBuilder = class {
      constructor(builder) {
        Object.assign(this, builder);
        let _fetch;
        if (builder.fetch) {
          _fetch = builder.fetch;
        } else if (typeof fetch === "undefined") {
          _fetch = cross_fetch_1.default;
        } else {
          _fetch = fetch;
        }
        this.fetch = (...args) => _fetch(...args);
        this.shouldThrowOnError = builder.shouldThrowOnError || false;
      }
      throwOnError(throwOnError) {
        if (throwOnError === null || throwOnError === void 0) {
          throwOnError = true;
        }
        this.shouldThrowOnError = throwOnError;
        return this;
      }
      then(onfulfilled, onrejected) {
        if (typeof this.schema === "undefined") {
        } else if (["GET", "HEAD"].includes(this.method)) {
          this.headers["Accept-Profile"] = this.schema;
        } else {
          this.headers["Content-Profile"] = this.schema;
        }
        if (this.method !== "GET" && this.method !== "HEAD") {
          this.headers["Content-Type"] = "application/json";
        }
        let res = this.fetch(this.url.toString(), {
          method: this.method,
          headers: this.headers,
          body: JSON.stringify(this.body),
          signal: this.signal,
        }).then((res2) =>
          __awaiter(this, void 0, void 0, function* () {
            var _a4, _b, _c;
            let error = null;
            let data = null;
            let count = null;
            if (res2.ok) {
              const isReturnMinimal =
                (_a4 = this.headers["Prefer"]) === null || _a4 === void 0
                  ? void 0
                  : _a4.split(",").includes("return=minimal");
              if (this.method !== "HEAD" && !isReturnMinimal) {
                const text = yield res2.text();
                if (!text) {
                } else if (this.headers["Accept"] === "text/csv") {
                  data = text;
                } else {
                  data = JSON.parse(text);
                }
              }
              const countHeader =
                (_b = this.headers["Prefer"]) === null || _b === void 0
                  ? void 0
                  : _b.match(/count=(exact|planned|estimated)/);
              const contentRange =
                (_c = res2.headers.get("content-range")) === null ||
                _c === void 0
                  ? void 0
                  : _c.split("/");
              if (countHeader && contentRange && contentRange.length > 1) {
                count = parseInt(contentRange[1]);
              }
            } else {
              const body = yield res2.text();
              try {
                error = JSON.parse(body);
              } catch (_d2) {
                error = {
                  message: body,
                };
              }
              if (error && this.shouldThrowOnError) {
                throw error;
              }
            }
            const postgrestResponse = {
              error,
              data,
              count,
              status: res2.status,
              statusText: res2.statusText,
              body: data,
            };
            return postgrestResponse;
          })
        );
        if (!this.shouldThrowOnError) {
          res = res.catch((fetchError) => ({
            error: {
              message: `FetchError: ${fetchError.message}`,
              details: "",
              hint: "",
              code: fetchError.code || "",
            },
            data: null,
            body: null,
            count: null,
            status: 400,
            statusText: "Bad Request",
          }));
        }
        return res.then(onfulfilled, onrejected);
      }
    };
    exports2.PostgrestBuilder = PostgrestBuilder;
  },
});

// node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestTransformBuilder.js
var require_PostgrestTransformBuilder = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestTransformBuilder.js"(
    exports2
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var types_1 = require_types2();
    var PostgrestTransformBuilder = class extends types_1.PostgrestBuilder {
      select(columns = "*") {
        let quoted = false;
        const cleanedColumns = columns
          .split("")
          .map((c) => {
            if (/\s/.test(c) && !quoted) {
              return "";
            }
            if (c === '"') {
              quoted = !quoted;
            }
            return c;
          })
          .join("");
        this.url.searchParams.set("select", cleanedColumns);
        return this;
      }
      order(
        column,
        { ascending = true, nullsFirst = false, foreignTable } = {}
      ) {
        const key =
          typeof foreignTable === "undefined"
            ? "order"
            : `${foreignTable}.order`;
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(
          key,
          `${existingOrder ? `${existingOrder},` : ""}${column}.${
            ascending ? "asc" : "desc"
          }.${nullsFirst ? "nullsfirst" : "nullslast"}`
        );
        return this;
      }
      limit(count, { foreignTable } = {}) {
        const key =
          typeof foreignTable === "undefined"
            ? "limit"
            : `${foreignTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
      }
      range(from, to, { foreignTable } = {}) {
        const keyOffset =
          typeof foreignTable === "undefined"
            ? "offset"
            : `${foreignTable}.offset`;
        const keyLimit =
          typeof foreignTable === "undefined"
            ? "limit"
            : `${foreignTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
      }
      abortSignal(signal) {
        this.signal = signal;
        return this;
      }
      single() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        return this;
      }
      maybeSingle() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        const _this = new PostgrestTransformBuilder(this);
        _this.then = (onfulfilled, onrejected) =>
          this.then((res) => {
            var _a4, _b;
            if (
              (_b =
                (_a4 = res.error) === null || _a4 === void 0
                  ? void 0
                  : _a4.details) === null || _b === void 0
                ? void 0
                : _b.includes("Results contain 0 rows")
            ) {
              return onfulfilled({
                error: null,
                data: null,
                count: res.count,
                status: 200,
                statusText: "OK",
                body: null,
              });
            }
            return onfulfilled(res);
          }, onrejected);
        return _this;
      }
      csv() {
        this.headers["Accept"] = "text/csv";
        return this;
      }
    };
    exports2.default = PostgrestTransformBuilder;
  },
});

// node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestFilterBuilder.js
var require_PostgrestFilterBuilder = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestFilterBuilder.js"(
    exports2
  ) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var PostgrestTransformBuilder_1 = __importDefault(
      require_PostgrestTransformBuilder()
    );
    var PostgrestFilterBuilder = class extends PostgrestTransformBuilder_1.default {
      constructor() {
        super(...arguments);
        this.cs = this.contains;
        this.cd = this.containedBy;
        this.sl = this.rangeLt;
        this.sr = this.rangeGt;
        this.nxl = this.rangeGte;
        this.nxr = this.rangeLte;
        this.adj = this.rangeAdjacent;
        this.ov = this.overlaps;
      }
      not(column, operator, value) {
        this.url.searchParams.append(`${column}`, `not.${operator}.${value}`);
        return this;
      }
      or(filters, { foreignTable } = {}) {
        const key =
          typeof foreignTable === "undefined" ? "or" : `${foreignTable}.or`;
        this.url.searchParams.append(key, `(${filters})`);
        return this;
      }
      eq(column, value) {
        this.url.searchParams.append(`${column}`, `eq.${value}`);
        return this;
      }
      neq(column, value) {
        this.url.searchParams.append(`${column}`, `neq.${value}`);
        return this;
      }
      gt(column, value) {
        this.url.searchParams.append(`${column}`, `gt.${value}`);
        return this;
      }
      gte(column, value) {
        this.url.searchParams.append(`${column}`, `gte.${value}`);
        return this;
      }
      lt(column, value) {
        this.url.searchParams.append(`${column}`, `lt.${value}`);
        return this;
      }
      lte(column, value) {
        this.url.searchParams.append(`${column}`, `lte.${value}`);
        return this;
      }
      like(column, pattern) {
        this.url.searchParams.append(`${column}`, `like.${pattern}`);
        return this;
      }
      ilike(column, pattern) {
        this.url.searchParams.append(`${column}`, `ilike.${pattern}`);
        return this;
      }
      is(column, value) {
        this.url.searchParams.append(`${column}`, `is.${value}`);
        return this;
      }
      in(column, values) {
        const cleanedValues = values
          .map((s2) => {
            if (typeof s2 === "string" && new RegExp("[,()]").test(s2))
              return `"${s2}"`;
            else return `${s2}`;
          })
          .join(",");
        this.url.searchParams.append(`${column}`, `in.(${cleanedValues})`);
        return this;
      }
      contains(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `cs.${value}`);
        } else if (Array.isArray(value)) {
          this.url.searchParams.append(`${column}`, `cs.{${value.join(",")}}`);
        } else {
          this.url.searchParams.append(
            `${column}`,
            `cs.${JSON.stringify(value)}`
          );
        }
        return this;
      }
      containedBy(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `cd.${value}`);
        } else if (Array.isArray(value)) {
          this.url.searchParams.append(`${column}`, `cd.{${value.join(",")}}`);
        } else {
          this.url.searchParams.append(
            `${column}`,
            `cd.${JSON.stringify(value)}`
          );
        }
        return this;
      }
      rangeLt(column, range) {
        this.url.searchParams.append(`${column}`, `sl.${range}`);
        return this;
      }
      rangeGt(column, range) {
        this.url.searchParams.append(`${column}`, `sr.${range}`);
        return this;
      }
      rangeGte(column, range) {
        this.url.searchParams.append(`${column}`, `nxl.${range}`);
        return this;
      }
      rangeLte(column, range) {
        this.url.searchParams.append(`${column}`, `nxr.${range}`);
        return this;
      }
      rangeAdjacent(column, range) {
        this.url.searchParams.append(`${column}`, `adj.${range}`);
        return this;
      }
      overlaps(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `ov.${value}`);
        } else {
          this.url.searchParams.append(`${column}`, `ov.{${value.join(",")}}`);
        }
        return this;
      }
      textSearch(column, query, { config, type = null } = {}) {
        let typePart = "";
        if (type === "plain") {
          typePart = "pl";
        } else if (type === "phrase") {
          typePart = "ph";
        } else if (type === "websearch") {
          typePart = "w";
        }
        const configPart = config === void 0 ? "" : `(${config})`;
        this.url.searchParams.append(
          `${column}`,
          `${typePart}fts${configPart}.${query}`
        );
        return this;
      }
      fts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `fts${configPart}.${query}`);
        return this;
      }
      plfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(
          `${column}`,
          `plfts${configPart}.${query}`
        );
        return this;
      }
      phfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(
          `${column}`,
          `phfts${configPart}.${query}`
        );
        return this;
      }
      wfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `wfts${configPart}.${query}`);
        return this;
      }
      filter(column, operator, value) {
        this.url.searchParams.append(`${column}`, `${operator}.${value}`);
        return this;
      }
      match(query) {
        Object.keys(query).forEach((key) => {
          this.url.searchParams.append(`${key}`, `eq.${query[key]}`);
        });
        return this;
      }
    };
    exports2.default = PostgrestFilterBuilder;
  },
});

// node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestQueryBuilder.js
var require_PostgrestQueryBuilder = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestQueryBuilder.js"(
    exports2
  ) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var types_1 = require_types2();
    var PostgrestFilterBuilder_1 = __importDefault(
      require_PostgrestFilterBuilder()
    );
    var PostgrestQueryBuilder = class extends types_1.PostgrestBuilder {
      constructor(
        url,
        { headers = {}, schema, fetch: fetch3, shouldThrowOnError } = {}
      ) {
        super({ fetch: fetch3, shouldThrowOnError });
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
      }
      select(columns = "*", { head = false, count = null } = {}) {
        this.method = "GET";
        let quoted = false;
        const cleanedColumns = columns
          .split("")
          .map((c) => {
            if (/\s/.test(c) && !quoted) {
              return "";
            }
            if (c === '"') {
              quoted = !quoted;
            }
            return c;
          })
          .join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (count) {
          this.headers["Prefer"] = `count=${count}`;
        }
        if (head) {
          this.method = "HEAD";
        }
        return new PostgrestFilterBuilder_1.default(this);
      }
      insert(
        values,
        {
          upsert = false,
          onConflict,
          returning = "representation",
          count = null,
        } = {}
      ) {
        this.method = "POST";
        const prefersHeaders = [`return=${returning}`];
        if (upsert) prefersHeaders.push("resolution=merge-duplicates");
        if (upsert && onConflict !== void 0)
          this.url.searchParams.set("on_conflict", onConflict);
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        if (this.headers["Prefer"]) {
          prefersHeaders.unshift(this.headers["Prefer"]);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
          const columns = values.reduce(
            (acc, x2) => acc.concat(Object.keys(x2)),
            []
          );
          if (columns.length > 0) {
            const uniqueColumns = [...new Set(columns)].map(
              (column) => `"${column}"`
            );
            this.url.searchParams.set("columns", uniqueColumns.join(","));
          }
        }
        return new PostgrestFilterBuilder_1.default(this);
      }
      upsert(
        values,
        {
          onConflict,
          returning = "representation",
          count = null,
          ignoreDuplicates = false,
        } = {}
      ) {
        this.method = "POST";
        const prefersHeaders = [
          `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`,
          `return=${returning}`,
        ];
        if (onConflict !== void 0)
          this.url.searchParams.set("on_conflict", onConflict);
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        if (this.headers["Prefer"]) {
          prefersHeaders.unshift(this.headers["Prefer"]);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder_1.default(this);
      }
      update(values, { returning = "representation", count = null } = {}) {
        this.method = "PATCH";
        const prefersHeaders = [`return=${returning}`];
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        if (this.headers["Prefer"]) {
          prefersHeaders.unshift(this.headers["Prefer"]);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder_1.default(this);
      }
      delete({ returning = "representation", count = null } = {}) {
        this.method = "DELETE";
        const prefersHeaders = [`return=${returning}`];
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        if (this.headers["Prefer"]) {
          prefersHeaders.unshift(this.headers["Prefer"]);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder_1.default(this);
      }
    };
    exports2.default = PostgrestQueryBuilder;
  },
});

// node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestRpcBuilder.js
var require_PostgrestRpcBuilder = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestRpcBuilder.js"(
    exports2
  ) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var types_1 = require_types2();
    var PostgrestFilterBuilder_1 = __importDefault(
      require_PostgrestFilterBuilder()
    );
    var PostgrestRpcBuilder = class extends types_1.PostgrestBuilder {
      constructor(
        url,
        { headers = {}, schema, fetch: fetch3, shouldThrowOnError } = {}
      ) {
        super({ fetch: fetch3, shouldThrowOnError });
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
      }
      rpc(params, { head = false, count = null } = {}) {
        if (head) {
          this.method = "HEAD";
          if (params) {
            Object.entries(params).forEach(([name, value]) => {
              this.url.searchParams.append(name, value);
            });
          }
        } else {
          this.method = "POST";
          this.body = params;
        }
        if (count) {
          if (this.headers["Prefer"] !== void 0)
            this.headers["Prefer"] += `,count=${count}`;
          else this.headers["Prefer"] = `count=${count}`;
        }
        return new PostgrestFilterBuilder_1.default(this);
      }
    };
    exports2.default = PostgrestRpcBuilder;
  },
});

// node_modules/@supabase/postgrest-js/dist/main/lib/version.js
var require_version3 = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.version = void 0;
    exports2.version = "0.37.2";
  },
});

// node_modules/@supabase/postgrest-js/dist/main/lib/constants.js
var require_constants3 = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_HEADERS = void 0;
    var version_1 = require_version3();
    exports2.DEFAULT_HEADERS = {
      "X-Client-Info": `postgrest-js/${version_1.version}`,
    };
  },
});

// node_modules/@supabase/postgrest-js/dist/main/PostgrestClient.js
var require_PostgrestClient = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/PostgrestClient.js"(exports2) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var PostgrestQueryBuilder_1 = __importDefault(
      require_PostgrestQueryBuilder()
    );
    var PostgrestRpcBuilder_1 = __importDefault(require_PostgrestRpcBuilder());
    var constants_1 = require_constants3();
    var PostgrestClient = class {
      constructor(
        url,
        { headers = {}, schema, fetch: fetch3, throwOnError } = {}
      ) {
        this.url = url;
        this.headers = Object.assign(
          Object.assign({}, constants_1.DEFAULT_HEADERS),
          headers
        );
        this.schema = schema;
        this.fetch = fetch3;
        this.shouldThrowOnError = throwOnError;
      }
      auth(token) {
        this.headers["Authorization"] = `Bearer ${token}`;
        return this;
      }
      from(table) {
        const url = `${this.url}/${table}`;
        return new PostgrestQueryBuilder_1.default(url, {
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          shouldThrowOnError: this.shouldThrowOnError,
        });
      }
      rpc(fn, params, { head = false, count = null } = {}) {
        const url = `${this.url}/rpc/${fn}`;
        return new PostgrestRpcBuilder_1.default(url, {
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          shouldThrowOnError: this.shouldThrowOnError,
        }).rpc(params, { head, count });
      }
    };
    exports2.default = PostgrestClient;
  },
});

// node_modules/@supabase/postgrest-js/dist/main/index.js
var require_main2 = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/index.js"(exports2) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PostgrestFilterBuilder =
      exports2.PostgrestQueryBuilder =
      exports2.PostgrestBuilder =
      exports2.PostgrestClient =
        void 0;
    var PostgrestClient_1 = __importDefault(require_PostgrestClient());
    exports2.PostgrestClient = PostgrestClient_1.default;
    var PostgrestFilterBuilder_1 = __importDefault(
      require_PostgrestFilterBuilder()
    );
    exports2.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
    var PostgrestQueryBuilder_1 = __importDefault(
      require_PostgrestQueryBuilder()
    );
    exports2.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
    var types_1 = require_types2();
    Object.defineProperty(exports2, "PostgrestBuilder", {
      enumerable: true,
      get: function () {
        return types_1.PostgrestBuilder;
      },
    });
  },
});

// node_modules/@supabase/realtime-js/dist/main/lib/transformers.js
var require_transformers = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/transformers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toTimestampString =
      exports2.toArray =
      exports2.toJson =
      exports2.toNumber =
      exports2.toBoolean =
      exports2.convertCell =
      exports2.convertColumn =
      exports2.convertChangeData =
      exports2.PostgresTypes =
        void 0;
    var PostgresTypes;
    (function (PostgresTypes2) {
      PostgresTypes2["abstime"] = "abstime";
      PostgresTypes2["bool"] = "bool";
      PostgresTypes2["date"] = "date";
      PostgresTypes2["daterange"] = "daterange";
      PostgresTypes2["float4"] = "float4";
      PostgresTypes2["float8"] = "float8";
      PostgresTypes2["int2"] = "int2";
      PostgresTypes2["int4"] = "int4";
      PostgresTypes2["int4range"] = "int4range";
      PostgresTypes2["int8"] = "int8";
      PostgresTypes2["int8range"] = "int8range";
      PostgresTypes2["json"] = "json";
      PostgresTypes2["jsonb"] = "jsonb";
      PostgresTypes2["money"] = "money";
      PostgresTypes2["numeric"] = "numeric";
      PostgresTypes2["oid"] = "oid";
      PostgresTypes2["reltime"] = "reltime";
      PostgresTypes2["text"] = "text";
      PostgresTypes2["time"] = "time";
      PostgresTypes2["timestamp"] = "timestamp";
      PostgresTypes2["timestamptz"] = "timestamptz";
      PostgresTypes2["timetz"] = "timetz";
      PostgresTypes2["tsrange"] = "tsrange";
      PostgresTypes2["tstzrange"] = "tstzrange";
    })(
      (PostgresTypes = exports2.PostgresTypes || (exports2.PostgresTypes = {}))
    );
    exports2.convertChangeData = (columns, record, options = {}) => {
      var _a4;
      const skipTypes =
        (_a4 = options.skipTypes) !== null && _a4 !== void 0 ? _a4 : [];
      return Object.keys(record).reduce((acc, rec_key) => {
        acc[rec_key] = exports2.convertColumn(
          rec_key,
          columns,
          record,
          skipTypes
        );
        return acc;
      }, {});
    };
    exports2.convertColumn = (columnName, columns, record, skipTypes) => {
      const column = columns.find((x2) => x2.name === columnName);
      const colType =
        column === null || column === void 0 ? void 0 : column.type;
      const value = record[columnName];
      if (colType && !skipTypes.includes(colType)) {
        return exports2.convertCell(colType, value);
      }
      return noop2(value);
    };
    exports2.convertCell = (type, value) => {
      if (type.charAt(0) === "_") {
        const dataType = type.slice(1, type.length);
        return exports2.toArray(value, dataType);
      }
      switch (type) {
        case PostgresTypes.bool:
          return exports2.toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
          return exports2.toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
          return exports2.toJson(value);
        case PostgresTypes.timestamp:
          return exports2.toTimestampString(value);
        case PostgresTypes.abstime:
        case PostgresTypes.date:
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        case PostgresTypes.text:
        case PostgresTypes.time:
        case PostgresTypes.timestamptz:
        case PostgresTypes.timetz:
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
          return noop2(value);
        default:
          return noop2(value);
      }
    };
    var noop2 = (value) => {
      return value;
    };
    exports2.toBoolean = (value) => {
      switch (value) {
        case "t":
          return true;
        case "f":
          return false;
        default:
          return value;
      }
    };
    exports2.toNumber = (value) => {
      if (typeof value === "string") {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) {
          return parsedValue;
        }
      }
      return value;
    };
    exports2.toJson = (value) => {
      if (typeof value === "string") {
        try {
          return JSON.parse(value);
        } catch (error) {
          console.log(`JSON parse error: ${error}`);
          return value;
        }
      }
      return value;
    };
    exports2.toArray = (value, type) => {
      if (typeof value !== "string") {
        return value;
      }
      const lastIdx = value.length - 1;
      const closeBrace = value[lastIdx];
      const openBrace = value[0];
      if (openBrace === "{" && closeBrace === "}") {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        try {
          arr = JSON.parse("[" + valTrim + "]");
        } catch (_) {
          arr = valTrim ? valTrim.split(",") : [];
        }
        return arr.map((val) => exports2.convertCell(type, val));
      }
      return value;
    };
    exports2.toTimestampString = (value) => {
      if (typeof value === "string") {
        return value.replace(" ", "T");
      }
      return value;
    };
  },
});

// node_modules/debug/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/debug/node_modules/ms/index.js"(exports2, module2) {
    var s2 = 1e3;
    var m2 = s2 * 60;
    var h2 = m2 * 60;
    var d = h2 * 24;
    var y = d * 365.25;
    module2.exports = function (val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match =
        /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
          str
        );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h2;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m2;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s2;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h2) {
        return Math.round(ms / h2) + "h";
      }
      if (ms >= m2) {
        return Math.round(ms / m2) + "m";
      }
      if (ms >= s2) {
        return Math.round(ms / s2) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return (
        plural(ms, d, "day") ||
        plural(ms, h2, "hour") ||
        plural(ms, m2, "minute") ||
        plural(ms, s2, "second") ||
        ms + " ms"
      );
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  },
});

// node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/debug/src/debug.js"(exports2, module2) {
    exports2 =
      module2.exports =
      createDebug.debug =
      createDebug["default"] =
        createDebug;
    exports2.coerce = coerce;
    exports2.disable = disable;
    exports2.enable = enable;
    exports2.enabled = enabled;
    exports2.humanize = require_ms();
    exports2.names = [];
    exports2.skips = [];
    exports2.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0,
        i2;
      for (i2 in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i2);
        hash |= 0;
      }
      return exports2.colors[Math.abs(hash) % exports2.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self2 = debug;
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i2 = 0; i2 < args.length; i2++) {
          args[i2] = arguments[i2];
        }
        args[0] = exports2.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports2.formatters[format];
          if (typeof formatter === "function") {
            var val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports2.formatArgs.call(self2, args);
        var logFn = debug.log || exports2.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports2.enabled(namespace);
      debug.useColors = exports2.useColors();
      debug.color = selectColor(namespace);
      if (typeof exports2.init === "function") {
        exports2.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports2.save(namespaces);
      exports2.names = [];
      exports2.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(
        /[\s,]+/
      );
      var len = split.length;
      for (var i2 = 0; i2 < len; i2++) {
        if (!split[i2]) continue;
        namespaces = split[i2].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports2.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports2.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports2.enable("");
    }
    function enabled(name) {
      var i2, len;
      for (i2 = 0, len = exports2.skips.length; i2 < len; i2++) {
        if (exports2.skips[i2].test(name)) {
          return false;
        }
      }
      for (i2 = 0, len = exports2.names.length; i2 < len; i2++) {
        if (exports2.names[i2].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  },
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2 = module2.exports = require_debug();
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage =
      typeof chrome != "undefined" && typeof chrome.storage != "undefined"
        ? chrome.storage.local
        : localstorage();
    exports2.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson",
    ];
    function useColors() {
      if (
        typeof window !== "undefined" &&
        window.process &&
        window.process.type === "renderer"
      ) {
        return true;
      }
      return (
        (typeof document !== "undefined" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window !== "undefined" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator !== "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator !== "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      );
    }
    exports2.formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] =
        (useColors2 ? "%c" : "") +
        this.namespace +
        (useColors2 ? " %c" : " ") +
        args[0] +
        (useColors2 ? "%c " : " ") +
        "+" +
        exports2.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === "%%") return;
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return (
        typeof console === "object" &&
        console.log &&
        Function.prototype.apply.call(console.log, console, arguments)
      );
    }
    function save(namespaces) {
      try {
        if (namespaces == null) {
          exports2.storage.removeItem("debug");
        } else {
          exports2.storage.debug = namespaces;
        }
      } catch (e2) {}
    }
    function load() {
      var r2;
      try {
        r2 = exports2.storage.debug;
      } catch (e2) {}
      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = process.env.DEBUG;
      }
      return r2;
    }
    exports2.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e2) {}
    }
  },
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2 = module2.exports = require_debug();
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.colors = [6, 2, 3, 4, 5, 1];
    exports2.inspectOpts = Object.keys(process.env)
      .filter(function (key) {
        return /^debug_/i.test(key);
      })
      .reduce(function (obj, key) {
        var prop = key
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, function (_, k) {
            return k.toUpperCase();
          });
        var val = process.env[key];
        if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
        else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
        else if (val === "null") val = null;
        else val = Number(val);
        obj[prop] = val;
        return obj;
      }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (fd !== 1 && fd !== 2) {
      util.deprecate(function () {},
      "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream =
      fd === 1
        ? process.stdout
        : fd === 2
        ? process.stderr
        : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports2.inspectOpts
        ? Boolean(exports2.inspectOpts.colors)
        : tty.isatty(fd);
    }
    exports2.formatters.o = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util
        .inspect(v, this.inspectOpts)
        .split("\n")
        .map(function (str) {
          return str.trim();
        })
        .join(" ");
    };
    exports2.formatters.O = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(
          "\x1B[3" + c + "m+" + exports2.humanize(this.diff) + "\x1B[0m"
        );
      } else {
        args[0] = new Date().toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (namespaces == null) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs2 = require("fs");
          stream2 = new fs2.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true,
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports2.inspectOpts);
      for (var i2 = 0; i2 < keys.length; i2++) {
        debug.inspectOpts[keys[i2]] = exports2.inspectOpts[keys[i2]];
      }
    }
    exports2.enable(load());
  },
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process !== "undefined" && process.type === "renderer") {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  },
});

// node_modules/websocket/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/websocket/lib/utils.js"(exports2) {
    var noop2 = (exports2.noop = function () {});
    exports2.extend = function extend(dest, source) {
      for (var prop in source) {
        dest[prop] = source[prop];
      }
    };
    exports2.eventEmitterListenerCount =
      require("events").EventEmitter.listenerCount ||
      function (emitter, type) {
        return emitter.listeners(type).length;
      };
    exports2.bufferAllocUnsafe = Buffer.allocUnsafe
      ? Buffer.allocUnsafe
      : function oldBufferAllocUnsafe(size) {
          return new Buffer(size);
        };
    exports2.bufferFromString = Buffer.from
      ? Buffer.from
      : function oldBufferFromString(string, encoding) {
          return new Buffer(string, encoding);
        };
    exports2.BufferingLogger = function createBufferingLogger(
      identifier,
      uniqueID
    ) {
      var logFunction = require_src()(identifier);
      if (logFunction.enabled) {
        var logger = new BufferingLogger(identifier, uniqueID, logFunction);
        var debug = logger.log.bind(logger);
        debug.printOutput = logger.printOutput.bind(logger);
        debug.enabled = logFunction.enabled;
        return debug;
      }
      logFunction.printOutput = noop2;
      return logFunction;
    };
    function BufferingLogger(identifier, uniqueID, logFunction) {
      this.logFunction = logFunction;
      this.identifier = identifier;
      this.uniqueID = uniqueID;
      this.buffer = [];
    }
    BufferingLogger.prototype.log = function () {
      this.buffer.push([new Date(), Array.prototype.slice.call(arguments)]);
      return this;
    };
    BufferingLogger.prototype.clear = function () {
      this.buffer = [];
      return this;
    };
    BufferingLogger.prototype.printOutput = function (logFunction) {
      if (!logFunction) {
        logFunction = this.logFunction;
      }
      var uniqueID = this.uniqueID;
      this.buffer.forEach(function (entry) {
        var date = entry[0].toLocaleString();
        var args = entry[1].slice();
        var formatString = args[0];
        if (formatString !== void 0 && formatString !== null) {
          formatString = "%s - %s - " + formatString.toString();
          args.splice(0, 1, formatString, date, uniqueID);
          logFunction.apply(global, args);
        }
      });
    };
  },
});

// node_modules/websocket/lib/WebSocketFrame.js
var require_WebSocketFrame = __commonJS({
  "node_modules/websocket/lib/WebSocketFrame.js"(exports2, module2) {
    var bufferUtil = require("bufferutil");
    var bufferAllocUnsafe = require_utils2().bufferAllocUnsafe;
    var DECODE_HEADER = 1;
    var WAITING_FOR_16_BIT_LENGTH = 2;
    var WAITING_FOR_64_BIT_LENGTH = 3;
    var WAITING_FOR_MASK_KEY = 4;
    var WAITING_FOR_PAYLOAD = 5;
    var COMPLETE = 6;
    function WebSocketFrame(maskBytes, frameHeader, config) {
      this.maskBytes = maskBytes;
      this.frameHeader = frameHeader;
      this.config = config;
      this.maxReceivedFrameSize = config.maxReceivedFrameSize;
      this.protocolError = false;
      this.frameTooLarge = false;
      this.invalidCloseFrameLength = false;
      this.parseState = DECODE_HEADER;
      this.closeStatus = -1;
    }
    WebSocketFrame.prototype.addData = function (bufferList) {
      if (this.parseState === DECODE_HEADER) {
        if (bufferList.length >= 2) {
          bufferList.joinInto(this.frameHeader, 0, 0, 2);
          bufferList.advance(2);
          var firstByte = this.frameHeader[0];
          var secondByte = this.frameHeader[1];
          this.fin = Boolean(firstByte & 128);
          this.rsv1 = Boolean(firstByte & 64);
          this.rsv2 = Boolean(firstByte & 32);
          this.rsv3 = Boolean(firstByte & 16);
          this.mask = Boolean(secondByte & 128);
          this.opcode = firstByte & 15;
          this.length = secondByte & 127;
          if (this.opcode >= 8) {
            if (this.length > 125) {
              this.protocolError = true;
              this.dropReason = "Illegal control frame longer than 125 bytes.";
              return true;
            }
            if (!this.fin) {
              this.protocolError = true;
              this.dropReason = "Control frames must not be fragmented.";
              return true;
            }
          }
          if (this.length === 126) {
            this.parseState = WAITING_FOR_16_BIT_LENGTH;
          } else if (this.length === 127) {
            this.parseState = WAITING_FOR_64_BIT_LENGTH;
          } else {
            this.parseState = WAITING_FOR_MASK_KEY;
          }
        }
      }
      if (this.parseState === WAITING_FOR_16_BIT_LENGTH) {
        if (bufferList.length >= 2) {
          bufferList.joinInto(this.frameHeader, 2, 0, 2);
          bufferList.advance(2);
          this.length = this.frameHeader.readUInt16BE(2);
          this.parseState = WAITING_FOR_MASK_KEY;
        }
      } else if (this.parseState === WAITING_FOR_64_BIT_LENGTH) {
        if (bufferList.length >= 8) {
          bufferList.joinInto(this.frameHeader, 2, 0, 8);
          bufferList.advance(8);
          var lengthPair = [
            this.frameHeader.readUInt32BE(2),
            this.frameHeader.readUInt32BE(2 + 4),
          ];
          if (lengthPair[0] !== 0) {
            this.protocolError = true;
            this.dropReason = "Unsupported 64-bit length frame received";
            return true;
          }
          this.length = lengthPair[1];
          this.parseState = WAITING_FOR_MASK_KEY;
        }
      }
      if (this.parseState === WAITING_FOR_MASK_KEY) {
        if (this.mask) {
          if (bufferList.length >= 4) {
            bufferList.joinInto(this.maskBytes, 0, 0, 4);
            bufferList.advance(4);
            this.parseState = WAITING_FOR_PAYLOAD;
          }
        } else {
          this.parseState = WAITING_FOR_PAYLOAD;
        }
      }
      if (this.parseState === WAITING_FOR_PAYLOAD) {
        if (this.length > this.maxReceivedFrameSize) {
          this.frameTooLarge = true;
          this.dropReason =
            "Frame size of " +
            this.length.toString(10) +
            " bytes exceeds maximum accepted frame size";
          return true;
        }
        if (this.length === 0) {
          this.binaryPayload = bufferAllocUnsafe(0);
          this.parseState = COMPLETE;
          return true;
        }
        if (bufferList.length >= this.length) {
          this.binaryPayload = bufferList.take(this.length);
          bufferList.advance(this.length);
          if (this.mask) {
            bufferUtil.unmask(this.binaryPayload, this.maskBytes);
          }
          if (this.opcode === 8) {
            if (this.length === 1) {
              this.binaryPayload = bufferAllocUnsafe(0);
              this.invalidCloseFrameLength = true;
            }
            if (this.length >= 2) {
              this.closeStatus = this.binaryPayload.readUInt16BE(0);
              this.binaryPayload = this.binaryPayload.slice(2);
            }
          }
          this.parseState = COMPLETE;
          return true;
        }
      }
      return false;
    };
    WebSocketFrame.prototype.throwAwayPayload = function (bufferList) {
      if (bufferList.length >= this.length) {
        bufferList.advance(this.length);
        this.parseState = COMPLETE;
        return true;
      }
      return false;
    };
    WebSocketFrame.prototype.toBuffer = function (nullMask) {
      var maskKey;
      var headerLength = 2;
      var data;
      var outputPos;
      var firstByte = 0;
      var secondByte = 0;
      if (this.fin) {
        firstByte |= 128;
      }
      if (this.rsv1) {
        firstByte |= 64;
      }
      if (this.rsv2) {
        firstByte |= 32;
      }
      if (this.rsv3) {
        firstByte |= 16;
      }
      if (this.mask) {
        secondByte |= 128;
      }
      firstByte |= this.opcode & 15;
      if (this.opcode === 8) {
        this.length = 2;
        if (this.binaryPayload) {
          this.length += this.binaryPayload.length;
        }
        data = bufferAllocUnsafe(this.length);
        data.writeUInt16BE(this.closeStatus, 0);
        if (this.length > 2) {
          this.binaryPayload.copy(data, 2);
        }
      } else if (this.binaryPayload) {
        data = this.binaryPayload;
        this.length = data.length;
      } else {
        this.length = 0;
      }
      if (this.length <= 125) {
        secondByte |= this.length & 127;
      } else if (this.length > 125 && this.length <= 65535) {
        secondByte |= 126;
        headerLength += 2;
      } else if (this.length > 65535) {
        secondByte |= 127;
        headerLength += 8;
      }
      var output = bufferAllocUnsafe(
        this.length + headerLength + (this.mask ? 4 : 0)
      );
      output[0] = firstByte;
      output[1] = secondByte;
      outputPos = 2;
      if (this.length > 125 && this.length <= 65535) {
        output.writeUInt16BE(this.length, outputPos);
        outputPos += 2;
      } else if (this.length > 65535) {
        output.writeUInt32BE(0, outputPos);
        output.writeUInt32BE(this.length, outputPos + 4);
        outputPos += 8;
      }
      if (this.mask) {
        maskKey = nullMask ? 0 : (Math.random() * 4294967295) >>> 0;
        this.maskBytes.writeUInt32BE(maskKey, 0);
        this.maskBytes.copy(output, outputPos);
        outputPos += 4;
        if (data) {
          bufferUtil.mask(data, this.maskBytes, output, outputPos, this.length);
        }
      } else if (data) {
        data.copy(output, outputPos);
      }
      return output;
    };
    WebSocketFrame.prototype.toString = function () {
      return (
        "Opcode: " +
        this.opcode +
        ", fin: " +
        this.fin +
        ", length: " +
        this.length +
        ", hasPayload: " +
        Boolean(this.binaryPayload) +
        ", masked: " +
        this.mask
      );
    };
    module2.exports = WebSocketFrame;
  },
});

// node_modules/websocket/vendor/FastBufferList.js
var require_FastBufferList = __commonJS({
  "node_modules/websocket/vendor/FastBufferList.js"(exports2, module2) {
    var Buffer4 = require("buffer").Buffer;
    var EventEmitter = require("events").EventEmitter;
    var bufferAllocUnsafe = require_utils2().bufferAllocUnsafe;
    module2.exports = BufferList;
    module2.exports.BufferList = BufferList;
    function BufferList(opts) {
      if (!(this instanceof BufferList)) return new BufferList(opts);
      EventEmitter.call(this);
      var self2 = this;
      if (typeof opts == "undefined") opts = {};
      self2.encoding = opts.encoding;
      var head = { next: null, buffer: null };
      var last = { next: null, buffer: null };
      var length = 0;
      self2.__defineGetter__("length", function () {
        return length;
      });
      var offset = 0;
      self2.write = function (buf) {
        if (!head.buffer) {
          head.buffer = buf;
          last = head;
        } else {
          last.next = { next: null, buffer: buf };
          last = last.next;
        }
        length += buf.length;
        self2.emit("write", buf);
        return true;
      };
      self2.end = function (buf) {
        if (Buffer4.isBuffer(buf)) self2.write(buf);
      };
      self2.push = function () {
        var args = [].concat.apply([], arguments);
        args.forEach(self2.write);
        return self2;
      };
      self2.forEach = function (fn) {
        if (!head.buffer) return bufferAllocUnsafe(0);
        if (head.buffer.length - offset <= 0) return self2;
        var firstBuf = head.buffer.slice(offset);
        var b = { buffer: firstBuf, next: head.next };
        while (b && b.buffer) {
          var r2 = fn(b.buffer);
          if (r2) break;
          b = b.next;
        }
        return self2;
      };
      self2.join = function (start, end) {
        if (!head.buffer) return bufferAllocUnsafe(0);
        if (start == void 0) start = 0;
        if (end == void 0) end = self2.length;
        var big = bufferAllocUnsafe(end - start);
        var ix = 0;
        self2.forEach(function (buffer) {
          if (start < ix + buffer.length && ix < end) {
            buffer.copy(
              big,
              Math.max(0, ix - start),
              Math.max(0, start - ix),
              Math.min(buffer.length, end - ix)
            );
          }
          ix += buffer.length;
          if (ix > end) return true;
        });
        return big;
      };
      self2.joinInto = function (
        targetBuffer,
        targetStart,
        sourceStart,
        sourceEnd
      ) {
        if (!head.buffer) return new bufferAllocUnsafe(0);
        if (sourceStart == void 0) sourceStart = 0;
        if (sourceEnd == void 0) sourceEnd = self2.length;
        var big = targetBuffer;
        if (big.length - targetStart < sourceEnd - sourceStart) {
          throw new Error("Insufficient space available in target Buffer.");
        }
        var ix = 0;
        self2.forEach(function (buffer) {
          if (sourceStart < ix + buffer.length && ix < sourceEnd) {
            buffer.copy(
              big,
              Math.max(targetStart, targetStart + ix - sourceStart),
              Math.max(0, sourceStart - ix),
              Math.min(buffer.length, sourceEnd - ix)
            );
          }
          ix += buffer.length;
          if (ix > sourceEnd) return true;
        });
        return big;
      };
      self2.advance = function (n) {
        offset += n;
        length -= n;
        while (head.buffer && offset >= head.buffer.length) {
          offset -= head.buffer.length;
          head = head.next ? head.next : { buffer: null, next: null };
        }
        if (head.buffer === null) last = { next: null, buffer: null };
        self2.emit("advance", n);
        return self2;
      };
      self2.take = function (n, encoding) {
        if (n == void 0) n = self2.length;
        else if (typeof n !== "number") {
          encoding = n;
          n = self2.length;
        }
        var b = head;
        if (!encoding) encoding = self2.encoding;
        if (encoding) {
          var acc = "";
          self2.forEach(function (buffer) {
            if (n <= 0) return true;
            acc += buffer.toString(encoding, 0, Math.min(n, buffer.length));
            n -= buffer.length;
          });
          return acc;
        } else {
          return self2.join(0, n);
        }
      };
      self2.toString = function () {
        return self2.take("binary");
      };
    }
    require("util").inherits(BufferList, EventEmitter);
  },
});

// node_modules/websocket/lib/WebSocketConnection.js
var require_WebSocketConnection = __commonJS({
  "node_modules/websocket/lib/WebSocketConnection.js"(exports2, module2) {
    var util = require("util");
    var utils = require_utils2();
    var EventEmitter = require("events").EventEmitter;
    var WebSocketFrame = require_WebSocketFrame();
    var BufferList = require_FastBufferList();
    var isValidUTF8 = require("utf-8-validate");
    var bufferAllocUnsafe = utils.bufferAllocUnsafe;
    var bufferFromString = utils.bufferFromString;
    var STATE_OPEN = "open";
    var STATE_PEER_REQUESTED_CLOSE = "peer_requested_close";
    var STATE_ENDING = "ending";
    var STATE_CLOSED = "closed";
    var setImmediateImpl =
      "setImmediate" in global
        ? global.setImmediate.bind(global)
        : process.nextTick.bind(process);
    var idCounter = 0;
    function WebSocketConnection(
      socket,
      extensions,
      protocol,
      maskOutgoingPackets,
      config
    ) {
      this._debug = utils.BufferingLogger("websocket:connection", ++idCounter);
      this._debug("constructor");
      if (this._debug.enabled) {
        instrumentSocketForDebugging(this, socket);
      }
      EventEmitter.call(this);
      this._pingListenerCount = 0;
      this.on("newListener", function (ev) {
        if (ev === "ping") {
          this._pingListenerCount++;
        }
      }).on("removeListener", function (ev) {
        if (ev === "ping") {
          this._pingListenerCount--;
        }
      });
      this.config = config;
      this.socket = socket;
      this.protocol = protocol;
      this.extensions = extensions;
      this.remoteAddress = socket.remoteAddress;
      this.closeReasonCode = -1;
      this.closeDescription = null;
      this.closeEventEmitted = false;
      this.maskOutgoingPackets = maskOutgoingPackets;
      this.maskBytes = bufferAllocUnsafe(4);
      this.frameHeader = bufferAllocUnsafe(10);
      this.bufferList = new BufferList();
      this.currentFrame = new WebSocketFrame(
        this.maskBytes,
        this.frameHeader,
        this.config
      );
      this.fragmentationSize = 0;
      this.frameQueue = [];
      this.connected = true;
      this.state = STATE_OPEN;
      this.waitingForCloseResponse = false;
      this.receivedEnd = false;
      this.closeTimeout = this.config.closeTimeout;
      this.assembleFragments = this.config.assembleFragments;
      this.maxReceivedMessageSize = this.config.maxReceivedMessageSize;
      this.outputBufferFull = false;
      this.inputPaused = false;
      this.receivedDataHandler = this.processReceivedData.bind(this);
      this._closeTimerHandler = this.handleCloseTimer.bind(this);
      this.socket.setNoDelay(this.config.disableNagleAlgorithm);
      this.socket.setTimeout(0);
      if (this.config.keepalive && !this.config.useNativeKeepalive) {
        if (typeof this.config.keepaliveInterval !== "number") {
          throw new Error(
            "keepaliveInterval must be specified and numeric if keepalive is true."
          );
        }
        this._keepaliveTimerHandler = this.handleKeepaliveTimer.bind(this);
        this.setKeepaliveTimer();
        if (this.config.dropConnectionOnKeepaliveTimeout) {
          if (typeof this.config.keepaliveGracePeriod !== "number") {
            throw new Error(
              "keepaliveGracePeriod  must be specified and numeric if dropConnectionOnKeepaliveTimeout is true."
            );
          }
          this._gracePeriodTimerHandler =
            this.handleGracePeriodTimer.bind(this);
        }
      } else if (this.config.keepalive && this.config.useNativeKeepalive) {
        if (!("setKeepAlive" in this.socket)) {
          throw new Error(
            "Unable to use native keepalive: unsupported by this version of Node."
          );
        }
        this.socket.setKeepAlive(true, this.config.keepaliveInterval);
      }
      this.socket.removeAllListeners("error");
    }
    WebSocketConnection.CLOSE_REASON_NORMAL = 1e3;
    WebSocketConnection.CLOSE_REASON_GOING_AWAY = 1001;
    WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR = 1002;
    WebSocketConnection.CLOSE_REASON_UNPROCESSABLE_INPUT = 1003;
    WebSocketConnection.CLOSE_REASON_RESERVED = 1004;
    WebSocketConnection.CLOSE_REASON_NOT_PROVIDED = 1005;
    WebSocketConnection.CLOSE_REASON_ABNORMAL = 1006;
    WebSocketConnection.CLOSE_REASON_INVALID_DATA = 1007;
    WebSocketConnection.CLOSE_REASON_POLICY_VIOLATION = 1008;
    WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG = 1009;
    WebSocketConnection.CLOSE_REASON_EXTENSION_REQUIRED = 1010;
    WebSocketConnection.CLOSE_REASON_INTERNAL_SERVER_ERROR = 1011;
    WebSocketConnection.CLOSE_REASON_TLS_HANDSHAKE_FAILED = 1015;
    WebSocketConnection.CLOSE_DESCRIPTIONS = {
      1e3: "Normal connection closure",
      1001: "Remote peer is going away",
      1002: "Protocol error",
      1003: "Unprocessable input",
      1004: "Reserved",
      1005: "Reason not provided",
      1006: "Abnormal closure, no further detail available",
      1007: "Invalid data received",
      1008: "Policy violation",
      1009: "Message too big",
      1010: "Extension requested by client is required",
      1011: "Internal Server Error",
      1015: "TLS Handshake Failed",
    };
    function validateCloseReason(code) {
      if (code < 1e3) {
        return false;
      }
      if (code >= 1e3 && code <= 2999) {
        return (
          [
            1e3, 1001, 1002, 1003, 1007, 1008, 1009, 1010, 1011, 1012, 1013,
            1014, 1015,
          ].indexOf(code) !== -1
        );
      }
      if (code >= 3e3 && code <= 3999) {
        return true;
      }
      if (code >= 4e3 && code <= 4999) {
        return true;
      }
      if (code >= 5e3) {
        return false;
      }
    }
    util.inherits(WebSocketConnection, EventEmitter);
    WebSocketConnection.prototype._addSocketEventListeners = function () {
      this.socket.on("error", this.handleSocketError.bind(this));
      this.socket.on("end", this.handleSocketEnd.bind(this));
      this.socket.on("close", this.handleSocketClose.bind(this));
      this.socket.on("drain", this.handleSocketDrain.bind(this));
      this.socket.on("pause", this.handleSocketPause.bind(this));
      this.socket.on("resume", this.handleSocketResume.bind(this));
      this.socket.on("data", this.handleSocketData.bind(this));
    };
    WebSocketConnection.prototype.setKeepaliveTimer = function () {
      this._debug("setKeepaliveTimer");
      if (!this.config.keepalive || this.config.useNativeKeepalive) {
        return;
      }
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      this._keepaliveTimeoutID = setTimeout(
        this._keepaliveTimerHandler,
        this.config.keepaliveInterval
      );
    };
    WebSocketConnection.prototype.clearKeepaliveTimer = function () {
      if (this._keepaliveTimeoutID) {
        clearTimeout(this._keepaliveTimeoutID);
      }
    };
    WebSocketConnection.prototype.handleKeepaliveTimer = function () {
      this._debug("handleKeepaliveTimer");
      this._keepaliveTimeoutID = null;
      this.ping();
      if (this.config.dropConnectionOnKeepaliveTimeout) {
        this.setGracePeriodTimer();
      } else {
        this.setKeepaliveTimer();
      }
    };
    WebSocketConnection.prototype.setGracePeriodTimer = function () {
      this._debug("setGracePeriodTimer");
      this.clearGracePeriodTimer();
      this._gracePeriodTimeoutID = setTimeout(
        this._gracePeriodTimerHandler,
        this.config.keepaliveGracePeriod
      );
    };
    WebSocketConnection.prototype.clearGracePeriodTimer = function () {
      if (this._gracePeriodTimeoutID) {
        clearTimeout(this._gracePeriodTimeoutID);
      }
    };
    WebSocketConnection.prototype.handleGracePeriodTimer = function () {
      this._debug("handleGracePeriodTimer");
      this._gracePeriodTimeoutID = null;
      this.drop(
        WebSocketConnection.CLOSE_REASON_ABNORMAL,
        "Peer not responding.",
        true
      );
    };
    WebSocketConnection.prototype.handleSocketData = function (data) {
      this._debug("handleSocketData");
      this.setKeepaliveTimer();
      this.bufferList.write(data);
      this.processReceivedData();
    };
    WebSocketConnection.prototype.processReceivedData = function () {
      this._debug("processReceivedData");
      if (!this.connected) {
        return;
      }
      if (this.inputPaused) {
        return;
      }
      var frame = this.currentFrame;
      if (!frame.addData(this.bufferList)) {
        this._debug("-- insufficient data for frame");
        return;
      }
      var self2 = this;
      if (frame.protocolError) {
        this._debug("-- protocol error");
        process.nextTick(function () {
          self2.drop(
            WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
            frame.dropReason
          );
        });
        return;
      } else if (frame.frameTooLarge) {
        this._debug("-- frame too large");
        process.nextTick(function () {
          self2.drop(
            WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG,
            frame.dropReason
          );
        });
        return;
      }
      if (frame.rsv1 || frame.rsv2 || frame.rsv3) {
        this._debug("-- illegal rsv flag");
        process.nextTick(function () {
          self2.drop(
            WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
            "Unsupported usage of rsv bits without negotiated extension."
          );
        });
        return;
      }
      if (!this.assembleFragments) {
        this._debug("-- emitting frame");
        process.nextTick(function () {
          self2.emit("frame", frame);
        });
      }
      process.nextTick(function () {
        self2.processFrame(frame);
      });
      this.currentFrame = new WebSocketFrame(
        this.maskBytes,
        this.frameHeader,
        this.config
      );
      if (this.bufferList.length > 0) {
        setImmediateImpl(this.receivedDataHandler);
      }
    };
    WebSocketConnection.prototype.handleSocketError = function (error) {
      this._debug("handleSocketError: %j", error);
      if (this.state === STATE_CLOSED) {
        this._debug("  --- Socket 'error' after 'close'");
        return;
      }
      this.closeReasonCode = WebSocketConnection.CLOSE_REASON_ABNORMAL;
      this.closeDescription =
        "Socket Error: " + error.syscall + " " + error.code;
      this.connected = false;
      this.state = STATE_CLOSED;
      this.fragmentationSize = 0;
      if (utils.eventEmitterListenerCount(this, "error") > 0) {
        this.emit("error", error);
      }
      this.socket.destroy();
      this._debug.printOutput();
    };
    WebSocketConnection.prototype.handleSocketEnd = function () {
      this._debug(
        "handleSocketEnd: received socket end.  state = %s",
        this.state
      );
      this.receivedEnd = true;
      if (this.state === STATE_CLOSED) {
        this._debug("  --- Socket 'end' after 'close'");
        return;
      }
      if (
        this.state !== STATE_PEER_REQUESTED_CLOSE &&
        this.state !== STATE_ENDING
      ) {
        this._debug("  --- UNEXPECTED socket end.");
        this.socket.end();
      }
    };
    WebSocketConnection.prototype.handleSocketClose = function (hadError) {
      this._debug("handleSocketClose: received socket close");
      this.socketHadError = hadError;
      this.connected = false;
      this.state = STATE_CLOSED;
      if (this.closeReasonCode === -1) {
        this.closeReasonCode = WebSocketConnection.CLOSE_REASON_ABNORMAL;
        this.closeDescription = "Connection dropped by remote peer.";
      }
      this.clearCloseTimer();
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      if (!this.closeEventEmitted) {
        this.closeEventEmitted = true;
        this._debug("-- Emitting WebSocketConnection close event");
        this.emit("close", this.closeReasonCode, this.closeDescription);
      }
    };
    WebSocketConnection.prototype.handleSocketDrain = function () {
      this._debug("handleSocketDrain: socket drain event");
      this.outputBufferFull = false;
      this.emit("drain");
    };
    WebSocketConnection.prototype.handleSocketPause = function () {
      this._debug("handleSocketPause: socket pause event");
      this.inputPaused = true;
      this.emit("pause");
    };
    WebSocketConnection.prototype.handleSocketResume = function () {
      this._debug("handleSocketResume: socket resume event");
      this.inputPaused = false;
      this.emit("resume");
      this.processReceivedData();
    };
    WebSocketConnection.prototype.pause = function () {
      this._debug("pause: pause requested");
      this.socket.pause();
    };
    WebSocketConnection.prototype.resume = function () {
      this._debug("resume: resume requested");
      this.socket.resume();
    };
    WebSocketConnection.prototype.close = function (reasonCode, description) {
      if (this.connected) {
        this._debug("close: Initating clean WebSocket close sequence.");
        if (typeof reasonCode !== "number") {
          reasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
        }
        if (!validateCloseReason(reasonCode)) {
          throw new Error("Close code " + reasonCode + " is not valid.");
        }
        if (typeof description !== "string") {
          description = WebSocketConnection.CLOSE_DESCRIPTIONS[reasonCode];
        }
        this.closeReasonCode = reasonCode;
        this.closeDescription = description;
        this.setCloseTimer();
        this.sendCloseFrame(this.closeReasonCode, this.closeDescription);
        this.state = STATE_ENDING;
        this.connected = false;
      }
    };
    WebSocketConnection.prototype.drop = function (
      reasonCode,
      description,
      skipCloseFrame
    ) {
      this._debug("drop");
      if (typeof reasonCode !== "number") {
        reasonCode = WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
      }
      if (typeof description !== "string") {
        description = WebSocketConnection.CLOSE_DESCRIPTIONS[reasonCode];
      }
      this._debug(
        "Forcefully dropping connection. skipCloseFrame: %s, code: %d, description: %s",
        skipCloseFrame,
        reasonCode,
        description
      );
      this.closeReasonCode = reasonCode;
      this.closeDescription = description;
      this.frameQueue = [];
      this.fragmentationSize = 0;
      if (!skipCloseFrame) {
        this.sendCloseFrame(reasonCode, description);
      }
      this.connected = false;
      this.state = STATE_CLOSED;
      this.clearCloseTimer();
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      if (!this.closeEventEmitted) {
        this.closeEventEmitted = true;
        this._debug("Emitting WebSocketConnection close event");
        this.emit("close", this.closeReasonCode, this.closeDescription);
      }
      this._debug("Drop: destroying socket");
      this.socket.destroy();
    };
    WebSocketConnection.prototype.setCloseTimer = function () {
      this._debug("setCloseTimer");
      this.clearCloseTimer();
      this._debug("Setting close timer");
      this.waitingForCloseResponse = true;
      this.closeTimer = setTimeout(this._closeTimerHandler, this.closeTimeout);
    };
    WebSocketConnection.prototype.clearCloseTimer = function () {
      this._debug("clearCloseTimer");
      if (this.closeTimer) {
        this._debug("Clearing close timer");
        clearTimeout(this.closeTimer);
        this.waitingForCloseResponse = false;
        this.closeTimer = null;
      }
    };
    WebSocketConnection.prototype.handleCloseTimer = function () {
      this._debug("handleCloseTimer");
      this.closeTimer = null;
      if (this.waitingForCloseResponse) {
        this._debug(
          "Close response not received from client.  Forcing socket end."
        );
        this.waitingForCloseResponse = false;
        this.state = STATE_CLOSED;
        this.socket.end();
      }
    };
    WebSocketConnection.prototype.processFrame = function (frame) {
      this._debug("processFrame");
      this._debug(" -- frame: %s", frame);
      if (
        this.frameQueue.length !== 0 &&
        frame.opcode > 0 &&
        frame.opcode < 8
      ) {
        this.drop(
          WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
          "Illegal frame opcode 0x" +
            frame.opcode.toString(16) +
            " received in middle of fragmented message."
        );
        return;
      }
      switch (frame.opcode) {
        case 2:
          this._debug("-- Binary Frame");
          if (this.assembleFragments) {
            if (frame.fin) {
              this._debug("---- Emitting 'message' event");
              this.emit("message", {
                type: "binary",
                binaryData: frame.binaryPayload,
              });
            } else {
              this.frameQueue.push(frame);
              this.fragmentationSize = frame.length;
            }
          }
          break;
        case 1:
          this._debug("-- Text Frame");
          if (this.assembleFragments) {
            if (frame.fin) {
              if (!isValidUTF8(frame.binaryPayload)) {
                this.drop(
                  WebSocketConnection.CLOSE_REASON_INVALID_DATA,
                  "Invalid UTF-8 Data Received"
                );
                return;
              }
              this._debug("---- Emitting 'message' event");
              this.emit("message", {
                type: "utf8",
                utf8Data: frame.binaryPayload.toString("utf8"),
              });
            } else {
              this.frameQueue.push(frame);
              this.fragmentationSize = frame.length;
            }
          }
          break;
        case 0:
          this._debug("-- Continuation Frame");
          if (this.assembleFragments) {
            if (this.frameQueue.length === 0) {
              this.drop(
                WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
                "Unexpected Continuation Frame"
              );
              return;
            }
            this.fragmentationSize += frame.length;
            if (this.fragmentationSize > this.maxReceivedMessageSize) {
              this.drop(
                WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG,
                "Maximum message size exceeded."
              );
              return;
            }
            this.frameQueue.push(frame);
            if (frame.fin) {
              var bytesCopied = 0;
              var binaryPayload = bufferAllocUnsafe(this.fragmentationSize);
              var opcode = this.frameQueue[0].opcode;
              this.frameQueue.forEach(function (currentFrame) {
                currentFrame.binaryPayload.copy(binaryPayload, bytesCopied);
                bytesCopied += currentFrame.binaryPayload.length;
              });
              this.frameQueue = [];
              this.fragmentationSize = 0;
              switch (opcode) {
                case 2:
                  this.emit("message", {
                    type: "binary",
                    binaryData: binaryPayload,
                  });
                  break;
                case 1:
                  if (!isValidUTF8(binaryPayload)) {
                    this.drop(
                      WebSocketConnection.CLOSE_REASON_INVALID_DATA,
                      "Invalid UTF-8 Data Received"
                    );
                    return;
                  }
                  this.emit("message", {
                    type: "utf8",
                    utf8Data: binaryPayload.toString("utf8"),
                  });
                  break;
                default:
                  this.drop(
                    WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
                    "Unexpected first opcode in fragmentation sequence: 0x" +
                      opcode.toString(16)
                  );
                  return;
              }
            }
          }
          break;
        case 9:
          this._debug("-- Ping Frame");
          if (this._pingListenerCount > 0) {
            var cancelled = false;
            var cancel = function () {
              cancelled = true;
            };
            this.emit("ping", cancel, frame.binaryPayload);
            if (!cancelled) {
              this.pong(frame.binaryPayload);
            }
          } else {
            this.pong(frame.binaryPayload);
          }
          break;
        case 10:
          this._debug("-- Pong Frame");
          this.emit("pong", frame.binaryPayload);
          break;
        case 8:
          this._debug("-- Close Frame");
          if (this.waitingForCloseResponse) {
            this._debug(
              "---- Got close response from peer.  Completing closing handshake."
            );
            this.clearCloseTimer();
            this.waitingForCloseResponse = false;
            this.state = STATE_CLOSED;
            this.socket.end();
            return;
          }
          this._debug("---- Closing handshake initiated by peer.");
          this.state = STATE_PEER_REQUESTED_CLOSE;
          var respondCloseReasonCode;
          if (frame.invalidCloseFrameLength) {
            this.closeReasonCode = 1005;
            respondCloseReasonCode =
              WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
          } else if (
            frame.closeStatus === -1 ||
            validateCloseReason(frame.closeStatus)
          ) {
            this.closeReasonCode = frame.closeStatus;
            respondCloseReasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
          } else {
            this.closeReasonCode = frame.closeStatus;
            respondCloseReasonCode =
              WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
          }
          if (frame.binaryPayload.length > 1) {
            if (!isValidUTF8(frame.binaryPayload)) {
              this.drop(
                WebSocketConnection.CLOSE_REASON_INVALID_DATA,
                "Invalid UTF-8 Data Received"
              );
              return;
            }
            this.closeDescription = frame.binaryPayload.toString("utf8");
          } else {
            this.closeDescription =
              WebSocketConnection.CLOSE_DESCRIPTIONS[this.closeReasonCode];
          }
          this._debug(
            "------ Remote peer %s - code: %d - %s - close frame payload length: %d",
            this.remoteAddress,
            this.closeReasonCode,
            this.closeDescription,
            frame.length
          );
          this._debug("------ responding to remote peer's close request.");
          this.sendCloseFrame(respondCloseReasonCode, null);
          this.connected = false;
          break;
        default:
          this._debug("-- Unrecognized Opcode %d", frame.opcode);
          this.drop(
            WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR,
            "Unrecognized Opcode: 0x" + frame.opcode.toString(16)
          );
          break;
      }
    };
    WebSocketConnection.prototype.send = function (data, cb) {
      this._debug("send");
      if (Buffer.isBuffer(data)) {
        this.sendBytes(data, cb);
      } else if (typeof data["toString"] === "function") {
        this.sendUTF(data, cb);
      } else {
        throw new Error(
          "Data provided must either be a Node Buffer or implement toString()"
        );
      }
    };
    WebSocketConnection.prototype.sendUTF = function (data, cb) {
      data = bufferFromString(data.toString(), "utf8");
      this._debug("sendUTF: %d bytes", data.length);
      var frame = new WebSocketFrame(
        this.maskBytes,
        this.frameHeader,
        this.config
      );
      frame.opcode = 1;
      frame.binaryPayload = data;
      this.fragmentAndSend(frame, cb);
    };
    WebSocketConnection.prototype.sendBytes = function (data, cb) {
      this._debug("sendBytes");
      if (!Buffer.isBuffer(data)) {
        throw new Error(
          "You must pass a Node Buffer object to WebSocketConnection.prototype.sendBytes()"
        );
      }
      var frame = new WebSocketFrame(
        this.maskBytes,
        this.frameHeader,
        this.config
      );
      frame.opcode = 2;
      frame.binaryPayload = data;
      this.fragmentAndSend(frame, cb);
    };
    WebSocketConnection.prototype.ping = function (data) {
      this._debug("ping");
      var frame = new WebSocketFrame(
        this.maskBytes,
        this.frameHeader,
        this.config
      );
      frame.opcode = 9;
      frame.fin = true;
      if (data) {
        if (!Buffer.isBuffer(data)) {
          data = bufferFromString(data.toString(), "utf8");
        }
        if (data.length > 125) {
          this._debug(
            "WebSocket: Data for ping is longer than 125 bytes.  Truncating."
          );
          data = data.slice(0, 124);
        }
        frame.binaryPayload = data;
      }
      this.sendFrame(frame);
    };
    WebSocketConnection.prototype.pong = function (binaryPayload) {
      this._debug("pong");
      var frame = new WebSocketFrame(
        this.maskBytes,
        this.frameHeader,
        this.config
      );
      frame.opcode = 10;
      if (Buffer.isBuffer(binaryPayload) && binaryPayload.length > 125) {
        this._debug(
          "WebSocket: Data for pong is longer than 125 bytes.  Truncating."
        );
        binaryPayload = binaryPayload.slice(0, 124);
      }
      frame.binaryPayload = binaryPayload;
      frame.fin = true;
      this.sendFrame(frame);
    };
    WebSocketConnection.prototype.fragmentAndSend = function (frame, cb) {
      this._debug("fragmentAndSend");
      if (frame.opcode > 7) {
        throw new Error("You cannot fragment control frames.");
      }
      var threshold = this.config.fragmentationThreshold;
      var length = frame.binaryPayload.length;
      if (
        !this.config.fragmentOutgoingMessages ||
        (frame.binaryPayload && length <= threshold)
      ) {
        frame.fin = true;
        this.sendFrame(frame, cb);
        return;
      }
      var numFragments = Math.ceil(length / threshold);
      var sentFragments = 0;
      var sentCallback = function fragmentSentCallback(err) {
        if (err) {
          if (typeof cb === "function") {
            cb(err);
            cb = null;
          }
          return;
        }
        ++sentFragments;
        if (sentFragments === numFragments && typeof cb === "function") {
          cb();
        }
      };
      for (var i2 = 1; i2 <= numFragments; i2++) {
        var currentFrame = new WebSocketFrame(
          this.maskBytes,
          this.frameHeader,
          this.config
        );
        currentFrame.opcode = i2 === 1 ? frame.opcode : 0;
        currentFrame.fin = i2 === numFragments;
        var currentLength =
          i2 === numFragments ? length - threshold * (i2 - 1) : threshold;
        var sliceStart = threshold * (i2 - 1);
        currentFrame.binaryPayload = frame.binaryPayload.slice(
          sliceStart,
          sliceStart + currentLength
        );
        this.sendFrame(currentFrame, sentCallback);
      }
    };
    WebSocketConnection.prototype.sendCloseFrame = function (
      reasonCode,
      description,
      cb
    ) {
      if (typeof reasonCode !== "number") {
        reasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
      }
      this._debug(
        "sendCloseFrame state: %s, reasonCode: %d, description: %s",
        this.state,
        reasonCode,
        description
      );
      if (
        this.state !== STATE_OPEN &&
        this.state !== STATE_PEER_REQUESTED_CLOSE
      ) {
        return;
      }
      var frame = new WebSocketFrame(
        this.maskBytes,
        this.frameHeader,
        this.config
      );
      frame.fin = true;
      frame.opcode = 8;
      frame.closeStatus = reasonCode;
      if (typeof description === "string") {
        frame.binaryPayload = bufferFromString(description, "utf8");
      }
      this.sendFrame(frame, cb);
      this.socket.end();
    };
    WebSocketConnection.prototype.sendFrame = function (frame, cb) {
      this._debug("sendFrame");
      frame.mask = this.maskOutgoingPackets;
      var flushed = this.socket.write(frame.toBuffer(), cb);
      this.outputBufferFull = !flushed;
      return flushed;
    };
    module2.exports = WebSocketConnection;
    function instrumentSocketForDebugging(connection, socket) {
      if (!connection._debug.enabled) {
        return;
      }
      var originalSocketEmit = socket.emit;
      socket.emit = function (event) {
        connection._debug("||| Socket Event  '%s'", event);
        originalSocketEmit.apply(this, arguments);
      };
      for (var key in socket) {
        if (typeof socket[key] !== "function") {
          continue;
        }
        if (["emit"].indexOf(key) !== -1) {
          continue;
        }
        (function (key2) {
          var original = socket[key2];
          if (key2 === "on") {
            socket[key2] = function proxyMethod__EventEmitter__On() {
              connection._debug(
                "||| Socket method called:  %s (%s)",
                key2,
                arguments[0]
              );
              return original.apply(this, arguments);
            };
            return;
          }
          socket[key2] = function proxyMethod() {
            connection._debug("||| Socket method called:  %s", key2);
            return original.apply(this, arguments);
          };
        })(key);
      }
    }
  },
});

// node_modules/websocket/lib/WebSocketRequest.js
var require_WebSocketRequest = __commonJS({
  "node_modules/websocket/lib/WebSocketRequest.js"(exports2, module2) {
    var crypto = require("crypto");
    var util = require("util");
    var url = require("url");
    var EventEmitter = require("events").EventEmitter;
    var WebSocketConnection = require_WebSocketConnection();
    var headerValueSplitRegExp = /,\s*/;
    var headerParamSplitRegExp = /;\s*/;
    var headerSanitizeRegExp = /[\r\n]/g;
    var xForwardedForSeparatorRegExp = /,\s*/;
    var separators = [
      "(",
      ")",
      "<",
      ">",
      "@",
      ",",
      ";",
      ":",
      "\\",
      '"',
      "/",
      "[",
      "]",
      "?",
      "=",
      "{",
      "}",
      " ",
      String.fromCharCode(9),
    ];
    var controlChars = [String.fromCharCode(127)];
    for (i2 = 0; i2 < 31; i2++) {
      controlChars.push(String.fromCharCode(i2));
    }
    var i2;
    var cookieNameValidateRegEx =
      /([\x00-\x20\x22\x28\x29\x2c\x2f\x3a-\x3f\x40\x5b-\x5e\x7b\x7d\x7f])/;
    var cookieValueValidateRegEx =
      /[^\x21\x23-\x2b\x2d-\x3a\x3c-\x5b\x5d-\x7e]/;
    var cookieValueDQuoteValidateRegEx = /^"[^"]*"$/;
    var controlCharsAndSemicolonRegEx = /[\x00-\x20\x3b]/g;
    var cookieSeparatorRegEx = /[;,] */;
    var httpStatusDescriptions = {
      100: "Continue",
      101: "Switching Protocols",
      200: "OK",
      201: "Created",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      406: "Not Acceptable",
      407: "Proxy Authorization Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Request Entity Too Long",
      414: "Request-URI Too Long",
      415: "Unsupported Media Type",
      416: "Requested Range Not Satisfiable",
      417: "Expectation Failed",
      426: "Upgrade Required",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported",
    };
    function WebSocketRequest(socket, httpRequest, serverConfig) {
      EventEmitter.call(this);
      this.socket = socket;
      this.httpRequest = httpRequest;
      this.resource = httpRequest.url;
      this.remoteAddress = socket.remoteAddress;
      this.remoteAddresses = [this.remoteAddress];
      this.serverConfig = serverConfig;
      this._socketIsClosing = false;
      this._socketCloseHandler = this._handleSocketCloseBeforeAccept.bind(this);
      this.socket.on("end", this._socketCloseHandler);
      this.socket.on("close", this._socketCloseHandler);
      this._resolved = false;
    }
    util.inherits(WebSocketRequest, EventEmitter);
    WebSocketRequest.prototype.readHandshake = function () {
      var self2 = this;
      var request = this.httpRequest;
      this.resourceURL = url.parse(this.resource, true);
      this.host = request.headers["host"];
      if (!this.host) {
        throw new Error("Client must provide a Host header.");
      }
      this.key = request.headers["sec-websocket-key"];
      if (!this.key) {
        throw new Error("Client must provide a value for Sec-WebSocket-Key.");
      }
      this.webSocketVersion = parseInt(
        request.headers["sec-websocket-version"],
        10
      );
      if (!this.webSocketVersion || isNaN(this.webSocketVersion)) {
        throw new Error(
          "Client must provide a value for Sec-WebSocket-Version."
        );
      }
      switch (this.webSocketVersion) {
        case 8:
        case 13:
          break;
        default:
          var e2 = new Error(
            "Unsupported websocket client version: " +
              this.webSocketVersion +
              "Only versions 8 and 13 are supported."
          );
          e2.httpCode = 426;
          e2.headers = {
            "Sec-WebSocket-Version": "13",
          };
          throw e2;
      }
      if (this.webSocketVersion === 13) {
        this.origin = request.headers["origin"];
      } else if (this.webSocketVersion === 8) {
        this.origin = request.headers["sec-websocket-origin"];
      }
      var protocolString = request.headers["sec-websocket-protocol"];
      this.protocolFullCaseMap = {};
      this.requestedProtocols = [];
      if (protocolString) {
        var requestedProtocolsFullCase = protocolString.split(
          headerValueSplitRegExp
        );
        requestedProtocolsFullCase.forEach(function (protocol) {
          var lcProtocol = protocol.toLocaleLowerCase();
          self2.requestedProtocols.push(lcProtocol);
          self2.protocolFullCaseMap[lcProtocol] = protocol;
        });
      }
      if (
        !this.serverConfig.ignoreXForwardedFor &&
        request.headers["x-forwarded-for"]
      ) {
        var immediatePeerIP = this.remoteAddress;
        this.remoteAddresses = request.headers["x-forwarded-for"].split(
          xForwardedForSeparatorRegExp
        );
        this.remoteAddresses.push(immediatePeerIP);
        this.remoteAddress = this.remoteAddresses[0];
      }
      if (this.serverConfig.parseExtensions) {
        var extensionsString = request.headers["sec-websocket-extensions"];
        this.requestedExtensions = this.parseExtensions(extensionsString);
      } else {
        this.requestedExtensions = [];
      }
      if (this.serverConfig.parseCookies) {
        var cookieString = request.headers["cookie"];
        this.cookies = this.parseCookies(cookieString);
      } else {
        this.cookies = [];
      }
    };
    WebSocketRequest.prototype.parseExtensions = function (extensionsString) {
      if (!extensionsString || extensionsString.length === 0) {
        return [];
      }
      var extensions = extensionsString
        .toLocaleLowerCase()
        .split(headerValueSplitRegExp);
      extensions.forEach(function (extension, index, array) {
        var params = extension.split(headerParamSplitRegExp);
        var extensionName = params[0];
        var extensionParams = params.slice(1);
        extensionParams.forEach(function (rawParam, index2, array2) {
          var arr = rawParam.split("=");
          var obj2 = {
            name: arr[0],
            value: arr[1],
          };
          array2.splice(index2, 1, obj2);
        });
        var obj = {
          name: extensionName,
          params: extensionParams,
        };
        array.splice(index, 1, obj);
      });
      return extensions;
    };
    WebSocketRequest.prototype.parseCookies = function (str) {
      if (!str || typeof str !== "string") {
        return [];
      }
      var cookies = [];
      var pairs = str.split(cookieSeparatorRegEx);
      pairs.forEach(function (pair) {
        var eq_idx = pair.indexOf("=");
        if (eq_idx === -1) {
          cookies.push({
            name: pair,
            value: null,
          });
          return;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] === '"') {
          val = val.slice(1, -1);
        }
        cookies.push({
          name: key,
          value: decodeURIComponent(val),
        });
      });
      return cookies;
    };
    WebSocketRequest.prototype.accept = function (
      acceptedProtocol,
      allowedOrigin,
      cookies
    ) {
      this._verifyResolution();
      var protocolFullCase;
      if (acceptedProtocol) {
        protocolFullCase =
          this.protocolFullCaseMap[acceptedProtocol.toLocaleLowerCase()];
        if (typeof protocolFullCase === "undefined") {
          protocolFullCase = acceptedProtocol;
        }
      } else {
        protocolFullCase = acceptedProtocol;
      }
      this.protocolFullCaseMap = null;
      var sha1 = crypto.createHash("sha1");
      sha1.update(this.key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
      var acceptKey = sha1.digest("base64");
      var response =
        "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " +
        acceptKey +
        "\r\n";
      if (protocolFullCase) {
        for (var i3 = 0; i3 < protocolFullCase.length; i3++) {
          var charCode = protocolFullCase.charCodeAt(i3);
          var character = protocolFullCase.charAt(i3);
          if (
            charCode < 33 ||
            charCode > 126 ||
            separators.indexOf(character) !== -1
          ) {
            this.reject(500);
            throw new Error(
              'Illegal character "' +
                String.fromCharCode(character) +
                '" in subprotocol.'
            );
          }
        }
        if (this.requestedProtocols.indexOf(acceptedProtocol) === -1) {
          this.reject(500);
          throw new Error(
            "Specified protocol was not requested by the client."
          );
        }
        protocolFullCase = protocolFullCase.replace(headerSanitizeRegExp, "");
        response += "Sec-WebSocket-Protocol: " + protocolFullCase + "\r\n";
      }
      this.requestedProtocols = null;
      if (allowedOrigin) {
        allowedOrigin = allowedOrigin.replace(headerSanitizeRegExp, "");
        if (this.webSocketVersion === 13) {
          response += "Origin: " + allowedOrigin + "\r\n";
        } else if (this.webSocketVersion === 8) {
          response += "Sec-WebSocket-Origin: " + allowedOrigin + "\r\n";
        }
      }
      if (cookies) {
        if (!Array.isArray(cookies)) {
          this.reject(500);
          throw new Error(
            'Value supplied for "cookies" argument must be an array.'
          );
        }
        var seenCookies = {};
        cookies.forEach(
          function (cookie) {
            if (!cookie.name || !cookie.value) {
              this.reject(500);
              throw new Error(
                'Each cookie to set must at least provide a "name" and "value"'
              );
            }
            cookie.name = cookie.name.replace(
              controlCharsAndSemicolonRegEx,
              ""
            );
            cookie.value = cookie.value.replace(
              controlCharsAndSemicolonRegEx,
              ""
            );
            if (seenCookies[cookie.name]) {
              this.reject(500);
              throw new Error(
                "You may not specify the same cookie name twice."
              );
            }
            seenCookies[cookie.name] = true;
            var invalidChar = cookie.name.match(cookieNameValidateRegEx);
            if (invalidChar) {
              this.reject(500);
              throw new Error(
                "Illegal character " + invalidChar[0] + " in cookie name"
              );
            }
            if (cookie.value.match(cookieValueDQuoteValidateRegEx)) {
              invalidChar = cookie.value
                .slice(1, -1)
                .match(cookieValueValidateRegEx);
            } else {
              invalidChar = cookie.value.match(cookieValueValidateRegEx);
            }
            if (invalidChar) {
              this.reject(500);
              throw new Error(
                "Illegal character " + invalidChar[0] + " in cookie value"
              );
            }
            var cookieParts = [cookie.name + "=" + cookie.value];
            if (cookie.path) {
              invalidChar = cookie.path.match(controlCharsAndSemicolonRegEx);
              if (invalidChar) {
                this.reject(500);
                throw new Error(
                  "Illegal character " + invalidChar[0] + " in cookie path"
                );
              }
              cookieParts.push("Path=" + cookie.path);
            }
            if (cookie.domain) {
              if (typeof cookie.domain !== "string") {
                this.reject(500);
                throw new Error(
                  "Domain must be specified and must be a string."
                );
              }
              invalidChar = cookie.domain.match(controlCharsAndSemicolonRegEx);
              if (invalidChar) {
                this.reject(500);
                throw new Error(
                  "Illegal character " + invalidChar[0] + " in cookie domain"
                );
              }
              cookieParts.push("Domain=" + cookie.domain.toLowerCase());
            }
            if (cookie.expires) {
              if (!(cookie.expires instanceof Date)) {
                this.reject(500);
                throw new Error(
                  'Value supplied for cookie "expires" must be a vaild date object'
                );
              }
              cookieParts.push("Expires=" + cookie.expires.toGMTString());
            }
            if (cookie.maxage) {
              var maxage = cookie.maxage;
              if (typeof maxage === "string") {
                maxage = parseInt(maxage, 10);
              }
              if (isNaN(maxage) || maxage <= 0) {
                this.reject(500);
                throw new Error(
                  'Value supplied for cookie "maxage" must be a non-zero number'
                );
              }
              maxage = Math.round(maxage);
              cookieParts.push("Max-Age=" + maxage.toString(10));
            }
            if (cookie.secure) {
              if (typeof cookie.secure !== "boolean") {
                this.reject(500);
                throw new Error(
                  'Value supplied for cookie "secure" must be of type boolean'
                );
              }
              cookieParts.push("Secure");
            }
            if (cookie.httponly) {
              if (typeof cookie.httponly !== "boolean") {
                this.reject(500);
                throw new Error(
                  'Value supplied for cookie "httponly" must be of type boolean'
                );
              }
              cookieParts.push("HttpOnly");
            }
            response += "Set-Cookie: " + cookieParts.join(";") + "\r\n";
          }.bind(this)
        );
      }
      this._resolved = true;
      this.emit("requestResolved", this);
      response += "\r\n";
      var connection = new WebSocketConnection(
        this.socket,
        [],
        acceptedProtocol,
        false,
        this.serverConfig
      );
      connection.webSocketVersion = this.webSocketVersion;
      connection.remoteAddress = this.remoteAddress;
      connection.remoteAddresses = this.remoteAddresses;
      var self2 = this;
      if (this._socketIsClosing) {
        cleanupFailedConnection(connection);
      } else {
        this.socket.write(response, "ascii", function (error) {
          if (error) {
            cleanupFailedConnection(connection);
            return;
          }
          self2._removeSocketCloseListeners();
          connection._addSocketEventListeners();
        });
      }
      this.emit("requestAccepted", connection);
      return connection;
    };
    WebSocketRequest.prototype.reject = function (
      status,
      reason,
      extraHeaders
    ) {
      this._verifyResolution();
      this._resolved = true;
      this.emit("requestResolved", this);
      if (typeof status !== "number") {
        status = 403;
      }
      var response =
        "HTTP/1.1 " +
        status +
        " " +
        httpStatusDescriptions[status] +
        "\r\nConnection: close\r\n";
      if (reason) {
        reason = reason.replace(headerSanitizeRegExp, "");
        response += "X-WebSocket-Reject-Reason: " + reason + "\r\n";
      }
      if (extraHeaders) {
        for (var key in extraHeaders) {
          var sanitizedValue = extraHeaders[key]
            .toString()
            .replace(headerSanitizeRegExp, "");
          var sanitizedKey = key.replace(headerSanitizeRegExp, "");
          response += sanitizedKey + ": " + sanitizedValue + "\r\n";
        }
      }
      response += "\r\n";
      this.socket.end(response, "ascii");
      this.emit("requestRejected", this);
    };
    WebSocketRequest.prototype._handleSocketCloseBeforeAccept = function () {
      this._socketIsClosing = true;
      this._removeSocketCloseListeners();
    };
    WebSocketRequest.prototype._removeSocketCloseListeners = function () {
      this.socket.removeListener("end", this._socketCloseHandler);
      this.socket.removeListener("close", this._socketCloseHandler);
    };
    WebSocketRequest.prototype._verifyResolution = function () {
      if (this._resolved) {
        throw new Error(
          "WebSocketRequest may only be accepted or rejected one time."
        );
      }
    };
    function cleanupFailedConnection(connection) {
      process.nextTick(function () {
        connection.drop(
          1006,
          "TCP connection lost before handshake completed.",
          true
        );
      });
    }
    module2.exports = WebSocketRequest;
  },
});

// node_modules/websocket/lib/WebSocketServer.js
var require_WebSocketServer = __commonJS({
  "node_modules/websocket/lib/WebSocketServer.js"(exports2, module2) {
    var extend = require_utils2().extend;
    var utils = require_utils2();
    var util = require("util");
    var debug = require_src()("websocket:server");
    var EventEmitter = require("events").EventEmitter;
    var WebSocketRequest = require_WebSocketRequest();
    var WebSocketServer = function WebSocketServer2(config) {
      EventEmitter.call(this);
      this._handlers = {
        upgrade: this.handleUpgrade.bind(this),
        requestAccepted: this.handleRequestAccepted.bind(this),
        requestResolved: this.handleRequestResolved.bind(this),
      };
      this.connections = [];
      this.pendingRequests = [];
      if (config) {
        this.mount(config);
      }
    };
    util.inherits(WebSocketServer, EventEmitter);
    WebSocketServer.prototype.mount = function (config) {
      this.config = {
        httpServer: null,
        maxReceivedFrameSize: 65536,
        maxReceivedMessageSize: 1048576,
        fragmentOutgoingMessages: true,
        fragmentationThreshold: 16384,
        keepalive: true,
        keepaliveInterval: 2e4,
        dropConnectionOnKeepaliveTimeout: true,
        keepaliveGracePeriod: 1e4,
        useNativeKeepalive: false,
        assembleFragments: true,
        autoAcceptConnections: false,
        ignoreXForwardedFor: false,
        parseCookies: true,
        parseExtensions: true,
        disableNagleAlgorithm: true,
        closeTimeout: 5e3,
      };
      extend(this.config, config);
      if (this.config.httpServer) {
        if (!Array.isArray(this.config.httpServer)) {
          this.config.httpServer = [this.config.httpServer];
        }
        var upgradeHandler = this._handlers.upgrade;
        this.config.httpServer.forEach(function (httpServer) {
          httpServer.on("upgrade", upgradeHandler);
        });
      } else {
        throw new Error(
          "You must specify an httpServer on which to mount the WebSocket server."
        );
      }
    };
    WebSocketServer.prototype.unmount = function () {
      var upgradeHandler = this._handlers.upgrade;
      this.config.httpServer.forEach(function (httpServer) {
        httpServer.removeListener("upgrade", upgradeHandler);
      });
    };
    WebSocketServer.prototype.closeAllConnections = function () {
      this.connections.forEach(function (connection) {
        connection.close();
      });
      this.pendingRequests.forEach(function (request) {
        process.nextTick(function () {
          request.reject(503);
        });
      });
    };
    WebSocketServer.prototype.broadcast = function (data) {
      if (Buffer.isBuffer(data)) {
        this.broadcastBytes(data);
      } else if (typeof data.toString === "function") {
        this.broadcastUTF(data);
      }
    };
    WebSocketServer.prototype.broadcastUTF = function (utfData) {
      this.connections.forEach(function (connection) {
        connection.sendUTF(utfData);
      });
    };
    WebSocketServer.prototype.broadcastBytes = function (binaryData) {
      this.connections.forEach(function (connection) {
        connection.sendBytes(binaryData);
      });
    };
    WebSocketServer.prototype.shutDown = function () {
      this.unmount();
      this.closeAllConnections();
    };
    WebSocketServer.prototype.handleUpgrade = function (request, socket) {
      var self2 = this;
      var wsRequest = new WebSocketRequest(socket, request, this.config);
      try {
        wsRequest.readHandshake();
      } catch (e2) {
        wsRequest.reject(
          e2.httpCode ? e2.httpCode : 400,
          e2.message,
          e2.headers
        );
        debug("Invalid handshake: %s", e2.message);
        this.emit("upgradeError", e2);
        return;
      }
      this.pendingRequests.push(wsRequest);
      wsRequest.once("requestAccepted", this._handlers.requestAccepted);
      wsRequest.once("requestResolved", this._handlers.requestResolved);
      socket.once("close", function () {
        self2._handlers.requestResolved(wsRequest);
      });
      if (
        !this.config.autoAcceptConnections &&
        utils.eventEmitterListenerCount(this, "request") > 0
      ) {
        this.emit("request", wsRequest);
      } else if (this.config.autoAcceptConnections) {
        wsRequest.accept(wsRequest.requestedProtocols[0], wsRequest.origin);
      } else {
        wsRequest.reject(
          404,
          "No handler is configured to accept the connection."
        );
      }
    };
    WebSocketServer.prototype.handleRequestAccepted = function (connection) {
      var self2 = this;
      connection.once("close", function (closeReason, description) {
        self2.handleConnectionClose(connection, closeReason, description);
      });
      this.connections.push(connection);
      this.emit("connect", connection);
    };
    WebSocketServer.prototype.handleConnectionClose = function (
      connection,
      closeReason,
      description
    ) {
      var index = this.connections.indexOf(connection);
      if (index !== -1) {
        this.connections.splice(index, 1);
      }
      this.emit("close", connection, closeReason, description);
    };
    WebSocketServer.prototype.handleRequestResolved = function (request) {
      var index = this.pendingRequests.indexOf(request);
      if (index !== -1) {
        this.pendingRequests.splice(index, 1);
      }
    };
    module2.exports = WebSocketServer;
  },
});

// node_modules/websocket/lib/WebSocketClient.js
var require_WebSocketClient = __commonJS({
  "node_modules/websocket/lib/WebSocketClient.js"(exports2, module2) {
    var utils = require_utils2();
    var extend = utils.extend;
    var util = require("util");
    var EventEmitter = require("events").EventEmitter;
    var http3 = require("http");
    var https2 = require("https");
    var url = require("url");
    var crypto = require("crypto");
    var WebSocketConnection = require_WebSocketConnection();
    var bufferAllocUnsafe = utils.bufferAllocUnsafe;
    var protocolSeparators = [
      "(",
      ")",
      "<",
      ">",
      "@",
      ",",
      ";",
      ":",
      "\\",
      '"',
      "/",
      "[",
      "]",
      "?",
      "=",
      "{",
      "}",
      " ",
      String.fromCharCode(9),
    ];
    var excludedTlsOptions = ["hostname", "port", "method", "path", "headers"];
    function WebSocketClient(config) {
      EventEmitter.call(this);
      this.config = {
        maxReceivedFrameSize: 1048576,
        maxReceivedMessageSize: 8388608,
        fragmentOutgoingMessages: true,
        fragmentationThreshold: 16384,
        webSocketVersion: 13,
        assembleFragments: true,
        disableNagleAlgorithm: true,
        closeTimeout: 5e3,
        tlsOptions: {},
      };
      if (config) {
        var tlsOptions;
        if (config.tlsOptions) {
          tlsOptions = config.tlsOptions;
          delete config.tlsOptions;
        } else {
          tlsOptions = {};
        }
        extend(this.config, config);
        extend(this.config.tlsOptions, tlsOptions);
      }
      this._req = null;
      switch (this.config.webSocketVersion) {
        case 8:
        case 13:
          break;
        default:
          throw new Error(
            "Requested webSocketVersion is not supported. Allowed values are 8 and 13."
          );
      }
    }
    util.inherits(WebSocketClient, EventEmitter);
    WebSocketClient.prototype.connect = function (
      requestUrl,
      protocols,
      origin,
      headers,
      extraRequestOptions
    ) {
      var self2 = this;
      if (typeof protocols === "string") {
        if (protocols.length > 0) {
          protocols = [protocols];
        } else {
          protocols = [];
        }
      }
      if (!(protocols instanceof Array)) {
        protocols = [];
      }
      this.protocols = protocols;
      this.origin = origin;
      if (typeof requestUrl === "string") {
        this.url = url.parse(requestUrl);
      } else {
        this.url = requestUrl;
      }
      if (!this.url.protocol) {
        throw new Error(
          "You must specify a full WebSocket URL, including protocol."
        );
      }
      if (!this.url.host) {
        throw new Error(
          "You must specify a full WebSocket URL, including hostname. Relative URLs are not supported."
        );
      }
      this.secure = this.url.protocol === "wss:";
      this.protocols.forEach(function (protocol) {
        for (var i3 = 0; i3 < protocol.length; i3++) {
          var charCode = protocol.charCodeAt(i3);
          var character = protocol.charAt(i3);
          if (
            charCode < 33 ||
            charCode > 126 ||
            protocolSeparators.indexOf(character) !== -1
          ) {
            throw new Error(
              'Protocol list contains invalid character "' +
                String.fromCharCode(charCode) +
                '"'
            );
          }
        }
      });
      var defaultPorts = {
        "ws:": "80",
        "wss:": "443",
      };
      if (!this.url.port) {
        this.url.port = defaultPorts[this.url.protocol];
      }
      var nonce = bufferAllocUnsafe(16);
      for (var i2 = 0; i2 < 16; i2++) {
        nonce[i2] = Math.round(Math.random() * 255);
      }
      this.base64nonce = nonce.toString("base64");
      var hostHeaderValue = this.url.hostname;
      if (
        (this.url.protocol === "ws:" && this.url.port !== "80") ||
        (this.url.protocol === "wss:" && this.url.port !== "443")
      ) {
        hostHeaderValue += ":" + this.url.port;
      }
      var reqHeaders = {};
      if (this.secure && this.config.tlsOptions.hasOwnProperty("headers")) {
        extend(reqHeaders, this.config.tlsOptions.headers);
      }
      if (headers) {
        extend(reqHeaders, headers);
      }
      extend(reqHeaders, {
        Upgrade: "websocket",
        Connection: "Upgrade",
        "Sec-WebSocket-Version": this.config.webSocketVersion.toString(10),
        "Sec-WebSocket-Key": this.base64nonce,
        Host: reqHeaders.Host || hostHeaderValue,
      });
      if (this.protocols.length > 0) {
        reqHeaders["Sec-WebSocket-Protocol"] = this.protocols.join(", ");
      }
      if (this.origin) {
        if (this.config.webSocketVersion === 13) {
          reqHeaders["Origin"] = this.origin;
        } else if (this.config.webSocketVersion === 8) {
          reqHeaders["Sec-WebSocket-Origin"] = this.origin;
        }
      }
      var pathAndQuery;
      if (this.url.pathname) {
        pathAndQuery = this.url.path;
      } else if (this.url.path) {
        pathAndQuery = "/" + this.url.path;
      } else {
        pathAndQuery = "/";
      }
      function handleRequestError(error) {
        self2._req = null;
        self2.emit("connectFailed", error);
      }
      var requestOptions = {
        agent: false,
      };
      if (extraRequestOptions) {
        extend(requestOptions, extraRequestOptions);
      }
      extend(requestOptions, {
        hostname: this.url.hostname,
        port: this.url.port,
        method: "GET",
        path: pathAndQuery,
        headers: reqHeaders,
      });
      if (this.secure) {
        var tlsOptions = this.config.tlsOptions;
        for (var key in tlsOptions) {
          if (
            tlsOptions.hasOwnProperty(key) &&
            excludedTlsOptions.indexOf(key) === -1
          ) {
            requestOptions[key] = tlsOptions[key];
          }
        }
      }
      var req = (this._req = (this.secure ? https2 : http3).request(
        requestOptions
      ));
      req.on("upgrade", function handleRequestUpgrade(response, socket, head) {
        self2._req = null;
        req.removeListener("error", handleRequestError);
        self2.socket = socket;
        self2.response = response;
        self2.firstDataChunk = head;
        self2.validateHandshake();
      });
      req.on("error", handleRequestError);
      req.on("response", function (response) {
        self2._req = null;
        if (utils.eventEmitterListenerCount(self2, "httpResponse") > 0) {
          self2.emit("httpResponse", response, self2);
          if (response.socket) {
            response.socket.end();
          }
        } else {
          var headerDumpParts = [];
          for (var headerName in response.headers) {
            headerDumpParts.push(
              headerName + ": " + response.headers[headerName]
            );
          }
          self2.failHandshake(
            "Server responded with a non-101 status: " +
              response.statusCode +
              " " +
              response.statusMessage +
              "\nResponse Headers Follow:\n" +
              headerDumpParts.join("\n") +
              "\n"
          );
        }
      });
      req.end();
    };
    WebSocketClient.prototype.validateHandshake = function () {
      var headers = this.response.headers;
      if (this.protocols.length > 0) {
        this.protocol = headers["sec-websocket-protocol"];
        if (this.protocol) {
          if (this.protocols.indexOf(this.protocol) === -1) {
            this.failHandshake(
              "Server did not respond with a requested protocol."
            );
            return;
          }
        } else {
          this.failHandshake("Expected a Sec-WebSocket-Protocol header.");
          return;
        }
      }
      if (
        !(
          headers["connection"] &&
          headers["connection"].toLocaleLowerCase() === "upgrade"
        )
      ) {
        this.failHandshake(
          "Expected a Connection: Upgrade header from the server"
        );
        return;
      }
      if (
        !(
          headers["upgrade"] &&
          headers["upgrade"].toLocaleLowerCase() === "websocket"
        )
      ) {
        this.failHandshake(
          "Expected an Upgrade: websocket header from the server"
        );
        return;
      }
      var sha1 = crypto.createHash("sha1");
      sha1.update(this.base64nonce + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
      var expectedKey = sha1.digest("base64");
      if (!headers["sec-websocket-accept"]) {
        this.failHandshake("Expected Sec-WebSocket-Accept header from server");
        return;
      }
      if (headers["sec-websocket-accept"] !== expectedKey) {
        this.failHandshake(
          "Sec-WebSocket-Accept header from server didn't match expected value of " +
            expectedKey
        );
        return;
      }
      this.succeedHandshake();
    };
    WebSocketClient.prototype.failHandshake = function (errorDescription) {
      if (this.socket && this.socket.writable) {
        this.socket.end();
      }
      this.emit("connectFailed", new Error(errorDescription));
    };
    WebSocketClient.prototype.succeedHandshake = function () {
      var connection = new WebSocketConnection(
        this.socket,
        [],
        this.protocol,
        true,
        this.config
      );
      connection.webSocketVersion = this.config.webSocketVersion;
      connection._addSocketEventListeners();
      this.emit("connect", connection);
      if (this.firstDataChunk.length > 0) {
        connection.handleSocketData(this.firstDataChunk);
      }
      this.firstDataChunk = null;
    };
    WebSocketClient.prototype.abort = function () {
      if (this._req) {
        this._req.abort();
      }
    };
    module2.exports = WebSocketClient;
  },
});

// node_modules/websocket/lib/WebSocketRouterRequest.js
var require_WebSocketRouterRequest = __commonJS({
  "node_modules/websocket/lib/WebSocketRouterRequest.js"(exports2, module2) {
    var util = require("util");
    var EventEmitter = require("events").EventEmitter;
    function WebSocketRouterRequest(webSocketRequest, resolvedProtocol) {
      EventEmitter.call(this);
      this.webSocketRequest = webSocketRequest;
      if (resolvedProtocol === "____no_protocol____") {
        this.protocol = null;
      } else {
        this.protocol = resolvedProtocol;
      }
      this.origin = webSocketRequest.origin;
      this.resource = webSocketRequest.resource;
      this.resourceURL = webSocketRequest.resourceURL;
      this.httpRequest = webSocketRequest.httpRequest;
      this.remoteAddress = webSocketRequest.remoteAddress;
      this.webSocketVersion = webSocketRequest.webSocketVersion;
      this.requestedExtensions = webSocketRequest.requestedExtensions;
      this.cookies = webSocketRequest.cookies;
    }
    util.inherits(WebSocketRouterRequest, EventEmitter);
    WebSocketRouterRequest.prototype.accept = function (origin, cookies) {
      var connection = this.webSocketRequest.accept(
        this.protocol,
        origin,
        cookies
      );
      this.emit("requestAccepted", connection);
      return connection;
    };
    WebSocketRouterRequest.prototype.reject = function (
      status,
      reason,
      extraHeaders
    ) {
      this.webSocketRequest.reject(status, reason, extraHeaders);
      this.emit("requestRejected", this);
    };
    module2.exports = WebSocketRouterRequest;
  },
});

// node_modules/websocket/lib/WebSocketRouter.js
var require_WebSocketRouter = __commonJS({
  "node_modules/websocket/lib/WebSocketRouter.js"(exports2, module2) {
    var extend = require_utils2().extend;
    var util = require("util");
    var EventEmitter = require("events").EventEmitter;
    var WebSocketRouterRequest = require_WebSocketRouterRequest();
    function WebSocketRouter(config) {
      EventEmitter.call(this);
      this.config = {
        server: null,
      };
      if (config) {
        extend(this.config, config);
      }
      this.handlers = [];
      this._requestHandler = this.handleRequest.bind(this);
      if (this.config.server) {
        this.attachServer(this.config.server);
      }
    }
    util.inherits(WebSocketRouter, EventEmitter);
    WebSocketRouter.prototype.attachServer = function (server) {
      if (server) {
        this.server = server;
        this.server.on("request", this._requestHandler);
      } else {
        throw new Error(
          "You must specify a WebSocketServer instance to attach to."
        );
      }
    };
    WebSocketRouter.prototype.detachServer = function () {
      if (this.server) {
        this.server.removeListener("request", this._requestHandler);
        this.server = null;
      } else {
        throw new Error("Cannot detach from server: not attached.");
      }
    };
    WebSocketRouter.prototype.mount = function (path, protocol, callback) {
      if (!path) {
        throw new Error("You must specify a path for this handler.");
      }
      if (!protocol) {
        protocol = "____no_protocol____";
      }
      if (!callback) {
        throw new Error("You must specify a callback for this handler.");
      }
      path = this.pathToRegExp(path);
      if (!(path instanceof RegExp)) {
        throw new Error(
          "Path must be specified as either a string or a RegExp."
        );
      }
      var pathString = path.toString();
      protocol = protocol.toLocaleLowerCase();
      if (this.findHandlerIndex(pathString, protocol) !== -1) {
        throw new Error(
          "You may only mount one handler per path/protocol combination."
        );
      }
      this.handlers.push({
        path: path,
        pathString: pathString,
        protocol: protocol,
        callback: callback,
      });
    };
    WebSocketRouter.prototype.unmount = function (path, protocol) {
      var index = this.findHandlerIndex(
        this.pathToRegExp(path).toString(),
        protocol
      );
      if (index !== -1) {
        this.handlers.splice(index, 1);
      } else {
        throw new Error(
          "Unable to find a route matching the specified path and protocol."
        );
      }
    };
    WebSocketRouter.prototype.findHandlerIndex = function (
      pathString,
      protocol
    ) {
      protocol = protocol.toLocaleLowerCase();
      for (var i2 = 0, len = this.handlers.length; i2 < len; i2++) {
        var handler = this.handlers[i2];
        if (
          handler.pathString === pathString &&
          handler.protocol === protocol
        ) {
          return i2;
        }
      }
      return -1;
    };
    WebSocketRouter.prototype.pathToRegExp = function (path) {
      if (typeof path === "string") {
        if (path === "*") {
          path = /^.*$/;
        } else {
          path = path.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
          path = new RegExp("^" + path + "$");
        }
      }
      return path;
    };
    WebSocketRouter.prototype.handleRequest = function (request) {
      var requestedProtocols = request.requestedProtocols;
      if (requestedProtocols.length === 0) {
        requestedProtocols = ["____no_protocol____"];
      }
      for (var i2 = 0; i2 < requestedProtocols.length; i2++) {
        var requestedProtocol = requestedProtocols[i2].toLocaleLowerCase();
        for (var j = 0, len = this.handlers.length; j < len; j++) {
          var handler = this.handlers[j];
          if (handler.path.test(request.resourceURL.pathname)) {
            if (
              requestedProtocol === handler.protocol ||
              handler.protocol === "*"
            ) {
              var routerRequest = new WebSocketRouterRequest(
                request,
                requestedProtocol
              );
              handler.callback(routerRequest);
              return;
            }
          }
        }
      }
      request.reject(404, "No handler is available for the given request.");
    };
    module2.exports = WebSocketRouter;
  },
});

// node_modules/is-typedarray/index.js
var require_is_typedarray = __commonJS({
  "node_modules/is-typedarray/index.js"(exports2, module2) {
    module2.exports = isTypedArray;
    isTypedArray.strict = isStrictTypedArray;
    isTypedArray.loose = isLooseTypedArray;
    var toString = Object.prototype.toString;
    var names = {
      "[object Int8Array]": true,
      "[object Int16Array]": true,
      "[object Int32Array]": true,
      "[object Uint8Array]": true,
      "[object Uint8ClampedArray]": true,
      "[object Uint16Array]": true,
      "[object Uint32Array]": true,
      "[object Float32Array]": true,
      "[object Float64Array]": true,
    };
    function isTypedArray(arr) {
      return isStrictTypedArray(arr) || isLooseTypedArray(arr);
    }
    function isStrictTypedArray(arr) {
      return (
        arr instanceof Int8Array ||
        arr instanceof Int16Array ||
        arr instanceof Int32Array ||
        arr instanceof Uint8Array ||
        arr instanceof Uint8ClampedArray ||
        arr instanceof Uint16Array ||
        arr instanceof Uint32Array ||
        arr instanceof Float32Array ||
        arr instanceof Float64Array
      );
    }
    function isLooseTypedArray(arr) {
      return names[toString.call(arr)];
    }
  },
});

// node_modules/typedarray-to-buffer/index.js
var require_typedarray_to_buffer = __commonJS({
  "node_modules/typedarray-to-buffer/index.js"(exports2, module2) {
    var isTypedArray = require_is_typedarray().strict;
    module2.exports = function typedarrayToBuffer(arr) {
      if (isTypedArray(arr)) {
        var buf = Buffer.from(arr.buffer);
        if (arr.byteLength !== arr.buffer.byteLength) {
          buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
        }
        return buf;
      } else {
        return Buffer.from(arr);
      }
    };
  },
});

// node_modules/yaeti/lib/EventTarget.js
var require_EventTarget = __commonJS({
  "node_modules/yaeti/lib/EventTarget.js"(exports2, module2) {
    module2.exports = _EventTarget;
    function _EventTarget() {
      if (typeof this.addEventListener === "function") {
        return;
      }
      this._listeners = {};
      this.addEventListener = _addEventListener;
      this.removeEventListener = _removeEventListener;
      this.dispatchEvent = _dispatchEvent;
    }
    Object.defineProperties(_EventTarget.prototype, {
      listeners: {
        get: function () {
          return this._listeners;
        },
      },
    });
    function _addEventListener(type, newListener) {
      var listenersType, i2, listener;
      if (!type || !newListener) {
        return;
      }
      listenersType = this._listeners[type];
      if (listenersType === void 0) {
        this._listeners[type] = listenersType = [];
      }
      for (i2 = 0; !!(listener = listenersType[i2]); i2++) {
        if (listener === newListener) {
          return;
        }
      }
      listenersType.push(newListener);
    }
    function _removeEventListener(type, oldListener) {
      var listenersType, i2, listener;
      if (!type || !oldListener) {
        return;
      }
      listenersType = this._listeners[type];
      if (listenersType === void 0) {
        return;
      }
      for (i2 = 0; !!(listener = listenersType[i2]); i2++) {
        if (listener === oldListener) {
          listenersType.splice(i2, 1);
          break;
        }
      }
      if (listenersType.length === 0) {
        delete this._listeners[type];
      }
    }
    function _dispatchEvent(event) {
      var type,
        listenersType,
        dummyListener,
        stopImmediatePropagation = false,
        i2,
        listener;
      if (!event || typeof event.type !== "string") {
        throw new Error("`event` must have a valid `type` property");
      }
      if (event._yaeti) {
        event.target = this;
        event.cancelable = true;
      }
      try {
        event.stopImmediatePropagation = function () {
          stopImmediatePropagation = true;
        };
      } catch (error) {}
      type = event.type;
      listenersType = this._listeners[type] || [];
      dummyListener = this["on" + type];
      if (typeof dummyListener === "function") {
        dummyListener.call(this, event);
      }
      for (i2 = 0; !!(listener = listenersType[i2]); i2++) {
        if (stopImmediatePropagation) {
          break;
        }
        listener.call(this, event);
      }
      return !event.defaultPrevented;
    }
  },
});

// node_modules/yaeti/lib/Event.js
var require_Event = __commonJS({
  "node_modules/yaeti/lib/Event.js"(exports2, module2) {
    module2.exports = _Event;
    function _Event(type) {
      this.type = type;
      this.isTrusted = false;
      this._yaeti = true;
    }
  },
});

// node_modules/yaeti/index.js
var require_yaeti = __commonJS({
  "node_modules/yaeti/index.js"(exports2, module2) {
    module2.exports = {
      EventTarget: require_EventTarget(),
      Event: require_Event(),
    };
  },
});

// node_modules/websocket/lib/W3CWebSocket.js
var require_W3CWebSocket = __commonJS({
  "node_modules/websocket/lib/W3CWebSocket.js"(exports2, module2) {
    var WebSocketClient = require_WebSocketClient();
    var toBuffer = require_typedarray_to_buffer();
    var yaeti = require_yaeti();
    var CONNECTING = 0;
    var OPEN = 1;
    var CLOSING = 2;
    var CLOSED = 3;
    module2.exports = W3CWebSocket;
    function W3CWebSocket(
      url,
      protocols,
      origin,
      headers,
      requestOptions,
      clientConfig
    ) {
      yaeti.EventTarget.call(this);
      clientConfig = clientConfig || {};
      clientConfig.assembleFragments = true;
      var self2 = this;
      this._url = url;
      this._readyState = CONNECTING;
      this._protocol = void 0;
      this._extensions = "";
      this._bufferedAmount = 0;
      this._binaryType = "arraybuffer";
      this._connection = void 0;
      this._client = new WebSocketClient(clientConfig);
      this._client.on("connect", function (connection) {
        onConnect.call(self2, connection);
      });
      this._client.on("connectFailed", function () {
        onConnectFailed.call(self2);
      });
      this._client.connect(url, protocols, origin, headers, requestOptions);
    }
    Object.defineProperties(W3CWebSocket.prototype, {
      url: {
        get: function () {
          return this._url;
        },
      },
      readyState: {
        get: function () {
          return this._readyState;
        },
      },
      protocol: {
        get: function () {
          return this._protocol;
        },
      },
      extensions: {
        get: function () {
          return this._extensions;
        },
      },
      bufferedAmount: {
        get: function () {
          return this._bufferedAmount;
        },
      },
    });
    Object.defineProperties(W3CWebSocket.prototype, {
      binaryType: {
        get: function () {
          return this._binaryType;
        },
        set: function (type) {
          if (type !== "arraybuffer") {
            throw new SyntaxError(
              'just "arraybuffer" type allowed for "binaryType" attribute'
            );
          }
          this._binaryType = type;
        },
      },
    });
    [
      ["CONNECTING", CONNECTING],
      ["OPEN", OPEN],
      ["CLOSING", CLOSING],
      ["CLOSED", CLOSED],
    ].forEach(function (property) {
      Object.defineProperty(W3CWebSocket.prototype, property[0], {
        get: function () {
          return property[1];
        },
      });
    });
    [
      ["CONNECTING", CONNECTING],
      ["OPEN", OPEN],
      ["CLOSING", CLOSING],
      ["CLOSED", CLOSED],
    ].forEach(function (property) {
      Object.defineProperty(W3CWebSocket, property[0], {
        get: function () {
          return property[1];
        },
      });
    });
    W3CWebSocket.prototype.send = function (data) {
      if (this._readyState !== OPEN) {
        throw new Error("cannot call send() while not connected");
      }
      if (typeof data === "string" || data instanceof String) {
        this._connection.sendUTF(data);
      } else {
        if (data instanceof Buffer) {
          this._connection.sendBytes(data);
        } else if (data.byteLength || data.byteLength === 0) {
          data = toBuffer(data);
          this._connection.sendBytes(data);
        } else {
          throw new Error("unknown binary data:", data);
        }
      }
    };
    W3CWebSocket.prototype.close = function (code, reason) {
      switch (this._readyState) {
        case CONNECTING:
          onConnectFailed.call(this);
          this._client.on("connect", function (connection) {
            if (code) {
              connection.close(code, reason);
            } else {
              connection.close();
            }
          });
          break;
        case OPEN:
          this._readyState = CLOSING;
          if (code) {
            this._connection.close(code, reason);
          } else {
            this._connection.close();
          }
          break;
        case CLOSING:
        case CLOSED:
          break;
      }
    };
    function createCloseEvent(code, reason) {
      var event = new yaeti.Event("close");
      event.code = code;
      event.reason = reason;
      event.wasClean = typeof code === "undefined" || code === 1e3;
      return event;
    }
    function createMessageEvent(data) {
      var event = new yaeti.Event("message");
      event.data = data;
      return event;
    }
    function onConnect(connection) {
      var self2 = this;
      this._readyState = OPEN;
      this._connection = connection;
      this._protocol = connection.protocol;
      this._extensions = connection.extensions;
      this._connection.on("close", function (code, reason) {
        onClose.call(self2, code, reason);
      });
      this._connection.on("message", function (msg) {
        onMessage.call(self2, msg);
      });
      this.dispatchEvent(new yaeti.Event("open"));
    }
    function onConnectFailed() {
      destroy.call(this);
      this._readyState = CLOSED;
      try {
        this.dispatchEvent(new yaeti.Event("error"));
      } finally {
        this.dispatchEvent(createCloseEvent(1006, "connection failed"));
      }
    }
    function onClose(code, reason) {
      destroy.call(this);
      this._readyState = CLOSED;
      this.dispatchEvent(createCloseEvent(code, reason || ""));
    }
    function onMessage(message) {
      if (message.utf8Data) {
        this.dispatchEvent(createMessageEvent(message.utf8Data));
      } else if (message.binaryData) {
        if (this.binaryType === "arraybuffer") {
          var buffer = message.binaryData;
          var arraybuffer = new ArrayBuffer(buffer.length);
          var view = new Uint8Array(arraybuffer);
          for (var i2 = 0, len = buffer.length; i2 < len; ++i2) {
            view[i2] = buffer[i2];
          }
          this.dispatchEvent(createMessageEvent(arraybuffer));
        }
      }
    }
    function destroy() {
      this._client.removeAllListeners();
      if (this._connection) {
        this._connection.removeAllListeners();
      }
    }
  },
});

// node_modules/websocket/lib/Deprecation.js
var require_Deprecation = __commonJS({
  "node_modules/websocket/lib/Deprecation.js"(exports2, module2) {
    var Deprecation = {
      disableWarnings: false,
      deprecationWarningMap: {},
      warn: function (deprecationName) {
        if (
          !this.disableWarnings &&
          this.deprecationWarningMap[deprecationName]
        ) {
          console.warn(
            "DEPRECATION WARNING: " +
              this.deprecationWarningMap[deprecationName]
          );
          this.deprecationWarningMap[deprecationName] = false;
        }
      },
    };
    module2.exports = Deprecation;
  },
});

// node_modules/websocket/package.json
var require_package = __commonJS({
  "node_modules/websocket/package.json"(exports2, module2) {
    module2.exports = {
      name: "websocket",
      description:
        "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
      keywords: [
        "websocket",
        "websockets",
        "socket",
        "networking",
        "comet",
        "push",
        "RFC-6455",
        "realtime",
        "server",
        "client",
      ],
      author:
        "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
      contributors: [
        "I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)",
      ],
      version: "1.0.34",
      repository: {
        type: "git",
        url: "https://github.com/theturtle32/WebSocket-Node.git",
      },
      homepage: "https://github.com/theturtle32/WebSocket-Node",
      engines: {
        node: ">=4.0.0",
      },
      dependencies: {
        bufferutil: "^4.0.1",
        debug: "^2.2.0",
        "es5-ext": "^0.10.50",
        "typedarray-to-buffer": "^3.1.5",
        "utf-8-validate": "^5.0.2",
        yaeti: "^0.0.6",
      },
      devDependencies: {
        "buffer-equal": "^1.0.0",
        gulp: "^4.0.2",
        "gulp-jshint": "^2.0.4",
        "jshint-stylish": "^2.2.1",
        jshint: "^2.0.0",
        tape: "^4.9.1",
      },
      config: {
        verbose: false,
      },
      scripts: {
        test: "tape test/unit/*.js",
        gulp: "gulp",
      },
      main: "index",
      directories: {
        lib: "./lib",
      },
      browser: "lib/browser.js",
      license: "Apache-2.0",
    };
  },
});

// node_modules/websocket/lib/version.js
var require_version4 = __commonJS({
  "node_modules/websocket/lib/version.js"(exports2, module2) {
    module2.exports = require_package().version;
  },
});

// node_modules/websocket/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/websocket/lib/websocket.js"(exports2, module2) {
    module2.exports = {
      server: require_WebSocketServer(),
      client: require_WebSocketClient(),
      router: require_WebSocketRouter(),
      frame: require_WebSocketFrame(),
      request: require_WebSocketRequest(),
      connection: require_WebSocketConnection(),
      w3cwebsocket: require_W3CWebSocket(),
      deprecation: require_Deprecation(),
      version: require_version4(),
    };
  },
});

// node_modules/websocket/index.js
var require_websocket2 = __commonJS({
  "node_modules/websocket/index.js"(exports2, module2) {
    module2.exports = require_websocket();
  },
});

// node_modules/@supabase/realtime-js/dist/main/lib/version.js
var require_version5 = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.version = void 0;
    exports2.version = "1.7.2";
  },
});

// node_modules/@supabase/realtime-js/dist/main/lib/constants.js
var require_constants4 = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CONNECTION_STATE =
      exports2.TRANSPORTS =
      exports2.CHANNEL_EVENTS =
      exports2.CHANNEL_STATES =
      exports2.SOCKET_STATES =
      exports2.WS_CLOSE_NORMAL =
      exports2.DEFAULT_TIMEOUT =
      exports2.VSN =
      exports2.DEFAULT_HEADERS =
        void 0;
    var version_1 = require_version5();
    exports2.DEFAULT_HEADERS = {
      "X-Client-Info": `realtime-js/${version_1.version}`,
    };
    exports2.VSN = "1.0.0";
    exports2.DEFAULT_TIMEOUT = 1e4;
    exports2.WS_CLOSE_NORMAL = 1e3;
    var SOCKET_STATES;
    (function (SOCKET_STATES2) {
      SOCKET_STATES2[(SOCKET_STATES2["connecting"] = 0)] = "connecting";
      SOCKET_STATES2[(SOCKET_STATES2["open"] = 1)] = "open";
      SOCKET_STATES2[(SOCKET_STATES2["closing"] = 2)] = "closing";
      SOCKET_STATES2[(SOCKET_STATES2["closed"] = 3)] = "closed";
    })(
      (SOCKET_STATES = exports2.SOCKET_STATES || (exports2.SOCKET_STATES = {}))
    );
    var CHANNEL_STATES;
    (function (CHANNEL_STATES2) {
      CHANNEL_STATES2["closed"] = "closed";
      CHANNEL_STATES2["errored"] = "errored";
      CHANNEL_STATES2["joined"] = "joined";
      CHANNEL_STATES2["joining"] = "joining";
      CHANNEL_STATES2["leaving"] = "leaving";
    })(
      (CHANNEL_STATES =
        exports2.CHANNEL_STATES || (exports2.CHANNEL_STATES = {}))
    );
    var CHANNEL_EVENTS;
    (function (CHANNEL_EVENTS2) {
      CHANNEL_EVENTS2["close"] = "phx_close";
      CHANNEL_EVENTS2["error"] = "phx_error";
      CHANNEL_EVENTS2["join"] = "phx_join";
      CHANNEL_EVENTS2["reply"] = "phx_reply";
      CHANNEL_EVENTS2["leave"] = "phx_leave";
      CHANNEL_EVENTS2["access_token"] = "access_token";
    })(
      (CHANNEL_EVENTS =
        exports2.CHANNEL_EVENTS || (exports2.CHANNEL_EVENTS = {}))
    );
    var TRANSPORTS;
    (function (TRANSPORTS2) {
      TRANSPORTS2["websocket"] = "websocket";
    })((TRANSPORTS = exports2.TRANSPORTS || (exports2.TRANSPORTS = {})));
    var CONNECTION_STATE;
    (function (CONNECTION_STATE2) {
      CONNECTION_STATE2["Connecting"] = "connecting";
      CONNECTION_STATE2["Open"] = "open";
      CONNECTION_STATE2["Closing"] = "closing";
      CONNECTION_STATE2["Closed"] = "closed";
    })(
      (CONNECTION_STATE =
        exports2.CONNECTION_STATE || (exports2.CONNECTION_STATE = {}))
    );
  },
});

// node_modules/@supabase/realtime-js/dist/main/lib/timer.js
var require_timer = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/timer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Timer = class {
      constructor(callback, timerCalc) {
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = void 0;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
      }
      reset() {
        this.tries = 0;
        clearTimeout(this.timer);
      }
      scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.tries = this.tries + 1;
          this.callback();
        }, this.timerCalc(this.tries + 1));
      }
    };
    exports2.default = Timer;
  },
});

// node_modules/@supabase/realtime-js/dist/main/lib/serializer.js
var require_serializer = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/serializer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Serializer = class {
      constructor() {
        this.HEADER_LENGTH = 1;
      }
      decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) {
          return callback(this._binaryDecode(rawPayload));
        }
        if (typeof rawPayload === "string") {
          return callback(JSON.parse(rawPayload));
        }
        return callback({});
      }
      _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
      }
      _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(
          decoder.decode(buffer.slice(offset, buffer.byteLength))
        );
        return { ref: null, topic, event, payload: data };
      }
    };
    exports2.default = Serializer;
  },
});

// node_modules/@supabase/realtime-js/dist/main/lib/push.js
var require_push = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/push.js"(exports2) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var constants_1 = require_constants4();
    var RealtimeSubscription_1 = __importDefault(
      require_RealtimeSubscription()
    );
    var Push = class {
      constructor(
        channel,
        event,
        payload = {},
        timeout = constants_1.DEFAULT_TIMEOUT
      ) {
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = void 0;
        this.ref = "";
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
      }
      resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = "";
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
      }
      send() {
        if (this._hasReceived("timeout")) {
          return;
        }
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload,
          ref: this.ref,
        });
      }
      updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
      }
      receive(status, callback) {
        var _a4;
        if (this._hasReceived(status)) {
          callback(
            (_a4 = this.receivedResp) === null || _a4 === void 0
              ? void 0
              : _a4.response
          );
        }
        this.recHooks.push({ status, callback });
        return this;
      }
      startTimeout() {
        if (this.timeoutTimer) {
          return;
        }
        this.ref = this.channel.socket.makeRef();
        this.refEvent = this.channel.replyEventName(this.ref);
        const callback = (payload) => {
          this._cancelRefEvent();
          this._cancelTimeout();
          this.receivedResp = payload;
          this._matchReceive(payload);
        };
        if (this.channel instanceof RealtimeSubscription_1.default) {
          this.channel.on(this.refEvent, callback);
        } else {
          this.channel.on(this.refEvent, {}, callback);
        }
        this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout);
      }
      trigger(status, response) {
        if (this.refEvent)
          this.channel.trigger(this.refEvent, { status, response });
      }
      destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
      }
      _cancelRefEvent() {
        if (!this.refEvent) {
          return;
        }
        if (this.channel instanceof RealtimeSubscription_1.default) {
          this.channel.off(this.refEvent);
        } else {
          this.channel.off(this.refEvent, {});
        }
      }
      _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = void 0;
      }
      _matchReceive({ status, response }) {
        this.recHooks
          .filter((h2) => h2.status === status)
          .forEach((h2) => h2.callback(response));
      }
      _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
      }
    };
    exports2.default = Push;
  },
});

// node_modules/@supabase/realtime-js/dist/main/RealtimeSubscription.js
var require_RealtimeSubscription = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/RealtimeSubscription.js"(
    exports2
  ) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var constants_1 = require_constants4();
    var push_1 = __importDefault(require_push());
    var timer_1 = __importDefault(require_timer());
    var RealtimeSubscription = class {
      constructor(topic, params = {}, socket) {
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = [];
        this.state = constants_1.CHANNEL_STATES.closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.timeout = this.socket.timeout;
        this.joinPush = new push_1.default(
          this,
          constants_1.CHANNEL_EVENTS.join,
          this.params,
          this.timeout
        );
        this.rejoinTimer = new timer_1.default(
          () => this.rejoinUntilConnected(),
          this.socket.reconnectAfterMs
        );
        this.joinPush.receive("ok", () => {
          this.state = constants_1.CHANNEL_STATES.joined;
          this.rejoinTimer.reset();
          this.pushBuffer.forEach((pushEvent) => pushEvent.send());
          this.pushBuffer = [];
        });
        this.onClose(() => {
          this.rejoinTimer.reset();
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
          this.state = constants_1.CHANNEL_STATES.closed;
          this.socket.remove(this);
        });
        this.onError((reason) => {
          if (this.isLeaving() || this.isClosed()) {
            return;
          }
          this.socket.log("channel", `error ${this.topic}`, reason);
          this.state = constants_1.CHANNEL_STATES.errored;
          this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", () => {
          if (!this.isJoining()) {
            return;
          }
          this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          );
          this.state = constants_1.CHANNEL_STATES.errored;
          this.rejoinTimer.scheduleTimeout();
        });
        this.on(constants_1.CHANNEL_EVENTS.reply, (payload, ref) => {
          this.trigger(this.replyEventName(ref), payload);
        });
      }
      rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }
      subscribe(timeout = this.timeout) {
        if (this.joinedOnce) {
          throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        } else {
          this.joinedOnce = true;
          this.rejoin(timeout);
          return this.joinPush;
        }
      }
      onClose(callback) {
        this.on(constants_1.CHANNEL_EVENTS.close, callback);
      }
      onError(callback) {
        this.on(constants_1.CHANNEL_EVENTS.error, (reason) => callback(reason));
      }
      on(event, callback) {
        this.bindings.push({ event, callback });
      }
      off(event) {
        this.bindings = this.bindings.filter((bind) => bind.event !== event);
      }
      canPush() {
        return this.socket.isConnected() && this.isJoined();
      }
      push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
          throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new push_1.default(this, event, payload, timeout);
        if (this.canPush()) {
          pushEvent.send();
        } else {
          pushEvent.startTimeout();
          this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
      }
      updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
      }
      unsubscribe(timeout = this.timeout) {
        this.state = constants_1.CHANNEL_STATES.leaving;
        let onClose = () => {
          this.socket.log("channel", `leave ${this.topic}`);
          this.trigger(
            constants_1.CHANNEL_EVENTS.close,
            "leave",
            this.joinRef()
          );
        };
        this.joinPush.destroy();
        let leavePush = new push_1.default(
          this,
          constants_1.CHANNEL_EVENTS.leave,
          {},
          timeout
        );
        leavePush
          .receive("ok", () => onClose())
          .receive("timeout", () => onClose());
        leavePush.send();
        if (!this.canPush()) {
          leavePush.trigger("ok", {});
        }
        return leavePush;
      }
      onMessage(event, payload, ref) {
        return payload;
      }
      isMember(topic) {
        return this.topic === topic;
      }
      joinRef() {
        return this.joinPush.ref;
      }
      rejoin(timeout = this.timeout) {
        if (this.isLeaving()) {
          return;
        }
        this.socket.leaveOpenTopic(this.topic);
        this.state = constants_1.CHANNEL_STATES.joining;
        this.joinPush.resend(timeout);
      }
      trigger(event, payload, ref) {
        let { close, error, leave, join } = constants_1.CHANNEL_EVENTS;
        let events = [close, error, leave, join];
        if (ref && events.indexOf(event) >= 0 && ref !== this.joinRef()) {
          return;
        }
        let handledPayload = this.onMessage(event, payload, ref);
        if (payload && !handledPayload) {
          throw "channel onMessage callbacks must return the payload, modified or unmodified";
        }
        this.bindings
          .filter((bind) => {
            if (bind.event === "*") {
              return (
                event ===
                (payload === null || payload === void 0 ? void 0 : payload.type)
              );
            } else {
              return bind.event === event;
            }
          })
          .map((bind) => bind.callback(handledPayload, ref));
      }
      replyEventName(ref) {
        return `chan_reply_${ref}`;
      }
      isClosed() {
        return this.state === constants_1.CHANNEL_STATES.closed;
      }
      isErrored() {
        return this.state === constants_1.CHANNEL_STATES.errored;
      }
      isJoined() {
        return this.state === constants_1.CHANNEL_STATES.joined;
      }
      isJoining() {
        return this.state === constants_1.CHANNEL_STATES.joining;
      }
      isLeaving() {
        return this.state === constants_1.CHANNEL_STATES.leaving;
      }
    };
    exports2.default = RealtimeSubscription;
  },
});

// node_modules/@supabase/realtime-js/dist/main/RealtimePresence.js
var require_RealtimePresence = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/RealtimePresence.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var RealtimePresence = class {
      constructor(channel, opts) {
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.caller = {
          onJoin: () => {},
          onLeave: () => {},
          onSync: () => {},
        };
        const events = (opts === null || opts === void 0
          ? void 0
          : opts.events) || {
          state: "presence_state",
          diff: "presence_diff",
        };
        this.channel.on(events.state, {}, (newState) => {
          const { onJoin, onLeave, onSync } = this.caller;
          this.joinRef = this.channel.joinRef();
          this.state = RealtimePresence.syncState(
            this.state,
            newState,
            onJoin,
            onLeave
          );
          this.pendingDiffs.forEach((diff) => {
            this.state = RealtimePresence.syncDiff(
              this.state,
              diff,
              onJoin,
              onLeave
            );
          });
          this.pendingDiffs = [];
          onSync();
        });
        this.channel.on(events.diff, {}, (diff) => {
          const { onJoin, onLeave, onSync } = this.caller;
          if (this.inPendingSyncState()) {
            this.pendingDiffs.push(diff);
          } else {
            this.state = RealtimePresence.syncDiff(
              this.state,
              diff,
              onJoin,
              onLeave
            );
            onSync();
          }
        });
      }
      static syncState(currentState, newState, onJoin, onLeave) {
        const state = this.cloneDeep(currentState);
        const transformedState = this.transformState(newState);
        const joins = {};
        const leaves = {};
        this.map(state, (key, presences) => {
          if (!transformedState[key]) {
            leaves[key] = presences;
          }
        });
        this.map(transformedState, (key, newPresences) => {
          const currentPresences = state[key];
          if (currentPresences) {
            const newPresenceIds = newPresences.map((m2) => m2.presence_id);
            const curPresenceIds = currentPresences.map((m2) => m2.presence_id);
            const joinedPresences = newPresences.filter(
              (m2) => curPresenceIds.indexOf(m2.presence_id) < 0
            );
            const leftPresences = currentPresences.filter(
              (m2) => newPresenceIds.indexOf(m2.presence_id) < 0
            );
            if (joinedPresences.length > 0) {
              joins[key] = joinedPresences;
            }
            if (leftPresences.length > 0) {
              leaves[key] = leftPresences;
            }
          } else {
            joins[key] = newPresences;
          }
        });
        return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
      }
      static syncDiff(state, diff, onJoin, onLeave) {
        const { joins, leaves } = {
          joins: this.transformState(diff.joins),
          leaves: this.transformState(diff.leaves),
        };
        if (!onJoin) {
          onJoin = () => {};
        }
        if (!onLeave) {
          onLeave = () => {};
        }
        this.map(joins, (key, newPresences) => {
          const currentPresences = state[key];
          state[key] = this.cloneDeep(newPresences);
          if (currentPresences) {
            const joinedPresenceIds = state[key].map((m2) => m2.presence_id);
            const curPresences = currentPresences.filter(
              (m2) => joinedPresenceIds.indexOf(m2.presence_id) < 0
            );
            state[key].unshift(...curPresences);
          }
          onJoin(key, currentPresences, newPresences);
        });
        this.map(leaves, (key, leftPresences) => {
          let currentPresences = state[key];
          if (!currentPresences) return;
          const presenceIdsToRemove = leftPresences.map((m2) => m2.presence_id);
          currentPresences = currentPresences.filter(
            (m2) => presenceIdsToRemove.indexOf(m2.presence_id) < 0
          );
          state[key] = currentPresences;
          onLeave(key, currentPresences, leftPresences);
          if (currentPresences.length === 0) delete state[key];
        });
        return state;
      }
      static list(presences, chooser) {
        if (!chooser) {
          chooser = (_key, pres) => pres;
        }
        return this.map(presences, (key, presences2) =>
          chooser(key, presences2)
        );
      }
      static map(obj, func) {
        return Object.getOwnPropertyNames(obj).map((key) =>
          func(key, obj[key])
        );
      }
      static transformState(state) {
        state = this.cloneDeep(state);
        return Object.getOwnPropertyNames(state).reduce((newState, key) => {
          const presences = state[key];
          if ("metas" in presences) {
            newState[key] = presences.metas.map((presence) => {
              presence["presence_id"] = presence["phx_ref"];
              delete presence["phx_ref"];
              delete presence["phx_ref_prev"];
              return presence;
            });
          } else {
            newState[key] = presences;
          }
          return newState;
        }, {});
      }
      static cloneDeep(obj) {
        return JSON.parse(JSON.stringify(obj));
      }
      onJoin(callback) {
        this.caller.onJoin = callback;
      }
      onLeave(callback) {
        this.caller.onLeave = callback;
      }
      onSync(callback) {
        this.caller.onSync = callback;
      }
      list(by) {
        return RealtimePresence.list(this.state, by);
      }
      inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel.joinRef();
      }
    };
    exports2.default = RealtimePresence;
  },
});

// node_modules/@supabase/realtime-js/dist/main/RealtimeChannel.js
var require_RealtimeChannel = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/RealtimeChannel.js"(exports2) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var constants_1 = require_constants4();
    var push_1 = __importDefault(require_push());
    var timer_1 = __importDefault(require_timer());
    var RealtimePresence_1 = __importDefault(require_RealtimePresence());
    var RealtimeChannel = class {
      constructor(topic, params = {}, socket) {
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = [];
        this.state = constants_1.CHANNEL_STATES.closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.timeout = this.socket.timeout;
        this.joinPush = new push_1.default(
          this,
          constants_1.CHANNEL_EVENTS.join,
          this.params,
          this.timeout
        );
        this.rejoinTimer = new timer_1.default(
          () => this.rejoinUntilConnected(),
          this.socket.reconnectAfterMs
        );
        this.joinPush.receive("ok", () => {
          this.state = constants_1.CHANNEL_STATES.joined;
          this.rejoinTimer.reset();
          this.pushBuffer.forEach((pushEvent) => pushEvent.send());
          this.pushBuffer = [];
        });
        this.onClose(() => {
          this.rejoinTimer.reset();
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
          this.state = constants_1.CHANNEL_STATES.closed;
          this.socket.remove(this);
        });
        this.onError((reason) => {
          if (this.isLeaving() || this.isClosed()) {
            return;
          }
          this.socket.log("channel", `error ${this.topic}`, reason);
          this.state = constants_1.CHANNEL_STATES.errored;
          this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", () => {
          if (!this.isJoining()) {
            return;
          }
          this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          );
          this.state = constants_1.CHANNEL_STATES.errored;
          this.rejoinTimer.scheduleTimeout();
        });
        this.on(constants_1.CHANNEL_EVENTS.reply, {}, (payload, ref) => {
          this.trigger(this.replyEventName(ref), payload);
        });
        this.presence = new RealtimePresence_1.default(this);
      }
      list() {
        return this.presence.list();
      }
      rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }
      subscribe(timeout = this.timeout) {
        if (this.joinedOnce) {
          throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        } else {
          const configs = this.bindings.reduce((acc, binding) => {
            const { type } = binding;
            if (
              ![
                "phx_close",
                "phx_error",
                "phx_reply",
                "presence_diff",
                "presence_state",
              ].includes(type)
            ) {
              acc[type] = binding;
            }
            return acc;
          }, {});
          if (Object.keys(configs).length) {
            this.updateJoinPayload({ configs });
          }
          this.joinedOnce = true;
          this.rejoin(timeout);
          return this.joinPush;
        }
      }
      onClose(callback) {
        this.on(constants_1.CHANNEL_EVENTS.close, {}, callback);
      }
      onError(callback) {
        this.on(constants_1.CHANNEL_EVENTS.error, {}, (reason) =>
          callback(reason)
        );
      }
      on(type, filter, callback) {
        this.bindings.push({
          type,
          filter: filter !== null && filter !== void 0 ? filter : {},
          callback:
            callback !== null && callback !== void 0 ? callback : () => {},
        });
      }
      off(type, filter) {
        this.bindings = this.bindings.filter((bind) => {
          return !(
            bind.type === type && RealtimeChannel.isEqual(bind.filter, filter)
          );
        });
      }
      canPush() {
        return this.socket.isConnected() && this.isJoined();
      }
      push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
          throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new push_1.default(this, event, payload, timeout);
        if (this.canPush()) {
          pushEvent.send();
        } else {
          pushEvent.startTimeout();
          this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
      }
      updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
      }
      unsubscribe(timeout = this.timeout) {
        this.state = constants_1.CHANNEL_STATES.leaving;
        const onClose = () => {
          this.socket.log("channel", `leave ${this.topic}`);
          this.trigger(
            constants_1.CHANNEL_EVENTS.close,
            "leave",
            this.joinRef()
          );
        };
        this.joinPush.destroy();
        const leavePush = new push_1.default(
          this,
          constants_1.CHANNEL_EVENTS.leave,
          {},
          timeout
        );
        leavePush
          .receive("ok", () => onClose())
          .receive("timeout", () => onClose());
        leavePush.send();
        if (!this.canPush()) {
          leavePush.trigger("ok", {});
        }
        return leavePush;
      }
      onMessage(event, payload, ref) {
        return payload;
      }
      isMember(topic) {
        return this.topic === topic;
      }
      joinRef() {
        return this.joinPush.ref;
      }
      rejoin(timeout = this.timeout) {
        if (this.isLeaving()) {
          return;
        }
        this.socket.leaveOpenTopic(this.topic);
        this.state = constants_1.CHANNEL_STATES.joining;
        this.joinPush.resend(timeout);
      }
      trigger(type, payload, ref) {
        const { close, error, leave, join } = constants_1.CHANNEL_EVENTS;
        const events = [close, error, leave, join];
        if (ref && events.indexOf(type) >= 0 && ref !== this.joinRef()) {
          return;
        }
        const handledPayload = this.onMessage(type, payload, ref);
        if (payload && !handledPayload) {
          throw "channel onMessage callbacks must return the payload, modified or unmodified";
        }
        this.bindings
          .filter((bind) => {
            var _a4, _b;
            return (
              (bind === null || bind === void 0 ? void 0 : bind.type) ===
                type &&
              (((_a4 =
                bind === null || bind === void 0 ? void 0 : bind.filter) ===
                null || _a4 === void 0
                ? void 0
                : _a4.event) === "*" ||
                ((_b =
                  bind === null || bind === void 0 ? void 0 : bind.filter) ===
                  null || _b === void 0
                  ? void 0
                  : _b.event) ===
                  (payload === null || payload === void 0
                    ? void 0
                    : payload.event))
            );
          })
          .map((bind) => bind.callback(handledPayload, ref));
      }
      send(payload) {
        const push = this.push(payload.type, payload);
        return new Promise((resolve, reject) => {
          push.receive("ok", () => resolve("ok"));
          push.receive("timeout", () => reject("timeout"));
        });
      }
      replyEventName(ref) {
        return `chan_reply_${ref}`;
      }
      isClosed() {
        return this.state === constants_1.CHANNEL_STATES.closed;
      }
      isErrored() {
        return this.state === constants_1.CHANNEL_STATES.errored;
      }
      isJoined() {
        return this.state === constants_1.CHANNEL_STATES.joined;
      }
      isJoining() {
        return this.state === constants_1.CHANNEL_STATES.joining;
      }
      isLeaving() {
        return this.state === constants_1.CHANNEL_STATES.leaving;
      }
      static isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
          return false;
        }
        for (const k in obj1) {
          if (obj1[k] !== obj2[k]) {
            return false;
          }
        }
        return true;
      }
    };
    exports2.default = RealtimeChannel;
  },
});

// node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
var require_RealtimeClient = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    var __rest =
      (exports2 && exports2.__rest) ||
      function (s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (
            var i2 = 0, p = Object.getOwnPropertySymbols(s2);
            i2 < p.length;
            i2++
          ) {
            if (
              e2.indexOf(p[i2]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s2, p[i2])
            )
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var websocket_1 = require_websocket2();
    var constants_1 = require_constants4();
    var timer_1 = __importDefault(require_timer());
    var serializer_1 = __importDefault(require_serializer());
    var RealtimeSubscription_1 = __importDefault(
      require_RealtimeSubscription()
    );
    var RealtimeChannel_1 = __importDefault(require_RealtimeChannel());
    var noop2 = () => {};
    var RealtimeClient = class {
      constructor(endPoint, options) {
        this.accessToken = null;
        this.channels = [];
        this.endPoint = "";
        this.headers = constants_1.DEFAULT_HEADERS;
        this.params = {};
        this.timeout = constants_1.DEFAULT_TIMEOUT;
        this.transport = websocket_1.w3cwebsocket;
        this.heartbeatIntervalMs = 3e4;
        this.longpollerTimeout = 2e4;
        this.heartbeatTimer = void 0;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop2;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new serializer_1.default();
        this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: [],
        };
        this.endPoint = `${endPoint}/${constants_1.TRANSPORTS.websocket}`;
        if (options === null || options === void 0 ? void 0 : options.params)
          this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers)
          this.headers = Object.assign(
            Object.assign({}, this.headers),
            options.headers
          );
        if (options === null || options === void 0 ? void 0 : options.timeout)
          this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger)
          this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.transport)
          this.transport = options.transport;
        if (
          options === null || options === void 0
            ? void 0
            : options.heartbeatIntervalMs
        )
          this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        if (
          options === null || options === void 0
            ? void 0
            : options.longpollerTimeout
        )
          this.longpollerTimeout = options.longpollerTimeout;
        this.reconnectAfterMs = (
          options === null || options === void 0
            ? void 0
            : options.reconnectAfterMs
        )
          ? options.reconnectAfterMs
          : (tries) => {
              return [1e3, 2e3, 5e3, 1e4][tries - 1] || 1e4;
            };
        this.encode = (
          options === null || options === void 0 ? void 0 : options.encode
        )
          ? options.encode
          : (payload, callback) => {
              return callback(JSON.stringify(payload));
            };
        this.decode = (
          options === null || options === void 0 ? void 0 : options.decode
        )
          ? options.decode
          : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new timer_1.default(
          () =>
            __awaiter(this, void 0, void 0, function* () {
              yield this.disconnect();
              this.connect();
            }),
          this.reconnectAfterMs
        );
      }
      connect() {
        if (this.conn) {
          return;
        }
        this.conn = new this.transport(
          this.endPointURL(),
          [],
          null,
          this.headers
        );
        if (this.conn) {
          this.conn.binaryType = "arraybuffer";
          this.conn.onopen = () => this._onConnOpen();
          this.conn.onerror = (error) => this._onConnError(error);
          this.conn.onmessage = (event) => this.onConnMessage(event);
          this.conn.onclose = (event) => this._onConnClose(event);
        }
      }
      disconnect(code, reason) {
        return new Promise((resolve, _reject) => {
          try {
            if (this.conn) {
              this.conn.onclose = function () {};
              if (code) {
                this.conn.close(code, reason || "");
              } else {
                this.conn.close();
              }
              this.conn = null;
              this.heartbeatTimer && clearInterval(this.heartbeatTimer);
              this.reconnectTimer.reset();
            }
            resolve({ error: null, data: true });
          } catch (error) {
            resolve({ error, data: false });
          }
        });
      }
      log(kind, msg, data) {
        this.logger(kind, msg, data);
      }
      onOpen(callback) {
        this.stateChangeCallbacks.open.push(callback);
      }
      onClose(callback) {
        this.stateChangeCallbacks.close.push(callback);
      }
      onError(callback) {
        this.stateChangeCallbacks.error.push(callback);
      }
      onMessage(callback) {
        this.stateChangeCallbacks.message.push(callback);
      }
      connectionState() {
        switch (this.conn && this.conn.readyState) {
          case constants_1.SOCKET_STATES.connecting:
            return constants_1.CONNECTION_STATE.Connecting;
          case constants_1.SOCKET_STATES.open:
            return constants_1.CONNECTION_STATE.Open;
          case constants_1.SOCKET_STATES.closing:
            return constants_1.CONNECTION_STATE.Closing;
          default:
            return constants_1.CONNECTION_STATE.Closed;
        }
      }
      isConnected() {
        return this.connectionState() === constants_1.CONNECTION_STATE.Open;
      }
      remove(channel) {
        this.channels = this.channels.filter(
          (c) => c.joinRef() !== channel.joinRef()
        );
      }
      channel(topic, chanParams = {}) {
        var _a4;
        const { selfBroadcast } = chanParams,
          params = __rest(chanParams, ["selfBroadcast"]);
        if (selfBroadcast) {
          params.self_broadcast = selfBroadcast;
        }
        const chan = (
          (_a4 = this.params) === null || _a4 === void 0 ? void 0 : _a4.vsndate
        )
          ? new RealtimeChannel_1.default(topic, params, this)
          : new RealtimeSubscription_1.default(topic, params, this);
        if (chan instanceof RealtimeChannel_1.default) {
          chan.presence.onJoin((key, currentPresences, newPresences) => {
            chan.trigger("presence", {
              event: "JOIN",
              key,
              currentPresences,
              newPresences,
            });
          });
          chan.presence.onLeave((key, currentPresences, leftPresences) => {
            chan.trigger("presence", {
              event: "LEAVE",
              key,
              currentPresences,
              leftPresences,
            });
          });
          chan.presence.onSync(() => {
            chan.trigger("presence", { event: "SYNC" });
          });
        }
        this.channels.push(chan);
        return chan;
      }
      push(data) {
        const { topic, event, payload, ref } = data;
        let callback = () => {
          this.encode(data, (result) => {
            var _a4;
            (_a4 = this.conn) === null || _a4 === void 0
              ? void 0
              : _a4.send(result);
          });
        };
        this.log("push", `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) {
          callback();
        } else {
          this.sendBuffer.push(callback);
        }
      }
      onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg) => {
          let { topic, event, payload, ref } = msg;
          if (
            (ref && ref === this.pendingHeartbeatRef) ||
            event ===
              (payload === null || payload === void 0 ? void 0 : payload.type)
          ) {
            this.pendingHeartbeatRef = null;
          }
          this.log(
            "receive",
            `${payload.status || ""} ${topic} ${event} ${
              (ref && "(" + ref + ")") || ""
            }`,
            payload
          );
          this.channels
            .filter((channel) => channel.isMember(topic))
            .forEach((channel) => channel.trigger(event, payload, ref));
          this.stateChangeCallbacks.message.forEach((callback) =>
            callback(msg)
          );
        });
      }
      endPointURL() {
        return this._appendParams(
          this.endPoint,
          Object.assign({}, this.params, { vsn: constants_1.VSN })
        );
      }
      makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) {
          this.ref = 0;
        } else {
          this.ref = newRef;
        }
        return this.ref.toString();
      }
      setAuth(token) {
        this.accessToken = token;
        this.channels.forEach((channel) => {
          token && channel.updateJoinPayload({ user_token: token });
          if (channel.joinedOnce && channel.isJoined()) {
            channel.push(constants_1.CHANNEL_EVENTS.access_token, {
              access_token: token,
            });
          }
        });
      }
      leaveOpenTopic(topic) {
        let dupChannel = this.channels.find(
          (c) => c.topic === topic && (c.isJoined() || c.isJoining())
        );
        if (dupChannel) {
          this.log("transport", `leaving duplicate topic "${topic}"`);
          dupChannel.unsubscribe();
        }
      }
      _onConnOpen() {
        this.log("transport", `connected to ${this.endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(
          () => this._sendHeartbeat(),
          this.heartbeatIntervalMs
        );
        this.stateChangeCallbacks.open.forEach((callback) => callback());
      }
      _onConnClose(event) {
        this.log("transport", "close", event);
        this._triggerChanError();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback) => callback(event));
      }
      _onConnError(error) {
        this.log("transport", error.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback) => callback(error));
      }
      _triggerChanError() {
        this.channels.forEach((channel) =>
          channel.trigger(constants_1.CHANNEL_EVENTS.error)
        );
      }
      _appendParams(url, params) {
        if (Object.keys(params).length === 0) {
          return url;
        }
        const prefix = url.match(/\?/) ? "&" : "?";
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
      }
      _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
          this.sendBuffer.forEach((callback) => callback());
          this.sendBuffer = [];
        }
      }
      _sendHeartbeat() {
        var _a4;
        if (!this.isConnected()) {
          return;
        }
        if (this.pendingHeartbeatRef) {
          this.pendingHeartbeatRef = null;
          this.log(
            "transport",
            "heartbeat timeout. Attempting to re-establish connection"
          );
          (_a4 = this.conn) === null || _a4 === void 0
            ? void 0
            : _a4.close(constants_1.WS_CLOSE_NORMAL, "hearbeat timeout");
          return;
        }
        this.pendingHeartbeatRef = this.makeRef();
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        });
        this.setAuth(this.accessToken);
      }
    };
    exports2.default = RealtimeClient;
  },
});

// node_modules/@supabase/realtime-js/dist/main/index.js
var require_main3 = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/index.js"(exports2) {
    "use strict";
    var __createBinding =
      (exports2 && exports2.__createBinding) ||
      (Object.create
        ? function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m2[k];
              },
            });
          }
        : function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m2[k];
          });
    var __setModuleDefault =
      (exports2 && exports2.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, "default", { enumerable: true, value: v });
          }
        : function (o, v) {
            o["default"] = v;
          });
    var __importStar =
      (exports2 && exports2.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Transformers =
      exports2.RealtimePresence =
      exports2.RealtimeChannel =
      exports2.RealtimeSubscription =
      exports2.RealtimeClient =
        void 0;
    var Transformers = __importStar(require_transformers());
    exports2.Transformers = Transformers;
    var RealtimeClient_1 = __importDefault(require_RealtimeClient());
    exports2.RealtimeClient = RealtimeClient_1.default;
    var RealtimeSubscription_1 = __importDefault(
      require_RealtimeSubscription()
    );
    exports2.RealtimeSubscription = RealtimeSubscription_1.default;
    var RealtimeChannel_1 = __importDefault(require_RealtimeChannel());
    exports2.RealtimeChannel = RealtimeChannel_1.default;
    var RealtimePresence_1 = __importDefault(require_RealtimePresence());
    exports2.RealtimePresence = RealtimePresence_1.default;
  },
});

// node_modules/@supabase/supabase-js/dist/main/lib/SupabaseRealtimeClient.js
var require_SupabaseRealtimeClient = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/SupabaseRealtimeClient.js"(
    exports2
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SupabaseRealtimeClient = void 0;
    var realtime_js_1 = require_main3();
    var SupabaseRealtimeClient = class {
      constructor(socket, headers, schema, tableName) {
        const chanParams = {};
        const topic =
          tableName === "*"
            ? `realtime:${schema}`
            : `realtime:${schema}:${tableName}`;
        const userToken = headers["Authorization"].split(" ")[1];
        if (userToken) {
          chanParams["user_token"] = userToken;
        }
        this.subscription = socket.channel(topic, chanParams);
      }
      getPayloadRecords(payload) {
        const records = {
          new: {},
          old: {},
        };
        if (payload.type === "INSERT" || payload.type === "UPDATE") {
          records.new = realtime_js_1.Transformers.convertChangeData(
            payload.columns,
            payload.record
          );
        }
        if (payload.type === "UPDATE" || payload.type === "DELETE") {
          records.old = realtime_js_1.Transformers.convertChangeData(
            payload.columns,
            payload.old_record
          );
        }
        return records;
      }
      on(event, callback) {
        this.subscription.on(event, (payload) => {
          let enrichedPayload = {
            schema: payload.schema,
            table: payload.table,
            commit_timestamp: payload.commit_timestamp,
            eventType: payload.type,
            new: {},
            old: {},
            errors: payload.errors,
          };
          enrichedPayload = Object.assign(
            Object.assign({}, enrichedPayload),
            this.getPayloadRecords(payload)
          );
          callback(enrichedPayload);
        });
        return this;
      }
      subscribe(callback = () => {}) {
        this.subscription.onError((e2) => callback("SUBSCRIPTION_ERROR", e2));
        this.subscription.onClose(() => callback("CLOSED"));
        this.subscription
          .subscribe()
          .receive("ok", () => callback("SUBSCRIBED"))
          .receive("error", (e2) => callback("SUBSCRIPTION_ERROR", e2))
          .receive("timeout", () => callback("RETRYING_AFTER_TIMEOUT"));
        return this.subscription;
      }
    };
    exports2.SupabaseRealtimeClient = SupabaseRealtimeClient;
  },
});

// node_modules/@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder.js
var require_SupabaseQueryBuilder = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder.js"(
    exports2
  ) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SupabaseQueryBuilder = void 0;
    var postgrest_js_1 = require_main2();
    var SupabaseRealtimeClient_1 = require_SupabaseRealtimeClient();
    var SupabaseQueryBuilder = class extends postgrest_js_1.PostgrestQueryBuilder {
      constructor(
        url,
        {
          headers = {},
          schema,
          realtime,
          table,
          fetch: fetch3,
          shouldThrowOnError,
        }
      ) {
        super(url, { headers, schema, fetch: fetch3, shouldThrowOnError });
        this._subscription = null;
        this._realtime = realtime;
        this._headers = headers;
        this._schema = schema;
        this._table = table;
      }
      on(event, callback) {
        if (!this._realtime.isConnected()) {
          this._realtime.connect();
        }
        if (!this._subscription) {
          this._subscription =
            new SupabaseRealtimeClient_1.SupabaseRealtimeClient(
              this._realtime,
              this._headers,
              this._schema,
              this._table
            );
        }
        return this._subscription.on(event, callback);
      }
    };
    exports2.SupabaseQueryBuilder = SupabaseQueryBuilder;
  },
});

// node_modules/@supabase/storage-js/dist/main/lib/version.js
var require_version6 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.version = void 0;
    exports2.version = "0.0.0";
  },
});

// node_modules/@supabase/storage-js/dist/main/lib/constants.js
var require_constants5 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_HEADERS = void 0;
    var version_1 = require_version6();
    exports2.DEFAULT_HEADERS = {
      "X-Client-Info": `storage-js/${version_1.version}`,
    };
  },
});

// node_modules/@supabase/storage-js/dist/main/lib/fetch.js
var require_fetch2 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/fetch.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.remove = exports2.put = exports2.post = exports2.get = void 0;
    var _getErrorMessage = (err) =>
      err.msg ||
      err.message ||
      err.error_description ||
      err.error ||
      JSON.stringify(err);
    var handleError = (error, reject) => {
      if (typeof error.json !== "function") {
        return reject(error);
      }
      error.json().then((err) => {
        return reject({
          message: _getErrorMessage(err),
          status:
            (error === null || error === void 0 ? void 0 : error.status) || 500,
        });
      });
    };
    var _getRequestParams = (method, options, parameters, body) => {
      const params = {
        method,
        headers:
          (options === null || options === void 0 ? void 0 : options.headers) ||
          {},
      };
      if (method === "GET") {
        return params;
      }
      params.headers = Object.assign(
        { "Content-Type": "application/json" },
        options === null || options === void 0 ? void 0 : options.headers
      );
      params.body = JSON.stringify(body);
      return Object.assign(Object.assign({}, params), parameters);
    };
    function _handleRequest(fetcher, method, url, options, parameters, body) {
      return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          fetcher(url, _getRequestParams(method, options, parameters, body))
            .then((result) => {
              if (!result.ok) throw result;
              if (
                options === null || options === void 0
                  ? void 0
                  : options.noResolveJson
              )
                return resolve(result);
              return result.json();
            })
            .then((data) => resolve(data))
            .catch((error) => handleError(error, reject));
        });
      });
    }
    function get(fetcher, url, options, parameters) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, "GET", url, options, parameters);
      });
    }
    exports2.get = get;
    function post(fetcher, url, body, options, parameters) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, "POST", url, options, parameters, body);
      });
    }
    exports2.post = post;
    function put(fetcher, url, body, options, parameters) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, "PUT", url, options, parameters, body);
      });
    }
    exports2.put = put;
    function remove(fetcher, url, body, options, parameters) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(
          fetcher,
          "DELETE",
          url,
          options,
          parameters,
          body
        );
      });
    }
    exports2.remove = remove;
  },
});

// node_modules/@supabase/storage-js/dist/main/lib/helpers.js
var require_helpers3 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/helpers.js"(exports2) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveFetch = void 0;
    var cross_fetch_1 = __importDefault(require_node_ponyfill());
    exports2.resolveFetch = (customFetch) => {
      let _fetch;
      if (customFetch) {
        _fetch = customFetch;
      } else if (typeof fetch === "undefined") {
        _fetch = cross_fetch_1.default;
      } else {
        _fetch = fetch;
      }
      return (...args) => _fetch(...args);
    };
  },
});

// node_modules/@supabase/storage-js/dist/main/lib/StorageBucketApi.js
var require_StorageBucketApi = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/StorageBucketApi.js"(
    exports2
  ) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StorageBucketApi = void 0;
    var constants_1 = require_constants5();
    var fetch_1 = require_fetch2();
    var helpers_1 = require_helpers3();
    var StorageBucketApi = class {
      constructor(url, headers = {}, fetch3) {
        this.url = url;
        this.headers = Object.assign(
          Object.assign({}, constants_1.DEFAULT_HEADERS),
          headers
        );
        this.fetch = helpers_1.resolveFetch(fetch3);
      }
      listBuckets() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.get(this.fetch, `${this.url}/bucket`, {
              headers: this.headers,
            });
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      getBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.get(
              this.fetch,
              `${this.url}/bucket/${id}`,
              { headers: this.headers }
            );
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      createBucket(id, options = { public: false }) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(
              this.fetch,
              `${this.url}/bucket`,
              { id, name: id, public: options.public },
              { headers: this.headers }
            );
            return { data: data.name, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      updateBucket(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.put(
              this.fetch,
              `${this.url}/bucket/${id}`,
              { id, name: id, public: options.public },
              { headers: this.headers }
            );
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      emptyBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(
              this.fetch,
              `${this.url}/bucket/${id}/empty`,
              {},
              { headers: this.headers }
            );
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      deleteBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.remove(
              this.fetch,
              `${this.url}/bucket/${id}`,
              {},
              { headers: this.headers }
            );
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
    };
    exports2.StorageBucketApi = StorageBucketApi;
  },
});

// node_modules/@supabase/storage-js/dist/main/lib/StorageFileApi.js
var require_StorageFileApi = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/StorageFileApi.js"(
    exports2
  ) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StorageFileApi = void 0;
    var fetch_1 = require_fetch2();
    var helpers_1 = require_helpers3();
    var DEFAULT_SEARCH_OPTIONS = {
      limit: 100,
      offset: 0,
      sortBy: {
        column: "name",
        order: "asc",
      },
    };
    var DEFAULT_FILE_OPTIONS = {
      cacheControl: "3600",
      contentType: "text/plain;charset=UTF-8",
      upsert: false,
    };
    var StorageFileApi = class {
      constructor(url, headers = {}, bucketId, fetch3) {
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = helpers_1.resolveFetch(fetch3);
      }
      uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            let body;
            const options = Object.assign(
              Object.assign({}, DEFAULT_FILE_OPTIONS),
              fileOptions
            );
            const headers = Object.assign(
              Object.assign({}, this.headers),
              method === "POST" && { "x-upsert": String(options.upsert) }
            );
            if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
              body = new FormData();
              body.append("cacheControl", options.cacheControl);
              body.append("", fileBody);
            } else if (
              typeof FormData !== "undefined" &&
              fileBody instanceof FormData
            ) {
              body = fileBody;
              body.append("cacheControl", options.cacheControl);
            } else {
              body = fileBody;
              headers["cache-control"] = `max-age=${options.cacheControl}`;
              headers["content-type"] = options.contentType;
            }
            const cleanPath = this._removeEmptyFolders(path);
            const _path2 = this._getFinalPath(cleanPath);
            const res = yield this.fetch(`${this.url}/object/${_path2}`, {
              method,
              body,
              headers,
            });
            if (res.ok) {
              return { data: { Key: _path2 }, error: null };
            } else {
              const error = yield res.json();
              return { data: null, error };
            }
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      upload(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
        });
      }
      update(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
        });
      }
      move(fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(
              this.fetch,
              `${this.url}/object/move`,
              {
                bucketId: this.bucketId,
                sourceKey: fromPath,
                destinationKey: toPath,
              },
              { headers: this.headers }
            );
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      copy(fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(
              this.fetch,
              `${this.url}/object/copy`,
              {
                bucketId: this.bucketId,
                sourceKey: fromPath,
                destinationKey: toPath,
              },
              { headers: this.headers }
            );
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      createSignedUrl(path, expiresIn) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const _path2 = this._getFinalPath(path);
            let data = yield fetch_1.post(
              this.fetch,
              `${this.url}/object/sign/${_path2}`,
              { expiresIn },
              { headers: this.headers }
            );
            const signedURL = `${this.url}${data.signedURL}`;
            data = { signedURL };
            return { data, error: null, signedURL };
          } catch (error) {
            return { data: null, error, signedURL: null };
          }
        });
      }
      createSignedUrls(paths, expiresIn) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(
              this.fetch,
              `${this.url}/object/sign/${this.bucketId}`,
              { expiresIn, paths },
              { headers: this.headers }
            );
            return {
              data: data.map((datum) =>
                Object.assign(Object.assign({}, datum), {
                  signedURL: datum.signedURL
                    ? `${this.url}${datum.signedURL}`
                    : null,
                })
              ),
              error: null,
            };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      download(path) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const _path2 = this._getFinalPath(path);
            const res = yield fetch_1.get(
              this.fetch,
              `${this.url}/object/${_path2}`,
              {
                headers: this.headers,
                noResolveJson: true,
              }
            );
            const data = yield res.blob();
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      getPublicUrl(path) {
        try {
          const _path2 = this._getFinalPath(path);
          const publicURL = `${this.url}/object/public/${_path2}`;
          const data = { publicURL };
          return { data, error: null, publicURL };
        } catch (error) {
          return { data: null, error, publicURL: null };
        }
      }
      remove(paths) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.remove(
              this.fetch,
              `${this.url}/object/${this.bucketId}`,
              { prefixes: paths },
              { headers: this.headers }
            );
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      list(path, options, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const body = Object.assign(
              Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options),
              { prefix: path || "" }
            );
            const data = yield fetch_1.post(
              this.fetch,
              `${this.url}/object/list/${this.bucketId}`,
              body,
              { headers: this.headers },
              parameters
            );
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
      _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
      }
      _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
      }
    };
    exports2.StorageFileApi = StorageFileApi;
  },
});

// node_modules/@supabase/storage-js/dist/main/lib/types.js
var require_types3 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  },
});

// node_modules/@supabase/storage-js/dist/main/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/index.js"(exports2) {
    "use strict";
    var __createBinding =
      (exports2 && exports2.__createBinding) ||
      (Object.create
        ? function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m2[k];
              },
            });
          }
        : function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m2[k];
          });
    var __exportStar =
      (exports2 && exports2.__exportStar) ||
      function (m2, exports3) {
        for (var p in m2)
          if (
            p !== "default" &&
            !Object.prototype.hasOwnProperty.call(exports3, p)
          )
            __createBinding(exports3, m2, p);
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_StorageBucketApi(), exports2);
    __exportStar(require_StorageFileApi(), exports2);
    __exportStar(require_types3(), exports2);
    __exportStar(require_constants5(), exports2);
  },
});

// node_modules/@supabase/storage-js/dist/main/StorageClient.js
var require_StorageClient = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/StorageClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StorageClient = void 0;
    var lib_1 = require_lib3();
    var StorageClient = class extends lib_1.StorageBucketApi {
      constructor(url, headers = {}, fetch3) {
        super(url, headers, fetch3);
      }
      from(id) {
        return new lib_1.StorageFileApi(this.url, this.headers, id, this.fetch);
      }
    };
    exports2.StorageClient = StorageClient;
  },
});

// node_modules/@supabase/storage-js/dist/main/index.js
var require_main4 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/index.js"(exports2) {
    "use strict";
    var __createBinding =
      (exports2 && exports2.__createBinding) ||
      (Object.create
        ? function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m2[k];
              },
            });
          }
        : function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m2[k];
          });
    var __exportStar =
      (exports2 && exports2.__exportStar) ||
      function (m2, exports3) {
        for (var p in m2)
          if (
            p !== "default" &&
            !Object.prototype.hasOwnProperty.call(exports3, p)
          )
            __createBinding(exports3, m2, p);
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SupabaseStorageClient = exports2.StorageClient = void 0;
    var StorageClient_1 = require_StorageClient();
    Object.defineProperty(exports2, "StorageClient", {
      enumerable: true,
      get: function () {
        return StorageClient_1.StorageClient;
      },
    });
    Object.defineProperty(exports2, "SupabaseStorageClient", {
      enumerable: true,
      get: function () {
        return StorageClient_1.StorageClient;
      },
    });
    __exportStar(require_types3(), exports2);
  },
});

// node_modules/@supabase/functions-js/dist/main/helper.js
var require_helper = __commonJS({
  "node_modules/@supabase/functions-js/dist/main/helper.js"(exports2) {
    "use strict";
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveFetch = void 0;
    var cross_fetch_1 = __importDefault(require_node_ponyfill());
    var resolveFetch = (customFetch) => {
      let _fetch;
      if (customFetch) {
        _fetch = customFetch;
      } else if (typeof fetch === "undefined") {
        _fetch = cross_fetch_1.default;
      } else {
        _fetch = fetch;
      }
      return (...args) => _fetch(...args);
    };
    exports2.resolveFetch = resolveFetch;
  },
});

// node_modules/@supabase/functions-js/dist/main/index.js
var require_main5 = __commonJS({
  "node_modules/@supabase/functions-js/dist/main/index.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionsClient = void 0;
    var helper_1 = require_helper();
    var FunctionsClient = class {
      constructor(url, { headers = {}, customFetch } = {}) {
        this.url = url;
        this.headers = headers;
        this.fetch = (0, helper_1.resolveFetch)(customFetch);
      }
      setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
      }
      invoke(functionName, invokeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const { headers, body } =
              invokeOptions !== null && invokeOptions !== void 0
                ? invokeOptions
                : {};
            const response = yield this.fetch(`${this.url}/${functionName}`, {
              method: "POST",
              headers: Object.assign({}, this.headers, headers),
              body,
            });
            const isRelayError = response.headers.get("x-relay-error");
            if (isRelayError && isRelayError === "true") {
              return { data: null, error: new Error(yield response.text()) };
            }
            let data;
            const { responseType } =
              invokeOptions !== null && invokeOptions !== void 0
                ? invokeOptions
                : {};
            if (!responseType || responseType === "json") {
              data = yield response.json();
            } else if (responseType === "arrayBuffer") {
              data = yield response.arrayBuffer();
            } else if (responseType === "blob") {
              data = yield response.blob();
            } else {
              data = yield response.text();
            }
            return { data, error: null };
          } catch (error) {
            return { data: null, error };
          }
        });
      }
    };
    exports2.FunctionsClient = FunctionsClient;
  },
});

// node_modules/@supabase/supabase-js/dist/main/SupabaseClient.js
var require_SupabaseClient = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/SupabaseClient.js"(exports2) {
    "use strict";
    var __awaiter =
      (exports2 && exports2.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var constants_1 = require_constants();
    var helpers_1 = require_helpers();
    var SupabaseAuthClient_1 = require_SupabaseAuthClient();
    var SupabaseQueryBuilder_1 = require_SupabaseQueryBuilder();
    var storage_js_1 = require_main4();
    var functions_js_1 = require_main5();
    var postgrest_js_1 = require_main2();
    var realtime_js_1 = require_main3();
    var DEFAULT_OPTIONS = {
      schema: "public",
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      multiTab: true,
      headers: constants_1.DEFAULT_HEADERS,
    };
    var SupabaseClient = class {
      constructor(supabaseUrl, supabaseKey, options) {
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl) throw new Error("supabaseUrl is required.");
        if (!supabaseKey) throw new Error("supabaseKey is required.");
        const _supabaseUrl = (0, helpers_1.stripTrailingSlash)(supabaseUrl);
        const settings = Object.assign(
          Object.assign({}, DEFAULT_OPTIONS),
          options
        );
        this.restUrl = `${_supabaseUrl}/rest/v1`;
        this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace("http", "ws");
        this.authUrl = `${_supabaseUrl}/auth/v1`;
        this.storageUrl = `${_supabaseUrl}/storage/v1`;
        const isPlatform = _supabaseUrl.match(/(supabase\.co)|(supabase\.in)/);
        if (isPlatform) {
          const urlParts = _supabaseUrl.split(".");
          this.functionsUrl = `${urlParts[0]}.functions.${urlParts[1]}.${urlParts[2]}`;
        } else {
          this.functionsUrl = `${_supabaseUrl}/functions/v1`;
        }
        this.schema = settings.schema;
        this.multiTab = settings.multiTab;
        this.fetch = settings.fetch;
        this.headers = Object.assign(
          Object.assign({}, constants_1.DEFAULT_HEADERS),
          options === null || options === void 0 ? void 0 : options.headers
        );
        this.shouldThrowOnError = settings.shouldThrowOnError || false;
        this.auth = this._initSupabaseAuthClient(settings);
        this.realtime = this._initRealtimeClient(
          Object.assign({ headers: this.headers }, settings.realtime)
        );
        this._listenForAuthEvents();
        this._listenForMultiTabEvents();
      }
      get functions() {
        return new functions_js_1.FunctionsClient(this.functionsUrl, {
          headers: this._getAuthHeaders(),
          customFetch: this.fetch,
        });
      }
      get storage() {
        return new storage_js_1.SupabaseStorageClient(
          this.storageUrl,
          this._getAuthHeaders(),
          this.fetch
        );
      }
      from(table) {
        const url = `${this.restUrl}/${table}`;
        return new SupabaseQueryBuilder_1.SupabaseQueryBuilder(url, {
          headers: this._getAuthHeaders(),
          schema: this.schema,
          realtime: this.realtime,
          table,
          fetch: this.fetch,
          shouldThrowOnError: this.shouldThrowOnError,
        });
      }
      rpc(fn, params, { head = false, count = null } = {}) {
        const rest = this._initPostgRESTClient();
        return rest.rpc(fn, params, { head, count });
      }
      channel(name, opts) {
        var _a4, _b;
        const userToken =
          (_b =
            (_a4 = this.auth.session()) === null || _a4 === void 0
              ? void 0
              : _a4.access_token) !== null && _b !== void 0
            ? _b
            : this.supabaseKey;
        if (!this.realtime.isConnected()) {
          this.realtime.connect();
        }
        return this.realtime.channel(
          name,
          Object.assign(Object.assign({}, opts), { user_token: userToken })
        );
      }
      removeAllSubscriptions() {
        return __awaiter(this, void 0, void 0, function* () {
          const allSubs = this.getSubscriptions().slice();
          const allSubPromises = allSubs.map((sub) =>
            this.removeSubscription(sub)
          );
          const allRemovedSubs = yield Promise.all(allSubPromises);
          return allRemovedSubs.map(({ error }, i2) => {
            return {
              data: { subscription: allSubs[i2] },
              error,
            };
          });
        });
      }
      removeChannel(channel) {
        return __awaiter(this, void 0, void 0, function* () {
          const { error } = yield this._closeSubscription(channel);
          const allChans = this.getSubscriptions();
          const openChanCount = allChans.filter((chan) =>
            chan.isJoined()
          ).length;
          if (allChans.length === 0) yield this.realtime.disconnect();
          return { data: { openChannels: openChanCount }, error };
        });
      }
      removeSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
          const { error } = yield this._closeSubscription(subscription);
          const allSubs = this.getSubscriptions();
          const openSubCount = allSubs.filter((chan) => chan.isJoined()).length;
          if (allSubs.length === 0) yield this.realtime.disconnect();
          return { data: { openSubscriptions: openSubCount }, error };
        });
      }
      _closeSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
          let error = null;
          if (!subscription.isClosed()) {
            const { error: unsubError } = yield this._unsubscribeSubscription(
              subscription
            );
            error = unsubError;
          }
          this.realtime.remove(subscription);
          return { error };
        });
      }
      _unsubscribeSubscription(subscription) {
        return new Promise((resolve) => {
          subscription
            .unsubscribe()
            .receive("ok", () => resolve({ error: null }))
            .receive("error", (error) => resolve({ error }))
            .receive("timeout", () =>
              resolve({ error: new Error("timed out") })
            );
        });
      }
      getSubscriptions() {
        return this.realtime.channels;
      }
      _initSupabaseAuthClient({
        autoRefreshToken,
        persistSession,
        detectSessionInUrl,
        localStorage,
        headers,
        fetch: fetch3,
        cookieOptions,
        multiTab,
      }) {
        const authHeaders = {
          Authorization: `Bearer ${this.supabaseKey}`,
          apikey: `${this.supabaseKey}`,
        };
        return new SupabaseAuthClient_1.SupabaseAuthClient({
          url: this.authUrl,
          headers: Object.assign(Object.assign({}, headers), authHeaders),
          autoRefreshToken,
          persistSession,
          detectSessionInUrl,
          localStorage,
          fetch: fetch3,
          cookieOptions,
          multiTab,
        });
      }
      _initRealtimeClient(options) {
        return new realtime_js_1.RealtimeClient(
          this.realtimeUrl,
          Object.assign(Object.assign({}, options), {
            params: Object.assign(
              Object.assign(
                {},
                options === null || options === void 0 ? void 0 : options.params
              ),
              { apikey: this.supabaseKey }
            ),
          })
        );
      }
      _initPostgRESTClient() {
        return new postgrest_js_1.PostgrestClient(this.restUrl, {
          headers: this._getAuthHeaders(),
          schema: this.schema,
          fetch: this.fetch,
          throwOnError: this.shouldThrowOnError,
        });
      }
      _getAuthHeaders() {
        var _a4, _b;
        const headers = Object.assign({}, this.headers);
        const authBearer =
          (_b =
            (_a4 = this.auth.session()) === null || _a4 === void 0
              ? void 0
              : _a4.access_token) !== null && _b !== void 0
            ? _b
            : this.supabaseKey;
        headers["apikey"] = this.supabaseKey;
        headers["Authorization"] =
          headers["Authorization"] || `Bearer ${authBearer}`;
        return headers;
      }
      _listenForMultiTabEvents() {
        if (
          !this.multiTab ||
          !(0, helpers_1.isBrowser)() ||
          !(window === null || window === void 0
            ? void 0
            : window.addEventListener)
        ) {
          return null;
        }
        try {
          return window === null || window === void 0
            ? void 0
            : window.addEventListener("storage", (e2) => {
                var _a4, _b, _c;
                if (e2.key === constants_1.STORAGE_KEY) {
                  const newSession = JSON.parse(String(e2.newValue));
                  const accessToken =
                    (_b =
                      (_a4 =
                        newSession === null || newSession === void 0
                          ? void 0
                          : newSession.currentSession) === null ||
                      _a4 === void 0
                        ? void 0
                        : _a4.access_token) !== null && _b !== void 0
                      ? _b
                      : void 0;
                  const previousAccessToken =
                    (_c = this.auth.session()) === null || _c === void 0
                      ? void 0
                      : _c.access_token;
                  if (!accessToken) {
                    this._handleTokenChanged(
                      "SIGNED_OUT",
                      accessToken,
                      "STORAGE"
                    );
                  } else if (!previousAccessToken && accessToken) {
                    this._handleTokenChanged(
                      "SIGNED_IN",
                      accessToken,
                      "STORAGE"
                    );
                  } else if (previousAccessToken !== accessToken) {
                    this._handleTokenChanged(
                      "TOKEN_REFRESHED",
                      accessToken,
                      "STORAGE"
                    );
                  }
                }
              });
        } catch (error) {
          console.error("_listenForMultiTabEvents", error);
          return null;
        }
      }
      _listenForAuthEvents() {
        let { data } = this.auth.onAuthStateChange((event, session) => {
          this._handleTokenChanged(
            event,
            session === null || session === void 0
              ? void 0
              : session.access_token,
            "CLIENT"
          );
        });
        return data;
      }
      _handleTokenChanged(event, token, source) {
        if (
          (event === "TOKEN_REFRESHED" || event === "SIGNED_IN") &&
          this.changedAccessToken !== token
        ) {
          this.realtime.setAuth(token);
          if (source == "STORAGE") this.auth.setAuth(token);
          this.changedAccessToken = token;
        } else if (event === "SIGNED_OUT" || event === "USER_DELETED") {
          this.realtime.setAuth(this.supabaseKey);
          if (source == "STORAGE") this.auth.signOut();
        }
      }
    };
    exports2.default = SupabaseClient;
  },
});

// node_modules/@supabase/supabase-js/dist/main/index.js
var require_main6 = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/index.js"(exports2) {
    "use strict";
    var __createBinding =
      (exports2 && exports2.__createBinding) ||
      (Object.create
        ? function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m2, k);
            if (
              !desc ||
              ("get" in desc
                ? !m2.__esModule
                : desc.writable || desc.configurable)
            ) {
              desc = {
                enumerable: true,
                get: function () {
                  return m2[k];
                },
              };
            }
            Object.defineProperty(o, k2, desc);
          }
        : function (o, m2, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m2[k];
          });
    var __exportStar =
      (exports2 && exports2.__exportStar) ||
      function (m2, exports3) {
        for (var p in m2)
          if (
            p !== "default" &&
            !Object.prototype.hasOwnProperty.call(exports3, p)
          )
            __createBinding(exports3, m2, p);
      };
    var __importDefault =
      (exports2 && exports2.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SupabaseClient = exports2.createClient = void 0;
    var SupabaseClient_1 = __importDefault(require_SupabaseClient());
    exports2.SupabaseClient = SupabaseClient_1.default;
    __exportStar(require_main(), exports2);
    __exportStar(require_main3(), exports2);
    var createClient2 = (supabaseUrl, supabaseKey, options) => {
      return new SupabaseClient_1.default(supabaseUrl, supabaseKey, options);
    };
    exports2.createClient = createClient2;
  },
});

// node_modules/web-streams-polyfill/dist/ponyfill.es2018.js
var require_ponyfill_es2018 = __commonJS({
  "node_modules/web-streams-polyfill/dist/ponyfill.es2018.js"(
    exports2,
    module2
  ) {
    (function (global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined"
        ? factory(exports2)
        : typeof define === "function" && define.amd
        ? define(["exports"], factory)
        : ((global2 =
            typeof globalThis !== "undefined" ? globalThis : global2 || self),
          factory((global2.WebStreamsPolyfill = {})));
    })(exports2, function (exports3) {
      "use strict";
      const SymbolPolyfill =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? Symbol
          : (description) => `Symbol(${description})`;
      function noop2() {
        return void 0;
      }
      function getGlobals() {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else if (typeof global !== "undefined") {
          return global;
        }
        return void 0;
      }
      const globals = getGlobals();
      function typeIsObject(x2) {
        return (
          (typeof x2 === "object" && x2 !== null) || typeof x2 === "function"
        );
      }
      const rethrowAssertionErrorRejection = noop2;
      const originalPromise = Promise;
      const originalPromiseThen = Promise.prototype.then;
      const originalPromiseResolve = Promise.resolve.bind(originalPromise);
      const originalPromiseReject = Promise.reject.bind(originalPromise);
      function newPromise(executor) {
        return new originalPromise(executor);
      }
      function promiseResolvedWith(value) {
        return originalPromiseResolve(value);
      }
      function promiseRejectedWith(reason) {
        return originalPromiseReject(reason);
      }
      function PerformPromiseThen(promise, onFulfilled, onRejected) {
        return originalPromiseThen.call(promise, onFulfilled, onRejected);
      }
      function uponPromise(promise, onFulfilled, onRejected) {
        PerformPromiseThen(
          PerformPromiseThen(promise, onFulfilled, onRejected),
          void 0,
          rethrowAssertionErrorRejection
        );
      }
      function uponFulfillment(promise, onFulfilled) {
        uponPromise(promise, onFulfilled);
      }
      function uponRejection(promise, onRejected) {
        uponPromise(promise, void 0, onRejected);
      }
      function transformPromiseWith(
        promise,
        fulfillmentHandler,
        rejectionHandler
      ) {
        return PerformPromiseThen(
          promise,
          fulfillmentHandler,
          rejectionHandler
        );
      }
      function setPromiseIsHandledToTrue(promise) {
        PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
      }
      const queueMicrotask = (() => {
        const globalQueueMicrotask = globals && globals.queueMicrotask;
        if (typeof globalQueueMicrotask === "function") {
          return globalQueueMicrotask;
        }
        const resolvedPromise = promiseResolvedWith(void 0);
        return (fn) => PerformPromiseThen(resolvedPromise, fn);
      })();
      function reflectCall(F2, V, args) {
        if (typeof F2 !== "function") {
          throw new TypeError("Argument is not a function");
        }
        return Function.prototype.apply.call(F2, V, args);
      }
      function promiseCall(F2, V, args) {
        try {
          return promiseResolvedWith(reflectCall(F2, V, args));
        } catch (value) {
          return promiseRejectedWith(value);
        }
      }
      const QUEUE_MAX_ARRAY_SIZE = 16384;
      class SimpleQueue {
        constructor() {
          this._cursor = 0;
          this._size = 0;
          this._front = {
            _elements: [],
            _next: void 0,
          };
          this._back = this._front;
          this._cursor = 0;
          this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(element) {
          const oldBack = this._back;
          let newBack = oldBack;
          if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
            newBack = {
              _elements: [],
              _next: void 0,
            };
          }
          oldBack._elements.push(element);
          if (newBack !== oldBack) {
            this._back = newBack;
            oldBack._next = newBack;
          }
          ++this._size;
        }
        shift() {
          const oldFront = this._front;
          let newFront = oldFront;
          const oldCursor = this._cursor;
          let newCursor = oldCursor + 1;
          const elements = oldFront._elements;
          const element = elements[oldCursor];
          if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
            newFront = oldFront._next;
            newCursor = 0;
          }
          --this._size;
          this._cursor = newCursor;
          if (oldFront !== newFront) {
            this._front = newFront;
          }
          elements[oldCursor] = void 0;
          return element;
        }
        forEach(callback) {
          let i2 = this._cursor;
          let node = this._front;
          let elements = node._elements;
          while (i2 !== elements.length || node._next !== void 0) {
            if (i2 === elements.length) {
              node = node._next;
              elements = node._elements;
              i2 = 0;
              if (elements.length === 0) {
                break;
              }
            }
            callback(elements[i2]);
            ++i2;
          }
        }
        peek() {
          const front = this._front;
          const cursor = this._cursor;
          return front._elements[cursor];
        }
      }
      function ReadableStreamReaderGenericInitialize(reader, stream) {
        reader._ownerReadableStream = stream;
        stream._reader = reader;
        if (stream._state === "readable") {
          defaultReaderClosedPromiseInitialize(reader);
        } else if (stream._state === "closed") {
          defaultReaderClosedPromiseInitializeAsResolved(reader);
        } else {
          defaultReaderClosedPromiseInitializeAsRejected(
            reader,
            stream._storedError
          );
        }
      }
      function ReadableStreamReaderGenericCancel(reader, reason) {
        const stream = reader._ownerReadableStream;
        return ReadableStreamCancel(stream, reason);
      }
      function ReadableStreamReaderGenericRelease(reader) {
        if (reader._ownerReadableStream._state === "readable") {
          defaultReaderClosedPromiseReject(
            reader,
            new TypeError(
              `Reader was released and can no longer be used to monitor the stream's closedness`
            )
          );
        } else {
          defaultReaderClosedPromiseResetToRejected(
            reader,
            new TypeError(
              `Reader was released and can no longer be used to monitor the stream's closedness`
            )
          );
        }
        reader._ownerReadableStream._reader = void 0;
        reader._ownerReadableStream = void 0;
      }
      function readerLockException(name) {
        return new TypeError(
          "Cannot " + name + " a stream using a released reader"
        );
      }
      function defaultReaderClosedPromiseInitialize(reader) {
        reader._closedPromise = newPromise((resolve, reject) => {
          reader._closedPromise_resolve = resolve;
          reader._closedPromise_reject = reject;
        });
      }
      function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseReject(reader, reason);
      }
      function defaultReaderClosedPromiseInitializeAsResolved(reader) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseResolve(reader);
      }
      function defaultReaderClosedPromiseReject(reader, reason) {
        if (reader._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(reader._closedPromise);
        reader._closedPromise_reject(reason);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      function defaultReaderClosedPromiseResetToRejected(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
      }
      function defaultReaderClosedPromiseResolve(reader) {
        if (reader._closedPromise_resolve === void 0) {
          return;
        }
        reader._closedPromise_resolve(void 0);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
      const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
      const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
      const PullSteps = SymbolPolyfill("[[PullSteps]]");
      const NumberIsFinite =
        Number.isFinite ||
        function (x2) {
          return typeof x2 === "number" && isFinite(x2);
        };
      const MathTrunc =
        Math.trunc ||
        function (v) {
          return v < 0 ? Math.ceil(v) : Math.floor(v);
        };
      function isDictionary(x2) {
        return typeof x2 === "object" || typeof x2 === "function";
      }
      function assertDictionary(obj, context) {
        if (obj !== void 0 && !isDictionary(obj)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertFunction(x2, context) {
        if (typeof x2 !== "function") {
          throw new TypeError(`${context} is not a function.`);
        }
      }
      function isObject(x2) {
        return (
          (typeof x2 === "object" && x2 !== null) || typeof x2 === "function"
        );
      }
      function assertObject(x2, context) {
        if (!isObject(x2)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertRequiredArgument(x2, position, context) {
        if (x2 === void 0) {
          throw new TypeError(
            `Parameter ${position} is required in '${context}'.`
          );
        }
      }
      function assertRequiredField(x2, field, context) {
        if (x2 === void 0) {
          throw new TypeError(`${field} is required in '${context}'.`);
        }
      }
      function convertUnrestrictedDouble(value) {
        return Number(value);
      }
      function censorNegativeZero(x2) {
        return x2 === 0 ? 0 : x2;
      }
      function integerPart(x2) {
        return censorNegativeZero(MathTrunc(x2));
      }
      function convertUnsignedLongLongWithEnforceRange(value, context) {
        const lowerBound = 0;
        const upperBound = Number.MAX_SAFE_INTEGER;
        let x2 = Number(value);
        x2 = censorNegativeZero(x2);
        if (!NumberIsFinite(x2)) {
          throw new TypeError(`${context} is not a finite number`);
        }
        x2 = integerPart(x2);
        if (x2 < lowerBound || x2 > upperBound) {
          throw new TypeError(
            `${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`
          );
        }
        if (!NumberIsFinite(x2) || x2 === 0) {
          return 0;
        }
        return x2;
      }
      function assertReadableStream(x2, context) {
        if (!IsReadableStream(x2)) {
          throw new TypeError(`${context} is not a ReadableStream.`);
        }
      }
      function AcquireReadableStreamDefaultReader(stream) {
        return new ReadableStreamDefaultReader(stream);
      }
      function ReadableStreamAddReadRequest(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
      }
      function ReadableStreamFulfillReadRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readRequest = reader._readRequests.shift();
        if (done) {
          readRequest._closeSteps();
        } else {
          readRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadRequests(stream) {
        return stream._reader._readRequests.length;
      }
      function ReadableStreamHasDefaultReader(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamDefaultReader(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamDefaultReader {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
          assertReadableStream(stream, "First parameter");
          if (IsReadableStreamLocked(stream)) {
            throw new TypeError(
              "This stream has already been locked for exclusive reading by another reader"
            );
          }
          ReadableStreamReaderGenericInitialize(this, stream);
          this._readRequests = new SimpleQueue();
        }
        get closed() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(
              defaultReaderBrandCheckException("closed")
            );
          }
          return this._closedPromise;
        }
        cancel(reason = void 0) {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(
              defaultReaderBrandCheckException("cancel")
            );
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("cancel"));
          }
          return ReadableStreamReaderGenericCancel(this, reason);
        }
        read() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(
              defaultReaderBrandCheckException("read")
            );
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) =>
              resolvePromise({ value: chunk, done: false }),
            _closeSteps: () => resolvePromise({ value: void 0, done: true }),
            _errorSteps: (e2) => rejectPromise(e2),
          };
          ReadableStreamDefaultReaderRead(this, readRequest);
          return promise;
        }
        releaseLock() {
          if (!IsReadableStreamDefaultReader(this)) {
            throw defaultReaderBrandCheckException("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          if (this._readRequests.length > 0) {
            throw new TypeError(
              "Tried to release a reader lock when that reader has pending read() calls un-settled"
            );
          }
          ReadableStreamReaderGenericRelease(this);
        }
      }
      Object.defineProperties(ReadableStreamDefaultReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          ReadableStreamDefaultReader.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "ReadableStreamDefaultReader",
            configurable: true,
          }
        );
      }
      function IsReadableStreamDefaultReader(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_readRequests")) {
          return false;
        }
        return x2 instanceof ReadableStreamDefaultReader;
      }
      function ReadableStreamDefaultReaderRead(reader, readRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "closed") {
          readRequest._closeSteps();
        } else if (stream._state === "errored") {
          readRequest._errorSteps(stream._storedError);
        } else {
          stream._readableStreamController[PullSteps](readRequest);
        }
      }
      function defaultReaderBrandCheckException(name) {
        return new TypeError(
          `ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`
        );
      }
      const AsyncIteratorPrototype = Object.getPrototypeOf(
        Object.getPrototypeOf(async function* () {}).prototype
      );
      class ReadableStreamAsyncIteratorImpl {
        constructor(reader, preventCancel) {
          this._ongoingPromise = void 0;
          this._isFinished = false;
          this._reader = reader;
          this._preventCancel = preventCancel;
        }
        next() {
          const nextSteps = () => this._nextSteps();
          this._ongoingPromise = this._ongoingPromise
            ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps)
            : nextSteps();
          return this._ongoingPromise;
        }
        return(value) {
          const returnSteps = () => this._returnSteps(value);
          return this._ongoingPromise
            ? transformPromiseWith(
                this._ongoingPromise,
                returnSteps,
                returnSteps
              )
            : returnSteps();
        }
        _nextSteps() {
          if (this._isFinished) {
            return Promise.resolve({ value: void 0, done: true });
          }
          const reader = this._reader;
          if (reader._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("iterate"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => {
              this._ongoingPromise = void 0;
              queueMicrotask(() =>
                resolvePromise({ value: chunk, done: false })
              );
            },
            _closeSteps: () => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease(reader);
              resolvePromise({ value: void 0, done: true });
            },
            _errorSteps: (reason) => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease(reader);
              rejectPromise(reason);
            },
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
          return promise;
        }
        _returnSteps(value) {
          if (this._isFinished) {
            return Promise.resolve({ value, done: true });
          }
          this._isFinished = true;
          const reader = this._reader;
          if (reader._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("finish iterating"));
          }
          if (!this._preventCancel) {
            const result = ReadableStreamReaderGenericCancel(reader, value);
            ReadableStreamReaderGenericRelease(reader);
            return transformPromiseWith(result, () => ({ value, done: true }));
          }
          ReadableStreamReaderGenericRelease(reader);
          return promiseResolvedWith({ value, done: true });
        }
      }
      const ReadableStreamAsyncIteratorPrototype = {
        next() {
          if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(
              streamAsyncIteratorBrandCheckException("next")
            );
          }
          return this._asyncIteratorImpl.next();
        },
        return(value) {
          if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(
              streamAsyncIteratorBrandCheckException("return")
            );
          }
          return this._asyncIteratorImpl.return(value);
        },
      };
      if (AsyncIteratorPrototype !== void 0) {
        Object.setPrototypeOf(
          ReadableStreamAsyncIteratorPrototype,
          AsyncIteratorPrototype
        );
      }
      function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
        iterator._asyncIteratorImpl = impl;
        return iterator;
      }
      function IsReadableStreamAsyncIterator(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_asyncIteratorImpl")) {
          return false;
        }
        try {
          return (
            x2._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl
          );
        } catch (_a4) {
          return false;
        }
      }
      function streamAsyncIteratorBrandCheckException(name) {
        return new TypeError(
          `ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`
        );
      }
      const NumberIsNaN =
        Number.isNaN ||
        function (x2) {
          return x2 !== x2;
        };
      function CreateArrayFromList(elements) {
        return elements.slice();
      }
      function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
      }
      function TransferArrayBuffer(O) {
        return O;
      }
      function IsDetachedBuffer(O) {
        return false;
      }
      function ArrayBufferSlice(buffer, begin, end) {
        if (buffer.slice) {
          return buffer.slice(begin, end);
        }
        const length = end - begin;
        const slice = new ArrayBuffer(length);
        CopyDataBlockBytes(slice, 0, buffer, begin, length);
        return slice;
      }
      function IsNonNegativeNumber(v) {
        if (typeof v !== "number") {
          return false;
        }
        if (NumberIsNaN(v)) {
          return false;
        }
        if (v < 0) {
          return false;
        }
        return true;
      }
      function CloneAsUint8Array(O) {
        const buffer = ArrayBufferSlice(
          O.buffer,
          O.byteOffset,
          O.byteOffset + O.byteLength
        );
        return new Uint8Array(buffer);
      }
      function DequeueValue(container) {
        const pair = container._queue.shift();
        container._queueTotalSize -= pair.size;
        if (container._queueTotalSize < 0) {
          container._queueTotalSize = 0;
        }
        return pair.value;
      }
      function EnqueueValueWithSize(container, value, size) {
        if (!IsNonNegativeNumber(size) || size === Infinity) {
          throw new RangeError(
            "Size must be a finite, non-NaN, non-negative number."
          );
        }
        container._queue.push({ value, size });
        container._queueTotalSize += size;
      }
      function PeekQueueValue(container) {
        const pair = container._queue.peek();
        return pair.value;
      }
      function ResetQueue(container) {
        container._queue = new SimpleQueue();
        container._queueTotalSize = 0;
      }
      class ReadableStreamBYOBRequest {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("view");
          }
          return this._view;
        }
        respond(bytesWritten) {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("respond");
          }
          assertRequiredArgument(bytesWritten, 1, "respond");
          bytesWritten = convertUnsignedLongLongWithEnforceRange(
            bytesWritten,
            "First parameter"
          );
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer(this._view.buffer));
          ReadableByteStreamControllerRespond(
            this._associatedReadableByteStreamController,
            bytesWritten
          );
        }
        respondWithNewView(view) {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("respondWithNewView");
          }
          assertRequiredArgument(view, 1, "respondWithNewView");
          if (!ArrayBuffer.isView(view)) {
            throw new TypeError("You can only respond with array buffer views");
          }
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer(view.buffer));
          ReadableByteStreamControllerRespondWithNewView(
            this._associatedReadableByteStreamController,
            view
          );
        }
      }
      Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
        respond: { enumerable: true },
        respondWithNewView: { enumerable: true },
        view: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          ReadableStreamBYOBRequest.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "ReadableStreamBYOBRequest",
            configurable: true,
          }
        );
      }
      class ReadableByteStreamController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("byobRequest");
          }
          return ReadableByteStreamControllerGetBYOBRequest(this);
        }
        get desiredSize() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("desiredSize");
          }
          return ReadableByteStreamControllerGetDesiredSize(this);
        }
        close() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("close");
          }
          if (this._closeRequested) {
            throw new TypeError(
              "The stream has already been closed; do not close it again!"
            );
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(
              `The stream (in ${state} state) is not in the readable state and cannot be closed`
            );
          }
          ReadableByteStreamControllerClose(this);
        }
        enqueue(chunk) {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("enqueue");
          }
          assertRequiredArgument(chunk, 1, "enqueue");
          if (!ArrayBuffer.isView(chunk)) {
            throw new TypeError("chunk must be an array buffer view");
          }
          if (chunk.byteLength === 0) {
            throw new TypeError("chunk must have non-zero byteLength");
          }
          if (chunk.buffer.byteLength === 0) {
            throw new TypeError(`chunk's buffer must have non-zero byteLength`);
          }
          if (this._closeRequested) {
            throw new TypeError("stream is closed or draining");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(
              `The stream (in ${state} state) is not in the readable state and cannot be enqueued to`
            );
          }
          ReadableByteStreamControllerEnqueue(this, chunk);
        }
        error(e2 = void 0) {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("error");
          }
          ReadableByteStreamControllerError(this, e2);
        }
        [CancelSteps](reason) {
          ReadableByteStreamControllerClearPendingPullIntos(this);
          ResetQueue(this);
          const result = this._cancelAlgorithm(reason);
          ReadableByteStreamControllerClearAlgorithms(this);
          return result;
        }
        [PullSteps](readRequest) {
          const stream = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            const entry = this._queue.shift();
            this._queueTotalSize -= entry.byteLength;
            ReadableByteStreamControllerHandleQueueDrain(this);
            const view = new Uint8Array(
              entry.buffer,
              entry.byteOffset,
              entry.byteLength
            );
            readRequest._chunkSteps(view);
            return;
          }
          const autoAllocateChunkSize = this._autoAllocateChunkSize;
          if (autoAllocateChunkSize !== void 0) {
            let buffer;
            try {
              buffer = new ArrayBuffer(autoAllocateChunkSize);
            } catch (bufferE) {
              readRequest._errorSteps(bufferE);
              return;
            }
            const pullIntoDescriptor = {
              buffer,
              bufferByteLength: autoAllocateChunkSize,
              byteOffset: 0,
              byteLength: autoAllocateChunkSize,
              bytesFilled: 0,
              elementSize: 1,
              viewConstructor: Uint8Array,
              readerType: "default",
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
          }
          ReadableStreamAddReadRequest(stream, readRequest);
          ReadableByteStreamControllerCallPullIfNeeded(this);
        }
      }
      Object.defineProperties(ReadableByteStreamController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        byobRequest: { enumerable: true },
        desiredSize: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          ReadableByteStreamController.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "ReadableByteStreamController",
            configurable: true,
          }
        );
      }
      function IsReadableByteStreamController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(
            x2,
            "_controlledReadableByteStream"
          )
        ) {
          return false;
        }
        return x2 instanceof ReadableByteStreamController;
      }
      function IsReadableStreamBYOBRequest(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(
            x2,
            "_associatedReadableByteStreamController"
          )
        ) {
          return false;
        }
        return x2 instanceof ReadableStreamBYOBRequest;
      }
      function ReadableByteStreamControllerCallPullIfNeeded(controller) {
        const shouldPull =
          ReadableByteStreamControllerShouldCallPull(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(
          pullPromise,
          () => {
            controller._pulling = false;
            if (controller._pullAgain) {
              controller._pullAgain = false;
              ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
          },
          (e2) => {
            ReadableByteStreamControllerError(controller, e2);
          }
        );
      }
      function ReadableByteStreamControllerClearPendingPullIntos(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        controller._pendingPullIntos = new SimpleQueue();
      }
      function ReadableByteStreamControllerCommitPullIntoDescriptor(
        stream,
        pullIntoDescriptor
      ) {
        let done = false;
        if (stream._state === "closed") {
          done = true;
        }
        const filledView =
          ReadableByteStreamControllerConvertPullIntoDescriptor(
            pullIntoDescriptor
          );
        if (pullIntoDescriptor.readerType === "default") {
          ReadableStreamFulfillReadRequest(stream, filledView, done);
        } else {
          ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
        }
      }
      function ReadableByteStreamControllerConvertPullIntoDescriptor(
        pullIntoDescriptor
      ) {
        const bytesFilled = pullIntoDescriptor.bytesFilled;
        const elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(
          pullIntoDescriptor.buffer,
          pullIntoDescriptor.byteOffset,
          bytesFilled / elementSize
        );
      }
      function ReadableByteStreamControllerEnqueueChunkToQueue(
        controller,
        buffer,
        byteOffset,
        byteLength
      ) {
        controller._queue.push({ buffer, byteOffset, byteLength });
        controller._queueTotalSize += byteLength;
      }
      function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(
        controller,
        pullIntoDescriptor
      ) {
        const elementSize = pullIntoDescriptor.elementSize;
        const currentAlignedBytes =
          pullIntoDescriptor.bytesFilled -
          (pullIntoDescriptor.bytesFilled % elementSize);
        const maxBytesToCopy = Math.min(
          controller._queueTotalSize,
          pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled
        );
        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
        const maxAlignedBytes = maxBytesFilled - (maxBytesFilled % elementSize);
        let totalBytesToCopyRemaining = maxBytesToCopy;
        let ready = false;
        if (maxAlignedBytes > currentAlignedBytes) {
          totalBytesToCopyRemaining =
            maxAlignedBytes - pullIntoDescriptor.bytesFilled;
          ready = true;
        }
        const queue = controller._queue;
        while (totalBytesToCopyRemaining > 0) {
          const headOfQueue = queue.peek();
          const bytesToCopy = Math.min(
            totalBytesToCopyRemaining,
            headOfQueue.byteLength
          );
          const destStart =
            pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          CopyDataBlockBytes(
            pullIntoDescriptor.buffer,
            destStart,
            headOfQueue.buffer,
            headOfQueue.byteOffset,
            bytesToCopy
          );
          if (headOfQueue.byteLength === bytesToCopy) {
            queue.shift();
          } else {
            headOfQueue.byteOffset += bytesToCopy;
            headOfQueue.byteLength -= bytesToCopy;
          }
          controller._queueTotalSize -= bytesToCopy;
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(
            controller,
            bytesToCopy,
            pullIntoDescriptor
          );
          totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
      }
      function ReadableByteStreamControllerFillHeadPullIntoDescriptor(
        controller,
        size,
        pullIntoDescriptor
      ) {
        pullIntoDescriptor.bytesFilled += size;
      }
      function ReadableByteStreamControllerHandleQueueDrain(controller) {
        if (controller._queueTotalSize === 0 && controller._closeRequested) {
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamClose(controller._controlledReadableByteStream);
        } else {
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
      }
      function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
        if (controller._byobRequest === null) {
          return;
        }
        controller._byobRequest._associatedReadableByteStreamController =
          void 0;
        controller._byobRequest._view = null;
        controller._byobRequest = null;
      }
      function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(
        controller
      ) {
        while (controller._pendingPullIntos.length > 0) {
          if (controller._queueTotalSize === 0) {
            return;
          }
          const pullIntoDescriptor = controller._pendingPullIntos.peek();
          if (
            ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(
              controller,
              pullIntoDescriptor
            )
          ) {
            ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(
              controller._controlledReadableByteStream,
              pullIntoDescriptor
            );
          }
        }
      }
      function ReadableByteStreamControllerPullInto(
        controller,
        view,
        readIntoRequest
      ) {
        const stream = controller._controlledReadableByteStream;
        let elementSize = 1;
        if (view.constructor !== DataView) {
          elementSize = view.constructor.BYTES_PER_ELEMENT;
        }
        const ctor = view.constructor;
        const buffer = TransferArrayBuffer(view.buffer);
        const pullIntoDescriptor = {
          buffer,
          bufferByteLength: buffer.byteLength,
          byteOffset: view.byteOffset,
          byteLength: view.byteLength,
          bytesFilled: 0,
          elementSize,
          viewConstructor: ctor,
          readerType: "byob",
        };
        if (controller._pendingPullIntos.length > 0) {
          controller._pendingPullIntos.push(pullIntoDescriptor);
          ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
          return;
        }
        if (stream._state === "closed") {
          const emptyView = new ctor(
            pullIntoDescriptor.buffer,
            pullIntoDescriptor.byteOffset,
            0
          );
          readIntoRequest._closeSteps(emptyView);
          return;
        }
        if (controller._queueTotalSize > 0) {
          if (
            ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(
              controller,
              pullIntoDescriptor
            )
          ) {
            const filledView =
              ReadableByteStreamControllerConvertPullIntoDescriptor(
                pullIntoDescriptor
              );
            ReadableByteStreamControllerHandleQueueDrain(controller);
            readIntoRequest._chunkSteps(filledView);
            return;
          }
          if (controller._closeRequested) {
            const e2 = new TypeError(
              "Insufficient bytes to fill elements in the given buffer"
            );
            ReadableByteStreamControllerError(controller, e2);
            readIntoRequest._errorSteps(e2);
            return;
          }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerRespondInClosedState(
        controller,
        firstDescriptor
      ) {
        const stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader(stream)) {
          while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            const pullIntoDescriptor =
              ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(
              stream,
              pullIntoDescriptor
            );
          }
        }
      }
      function ReadableByteStreamControllerRespondInReadableState(
        controller,
        bytesWritten,
        pullIntoDescriptor
      ) {
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(
          controller,
          bytesWritten,
          pullIntoDescriptor
        );
        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
          return;
        }
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        const remainderSize =
          pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
          const end =
            pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          const remainder = ArrayBufferSlice(
            pullIntoDescriptor.buffer,
            end - remainderSize,
            end
          );
          ReadableByteStreamControllerEnqueueChunkToQueue(
            controller,
            remainder,
            0,
            remainder.byteLength
          );
        }
        pullIntoDescriptor.bytesFilled -= remainderSize;
        ReadableByteStreamControllerCommitPullIntoDescriptor(
          controller._controlledReadableByteStream,
          pullIntoDescriptor
        );
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(
          controller
        );
      }
      function ReadableByteStreamControllerRespondInternal(
        controller,
        bytesWritten
      ) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          ReadableByteStreamControllerRespondInClosedState(controller);
        } else {
          ReadableByteStreamControllerRespondInReadableState(
            controller,
            bytesWritten,
            firstDescriptor
          );
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerShiftPendingPullInto(controller) {
        const descriptor = controller._pendingPullIntos.shift();
        return descriptor;
      }
      function ReadableByteStreamControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return false;
        }
        if (controller._closeRequested) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (
          ReadableStreamHasDefaultReader(stream) &&
          ReadableStreamGetNumReadRequests(stream) > 0
        ) {
          return true;
        }
        if (
          ReadableStreamHasBYOBReader(stream) &&
          ReadableStreamGetNumReadIntoRequests(stream) > 0
        ) {
          return true;
        }
        const desiredSize =
          ReadableByteStreamControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableByteStreamControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
      }
      function ReadableByteStreamControllerClose(controller) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        if (controller._queueTotalSize > 0) {
          controller._closeRequested = true;
          return;
        }
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (firstPendingPullInto.bytesFilled > 0) {
            const e2 = new TypeError(
              "Insufficient bytes to fill elements in the given buffer"
            );
            ReadableByteStreamControllerError(controller, e2);
            throw e2;
          }
        }
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
      }
      function ReadableByteStreamControllerEnqueue(controller, chunk) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        const buffer = chunk.buffer;
        const byteOffset = chunk.byteOffset;
        const byteLength = chunk.byteLength;
        const transferredBuffer = TransferArrayBuffer(buffer);
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (IsDetachedBuffer(firstPendingPullInto.buffer));
          firstPendingPullInto.buffer = TransferArrayBuffer(
            firstPendingPullInto.buffer
          );
        }
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        if (ReadableStreamHasDefaultReader(stream)) {
          if (ReadableStreamGetNumReadRequests(stream) === 0) {
            ReadableByteStreamControllerEnqueueChunkToQueue(
              controller,
              transferredBuffer,
              byteOffset,
              byteLength
            );
          } else {
            if (controller._pendingPullIntos.length > 0) {
              ReadableByteStreamControllerShiftPendingPullInto(controller);
            }
            const transferredView = new Uint8Array(
              transferredBuffer,
              byteOffset,
              byteLength
            );
            ReadableStreamFulfillReadRequest(stream, transferredView, false);
          }
        } else if (ReadableStreamHasBYOBReader(stream)) {
          ReadableByteStreamControllerEnqueueChunkToQueue(
            controller,
            transferredBuffer,
            byteOffset,
            byteLength
          );
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(
            controller
          );
        } else {
          ReadableByteStreamControllerEnqueueChunkToQueue(
            controller,
            transferredBuffer,
            byteOffset,
            byteLength
          );
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerError(controller, e2) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return;
        }
        ReadableByteStreamControllerClearPendingPullIntos(controller);
        ResetQueue(controller);
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e2);
      }
      function ReadableByteStreamControllerGetBYOBRequest(controller) {
        if (
          controller._byobRequest === null &&
          controller._pendingPullIntos.length > 0
        ) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const view = new Uint8Array(
            firstDescriptor.buffer,
            firstDescriptor.byteOffset + firstDescriptor.bytesFilled,
            firstDescriptor.byteLength - firstDescriptor.bytesFilled
          );
          const byobRequest = Object.create(
            ReadableStreamBYOBRequest.prototype
          );
          SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
          controller._byobRequest = byobRequest;
        }
        return controller._byobRequest;
      }
      function ReadableByteStreamControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableByteStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableByteStreamControllerRespond(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (bytesWritten !== 0) {
            throw new TypeError(
              "bytesWritten must be 0 when calling respond() on a closed stream"
            );
          }
        } else {
          if (bytesWritten === 0) {
            throw new TypeError(
              "bytesWritten must be greater than 0 when calling respond() on a readable stream"
            );
          }
          if (
            firstDescriptor.bytesFilled + bytesWritten >
            firstDescriptor.byteLength
          ) {
            throw new RangeError("bytesWritten out of range");
          }
        }
        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
      }
      function ReadableByteStreamControllerRespondWithNewView(
        controller,
        view
      ) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (view.byteLength !== 0) {
            throw new TypeError(
              "The view's length must be 0 when calling respondWithNewView() on a closed stream"
            );
          }
        } else {
          if (view.byteLength === 0) {
            throw new TypeError(
              "The view's length must be greater than 0 when calling respondWithNewView() on a readable stream"
            );
          }
        }
        if (
          firstDescriptor.byteOffset + firstDescriptor.bytesFilled !==
          view.byteOffset
        ) {
          throw new RangeError(
            "The region specified by view does not match byobRequest"
          );
        }
        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
          throw new RangeError(
            "The buffer of view has different capacity than byobRequest"
          );
        }
        if (
          firstDescriptor.bytesFilled + view.byteLength >
          firstDescriptor.byteLength
        ) {
          throw new RangeError(
            "The region specified by view is larger than byobRequest"
          );
        }
        const viewByteLength = view.byteLength;
        firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
        ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
      }
      function SetUpReadableByteStreamController(
        stream,
        controller,
        startAlgorithm,
        pullAlgorithm,
        cancelAlgorithm,
        highWaterMark,
        autoAllocateChunkSize
      ) {
        controller._controlledReadableByteStream = stream;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._byobRequest = null;
        controller._queue = controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._closeRequested = false;
        controller._started = false;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._autoAllocateChunkSize = autoAllocateChunkSize;
        controller._pendingPullIntos = new SimpleQueue();
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(
          promiseResolvedWith(startResult),
          () => {
            controller._started = true;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          },
          (r2) => {
            ReadableByteStreamControllerError(controller, r2);
          }
        );
      }
      function SetUpReadableByteStreamControllerFromUnderlyingSource(
        stream,
        underlyingByteSource,
        highWaterMark
      ) {
        const controller = Object.create(
          ReadableByteStreamController.prototype
        );
        let startAlgorithm = () => void 0;
        let pullAlgorithm = () => promiseResolvedWith(void 0);
        let cancelAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingByteSource.start !== void 0) {
          startAlgorithm = () => underlyingByteSource.start(controller);
        }
        if (underlyingByteSource.pull !== void 0) {
          pullAlgorithm = () => underlyingByteSource.pull(controller);
        }
        if (underlyingByteSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
        }
        const autoAllocateChunkSize =
          underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0) {
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        }
        SetUpReadableByteStreamController(
          stream,
          controller,
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm,
          highWaterMark,
          autoAllocateChunkSize
        );
      }
      function SetUpReadableStreamBYOBRequest(request, controller, view) {
        request._associatedReadableByteStreamController = controller;
        request._view = view;
      }
      function byobRequestBrandCheckException(name) {
        return new TypeError(
          `ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`
        );
      }
      function byteStreamControllerBrandCheckException(name) {
        return new TypeError(
          `ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`
        );
      }
      function AcquireReadableStreamBYOBReader(stream) {
        return new ReadableStreamBYOBReader(stream);
      }
      function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
      }
      function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readIntoRequest = reader._readIntoRequests.shift();
        if (done) {
          readIntoRequest._closeSteps(chunk);
        } else {
          readIntoRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadIntoRequests(stream) {
        return stream._reader._readIntoRequests.length;
      }
      function ReadableStreamHasBYOBReader(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamBYOBReader(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamBYOBReader {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
          assertReadableStream(stream, "First parameter");
          if (IsReadableStreamLocked(stream)) {
            throw new TypeError(
              "This stream has already been locked for exclusive reading by another reader"
            );
          }
          if (
            !IsReadableByteStreamController(stream._readableStreamController)
          ) {
            throw new TypeError(
              "Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source"
            );
          }
          ReadableStreamReaderGenericInitialize(this, stream);
          this._readIntoRequests = new SimpleQueue();
        }
        get closed() {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        cancel(reason = void 0) {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("cancel"));
          }
          return ReadableStreamReaderGenericCancel(this, reason);
        }
        read(view) {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("read"));
          }
          if (!ArrayBuffer.isView(view)) {
            return promiseRejectedWith(
              new TypeError("view must be an array buffer view")
            );
          }
          if (view.byteLength === 0) {
            return promiseRejectedWith(
              new TypeError("view must have non-zero byteLength")
            );
          }
          if (view.buffer.byteLength === 0) {
            return promiseRejectedWith(
              new TypeError(`view's buffer must have non-zero byteLength`)
            );
          }
          if (IsDetachedBuffer(view.buffer));
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readIntoRequest = {
            _chunkSteps: (chunk) =>
              resolvePromise({ value: chunk, done: false }),
            _closeSteps: (chunk) =>
              resolvePromise({ value: chunk, done: true }),
            _errorSteps: (e2) => rejectPromise(e2),
          };
          ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
          return promise;
        }
        releaseLock() {
          if (!IsReadableStreamBYOBReader(this)) {
            throw byobReaderBrandCheckException("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          if (this._readIntoRequests.length > 0) {
            throw new TypeError(
              "Tried to release a reader lock when that reader has pending read() calls un-settled"
            );
          }
          ReadableStreamReaderGenericRelease(this);
        }
      }
      Object.defineProperties(ReadableStreamBYOBReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          ReadableStreamBYOBReader.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "ReadableStreamBYOBReader",
            configurable: true,
          }
        );
      }
      function IsReadableStreamBYOBReader(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_readIntoRequests")) {
          return false;
        }
        return x2 instanceof ReadableStreamBYOBReader;
      }
      function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "errored") {
          readIntoRequest._errorSteps(stream._storedError);
        } else {
          ReadableByteStreamControllerPullInto(
            stream._readableStreamController,
            view,
            readIntoRequest
          );
        }
      }
      function byobReaderBrandCheckException(name) {
        return new TypeError(
          `ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`
        );
      }
      function ExtractHighWaterMark(strategy, defaultHWM) {
        const { highWaterMark } = strategy;
        if (highWaterMark === void 0) {
          return defaultHWM;
        }
        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
          throw new RangeError("Invalid highWaterMark");
        }
        return highWaterMark;
      }
      function ExtractSizeAlgorithm(strategy) {
        const { size } = strategy;
        if (!size) {
          return () => 1;
        }
        return size;
      }
      function convertQueuingStrategy(init, context) {
        assertDictionary(init, context);
        const highWaterMark =
          init === null || init === void 0 ? void 0 : init.highWaterMark;
        const size = init === null || init === void 0 ? void 0 : init.size;
        return {
          highWaterMark:
            highWaterMark === void 0
              ? void 0
              : convertUnrestrictedDouble(highWaterMark),
          size:
            size === void 0
              ? void 0
              : convertQueuingStrategySize(
                  size,
                  `${context} has member 'size' that`
                ),
        };
      }
      function convertQueuingStrategySize(fn, context) {
        assertFunction(fn, context);
        return (chunk) => convertUnrestrictedDouble(fn(chunk));
      }
      function convertUnderlyingSink(original, context) {
        assertDictionary(original, context);
        const abort =
          original === null || original === void 0 ? void 0 : original.abort;
        const close =
          original === null || original === void 0 ? void 0 : original.close;
        const start =
          original === null || original === void 0 ? void 0 : original.start;
        const type =
          original === null || original === void 0 ? void 0 : original.type;
        const write =
          original === null || original === void 0 ? void 0 : original.write;
        return {
          abort:
            abort === void 0
              ? void 0
              : convertUnderlyingSinkAbortCallback(
                  abort,
                  original,
                  `${context} has member 'abort' that`
                ),
          close:
            close === void 0
              ? void 0
              : convertUnderlyingSinkCloseCallback(
                  close,
                  original,
                  `${context} has member 'close' that`
                ),
          start:
            start === void 0
              ? void 0
              : convertUnderlyingSinkStartCallback(
                  start,
                  original,
                  `${context} has member 'start' that`
                ),
          write:
            write === void 0
              ? void 0
              : convertUnderlyingSinkWriteCallback(
                  write,
                  original,
                  `${context} has member 'write' that`
                ),
          type,
        };
      }
      function convertUnderlyingSinkAbortCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSinkCloseCallback(fn, original, context) {
        assertFunction(fn, context);
        return () => promiseCall(fn, original, []);
      }
      function convertUnderlyingSinkStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertUnderlyingSinkWriteCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) =>
          promiseCall(fn, original, [chunk, controller]);
      }
      function assertWritableStream(x2, context) {
        if (!IsWritableStream(x2)) {
          throw new TypeError(`${context} is not a WritableStream.`);
        }
      }
      function isAbortSignal2(value) {
        if (typeof value !== "object" || value === null) {
          return false;
        }
        try {
          return typeof value.aborted === "boolean";
        } catch (_a4) {
          return false;
        }
      }
      const supportsAbortController = typeof AbortController === "function";
      function createAbortController() {
        if (supportsAbortController) {
          return new AbortController();
        }
        return void 0;
      }
      class WritableStream {
        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
          if (rawUnderlyingSink === void 0) {
            rawUnderlyingSink = null;
          } else {
            assertObject(rawUnderlyingSink, "First parameter");
          }
          const strategy = convertQueuingStrategy(
            rawStrategy,
            "Second parameter"
          );
          const underlyingSink = convertUnderlyingSink(
            rawUnderlyingSink,
            "First parameter"
          );
          InitializeWritableStream(this);
          const type = underlyingSink.type;
          if (type !== void 0) {
            throw new RangeError("Invalid type is specified");
          }
          const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
          const highWaterMark = ExtractHighWaterMark(strategy, 1);
          SetUpWritableStreamDefaultControllerFromUnderlyingSink(
            this,
            underlyingSink,
            highWaterMark,
            sizeAlgorithm
          );
        }
        get locked() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("locked");
          }
          return IsWritableStreamLocked(this);
        }
        abort(reason = void 0) {
          if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2("abort"));
          }
          if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(
              new TypeError("Cannot abort a stream that already has a writer")
            );
          }
          return WritableStreamAbort(this, reason);
        }
        close() {
          if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2("close"));
          }
          if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(
              new TypeError("Cannot close a stream that already has a writer")
            );
          }
          if (WritableStreamCloseQueuedOrInFlight(this)) {
            return promiseRejectedWith(
              new TypeError("Cannot close an already-closing stream")
            );
          }
          return WritableStreamClose(this);
        }
        getWriter() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("getWriter");
          }
          return AcquireWritableStreamDefaultWriter(this);
        }
      }
      Object.defineProperties(WritableStream.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        getWriter: { enumerable: true },
        locked: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          WritableStream.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "WritableStream",
            configurable: true,
          }
        );
      }
      function AcquireWritableStreamDefaultWriter(stream) {
        return new WritableStreamDefaultWriter(stream);
      }
      function CreateWritableStream(
        startAlgorithm,
        writeAlgorithm,
        closeAlgorithm,
        abortAlgorithm,
        highWaterMark = 1,
        sizeAlgorithm = () => 1
      ) {
        const stream = Object.create(WritableStream.prototype);
        InitializeWritableStream(stream);
        const controller = Object.create(
          WritableStreamDefaultController.prototype
        );
        SetUpWritableStreamDefaultController(
          stream,
          controller,
          startAlgorithm,
          writeAlgorithm,
          closeAlgorithm,
          abortAlgorithm,
          highWaterMark,
          sizeAlgorithm
        );
        return stream;
      }
      function InitializeWritableStream(stream) {
        stream._state = "writable";
        stream._storedError = void 0;
        stream._writer = void 0;
        stream._writableStreamController = void 0;
        stream._writeRequests = new SimpleQueue();
        stream._inFlightWriteRequest = void 0;
        stream._closeRequest = void 0;
        stream._inFlightCloseRequest = void 0;
        stream._pendingAbortRequest = void 0;
        stream._backpressure = false;
      }
      function IsWritableStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(x2, "_writableStreamController")
        ) {
          return false;
        }
        return x2 instanceof WritableStream;
      }
      function IsWritableStreamLocked(stream) {
        if (stream._writer === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamAbort(stream, reason) {
        var _a4;
        if (stream._state === "closed" || stream._state === "errored") {
          return promiseResolvedWith(void 0);
        }
        stream._writableStreamController._abortReason = reason;
        (_a4 = stream._writableStreamController._abortController) === null ||
        _a4 === void 0
          ? void 0
          : _a4.abort();
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseResolvedWith(void 0);
        }
        if (stream._pendingAbortRequest !== void 0) {
          return stream._pendingAbortRequest._promise;
        }
        let wasAlreadyErroring = false;
        if (state === "erroring") {
          wasAlreadyErroring = true;
          reason = void 0;
        }
        const promise = newPromise((resolve, reject) => {
          stream._pendingAbortRequest = {
            _promise: void 0,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring,
          };
        });
        stream._pendingAbortRequest._promise = promise;
        if (!wasAlreadyErroring) {
          WritableStreamStartErroring(stream, reason);
        }
        return promise;
      }
      function WritableStreamClose(stream) {
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseRejectedWith(
            new TypeError(
              `The stream (in ${state} state) is not in the writable state and cannot be closed`
            )
          );
        }
        const promise = newPromise((resolve, reject) => {
          const closeRequest = {
            _resolve: resolve,
            _reject: reject,
          };
          stream._closeRequest = closeRequest;
        });
        const writer = stream._writer;
        if (writer !== void 0 && stream._backpressure && state === "writable") {
          defaultWriterReadyPromiseResolve(writer);
        }
        WritableStreamDefaultControllerClose(stream._writableStreamController);
        return promise;
      }
      function WritableStreamAddWriteRequest(stream) {
        const promise = newPromise((resolve, reject) => {
          const writeRequest = {
            _resolve: resolve,
            _reject: reject,
          };
          stream._writeRequests.push(writeRequest);
        });
        return promise;
      }
      function WritableStreamDealWithRejection(stream, error) {
        const state = stream._state;
        if (state === "writable") {
          WritableStreamStartErroring(stream, error);
          return;
        }
        WritableStreamFinishErroring(stream);
      }
      function WritableStreamStartErroring(stream, reason) {
        const controller = stream._writableStreamController;
        stream._state = "erroring";
        stream._storedError = reason;
        const writer = stream._writer;
        if (writer !== void 0) {
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
        }
        if (
          !WritableStreamHasOperationMarkedInFlight(stream) &&
          controller._started
        ) {
          WritableStreamFinishErroring(stream);
        }
      }
      function WritableStreamFinishErroring(stream) {
        stream._state = "errored";
        stream._writableStreamController[ErrorSteps]();
        const storedError = stream._storedError;
        stream._writeRequests.forEach((writeRequest) => {
          writeRequest._reject(storedError);
        });
        stream._writeRequests = new SimpleQueue();
        if (stream._pendingAbortRequest === void 0) {
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        const abortRequest = stream._pendingAbortRequest;
        stream._pendingAbortRequest = void 0;
        if (abortRequest._wasAlreadyErroring) {
          abortRequest._reject(storedError);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        const promise = stream._writableStreamController[AbortSteps](
          abortRequest._reason
        );
        uponPromise(
          promise,
          () => {
            abortRequest._resolve();
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          },
          (reason) => {
            abortRequest._reject(reason);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          }
        );
      }
      function WritableStreamFinishInFlightWrite(stream) {
        stream._inFlightWriteRequest._resolve(void 0);
        stream._inFlightWriteRequest = void 0;
      }
      function WritableStreamFinishInFlightWriteWithError(stream, error) {
        stream._inFlightWriteRequest._reject(error);
        stream._inFlightWriteRequest = void 0;
        WritableStreamDealWithRejection(stream, error);
      }
      function WritableStreamFinishInFlightClose(stream) {
        stream._inFlightCloseRequest._resolve(void 0);
        stream._inFlightCloseRequest = void 0;
        const state = stream._state;
        if (state === "erroring") {
          stream._storedError = void 0;
          if (stream._pendingAbortRequest !== void 0) {
            stream._pendingAbortRequest._resolve();
            stream._pendingAbortRequest = void 0;
          }
        }
        stream._state = "closed";
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseResolve(writer);
        }
      }
      function WritableStreamFinishInFlightCloseWithError(stream, error) {
        stream._inFlightCloseRequest._reject(error);
        stream._inFlightCloseRequest = void 0;
        if (stream._pendingAbortRequest !== void 0) {
          stream._pendingAbortRequest._reject(error);
          stream._pendingAbortRequest = void 0;
        }
        WritableStreamDealWithRejection(stream, error);
      }
      function WritableStreamCloseQueuedOrInFlight(stream) {
        if (
          stream._closeRequest === void 0 &&
          stream._inFlightCloseRequest === void 0
        ) {
          return false;
        }
        return true;
      }
      function WritableStreamHasOperationMarkedInFlight(stream) {
        if (
          stream._inFlightWriteRequest === void 0 &&
          stream._inFlightCloseRequest === void 0
        ) {
          return false;
        }
        return true;
      }
      function WritableStreamMarkCloseRequestInFlight(stream) {
        stream._inFlightCloseRequest = stream._closeRequest;
        stream._closeRequest = void 0;
      }
      function WritableStreamMarkFirstWriteRequestInFlight(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
      }
      function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
        if (stream._closeRequest !== void 0) {
          stream._closeRequest._reject(stream._storedError);
          stream._closeRequest = void 0;
        }
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseReject(writer, stream._storedError);
        }
      }
      function WritableStreamUpdateBackpressure(stream, backpressure) {
        const writer = stream._writer;
        if (writer !== void 0 && backpressure !== stream._backpressure) {
          if (backpressure) {
            defaultWriterReadyPromiseReset(writer);
          } else {
            defaultWriterReadyPromiseResolve(writer);
          }
        }
        stream._backpressure = backpressure;
      }
      class WritableStreamDefaultWriter {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
          assertWritableStream(stream, "First parameter");
          if (IsWritableStreamLocked(stream)) {
            throw new TypeError(
              "This stream has already been locked for exclusive writing by another writer"
            );
          }
          this._ownerWritableStream = stream;
          stream._writer = this;
          const state = stream._state;
          if (state === "writable") {
            if (
              !WritableStreamCloseQueuedOrInFlight(stream) &&
              stream._backpressure
            ) {
              defaultWriterReadyPromiseInitialize(this);
            } else {
              defaultWriterReadyPromiseInitializeAsResolved(this);
            }
            defaultWriterClosedPromiseInitialize(this);
          } else if (state === "erroring") {
            defaultWriterReadyPromiseInitializeAsRejected(
              this,
              stream._storedError
            );
            defaultWriterClosedPromiseInitialize(this);
          } else if (state === "closed") {
            defaultWriterReadyPromiseInitializeAsResolved(this);
            defaultWriterClosedPromiseInitializeAsResolved(this);
          } else {
            const storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
            defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
          }
        }
        get closed() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(
              defaultWriterBrandCheckException("closed")
            );
          }
          return this._closedPromise;
        }
        get desiredSize() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("desiredSize");
          }
          if (this._ownerWritableStream === void 0) {
            throw defaultWriterLockException("desiredSize");
          }
          return WritableStreamDefaultWriterGetDesiredSize(this);
        }
        get ready() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(
              defaultWriterBrandCheckException("ready")
            );
          }
          return this._readyPromise;
        }
        abort(reason = void 0) {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(
              defaultWriterBrandCheckException("abort")
            );
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("abort"));
          }
          return WritableStreamDefaultWriterAbort(this, reason);
        }
        close() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(
              defaultWriterBrandCheckException("close")
            );
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("close"));
          }
          if (WritableStreamCloseQueuedOrInFlight(stream)) {
            return promiseRejectedWith(
              new TypeError("Cannot close an already-closing stream")
            );
          }
          return WritableStreamDefaultWriterClose(this);
        }
        releaseLock() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("releaseLock");
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return;
          }
          WritableStreamDefaultWriterRelease(this);
        }
        write(chunk = void 0) {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(
              defaultWriterBrandCheckException("write")
            );
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("write to"));
          }
          return WritableStreamDefaultWriterWrite(this, chunk);
        }
      }
      Object.defineProperties(WritableStreamDefaultWriter.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        releaseLock: { enumerable: true },
        write: { enumerable: true },
        closed: { enumerable: true },
        desiredSize: { enumerable: true },
        ready: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          WritableStreamDefaultWriter.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "WritableStreamDefaultWriter",
            configurable: true,
          }
        );
      }
      function IsWritableStreamDefaultWriter(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_ownerWritableStream")) {
          return false;
        }
        return x2 instanceof WritableStreamDefaultWriter;
      }
      function WritableStreamDefaultWriterAbort(writer, reason) {
        const stream = writer._ownerWritableStream;
        return WritableStreamAbort(stream, reason);
      }
      function WritableStreamDefaultWriterClose(writer) {
        const stream = writer._ownerWritableStream;
        return WritableStreamClose(stream);
      }
      function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
          return promiseResolvedWith(void 0);
        }
        if (state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        return WritableStreamDefaultWriterClose(writer);
      }
      function WritableStreamDefaultWriterEnsureClosedPromiseRejected(
        writer,
        error
      ) {
        if (writer._closedPromiseState === "pending") {
          defaultWriterClosedPromiseReject(writer, error);
        } else {
          defaultWriterClosedPromiseResetToRejected(writer, error);
        }
      }
      function WritableStreamDefaultWriterEnsureReadyPromiseRejected(
        writer,
        error
      ) {
        if (writer._readyPromiseState === "pending") {
          defaultWriterReadyPromiseReject(writer, error);
        } else {
          defaultWriterReadyPromiseResetToRejected(writer, error);
        }
      }
      function WritableStreamDefaultWriterGetDesiredSize(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (state === "errored" || state === "erroring") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return WritableStreamDefaultControllerGetDesiredSize(
          stream._writableStreamController
        );
      }
      function WritableStreamDefaultWriterRelease(writer) {
        const stream = writer._ownerWritableStream;
        const releasedError = new TypeError(
          `Writer was released and can no longer be used to monitor the stream's closedness`
        );
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(
          writer,
          releasedError
        );
        WritableStreamDefaultWriterEnsureClosedPromiseRejected(
          writer,
          releasedError
        );
        stream._writer = void 0;
        writer._ownerWritableStream = void 0;
      }
      function WritableStreamDefaultWriterWrite(writer, chunk) {
        const stream = writer._ownerWritableStream;
        const controller = stream._writableStreamController;
        const chunkSize = WritableStreamDefaultControllerGetChunkSize(
          controller,
          chunk
        );
        if (stream !== writer._ownerWritableStream) {
          return promiseRejectedWith(defaultWriterLockException("write to"));
        }
        const state = stream._state;
        if (state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
          return promiseRejectedWith(
            new TypeError(
              "The stream is closing or closed and cannot be written to"
            )
          );
        }
        if (state === "erroring") {
          return promiseRejectedWith(stream._storedError);
        }
        const promise = WritableStreamAddWriteRequest(stream);
        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
        return promise;
      }
      const closeSentinel = {};
      class WritableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("abortReason");
          }
          return this._abortReason;
        }
        get signal() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("signal");
          }
          if (this._abortController === void 0) {
            throw new TypeError(
              "WritableStreamDefaultController.prototype.signal is not supported"
            );
          }
          return this._abortController.signal;
        }
        error(e2 = void 0) {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("error");
          }
          const state = this._controlledWritableStream._state;
          if (state !== "writable") {
            return;
          }
          WritableStreamDefaultControllerError(this, e2);
        }
        [AbortSteps](reason) {
          const result = this._abortAlgorithm(reason);
          WritableStreamDefaultControllerClearAlgorithms(this);
          return result;
        }
        [ErrorSteps]() {
          ResetQueue(this);
        }
      }
      Object.defineProperties(WritableStreamDefaultController.prototype, {
        abortReason: { enumerable: true },
        signal: { enumerable: true },
        error: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          WritableStreamDefaultController.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "WritableStreamDefaultController",
            configurable: true,
          }
        );
      }
      function IsWritableStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(x2, "_controlledWritableStream")
        ) {
          return false;
        }
        return x2 instanceof WritableStreamDefaultController;
      }
      function SetUpWritableStreamDefaultController(
        stream,
        controller,
        startAlgorithm,
        writeAlgorithm,
        closeAlgorithm,
        abortAlgorithm,
        highWaterMark,
        sizeAlgorithm
      ) {
        controller._controlledWritableStream = stream;
        stream._writableStreamController = controller;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._abortReason = void 0;
        controller._abortController = createAbortController();
        controller._started = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._writeAlgorithm = writeAlgorithm;
        controller._closeAlgorithm = closeAlgorithm;
        controller._abortAlgorithm = abortAlgorithm;
        const backpressure =
          WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
        const startResult = startAlgorithm();
        const startPromise = promiseResolvedWith(startResult);
        uponPromise(
          startPromise,
          () => {
            controller._started = true;
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          },
          (r2) => {
            controller._started = true;
            WritableStreamDealWithRejection(stream, r2);
          }
        );
      }
      function SetUpWritableStreamDefaultControllerFromUnderlyingSink(
        stream,
        underlyingSink,
        highWaterMark,
        sizeAlgorithm
      ) {
        const controller = Object.create(
          WritableStreamDefaultController.prototype
        );
        let startAlgorithm = () => void 0;
        let writeAlgorithm = () => promiseResolvedWith(void 0);
        let closeAlgorithm = () => promiseResolvedWith(void 0);
        let abortAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingSink.start !== void 0) {
          startAlgorithm = () => underlyingSink.start(controller);
        }
        if (underlyingSink.write !== void 0) {
          writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
        }
        if (underlyingSink.close !== void 0) {
          closeAlgorithm = () => underlyingSink.close();
        }
        if (underlyingSink.abort !== void 0) {
          abortAlgorithm = (reason) => underlyingSink.abort(reason);
        }
        SetUpWritableStreamDefaultController(
          stream,
          controller,
          startAlgorithm,
          writeAlgorithm,
          closeAlgorithm,
          abortAlgorithm,
          highWaterMark,
          sizeAlgorithm
        );
      }
      function WritableStreamDefaultControllerClearAlgorithms(controller) {
        controller._writeAlgorithm = void 0;
        controller._closeAlgorithm = void 0;
        controller._abortAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function WritableStreamDefaultControllerClose(controller) {
        EnqueueValueWithSize(controller, closeSentinel, 0);
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
        try {
          return controller._strategySizeAlgorithm(chunk);
        } catch (chunkSizeE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          return 1;
        }
      }
      function WritableStreamDefaultControllerGetDesiredSize(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function WritableStreamDefaultControllerWrite(
        controller,
        chunk,
        chunkSize
      ) {
        try {
          EnqueueValueWithSize(controller, chunk, chunkSize);
        } catch (enqueueE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
          return;
        }
        const stream = controller._controlledWritableStream;
        if (
          !WritableStreamCloseQueuedOrInFlight(stream) &&
          stream._state === "writable"
        ) {
          const backpressure =
            WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
        const stream = controller._controlledWritableStream;
        if (!controller._started) {
          return;
        }
        if (stream._inFlightWriteRequest !== void 0) {
          return;
        }
        const state = stream._state;
        if (state === "erroring") {
          WritableStreamFinishErroring(stream);
          return;
        }
        if (controller._queue.length === 0) {
          return;
        }
        const value = PeekQueueValue(controller);
        if (value === closeSentinel) {
          WritableStreamDefaultControllerProcessClose(controller);
        } else {
          WritableStreamDefaultControllerProcessWrite(controller, value);
        }
      }
      function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
        if (controller._controlledWritableStream._state === "writable") {
          WritableStreamDefaultControllerError(controller, error);
        }
      }
      function WritableStreamDefaultControllerProcessClose(controller) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight(stream);
        DequeueValue(controller);
        const sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(
          sinkClosePromise,
          () => {
            WritableStreamFinishInFlightClose(stream);
          },
          (reason) => {
            WritableStreamFinishInFlightCloseWithError(stream, reason);
          }
        );
      }
      function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight(stream);
        const sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise(
          sinkWritePromise,
          () => {
            WritableStreamFinishInFlightWrite(stream);
            const state = stream._state;
            DequeueValue(controller);
            if (
              !WritableStreamCloseQueuedOrInFlight(stream) &&
              state === "writable"
            ) {
              const backpressure =
                WritableStreamDefaultControllerGetBackpressure(controller);
              WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          },
          (reason) => {
            if (stream._state === "writable") {
              WritableStreamDefaultControllerClearAlgorithms(controller);
            }
            WritableStreamFinishInFlightWriteWithError(stream, reason);
          }
        );
      }
      function WritableStreamDefaultControllerGetBackpressure(controller) {
        const desiredSize =
          WritableStreamDefaultControllerGetDesiredSize(controller);
        return desiredSize <= 0;
      }
      function WritableStreamDefaultControllerError(controller, error) {
        const stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms(controller);
        WritableStreamStartErroring(stream, error);
      }
      function streamBrandCheckException$2(name) {
        return new TypeError(
          `WritableStream.prototype.${name} can only be used on a WritableStream`
        );
      }
      function defaultControllerBrandCheckException$2(name) {
        return new TypeError(
          `WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`
        );
      }
      function defaultWriterBrandCheckException(name) {
        return new TypeError(
          `WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`
        );
      }
      function defaultWriterLockException(name) {
        return new TypeError(
          "Cannot " + name + " a stream using a released writer"
        );
      }
      function defaultWriterClosedPromiseInitialize(writer) {
        writer._closedPromise = newPromise((resolve, reject) => {
          writer._closedPromise_resolve = resolve;
          writer._closedPromise_reject = reject;
          writer._closedPromiseState = "pending";
        });
      }
      function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseReject(writer, reason);
      }
      function defaultWriterClosedPromiseInitializeAsResolved(writer) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseResolve(writer);
      }
      function defaultWriterClosedPromiseReject(writer, reason) {
        if (writer._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(writer._closedPromise);
        writer._closedPromise_reject(reason);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "rejected";
      }
      function defaultWriterClosedPromiseResetToRejected(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterClosedPromiseResolve(writer) {
        if (writer._closedPromise_resolve === void 0) {
          return;
        }
        writer._closedPromise_resolve(void 0);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "resolved";
      }
      function defaultWriterReadyPromiseInitialize(writer) {
        writer._readyPromise = newPromise((resolve, reject) => {
          writer._readyPromise_resolve = resolve;
          writer._readyPromise_reject = reject;
        });
        writer._readyPromiseState = "pending";
      }
      function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseReject(writer, reason);
      }
      function defaultWriterReadyPromiseInitializeAsResolved(writer) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseResolve(writer);
      }
      function defaultWriterReadyPromiseReject(writer, reason) {
        if (writer._readyPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(writer._readyPromise);
        writer._readyPromise_reject(reason);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "rejected";
      }
      function defaultWriterReadyPromiseReset(writer) {
        defaultWriterReadyPromiseInitialize(writer);
      }
      function defaultWriterReadyPromiseResetToRejected(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterReadyPromiseResolve(writer) {
        if (writer._readyPromise_resolve === void 0) {
          return;
        }
        writer._readyPromise_resolve(void 0);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "fulfilled";
      }
      const NativeDOMException =
        typeof DOMException !== "undefined" ? DOMException : void 0;
      function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor === "function" || typeof ctor === "object")) {
          return false;
        }
        try {
          new ctor();
          return true;
        } catch (_a4) {
          return false;
        }
      }
      function createDOMExceptionPolyfill() {
        const ctor = function DOMException3(message, name) {
          this.message = message || "";
          this.name = name || "Error";
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          }
        };
        ctor.prototype = Object.create(Error.prototype);
        Object.defineProperty(ctor.prototype, "constructor", {
          value: ctor,
          writable: true,
          configurable: true,
        });
        return ctor;
      }
      const DOMException$1 = isDOMExceptionConstructor(NativeDOMException)
        ? NativeDOMException
        : createDOMExceptionPolyfill();
      function ReadableStreamPipeTo(
        source,
        dest,
        preventClose,
        preventAbort,
        preventCancel,
        signal
      ) {
        const reader = AcquireReadableStreamDefaultReader(source);
        const writer = AcquireWritableStreamDefaultWriter(dest);
        source._disturbed = true;
        let shuttingDown = false;
        let currentWrite = promiseResolvedWith(void 0);
        return newPromise((resolve, reject) => {
          let abortAlgorithm;
          if (signal !== void 0) {
            abortAlgorithm = () => {
              const error = new DOMException$1("Aborted", "AbortError");
              const actions = [];
              if (!preventAbort) {
                actions.push(() => {
                  if (dest._state === "writable") {
                    return WritableStreamAbort(dest, error);
                  }
                  return promiseResolvedWith(void 0);
                });
              }
              if (!preventCancel) {
                actions.push(() => {
                  if (source._state === "readable") {
                    return ReadableStreamCancel(source, error);
                  }
                  return promiseResolvedWith(void 0);
                });
              }
              shutdownWithAction(
                () => Promise.all(actions.map((action) => action())),
                true,
                error
              );
            };
            if (signal.aborted) {
              abortAlgorithm();
              return;
            }
            signal.addEventListener("abort", abortAlgorithm);
          }
          function pipeLoop() {
            return newPromise((resolveLoop, rejectLoop) => {
              function next(done) {
                if (done) {
                  resolveLoop();
                } else {
                  PerformPromiseThen(pipeStep(), next, rejectLoop);
                }
              }
              next(false);
            });
          }
          function pipeStep() {
            if (shuttingDown) {
              return promiseResolvedWith(true);
            }
            return PerformPromiseThen(writer._readyPromise, () => {
              return newPromise((resolveRead, rejectRead) => {
                ReadableStreamDefaultReaderRead(reader, {
                  _chunkSteps: (chunk) => {
                    currentWrite = PerformPromiseThen(
                      WritableStreamDefaultWriterWrite(writer, chunk),
                      void 0,
                      noop2
                    );
                    resolveRead(false);
                  },
                  _closeSteps: () => resolveRead(true),
                  _errorSteps: rejectRead,
                });
              });
            });
          }
          isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
            if (!preventAbort) {
              shutdownWithAction(
                () => WritableStreamAbort(dest, storedError),
                true,
                storedError
              );
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
            if (!preventCancel) {
              shutdownWithAction(
                () => ReadableStreamCancel(source, storedError),
                true,
                storedError
              );
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(source, reader._closedPromise, () => {
            if (!preventClose) {
              shutdownWithAction(() =>
                WritableStreamDefaultWriterCloseWithErrorPropagation(writer)
              );
            } else {
              shutdown();
            }
          });
          if (
            WritableStreamCloseQueuedOrInFlight(dest) ||
            dest._state === "closed"
          ) {
            const destClosed = new TypeError(
              "the destination writable stream closed before all data could be piped to it"
            );
            if (!preventCancel) {
              shutdownWithAction(
                () => ReadableStreamCancel(source, destClosed),
                true,
                destClosed
              );
            } else {
              shutdown(true, destClosed);
            }
          }
          setPromiseIsHandledToTrue(pipeLoop());
          function waitForWritesToFinish() {
            const oldCurrentWrite = currentWrite;
            return PerformPromiseThen(currentWrite, () =>
              oldCurrentWrite !== currentWrite
                ? waitForWritesToFinish()
                : void 0
            );
          }
          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === "errored") {
              action(stream._storedError);
            } else {
              uponRejection(promise, action);
            }
          }
          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === "closed") {
              action();
            } else {
              uponFulfillment(promise, action);
            }
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (
              dest._state === "writable" &&
              !WritableStreamCloseQueuedOrInFlight(dest)
            ) {
              uponFulfillment(waitForWritesToFinish(), doTheRest);
            } else {
              doTheRest();
            }
            function doTheRest() {
              uponPromise(
                action(),
                () => finalize(originalIsError, originalError),
                (newError) => finalize(true, newError)
              );
            }
          }
          function shutdown(isError, error) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (
              dest._state === "writable" &&
              !WritableStreamCloseQueuedOrInFlight(dest)
            ) {
              uponFulfillment(waitForWritesToFinish(), () =>
                finalize(isError, error)
              );
            } else {
              finalize(isError, error);
            }
          }
          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (signal !== void 0) {
              signal.removeEventListener("abort", abortAlgorithm);
            }
            if (isError) {
              reject(error);
            } else {
              resolve(void 0);
            }
          }
        });
      }
      class ReadableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("desiredSize");
          }
          return ReadableStreamDefaultControllerGetDesiredSize(this);
        }
        close() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("close");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError(
              "The stream is not in a state that permits close"
            );
          }
          ReadableStreamDefaultControllerClose(this);
        }
        enqueue(chunk = void 0) {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("enqueue");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError(
              "The stream is not in a state that permits enqueue"
            );
          }
          return ReadableStreamDefaultControllerEnqueue(this, chunk);
        }
        error(e2 = void 0) {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("error");
          }
          ReadableStreamDefaultControllerError(this, e2);
        }
        [CancelSteps](reason) {
          ResetQueue(this);
          const result = this._cancelAlgorithm(reason);
          ReadableStreamDefaultControllerClearAlgorithms(this);
          return result;
        }
        [PullSteps](readRequest) {
          const stream = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const chunk = DequeueValue(this);
            if (this._closeRequested && this._queue.length === 0) {
              ReadableStreamDefaultControllerClearAlgorithms(this);
              ReadableStreamClose(stream);
            } else {
              ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
            readRequest._chunkSteps(chunk);
          } else {
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
        }
      }
      Object.defineProperties(ReadableStreamDefaultController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        desiredSize: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          ReadableStreamDefaultController.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "ReadableStreamDefaultController",
            configurable: true,
          }
        );
      }
      function IsReadableStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(x2, "_controlledReadableStream")
        ) {
          return false;
        }
        return x2 instanceof ReadableStreamDefaultController;
      }
      function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
        const shouldPull =
          ReadableStreamDefaultControllerShouldCallPull(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(
          pullPromise,
          () => {
            controller._pulling = false;
            if (controller._pullAgain) {
              controller._pullAgain = false;
              ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
          },
          (e2) => {
            ReadableStreamDefaultControllerError(controller, e2);
          }
        );
      }
      function ReadableStreamDefaultControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableStream;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (
          IsReadableStreamLocked(stream) &&
          ReadableStreamGetNumReadRequests(stream) > 0
        ) {
          return true;
        }
        const desiredSize =
          ReadableStreamDefaultControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableStreamDefaultControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function ReadableStreamDefaultControllerClose(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        controller._closeRequested = true;
        if (controller._queue.length === 0) {
          ReadableStreamDefaultControllerClearAlgorithms(controller);
          ReadableStreamClose(stream);
        }
      }
      function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        if (
          IsReadableStreamLocked(stream) &&
          ReadableStreamGetNumReadRequests(stream) > 0
        ) {
          ReadableStreamFulfillReadRequest(stream, chunk, false);
        } else {
          let chunkSize;
          try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            ReadableStreamDefaultControllerError(controller, chunkSizeE);
            throw chunkSizeE;
          }
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
          } catch (enqueueE) {
            ReadableStreamDefaultControllerError(controller, enqueueE);
            throw enqueueE;
          }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
      function ReadableStreamDefaultControllerError(controller, e2) {
        const stream = controller._controlledReadableStream;
        if (stream._state !== "readable") {
          return;
        }
        ResetQueue(controller);
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e2);
      }
      function ReadableStreamDefaultControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableStreamDefaultControllerHasBackpressure(controller) {
        if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
          return false;
        }
        return true;
      }
      function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
        const state = controller._controlledReadableStream._state;
        if (!controller._closeRequested && state === "readable") {
          return true;
        }
        return false;
      }
      function SetUpReadableStreamDefaultController(
        stream,
        controller,
        startAlgorithm,
        pullAlgorithm,
        cancelAlgorithm,
        highWaterMark,
        sizeAlgorithm
      ) {
        controller._controlledReadableStream = stream;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._started = false;
        controller._closeRequested = false;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(
          promiseResolvedWith(startResult),
          () => {
            controller._started = true;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          },
          (r2) => {
            ReadableStreamDefaultControllerError(controller, r2);
          }
        );
      }
      function SetUpReadableStreamDefaultControllerFromUnderlyingSource(
        stream,
        underlyingSource,
        highWaterMark,
        sizeAlgorithm
      ) {
        const controller = Object.create(
          ReadableStreamDefaultController.prototype
        );
        let startAlgorithm = () => void 0;
        let pullAlgorithm = () => promiseResolvedWith(void 0);
        let cancelAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingSource.start !== void 0) {
          startAlgorithm = () => underlyingSource.start(controller);
        }
        if (underlyingSource.pull !== void 0) {
          pullAlgorithm = () => underlyingSource.pull(controller);
        }
        if (underlyingSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
        }
        SetUpReadableStreamDefaultController(
          stream,
          controller,
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm,
          highWaterMark,
          sizeAlgorithm
        );
      }
      function defaultControllerBrandCheckException$1(name) {
        return new TypeError(
          `ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`
        );
      }
      function ReadableStreamTee(stream, cloneForBranch2) {
        if (IsReadableByteStreamController(stream._readableStreamController)) {
          return ReadableByteStreamTee(stream);
        }
        return ReadableStreamDefaultTee(stream);
      }
      function ReadableStreamDefaultTee(stream, cloneForBranch2) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgain = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
          if (reading) {
            readAgain = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const readRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgain = false;
                const chunk1 = chunk;
                const chunk2 = chunk;
                if (!canceled1) {
                  ReadableStreamDefaultControllerEnqueue(
                    branch1._readableStreamController,
                    chunk1
                  );
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerEnqueue(
                    branch2._readableStreamController,
                    chunk2
                  );
                }
                reading = false;
                if (readAgain) {
                  pullAlgorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableStreamDefaultControllerClose(
                  branch1._readableStreamController
                );
              }
              if (!canceled2) {
                ReadableStreamDefaultControllerClose(
                  branch2._readableStreamController
                );
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            },
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
          return promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {}
        branch1 = CreateReadableStream(
          startAlgorithm,
          pullAlgorithm,
          cancel1Algorithm
        );
        branch2 = CreateReadableStream(
          startAlgorithm,
          pullAlgorithm,
          cancel2Algorithm
        );
        uponRejection(reader._closedPromise, (r2) => {
          ReadableStreamDefaultControllerError(
            branch1._readableStreamController,
            r2
          );
          ReadableStreamDefaultControllerError(
            branch2._readableStreamController,
            r2
          );
          if (!canceled1 || !canceled2) {
            resolveCancelPromise(void 0);
          }
        });
        return [branch1, branch2];
      }
      function ReadableByteStreamTee(stream) {
        let reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgainForBranch1 = false;
        let readAgainForBranch2 = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function forwardReaderError(thisReader) {
          uponRejection(thisReader._closedPromise, (r2) => {
            if (thisReader !== reader) {
              return;
            }
            ReadableByteStreamControllerError(
              branch1._readableStreamController,
              r2
            );
            ReadableByteStreamControllerError(
              branch2._readableStreamController,
              r2
            );
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          });
        }
        function pullWithDefaultReader() {
          if (IsReadableStreamBYOBReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamDefaultReader(stream);
            forwardReaderError(reader);
          }
          const readRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const chunk1 = chunk;
                let chunk2 = chunk;
                if (!canceled1 && !canceled2) {
                  try {
                    chunk2 = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(
                      branch1._readableStreamController,
                      cloneE
                    );
                    ReadableByteStreamControllerError(
                      branch2._readableStreamController,
                      cloneE
                    );
                    resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                }
                if (!canceled1) {
                  ReadableByteStreamControllerEnqueue(
                    branch1._readableStreamController,
                    chunk1
                  );
                }
                if (!canceled2) {
                  ReadableByteStreamControllerEnqueue(
                    branch2._readableStreamController,
                    chunk2
                  );
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableByteStreamControllerClose(
                  branch1._readableStreamController
                );
              }
              if (!canceled2) {
                ReadableByteStreamControllerClose(
                  branch2._readableStreamController
                );
              }
              if (
                branch1._readableStreamController._pendingPullIntos.length > 0
              ) {
                ReadableByteStreamControllerRespond(
                  branch1._readableStreamController,
                  0
                );
              }
              if (
                branch2._readableStreamController._pendingPullIntos.length > 0
              ) {
                ReadableByteStreamControllerRespond(
                  branch2._readableStreamController,
                  0
                );
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            },
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
        }
        function pullWithBYOBReader(view, forBranch2) {
          if (IsReadableStreamDefaultReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamBYOBReader(stream);
            forwardReaderError(reader);
          }
          const byobBranch = forBranch2 ? branch2 : branch1;
          const otherBranch = forBranch2 ? branch1 : branch2;
          const readIntoRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!otherCanceled) {
                  let clonedChunk;
                  try {
                    clonedChunk = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(
                      byobBranch._readableStreamController,
                      cloneE
                    );
                    ReadableByteStreamControllerError(
                      otherBranch._readableStreamController,
                      cloneE
                    );
                    resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(
                      byobBranch._readableStreamController,
                      chunk
                    );
                  }
                  ReadableByteStreamControllerEnqueue(
                    otherBranch._readableStreamController,
                    clonedChunk
                  );
                } else if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(
                    byobBranch._readableStreamController,
                    chunk
                  );
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: (chunk) => {
              reading = false;
              const byobCanceled = forBranch2 ? canceled2 : canceled1;
              const otherCanceled = forBranch2 ? canceled1 : canceled2;
              if (!byobCanceled) {
                ReadableByteStreamControllerClose(
                  byobBranch._readableStreamController
                );
              }
              if (!otherCanceled) {
                ReadableByteStreamControllerClose(
                  otherBranch._readableStreamController
                );
              }
              if (chunk !== void 0) {
                if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(
                    byobBranch._readableStreamController,
                    chunk
                  );
                }
                if (
                  !otherCanceled &&
                  otherBranch._readableStreamController._pendingPullIntos
                    .length > 0
                ) {
                  ReadableByteStreamControllerRespond(
                    otherBranch._readableStreamController,
                    0
                  );
                }
              }
              if (!byobCanceled || !otherCanceled) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            },
          };
          ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
        }
        function pull1Algorithm() {
          if (reading) {
            readAgainForBranch1 = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest(
            branch1._readableStreamController
          );
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, false);
          }
          return promiseResolvedWith(void 0);
        }
        function pull2Algorithm() {
          if (reading) {
            readAgainForBranch2 = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest(
            branch2._readableStreamController
          );
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, true);
          }
          return promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
          return;
        }
        branch1 = CreateReadableByteStream(
          startAlgorithm,
          pull1Algorithm,
          cancel1Algorithm
        );
        branch2 = CreateReadableByteStream(
          startAlgorithm,
          pull2Algorithm,
          cancel2Algorithm
        );
        forwardReaderError(reader);
        return [branch1, branch2];
      }
      function convertUnderlyingDefaultOrByteSource(source, context) {
        assertDictionary(source, context);
        const original = source;
        const autoAllocateChunkSize =
          original === null || original === void 0
            ? void 0
            : original.autoAllocateChunkSize;
        const cancel =
          original === null || original === void 0 ? void 0 : original.cancel;
        const pull =
          original === null || original === void 0 ? void 0 : original.pull;
        const start =
          original === null || original === void 0 ? void 0 : original.start;
        const type =
          original === null || original === void 0 ? void 0 : original.type;
        return {
          autoAllocateChunkSize:
            autoAllocateChunkSize === void 0
              ? void 0
              : convertUnsignedLongLongWithEnforceRange(
                  autoAllocateChunkSize,
                  `${context} has member 'autoAllocateChunkSize' that`
                ),
          cancel:
            cancel === void 0
              ? void 0
              : convertUnderlyingSourceCancelCallback(
                  cancel,
                  original,
                  `${context} has member 'cancel' that`
                ),
          pull:
            pull === void 0
              ? void 0
              : convertUnderlyingSourcePullCallback(
                  pull,
                  original,
                  `${context} has member 'pull' that`
                ),
          start:
            start === void 0
              ? void 0
              : convertUnderlyingSourceStartCallback(
                  start,
                  original,
                  `${context} has member 'start' that`
                ),
          type:
            type === void 0
              ? void 0
              : convertReadableStreamType(
                  type,
                  `${context} has member 'type' that`
                ),
        };
      }
      function convertUnderlyingSourceCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSourcePullCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
      }
      function convertUnderlyingSourceStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertReadableStreamType(type, context) {
        type = `${type}`;
        if (type !== "bytes") {
          throw new TypeError(
            `${context} '${type}' is not a valid enumeration value for ReadableStreamType`
          );
        }
        return type;
      }
      function convertReaderOptions(options, context) {
        assertDictionary(options, context);
        const mode =
          options === null || options === void 0 ? void 0 : options.mode;
        return {
          mode:
            mode === void 0
              ? void 0
              : convertReadableStreamReaderMode(
                  mode,
                  `${context} has member 'mode' that`
                ),
        };
      }
      function convertReadableStreamReaderMode(mode, context) {
        mode = `${mode}`;
        if (mode !== "byob") {
          throw new TypeError(
            `${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`
          );
        }
        return mode;
      }
      function convertIteratorOptions(options, context) {
        assertDictionary(options, context);
        const preventCancel =
          options === null || options === void 0
            ? void 0
            : options.preventCancel;
        return { preventCancel: Boolean(preventCancel) };
      }
      function convertPipeOptions(options, context) {
        assertDictionary(options, context);
        const preventAbort =
          options === null || options === void 0
            ? void 0
            : options.preventAbort;
        const preventCancel =
          options === null || options === void 0
            ? void 0
            : options.preventCancel;
        const preventClose =
          options === null || options === void 0
            ? void 0
            : options.preventClose;
        const signal =
          options === null || options === void 0 ? void 0 : options.signal;
        if (signal !== void 0) {
          assertAbortSignal(signal, `${context} has member 'signal' that`);
        }
        return {
          preventAbort: Boolean(preventAbort),
          preventCancel: Boolean(preventCancel),
          preventClose: Boolean(preventClose),
          signal,
        };
      }
      function assertAbortSignal(signal, context) {
        if (!isAbortSignal2(signal)) {
          throw new TypeError(`${context} is not an AbortSignal.`);
        }
      }
      function convertReadableWritablePair(pair, context) {
        assertDictionary(pair, context);
        const readable =
          pair === null || pair === void 0 ? void 0 : pair.readable;
        assertRequiredField(readable, "readable", "ReadableWritablePair");
        assertReadableStream(readable, `${context} has member 'readable' that`);
        const writable =
          pair === null || pair === void 0 ? void 0 : pair.writable;
        assertRequiredField(writable, "writable", "ReadableWritablePair");
        assertWritableStream(writable, `${context} has member 'writable' that`);
        return { readable, writable };
      }
      class ReadableStream2 {
        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
          if (rawUnderlyingSource === void 0) {
            rawUnderlyingSource = null;
          } else {
            assertObject(rawUnderlyingSource, "First parameter");
          }
          const strategy = convertQueuingStrategy(
            rawStrategy,
            "Second parameter"
          );
          const underlyingSource = convertUnderlyingDefaultOrByteSource(
            rawUnderlyingSource,
            "First parameter"
          );
          InitializeReadableStream(this);
          if (underlyingSource.type === "bytes") {
            if (strategy.size !== void 0) {
              throw new RangeError(
                "The strategy for a byte stream cannot have a size function"
              );
            }
            const highWaterMark = ExtractHighWaterMark(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource(
              this,
              underlyingSource,
              highWaterMark
            );
          } else {
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource(
              this,
              underlyingSource,
              highWaterMark,
              sizeAlgorithm
            );
          }
        }
        get locked() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("locked");
          }
          return IsReadableStreamLocked(this);
        }
        cancel(reason = void 0) {
          if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1("cancel"));
          }
          if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(
              new TypeError("Cannot cancel a stream that already has a reader")
            );
          }
          return ReadableStreamCancel(this, reason);
        }
        getReader(rawOptions = void 0) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("getReader");
          }
          const options = convertReaderOptions(rawOptions, "First parameter");
          if (options.mode === void 0) {
            return AcquireReadableStreamDefaultReader(this);
          }
          return AcquireReadableStreamBYOBReader(this);
        }
        pipeThrough(rawTransform, rawOptions = {}) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("pipeThrough");
          }
          assertRequiredArgument(rawTransform, 1, "pipeThrough");
          const transform = convertReadableWritablePair(
            rawTransform,
            "First parameter"
          );
          const options = convertPipeOptions(rawOptions, "Second parameter");
          if (IsReadableStreamLocked(this)) {
            throw new TypeError(
              "ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream"
            );
          }
          if (IsWritableStreamLocked(transform.writable)) {
            throw new TypeError(
              "ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream"
            );
          }
          const promise = ReadableStreamPipeTo(
            this,
            transform.writable,
            options.preventClose,
            options.preventAbort,
            options.preventCancel,
            options.signal
          );
          setPromiseIsHandledToTrue(promise);
          return transform.readable;
        }
        pipeTo(destination, rawOptions = {}) {
          if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
          }
          if (destination === void 0) {
            return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
          }
          if (!IsWritableStream(destination)) {
            return promiseRejectedWith(
              new TypeError(
                `ReadableStream.prototype.pipeTo's first argument must be a WritableStream`
              )
            );
          }
          let options;
          try {
            options = convertPipeOptions(rawOptions, "Second parameter");
          } catch (e2) {
            return promiseRejectedWith(e2);
          }
          if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(
              new TypeError(
                "ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"
              )
            );
          }
          if (IsWritableStreamLocked(destination)) {
            return promiseRejectedWith(
              new TypeError(
                "ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"
              )
            );
          }
          return ReadableStreamPipeTo(
            this,
            destination,
            options.preventClose,
            options.preventAbort,
            options.preventCancel,
            options.signal
          );
        }
        tee() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("tee");
          }
          const branches = ReadableStreamTee(this);
          return CreateArrayFromList(branches);
        }
        values(rawOptions = void 0) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("values");
          }
          const options = convertIteratorOptions(rawOptions, "First parameter");
          return AcquireReadableStreamAsyncIterator(
            this,
            options.preventCancel
          );
        }
      }
      Object.defineProperties(ReadableStream2.prototype, {
        cancel: { enumerable: true },
        getReader: { enumerable: true },
        pipeThrough: { enumerable: true },
        pipeTo: { enumerable: true },
        tee: { enumerable: true },
        values: { enumerable: true },
        locked: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          ReadableStream2.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "ReadableStream",
            configurable: true,
          }
        );
      }
      if (typeof SymbolPolyfill.asyncIterator === "symbol") {
        Object.defineProperty(
          ReadableStream2.prototype,
          SymbolPolyfill.asyncIterator,
          {
            value: ReadableStream2.prototype.values,
            writable: true,
            configurable: true,
          }
        );
      }
      function CreateReadableStream(
        startAlgorithm,
        pullAlgorithm,
        cancelAlgorithm,
        highWaterMark = 1,
        sizeAlgorithm = () => 1
      ) {
        const stream = Object.create(ReadableStream2.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(
          ReadableStreamDefaultController.prototype
        );
        SetUpReadableStreamDefaultController(
          stream,
          controller,
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm,
          highWaterMark,
          sizeAlgorithm
        );
        return stream;
      }
      function CreateReadableByteStream(
        startAlgorithm,
        pullAlgorithm,
        cancelAlgorithm
      ) {
        const stream = Object.create(ReadableStream2.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(
          ReadableByteStreamController.prototype
        );
        SetUpReadableByteStreamController(
          stream,
          controller,
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm,
          0,
          void 0
        );
        return stream;
      }
      function InitializeReadableStream(stream) {
        stream._state = "readable";
        stream._reader = void 0;
        stream._storedError = void 0;
        stream._disturbed = false;
      }
      function IsReadableStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(x2, "_readableStreamController")
        ) {
          return false;
        }
        return x2 instanceof ReadableStream2;
      }
      function IsReadableStreamLocked(stream) {
        if (stream._reader === void 0) {
          return false;
        }
        return true;
      }
      function ReadableStreamCancel(stream, reason) {
        stream._disturbed = true;
        if (stream._state === "closed") {
          return promiseResolvedWith(void 0);
        }
        if (stream._state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        ReadableStreamClose(stream);
        const reader = stream._reader;
        if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
          reader._readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._closeSteps(void 0);
          });
          reader._readIntoRequests = new SimpleQueue();
        }
        const sourceCancelPromise =
          stream._readableStreamController[CancelSteps](reason);
        return transformPromiseWith(sourceCancelPromise, noop2);
      }
      function ReadableStreamClose(stream) {
        stream._state = "closed";
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseResolve(reader);
        if (IsReadableStreamDefaultReader(reader)) {
          reader._readRequests.forEach((readRequest) => {
            readRequest._closeSteps();
          });
          reader._readRequests = new SimpleQueue();
        }
      }
      function ReadableStreamError(stream, e2) {
        stream._state = "errored";
        stream._storedError = e2;
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseReject(reader, e2);
        if (IsReadableStreamDefaultReader(reader)) {
          reader._readRequests.forEach((readRequest) => {
            readRequest._errorSteps(e2);
          });
          reader._readRequests = new SimpleQueue();
        } else {
          reader._readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._errorSteps(e2);
          });
          reader._readIntoRequests = new SimpleQueue();
        }
      }
      function streamBrandCheckException$1(name) {
        return new TypeError(
          `ReadableStream.prototype.${name} can only be used on a ReadableStream`
        );
      }
      function convertQueuingStrategyInit(init, context) {
        assertDictionary(init, context);
        const highWaterMark =
          init === null || init === void 0 ? void 0 : init.highWaterMark;
        assertRequiredField(
          highWaterMark,
          "highWaterMark",
          "QueuingStrategyInit"
        );
        return {
          highWaterMark: convertUnrestrictedDouble(highWaterMark),
        };
      }
      const byteLengthSizeFunction = (chunk) => {
        return chunk.byteLength;
      };
      try {
        Object.defineProperty(byteLengthSizeFunction, "name", {
          value: "size",
          configurable: true,
        });
      } catch (_a4) {}
      class ByteLengthQueuingStrategy {
        constructor(options) {
          assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
          options = convertQueuingStrategyInit(options, "First parameter");
          this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        get highWaterMark() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("highWaterMark");
          }
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("size");
          }
          return byteLengthSizeFunction;
        }
      }
      Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          ByteLengthQueuingStrategy.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "ByteLengthQueuingStrategy",
            configurable: true,
          }
        );
      }
      function byteLengthBrandCheckException(name) {
        return new TypeError(
          `ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`
        );
      }
      function IsByteLengthQueuingStrategy(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(
            x2,
            "_byteLengthQueuingStrategyHighWaterMark"
          )
        ) {
          return false;
        }
        return x2 instanceof ByteLengthQueuingStrategy;
      }
      const countSizeFunction = () => {
        return 1;
      };
      try {
        Object.defineProperty(countSizeFunction, "name", {
          value: "size",
          configurable: true,
        });
      } catch (_a4) {}
      class CountQueuingStrategy {
        constructor(options) {
          assertRequiredArgument(options, 1, "CountQueuingStrategy");
          options = convertQueuingStrategyInit(options, "First parameter");
          this._countQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        get highWaterMark() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("highWaterMark");
          }
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("size");
          }
          return countSizeFunction;
        }
      }
      Object.defineProperties(CountQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          CountQueuingStrategy.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "CountQueuingStrategy",
            configurable: true,
          }
        );
      }
      function countBrandCheckException(name) {
        return new TypeError(
          `CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`
        );
      }
      function IsCountQueuingStrategy(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(
            x2,
            "_countQueuingStrategyHighWaterMark"
          )
        ) {
          return false;
        }
        return x2 instanceof CountQueuingStrategy;
      }
      function convertTransformer(original, context) {
        assertDictionary(original, context);
        const flush =
          original === null || original === void 0 ? void 0 : original.flush;
        const readableType =
          original === null || original === void 0
            ? void 0
            : original.readableType;
        const start =
          original === null || original === void 0 ? void 0 : original.start;
        const transform =
          original === null || original === void 0
            ? void 0
            : original.transform;
        const writableType =
          original === null || original === void 0
            ? void 0
            : original.writableType;
        return {
          flush:
            flush === void 0
              ? void 0
              : convertTransformerFlushCallback(
                  flush,
                  original,
                  `${context} has member 'flush' that`
                ),
          readableType,
          start:
            start === void 0
              ? void 0
              : convertTransformerStartCallback(
                  start,
                  original,
                  `${context} has member 'start' that`
                ),
          transform:
            transform === void 0
              ? void 0
              : convertTransformerTransformCallback(
                  transform,
                  original,
                  `${context} has member 'transform' that`
                ),
          writableType,
        };
      }
      function convertTransformerFlushCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
      }
      function convertTransformerStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertTransformerTransformCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) =>
          promiseCall(fn, original, [chunk, controller]);
      }
      class TransformStream {
        constructor(
          rawTransformer = {},
          rawWritableStrategy = {},
          rawReadableStrategy = {}
        ) {
          if (rawTransformer === void 0) {
            rawTransformer = null;
          }
          const writableStrategy = convertQueuingStrategy(
            rawWritableStrategy,
            "Second parameter"
          );
          const readableStrategy = convertQueuingStrategy(
            rawReadableStrategy,
            "Third parameter"
          );
          const transformer = convertTransformer(
            rawTransformer,
            "First parameter"
          );
          if (transformer.readableType !== void 0) {
            throw new RangeError("Invalid readableType specified");
          }
          if (transformer.writableType !== void 0) {
            throw new RangeError("Invalid writableType specified");
          }
          const readableHighWaterMark = ExtractHighWaterMark(
            readableStrategy,
            0
          );
          const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
          const writableHighWaterMark = ExtractHighWaterMark(
            writableStrategy,
            1
          );
          const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
          let startPromise_resolve;
          const startPromise = newPromise((resolve) => {
            startPromise_resolve = resolve;
          });
          InitializeTransformStream(
            this,
            startPromise,
            writableHighWaterMark,
            writableSizeAlgorithm,
            readableHighWaterMark,
            readableSizeAlgorithm
          );
          SetUpTransformStreamDefaultControllerFromTransformer(
            this,
            transformer
          );
          if (transformer.start !== void 0) {
            startPromise_resolve(
              transformer.start(this._transformStreamController)
            );
          } else {
            startPromise_resolve(void 0);
          }
        }
        get readable() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("readable");
          }
          return this._readable;
        }
        get writable() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("writable");
          }
          return this._writable;
        }
      }
      Object.defineProperties(TransformStream.prototype, {
        readable: { enumerable: true },
        writable: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          TransformStream.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "TransformStream",
            configurable: true,
          }
        );
      }
      function InitializeTransformStream(
        stream,
        startPromise,
        writableHighWaterMark,
        writableSizeAlgorithm,
        readableHighWaterMark,
        readableSizeAlgorithm
      ) {
        function startAlgorithm() {
          return startPromise;
        }
        function writeAlgorithm(chunk) {
          return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
        }
        function abortAlgorithm(reason) {
          return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
        }
        function closeAlgorithm() {
          return TransformStreamDefaultSinkCloseAlgorithm(stream);
        }
        stream._writable = CreateWritableStream(
          startAlgorithm,
          writeAlgorithm,
          closeAlgorithm,
          abortAlgorithm,
          writableHighWaterMark,
          writableSizeAlgorithm
        );
        function pullAlgorithm() {
          return TransformStreamDefaultSourcePullAlgorithm(stream);
        }
        function cancelAlgorithm(reason) {
          TransformStreamErrorWritableAndUnblockWrite(stream, reason);
          return promiseResolvedWith(void 0);
        }
        stream._readable = CreateReadableStream(
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm,
          readableHighWaterMark,
          readableSizeAlgorithm
        );
        stream._backpressure = void 0;
        stream._backpressureChangePromise = void 0;
        stream._backpressureChangePromise_resolve = void 0;
        TransformStreamSetBackpressure(stream, true);
        stream._transformStreamController = void 0;
      }
      function IsTransformStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(
            x2,
            "_transformStreamController"
          )
        ) {
          return false;
        }
        return x2 instanceof TransformStream;
      }
      function TransformStreamError(stream, e2) {
        ReadableStreamDefaultControllerError(
          stream._readable._readableStreamController,
          e2
        );
        TransformStreamErrorWritableAndUnblockWrite(stream, e2);
      }
      function TransformStreamErrorWritableAndUnblockWrite(stream, e2) {
        TransformStreamDefaultControllerClearAlgorithms(
          stream._transformStreamController
        );
        WritableStreamDefaultControllerErrorIfNeeded(
          stream._writable._writableStreamController,
          e2
        );
        if (stream._backpressure) {
          TransformStreamSetBackpressure(stream, false);
        }
      }
      function TransformStreamSetBackpressure(stream, backpressure) {
        if (stream._backpressureChangePromise !== void 0) {
          stream._backpressureChangePromise_resolve();
        }
        stream._backpressureChangePromise = newPromise((resolve) => {
          stream._backpressureChangePromise_resolve = resolve;
        });
        stream._backpressure = backpressure;
      }
      class TransformStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("desiredSize");
          }
          const readableController =
            this._controlledTransformStream._readable._readableStreamController;
          return ReadableStreamDefaultControllerGetDesiredSize(
            readableController
          );
        }
        enqueue(chunk = void 0) {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("enqueue");
          }
          TransformStreamDefaultControllerEnqueue(this, chunk);
        }
        error(reason = void 0) {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("error");
          }
          TransformStreamDefaultControllerError(this, reason);
        }
        terminate() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("terminate");
          }
          TransformStreamDefaultControllerTerminate(this);
        }
      }
      Object.defineProperties(TransformStreamDefaultController.prototype, {
        enqueue: { enumerable: true },
        error: { enumerable: true },
        terminate: { enumerable: true },
        desiredSize: { enumerable: true },
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(
          TransformStreamDefaultController.prototype,
          SymbolPolyfill.toStringTag,
          {
            value: "TransformStreamDefaultController",
            configurable: true,
          }
        );
      }
      function IsTransformStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (
          !Object.prototype.hasOwnProperty.call(
            x2,
            "_controlledTransformStream"
          )
        ) {
          return false;
        }
        return x2 instanceof TransformStreamDefaultController;
      }
      function SetUpTransformStreamDefaultController(
        stream,
        controller,
        transformAlgorithm,
        flushAlgorithm
      ) {
        controller._controlledTransformStream = stream;
        stream._transformStreamController = controller;
        controller._transformAlgorithm = transformAlgorithm;
        controller._flushAlgorithm = flushAlgorithm;
      }
      function SetUpTransformStreamDefaultControllerFromTransformer(
        stream,
        transformer
      ) {
        const controller = Object.create(
          TransformStreamDefaultController.prototype
        );
        let transformAlgorithm = (chunk) => {
          try {
            TransformStreamDefaultControllerEnqueue(controller, chunk);
            return promiseResolvedWith(void 0);
          } catch (transformResultE) {
            return promiseRejectedWith(transformResultE);
          }
        };
        let flushAlgorithm = () => promiseResolvedWith(void 0);
        if (transformer.transform !== void 0) {
          transformAlgorithm = (chunk) =>
            transformer.transform(chunk, controller);
        }
        if (transformer.flush !== void 0) {
          flushAlgorithm = () => transformer.flush(controller);
        }
        SetUpTransformStreamDefaultController(
          stream,
          controller,
          transformAlgorithm,
          flushAlgorithm
        );
      }
      function TransformStreamDefaultControllerClearAlgorithms(controller) {
        controller._transformAlgorithm = void 0;
        controller._flushAlgorithm = void 0;
      }
      function TransformStreamDefaultControllerEnqueue(controller, chunk) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        if (
          !ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)
        ) {
          throw new TypeError(
            "Readable side is not in a state that permits enqueue"
          );
        }
        try {
          ReadableStreamDefaultControllerEnqueue(readableController, chunk);
        } catch (e2) {
          TransformStreamErrorWritableAndUnblockWrite(stream, e2);
          throw stream._readable._storedError;
        }
        const backpressure =
          ReadableStreamDefaultControllerHasBackpressure(readableController);
        if (backpressure !== stream._backpressure) {
          TransformStreamSetBackpressure(stream, true);
        }
      }
      function TransformStreamDefaultControllerError(controller, e2) {
        TransformStreamError(controller._controlledTransformStream, e2);
      }
      function TransformStreamDefaultControllerPerformTransform(
        controller,
        chunk
      ) {
        const transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith(transformPromise, void 0, (r2) => {
          TransformStreamError(controller._controlledTransformStream, r2);
          throw r2;
        });
      }
      function TransformStreamDefaultControllerTerminate(controller) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose(readableController);
        const error = new TypeError("TransformStream terminated");
        TransformStreamErrorWritableAndUnblockWrite(stream, error);
      }
      function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
        const controller = stream._transformStreamController;
        if (stream._backpressure) {
          const backpressureChangePromise = stream._backpressureChangePromise;
          return transformPromiseWith(backpressureChangePromise, () => {
            const writable = stream._writable;
            const state = writable._state;
            if (state === "erroring") {
              throw writable._storedError;
            }
            return TransformStreamDefaultControllerPerformTransform(
              controller,
              chunk
            );
          });
        }
        return TransformStreamDefaultControllerPerformTransform(
          controller,
          chunk
        );
      }
      function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
        TransformStreamError(stream, reason);
        return promiseResolvedWith(void 0);
      }
      function TransformStreamDefaultSinkCloseAlgorithm(stream) {
        const readable = stream._readable;
        const controller = stream._transformStreamController;
        const flushPromise = controller._flushAlgorithm();
        TransformStreamDefaultControllerClearAlgorithms(controller);
        return transformPromiseWith(
          flushPromise,
          () => {
            if (readable._state === "errored") {
              throw readable._storedError;
            }
            ReadableStreamDefaultControllerClose(
              readable._readableStreamController
            );
          },
          (r2) => {
            TransformStreamError(stream, r2);
            throw readable._storedError;
          }
        );
      }
      function TransformStreamDefaultSourcePullAlgorithm(stream) {
        TransformStreamSetBackpressure(stream, false);
        return stream._backpressureChangePromise;
      }
      function defaultControllerBrandCheckException(name) {
        return new TypeError(
          `TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`
        );
      }
      function streamBrandCheckException(name) {
        return new TypeError(
          `TransformStream.prototype.${name} can only be used on a TransformStream`
        );
      }
      exports3.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
      exports3.CountQueuingStrategy = CountQueuingStrategy;
      exports3.ReadableByteStreamController = ReadableByteStreamController;
      exports3.ReadableStream = ReadableStream2;
      exports3.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
      exports3.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
      exports3.ReadableStreamDefaultController =
        ReadableStreamDefaultController;
      exports3.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
      exports3.TransformStream = TransformStream;
      exports3.TransformStreamDefaultController =
        TransformStreamDefaultController;
      exports3.WritableStream = WritableStream;
      exports3.WritableStreamDefaultController =
        WritableStreamDefaultController;
      exports3.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
      Object.defineProperty(exports3, "__esModule", { value: true });
    });
  },
});

// node_modules/fetch-blob/streams.cjs
var require_streams = __commonJS({
  "node_modules/fetch-blob/streams.cjs"() {
    var POOL_SIZE2 = 65536;
    if (!globalThis.ReadableStream) {
      try {
        const process2 = require("process");
        const { emitWarning } = process2;
        try {
          process2.emitWarning = () => {};
          Object.assign(globalThis, require("stream/web"));
          process2.emitWarning = emitWarning;
        } catch (error) {
          process2.emitWarning = emitWarning;
          throw error;
        }
      } catch (error) {
        Object.assign(globalThis, require_ponyfill_es2018());
      }
    }
    try {
      const { Blob: Blob3 } = require("buffer");
      if (Blob3 && !Blob3.prototype.stream) {
        Blob3.prototype.stream = function name(params) {
          let position = 0;
          const blob = this;
          return new ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = blob.slice(
                position,
                Math.min(blob.size, position + POOL_SIZE2)
              );
              const buffer = await chunk.arrayBuffer();
              position += buffer.byteLength;
              ctrl.enqueue(new Uint8Array(buffer));
              if (position === blob.size) {
                ctrl.close();
              }
            },
          });
        };
      }
    } catch (error) {}
  },
});

// node_modules/fetch-blob/index.js
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0,
        b = part;
      while (position !== b.size) {
        const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
var import_streams,
  POOL_SIZE,
  _parts,
  _type,
  _size,
  _endings,
  _a,
  _Blob,
  Blob2,
  fetch_blob_default;
var init_fetch_blob = __esm({
  "node_modules/fetch-blob/index.js"() {
    import_streams = __toESM(require_streams(), 1);
    POOL_SIZE = 65536;
    _Blob =
      ((_a = class {
        constructor(blobParts = [], options = {}) {
          __privateAdd(this, _parts, []);
          __privateAdd(this, _type, "");
          __privateAdd(this, _size, 0);
          __privateAdd(this, _endings, "transparent");
          if (typeof blobParts !== "object" || blobParts === null) {
            throw new TypeError(
              "Failed to construct 'Blob': The provided value cannot be converted to a sequence."
            );
          }
          if (typeof blobParts[Symbol.iterator] !== "function") {
            throw new TypeError(
              "Failed to construct 'Blob': The object must have a callable @@iterator property."
            );
          }
          if (typeof options !== "object" && typeof options !== "function") {
            throw new TypeError(
              "Failed to construct 'Blob': parameter 2 cannot convert to dictionary."
            );
          }
          if (options === null) options = {};
          const encoder = new TextEncoder();
          for (const element of blobParts) {
            let part;
            if (ArrayBuffer.isView(element)) {
              part = new Uint8Array(
                element.buffer.slice(
                  element.byteOffset,
                  element.byteOffset + element.byteLength
                )
              );
            } else if (element instanceof ArrayBuffer) {
              part = new Uint8Array(element.slice(0));
            } else if (element instanceof _a) {
              part = element;
            } else {
              part = encoder.encode(`${element}`);
            }
            const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
            if (size) {
              __privateSet(this, _size, __privateGet(this, _size) + size);
              __privateGet(this, _parts).push(part);
            }
          }
          __privateSet(
            this,
            _endings,
            `${options.endings === void 0 ? "transparent" : options.endings}`
          );
          const type = options.type === void 0 ? "" : String(options.type);
          __privateSet(this, _type, /^[\x20-\x7E]*$/.test(type) ? type : "");
        }
        get size() {
          return __privateGet(this, _size);
        }
        get type() {
          return __privateGet(this, _type);
        }
        async text() {
          const decoder = new TextDecoder();
          let str = "";
          for await (const part of toIterator(
            __privateGet(this, _parts),
            false
          )) {
            str += decoder.decode(part, { stream: true });
          }
          str += decoder.decode();
          return str;
        }
        async arrayBuffer() {
          const data = new Uint8Array(this.size);
          let offset = 0;
          for await (const chunk of toIterator(
            __privateGet(this, _parts),
            false
          )) {
            data.set(chunk, offset);
            offset += chunk.length;
          }
          return data.buffer;
        }
        stream() {
          const it = toIterator(__privateGet(this, _parts), true);
          return new globalThis.ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = await it.next();
              chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
            },
            async cancel() {
              await it.return();
            },
          });
        }
        slice(start = 0, end = this.size, type = "") {
          const { size } = this;
          let relativeStart =
            start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
          let relativeEnd =
            end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
          const span = Math.max(relativeEnd - relativeStart, 0);
          const parts = __privateGet(this, _parts);
          const blobParts = [];
          let added = 0;
          for (const part of parts) {
            if (added >= span) {
              break;
            }
            const size2 = ArrayBuffer.isView(part)
              ? part.byteLength
              : part.size;
            if (relativeStart && size2 <= relativeStart) {
              relativeStart -= size2;
              relativeEnd -= size2;
            } else {
              let chunk;
              if (ArrayBuffer.isView(part)) {
                chunk = part.subarray(
                  relativeStart,
                  Math.min(size2, relativeEnd)
                );
                added += chunk.byteLength;
              } else {
                chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
                added += chunk.size;
              }
              relativeEnd -= size2;
              blobParts.push(chunk);
              relativeStart = 0;
            }
          }
          const blob = new _a([], { type: String(type).toLowerCase() });
          __privateSet(blob, _size, span);
          __privateSet(blob, _parts, blobParts);
          return blob;
        }
        get [Symbol.toStringTag]() {
          return "Blob";
        }
        static [Symbol.hasInstance](object) {
          return (
            object &&
            typeof object === "object" &&
            typeof object.constructor === "function" &&
            (typeof object.stream === "function" ||
              typeof object.arrayBuffer === "function") &&
            /^(Blob|File)$/.test(object[Symbol.toStringTag])
          );
        }
      }),
      (_parts = new WeakMap()),
      (_type = new WeakMap()),
      (_size = new WeakMap()),
      (_endings = new WeakMap()),
      _a);
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true },
    });
    Blob2 = _Blob;
    fetch_blob_default = Blob2;
  },
});

// node_modules/fetch-blob/file.js
var _lastModified, _name, _a2, _File, File, file_default;
var init_file = __esm({
  "node_modules/fetch-blob/file.js"() {
    init_fetch_blob();
    _File =
      ((_a2 = class extends fetch_blob_default {
        constructor(fileBits, fileName, options = {}) {
          if (arguments.length < 2) {
            throw new TypeError(
              `Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`
            );
          }
          super(fileBits, options);
          __privateAdd(this, _lastModified, 0);
          __privateAdd(this, _name, "");
          if (options === null) options = {};
          const lastModified =
            options.lastModified === void 0
              ? Date.now()
              : Number(options.lastModified);
          if (!Number.isNaN(lastModified)) {
            __privateSet(this, _lastModified, lastModified);
          }
          __privateSet(this, _name, String(fileName));
        }
        get name() {
          return __privateGet(this, _name);
        }
        get lastModified() {
          return __privateGet(this, _lastModified);
        }
        get [Symbol.toStringTag]() {
          return "File";
        }
        static [Symbol.hasInstance](object) {
          return (
            !!object &&
            object instanceof fetch_blob_default &&
            /^(File)$/.test(object[Symbol.toStringTag])
          );
        }
      }),
      (_lastModified = new WeakMap()),
      (_name = new WeakMap()),
      _a2);
    File = _File;
    file_default = File;
  },
});

// node_modules/formdata-polyfill/esm.min.js
function formDataToBlob(F2, B = fetch_blob_default) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"),
    c = [],
    p = `--${b}\r
Content-Disposition: form-data; name="`;
  F2.forEach((v, n) =>
    typeof v == "string"
      ? c.push(
          p +
            e(n) +
            `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`
        )
      : c.push(
          p +
            e(n) +
            `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`,
          v,
          "\r\n"
        )
  );
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
var t, i, h, r, m, f, e, x, _d, _a3, FormData2;
var init_esm_min = __esm({
  "node_modules/formdata-polyfill/esm.min.js"() {
    init_fetch_blob();
    init_file();
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol);
    r = Math.random;
    m =
      "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(
        ","
      );
    f = (a, b, c) => (
      (a += ""),
      /^(Blob|File)$/.test(b && b[t])
        ? [
            ((c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob"), a),
            b.name !== c || b[t] == "blob" ? new file_default([b], c, b) : b,
          ]
        : [a, b + ""]
    );
    e = (c, f3) =>
      (f3 ? c : c.replace(/\r?\n|\r/g, "\r\n"))
        .replace(/\n/g, "%0A")
        .replace(/\r/g, "%0D")
        .replace(/"/g, "%22");
    x = (n, a, e2) => {
      if (a.length < e2) {
        throw new TypeError(
          `Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`
        );
      }
    };
    FormData2 =
      ((_a3 = class {
        constructor(...a) {
          __privateAdd(this, _d, []);
          if (a.length)
            throw new TypeError(
              `Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`
            );
        }
        get [t]() {
          return "FormData";
        }
        [i]() {
          return this.entries();
        }
        static [h](o) {
          return (
            o &&
            typeof o === "object" &&
            o[t] === "FormData" &&
            !m.some((m2) => typeof o[m2] != "function")
          );
        }
        append(...a) {
          x("append", arguments, 2);
          __privateGet(this, _d).push(f(...a));
        }
        delete(a) {
          x("delete", arguments, 1);
          a += "";
          __privateSet(
            this,
            _d,
            __privateGet(this, _d).filter(([b]) => b !== a)
          );
        }
        get(a) {
          x("get", arguments, 1);
          a += "";
          for (var b = __privateGet(this, _d), l = b.length, c = 0; c < l; c++)
            if (b[c][0] === a) return b[c][1];
          return null;
        }
        getAll(a, b) {
          x("getAll", arguments, 1);
          b = [];
          a += "";
          __privateGet(this, _d).forEach((c) => c[0] === a && b.push(c[1]));
          return b;
        }
        has(a) {
          x("has", arguments, 1);
          a += "";
          return __privateGet(this, _d).some((b) => b[0] === a);
        }
        forEach(a, b) {
          x("forEach", arguments, 1);
          for (var [c, d] of this) a.call(b, d, c, this);
        }
        set(...a) {
          x("set", arguments, 2);
          var b = [],
            c = true;
          a = f(...a);
          __privateGet(this, _d).forEach((d) => {
            d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
          });
          c && b.push(a);
          __privateSet(this, _d, b);
        }
        *entries() {
          yield* __privateGet(this, _d);
        }
        *keys() {
          for (var [a] of this) yield a;
        }
        *values() {
          for (var [, a] of this) yield a;
        }
      }),
      (_d = new WeakMap()),
      _a3);
  },
});

// node_modules/node-domexception/index.js
var require_node_domexception = __commonJS({
  "node_modules/node-domexception/index.js"(exports2, module2) {
    if (!globalThis.DOMException) {
      try {
        const { MessageChannel } = require("worker_threads"),
          port = new MessageChannel().port1,
          ab = new ArrayBuffer();
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        err.constructor.name === "DOMException" &&
          (globalThis.DOMException = err.constructor);
      }
    }
    module2.exports = globalThis.DOMException;
  },
});

// node_modules/fetch-blob/from.js
var import_node_fs,
  import_node_path,
  import_node_domexception,
  stat,
  _path,
  _start,
  _BlobDataItem,
  BlobDataItem;
var init_from = __esm({
  "node_modules/fetch-blob/from.js"() {
    import_node_fs = require("fs");
    import_node_path = require("path");
    import_node_domexception = __toESM(require_node_domexception(), 1);
    init_file();
    init_fetch_blob();
    ({ stat } = import_node_fs.promises);
    _BlobDataItem = class {
      constructor(options) {
        __privateAdd(this, _path, void 0);
        __privateAdd(this, _start, void 0);
        __privateSet(this, _path, options.path);
        __privateSet(this, _start, options.start);
        this.size = options.size;
        this.lastModified = options.lastModified;
        this.originalSize =
          options.originalSize === void 0 ? options.size : options.originalSize;
      }
      slice(start, end) {
        return new _BlobDataItem({
          path: __privateGet(this, _path),
          lastModified: this.lastModified,
          originalSize: this.originalSize,
          size: end - start,
          start: __privateGet(this, _start) + start,
        });
      }
      async *stream() {
        const { mtimeMs, size } = await stat(__privateGet(this, _path));
        if (mtimeMs > this.lastModified || this.originalSize !== size) {
          throw new import_node_domexception.default(
            "The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.",
            "NotReadableError"
          );
        }
        yield* (0, import_node_fs.createReadStream)(__privateGet(this, _path), {
          start: __privateGet(this, _start),
          end: __privateGet(this, _start) + this.size - 1,
        });
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
    };
    BlobDataItem = _BlobDataItem;
    _path = new WeakMap();
    _start = new WeakMap();
  },
});

// node_modules/node-fetch/src/utils/multipart-parser.js
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData,
});
function _fileName(headerValue) {
  const m2 = headerValue.match(
    /\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i
  );
  if (!m2) {
    return;
  }
  const match = m2[2] || m2[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m3, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct)) {
    throw new TypeError("Failed to fetch");
  }
  const m2 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m2) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser = new MultipartParser(m2[1] || m2[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData2();
  const onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file = new file_default(entryChunks, filename, { type: contentType });
    formData.append(entryName, file);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder = new TextDecoder("utf-8");
  decoder.decode();
  parser.onPartBegin = function () {
    parser.onPartData = onPartData;
    parser.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser.onHeaderField = function (ui8a) {
    headerField += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderValue = function (ui8a) {
    headerValue += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderEnd = function () {
    headerValue += decoder.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m3 = headerValue.match(
        /\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i
      );
      if (m3) {
        entryName = m3[2] || m3[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser.onPartData = appendToFile;
        parser.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser.write(chunk);
  }
  parser.end();
  return formData;
}
var s,
  S,
  f2,
  F,
  LF,
  CR,
  SPACE,
  HYPHEN,
  COLON,
  A,
  Z,
  lower,
  noop,
  MultipartParser;
var init_multipart_parser = __esm({
  "node_modules/node-fetch/src/utils/multipart-parser.js"() {
    init_from();
    init_esm_min();
    s = 0;
    S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++,
    };
    f2 = 1;
    F = {
      PART_BOUNDARY: f2,
      LAST_BOUNDARY: (f2 *= 2),
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A = 97;
    Z = 122;
    lower = (c) => c | 32;
    noop = () => {};
    MultipartParser = class {
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i2 = 0; i2 < boundary.length; i2++) {
          ui8a[i2] = boundary.charCodeAt(i2);
          this.boundaryChars[ui8a[i2]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i2 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i2;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i2, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i2 = 0; i2 < length_; i2++) {
          c = data[i2];
          switch (state) {
            case S.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else if (c !== CR) {
                  return;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                  state = S.END;
                  flags = 0;
                } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                  index = 0;
                  callback("onPartBegin");
                  state = S.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c !== boundary[index + 2]) {
                index = -2;
              }
              if (c === boundary[index + 2]) {
                index++;
              }
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD;
              mark("onHeaderField");
              index = 0;
            case S.HEADER_FIELD:
              if (c === CR) {
                clear("onHeaderField");
                state = S.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c === HYPHEN) {
                break;
              }
              if (c === COLON) {
                if (index === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S.HEADER_VALUE_START;
                break;
              }
              cl = lower(c);
              if (cl < A || cl > Z) {
                return;
              }
              break;
            case S.HEADER_VALUE_START:
              if (c === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              if (c === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA;
              mark("onPartData");
            case S.PART_DATA:
              previousIndex = index;
              if (index === 0) {
                i2 += boundaryEnd;
                while (i2 < bufferLength && !(data[i2] in boundaryChars)) {
                  i2 += boundaryLength;
                }
                i2 -= boundaryEnd;
                c = data[i2];
              }
              if (index < boundary.length) {
                if (boundary[index] === c) {
                  if (index === 0) {
                    dataCallback("onPartData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c === CR) {
                  flags |= F.PART_BOUNDARY;
                } else if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & F.PART_BOUNDARY) {
                  index = 0;
                  if (c === LF) {
                    flags &= ~F.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F.LAST_BOUNDARY) {
                  if (c === HYPHEN) {
                    callback("onPartEnd");
                    state = S.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(
                  lookbehind.buffer,
                  lookbehind.byteOffset,
                  lookbehind.byteLength
                );
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i2--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (
          (this.state === S.HEADER_FIELD_START && this.index === 0) ||
          (this.state === S.PART_DATA && this.index === this.boundary.length)
        ) {
          this.onPartEnd();
        } else if (this.state !== S.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  },
});

// netlify/functions/issues.js
var import_supabase_js = __toESM(require_main6());

// node_modules/node-fetch/src/index.js
var import_node_http2 = __toESM(require("http"), 1);
var import_node_https = __toESM(require("https"), 1);
var import_node_zlib = __toESM(require("zlib"), 1);
var import_node_stream2 = __toESM(require("stream"), 1);
var import_node_buffer2 = require("buffer");

// node_modules/data-uri-to-buffer/dist/index.js
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError(
      '`uri` does not appear to be a Data URI (must begin with "data:")'
    );
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i2 = 1; i2 < meta.length; i2++) {
    if (meta[i2] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i2]}`;
      if (meta[i2].indexOf("charset=") === 0) {
        charset = meta[i2].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var dist_default = dataUriToBuffer;

// node_modules/node-fetch/src/body.js
var import_node_stream = __toESM(require("stream"), 1);
var import_node_util = require("util");
var import_node_buffer = require("buffer");
init_fetch_blob();
init_esm_min();

// node_modules/node-fetch/src/errors/base.js
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};

// node_modules/node-fetch/src/errors/fetch-error.js
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};

// node_modules/node-fetch/src/utils/is.js
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return (
    typeof object === "object" &&
    typeof object.append === "function" &&
    typeof object.delete === "function" &&
    typeof object.get === "function" &&
    typeof object.getAll === "function" &&
    typeof object.has === "function" &&
    typeof object.set === "function" &&
    typeof object.sort === "function" &&
    object[NAME] === "URLSearchParams"
  );
};
var isBlob = (object) => {
  return (
    object &&
    typeof object === "object" &&
    typeof object.arrayBuffer === "function" &&
    typeof object.type === "string" &&
    typeof object.stream === "function" &&
    typeof object.constructor === "function" &&
    /^(Blob|File)$/.test(object[NAME])
  );
};
var isAbortSignal = (object) => {
  return (
    typeof object === "object" &&
    (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget")
  );
};
var isDomainOrSubdomain = (destination, original) => {
  const orig = new URL(original).hostname;
  const dest = new URL(destination).hostname;
  return orig === dest || orig.endsWith(`.${dest}`);
};

// node_modules/node-fetch/src/body.js
var pipeline = (0, import_node_util.promisify)(
  import_node_stream.default.pipeline
);
var INTERNALS = Symbol("Body internals");
var Body = class {
  constructor(body, { size = 0 } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = import_node_buffer.Buffer.from(body.toString());
    } else if (isBlob(body)) {
    } else if (import_node_buffer.Buffer.isBuffer(body)) {
    } else if (import_node_util.types.isAnyArrayBuffer(body)) {
      body = import_node_buffer.Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = import_node_buffer.Buffer.from(
        body.buffer,
        body.byteOffset,
        body.byteLength
      );
    } else if (body instanceof import_node_stream.default) {
    } else if (body instanceof FormData2) {
      body = formDataToBlob(body);
      boundary = body.type.split("=")[1];
    } else {
      body = import_node_buffer.Buffer.from(String(body));
    }
    let stream = body;
    if (import_node_buffer.Buffer.isBuffer(body)) {
      stream = import_node_stream.default.Readable.from(body);
    } else if (isBlob(body)) {
      stream = import_node_stream.default.Readable.from(body.stream());
    }
    this[INTERNALS] = {
      body,
      stream,
      boundary,
      disturbed: false,
      error: null,
    };
    this.size = size;
    if (body instanceof import_node_stream.default) {
      body.on("error", (error_) => {
        const error =
          error_ instanceof FetchBaseError
            ? error_
            : new FetchError(
                `Invalid response body while trying to fetch ${this.url}: ${error_.message}`,
                "system",
                error_
              );
        this[INTERNALS].error = error;
      });
    }
  }
  get body() {
    return this[INTERNALS].stream;
  }
  get bodyUsed() {
    return this[INTERNALS].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async formData() {
    const ct = this.headers.get("content-type");
    if (ct.startsWith("application/x-www-form-urlencoded")) {
      const formData = new FormData2();
      const parameters = new URLSearchParams(await this.text());
      for (const [name, value] of parameters) {
        formData.append(name, value);
      }
      return formData;
    }
    const { toFormData: toFormData2 } = await Promise.resolve().then(
      () => (init_multipart_parser(), multipart_parser_exports)
    );
    return toFormData2(this.body, ct);
  }
  async blob() {
    const ct =
      (this.headers && this.headers.get("content-type")) ||
      (this[INTERNALS].body && this[INTERNALS].body.type) ||
      "";
    const buf = await this.arrayBuffer();
    return new fetch_blob_default([buf], {
      type: ct,
    });
  }
  async json() {
    const text = await this.text();
    return JSON.parse(text);
  }
  async text() {
    const buffer = await consumeBody(this);
    return new TextDecoder().decode(buffer);
  }
  buffer() {
    return consumeBody(this);
  }
};
Body.prototype.buffer = (0, import_node_util.deprecate)(
  Body.prototype.buffer,
  "Please use 'response.arrayBuffer()' instead of 'response.buffer()'",
  "node-fetch#buffer"
);
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true },
  data: {
    get: (0, import_node_util.deprecate)(
      () => {},
      "data doesn't exist, use json(), text(), arrayBuffer(), or body instead",
      "https://github.com/node-fetch/node-fetch/issues/1000 (response)"
    ),
  },
});
async function consumeBody(data) {
  if (data[INTERNALS].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS].disturbed = true;
  if (data[INTERNALS].error) {
    throw data[INTERNALS].error;
  }
  const { body } = data;
  if (body === null) {
    return import_node_buffer.Buffer.alloc(0);
  }
  if (!(body instanceof import_node_stream.default)) {
    return import_node_buffer.Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error = new FetchError(
          `content size at ${data.url} over limit: ${data.size}`,
          "max-size"
        );
        body.destroy(error);
        throw error;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error) {
    const error_ =
      error instanceof FetchBaseError
        ? error
        : new FetchError(
            `Invalid response body while trying to fetch ${data.url}: ${error.message}`,
            "system",
            error
          );
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return import_node_buffer.Buffer.from(accum.join(""));
      }
      return import_node_buffer.Buffer.concat(accum, accumBytes);
    } catch (error) {
      throw new FetchError(
        `Could not create Buffer from response body for ${data.url}: ${error.message}`,
        "system",
        error
      );
    }
  } else {
    throw new FetchError(
      `Premature close of server response while trying to fetch ${data.url}`
    );
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance[INTERNALS];
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (
    body instanceof import_node_stream.default &&
    typeof body.getBoundary !== "function"
  ) {
    p1 = new import_node_stream.PassThrough({ highWaterMark });
    p2 = new import_node_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS].stream = p1;
    body = p2;
  }
  return body;
};
var getNonSpecFormDataBoundary = (0, import_node_util.deprecate)(
  (body) => body.getBoundary(),
  "form-data doesn't follow the spec and requires special treatment. Use alternative package",
  "https://github.com/node-fetch/node-fetch/issues/1167"
);
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (
    import_node_buffer.Buffer.isBuffer(body) ||
    import_node_util.types.isAnyArrayBuffer(body) ||
    ArrayBuffer.isView(body)
  ) {
    return null;
  }
  if (body instanceof FormData2) {
    return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
  }
  if (body instanceof import_node_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request[INTERNALS];
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (import_node_buffer.Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength()
      ? body.getLengthSync()
      : null;
  }
  return null;
};
var writeToStream = async (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else {
    await pipeline(body, dest);
  }
};

// node_modules/node-fetch/src/headers.js
var import_node_util2 = require("util");
var import_node_http = __toESM(require("http"), 1);
var validateHeaderName =
  typeof import_node_http.default.validateHeaderName === "function"
    ? import_node_http.default.validateHeaderName
    : (name) => {
        if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
          const error = new TypeError(
            `Header name must be a valid HTTP token [${name}]`
          );
          Object.defineProperty(error, "code", {
            value: "ERR_INVALID_HTTP_TOKEN",
          });
          throw error;
        }
      };
var validateHeaderValue =
  typeof import_node_http.default.validateHeaderValue === "function"
    ? import_node_http.default.validateHeaderValue
    : (name, value) => {
        if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
          const error = new TypeError(
            `Invalid character in header content ["${name}"]`
          );
          Object.defineProperty(error, "code", { value: "ERR_INVALID_CHAR" });
          throw error;
        }
      };
var Headers = class extends URLSearchParams {
  constructor(init) {
    let result = [];
    if (init instanceof Headers) {
      const raw = init.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init == null) {
    } else if (
      typeof init === "object" &&
      !import_node_util2.types.isBoxedPrimitive(init)
    ) {
      const method = init[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init]
          .map((pair) => {
            if (
              typeof pair !== "object" ||
              import_node_util2.types.isBoxedPrimitive(pair)
            ) {
              throw new TypeError(
                "Each header pair must be an iterable object"
              );
            }
            return [...pair];
          })
          .map((pair) => {
            if (pair.length !== 2) {
              throw new TypeError(
                "Each header pair must be a name/value tuple"
              );
            }
            return [...pair];
          });
      }
    } else {
      throw new TypeError(
        "Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)"
      );
    }
    result =
      result.length > 0
        ? result.map(([name, value]) => {
            validateHeaderName(name);
            validateHeaderValue(name, String(value));
            return [String(name).toLowerCase(), String(value)];
          })
        : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(
                target,
                String(name).toLowerCase(),
                String(value)
              );
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(
                target,
                String(name).toLowerCase()
              );
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(
                URLSearchParams.prototype.keys.call(target)
              ).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      },
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback, thisArg = void 0) {
    for (const name of this.keys()) {
      Reflect.apply(callback, thisArg, [this.get(name), name, this]);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(
  Headers.prototype,
  ["get", "entries", "forEach", "values"].reduce((result, property) => {
    result[property] = { enumerable: true };
    return result;
  }, {})
);
function fromRawHeaders(headers = []) {
  return new Headers(
    headers
      .reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2));
        }
        return result;
      }, [])
      .filter(([name, value]) => {
        try {
          validateHeaderName(name);
          validateHeaderValue(name, String(value));
          return true;
        } catch {
          return false;
        }
      })
  );
}

// node_modules/node-fetch/src/utils/is-redirect.js
var redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};

// node_modules/node-fetch/src/response.js
var INTERNALS2 = Symbol("Response internals");
var Response = class extends Body {
  constructor(body = null, options = {}) {
    super(body, options);
    const status = options.status != null ? options.status : 200;
    const headers = new Headers(options.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS2] = {
      type: "default",
      url: options.url,
      status,
      statusText: options.statusText || "",
      headers,
      counter: options.counter,
      highWaterMark: options.highWaterMark,
    };
  }
  get type() {
    return this[INTERNALS2].type;
  }
  get url() {
    return this[INTERNALS2].url || "";
  }
  get status() {
    return this[INTERNALS2].status;
  }
  get ok() {
    return this[INTERNALS2].status >= 200 && this[INTERNALS2].status < 300;
  }
  get redirected() {
    return this[INTERNALS2].counter > 0;
  }
  get statusText() {
    return this[INTERNALS2].statusText;
  }
  get headers() {
    return this[INTERNALS2].headers;
  }
  get highWaterMark() {
    return this[INTERNALS2].highWaterMark;
  }
  clone() {
    return new Response(clone(this, this.highWaterMark), {
      type: this.type,
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size,
      highWaterMark: this.highWaterMark,
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError(
        'Failed to execute "redirect" on "response": Invalid status code'
      );
    }
    return new Response(null, {
      headers: {
        location: new URL(url).toString(),
      },
      status,
    });
  }
  static error() {
    const response = new Response(null, { status: 0, statusText: "" });
    response[INTERNALS2].type = "error";
    return response;
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response.prototype, {
  type: { enumerable: true },
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true },
});

// node_modules/node-fetch/src/request.js
var import_node_url = require("url");
var import_node_util3 = require("util");

// node_modules/node-fetch/src/utils/get-search.js
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash =
    parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
};

// node_modules/node-fetch/src/utils/referrer.js
var import_node_net = require("net");
function stripURLForUseAsAReferrer(url, originOnly = false) {
  if (url == null) {
    return "no-referrer";
  }
  url = new URL(url);
  if (/^(about|blob|data):$/.test(url.protocol)) {
    return "no-referrer";
  }
  url.username = "";
  url.password = "";
  url.hash = "";
  if (originOnly) {
    url.pathname = "";
    url.search = "";
  }
  return url;
}
var ReferrerPolicy = /* @__PURE__ */ new Set([
  "",
  "no-referrer",
  "no-referrer-when-downgrade",
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url",
]);
var DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol)) {
    return true;
  }
  const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = (0, import_node_net.isIP)(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (/^(.+\.)*localhost$/.test(url.host)) {
    return false;
  }
  if (url.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url) {
  if (/^about:(blank|srcdoc)$/.test(url)) {
    return true;
  }
  if (url.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(
  request,
  { referrerURLCallback, referrerOriginCallback } = {}
) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (
        isUrlPotentiallyTrustworthy(referrerURL) &&
        !isUrlPotentiallyTrustworthy(currentURL)
      ) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (
        isUrlPotentiallyTrustworthy(referrerURL) &&
        !isUrlPotentiallyTrustworthy(currentURL)
      ) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (
        isUrlPotentiallyTrustworthy(referrerURL) &&
        !isUrlPotentiallyTrustworthy(currentURL)
      ) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}

// node_modules/node-fetch/src/request.js
var INTERNALS3 = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS3] === "object";
};
var doBadDataWarn = (0, import_node_util3.deprecate)(
  () => {},
  ".data is not a valid RequestInit property, use .body instead",
  "https://github.com/node-fetch/node-fetch/issues/1000 (request)"
);
var Request = class extends Body {
  constructor(input, init = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    if (parsedURL.username !== "" || parsedURL.password !== "") {
      throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
    }
    let method = init.method || input.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(method)) {
      method = method.toUpperCase();
    }
    if ("data" in init) {
      doBadDataWarn();
    }
    if (
      (init.body != null || (isRequest(input) && input.body !== null)) &&
      (method === "GET" || method === "HEAD")
    ) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init.body
      ? init.body
      : isRequest(input) && input.body !== null
      ? clone(input)
      : null;
    super(inputBody, {
      size: init.size || input.size || 0,
    });
    const headers = new Headers(init.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.set("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init) {
      signal = init.signal;
    }
    if (signal != null && !isAbortSignal(signal)) {
      throw new TypeError(
        "Expected signal to be an instanceof AbortSignal or EventTarget"
      );
    }
    let referrer = init.referrer == null ? input.referrer : init.referrer;
    if (referrer === "") {
      referrer = "no-referrer";
    } else if (referrer) {
      const parsedReferrer = new URL(referrer);
      referrer = /^about:(\/\/)?client$/.test(parsedReferrer)
        ? "client"
        : parsedReferrer;
    } else {
      referrer = void 0;
    }
    this[INTERNALS3] = {
      method,
      redirect: init.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal,
      referrer,
    };
    this.follow =
      init.follow === void 0
        ? input.follow === void 0
          ? 20
          : input.follow
        : init.follow;
    this.compress =
      init.compress === void 0
        ? input.compress === void 0
          ? true
          : input.compress
        : init.compress;
    this.counter = init.counter || input.counter || 0;
    this.agent = init.agent || input.agent;
    this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser =
      init.insecureHTTPParser || input.insecureHTTPParser || false;
    this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || "";
  }
  get method() {
    return this[INTERNALS3].method;
  }
  get url() {
    return (0, import_node_url.format)(this[INTERNALS3].parsedURL);
  }
  get headers() {
    return this[INTERNALS3].headers;
  }
  get redirect() {
    return this[INTERNALS3].redirect;
  }
  get signal() {
    return this[INTERNALS3].signal;
  }
  get referrer() {
    if (this[INTERNALS3].referrer === "no-referrer") {
      return "";
    }
    if (this[INTERNALS3].referrer === "client") {
      return "about:client";
    }
    if (this[INTERNALS3].referrer) {
      return this[INTERNALS3].referrer.toString();
    }
    return void 0;
  }
  get referrerPolicy() {
    return this[INTERNALS3].referrerPolicy;
  }
  set referrerPolicy(referrerPolicy) {
    this[INTERNALS3].referrerPolicy = validateReferrerPolicy(referrerPolicy);
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true },
  referrer: { enumerable: true },
  referrerPolicy: { enumerable: true },
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS3];
  const headers = new Headers(request[INTERNALS3].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (request.referrerPolicy === "") {
    request.referrerPolicy = DEFAULT_REFERRER_POLICY;
  }
  if (request.referrer && request.referrer !== "no-referrer") {
    request[INTERNALS3].referrer = determineRequestsReferrer(request);
  } else {
    request[INTERNALS3].referrer = "no-referrer";
  }
  if (request[INTERNALS3].referrer instanceof URL) {
    headers.set("Referer", request.referrer);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const options = {
    path: parsedURL.pathname + search,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent,
  };
  return {
    parsedURL,
    options,
  };
};

// node_modules/node-fetch/src/errors/abort-error.js
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};

// node_modules/node-fetch/src/index.js
init_esm_min();
init_from();
var supportedSchemas = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve, reject) => {
    const request = new Request(url, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(
        `node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(
          /:$/,
          ""
        )}" is not supported.`
      );
    }
    if (parsedURL.protocol === "data:") {
      const data = dist_default(request.url);
      const response2 = new Response(data, {
        headers: { "Content-Type": data.typeFull },
      });
      resolve(response2);
      return;
    }
    const send = (
      parsedURL.protocol === "https:"
        ? import_node_https.default
        : import_node_http2.default
    ).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error = new AbortError("The operation was aborted.");
      reject(error);
      if (
        request.body &&
        request.body instanceof import_node_stream2.default.Readable
      ) {
        request.body.destroy(error);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL.toString(), options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error) => {
      reject(
        new FetchError(
          `request to ${request.url} failed, reason: ${error.message}`,
          "system",
          error
        )
      );
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error) => {
      response.body.destroy(error);
    });
    if (process.version < "v14") {
      request_.on("socket", (s2) => {
        let endedWithEventsCount;
        s2.prependListener("end", () => {
          endedWithEventsCount = s2._eventsCount;
        });
        s2.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s2._eventsCount && !hadError) {
            const error = new Error("Premature close");
            error.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        let locationURL = null;
        try {
          locationURL =
            location === null ? null : new URL(location, request.url);
        } catch {
          if (request.redirect !== "manual") {
            reject(
              new FetchError(
                `uri requested responds with an invalid redirect URL: ${location}`,
                "invalid-redirect"
              )
            );
            finalize();
            return;
          }
        }
        switch (request.redirect) {
          case "error":
            reject(
              new FetchError(
                `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                "no-redirect"
              )
            );
            finalize();
            return;
          case "manual":
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(
                new FetchError(
                  `maximum redirect reached at: ${request.url}`,
                  "max-redirect"
                )
              );
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy,
            };
            if (!isDomainOrSubdomain(request.url, locationURL)) {
              for (const name of [
                "authorization",
                "www-authenticate",
                "cookie",
                "cookie2",
              ]) {
                requestOptions.headers.delete(name);
              }
            }
            if (
              response_.statusCode !== 303 &&
              request.body &&
              options_.body instanceof import_node_stream2.default.Readable
            ) {
              reject(
                new FetchError(
                  "Cannot follow redirect with body being a readable stream",
                  "unsupported-redirect"
                )
              );
              finalize();
              return;
            }
            if (
              response_.statusCode === 303 ||
              ((response_.statusCode === 301 || response_.statusCode === 302) &&
                request.method === "POST")
            ) {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy =
              parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(
              new TypeError(
                `Redirect option '${request.redirect}' is not a valid value of RequestRedirect`
              )
            );
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = (0, import_node_stream2.pipeline)(
        response_,
        new import_node_stream2.PassThrough(),
        (error) => {
          if (error) {
            reject(error);
          }
        }
      );
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark,
      };
      const codings = headers.get("Content-Encoding");
      if (
        !request.compress ||
        request.method === "HEAD" ||
        codings === null ||
        response_.statusCode === 204 ||
        response_.statusCode === 304
      ) {
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      const zlibOptions = {
        flush: import_node_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_node_zlib.default.Z_SYNC_FLUSH,
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_node_stream2.pipeline)(
          body,
          import_node_zlib.default.createGunzip(zlibOptions),
          (error) => {
            if (error) {
              reject(error);
            }
          }
        );
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_node_stream2.pipeline)(
          response_,
          new import_node_stream2.PassThrough(),
          (error) => {
            if (error) {
              reject(error);
            }
          }
        );
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_node_stream2.pipeline)(
              body,
              import_node_zlib.default.createInflate(),
              (error) => {
                if (error) {
                  reject(error);
                }
              }
            );
          } else {
            body = (0, import_node_stream2.pipeline)(
              body,
              import_node_zlib.default.createInflateRaw(),
              (error) => {
                if (error) {
                  reject(error);
                }
              }
            );
          }
          response = new Response(body, responseOptions);
          resolve(response);
        });
        raw.once("end", () => {
          if (!response) {
            response = new Response(body, responseOptions);
            resolve(response);
          }
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_node_stream2.pipeline)(
          body,
          import_node_zlib.default.createBrotliDecompress(),
          (error) => {
            if (error) {
              reject(error);
            }
          }
        );
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve(response);
    });
    writeToStream(request_, request).catch(reject);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = import_node_buffer2.Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer =
      headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error = new Error("Premature close");
        error.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error);
      }
    };
    socket.prependListener("close", onSocketClose);
    request.on("abort", () => {
      socket.removeListener("close", onSocketClose);
    });
    socket.on("data", (buf) => {
      properLastChunkReceived =
        import_node_buffer2.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived =
          import_node_buffer2.Buffer.compare(
            previousChunk.slice(-3),
            LAST_CHUNK.slice(0, 3)
          ) === 0 &&
          import_node_buffer2.Buffer.compare(
            buf.slice(-2),
            LAST_CHUNK.slice(3)
          ) === 0;
      }
      previousChunk = buf;
    });
  });
}

// netlify/functions/issues.js
var supabase = (0, import_supabase_js.createClient)(
  process.env.VITE_DATABASE_URL,
  process.env.VITE_DATABASE_PUBLIC_KEY
);
exports.handler = async function (event, context, callback) {
  if (!event.body) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "No Body Found" }),
    };
  }
  const body = JSON.parse(event.body);
  const gitHubIssue = body.gitHubIssue;
  const gitHubIssueId = gitHubIssue.id;
  const { data, error } = await supabase
    .from("card-mapping")
    .select(
      "id, miroAppCardId::text, gitHubIssueId, miroUserId::text, gitHubUsername, created_at, miroBoardId, gitHubIssueNumber, auth ( access_token )"
    )
    .eq("gitHubIssueId", gitHubIssueId);
  if (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "No Miro App Card found for this issue",
      }),
    };
  }
  if (data) {
    await Promise.all(
      data.map(async (item) => {
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${item.auth.access_token}`,
        };
        const options = {
          method: "PATCH",
          headers,
          body: JSON.stringify({
            data: {
              title: gitHubIssue.title,
              description: gitHubIssue.body,
            },
          }),
        };
        return new Promise((resolve, reject) => {
          fetch2(
            `https://api.miro.com/v2/boards/${item.miroBoardId}/app_cards/${item.miroAppCardId}`,
            options
          )
            .then((res) => {
              console.log("got response", res);
              if (res.ok) {
                return res.json();
              } else {
                resolve({
                  statusCode: res.status || 500,
                  body: res.statusText,
                });
              }
            })
            .then((data2) => {
              const response = {
                statusCode: 200,
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data2),
              };
              resolve(response);
            })
            .catch((err) => {
              console.log(err);
              resolve({ statusCode: err.statusCode || 500, body: err.message });
            });
        });
      })
    ).then(() => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Items Updated" }),
      };
    });
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Request sent" }),
  };
};
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
//# sourceMappingURL=issues.js.map
