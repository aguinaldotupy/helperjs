export default {
   checkValidUrl(url) {
      const pattern = new RegExp(
          '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
          'i'
      ) // fragment locator

      return !!pattern.test(url)
   },

   lowerBound(num, limit) {
      return num >= limit ? num : limit
   },

   delayEvent(callback, ms) {
      let timer = 0
      return function() {
         const context = this
         const args = arguments
         clearTimeout(timer)
         timer = setTimeout(function() {
            callback.apply(context, args)
         }, ms || 0)
      }
   },

   sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
   },

   isMobile() {
      const check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|Windows Phone/i
      return check.test(navigator.userAgent)
   },

   isDesktop() {
      return !this.isMobile()
   },

   capitalizeWords(str) {
      return str.replace(/\w\S*/g, function(txt) {
         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
   },

   toSnakeCase(str){
      str = String(str)
      return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(strLower => strLower.toLowerCase())
      .join('_');
   },

   validateEmail(email) {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(String(email).toLowerCase())
   },

   /**
    * @link https://www.qodo.co.uk/blog/javascript-restrict-keyboard-character-input/
    * @param myField
    * @param e
    * @param restrictionType [digitsOnly, floatOnly, alphaOnly]
    */
   restrictCharacters(myField, e, restrictionType) {
      switch (restrictionType) {
         case 'digitsOnly':
            restrictionType = /[1234567890]/g
            break
         case 'floatOnly':
            restrictionType = /[0-9.]/g
            break
         case 'alphaOnly':
            restrictionType = /[A-Za-z]/g
            break

         default:
            return false
      }

      if (!e) e = window.event
      let code
      if (e.keyCode) code = e.keyCode
      else if (e.which) code = e.which
      const character = String.fromCharCode(code)
      // if they pressed esc... remove focus from field...
      if (code === 27) {
         this.blur()
         return false
      }
      // ignore if they are press other keys
      // strange because code: 39 is the down key AND ' key...
      // and DEL also equals .
      if (
          !e.ctrlKey &&
          code !== 9 &&
          code !== 8 &&
          code !== 36 &&
          code !== 37 &&
          code !== 38 &&
          (code !== 39 || (code === 39 && character === "'")) &&
          code !== 40
      ) {
         return !!character.match(restrictionType)
      }
   },

   isNumber(evt) {
      evt = evt || window.event
      const charCode = evt.which ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
         evt.preventDefault()
      } else {
         return true
      }
   },
}
