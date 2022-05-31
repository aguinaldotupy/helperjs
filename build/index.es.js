/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var sum = function (a, b) { return a + b; };
var toType = function (value) { return typeof value; };
var isObject = function (object) { return object !== null && typeof object === 'object'; };
var isPlainObject = function (object) { return Object.prototype.toString.call(object) === '[object Object]'; };
var isArray = function (value) { return Array.isArray(value); };
var isFunction = function (value) { return toType(value) === 'function'; };
var isBoolean = function (value) { return toType(value) === 'boolean'; };
var isString = function (value) { return toType(value) === 'string'; };
var isNumber = function (value) { return toType(value) === 'number'; };
var isUndefined = function (value, options) {
    if (options === void 0) { options = {
        isStrict: true
    }; }
    if (options.isStrict) {
        return value === undefined;
    }
    return value == undefined;
};
var isNull = function (value, options) {
    if (options === void 0) { options = {
        isStrict: true
    }; }
    if (options.isStrict) {
        return value === null;
    }
    return value == 'null';
};
var isEmptyString = function (value) { return value === ''; };
var isDate = function (value) { return value instanceof Date; };
var isEvent = function (value) {
    if (toType(value) === 'object') {
        return value instanceof Event;
    }
    return false;
};
var isFile = function (value) { return value instanceof File; };
var isUndefinedOrNull = function (value, options) {
    if (options === void 0) { options = {
        isStrict: true
    }; }
    return isUndefined(value, options) || isNull(value, options);
};
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
var RX_SNAKE_CASE = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;
var RX_VERIFY_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var RX_FORMAT_CNPJ = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
var RX_FORMAT_CURRENCY = /\B(?=(\d{3})+(?!\d))/g;
var RX_UUID_V4 = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
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
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
var toSnakeCase = function (str) {
    // @ts-ignore
    return str.match(RX_SNAKE_CASE)
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
    return RX_VERIFY_EMAIL.test(email.toLowerCase());
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
var toCurrency = function (value, options, suffix) {
    if (options === void 0) { options = {
        locale: 'pt-BR',
        currency: 'BRL',
        maximumFractionDigits: 2,
    }; }
    if (suffix === void 0) { suffix = ''; }
    var locale, currency, strCurrency, prefix, maximumFractionDigits;
    if (!isNumber(value)) {
        value = parseFloat(String(value));
    }
    if (isObject(options)) {
        locale = options.locale || 'pt-BR';
        currency = options.currency || 'BRL';
        maximumFractionDigits = options.maximumFractionDigits || 2;
    }
    else if (isString(options)) {
        prefix = String(options);
        if (!isEmptyString(prefix)) {
            strCurrency = prefix.trim();
        }
        if (!isEmptyString(suffix) || suffix.trim().length > 1) {
            strCurrency = suffix.trim();
        }
        switch (strCurrency) {
            case 'R$':
                locale = 'pt-BR';
                currency = 'BRL';
                break;
            case '€':
                locale = 'pt-PT';
                currency = 'EUR';
                break;
        }
        console.warn("toCurrency: options string deprecated, new version {\n            locale: '" + locale + "',\n            currency: '" + currency + "',\n            maximumFractionDigits: 2,\n        }");
    }
    switch (currency) {
        case '€':
            currency = 'EUR';
            break;
        case 'R$':
            currency = 'BRL';
            break;
    }
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: maximumFractionDigits
    }).format(value);
};
var firstAndLastName = function (fullName) {
    var names = fullName.split(' ');
    return toTitleCase(names.shift() + " " + (names.pop() || '')).trim();
};
var chunkArray = function (array, size) {
    var result = [];
    for (var i = 0; i < array.length; i += size) {
        var chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
};
var validateCpf = function (val) {
    if (isUndefined(val) || isNull(val)) {
        return false;
    }
    var cpf = val.toString().trim();
    cpf = cpf.replace(/\./g, '');
    cpf = cpf.replace('-', '');
    cpf = cpf.split('');
    var v1 = 0;
    var v2 = 0;
    var aux = false;
    for (var i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
            aux = true;
        }
    }
    if (!aux) {
        return false;
    }
    for (var i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
        v1 += cpf[i] * p;
    }
    v1 = (v1 * 10) % 11;
    if (v1 == 10) {
        v1 = 0;
    }
    if (v1 != cpf[9]) {
        return false;
    }
    for (var i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
        v2 += cpf[i] * p;
    }
    v2 = (v2 * 10) % 11;
    if (v2 == 10) {
        v2 = 0;
    }
    return v2 == cpf[10];
};
function digit(numbers) {
    var index = 2;
    var sum = __spread(numbers).reverse().reduce(function (buffer, number) {
        buffer += Number(number) * index;
        index = index === 9 ? 2 : index + 1;
        return buffer;
    }, 0);
    var mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
}
/**
 * Validates a CNPJ
 * @param cnpj The CNPJ value to be validated
 */
var validateCnpj = function (cnpj) {
    // Remove period, slash and dash characters from CNPJ
    var cleaned = cnpj.toString().replace(/[.\/\-]/g, '');
    if (
    // Must be defined
    !cleaned ||
        // Must have 14 characters
        cleaned.length !== 14 ||
        // Must be digits and not be sequential characters (e.g.: 11111111111111, etc)
        /^(\d)\1+$/.test(cleaned)) {
        return false;
    }
    var registration = cleaned.substr(0, 12);
    registration += digit(registration);
    registration += digit(registration);
    return registration.substr(-2) === cleaned.substr(-2);
};
/**
 * Formats a CNPJ value
 * @param cnpj The CNPJ to be formatted
 * @return The formatted CNPJ
 */
