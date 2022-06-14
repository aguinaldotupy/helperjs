import { DebounceProcedure, DebounceOptions, StrictOption, ToCurrencyOptions } from './types';
import {IFnRecursiveIterator} from "./interfaces";

export const sum = (a: number, b: number): number => a + b;

export const toType = (value: any) => typeof value

export const isObject = (object: any) => object !== null && typeof object === 'object'

export const isPlainObject = (object: any) => Object.prototype.toString.call(object) === '[object Object]'

export const isArray = (value: any) => Array.isArray(value)

export const isFunction = (value: any) => toType(value) === 'function'

export const isBoolean = (value: any) => toType(value) === 'boolean'

export const isString = (value: any) => toType(value) === 'string'

export const isNumber = (value: any) => toType(value) === 'number'

export const isUndefined = (value: any, options: StrictOption = {
    isStrict: true
}) => {
    if (options.isStrict) {
        return value === undefined
    }

    return value == undefined
};

export const isNull = (value: any, options: StrictOption = {
    isStrict: true
}) => {
    if (options.isStrict) {
        return value === null
    }

    return  value == 'null'
};

export const isEmptyString = (value: string) => value === ''

export const isDate = (value: any) => value instanceof Date

export const isEvent = (value: any) => {
    if (toType(value) === 'object') {
        return value instanceof Event
    }

    return false;
}

export const isFile = (value: any) => value instanceof File

export const isUndefinedOrNull = (value: any, options: StrictOption = {
    isStrict: true
}) => {
    return isUndefined(value, options) || isNull(value, options)
}

export const RX_TRIM_LEFT = /^\s+/
export const RX_TRIM_RIGHT = /\s+$/
export const RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g
export const RX_UN_KEBAB = /-(\w)/g
export const RX_HYPHENATE = /\B([A-Z])/g
export const RX_PROTOCOL = /^(https?:\/\/)?/
export const RX_DOMAIN = /(([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|/
export const RX_IP_ADDRESS = /((\d{1,3}\.){3}\d{1,3})/
export const RX_PORT_AND_PATH = /(:\d+)?(\/[-a-z\d%_.~+]*)*/
export const RX_QUERY_STRING = /(\?[;&a-z\d%_.~+=-]*)?/
export const RX_HASH_STRING = /(#[-a-z\d_]*)?$/
export const RX_SNAKE_CASE = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
export const RX_VERIFY_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const RX_FORMAT_CNPJ = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/
export const RX_FORMAT_CURRENCY = /\B(?=(\d{3})+(?!\d))/g
export const RX_UUID_V4 = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const isMobile = () => {
    const check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|Windows Phone/i
    return check.test(navigator.userAgent)
};

export const isDesktop = () => !isMobile();

export const checkValidUrl = (url: string) => {
    const pattern = new RegExp(
        `${RX_PROTOCOL}${RX_DOMAIN}${RX_IP_ADDRESS}${RX_PORT_AND_PATH}${RX_QUERY_STRING}${RX_HASH_STRING}`,
        'i'
    );
    return pattern.test(url)
};

export const lowerBound = (num: number, limit: number) => {
    return num >= limit ? num : limit
};

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
};

export const capitalizeWords = (str: String) => {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
};

export function toTitleCase(str: string) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

export const toSnakeCase = (str: String) => {
    // @ts-ignore
    return str.match(RX_SNAKE_CASE)
        .map(strLower => strLower.toLowerCase())
        .join('_');
}

export const toString = (val: string, spaces = 2) => {
    return isUndefinedOrNull(val)
        ? ''
        : isArray(val) || (isPlainObject(val) && val.toString === Object.prototype.toString)
            ? JSON.stringify(val, null, spaces)
            : String(val)
}

export const kebabCase = (str: string) => {
    return str.replace(RX_HYPHENATE, '-$1').toLowerCase()
}

export const pascalCase = (str: string) => {
    str = kebabCase(str).replace(RX_UN_KEBAB, (_, c) => (c ? c.toUpperCase() : ''))
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const lowerFirst = (str: string) => {
    str = isString(str) ? str.trim() : String(str)
    return str.charAt(0).toLowerCase() + str.slice(1)
}

export const upperFirst = (str: string) => {
    str = isString(str) ? str.trim() : String(str)
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const trimLeft = (str: string) => toString(str).replace(RX_TRIM_LEFT, '')

export const trimRight = (str: any) => toString(str).replace(RX_TRIM_RIGHT, '')

export const trim = (str: any) => toString(str).trim()

export const lowerCase = (str: any) => toString(str).toLowerCase()

export const upperCase = (str: any) => toString(str).toUpperCase()


export const validateEmail = (email: String) => {
    return RX_VERIFY_EMAIL.test(email.toLowerCase())
};

/**
 * @link https://www.qodo.co.uk/blog/javascript-restrict-keyboard-character-input/
 * @param _myField
 * @param evt
 * @param restrictionType [digitsOnly, floatOnly, alphaOnly]
 */
export const restrictCharacters = (_myField: HTMLOrSVGElement, evt: KeyboardEvent, restrictionType: string): any => {
    // @ts-ignore
    const self = _myField;
    let restrict;
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
            return false
    }

    let code = (typeof evt.which !== "undefined") ? evt.which : evt.keyCode;

    const character = String.fromCharCode(code);
    // if they pressed esc... remove focus from field...
    if (code === 27) {
        self.blur();
        return false
    }
    // ignore if they are press other keys
    // strange because code: 39 is the down key AND ' key...
    // and DEL also equals .
    if (
        !evt.ctrlKey &&
        code !== 9 &&
        code !== 8 &&
        code !== 36 &&
        code !== 37 &&
        code !== 38 &&
        (code !== 39 || (code === 39 && character === "'")) &&
        code !== 40 &&
        //Hammmeeeer... code numeric keypad
        ! (code >= 96 && code <= 105 || code === 110)
    ) {
        return !!character.match(restrict)
    }
};

export const keydownOnlyNumber = (evt: KeyboardEvent): any => {
    const charCode = (typeof evt.which !== "undefined") ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault()
    } else {
        return true
    }
};

/**
 *
 * @param input
 * @returns {string|*}
 */
export const decodeString = (input: string) => {
    if (/&amp;|&quot;|&#39;|'&lt;|&gt;/.test(input)) {
        let doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }
    return input;
};

function generateRandom(n: number) {
    return Math.round(Math.random() * n);
}

function mod(dividendo: number, divisor: number) {
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

export const generateCpf = (mask = false) => {
    let n = 9;
    let n1 = generateRandom(n);
    let n2 = generateRandom(n);
    let n3 = generateRandom(n);
    let n4 = generateRandom(n);
    let n5 = generateRandom(n);
    let n6 = generateRandom(n);
    let n7 = generateRandom(n);
    let n8 = generateRandom(n);
    let n9 = generateRandom(n);
    let d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
    d1 = 11 - (mod(d1,11));
    if (d1>=10) d1 = 0;
    let d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
    d2 = 11 - (mod(d2,11));
    if (d2>=10) d2 = 0;

    if (mask) {
        return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
    }

    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
}

export const humanFileSize = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const deepCopy = (obj: { [x: string]: any; } | null) => {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    const copy = Array.isArray(obj) ? [] : {}

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key])
    })

    return copy
}

