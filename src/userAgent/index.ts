const BOTS = [
    '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
    'ad\\smonitoring',
    'adsbot',
    'apex',
    'applebot',
    'archive.org_bot',
    'baiduspider',
    'bingbot',
    'chromeheadless',
    'cloudflare',
    'cloudinary',
    'crawler',
    'curl',
    'discordbot',
    'duckduckbot',
    'embedly',
    'exabot',
    'facebookexternalhit',
    'facebot',
    'flipboard',
    'google',
    'googlebot',
    'gsa-crawler',
    'gurujibot',
    'guzzlehttp',
    'heritrix',
    'ia_archiver',
    'insights',
    'linkedinbot',
    'ltx71',
    'mediapartners',
    'msnbot',
    'odklbot',
    'phantom\\.js',
    'phantomjs',
    'pingdom',
    'pinterest',
    'python',
    'rtlnieuws',
    'skypeuripreview',
    'slackbot',
    'slurp',
    'spbot',
    'telegrambot',
    'test\\scertificate',
    'testing',
    'tiabot',
    'tumblr ',
    'twitterbot',
    'vkshare',
    'web\\sscraper',
    'wget',
    'yandexbot',
    'whatsapp',
    'orangebot',
    'smtbot',
    'qwantify',
    'mj12bot',
    'ahrefsbot',
    'seznambot',
    'panscient\.com',
    'duckduckgo-favicons-bot',
    'uptimerobot',
    'semrushbot',
    'postman',
    'dotbot',
    'zoominfobot',
    'ifttt',
    'sogou',
    'ru_bot',
    'researchscan',
    'nimbostratus-bot',
    'slack-imgproxy',
    'node-superagent',
    'go-http-client',
    'jersey',
    'dataprovider.com',
    'github-camo',
    'dispatch',
    'checkmarknetwork',
    'screaming frog',
    'whatweb',
    'daum',
    'netcraftsurveyagent',
    'mojeekbot',
    'surdotlybot',
    'springbot'
];

const IS_BOT_REGEXP = new RegExp('^.*(' + BOTS.join('|') + ').*$');

class UserAgent {
    version = '1.0.15';

