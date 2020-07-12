export const sum = (a: number, b: number): number => a + b;

export const toType = (value: any) => typeof value

export const isObject = (object: null) => object !== null && typeof object === 'object'

export const isPlainObject = (object: any) => Object.prototype.toString.call(object) === '[object Object]'

export const isArray = (value: any) => Array.isArray(value)

export const isFunction = (value: any) => toType(value) === 'function'

export const isBoolean = (value: any) => toType(value) === 'boolean'

export const isString = (value: any) => toType(value) === 'string'

export const isNumber = (value: any) => toType(value) === 'number'

export const isUndefined = (value: undefined) => value === undefined

export const isNull = (value: null) => value === null

export const isEmptyString = (value: string) => value === ''

export const isDate = (value: any) => value instanceof Date

export const isEvent = (value: any) => value instanceof Event

export const isFile = (value: any) => value instanceof File

export const isUndefinedOrNull = (value: any) => isUndefined(value) || isNull(value)

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

export const toSnakeCase = (str: String) => {
    // @ts-ignore
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
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
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase())
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
      code !== 40
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

export const toCurrency = (value: number, prefix = 'R$', $suffix = null) => {
    let val = (value).toFixed(2).replace('.', ',')
    return `${prefix} ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ${$suffix}`;
}

export const firstAndLastName = (fullName: string) => {
    const names = fullName.split(' ');
    let firstName;
    let lastName;
    if (!names || names.length <= 1) {
        firstName = names;
        lastName = '';
    } else {
        firstName = names[0];
        lastName = names.pop();
    }

    return `${firstName} ${lastName}`;
}

export const chunkArray = (array: string | any[], size: number) => {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
}