export const toCurrency = (value: number, options: ToCurrencyOptions = {
    locale: 'pt-BR',
    currency: 'BRL',
    maximumFractionDigits: 2,
}, suffix = '') => {
    let locale, currency, strCurrency, prefix, maximumFractionDigits;

    if (! isNumber(value)) {
        value = parseFloat(String(value))
    }

    if (isObject(options)) {
        locale = options.locale || 'pt-BR';
        currency = options.currency || 'BRL';
        maximumFractionDigits = options.maximumFractionDigits || 2
    } else if (isString(options)) {
        prefix = String(options);

        if (! isEmptyString(prefix)) {
            strCurrency = prefix.trim();
        }

        if (! isEmptyString(suffix) || suffix.trim().length > 1) {
            strCurrency = suffix.trim();
        }

        switch (strCurrency) {
            case 'R$':
                locale = 'pt-BR';
                currency = 'BRL';
                break;
            case '€':
                locale = 'pt-PT';
                currency = 'EUR'
                break;
            default:
        }

        console.warn(`toCurrency: options string deprecated, new version {
            locale: '${locale}',
            currency: '${currency}',
            maximumFractionDigits: 2,
        }`)
    }

    switch (currency) {
        case '€':
            currency = 'EUR'
        break;

        case 'R$':
            currency = 'BRL';
            break;
        default:
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        maximumFractionDigits
    }).format(value)
}

export const firstAndLastName = (fullName: string) => {
    const names = fullName.split(' ');
    return toTitleCase(`${names.shift()} ${names.pop() || ''}`).trim();
}

export const chunkArray = (array: string | any[], size: number) => {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
}

export const validateCpf = (val: any) => {
    if (isUndefined(val) || isNull(val)) {
        return false;
    }

    let cpf = val.toString().trim()

    cpf = cpf.replace(/\./g, '')
    cpf = cpf.replace('-', '')
    cpf = cpf.split('')

    let v1 = 0
    let v2 = 0
    let aux = false

    for (let i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
            aux = true
        }
    }

    if (!aux) {
        return false
    }

    for (let i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
        v1 += cpf[i] * p
    }

    v1 = (v1 * 10) % 11

    if (v1 == 10) {
        v1 = 0
    }

    if (v1 != cpf[9]) {
        return false
    }

    for (let i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
        v2 += cpf[i] * p
    }

    v2 = (v2 * 10) % 11

    if (v2 == 10) {
        v2 = 0
    }

    return v2 == cpf[10];
};


function digit(numbers: string): number {
    let index = 2
    const sum = [...numbers].reverse().reduce((buffer, number) => {
        buffer += Number(number) * index
        index = index === 9 ? 2 : index + 1
        return buffer
    }, 0)

    const mod = sum % 11

    return mod < 2 ? 0 : 11 - mod
}