    Versions = {
        Edge: /(?:edge|edga|edgios|edg)\/([\d\w\.\-]+)/i,
        Firefox: /(?:firefox|fxios)\/([\d\w\.\-]+)/i,
        IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
        Chrome: /(?:chrome|crios)\/([\d\w\.\-]+)/i,
        Chromium: /chromium\/([\d\w\.\-]+)/i,
        Safari: /(version|safari)\/([\d\w\.\-]+)/i,
        Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
        Ps3: /([\d\w\.\-]+)\)\s*$/i,
        Psp: /([\d\w\.\-]+)\)?\s*$/i,
        Amaya: /amaya\/([\d\w\.\-]+)/i,
        SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
        OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
        Flock: /flock\/([\d\w\.\-]+)/i,
        Epiphany: /epiphany\/([\d\w\.\-]+)/i,
        WinJs: /msapphost\/([\d\w\.\-]+)/i,
        PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
        AlamoFire: /alamofire\/([\d\w\.\-]+)/i,
        UC: /ucbrowser\/([\d\w\.]+)/i,
        Facebook: /FBAV\/([\d\w\.]+)/i,
        WebKit: /applewebkit\/([\d\w\.]+)/i,
        Wechat: /micromessenger\/([\d\w\.]+)/i,
        Electron: /Electron\/([\d\w\.]+)/i
    }

    Browsers = {
        YaBrowser: /yabrowser/i,
        Edge: /edge|edga|edgios|edg/i,
        Amaya: /amaya/i,
        Konqueror: /konqueror/i,
        Epiphany: /epiphany/i,
        SeaMonkey: /seamonkey/i,
        Flock: /flock/i,
        OmniWeb: /omniweb/i,
        Chromium: /chromium/i,
        Chrome: /chrome|crios/i,
        Safari: /safari/i,
        IE: /msie|trident/i,
        Opera: /opera|OPR\//i,
        PS3: /playstation 3/i,
        PSP: /playstation portable/i,
        Firefox: /firefox|fxios/i,
        WinJs: /msapphost/i,
        PhantomJS: /phantomjs/i,
        AlamoFire: /alamofire/i,
        UC: /UCBrowser/i,
        Facebook: /FBA[NV]/
    }

    OS = {
        Windows10: /windows nt 10\.0/i,
        Windows81: /windows nt 6\.3/i,
        Windows8: /windows nt 6\.2/i,
        Windows7: /windows nt 6\.1/i,
        UnknownWindows: /windows nt 6\.\d+/i,
        WindowsVista: /windows nt 6\.0/i,
        Windows2003: /windows nt 5\.2/i,
        WindowsXP: /windows nt 5\.1/i,
        Windows2000: /windows nt 5\.0/i,
        WindowsPhone81: /windows phone 8\.1/i,
        WindowsPhone80: /windows phone 8\.0/i,
        OSXCheetah: /os x 10[._]0/i,
        OSXPuma: /os x 10[._]1(\D|$)/i,
        OSXJaguar: /os x 10[._]2/i,
        OSXPanther: /os x 10[._]3/i,
        OSXTiger: /os x 10[._]4/i,
        OSXLeopard: /os x 10[._]5/i,
        OSXSnowLeopard: /os x 10[._]6/i,
        OSXLion: /os x 10[._]7/i,
        OSXMountainLion: /os x 10[._]8/i,
        OSXMavericks: /os x 10[._]9/i,
        OSXYosemite: /os x 10[._]10/i,
        OSXElCapitan: /os x 10[._]11/i,
        MacOSSierra: /os x 10[._]12/i,
        MacOSHighSierra: /os x 10[._]13/i,
        MacOSMojave: /os x 10[._]14/i,
        Mac: /os x/i,
        Linux: /linux/i,
        Linux64: /linux x86\_64/i,
        ChromeOS: /cros/i,
        Wii: /wii/i,
        PS3: /playstation 3/i,
        PSP: /playstation portable/i,
        iPad: /\(iPad.*os (\d+)[._](\d+)/i,
        iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
        iOS: /ios/i,
        Bada: /Bada\/(\d+)\.(\d+)/i,
        Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i,
        Electron: /Electron\/(\d+)\.(\d+)\.(\d+)/i,
    }

    Platform = {
        Windows: /windows nt/i,
        WindowsPhone: /windows phone/i,
        Mac: /macintosh/i,
        Linux: /linux/i,
        Wii: /wii/i,
        Playstation: /playstation/i,
        iPad: /ipad/i,
        iPod: /ipod/i,
        iPhone: /iphone/i,
        Android: /android/i,
        Blackberry: /blackberry/i,
        Samsung: /samsung/i,
        Curl: /curl/i,
        Electron: /Electron/i,
        iOS: /^ios\-/i
    }

    DefaultAgent = {
        isYaBrowser: false,
        isAuthoritative: true,
        isMobile: false,
        isMobileNative: false,
        isTablet: false,
        isiPad: false,
        isiPod: false,
        isiPhone: false,
        isiPhoneNative: false,
        isAndroid: false,
        isAndroidNative: false,
        isBlackberry: false,
        isOpera: false,
        isIE: false,
        isEdge: false,
        isIECompatibilityMode: false,
        isSafari: false,
        isFirefox: false,
        isWebkit: false,
        isChrome: false,
        isKonqueror: false,
        isOmniWeb: false,
        isSeaMonkey: false,
        isFlock: false,
        isAmaya: false,
        isPhantomJS: false,
        isEpiphany: false,
        isDesktop: false,
        isWindows: false,
        isLinux: false,
        isLinux64: false,
        isMac: false,
        isChromeOS: false,
        isBada: false,
        isSamsung: false,
        isRaspberry: false,
        isBot: false,
        isCurl: false,
        isAndroidTablet: false,
        isWinJs: false,
        isKindleFire: false,
        isSilk: false,
        isCaptive: false,
        isSmartTV: false,
        isUC : false,
        isFacebook : false,
        isAlamoFire: false,
        isElectron: false,
        silkAccelerated: false,
        browser: 'unknown',
        version: 'unknown',
        os: 'unknown',
        platform: 'unknown',
        geoIp: {},
        source: '',
        isWechat: false,
    }

    Agent = {}

    public getBrowser(string: string)
    {
        switch (true) {
            case this.Browsers.YaBrowser.test(string):
                this.Agent['isYaBrowser'] = true;
                return 'YaBrowser';
            case this.Browsers.AlamoFire.test(string):
                this.Agent['isAlamoFire'] = true;
                return 'AlamoFire';
            case this.Browsers.Edge.test(string):
                this.Agent['isEdge'] = true;
                return 'Edge';
            case this.Browsers.PhantomJS.test(string):
                this.Agent['isPhantomJS'] = true;
                return 'PhantomJS';
            case this.Browsers.Konqueror.test(string):
                this.Agent['isKonqueror'] = true;
                return 'Konqueror';
            case this.Browsers.Amaya.test(string):
                this.Agent['isAmaya'] = true;
                return 'Amaya';
            case this.Browsers.Epiphany.test(string):
                this.Agent['isEpiphany'] = true;
                return 'Epiphany';
            case this.Browsers.SeaMonkey.test(string):
                this.Agent['isSeaMonkey'] = true;
                return 'SeaMonkey';
            case this.Browsers.Flock.test(string):
                this.Agent['isFlock'] = true;
                return 'Flock';
            case this.Browsers.OmniWeb.test(string):
                this.Agent['isOmniWeb'] = true;
                return 'OmniWeb';
            case this.Browsers.Opera.test(string):
                this.Agent['isOpera'] = true;
                return 'Opera';
            case this.Browsers.Chromium.test(string):
                this.Agent['isChrome'] = true;
                return 'Chromium';
            case this.Browsers.Facebook.test(string):
                this.Agent['isFacebook'] = true;
                return 'Facebook';
            case this.Browsers.Chrome.test(string):
                this.Agent['isChrome'] = true;
                return 'Chrome';
            case this.Browsers.WinJs.test(string):
                this.Agent['isWinJs'] = true;
                return 'WinJs';
            case this.Browsers.IE.test(string):
                this.Agent['isIE'] = true;
                return 'IE';
            case this.Browsers.Firefox.test(string):
                this.Agent['isFirefox'] = true;
                return 'Firefox';
            case this.Browsers.Safari.test(string):
                this.Agent['isSafari'] = true;
                return 'Safari';
            case this.Browsers.PS3.test(string):
                return ['ps3'];
            case this.Browsers.PSP.test(string):
                return ['psp'];
            case this.Browsers.UC.test(string):
                this.Agent['isUC'] = true;
                return 'UCBrowser';
            default:
                if (string.indexOf('Dalvik') !== -1) {
                    return 'unknown';
                }

                // If the UA does not start with Mozilla guess the user agent.
                if (string.indexOf('Mozilla') !== 0 && /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)) {
                    this.Agent['isAuthoritative'] = false;
                    return RegExp.$1;
                }
                return 'unknown';
        }
    }

    protected testWebkit() {
        if (this.Agent['browser'] === 'unknown' && /applewebkit/i.test(this.Agent['source'])) {
            this.Agent['browser'] = 'Apple WebKit';
            this.Agent['isWebkit'] = true;
        }
    }

    public getBrowserVersion(string: string)
    {
        let regex;
        switch (this.Agent['browser']) {
            case 'Edge':
                if (this.Versions.Edge.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'PhantomJS':
                if (this.Versions.PhantomJS.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Chrome':
                if (this.Versions.Chrome.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Chromium':
                if (this.Versions.Chromium.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Safari':
                if (this.Versions.Safari.test(string)) {
                    return RegExp.$2;
                }
                break;
            case 'Opera':
                if (this.Versions.Opera.test(string)) {
                    return RegExp.$1 ? RegExp.$1: RegExp.$2;
                }
                break;
            case 'Firefox':
                if (this.Versions.Firefox.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'WinJs':
                if (this.Versions.WinJs.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'IE':
                if (this.Versions.IE.test(string)) {
                    return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                }
                break;
            case 'ps3':
                if (this.Versions.Ps3.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'psp':
                if (this.Versions.Psp.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Amaya':
                if (this.Versions.Amaya.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Epiphany':
                if (this.Versions.Epiphany.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'SeaMonkey':
                if (this.Versions.SeaMonkey.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Flock':
                if (this.Versions.Flock.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'OmniWeb':
                if (this.Versions.OmniWeb.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'UCBrowser':
                if (this.Versions.UC.test(string)) {
                    return RegExp.$1;
                }
                break;
            case 'Facebook':
                if (this.Versions.Facebook.test(string)) {
                    return RegExp.$1;
                }
                break;
            default:
                if (this.Agent['browser'] !== 'unknown') {
                    regex = new RegExp(this.Agent['browser'] + '[\\/ ]([\\d\\w\\.\\-]+)', 'i');
                    if (regex.test(string)) {
                        return RegExp.$1;
                    }
                } else {
                    this.testWebkit();
                    if (this.Agent['isWebkit'] && this.Versions.WebKit.test(string)) {
                        return RegExp.$1;
                    }
                    return 'unknown';
                }
        }
    }
}
