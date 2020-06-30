'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sum = function (a, b) { return a + b; };
var toType = function (value) { return typeof value; };
var isObject = function (object) { return object !== null && typeof object === 'object'; };
var isPlainObject = function (object) { return Object.prototype.toString.call(object) === '[object Object]'; };
var isArray = function (value) { return Array.isArray(value); };
var isFunction = function (value) { return toType(value) === 'function'; };
var isBoolean = function (value) { return toType(value) === 'boolean'; };
var isString = function (value) { return toType(value) === 'string'; };
var isNumber = function (value) { return toType(value) === 'number'; };
var isUndefined = function (value) { return value === undefined; };
var isNull = function (value) { return value === null; };
var isEmptyString = function (value) { return value === ''; };
var isDate = function (value) { return value instanceof Date; };
var isEvent = function (value) { return value instanceof Event; };
var isFile = function (value) { return value instanceof File; };
var isUndefinedOrNull = function (value) { return isUndefined(value) || isNull(value); };
var RX_TRIM_LEFT = /^\s+/;
var RX_TRIM_RIGHT = /\s+$/;
var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_UN_KEBAB = /-(\w)/g;
var RX_HYPHENATE = /\B([A-Z])/g;
var RX_PROTOCOL = /^(https?:\/\/)?/;
var RX_DOMAIN = /(([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|/;
var RX_IP_ADDRESS = /((\d{1,3}\.){3}\d{1,3})/;
var RX_PORT_AND_PATH = /(:\d+)?(\/[-a-z\d%_.~+]*)*/;
var RX_QUERY_STRING = /(\?[;&a-z\d%_.~+=-]*)?/;
var RX_HASH_STRING = /(#[-a-z\d_]*)?$/;
var isMobile = function () {
    var check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|Windows Phone/i;
    return check.test(navigator.userAgent);
};
var isDesktop = function () { return !isMobile(); };
var checkValidUrl = function (url) {
    var pattern = new RegExp("" + RX_PROTOCOL + RX_DOMAIN + RX_IP_ADDRESS + RX_PORT_AND_PATH + RX_QUERY_STRING + RX_HASH_STRING, 'i');
    return pattern.test(url);
};
var lowerBound = function (num, limit) {
    return num >= limit ? num : limit;
};
var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
var capitalizeWords = function (str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};
var toSnakeCase = function (str) {
    // @ts-ignore
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(function (strLower) { return strLower.toLowerCase(); })
        .join('_');
};
var toString = function (val, spaces) {
    if (spaces === void 0) { spaces = 2; }
    return isUndefinedOrNull(val)
        ? ''
        : isArray(val) || (isPlainObject(val) && val.toString === Object.prototype.toString)
            ? JSON.stringify(val, null, spaces)
            : String(val);
};
var kebabCase = function (str) {
    return str.replace(RX_HYPHENATE, '-$1').toLowerCase();
};
var pascalCase = function (str) {
    str = kebabCase(str).replace(RX_UN_KEBAB, function (_, c) { return (c ? c.toUpperCase() : ''); });
    return str.charAt(0).toUpperCase() + str.slice(1);
};
var lowerFirst = function (str) {
    str = isString(str) ? str.trim() : String(str);
    return str.charAt(0).toLowerCase() + str.slice(1);
};
var upperFirst = function (str) {
    str = isString(str) ? str.trim() : String(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
};
var trimLeft = function (str) { return toString(str).replace(RX_TRIM_LEFT, ''); };
var trimRight = function (str) { return toString(str).replace(RX_TRIM_RIGHT, ''); };
var trim = function (str) { return toString(str).trim(); };
var lowerCase = function (str) { return toString(str).toLowerCase(); };
var upperCase = function (str) { return toString(str).toUpperCase(); };
var validateEmail = function (email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
};
/**
* @link https://www.qodo.co.uk/blog/javascript-restrict-keyboard-character-input/
* @param _myField
* @param evt
* @param restrictionType [digitsOnly, floatOnly, alphaOnly]
*/
var restrictCharacters = function (_myField, evt, restrictionType) {
    // @ts-ignore
    var self = _myField;
    var restrict;
    switch (restrictionType) {
        case 'digitsOnly':
            restrict = /[1234567890]/g;
            break;
        case 'floatOnly':
            restrict = /[0-9.]/g;
            break;
        case 'alphaOnly':
            restrict = /[A-Za-z]/g;
            break;
        default:
            return false;
    }
    var code = (typeof evt.which !== "undefined") ? evt.which : evt.keyCode;
    var character = String.fromCharCode(code);
    // if they pressed esc... remove focus from field...
    if (code === 27) {
        self.blur();
        return false;
    }
    // ignore if they are press other keys
    // strange because code: 39 is the down key AND ' key...
    // and DEL also equals .
    if (!evt.ctrlKey &&
        code !== 9 &&
        code !== 8 &&
        code !== 36 &&
        code !== 37 &&
        code !== 38 &&
        (code !== 39 || (code === 39 && character === "'")) &&
        code !== 40) {
        return !!character.match(restrict);
    }
};
var keydownOnlyNumber = function (evt) {
    var charCode = (typeof evt.which !== "undefined") ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
    }
    else {
        return true;
    }
};
/**
 *
 * @param input
 * @returns {string|*}
 */
var decodeString = function (input) {
    if (/&amp;|&quot;|&#39;|'&lt;|&gt;/.test(input)) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }
    return input;
};
function generateRandom(n) {
    return Math.round(Math.random() * n);
}
function mod(dividendo, divisor) {
    return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
}
var generateCpf = function (mask) {
    if (mask === void 0) { mask = false; }
    var n = 9;
    var n1 = generateRandom(n);
    var n2 = generateRandom(n);
    var n3 = generateRandom(n);
    var n4 = generateRandom(n);
    var n5 = generateRandom(n);
    var n6 = generateRandom(n);
    var n7 = generateRandom(n);
    var n8 = generateRandom(n);
    var n9 = generateRandom(n);
    var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    d1 = 11 - (mod(d1, 11));
    if (d1 >= 10)
        d1 = 0;
    var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
    d2 = 11 - (mod(d2, 11));
    if (d2 >= 10)
        d2 = 0;
    if (mask) {
        return "" + n1 + n2 + n3 + "." + n4 + n5 + n6 + "." + n7 + n8 + n9 + "-" + d1 + d2;
    }
    return "" + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
};
var humanFileSize = function (bytes, decimals) {
    if (decimals === void 0) { decimals = 2; }
    if (bytes === 0)
        return '0 Bytes';
    var k = 1024;
    var dm = decimals < 0 ? 0 : decimals;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
var deepCopy = function (obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    var copy = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(function (key) {
        copy[key] = deepCopy(obj[key]);
    });
    return copy;
};
var toCurrency = function (value, prefix, $suffix) {
    if (prefix === void 0) { prefix = 'R$'; }
    if ($suffix === void 0) { $suffix = null; }
    var val = (value).toFixed(2).replace('.', ',');
    return prefix + " " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " " + $suffix;
};
var firstAndLastName = function (fullName) {
    var names = fullName.split(' ');
    var firstName;
    var lastName;
    if (!names || names.length <= 1) {
        firstName = names;
        lastName = '';
    }
    else {
        firstName = names[0];
        lastName = names.pop();
    }
    return firstName + " " + lastName;
};

exports.RX_DOMAIN = RX_DOMAIN;
exports.RX_HASH_STRING = RX_HASH_STRING;
exports.RX_HYPHENATE = RX_HYPHENATE;
exports.RX_IP_ADDRESS = RX_IP_ADDRESS;
exports.RX_PORT_AND_PATH = RX_PORT_AND_PATH;
exports.RX_PROTOCOL = RX_PROTOCOL;
exports.RX_QUERY_STRING = RX_QUERY_STRING;
exports.RX_REGEXP_REPLACE = RX_REGEXP_REPLACE;
exports.RX_TRIM_LEFT = RX_TRIM_LEFT;
exports.RX_TRIM_RIGHT = RX_TRIM_RIGHT;
exports.RX_UN_KEBAB = RX_UN_KEBAB;
exports.capitalizeWords = capitalizeWords;
exports.checkValidUrl = checkValidUrl;
exports.decodeString = decodeString;
exports.deepCopy = deepCopy;
exports.firstAndLastName = firstAndLastName;
exports.generateCpf = generateCpf;
exports.humanFileSize = humanFileSize;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isDesktop = isDesktop;
exports.isEmptyString = isEmptyString;
exports.isEvent = isEvent;
exports.isFile = isFile;
exports.isFunction = isFunction;
exports.isMobile = isMobile;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.isUndefinedOrNull = isUndefinedOrNull;
exports.kebabCase = kebabCase;
exports.keydownOnlyNumber = keydownOnlyNumber;
exports.lowerBound = lowerBound;
exports.lowerCase = lowerCase;
exports.lowerFirst = lowerFirst;
exports.pascalCase = pascalCase;
exports.restrictCharacters = restrictCharacters;
exports.sleep = sleep;
exports.sum = sum;
exports.toCurrency = toCurrency;
exports.toSnakeCase = toSnakeCase;
exports.toString = toString;
exports.toType = toType;
exports.trim = trim;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.upperCase = upperCase;
exports.upperFirst = upperFirst;
exports.validateEmail = validateEmail;
//# sourceMappingURL=index.js.map
