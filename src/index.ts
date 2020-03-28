export const sum = (a: number, b: number): number => a + b;

export const isMobile = () => {
    const check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|Windows Phone/i
    return check.test(navigator.userAgent)
};

export const isDesktop = () => !isMobile();

export const checkValidUrl = (url: string) => {
  const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
      'i'
  ); // fragment locator

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

export const toSnakeCase = (str: String) =>
    // @ts-ignore
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(strLower => strLower.toLowerCase())
        .join('_');

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

export const isNumber = (evt: KeyboardEvent): any => {
  const charCode = (typeof evt.which !== "undefined") ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
     evt.preventDefault()
  } else {
     return true
  }
};