/**
 * Validates a CNPJ
 * @param cnpj The CNPJ value to be validated
 */
export const validateCnpj = (cnpj: string | number): boolean => {
    // Remove period, slash and dash characters from CNPJ
    const cleaned = cnpj.toString().replace(/[.\/\-]/g, '')

    if (
        // Must be defined
        !cleaned ||
        // Must have 14 characters
        cleaned.length !== 14 ||
        // Must be digits and not be sequential characters (e.g.: 11111111111111, etc)
        /^(\d)\1+$/.test(cleaned)
    ) {
        return false
    }

    let registration = cleaned.substr(0, 12)
    registration += digit(registration)
    registration += digit(registration)

    return registration.substr(-2) === cleaned.substr(-2)
}

/**
 * Formats a CNPJ value
 * @param cnpj The CNPJ to be formatted
 * @return The formatted CNPJ
 */
export const maskCnpj = (cnpj: string | number): string  => {
    return (
        cnpj
            .toString()
            // Remove non digit characters
            .replace(/[^\d]/g, '')
            // Apply formatting
            .replace(RX_FORMAT_CNPJ, '$1.$2.$3/$4-$5')
    )
}

/**
 * Generates a valid CNPJ
 * @return The generated CNPJ
 */
export const generateCnpj = (mask = true): string => {
    let cnpj = ''
    let i = 12

    while (i--) {
        cnpj += Math.floor(Math.random() * 9)
    }

    cnpj += digit(cnpj)
    cnpj += digit(cnpj)

    if (mask) {
        cnpj = maskCnpj(cnpj)
    }

    return cnpj
}

export const generateEmail = (lengthUserName = 10, lengthDomain = lengthUserName / 2) => {
    let strValues = "abcdefghijklmnopqrstuvwxyz0123456789";
    let strEmail = "";
    let strTmp;

    for (let i = 0; i < lengthUserName; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }

    strTmp = "";
    strEmail = strEmail + "@";

    for (let j = 0; j < lengthDomain; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }

    strEmail = strEmail + ".com"

    return strEmail;
}

export const filterObject = (object: { [s: string]: unknown; } | ArrayLike<unknown>, callback: (arg0: string, arg1: unknown) => any) => Object.entries(object)
    .reduce((prev, [key, value]) => ({
            ...prev,
            ...(callback(key, value) ? { [key]: value } : {})
        }), {}
    );

export const calcPercentage = (partialValue: number, totalValue: number) => {
    return parseFloat(((100 * partialValue) / totalValue).toFixed(2));
}

export function debounce<F extends DebounceProcedure>(
    callback: F,
    waitMilliseconds = 50,
    options: DebounceOptions = {
        isImmediate: false
    },
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
    let timeoutId: ReturnType<typeof setTimeout > | undefined;

    return function(this: ThisParameterType<F>, ...args: Parameters<F>) {
        const context = this;

        const doLater = function() {
            timeoutId = undefined;
            if (!options.isImmediate) {
                callback.apply(context, args);
            }
        }

        const shouldCallNow = options.isImmediate &&timeoutId === undefined;

        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(doLater, waitMilliseconds);

        if (shouldCallNow) {
            callback.apply(context, args);
        }
    }
}

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const isUuidV4 = (string: string) => {
    return (new RegExp(RX_UUID_V4)).test(string)
}

export const isValidValue = (value: any) => {
    return !isInvalidValue(value)
}

export const isInvalidValue = (value: any) => {
    if (isString(value)) {
        value = value.trim()
    }
    return [null, 'null', '', ' ', undefined, 'undefined'].includes(value)
}

export const forEachObject = (obj: Object, fn: IFnRecursiveIterator, path: any) => {
    for (const key in obj) {
        const deepPath = path ? `${path}.${key}` : key;

        // Note that we always use obj[key] because it might be mutated by forEach
        fn.call(obj, obj[key], key, obj, deepPath);

        recursiveIterator(obj[key], fn, deepPath);
    }
}

export const forEachArray = (array: any[], fn: IFnRecursiveIterator, path: any) => {
    array.forEach((value, index, arr) => {
        const deepPath = `${path}[${index}]`;

        fn.call(arr, value, index, arr, deepPath);

        // Note that we use arr[index] because it might be mutated by forEach
        recursiveIterator(arr[index], fn, deepPath);
    });
}

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
export const recursiveIterator = (value: any, callback: IFnRecursiveIterator, path: any = '') => {
    path = path || '';

    if (Array.isArray(value)) {
        forEachArray(value, callback, path);
    } else if (isPlainObject(value)) {
        forEachObject(value, callback, path);
    }
}

/**
 * @param object
 */
export const makeFormDataFromObject = (object: { [s: string]: unknown; }): FormData => {
    const formData = new FormData();
    recursiveIterator(object, (value, _key, _subject, path) => {
        formData.append(path, value);
    });
    return formData;
}