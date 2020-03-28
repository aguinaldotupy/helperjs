'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sum = function (a, b) { return a + b; };
var isMobile = function () {
    var check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|Windows Phone/i;
    return check.test(navigator.userAgent);
};
var isDesktop = function () { return !isMobile(); };
var checkValidUrl = function (url) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
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
var isNumber = function (evt) {
    var charCode = (typeof evt.which !== "undefined") ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
    }
    else {
        return true;
    }
};
var AddressManager = /** @class */ (function () {
    function AddressManager(urlIBGE, configuration) {
        this.urlIBGE = urlIBGE;
        this.configuration = configuration;
        this.urlBaseIBGE = 'https://servicodados.ibge.gov.br/api/v1/localidades';
        this.config = {
            method: 'GET',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        this.urlIBGE = urlIBGE || this.urlBaseIBGE;
        this.configuration = configuration || this.config;
    }
    AddressManager.prototype.states = function () {
        return fetch(this.urlIBGE + "/estados", this.configuration).then(function (response) { return response.json(); });
    };
    AddressManager.prototype.cities = function (codeState) {
        if (codeState === void 0) { codeState = null; }
        var url = codeState ? this.urlIBGE + "/estados/" + codeState + "/municipios" : this.urlIBGE + "/municipios";
        return fetch(url, this.configuration).then(function (response) { return response.json(); });
    };
    AddressManager.prototype.neighborhoods = function (codeCity) {
        if (codeCity === void 0) { codeCity = null; }
        var url = codeCity ? this.urlIBGE + "/municipios/" + codeCity + "/subdistritos" : this.urlIBGE + "/subdistritos";
        return fetch(url, this.configuration).then(function (response) { return response.json(); });
    };
    AddressManager.prototype.searchCep = function (cep) {
        // Nova variável "cep" somente com dígitos.
        var newCep = cep.replace(/\D/g, '');
        // Expressão regular para validar o CEP.
        var validateZipCode = /^[0-9]{8}$/;
        if (!validateZipCode.test(newCep)) {
            return 'Formato de CEP inválido.';
        }
        return fetch("https://viacep.com.br/ws/" + cep + "/json/", this.configuration)
            .then(function (response) { return response.json(); });
    };
    return AddressManager;
}());

exports.AddressManager = AddressManager;
exports.capitalizeWords = capitalizeWords;
exports.checkValidUrl = checkValidUrl;
exports.isDesktop = isDesktop;
exports.isMobile = isMobile;
exports.isNumber = isNumber;
exports.lowerBound = lowerBound;
exports.restrictCharacters = restrictCharacters;
exports.sleep = sleep;
exports.sum = sum;
exports.toSnakeCase = toSnakeCase;
exports.validateEmail = validateEmail;
//# sourceMappingURL=index.js.map