var maskCnpj = function (cnpj) {
    return (cnpj
        .toString()
        // Remove non digit characters
        .replace(/[^\d]/g, '')
        // Apply formatting
        .replace(RX_FORMAT_CNPJ, '$1.$2.$3/$4-$5'));
};
/**
 * Generates a valid CNPJ
 * @return The generated CNPJ
 */
var generateCnpj = function (mask) {
    if (mask === void 0) { mask = true; }
    var cnpj = '';
    var i = 12;
    while (i--) {
        cnpj += Math.floor(Math.random() * 9);
    }
    cnpj += digit(cnpj);
    cnpj += digit(cnpj);
    if (mask) {
        cnpj = maskCnpj(cnpj);
    }
    return cnpj;
};
var generateEmail = function (lengthUserName, lengthDomain) {
    if (lengthUserName === void 0) { lengthUserName = 10; }
    if (lengthDomain === void 0) { lengthDomain = lengthUserName / 2; }
    var strValues = "abcdefghijklmnopqrstuvwxyz0123456789";
    var strEmail = "";
    var strTmp;
    for (var i = 0; i < lengthUserName; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < lengthDomain; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com";
    return strEmail;
};
var filterObject = function (object, callback) { return Object.entries(object)
    .reduce(function (prev, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    return (__assign(__assign({}, prev), (callback(key, value) ? (_b = {}, _b[key] = value, _b) : {})));
}, {}); };
var calcPercentage = function (partialValue, totalValue) {
    return parseFloat(((100 * partialValue) / totalValue).toFixed(2));
};
function debounce(callback, waitMilliseconds, options) {
    if (waitMilliseconds === void 0) { waitMilliseconds = 50; }
    if (options === void 0) { options = {
        isImmediate: false
    }; }
    var timeoutId;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var doLater = function () {
            timeoutId = undefined;
            if (!options.isImmediate) {
                callback.apply(context, args);
            }
        };
        var shouldCallNow = options.isImmediate && timeoutId === undefined;
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(doLater, waitMilliseconds);
        if (shouldCallNow) {
            callback.apply(context, args);
        }
    };
}
var uuidv4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
var isUuidV4 = function (string) {
    return (new RegExp(RX_UUID_V4)).test(string);
};
var isValidValue = function (value) {
    return !isInvalidValue(value);
};
var isInvalidValue = function (value) {
    if (isString(value)) {
        value = value.trim();
    }
    return [null, 'null', '', ' ', undefined, 'undefined'].includes(value);
};
var forEachObject = function (obj, fn, path) {
    for (var key in obj) {
        var deepPath = path ? path + "." + key : key;
        // Note that we always use obj[key] because it might be mutated by forEach
        fn.call(obj, obj[key], key, obj, deepPath);
        recursiveIterator(obj[key], fn, deepPath);
    }
};
var forEachArray = function (array, fn, path) {
    array.forEach(function (value, index, arr) {
        var deepPath = path + "[" + index + "]";
        fn.call(arr, value, index, arr, deepPath);
        // Note that we use arr[index] because it might be mutated by forEach
        recursiveIterator(arr[index], fn, deepPath);
    });
};
/**
 * Recursively iterate over an object or array.
 * @param value
 * @param callback - function to call on each value in the object or array (value, key, object, path)
 * `value` is the current property value
 * `key` is the current property name
 * `subject` is either an array or an object
 * `path` is the iteration path, e.g.: 'prop2[0]' and 'prop4.prop5'
 * @param path
 */
var recursiveIterator = function (value, callback, path) {
    if (path === void 0) { path = ''; }
    path = path || '';
    if (Array.isArray(value)) {
        forEachArray(value, callback, path);
    }
    else if (isPlainObject(value)) {
        forEachObject(value, callback, path);
    }
};
/**
 * @param object
 */
var makeFormDataFromObject = function (object) {
    var formData = new FormData();
    recursiveIterator(object, function (value, _key, _subject, path) {
        formData.append(path, value);
    });
    return formData;
};

export { RX_DOMAIN, RX_FORMAT_CNPJ, RX_FORMAT_CURRENCY, RX_HASH_STRING, RX_HYPHENATE, RX_IP_ADDRESS, RX_PORT_AND_PATH, RX_PROTOCOL, RX_QUERY_STRING, RX_REGEXP_REPLACE, RX_SNAKE_CASE, RX_TRIM_LEFT, RX_TRIM_RIGHT, RX_UN_KEBAB, RX_UUID_V4, RX_VERIFY_EMAIL, calcPercentage, capitalizeWords, checkValidUrl, chunkArray, debounce, decodeString, deepCopy, filterObject, firstAndLastName, forEachArray, forEachObject, generateCnpj, generateCpf, generateEmail, humanFileSize, isArray, isBoolean, isDate, isDesktop, isEmptyString, isEvent, isFile, isFunction, isInvalidValue, isMobile, isNull, isNumber, isObject, isPlainObject, isString, isUndefined, isUndefinedOrNull, isUuidV4, isValidValue, kebabCase, keydownOnlyNumber, lowerBound, lowerCase, lowerFirst, makeFormDataFromObject, maskCnpj, pascalCase, recursiveIterator, restrictCharacters, sleep, sum, toCurrency, toSnakeCase, toString, toTitleCase, toType, trim, trimLeft, trimRight, upperCase, upperFirst, uuidv4, validateCnpj, validateCpf, validateEmail };
//# sourceMappingURL=index.es.js.map
