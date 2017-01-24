(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Phaser", [], factory);
	else if(typeof exports === 'object')
		exports["Phaser"] = factory();
	else
		root["Phaser"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 351);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var Point = function (x, y)
{
    if (x === undefined) { x = 0; }
    if (y === undefined) { y = x; }

    this.x = x;

    this.y = y;
};

Point.prototype.constructor = Point;

Point.prototype = {

    setTo: function (x, y)
    {
        if (x === undefined) { x = 0; }
        if (y === undefined) { y = x; }

        this.x = x;
        this.y = y;

        return this;
    }

};

module.exports = Point;


/***/ },
/* 1 */
/***/ function(module, exports) {

var CONST = {

    VERSION: '3.0.0',

    AUTO: 0,
    CANVAS: 1,
    WEBGL: 2,

    IMAGE: 20

};

module.exports = CONST;


/***/ },
/* 2 */
/***/ function(module, exports) {

var MATH_CONST = {

    PI2: Math.PI * 2,
    TAU: Math.PI * 0.5,
    EPSILON: 1.0e-6,
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI

};

module.exports = MATH_CONST;


/***/ },
/* 3 */
/***/ function(module, exports) {

var FILE_CONST = {

    LOADER_IDLE: 0,
    LOADER_LOADING: 1,
    LOADER_PROCESSING: 2,
    LOADER_COMPLETE: 3,
    LOADER_DESTROYED: 4,

    FILE_PENDING: 5,      // file is in the load queue but not yet started
    FILE_LOADING: 6,      // file has been started to load by the loader (onLoad called)
    FILE_LOADED: 7,       // file has loaded successfully, awaiting processing
    FILE_FAILED: 8,       // file failed to load
    FILE_PROCESSING: 9,   // file is being processed (onProcess callback)
    FILE_WAITING_LINKFILE: 10,   // file is being processed (onProcess callback)
    FILE_ERRORED: 11,   // file is being processed (onProcess callback)
    FILE_COMPLETE: 12,     // file has finished processing
    FILE_DESTROYED: 13,     // file has been destroyed

    TEXTURE_ATLAS_JSON_ARRAY: 20,
    TEXTURE_ATLAS_JSON_HASH: 21

};

module.exports = FILE_CONST;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var OS = {

    /**
    * @property {boolean} desktop - Is running on a desktop?
    * @default
    */
    desktop: false,

    /**
    * @property {boolean} webApp - Set to true if running as a WebApp, i.e. within a WebView
    * @default
    */
    webApp: false,

    /**
    * @property {boolean} iOS - Is running on iOS?
    * @default
    */
    iOS: false,

    /**
    * @property {number} iOSVersion - If running in iOS this will contain the major version number.
    * @default
    */
    iOSVersion: 0,

    /**
    * @property {boolean} iPhone - Is running on iPhone?
    * @default
    */
    iPhone: false,

    /**
    * @property {boolean} iPad - Is running on iPad?
    * @default
    */
    iPad: false,

    /**
    * @property {boolean} cocoonJS - Is the game running under CocoonJS?
    * @default
    */
    cocoonJS: false,
    
    /**
    * @property {boolean} cocoonJSApp - Is this game running with CocoonJS.App?
    * @default
    */
    cocoonJSApp: false,
    
    /**
    * @property {boolean} cordova - Is the game running under Apache Cordova?
    * @default
    */
    cordova: false,
    
    /**
    * @property {boolean} node - Is the game running under Node.js?
    * @default
    */
    node: false,
    
    /**
    * @property {boolean} nodeWebkit - Is the game running under Node-Webkit?
    * @default
    */
    nodeWebkit: false,
    
    /**
    * @property {boolean} electron - Is the game running under GitHub Electron?
    * @default
    */
    electron: false,
    
    /**
    * @property {boolean} ejecta - Is the game running under Ejecta?
    * @default
    */
    ejecta: false,

    /**
    * @property {boolean} crosswalk - Is the game running under the Intel Crosswalk XDK?
    * @default
    */
    crosswalk: false,

    /**
    * @property {boolean} android - Is running on android?
    * @default
    */
    android: false,

    /**
    * @property {boolean} chromeOS - Is running on chromeOS?
    * @default
    */
    chromeOS: false,

    /**
    * @property {boolean} linux - Is running on linux?
    * @default
    */
    linux: false,

    /**
    * @property {boolean} macOS - Is running on macOS?
    * @default
    */
    macOS: false,

    /**
    * @property {boolean} windows - Is running on windows?
    * @default
    */
    windows: false,

    /**
    * @property {boolean} windowsPhone - Is running on a Windows Phone?
    * @default
    */
    windowsPhone: false,

    /**
    * @property {boolean} vita - Is running on a PlayStation Vita?
    * @default
    */
    vita: false,

    /**
    * @property {boolean} kindle - Is running on an Amazon Kindle?
    * @default
    */
    kindle: false,

    /**
    * @property {number} pixelRatio - PixelRatio of the host device?
    * @default
    */
    pixelRatio: 1

};

function init ()
{
    var ua = navigator.userAgent;

    if (/Windows/.test(ua))
    {
        OS.windows = true;
    }
    else if (/Mac OS/.test(ua))
    {
        OS.macOS = true;
    }
    else if (/Linux/.test(ua))
    {
        OS.linux = true;
    }
    else if (/Android/.test(ua))
    {
        OS.android = true;
    }
    else if (/iP[ao]d|iPhone/i.test(ua))
    {
        OS.iOS = true;
        (navigator.appVersion).match(/OS (\d+)/);
        OS.iOSVersion = parseInt(RegExp.$1, 10);
    }
    else if (/Kindle/.test(ua) || (/\bKF[A-Z][A-Z]+/).test(ua) || (/Silk.*Mobile Safari/).test(ua))
    {
        OS.kindle = true;

        // This will NOT detect early generations of Kindle Fire, I think there is no reliable way...
        // E.g. "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true"
    }
    else if (/CrOS/.test(ua))
    {
        OS.chromeOS = true;
    }
    else if ((/Playstation Vita/).test(ua))
    {
        OS.vita = true;
    }

    if (/Windows Phone/i.test(ua) || (/IEMobile/i).test(ua))
    {
        OS.android = false;
        OS.iOS = false;
        OS.macOS = false;
        OS.windows = true;
        OS.windowsPhone = true;
    }

    var silk = (/Silk/).test(ua);

    if (OS.windows || OS.macOS || (OS.linux && !silk) || OS.chromeOS)
    {
        OS.desktop = true;
    }

    //  Windows Phone / Table reset
    if (OS.windowsPhone || ((/Windows NT/i.test(ua)) && (/Touch/i.test(ua))))
    {
        OS.desktop = false;
    }

    //  WebApp mode in iOS
    if (navigator.standalone)
    {
        OS.webApp = true;
    }
    
    if (window.cordova !== undefined)
    {
        OS.cordova = true;
    }
    
    if ((typeof process !== 'undefined') && (typeof process.versions.node !== 'undefined'))
    {
        OS.node = true;
    }
    
    if (OS.node && typeof process.versions === 'object')
    {
        OS.nodeWebkit = !!process.versions['node-webkit'];
        
        OS.electron = !!process.versions.electron;
    }
    
    if (navigator.isCocoonJS)
    {
        OS.cocoonJS = true;

        try
        {
            OS.cocoonJSApp = (typeof CocoonJS !== 'undefined');
        }
        catch (error)
        {
            OS.cocoonJSApp = false;
        }
    }

    if (window.ejecta !== undefined)
    {
        OS.ejecta = true;
    }

    if ((/Crosswalk/).test(ua))
    {
        OS.crosswalk = true;
    }

    OS.iPhone = ua.toLowerCase().indexOf('iphone') !== -1;
    OS.iPad = ua.toLowerCase().indexOf('ipad') !== -1;

    OS.pixelRatio = window['devicePixelRatio'] || 1;

    return OS;
}

module.exports = init();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(350)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(4);

var Browser = {

    /**
    * @property {boolean} arora - Set to true if running in Arora.
    * @default
    */
    arora: false,

    /**
    * @property {boolean} chrome - Set to true if running in Chrome.
    * @default
    */
    chrome: false,

    /**
    * @property {number} chromeVersion - If running in Chrome this will contain the major version number.
    * @default
    */
    chromeVersion: 0,

    /**
    * @property {boolean} epiphany - Set to true if running in Epiphany.
    * @default
    */
    epiphany: false,

    /**
    * @property {boolean} firefox - Set to true if running in Firefox.
    * @default
    */
    firefox: false,

    /**
    * @property {number} firefoxVersion - If running in Firefox this will contain the major version number.
    * @default
    */
    firefoxVersion: 0,

    /**
    * @property {boolean} mobileSafari - Set to true if running in Mobile Safari.
    * @default
    */
    mobileSafari: false,

    /**
    * @property {boolean} ie - Set to true if running in Internet Explorer.
    * @default
    */
    ie: false,

    /**
    * @property {number} ieVersion - If running in Internet Explorer this will contain the major version number. Beyond IE10 you should use Device.trident and Device.tridentVersion.
    * @default
    */
    ieVersion: 0,

    /**
    * @property {boolean} midori - Set to true if running in Midori.
    * @default
    */
    midori: false,

    /**
    * @property {boolean} opera - Set to true if running in Opera.
    * @default
    */
    opera: false,

    /**
    * @property {boolean} safari - Set to true if running in Safari.
    * @default
    */
    safari: false,

    /**
    * @property {number} safariVersion - If running in Safari this will contain the major version number.
    * @default
    */
    safariVersion: 0,

    /**
    * @property {boolean} trident - Set to true if running a Trident version of Internet Explorer (IE11+)
    * @default
    */
    trident: false,

    /**
    * @property {number} tridentVersion - If running in Internet Explorer 11 this will contain the major version number. See {@link http://msdn.microsoft.com/en-us/library/ie/ms537503(v=vs.85).aspx}
    * @default
    */
    tridentVersion: 0,

    /**
    * @property {boolean} edge - Set to true if running in Microsoft Edge browser.
    * @default
    */
    edge: false,

    /**
    * @property {boolean} silk - Set to true if running in the Silk browser (as used on the Amazon Kindle)
    * @default
    */
    silk: false

};

function init ()
{
    var ua = navigator.userAgent;

    if ((/Arora/).test(ua))
    {
        Browser.arora = true;
    }
    else if (/Edge\/\d+/.test(ua))
    {
        Browser.edge = true;
    }
    else if ((/Chrome\/(\d+)/).test(ua) && !OS.windowsPhone)
    {
        Browser.chrome = true;
        Browser.chromeVersion = parseInt(RegExp.$1, 10);
    }
    else if ((/Epiphany/).test(ua))
    {
        Browser.epiphany = true;
    }
    else if ((/Firefox\D+(\d+)/).test(ua))
    {
        Browser.firefox = true;
        Browser.firefoxVersion = parseInt(RegExp.$1, 10);
    }
    else if ((/AppleWebKit/).test(ua) && OS.iOS)
    {
        Browser.mobileSafari = true;
    }
    else if ((/MSIE (\d+\.\d+);/).test(ua))
    {
        Browser.ie = true;
        Browser.ieVersion = parseInt(RegExp.$1, 10);
    }
    else if ((/Midori/).test(ua))
    {
        Browser.midori = true;
    }
    else if ((/Opera/).test(ua))
    {
        Browser.opera = true;
    }
    else if ((/Safari/).test(ua) && !OS.windowsPhone)
    {
        Browser.safari = true;
    }
    else if ((/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/).test(ua))
    {
        Browser.ie = true;
        Browser.trident = true;
        Browser.tridentVersion = parseInt(RegExp.$1, 10);
        Browser.ieVersion = parseInt(RegExp.$3, 10);
    }

    //  Silk gets its own if clause because its ua also contains 'Safari'
    if ((/Silk/).test(ua))
    {
        Browser.silk = true;
    }

    return Browser;
}

module.exports = init();


/***/ },
/* 6 */
/***/ function(module, exports) {

var Angle = function (line)
{
    return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
};

module.exports = Angle;


/***/ },
/* 7 */
/***/ function(module, exports) {


//  Encapsulates a 2D rectangle defined by its corner point in the top-left
//  and its extends in x (width) and y (height)

var Rectangle = function (x, y, width, height)
{
    if (x === undefined) { x = 0; }
    if (y === undefined) { y = 0; }
    if (width === undefined) { width = 0; }
    if (height === undefined) { height = 0; }

    this.x = x;

    this.y = y;

    this.width = width;

    this.height = height;
};

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype = {

    setTo: function (x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        return this;
    },

    setEmpty: function ()
    {
        return this.setTo(0, 0, 0, 0);
    },

    setPosition: function (x, y)
    {
        if (y === undefined) { y = x; }

        this.x = x;
        this.y = y;

        return this;
    },

    setSize: function (width, height)
    {
        if (height === undefined) { height = width; }

        this.width = width;
        this.height = height;

        return this;
    },

    isEmpty: function ()
    {
        return (this.width <= 0 || this.height <= 0);
    }

};

Object.defineProperties(Rectangle.prototype, {

    left: {

        enumerable: true,

        get: function ()
        {
            return this.x;
        },

        set: function (value)
        {
            if (value >= this.right)
            {
                this.width = 0;
            }
            else
            {
                this.width = this.right - value;
            }

            this.x = value;
        }

    },

    right: {

        enumerable: true,

        get: function ()
        {
            return this.x + this.width;
        },

        set: function (value)
        {
            if (value <= this.x)
            {
                this.width = 0;
            }
            else
            {
                this.width = value - this.x;
            }
        }

    },

    top: {

        enumerable: true,

        get: function ()
        {
            return this.y;
        },

        set: function (value)
        {
            if (value >= this.bottom)
            {
                this.height = 0;
                this.y = value;
            }
            else
            {
                this.height = (this.bottom - value);
            }
        }

    },

    bottom: {

        enumerable: true,

        get: function ()
        {
            return this.y + this.height;
        },

        set: function (value)
        {
            if (value <= this.y)
            {
                this.height = 0;
            }
            else
            {
                this.height = value - this.y;
            }
        }

    }

});

module.exports = Rectangle;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var GetURL = __webpack_require__(226);
var CONST = __webpack_require__(3);
var XHRLoader = __webpack_require__(227);
var XHRSettings = __webpack_require__(29);
var MergeXHRSettings = __webpack_require__(56);

var File = function (type, key, url, responseType, xhrSettings)
{
    //  file type (image, json, etc) for sorting within the Loader
    this.type = type;

    //  unique cache key (unique within its file type)
    this.key = key;

    //  The URL of the file, not including baseURL
    this.url = url;

    //  Set when the Loader calls 'load' on this file
    this.src = '';

    this.xhrSettings = XHRSettings(responseType);

    if (xhrSettings)
    {
        this.xhrSettings = MergeXHRSettings(this.xhrSettings, xhrSettings);
    }

    this.xhrLoader = null;

    this.state = CONST.FILE_PENDING;

    //  Set by onProgress (only if loading via XHR)
    this.bytesTotal = 0;
    this.bytesLoaded = -1;
    this.percentComplete = -1;

    //  For CORs based loading.
    //  If this is undefined then the File will check BaseLoader.crossOrigin and use that (if set)
    this.crossOrigin = undefined;

    //  The actual processed file data
    this.data = undefined;

    //  Multipart file? (i.e. an atlas and its json together)
    this.linkFile = undefined;
    this.linkType = '';

    this.callback = null;
};

File.prototype.constructor = File;

File.prototype = {

    resetXHR: function ()
    {
        this.xhrLoader.onload = undefined;
        this.xhrLoader.onerror = undefined;
        this.xhrLoader.onprogress = undefined;
    },

    //  Called when the Image loads
    //  ProgressEvent
    onLoad: function (event)
    {
        this.resetXHR();

        this.callback(this, true);
    },

    onError: function (event)
    {
        this.resetXHR();

        this.callback(this, false);
    },

    onProgress: function (event)
    {
        if (event.lengthComputable)
        {
            this.bytesLoaded = event.loaded;
            this.bytesTotal = event.total;

            this.percentComplete = Math.min((this.bytesLoaded / this.bytesTotal), 1);
        }

        // console.log(this.percentComplete + '% (' + this.bytesLoaded + ' bytes)');
    },

    onProcess: function (callback)
    {
        this.state = CONST.FILE_PROCESSING;

        this.onComplete();

        callback(this);
    },

    onComplete: function ()
    {
        if (this.linkFile)
        {
            if (this.linkFile.state === CONST.FILE_WAITING_LINKFILE)
            {
                //  The linkfile has finished processing, and is waiting for this file, so let's do them both
                this.state = CONST.FILE_COMPLETE;
                this.linkFile.state = CONST.FILE_COMPLETE;
            }
            else
            {
                //  The linkfile still hasn't finished loading and/or processing yet
                this.state = CONST.FILE_WAITING_LINKFILE;
            }
        }
        else
        {
            this.state = CONST.FILE_COMPLETE;
        }
    },

    //  Called by the Loader, starts the actual file downloading
    load: function (callback, baseURL, globalXHR)
    {
        if (baseURL === undefined) { baseURL = ''; }

        this.callback = callback;

        this.src = GetURL(this, baseURL);

        if (this.src.indexOf('data:') === 0)
        {
            console.log('Local data URI');
        }
        else
        {
            this.xhrLoader = XHRLoader(this, globalXHR);
        }
    }
};

module.exports = File;


/***/ },
/* 9 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* The GameObject Factory is a global level container of Factory instances.
* Factories register themselves with this container (when required)
*
* @class Phaser.GameObject.Factory
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
*/

var factories = {};

var FactoryContainer = function ()
{
    // console.log('FactoryContainer is alive');

    this.register = function (factory)
    {
        if (factories.hasOwnProperty(factory.KEY))
        {
            // console.log('Already registered', factory.KEY);

            return this.getType(factory.KEY);
        }

        // console.log('registering', factory.KEY);

        factories[factory.KEY] = {
            add: factory.add,
            make: factory.make
        };

        return factory;
    };

    this.getType = function (key)
    {
        return factories[key];
    };

    this.load = function (dest, isFactory)
    {
        for (var factory in factories)
        {
            if (factories.hasOwnProperty(factory))
            {
                // console.log('Loading', factory);

                dest[factory] = (isFactory) ? factories[factory].add : factories[factory].make;
            }
        }

        return dest;
    };

    return this;
};

module.exports = FactoryContainer();


/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = {

    DEFAULT: 0,
    LINEAR: 0,
    NEAREST: 1

};


/***/ },
/* 11 */
/***/ function(module, exports) {

var Wrap = function (value, min, max)
{
    var range = max - min;

    if (range <= 0)
    {
        return 0;
    }

    var result = (value - min) % range;

    if (result < 0)
    {
        result += range;
    }

    return result + min;
};

module.exports = Wrap;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var MathWrap = __webpack_require__(11);

var Wrap = function (angle)
{
    return MathWrap(angle, -Math.PI, Math.PI);
};

module.exports = Wrap;


/***/ },
/* 13 */
/***/ function(module, exports) {

//  Source object
//  The key as a string, or an array of keys, i.e. 'banner', or 'banner.hideBanner'
//  The default value to use if the key doesn't exist

var GetObjectValue = function (source, key, defaultValue)
{
    if (key.indexOf('.'))
    {
        var keys = key.split('.');
        var parent = source;
        var value = defaultValue;

        //  Use for loop here so we can break early
        for (var i = 0; i < keys.length; i++)
        {
            if (parent.hasOwnProperty(keys[i]))
            {
                //  Yes it has a key property, let's carry on down
                value = parent[keys[i]];

                parent = parent[keys[i]];
            }
            else
            {
                break;
            }
        }

        return value;
    }
    else
    {
        return (source.hasOwnProperty(key)) ? source[key] : defaultValue;
    }
};

module.exports = GetObjectValue;


/***/ },
/* 14 */
/***/ function(module, exports) {

var Event = function (type)
{
    this.type = type;

    this.target;

    this._propagate = true;
};

Event.prototype.constructor = Event;

Event.prototype = {

    reset: function (target)
    {
        this.target = target;

        this._propagate = true;
    },

    stopPropagation: function ()
    {
        this._propagate = false;
    }

};

module.exports = Event;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var EventBinding = __webpack_require__(104);

var EventDispatcher = function ()
{
    this.bindings = {};
    this.filters = [];
    this.hasFilters = false;
};

EventDispatcher.prototype.constructor = EventDispatcher;

EventDispatcher.prototype = {

    getBinding: function (type)
    {
        if (this.bindings.hasOwnProperty(type))
        {
            return this.bindings[type];
        }
    },

    createBinding: function (type)
    {
        if (!this.getBinding(type))
        {
            this.bindings[type] = new EventBinding(this, type);
        }

        return this.bindings[type];
    },

    on: function (type, listener, priority)
    {
        if (priority === undefined) { priority = 0; }

        var binding = this.createBinding(type);

        if (binding)
        {
            binding.add(listener, priority, false);
        }

        return this;
    },

    once: function (type, listener, priority)
    {
        if (priority === undefined) { priority = 0; }

        var binding = this.createBinding(type);

        if (binding)
        {
            binding.add(listener, priority, true);
        }

        return this;
    },

    //  Add a callback that is notified every time this EventDispatcher dispatches an event
    //  no matter what the event type is. Filters are invoked first, before any bindings,
    //  and can stop events if they wish (in which case they'll never reach the bindings)
    filter: function (callback)
    {
        var i = this.filters.indexOf(callback);

        if (i === -1)
        {
            //  Add the filter
            this.filters.push(callback);
        }
        else
        {
            //  Remove the filter
            this.filters.splice(i, 1);
        }
        
        this.hasFilters = (this.filters.length > 0);

        return this;
    },

    has: function (type, listener)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            return binding.has(listener);
        }
        else
        {
            return false;
        }
    },

    total: function (type)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            return binding.total();
        }
    },

    //  Removes an event listener.
    //  If there is no matching listener registered with the EventDispatcher, a call to this method has no effect.
    off: function (type, listener)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            binding.remove(listener);
        }

        return this;
    },

    _dispatchHandler: function (event)
    {
        event.reset(this);

        //  Pass the event through the filters first

        if (this.hasFilters)
        {
            for (var i = 0; i < this.filters.length; i++)
            {
                this.filters[i].call(this, event);

                //  Did the filter kill the event? If so, we can abort now
                if (!event._propagate)
                {
                    return;
                }
            }
        }

        var binding = this.getBinding(event.type);

        if (binding)
        {
            binding.dispatch(event);
        }
    },

    dispatch: function (event)
    {
        if (Array.isArray(event))
        {
            for (var i = 0; i < event.length; i++)
            {
                this._dispatchHandler(event[i]);
            }
        }
        else
        {
            this._dispatchHandler(event);
        }
    },

    //  Removes all listeners, but retains the event type entries
    removeAll: function (type)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            binding.removeAll();
        }

        return this;
    },

    removeAllFilters: function ()
    {
        this.filters.length = 0;

        this.hasFilters = false;

        return this;
    },

    delete: function (type)
    {
        var binding = this.getBinding(type);

        if (binding)
        {
            binding.destroy();

            delete this.bindings[type];
        }

        return this;
    },

    deleteAll: function ()
    {
        for (var binding in this.bindings)
        {
            binding.destroy();
        }

        this.bindings = {};
    },

    destroy: function ()
    {
        this.deleteAll();
        this.removeAllFilters();
    }

};

module.exports = EventDispatcher;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var File = __webpack_require__(8);

var ImageFile = function (key, url, path, xhrSettings)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        throw new Error('Error calling \'Loader.image\' invalid key provided.');
    }

    if (!url)
    {
        url = path + key + '.png';
    }
    else
    {
        url = path.concat(url);
    }

    File.call(this, 'image', key, url, 'blob', xhrSettings);
};

ImageFile.prototype = Object.create(File.prototype);
ImageFile.prototype.constructor = ImageFile;

ImageFile.prototype.onProcess = function (callback)
{
    this.state = CONST.FILE_PROCESSING;

    this.data = new Image();

    this.data.crossOrigin = this.crossOrigin;

    var _this = this;

    this.data.onload = function ()
    {
        URL.revokeObjectURL(_this.data.src);

        _this.onComplete();

        callback(_this);
    };

    this.data.onerror = function ()
    {
        URL.revokeObjectURL(_this.data.src);

        _this.state = CONST.FILE_ERRORED;

        callback(_this);
    };

    this.data.src = URL.createObjectURL(this.xhrLoader.response);
};

module.exports = ImageFile;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var IsPlainObject = __webpack_require__(75);

/**
* This is a slightly modified version of http://api.jquery.com/jQuery.extend/
* 
* @method Phaser.Utils.extend
* @param {boolean} deep - Perform a deep copy?
* @param {object} target - The target object to copy to.
* @return {object} The extended object.
*/
var Extend = function ()
{
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean")
    {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }

    // extend Phaser if only one argument is passed
    if (length === i)
    {
        target = this;
        --i;
    }

    for (; i < length; i++)
    {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null)
        {
            // Extend the base object
            for (name in options)
            {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target === copy)
                {
                    continue;
                }

                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (IsPlainObject(copy) || (copyIsArray = Array.isArray(copy))))
                {
                    if (copyIsArray)
                    {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    }
                    else
                    {
                        clone = src && IsPlainObject(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[name] = Extend(deep, clone, copy);

                // Don't bring in undefined values
                }
                else if (copy !== undefined)
                {
                    target[name] = copy;
                }
            }
        }
    }

    // Return the modified object
    return target;
};

module.exports = Extend;


/***/ },
/* 18 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* The Children Component features quick access to Group sorting related methods.
*
* @class
*/
var Children = function (gameObject)
{
    this.gameObject = gameObject;

    //  The objects that belong to this collection.
    //  The equivalent of the old `Sprite.children` array.
    this.list = [];

    this.position = 0;
};

Children.prototype.constructor = Children;

Children.prototype = {

    add: function (child, skipTransform)
    {
        if (skipTransform === undefined) { skipTransform = false; }

        // console.log('--->', this.gameObject.name, 'adds new child:', child.name);

        if (child.parent === this)
        {
            // console.log('Children.add 1');
            return child;
        }
        else if (child.parent)
        {
            // console.log('Children.add 2');
            child.parent.children.remove(child);
        }

        child.parent = this.gameObject;

        this.list.push(child);

        if (!skipTransform && this.gameObject.transform && child.transform)
        {
            // console.log(this.gameObject.name, 'adds transform from', child.name);
            this.gameObject.transform.add(child.transform);
        }

        // console.log('<--- end');

        return child;
    },

    addAt: function (child, index, skipTransform)
    {
        if (index === undefined) { index = 0; }
        if (skipTransform === undefined) { skipTransform = false; }

        if (this.list.length === 0)
        {
            return this.add(child);
        }

        if (index >= 0 && index <= this.list.length)
        {
            if (child.parent)
            {
                child.parent.children.remove(child);
            }

            child.parent = this;

            this.list.splice(index, 0, child);
        }

        if (!skipTransform && this.gameObject.transform && child.transform)
        {
            this.gameObject.transform.add(child.transform);
        }

        return child;

    },

    addMultiple: function (children, skipTransform)
    {
        if (Array.isArray(children))
        {
            for (var i = 0; i < children.length; i++)
            {
                this.add(children[i], skipTransform);
            }
        }

        return children;
    },

    getAt: function (index)
    {
        return this.list[index];
    },

    getIndex: function (child)
    {
        //  Return -1 if given child isn't a child of this parent
        return this.list.indexOf(child);
    },

    /**
    * Gets the first item from the set based on the property strictly equaling the value given.
    * Returns null if not found.
    *
    * @method Phaser.ArraySet#getByKey
    * @param {string} property - The property to check against the value.
    * @param {any} value - The value to check if the property strictly equals.
    * @return {any} The item that was found, or null if nothing matched.
    */
    getByKey: function (property, value)
    {
        for (var i = 0; i < this.list.length; i++)
        {
            if (this.list[i][property] === value)
            {
                return this.list[i];
            }
        }

        return null;
    },

    /**
    * Searches the Group for the first instance of a child with the `name`
    * property matching the given argument. Should more than one child have
    * the same name only the first instance is returned.
    *
    * @method Phaser.Group#getByName
    * @param {string} name - The name to search for.
    * @return {any} The first child with a matching name, or null if none were found.
    */
    getByName: function (name)
    {
        return this.getByKey('name', name);
    },

    /**
    * Returns a random child from the group.
    *
    * @method Phaser.Group#getRandom
    * @param {integer} [startIndex=0] - Offset from the front of the group (lowest child).
    * @param {integer} [length=(to top)] - Restriction on the number of values you want to randomly select from.
    * @return {any} A random child of this Group.
    */
    getRandom: function (startIndex, length)
    {
        if (startIndex === undefined) { startIndex = 0; }
        if (length === undefined) { length = this.list.length; }

        if (length === 0 || length > this.list.length)
        {
            return null;
        }

        var randomIndex = startIndex + Math.floor(Math.random() * length);

        return this.list[randomIndex];
    },

    /**
    * Returns all children in this Group.
    *
    * You can optionally specify a matching criteria using the `property` and `value` arguments.
    *
    * For example: `getAll('exists', true)` would return only children that have their exists property set.
    *
    * Optionally you can specify a start and end index. For example if this Group had 100 children,
    * and you set `startIndex` to 0 and `endIndex` to 50, it would return matches from only
    * the first 50 children in the Group.
    *
    * @method Phaser.Group#getAll
    * @param {string} [property] - An optional property to test against the value argument.
    * @param {any} [value] - If property is set then Child.property must strictly equal this value to be included in the results.
    * @param {integer} [startIndex=0] - The first child index to start the search from.
    * @param {integer} [endIndex] - The last child index to search up until.
    * @return {any} A random existing child of this Group.
    */
    getAll: function (property, value, startIndex, endIndex)
    {
        if (startIndex === undefined) { startIndex = 0; }
        if (endIndex === undefined) { endIndex = this.list.length; }

        var output = [];

        for (var i = startIndex; i < endIndex; i++)
        {
            var child = this.list[i];

            if (property)
            {
                if (child[property] === value)
                {
                    output.push(child);
                }
            }
            else
            {
                output.push(child);
            }
        }

        return output;
    },

    swap: function (child1, child2)
    {
        if (child1 === child2)
        {
            return;
        }

        var index1 = this.getIndex(child1);
        var index2 = this.getIndex(child2);

        if (index1 < 0 || index2 < 0)
        {
            throw new Error('Children.swap: Supplied objects must be children of the same parent');
        }

        this.list[index1] = child2;
        this.list[index2] = child1;
    },

    //   was setIndex
    moveTo: function (child, index)
    {
        var currentIndex = this.getIndex(child);

        if (currentIndex === -1 || index < 0 || index >= this.list.length)
        {
            throw new Error('Children.moveTo: The supplied index is out of bounds');
        }

        //  Remove
        this.list.splice(currentIndex, 1);

        //  Add in new location
        this.list.splice(index, 0, child);

        return child;
    },

    remove: function (child, skipTransform)
    {
        var index = this.list.indexOf(child);

        if (index !== -1)
        {
            child.parent = undefined;

            this.list.splice(index, 1);

            if (!skipTransform && this.gameObject.transform && child.transform)
            {
                this.gameObject.transform.remove(child.transform);
            }
        }
        
        return child;
    },

    removeAt: function (index, skipTransform)
    {
        var child = this.list[index];

        if (child)
        {
            child.parent = undefined;

            this.children.splice(index, 1);

            if (!skipTransform && this.gameObject.transform && child.transform)
            {
                this.gameObject.transform.remove(child.transform);
            }
        }

        return child;
    },

    removeBetween: function (beginIndex, endIndex)
    {
        if (beginIndex === undefined) { beginIndex = 0; }
        if (endIndex === undefined) { endIndex = this.list.length; }

        var range = endIndex - beginIndex;

        if (range > 0 && range <= endIndex)
        {
            var removed = this.list.splice(beginIndex, range);

            for (var i = 0; i < removed.length; i++)
            {
                removed[i].parent = undefined;
            }

            return removed;
        }
        else if (range === 0 && this.list.length === 0)
        {
            return [];
        }
        else
        {
            throw new Error('Children.removeBetween: Range Error, numeric values are outside the acceptable range');
        }
    },

    /**
    * Removes all the items.
    *
    * @method Phaser.ArraySet#removeAll
    */
    removeAll: function ()
    {
        var i = this.list.length;

        while (i--)
        {
            this.remove(this.list[i]);
        }

        return this;
    },

    //  Check to see if the given child is a child of this object, at any depth (recursively scans up the tree)
    contains: function (child)
    {
        if (!child)
        {
            return false;
        }
        else if (child.parent === this)
        {
            return true;
        }
        else
        {
            return this.contains(child.parent);
        }
    },

    /**
    * Brings the given child to the top of this group so it renders above all other children.
    *
    * @method Phaser.Group#bringToTop
    * @param {any} child - The child to bring to the top of this group.
    * @return {any} The child that was moved.
    */
    bringToTop: function (child)
    {
        if (child.parent === this && this.getIndex(child) < this.list.length)
        {
            this.remove(child);
            this.add(child);
        }

        return child;
    },

    /**
    * Sends the given child to the bottom of this group so it renders below all other children.
    *
    * @method Phaser.Group#sendToBack
    * @param {any} child - The child to send to the bottom of this group.
    * @return {any} The child that was moved.
    */
    sendToBack: function (child)
    {
        if (child.parent === this && this.getIndex(child) > 0)
        {
            this.remove(child);
            this.addAt(child, 0);
        }

        return child;
    },

    /**
    * Moves the given child up one place in this group unless it's already at the top.
    *
    * @method Phaser.Group#moveUp
    * @param {any} child - The child to move up in the group.
    * @return {any} The child that was moved.
    */
    moveUp: function (child)
    {
        var a = this.getIndex(child);

        if (a !== -1 && a < this.list.length - 1)
        {
            var b = this.getAt(a + 1);

            if (b)
            {
                this.swap(child, b);
            }
        }

        return child;
    },

    /**
    * Moves the given child down one place in this group unless it's already at the bottom.
    *
    * @method Phaser.Group#moveDown
    * @param {any} child - The child to move down in the group.
    * @return {any} The child that was moved.
    */
    moveDown: function (child)
    {
        var a = this.getIndex(child);

        if (a > 0)
        {
            var b = this.getAt(a - 1);

            if (b)
            {
                this.swap(child, b);
            }
        }

        return child;
    },

    /**
    * Reverses all children in this group.
    *
    * This operation applies only to immediate children and does not propagate to subgroups.
    *
    * @method Phaser.Group#reverse
    */
    reverse: function ()
    {
        this.list.reverse();

        return this;
    },

    shuffle: function ()
    {
        for (var i = this.list.length - 1; i > 0; i--)
        {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.list[i];
            this.list[i] = this.list[j];
            this.list[j] = temp;
        }

        return this;
    },

    /**
    * Replaces a child of this Group with the given newChild. The newChild cannot be a member of this Group.
    *
    * If `Group.enableBody` is set, then a physics body will be created on the object, so long as one does not already exist.
    *
    * If `Group.inputEnableChildren` is set, then an Input Handler will be created on the object, so long as one does not already exist.
    *
    * @method Phaser.Group#replace
    * @param {any} oldChild - The child in this group that will be replaced.
    * @param {any} newChild - The child to be inserted into this group.
    * @return {any} Returns the oldChild that was replaced within this group.
    */
    replace: function (oldChild, newChild, skipTransform)
    {
        var index = this.getIndex(oldChild);

        if (index !== -1)
        {
            if (newChild.parent)
            {
                newChild.parent.remove(newChild, skipTransform);
            }

            this.remove(oldChild, skipTransform);

            this.addAt(newChild, index, skipTransform);

            return oldChild;
        }
    },

    //  Swaps a child from another parent, with one from this parent.
    //  child1 = the child of THIS parent
    //  child2 = the child of the OTHER parent
    exchange: function (child1, child2, skipTransform)
    {
        if (child1 === child2 || child1.parent === child2.parent)
        {
            return;
        }

        var parentChildren = child2.parent.children;

        var index1 = this.getIndex(child1);
        var index2 = parentChildren.getIndex(child2);

        if (index1 < 0 || index2 < 0)
        {
            throw new Error('Children.swap: Supplied objects must be children of parents');
        }

        this.remove(child1, skipTransform);

        parentChildren.remove(child2, skipTransform);

        this.addAt(child2, index1, skipTransform);

        parentChildren.addAt(child1, index2, skipTransform);
    },

    /**
    * Checks for the item within this list.
    *
    * @method Phaser.ArraySet#exists
    * @param {any} item - The element to get the list index for.
    * @return {boolean} True if the item is found in the list, otherwise false.
    */
    exists: function (child)
    {
        return (this.list.indexOf(child) > -1);
    },

    /**
    * Sets the property `key` to the given value on all members of this list.
    *
    * @method Phaser.ArraySet#setAll
    * @param {any} key - The property of the item to set.
    * @param {any} value - The value to set the property to.
    */
    setAll: function (key, value)
    {
        for (var i = 0; i < this.list.length; i++)
        {
            if (this.list[i])
            {
                this.list[i][key] = value;
            }
        }
    },

    /**
    * Passes all children to the given callback.
    *
    * @method each
    * @param {function} callback - The function to call.
    * @param {object} [thisArg] - Value to use as `this` when executing callback.
    * @param {...*} [arguments] - Additional arguments that will be passed to the callback, after the child.
    */
    each: function (callback, thisArg)
    {
        var args = [ null ];

        for (var i = 1; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }

        for (i = 0; i < this.list.length; i++)
        {
            args[0] = this.list[i];
            callback.apply(thisArg, args);
        }
    },

    /**
    * Moves all children from this Group to the Group given.
    *
    * @method Phaser.Group#moveAll
    * @param {Phaser.Group} group - The new Group to which the children will be moved to.
    * @param {boolean} [silent=false] - If true the children will not dispatch the `onAddedToGroup` event for the new Group.
    * @return {Phaser.Group} The Group to which all the children were moved.
    */
    reparent: function (newParent)
    {
        if (newParent !== this)
        {
            for (var i = 0; i < this.list.length; i++)
            {
                var child = this.remove(this.list[i]);

                newParent.add(child);
            }
        }

        return newParent;
    }

};

Object.defineProperties(Children.prototype, {

    /**
    * Returns the first item and resets the cursor to the start.
    *
    * @name Phaser.ArraySet#first
    * @property {any} first
    */
    length: {

        enumerable: true,

        get: function ()
        {
            return this.list.length;
        }

    },

    /**
    * Returns the first item and resets the cursor to the start.
    *
    * @name Phaser.ArraySet#first
    * @property {any} first
    */
    first: {

        enumerable: true,

        get: function ()
        {
            this.position = 0;

            if (this.list.length > 0)
            {
                return this.list[0];
            }
            else
            {
                return null;
            }
        }

    },

    /**
    * Returns the last item and resets the cursor to the end.
    *
    * @name Phaser.ArraySet#last
    * @property {any} last
    */
    last: {

        enumerable: true,

        get: function ()
        {
            if (this.list.length > 0)
            {
                this.position = this.list.length - 1;

                return this.list[this.position];
            }
            else
            {
                return null;
            }
        }

    },

    /**
    * Returns the the next item (based on the cursor) and advances the cursor.
    *
    * @name Phaser.ArraySet#next
    * @property {any} next
    */
    next: {

        enumerable: true,

        get: function ()
        {
            if (this.position < this.list.length)
            {
                this.position++;

                return this.list[this.position];
            }
            else
            {
                return null;
            }
        }

    },

    /**
    * Returns the the previous item (based on the cursor) and retreats the cursor.
    *
    * @name Phaser.ArraySet#previous
    * @property {any} previous
    */
    previous: {

        enumerable: true,

        get: function ()
        {
            if (this.position > 0)
            {
                this.position--;

                return this.list[this.position];
            }
            else
            {
                return null;
            }
        }

    }

});

module.exports = Children;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Children: __webpack_require__(18),
    Color: __webpack_require__(92),
    Data: __webpack_require__(93),
    Transform: __webpack_require__(94)

};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);

/**
 * The pool into which the canvas elements are placed.
 *
 * @property pool
 * @type Array
 */
var pool = [];

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games on the same page
//  can share the one single pool

/**
* The CanvasPool is a global static object, that allows Phaser to recycle and pool Canvas DOM elements.
*
* @class Phaser.CanvasPool
* @static
*/
var CanvasPool = function ()
{
    /**
    * Creates a new Canvas DOM element, or pulls one from the pool if free.
    * 
    * @method Phaser.CanvasPool.create
    * @static
    * @param {any} parent - The parent of the canvas element.
    * @param {number} width - The width of the canvas element.
    * @param {number} height - The height of the canvas element.
    * @return {HTMLCanvasElement} The canvas element.
    */
    var create = function (parent, width, height, type)
    {
        if (width === undefined) { width = 1; }
        if (height === undefined) { height = 1; }
        if (type === undefined) { type = CONST.CANVAS; }

        var canvas;
        var container = first(type);

        if (container === null)
        {
            // console.log('CanvasPool.create new');

            container = {
                parent: parent,
                canvas: document.createElement('canvas'),
                type: type
            };

            pool.push(container);

            canvas = container.canvas;
        }
        else
        {
            // console.log('CanvasPool.create existing');

            container.parent = parent;

            canvas = container.canvas;
        }

        canvas.width = width;
        canvas.height = height;
        
        return canvas;
    };

    var create2D = function (parent, width, height)
    {
        return create(parent, width, height, CONST.CANVAS);
    };

    var createWebGL = function (parent, width, height)
    {
        return create(parent, width, height, CONST.WEBGL);
    };

    /**
    * Gets the first free canvas index from the pool.
    * 
    * @static
    * @method Phaser.CanvasPool.getFirst
    * @return {number}
    */
    var first = function (type)
    {
        if (type === undefined) { type = CONST.CANVAS; }

        pool.forEach(function (container)
        {
            if (!container.parent && container.type === type)
            {
                return container;
            }
        });

        return null;
    };

    /**
    * Looks up a canvas based on its parent, and if found puts it back in the pool, freeing it up for re-use.
    * The canvas has its width and height set to 1, and its parent attribute nulled.
    * 
    * @static
    * @method Phaser.CanvasPool.remove
    * @param {any|HTMLCanvasElement} parent - The parent of the canvas element.
    */
    var remove = function (parent)
    {
        //  Check to see if the parent is a canvas object
        var isCanvas = parent instanceof HTMLCanvasElement;

        pool.forEach(function (container)
        {
            if ((isCanvas && container.canvas === parent) || (!isCanvas && container.parent === parent))
            {
                // console.log('CanvasPool.remove found and removed');
                container.parent = null;
                container.canvas.width = 1;
                container.canvas.height = 1;
            }
        });
    };

    /**
    * Gets the total number of used canvas elements in the pool.
    * 
    * @static
    * @method Phaser.CanvasPool.getTotal
    * @return {number} The number of in-use (parented) canvas elements in the pool.
    */
    var total = function ()
    {
        var c = 0;

        pool.forEach(function (container)
        {
            if (container.parent)
            {
                c++;
            }
        });

        return c;
    };

    /**
    * Gets the total number of free canvas elements in the pool.
    * 
    * @static
    * @method Phaser.CanvasPool.getFree
    * @return {number} The number of free (un-parented) canvas elements in the pool.
    */
    var free = function ()
    {
        return pool.length - total();
    };

    return {
        create: create,
        create2D: create2D,
        createWebGL: createWebGL,
        first: first,
        remove: remove,
        total: total,
        free: free,
        pool: pool
    };
};

//  If we export the called function here, it'll only be invoked once (not every time it's required).
module.exports = CanvasPool();


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var MATH_CONST = __webpack_require__(2);
var ScaleModes = __webpack_require__(10);
var Component = __webpack_require__(19);
var WrapAngle = __webpack_require__(12);

/**
* This is the base Game Object class that you can use when creating your own extended Game Objects.
* It hides away the 'private' stuff and exposes only the useful getters, setters and properties.
*
* @class
*/

//  Phaser.Texture and Phaser.Frame objects passed in here, instead of looked-up.
//  Allows override from non-standard GO types

var GameObject = function (state, x, y, texture, frame, parent)
{
    this.state = state;

    this.game = state.game;

    this.name = '';

    this.type = 0;

    this.parent = parent;

    //  Texture is globally shared between GameObjects, not specific to this one
    this.texture = texture;

    //  Frame is globally shared between GameObjects, not specific to this one
    this.frame = frame;

    //  All GameObjects have the following components, always:
    this.transform = new Component.Transform(this, x, y);

    //  Optional? Maybe set on a per GO basis?
    this.data = new Component.Data(this);

    this.color = new Component.Color(this);

    //  ----------------------------------------------------------------
    //  ----------------------------------------------------------------
    //  The following properties are debatable to have in this class
    //  ----------------------------------------------------------------
    //  ----------------------------------------------------------------

    this.scaleMode = ScaleModes.DEFAULT;

    //  Allows you to turn off a GameObject from rendering, but still render its children (if it has any)
    //  Maybe this should move?
    // this.skipRender = (key === undefined);
    this.skipRender = false;

    this.visible = true;

    //  Either null, or the Children component
    this.children = null;

    this.exists = true;
};

GameObject.prototype.constructor = GameObject;

GameObject.prototype = {

    preUpdate: function ()
    {
        //  NOOP
    },

    update: function ()
    {
        //  NOOP
    },

    postUpdate: function ()
    {
        //  NOOP
    },

    render: function ()
    {
        //  NOOP
    },

    destroy: function ()
    {
        //  NOOP
    }

};

Object.defineProperties(GameObject.prototype, {

    //  Transform getters / setters

    x: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posX;
        },

        set: function (value)
        {
            this.transform._posX = value;
            this.transform.dirty = true;
        }

    },

    y: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posY;
        },

        set: function (value)
        {
            this.transform._posY = value;
            this.transform.dirty = true;
        }

    },

    scale: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX;
        },

        set: function (value)
        {
            this.transform._scaleX = value;
            this.transform._scaleY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    scaleX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX;
        },

        set: function (value)
        {
            this.transform._scaleX = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    scaleY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleY;
        },

        set: function (value)
        {
            this.transform._scaleY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    anchor: {

        enumerable: true,

        get: function ()
        {
            return this.transform._anchorX;
        },

        set: function (value)
        {
            this.transform.setAnchor(value);
        }

    },

    anchorX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._anchorX;
        },

        set: function (value)
        {
            this.transform._anchorX = value;
            this.transform.dirty = true;
        }

    },

    anchorY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._anchorY;
        },

        set: function (value)
        {
            this.transform._anchorY = value;
            this.transform.dirty = true;
        }

    },

    pivotX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._pivotX;
        },

        set: function (value)
        {
            this.transform._pivotX = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    pivotY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._pivotY;
        },

        set: function (value)
        {
            this.transform._pivotY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    angle: {

        enumerable: true,

        get: function ()
        {
            return WrapAngle(this.rotation * MATH_CONST.RAD_TO_DEG);
        },

        set: function (value)
        {
            this.rotation = WrapAngle(value) * MATH_CONST.DEG_TO_RAD;
        }

    },

    rotation: {

        enumerable: true,

        get: function ()
        {
            return this.transform._rotation;
        },

        set: function (value)
        {
            if (this.transform._rotation === value)
            {
                return;
            }

            this.transform._rotation = value;
            this.transform.dirty = true;

            if (this.transform._rotation % MATH_CONST.PI2)
            {
                this.transform.cache.sr = Math.sin(this.transform._rotation);
                this.transform.cache.cr = Math.cos(this.transform._rotation);
                this.transform.updateCache();
                this.transform.hasLocalRotation = true;
            }
            else
            {
                this.transform.hasLocalRotation = false;
            }
        }

    },

    //  Color getters / setters

    alpha: {

        enumerable: true,

        get: function ()
        {
            return this.color._alpha;
        },

        set: function (value)
        {
            this.color.alpha = value;
        }

    },

    blendMode: {

        enumerable: true,

        get: function ()
        {
            return this.color._blendMode;
        },

        set: function (value)
        {
            this.color.blendMode = value;
        }

    }

});

module.exports = GameObject;


/***/ },
/* 22 */
/***/ function(module, exports) {

var Contains = function (circle, x, y)
{
    //  Check if x/y are within the bounds first
    if (circle.radius > 0 && x >= circle.left && x <= circle.right && y >= circle.top && y <= circle.bottom)
    {
        var dx = (circle.x - x) * (circle.x - x);
        var dy = (circle.y - y) * (circle.y - y);

        return (dx + dy) <= (circle.radius * circle.radius);
    }
    else
    {
        return false;
    }
};

module.exports = Contains;


/***/ },
/* 23 */
/***/ function(module, exports) {

var Contains = function (ellipse, x, y)
{
    if (ellipse.width <= 0 || ellipse.height <= 0)
    {
        return false;
    }
 
    //  Normalize the coords to an ellipse with center 0,0 and a radius of 0.5
    var normx = ((x - ellipse.x) / ellipse.width) - 0.5;
    var normy = ((y - ellipse.y) / ellipse.height) - 0.5;
 
    normx *= normx;
    normy *= normy;
 
    return (normx + normy < 0.25);
};

module.exports = Contains;


/***/ },
/* 24 */
/***/ function(module, exports) {

/**
* Convert a distance along this curve into a `time` value which will be between 0 and 1.
* 
* For example if this curve has a length of 100 pixels then `findT(50)` would return `0.5`.
*
* @method Phaser.Hermite#findT
* @param {integer} distance - The distance into the curve in pixels. Should be a positive integer.
* @return {number} The time (`t`) value, a float between 0 and 1.
*/
var FindT = function (curve, distance)
{
    if (distance <= 0)
    {
        return 0;
    }

    //  Find the _points which bracket the distance value
    var ti = Math.floor(distance / curve.length * curve._accuracy);

    while (ti > 0 && curve._points[ti] > distance)
    {
        ti--;
    }

    while (ti < curve._accuracy && curve._points[ti] < distance)
    {
        ti++;
    }

    //  Linear interpolation to get a more accurate fix
    var dt = curve._points[ti] - curve._points[ti - 1];
    var d = distance - curve._points[ti - 1];

    return ((ti - 1) / curve._accuracy) + d / (dt * curve._accuracy);
};

module.exports = FindT;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

/**
* Get a point on the curve using the `t` (time) value, which must be between 0 and 1.
*
* @method Phaser.Hermite#getPoint
* @param {number} [t=0] - The time value along the curve from which to extract a point. This is a value between 0 and 1, where 0 represents the start of the curve and 1 the end.
* @param {Phaser.Point|Object} [point] - An optional Phaser.Point, or Object containing public `x` and `y` properties. If given the resulting values will be stored in the Objects `x` and `y` properties. If omitted a new Phaser.Point object is created.
* @return {Phaser.Point} An Object with the x, y coordinate of the curve at the specified `t` value set in its `x` and `y` properties.
*/
var GetPoint = function (curve, t, out)
{
    if (t === undefined) { t = 0; }
    if (out === undefined) { out = new Point(); }

    if (t < 0)
    {
        t = 0;
    }

    if (t > 1)
    {
        t = 1;
    }

    var t2 = t * t;
    var t3 = t * t2;

    out.x = t3 * curve._ax + t2 * curve._bx + t * curve._v1x + curve._p1x;
    out.y = t3 * curve._ay + t2 * curve._by + t * curve._v1y + curve._p1y;

    return out;
};

module.exports = GetPoint;


/***/ },
/* 26 */
/***/ function(module, exports) {


var RotateAroundXY = function (line, x, y, angle)
{
    var c = Math.cos(angle);
    var s = Math.sin(angle);

    var tx = line.x1 - x;
    var ty = line.y1 - y;

    line.x1 = tx * c - ty * s + x;
    line.y1 = tx * s + ty * c + y;

    tx = line.x2 - x;
    ty = line.y2 - y;

    line.x2 = tx * c - ty * s + x;
    line.y2 = tx * s + ty * c + y;

    return line;
};

module.exports = RotateAroundXY;


/***/ },
/* 27 */
/***/ function(module, exports) {

var Dot = function (pointA, pointB)
{
    return ((pointA.x * pointB.x) + (pointA.y * pointB.y));
};

module.exports = Dot;


/***/ },
/* 28 */
/***/ function(module, exports) {

var GetAspectRatio = function (rect)
{
    return (rect.height === 0) ? NaN : rect.width / rect.height;
};

module.exports = GetAspectRatio;


/***/ },
/* 29 */
/***/ function(module, exports) {

//  Creates an XHRSettings Object with default values

var XHRSettings = function (responseType, async, user, password, timeout)
{
    if (responseType === undefined) { responseType = ''; }
    if (async === undefined) { async = true; }
    if (user === undefined) { user = ''; }
    if (password === undefined) { password = ''; }
    if (timeout === undefined) { timeout = 0; }

    // Before sending a request, set the xhr.responseType to "text", 
    // "arraybuffer", "blob", or "document", depending on your data needs. 
    // Note, setting xhr.responseType = '' (or omitting) will default the response to "text".

    return {

        //  Ignored by the Loader, only used by File.
        responseType: responseType,

        async: async,

        //  credentials
        user: user,
        password: password,

        //  timeout in ms (0 = no timeout)
        timeout: timeout,

        //  setRequestHeader
        header: undefined,
        headerValue: undefined,

        //  overrideMimeType
        overrideMimeType: undefined

    };
    
};

module.exports = XHRSettings;


/***/ },
/* 30 */
/***/ function(module, exports) {

var CreateBuffer = function (gl, bufferType, usage, bufferData, bufferSize)
{
    var buffer = gl.createBuffer();
    gl.bindBuffer(bufferType, buffer);
    if (bufferData && ArrayBuffer.isView(bufferData))
    {
        gl.bufferData(bufferType, bufferData, usage);
    }
    else
    {
        gl.bufferData(bufferType, bufferSize, usage);
    }
    return buffer;
};

module.exports = CreateBuffer;


/***/ },
/* 31 */
/***/ function(module, exports) {

var IndexBuffer = function (byteSize)
{
    this.wordLength = 0;
    this.wordCapacity = byteSize / 2;
    this.buffer = new ArrayBuffer(byteSize);
    this.shortView = new Int16Array(this.buffer);
    this.wordView = new Uint16Array(this.buffer);
};

IndexBuffer.prototype.clear = function ()
{
    this.wordLength = 0;
};

IndexBuffer.prototype.getByteLength = function ()
{
    return this.wordLength * 2;
};

IndexBuffer.prototype.getByteCapacity = function () 
{
    return this.buffer.byteLength;
};

IndexBuffer.prototype.allocate = function (wordSize)
{
    var currentLength = this.wordLength;
    this.wordLength += wordSize;
    return currentLength;
};

IndexBuffer.prototype.getUsedBufferAsShort = function ()
{
    return this.shortView.subarray(0, this.dwordLength);
};

IndexBuffer.prototype.getUsedBufferAsWord = function ()
{
    return this.wordView.subarray(0, this.dwordLength);
};

module.exports = IndexBuffer;


/***/ },
/* 32 */
/***/ function(module, exports) {

var VertexBuffer = function (byteSize)
{
    this.dwordLength = 0;
    this.dwordCapacity = byteSize / 4;
    this.buffer = new ArrayBuffer(byteSize);
    this.floatView = new Float32Array(this.buffer);
    this.intView = new Int32Array(this.buffer);
    this.uintView = new Uint32Array(this.buffer);
};

VertexBuffer.prototype.clear = function ()
{
    this.dwordLength = 0;
};

VertexBuffer.prototype.getByteLength = function ()
{
    return this.dwordLength * 4;
};

VertexBuffer.prototype.getByteCapacity = function () 
{
    return this.buffer.byteLength;
};

VertexBuffer.prototype.allocate = function (dwordSize)
{
    var currentLength = this.dwordLength;
    this.dwordLength += dwordSize;
    return currentLength;
};

VertexBuffer.prototype.getUsedBufferAsFloat = function ()
{
    return this.floatView.subarray(0, this.dwordLength);
};

VertexBuffer.prototype.getUsedBufferAsInt = function ()
{
    return this.intView.subarray(0, this.dwordLength);
};

VertexBuffer.prototype.getUsedBufferAsUint = function ()
{
    return this.uintView.subarray(0, this.dwordLength);
};

module.exports = VertexBuffer;


/***/ },
/* 33 */
/***/ function(module, exports) {

var CreateProgram = function (gl, vertexShader, fragmentShader)
{
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    {
        console.error('Failed to link program. Error: \n' + gl.getProgramInfoLog(program));
        return null;
    }
    return program;
};

module.exports = CreateProgram;


/***/ },
/* 34 */
/***/ function(module, exports) {

var CreateShader = function (gl, shaderSource, shaderType)
{
    var shader = null;
    shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    {
        console.error('Failed ' + (shaderType === gl.VERTEX_SHADER ? 'vertex' : shaderType === gl.FRAGMENT_SHADER ? 'fragment' : 'invalid') + ' shader compilation. Error: \n' + gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
};

module.exports = CreateShader;


/***/ },
/* 35 */
/***/ function(module, exports) {

var BindVertexArray = function (gl, vao)
{
    var attributes = vao.attributes;
    gl.bindBuffer(gl.ARRAY_BUFFER, vao.buffer);
    for (var index = 0, length = attributes.length; index < length; ++index)
    {
        var attrib = attributes[index];
        var location = attrib.location;
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(
            location,
            attrib.size,
            attrib.type,
            attrib.normalized,
            attrib.stride,
            attrib.offset
        );
    }
};

module.exports = BindVertexArray;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

var Attribute = __webpack_require__(320);

var CreateAttribDesc = function (gl, program, name, size, type, normalized, stride, offset)
{
    return new Attribute(
        gl.getAttribLocation(program, name),
        size,
        type,
        normalized,
        stride,
        offset
    );
};

module.exports = CreateAttribDesc;


/***/ },
/* 37 */
/***/ function(module, exports) {

var VertexArray = function (vbo, attributes)
{
    this.buffer = vbo;
    this.attributes = attributes;
};

module.exports = VertexArray;


/***/ },
/* 38 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

var CanvasPool = __webpack_require__(20);

var CanvasFeatures = {

    supportNewBlendModes: false,

    supportInverseAlpha: false

};

function checkBlendMode ()
{
    var pngHead = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/';
    var pngEnd = 'AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';

    var magenta = new Image();
    magenta.src = pngHead + 'AP804Oa6' + pngEnd;

    var yellow = new Image();
    yellow.src = pngHead + '/wCKxvRF' + pngEnd;

    var canvas = CanvasPool.create(this, 6, 1);
    var context = canvas.getContext('2d');

    context.globalCompositeOperation = 'multiply';
    context.drawImage(magenta, 0, 0);
    context.drawImage(yellow, 2, 0);

    if (!context.getImageData(2, 0, 1, 1))
    {
        return false;
    }

    var data = context.getImageData(2, 0, 1, 1).data;

    CanvasPool.remove(this);

    return (data[0] === 255 && data[1] === 0 && data[2] === 0);
}

function checkInverseAlpha ()
{
    var canvas = CanvasPool.create(this, 2, 1);
    var context = canvas.getContext('2d');

    context.fillStyle = 'rgba(10, 20, 30, 0.5)';

    //  Draw a single pixel
    context.fillRect(0, 0, 1, 1);

    //  Get the color values
    var s1 = context.getImageData(0, 0, 1, 1);

    if (s1 === null)
    {
        return false;
    }

    //  Plot them to x2
    context.putImageData(s1, 1, 0);

    //  Get those values
    var s2 = context.getImageData(1, 0, 1, 1);

    //  Compare and return
    return (s2.data[0] === s1.data[0] && s2.data[1] === s1.data[1] && s2.data[2] === s1.data[2] && s2.data[3] === s1.data[3]);
}

function init ()
{
    if (document !== undefined)
    {
        CanvasFeatures.supportNewBlendModes = checkBlendMode();
        CanvasFeatures.supportInverseAlpha = checkInverseAlpha();
    }

    return CanvasFeatures;
}

module.exports = init();


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(4);
var Browser = __webpack_require__(5);
var CanvasPool = __webpack_require__(20);

var Features = {

    /**
    * @property {boolean} canvas - Is canvas available?
    * @default
    */
    canvas: false,

    /**
    * @property {?boolean} canvasBitBltShift - True if canvas supports a 'copy' bitblt onto itself when the source and destination regions overlap.
    * @default
    */
    canvasBitBltShift: null,

    /**
    * @property {boolean} webGL - Is webGL available?
    * @default
    */
    webGL: false,

    /**
    * @property {boolean} file - Is file available?
    * @default
    */
    file: false,

    /**
    * @property {boolean} fileSystem - Is fileSystem available?
    * @default
    */
    fileSystem: false,

    /**
    * @property {boolean} localStorage - Is localStorage available?
    * @default
    */
    localStorage: false,

    /**
    * @property {boolean} worker - Is worker available?
    * @default
    */
    worker: false,

    /**
    * @property {boolean} pointerLock - Is Pointer Lock available?
    * @default
    */
    pointerLock: false,

    /**
    * @property {boolean} vibration - Does the device support the Vibration API?
    * @default
    */
    vibration: false,

    /**
    * @property {boolean} getUserMedia - Does the device support the getUserMedia API?
    * @default
    */
    getUserMedia: true,

    /**
    * @property {boolean} littleEndian - Is the device big or little endian? (only detected if the browser supports TypedArrays)
    * @default
    */
    littleEndian: false,

    /**
    * @property {boolean} support32bit - Does the device context support 32bit pixel manipulation using array buffer views?
    * @default
    */
    support32bit: false

};

/**
* Check Little or Big Endian system.
*
* @author Matt DesLauriers (@mattdesl)
*/
function checkIsLittleEndian ()
{
    var a = new ArrayBuffer(4);
    var b = new Uint8Array(a);
    var c = new Uint32Array(a);

    b[0] = 0xa1;
    b[1] = 0xb2;
    b[2] = 0xc3;
    b[3] = 0xd4;

    if (c[0] === 0xd4c3b2a1)
    {
        return true;
    }

    if (c[0] === 0xa1b2c3d4)
    {
        return false;
    }
    else
    {
        //  Could not determine endianness
        return null;
    }
}

function init ()
{
    Features.canvas = !!window['CanvasRenderingContext2D'] || OS.cocoonJS;

    try
    {
        Features.localStorage = !!localStorage.getItem;
    }
    catch (error)
    {
        Features.localStorage = false;
    }

    Features.file = !!window['File'] && !!window['FileReader'] && !!window['FileList'] && !!window['Blob'];
    Features.fileSystem = !!window['requestFileSystem'];

    var isUint8 = false;

    var testWebGL = function ()
    {
        if (window['WebGLRenderingContext'])
        {
            try
            {
                var canvas = CanvasPool.createWebGL(this);

                if (OS.cocoonJS)
                {
                    canvas.screencanvas = false;
                }

                var ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

                var canvas2D = CanvasPool.create2D(this);

                var ctx2D = canvas2D.getContext('2d');

                //  Can't be done on a webgl context
                var image = ctx2D.createImageData(1, 1);
    
                /**
                * Test to see if ImageData uses CanvasPixelArray or Uint8ClampedArray.
                *
                * @author Matt DesLauriers (@mattdesl)
                */
                isUint8 = image.data instanceof Uint8ClampedArray;

                CanvasPool.remove(canvas);
                CanvasPool.remove(canvas2D);

                return (ctx !== null);
            }
            catch (e)
            {
                return false;
            }
        }
        
        return false;
    };

    Features.webGL = testWebGL();

    Features.worker = !!window['Worker'];

    Features.pointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    Features.getUserMedia = Features.getUserMedia && !!navigator.getUserMedia && !!window.URL;

    // Older versions of firefox (< 21) apparently claim support but user media does not actually work
    if (Browser.firefox && Browser.firefoxVersion < 21)
    {
        Features.getUserMedia = false;
    }

    // Excludes iOS versions as they generally wrap UIWebView (eg. Safari WebKit) and it
    // is safer to not try and use the fast copy-over method.
    if (!OS.iOS && (Browser.ie || Browser.firefox || Browser.chrome))
    {
        Features.canvasBitBltShift = true;
    }

    // Known not to work
    if (Browser.safari || Browser.mobileSafari)
    {
        Features.canvasBitBltShift = false;
    }

    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if (navigator.vibrate)
    {
        Features.vibration = true;
    }

    if (typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint32Array !== 'undefined')
    {
        Features.littleEndian = checkIsLittleEndian();
    }

    Features.support32bit = (
        typeof ArrayBuffer !== 'undefined' &&
        typeof Uint8ClampedArray !== 'undefined' &&
        typeof Int32Array !== 'undefined' &&
        Features.littleEndian !== null &&
        isUint8
    );

    return Features;
}

module.exports = init();


/***/ },
/* 41 */
/***/ function(module, exports) {

var EVENT_CONST = {

    DISPATCHER_IDLE: 0,
    DISPATCHER_DISPATCHING: 1,
    DISPATCHER_REMOVING: 2,
    DISPATCHER_DESTROYED: 3,

    LISTENER_PENDING: 4,
    LISTENER_ACTIVE: 5,
    LISTENER_REMOVING: 6

};

module.exports = EVENT_CONST;


/***/ },
/* 42 */
/***/ function(module, exports) {

var Circle = function (x, y, radius)
{
    if (x === undefined) { x = 0; }
    if (y === undefined) { y = 0; }
    if (radius === undefined) { radius = 0; }

    this.x = x;

    this.y = y;

    this._radius = radius;
    this._diameter = radius * 2;
};

Circle.prototype.constructor = Circle;

Circle.prototype = {

    setTo: function (x, y, radius)
    {
        this.x = x;
        this.y = y;
        this._radius = radius;
        this._diameter = radius * 2;

        return this;
    },

    setEmpty: function ()
    {
        return this.setTo(0, 0, 0);
    },

    setPosition: function (x, y)
    {
        if (y === undefined) { y = x; }

        this.x = x;
        this.y = y;

        return this;
    },

    isEmpty: function ()
    {
        return (this._radius <= 0);
    }

};

Object.defineProperties(Circle.prototype, {

    radius: {

        enumerable: true,

        get: function ()
        {
            return this._radius;
        },

        set: function (value)
        {
            this._radius = value;
            this._diameter = value * 2;
        }

    },

    diameter: {

        enumerable: true,

        get: function ()
        {
            return this._diameter;
        },

        set: function (value)
        {
            this._diameter = value;
            this._radius = value * 0.5;
        }

    },

    left: {

        enumerable: true,

        get: function ()
        {
            return this.x - this._radius;
        },

        set: function (value)
        {
            this.x = value + this._radius;
        }

    },

    right: {

        enumerable: true,

        get: function ()
        {
            return this.x + this._radius;
        },

        set: function (value)
        {
            this.x = value - this._radius;
        }

    },

    top: {

        enumerable: true,

        get: function ()
        {
            return this.y - this._radius;
        },

        set: function (value)
        {
            this.y = value + this._radius;
        }

    },

    bottom: {

        enumerable: true,

        get: function ()
        {
            return this.y + this._radius;
        },

        set: function (value)
        {
            this.y = value - this._radius;
        }

    }

});

module.exports = Circle;


/***/ },
/* 43 */
/***/ function(module, exports) {

var Ellipse = function (x, y, width, height)
{
    if (x === undefined) { x = 0; }
    if (y === undefined) { y = 0; }
    if (width === undefined) { width = 0; }
    if (height === undefined) { height = 0; }

    this.x = x;

    this.y = y;

    this.width = width;

    this.height = height;
};

Ellipse.prototype.constructor = Ellipse;

Ellipse.prototype = {

    setTo: function (x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        return this;
    },

    setEmpty: function ()
    {
        return this.setTo(0, 0, 0, 0);
    },

    setPosition: function (x, y)
    {
        if (y === undefined) { y = x; }

        this.x = x;
        this.y = y;

        return this;
    },

    setSize: function (width, height)
    {
        if (height === undefined) { height = width; }

        this.width = width;
        this.height = height;

        return this;
    },

    isEmpty: function ()
    {
        return (this.width <= 0 || this.height <= 0);
    },

    //  AKA Semi Minor Axis
    getMinorRadius: function ()
    {
        return Math.min(this.width, this.height) / 2;
    },

    //  AKA Semi Major Axis
    getMajorRadius: function ()
    {
        return Math.max(this.width, this.height) / 2;
    }

};

Object.defineProperties(Ellipse.prototype, {

    left: {

        enumerable: true,

        get: function ()
        {
            return this.x;
        },

        set: function (value)
        {
            if (value >= this.right)
            {
                this.width = 0;
            }
            else
            {
                this.width = this.right - value;
            }

            this.x = value;
        }

    },

    right: {

        enumerable: true,

        get: function ()
        {
            return this.x + this.width;
        },

        set: function (value)
        {
            if (value <= this.x)
            {
                this.width = 0;
            }
            else
            {
                this.width = value - this.x;
            }
        }

    },

    top: {

        enumerable: true,

        get: function ()
        {
            return this.y;
        },

        set: function (value)
        {
            if (value >= this.bottom)
            {
                this.height = 0;
                this.y = value;
            }
            else
            {
                this.height = (this.bottom - value);
            }
        }

    },

    bottom: {

        enumerable: true,

        get: function ()
        {
            return this.y + this.height;
        },

        set: function (value)
        {
            if (value <= this.y)
            {
                this.height = 0;
            }
            else
            {
                this.height = value - this.y;
            }
        }

    }

});

module.exports = Ellipse;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

var GetPoint = __webpack_require__(25);

/**
* Calculate and return the angle, in radians, of the curves tangent based on time.
*
* @method Phaser.Hermite#getAngle
* @param {number} [t=0] - The `t` (time) value at which to find the angle. Must be between 0 and 1.
* @return {number} The angle of the line at the specified `t` time value along the curve. The value is in radians.
*/
var GetAngle = function (curve, t)
{
    if (t === undefined) { t = 0; }

    GetPoint(curve, t - 0.01, curve._temp1);
    GetPoint(curve, t + 0.01, curve._temp2);

    return Math.atan2(curve._temp2.y - curve._temp1.y, curve._temp2.x - curve._temp1.x);
};

module.exports = GetAngle;


/***/ },
/* 45 */
/***/ function(module, exports) {

var PointToLine = function (point, line)
{
    return ((point.x - line.x1) * (line.y2 - line.y1) === (line.x2 - line.x1) * (point.y - line.y1));
};

module.exports = PointToLine;


/***/ },
/* 46 */
/***/ function(module, exports) {

var RectangleToRectangle = function (rectA, rectB)
{
    if (rectA.width <= 0 || rectA.height <= 0 || rectB.width <= 0 || rectB.height <= 0)
    {
        return false;
    }

    return !(rectA.right < rectB.x || rectA.bottom < rectB.y || rectA.x > rectB.right || rectA.y > rectB.bottom);
};

module.exports = RectangleToRectangle;


/***/ },
/* 47 */
/***/ function(module, exports) {

//  Defines a Line segment, a part of a line between two endpoints

var Line = function (x1, y1, x2, y2)
{
    if (x1 === undefined) { x1 = 0; }
    if (y1 === undefined) { y1 = 0; }
    if (x2 === undefined) { x2 = 0; }
    if (y2 === undefined) { y2 = 0; }

    this.x1 = x1;

    this.y1 = y1;

    this.x2 = x2;

    this.y2 = y2;
};

Line.prototype.constructor = Line;

Line.prototype = {

    setTo: function (x1, y1, x2, y2)
    {
        if (x1 === undefined) { x1 = 0; }
        if (y1 === undefined) { y1 = 0; }
        if (x2 === undefined) { x2 = 0; }
        if (y2 === undefined) { y2 = 0; }

        this.x1 = x1;
        this.y1 = y1;

        this.x2 = x2;
        this.y2 = y2;

        return this;
    }

};

Object.defineProperties(Line.prototype, {

    left: {

        enumerable: true,

        get: function ()
        {
            return Math.min(this.x1, this.x2);
        },

        set: function (value)
        {
            if (this.x1 <= this.x2)
            {
                this.x1 = value;
            }
            else
            {
                this.x2 = value;
            }
        }

    },

    right: {

        enumerable: true,

        get: function ()
        {
            return Math.max(this.x1, this.x2);
        },

        set: function (value)
        {
            if (this.x1 > this.x2)
            {
                this.x1 = value;
            }
            else
            {
                this.x2 = value;
            }
        }

    },

    top: {

        enumerable: true,

        get: function ()
        {
            return Math.min(this.y1, this.y2);
        },

        set: function (value)
        {
            if (this.y1 <= this.y2)
            {
                this.y1 = value;
            }
            else
            {
                this.y2 = value;
            }
        }

    },

    bottom: {

        enumerable: true,

        get: function ()
        {
            return Math.max(this.y1, this.y2);
        },

        set: function (value)
        {
            if (this.y1 > this.y2)
            {
                this.y1 = value;
            }
            else
            {
                this.y2 = value;
            }
        }

    }

});

module.exports = Line;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var MATH_CONST = __webpack_require__(2);
var Wrap = __webpack_require__(11);
var Angle = __webpack_require__(6);

var NormalAngle = function (line)
{
    var angle = Angle(line) - MATH_CONST.TAU;

    return Wrap(angle, -Math.PI, Math.PI);
};

module.exports = NormalAngle;


/***/ },
/* 49 */
/***/ function(module, exports) {

var GetMagnitude = function (point)
{
    return Math.sqrt((point.x * point.x) + (point.y * point.y));
};

module.exports = GetMagnitude;


/***/ },
/* 50 */
/***/ function(module, exports) {

var GetMagnitudeSq = function (point)
{
    return (point.x * point.x) + (point.y * point.y);
};

module.exports = GetMagnitudeSq;


/***/ },
/* 51 */
/***/ function(module, exports) {

var Multiply = function (point, x, y)
{
    point.x *= x;
    point.y *= y;

    return point;
};

module.exports = Multiply;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var GetMagnitude = __webpack_require__(49);

var Normalize = function (point)
{
    if (point.x !== 0 && point.y !== 0)
    {
        var m = GetMagnitude(point);

        point.x /= m;
        point.y /= m;
    }

    return point;
};

module.exports = Normalize;


/***/ },
/* 53 */
/***/ function(module, exports) {

/**
* Checks whether the x and y coordinates are contained within this polygon.
*
* @method Phaser.Polygon#contains
* @param {number} x - The X value of the coordinate to test.
* @param {number} y - The Y value of the coordinate to test.
* @return {boolean} True if the coordinates are within this polygon, otherwise false.
*/
var Contains = function (polygon, x, y)
{
    //  Adapted from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html by Jonas Raoni Soares Silva

    var inside = false;

    for (var i = -1, j = polygon.points.length - 1; ++i < polygon.points.length; j = i)
    {
        var ix = polygon.points[i].x;
        var iy = polygon.points[i].y;

        var jx = polygon.points[j].x;
        var jy = polygon.points[j].y;

        if (((iy <= y && y < jy) || (jy <= y && y < iy)) && (x < (jx - ix) * (y - iy) / (jy - iy) + ix))
        {
            inside = !inside;
        }
    }

    return inside;
};

module.exports = Contains;


/***/ },
/* 54 */
/***/ function(module, exports) {

var Polygon = function (points)
{
    /**
    * @property {number} area - The area of this Polygon.
    */
    this.area = 0;

    /**
    * @property {array} points - An array of number pair objects that make up this polygon. I.e. [ {x,y}, {x,y}, {x,y} ]
    */
    this.points = [];

    if (points)
    {
        this.setTo(points);
    }
};

Polygon.prototype.constructor = Polygon;

Polygon.prototype = {

    /**
     * Sets this Polygon to the given points.
     *
     * The points can be set from a variety of formats:
     *
     * - An array of Point objects: `[new Phaser.Point(x1, y1), ...]`
     * - An array of objects with public x/y properties: `[obj1, obj2, ...]`
     * - An array of paired numbers that represent point coordinates: `[x1,y1, x2,y2, ...]`
     * - An array of arrays with two elements representing x/y coordinates: `[[x1, y1], [x2, y2], ...]`
     *
     * `setTo` may also be called without any arguments to remove all points.
     *
     * @method Phaser.Polygon#setTo
     * @param {Phaser.Point[]|number[]|...Phaser.Point|...number} points - The points to set.
     * @return {Phaser.Polygon} This Polygon object
     */
    setTo: function (points)
    {
        this.area = 0;
        this.points = [];

        if (!Array.isArray(points))
        {
            return this;
        }

        var entry;
        var y0 = Number.MAX_VALUE;
        var p;

        //  The points argument is an array, so iterate through it
        for (var i = 0; i < points.length; i++)
        {
            p = { x: 0, y: 0 };

            if (typeof points[i] === 'number')
            {
                p.x = points[i];
                p.y = points[i + 1];
                i++;
            }
            else if (Array.isArray(entry))
            {
                //  An array of arrays?
                p.x = points[i][0];
                p.y = points[i][1];
            }
            else
            {
                p.x = points[i].x;
                p.y = points[i].y;
            }

            this.points.push(p);

            //  Lowest boundary
            if (p.y < y0)
            {
                y0 = p.y;
            }
        }

        this.calculateArea(y0);

        return this;
    },

    /**
     * Calculates the area of the Polygon. This is available in the property Polygon.area
     *
     * @method Phaser.Polygon#calculateArea
     * @private
     * @param {number} y0 - The lowest boundary
     * @return {number} The area of the Polygon.
     */
    calculateArea: function (y0)
    {
        if (this.points.length < 3)
        {
            this.area = 0;

            return this.area;
        }

        var sum = 0;
        var p1;
        var p2;

        for (var i = 0; i < this.points.length - 1; i++)
        {
            p1 = this.points[i];
            p2 = this.points[i + 1];

            sum += (p2.x - p1.x) * (p1.y + p2.y);
        }

        p1 = this.points[0];
        p2 = this.points[this.points.length - 1];

        sum += (p1.x - p2.x) * (p2.y + p1.y);

        this.area = -sum * 0.5;

        // var p1;
        // var p2;
        // var avgHeight;
        // var width;

        // for (var i = 0, len = this.points.length; i < len; i++)
        // {
        //     p1 = this.points[i];

        //     if (i === len - 1)
        //     {
        //         p2 = this.points[0];
        //     }
        //     else
        //     {
        //         p2 = this.points[i + 1];
        //     }

        //     avgHeight = ((p1.y - y0) + (p2.y - y0)) / 2;
        //     width = p1.x - p2.x;
        //     this.area += avgHeight * width;
        // }

        return this.area;
    }

};

module.exports = Polygon;


/***/ },
/* 55 */
/***/ function(module, exports) {

var Contains = function (rect, x, y)
{
    if (rect.width <= 0 || rect.height <= 0)
    {
        return false;
    }

    return (rect.x <= x && rect.x + rect.width >= x && rect.y <= y && rect.y + rect.height >= y);
};

module.exports = Contains;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var XHRSettings = __webpack_require__(29);

//  Takes two XHR Objects and creates a new object

//  The new object is based on global initially, but any setting in
//  local overrides the global value.

var MergeXHRSettings = function (global, local)
{
    var output = (global === undefined) ? XHRSettings() : Object.assign(global);

    if (local)
    {
        for (var setting in local)
        {
            if (local[setting] !== undefined)
            {
                output[setting] = local[setting];
            }
        }
    }

    return output;

};

module.exports = MergeXHRSettings;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var File = __webpack_require__(8);

var JSONFile = function (key, url, path, xhrSettings)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        throw new Error('Error calling \'Loader.json\' invalid key provided.');
    }

    if (!url)
    {
        url = path + key + '.json';
    }
    else
    {
        url = path.concat(url);
    }

    File.call(this, 'json', key, url, 'text', xhrSettings);
};

JSONFile.prototype = Object.create(File.prototype);
JSONFile.prototype.constructor = JSONFile;

JSONFile.prototype.onProcess = function (callback)
{
    this.state = CONST.FILE_PROCESSING;

    this.data = JSON.parse(this.xhrLoader.responseText);

    this.onComplete();

    callback(this);
};

module.exports = JSONFile;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var Factorial = __webpack_require__(61);

var Bernstein = function (n, i)
{
    return Factorial(n) / Factorial(i) / Factorial(n - i);
};

module.exports = Bernstein;


/***/ },
/* 59 */
/***/ function(module, exports) {

var Between = function (min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = Between;


/***/ },
/* 60 */
/***/ function(module, exports) {

var CatmullRom = function (p0, p1, p2, p3, t)
{
    var v0 = (p2 - p0) * 0.5, v1 = (p3 - p1) * 0.5, t2 = t * t, t3 = t * t2;

    return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
};

module.exports = CatmullRom;


/***/ },
/* 61 */
/***/ function(module, exports) {

var Factorial = function (value)
{
    if (value === 0)
    {
        return 1;
    }

    var res = value;

    while (--value)
    {
        res *= value;
    }

    return res;
};

module.exports = Factorial;


/***/ },
/* 62 */
/***/ function(module, exports) {

var Linear = function (p0, p1, t)
{
    return (p1 - p0) * t + p0;
};

module.exports = Linear;


/***/ },
/* 63 */
/***/ function(module, exports) {

var RoundAwayFromZero = function (value)
{
    // "Opposite" of truncate.
    return (value > 0) ? Math.ceil(value) : Math.floor(value);
};

module.exports = RoundAwayFromZero;


/***/ },
/* 64 */
/***/ function(module, exports) {

var Normalize = function (angle)
{
    angle = angle % (2 * Math.PI);

    if (angle >= 0)
    {
        return angle;
    }
    else
    {
        return angle + 2 * Math.PI;
    }
};

module.exports = Normalize;


/***/ },
/* 65 */
/***/ function(module, exports) {

var DistanceBetween = function (x1, y1, x2, y2)
{
    var dx = x1 - x2;
    var dy = y1 - y2;

    return Math.sqrt(dx * dx + dy * dy);
};

module.exports = DistanceBetween;


/***/ },
/* 66 */
/***/ function(module, exports) {

/**
* Checks if the given dimensions make a power of two texture.
* 
* @method Phaser.Math#isPowerOfTwo
* @param {number} width - The width to check.
* @param {number} height - The height to check.
* @return {boolean} True if the width and height are a power of two.
*/
var IsSizePowerOfTwo = function (width, height)
{
    return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);
};

module.exports = IsSizePowerOfTwo;


/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = {

    NORMAL: 0,
    ADD: 1,
    MULTIPLY: 2,
    SCREEN: 3,
    OVERLAY: 4,
    DARKEN: 5,
    LIGHTEN: 6,
    COLOR_DODGE: 7,
    COLOR_BURN: 8,
    HARD_LIGHT: 9,
    SOFT_LIGHT: 10,
    DIFFERENCE: 11,
    EXCLUSION: 12,
    HUE: 13,
    SATURATION: 14,
    COLOR: 15,
    LUMINOSITY: 16

};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

var FragmentShader = __webpack_require__(314);
var VertexShader = __webpack_require__(317);

var CONST = {

    // VERTEX_SIZE = (sizeof(vec2) * 4) + (sizeof(float) + sizeof(uint32))
    VERTEX_SIZE: 40,
    INDEX_SIZE: 2,
    SPRITE_VERTEX_COUNT: 4,
    SPRITE_INDEX_COUNT: 6,

    // How many 32-bit components does the vertex have.
    SPRITE_VERTEX_COMPONENT_COUNT: 10,

    // Can't be bigger since index are 16-bit
    MAX_SPRITES: 10000,

    VERTEX_SHADER_SOURCE: VertexShader,
    FRAGMENT_SHADER_SOURCE: FragmentShader

};

module.exports = CONST;


/***/ },
/* 69 */
/***/ function(module, exports) {

var CreateTexture2DImage = function (gl, pixels, filter, mipLevels)
{
    var texture = gl.createTexture();
    mipLevels = mipLevels || 0;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texImage2D(
        gl.TEXTURE_2D,
        mipLevels,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        pixels
    );
    return texture;
};

module.exports = CreateTexture2DImage;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(325);
var ScaleModes = __webpack_require__(10);
var GetObjectValue = __webpack_require__(13);

var Settings = function (state, config)
{
    if (typeof config === 'string')
    {
        config = { key: config };
    }
    else if (config === undefined)
    {
        //  Pass the 'hasOwnProperty' checks
        config = {};
    }

    this.state = state; //  Do we actually need this reference? This could just be a property bucket

    this.status = CONST.PENDING;

    //  Which part of this State is currently being processed?
    //  preload, create, update, shutdown, etc
    this.op = CONST.BOOT;

    this.key = GetObjectValue(config, 'key', '');
    this.active = GetObjectValue(config, 'active', false);
    this.visible = GetObjectValue(config, 'visible', true);
    this.scaleMode = GetObjectValue(config, 'scaleMode', ScaleModes.DEFAULT);
    this.fps = GetObjectValue(config, 'fps', 60);
    this.x = GetObjectValue(config, 'x', 0);
    this.y = GetObjectValue(config, 'y', 0);

    //  -1 means the State Manager will set it to be the Game dimensions
    this.width = GetObjectValue(config, 'width', -1);
    this.height = GetObjectValue(config, 'height', -1);

    //  Renderer Settings

    this.clearBeforeRender = GetObjectValue(config, 'clearBeforeRender', true);
    this.transparent = GetObjectValue(config, 'transparent', false);
    this.autoResize = GetObjectValue(config, 'autoResize', false);
    this.roundPixels = GetObjectValue(config, 'roundPixels', false);
    this.drawToPrimaryCanvas = GetObjectValue(config, 'drawToPrimaryCanvas', false);

};

//  Unless we add some actual functions in here, we'll make this just return an Object instead of an instance
Settings.prototype.constructor = Settings;

module.exports = Settings;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var EventDispatcher = __webpack_require__(15);
var GameObjectFactory = __webpack_require__(326);
// var GameObjectCreator = require('./systems/GameObjectCreator');
var Loader = __webpack_require__(327);
var MainLoop = __webpack_require__(328);
var UpdateManager = __webpack_require__(329);
var Component = __webpack_require__(19);
var Camera = __webpack_require__(90);

var Systems = function (state, config)
{
    this.state = state;

    this.config = config;

    this.events;

    //  Reference to the global Game level TextureManager.
    this.textures;

    //  State specific managers (Factory, Tweens, Loader, Physics, etc)
    this.add;
    this.make;
    this.input;
    this.load;
    this.tweens;
    this.mainloop;
    this.updates;

    //  State specific properties (transform, data, children, etc)
    this.camera;
    this.children;
    this.color;
    this.data;
    this.fbo;
    this.time;
    this.transform;
};

Systems.prototype.constructor = Systems;

Systems.prototype = {

    init: function ()
    {
        console.log('State.Systems.init');

        this.textures = this.state.game.textures;

        //  All of the systems can use the State level EventDispatcher, or their own
        this.events = new EventDispatcher();

        //  State specific managers (Factory, Tweens, Loader, Physics, etc)
        //  All these to be set by a State Config package

        this.add = new GameObjectFactory(this.state);
        // this.make = GameObjectCreator(this.state);
        this.mainloop = new MainLoop(this.state, this.state.settings.fps);
        this.updates = new UpdateManager(this.state);
        this.load = new Loader(this.state);

        // this.tweens = new Phaser.TweenManager(this.state);
        // this.input = new Phaser.State.Input(this.state);
        // this.physics = new Phaser.Physics.Arcade(this.state, 800, 600);

        //  State specific properties (transform, data, children, etc)
        this.camera = new Camera(this.state, 0, 0, 800, 600);
        this.children = new Component.Children(this.state);
        this.color = new Component.Color(this.state);
        this.data = new Component.Data(this.state);
        this.transform = this.camera.transform;

        //  Boot

        // this.input.init();

        //  Defaults

        this.state.events = this.events;
        this.state.add = this.add;
        this.state.load = this.load;
        this.state.children = this.children;
        this.state.color = this.color;
        this.state.data = this.data;
        this.state.camera = this.camera;
        this.state.transform = this.camera.transform;
        this.state.textures = this.textures;



        // this.state.input = this.input;
        // this.state.state = this.state.game.state;

        //  Here we can check which Systems to install as properties into the State object
        //  (default systems always exist in here, regardless)
    },

    begin: function (timestamp, frameDelta)
    {
    },

    update: function (timestep, physicsStep)
    {
    },

    preRender: function ()
    {
    },

    end: function (fps, panic)
    {
        if (panic)
        {
            // This pattern introduces non-deterministic behavior, but in this case
            // it's better than the alternative (the application would look like it
            // was running very quickly until the simulation caught up to real
            // time).
            var discardedTime = Math.round(this.mainloop.resetFrameDelta());

            console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
        }
    }
};

module.exports = Systems;


/***/ },
/* 72 */
/***/ function(module, exports) {


var NOOP = function ()
{
    //  NOOP (No Operation) Callback
};

module.exports = NOOP;


/***/ },
/* 73 */
/***/ function(module, exports) {

/**
* Create an array representing the range of numbers (usually integers), between, and inclusive of,
* the given `start` and `end` arguments. For example:
*
* `var array = numberArray(2, 4); // array = [2, 3, 4]`
* `var array = numberArray(0, 9); // array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`
* 
* This is equivalent to `numberArrayStep(start, end, 1)`.
* 
* You can optionally provide a prefix and / or suffix string. If given the array will contain
* strings, not integers. For example:
* 
* `var array = numberArray(1, 4, 'Level '); // array = ["Level 1", "Level 2", "Level 3", "Level 4"]`
* `var array = numberArray(5, 7, 'HD-', '.png'); // array = ["HD-5.png", "HD-6.png", "HD-7.png"]`
*
* @method Phaser.ArrayUtils#numberArray
* @param {number} start - The minimum value the array starts with.
* @param {number} end - The maximum value the array contains.
* @param {string} [prefix] - Optional prefix to place before the number. If provided the array will contain strings, not integers.
* @param {string} [suffix] - Optional suffix to place after the number. If provided the array will contain strings, not integers.
* @return {number[]|string[]} The array of number values, or strings if a prefix or suffix was provided.
*/
var NumberArray = function (start, end, prefix, suffix)
{
    var result = [];

    for (var i = start; i <= end; i++)
    {
        if (prefix || suffix)
        {
            var key = (prefix) ? prefix + i.toString() : i.toString();

            if (suffix)
            {
                key = key.concat(suffix);
            }

            result.push(key);
        }
        else
        {
            result.push(i);
        }
    }

    return result;
};

module.exports = NumberArray;


/***/ },
/* 74 */
/***/ function(module, exports) {

//  Removes a single item from an array and returns it
//  without creating gc (like the native splice does)
//  Based on code by Mike Reinstein

var SpliceOne = function (array, index)
{
    if (index >= array.length)
    {
        return;
    }

    var len = array.length - 1;

    var item = array[index];

    for (var i = index; i < len; i++)
    {
        array[i] = array[i + 1];
    }

    array.length = len;

    return item;
};

module.exports = SpliceOne;


/***/ },
/* 75 */
/***/ function(module, exports) {

/**
* This is a slightly modified version of jQuery.isPlainObject.
* A plain object is an object whose internal class property is [object Object].
* @method Phaser.Utils.isPlainObject
* @param {object} obj - The object to inspect.
* @return {boolean} - true if the object is plain, otherwise false.
*/
var IsPlainObject = function (obj)
{
    // Not plain objects:
    // - Any object or value whose internal [[Class]] property is not "[object Object]"
    // - DOM nodes
    // - window
    if (typeof(obj) !== "object" || obj.nodeType || obj === obj.window)
    {
        return false;
    }

    // Support: Firefox <20
    // The try/catch suppresses exceptions thrown when attempting to access
    // the "constructor" property of certain host objects, ie. |window.location|
    // https://bugzilla.mozilla.org/show_bug.cgi?id=814622
    try {
        if (obj.constructor && !({}).hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"))
        {
            return false;
        }
    } catch (e) {
        return false;
    }

    // If the function hasn't returned already, we're confident that
    // |obj| is a plain object, created by {} or constructed with new Object
    return true;
};

module.exports = IsPlainObject;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Config = __webpack_require__(87);
var DebugHeader = __webpack_require__(89);
var Device = __webpack_require__(99);

var AddToDOM = __webpack_require__(100);
var RequestAnimationFrame = __webpack_require__(103);
var DOMContentLoaded = __webpack_require__(101);

var CreateRenderer = __webpack_require__(88);
var RandomDataGenerator = __webpack_require__(292);
var StateManager = __webpack_require__(324);
var TextureManager = __webpack_require__(333);

var Game = function (config)
{
    this.config = new Config(config);

    this.renderer = null;
    this.canvas = null;
    this.context = null;

    this.isBooted = false;
    this.isRunning = false;

    /**
    * @property {Phaser.RequestAnimationFrame} raf - Automatically handles the core game loop via requestAnimationFrame or setTimeout
    * @protected
    */
    this.raf = new RequestAnimationFrame(this);

    /**
    * @property {Phaser.TextureManager} textures - Reference to the Phaser Texture Manager.
    */
    this.textures = new TextureManager(this);

    /**
    * @property {Phaser.Cache} cache - Reference to the assets cache.
    */
    // this.cache = new Cache();

    /**
    * @property {Phaser.Input} input - Reference to the input manager
    */
    this.input = null;

    /**
    * @property {Phaser.StateManager} state - The StateManager. Phaser instance specific.
    */
    this.state = new StateManager(this, this.config.stateConfig);

    /**
    * @property {Phaser.Device} device - Contains device information and capabilities (singleton)
    */
    this.device = Device;

    //  Move this somewhere else? Math perhaps? Doesn't need to be a Game level system.
    this.rnd;

    //  Wait for the DOM Ready event, then call boot.
    DOMContentLoaded(this.boot.bind(this));

    //  For debugging only
    window.game = this;
};

Game.prototype.constructor = Game;

Game.prototype = {

    boot: function ()
    {
        this.isBooted = true;

        this.config.preBoot();

        //  Probably move within Math
        this.rnd = new RandomDataGenerator(this.config.seed);

        DebugHeader(this);

        CreateRenderer(this);

        AddToDOM(this.canvas, this.config.parent);

        this.state.boot();

        this.isRunning = true;

        this.config.postBoot();

        this.raf.start();
    },

    //  timestamp = DOMHighResTimeStamp
    update: function (timestamp)
    {
        this.state.step(timestamp);
    }

};

module.exports = Game;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Blitter = __webpack_require__(106);
var FactoryContainer = __webpack_require__(9);

var BlitterFactory = {

    KEY: 'blitter',

    /**
    * Create a new `Blitter` object.
    *
    * An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
    *
    * It can still rotate, scale, crop and receive input events.
    * This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
    *
    * @method Phaser.GameObject.Factory#image
    * @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
    * @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
    * @param {string|Phaser.RenderTexture|Phaser.BitmapData|Phaser.Video|PIXI.Texture} [key] - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
    * @param {string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the World group.
    * @return {Phaser.Image} The newly created Image object.
    */
    add: function (x, y, key, frame, group)
    {
        if (group === undefined) { group = this.state; }

        // console.log('ImageFactory.add', key, x, y, frame, group);
        // console.log('into State', this.state);

        return group.children.add(new Blitter(this.state, x, y, key, frame));
    },

    make: function (x, y, key, frame)
    {
        // console.log('ImageFactory.make', key, x, y, frame);

        return new Blitter(this.state, x, y, key, frame);
    }

};

module.exports = FactoryContainer.register(BlitterFactory);


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Container = __webpack_require__(109);
var FactoryContainer = __webpack_require__(9);

var ContainerFactory = {

    KEY: 'container',

    add: function (parent, x, y)
    {
        if (parent === undefined) { parent = this.state; }

        return parent.children.add(new Container(this.state, parent, x, y));
    },

    make: function (parent, x, y)
    {
        return new Container(this.state, parent, x, y);
    }

};

module.exports = FactoryContainer.register(ContainerFactory);


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Image = __webpack_require__(111);
var FactoryContainer = __webpack_require__(9);

var ImageFactory = {

    KEY: 'image',

    /**
    * Create a new `Image` object.
    *
    * An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
    *
    * It can still rotate, scale, crop and receive input events.
    * This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
    *
    * @method Phaser.GameObject.Factory#image
    * @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
    * @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
    * @param {string|Phaser.RenderTexture|Phaser.BitmapData|Phaser.Video|PIXI.Texture} [key] - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
    * @param {string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the World group.
    * @return {Phaser.Image} The newly created Image object.
    */
    add: function (x, y, key, frame, group)
    {
        if (group === undefined) { group = this.state; }

        // console.log('ImageFactory.add', key, x, y, frame, group);
        // console.log('into State', this.state);

        return group.children.add(new Image(this.state, x, y, key, frame));
    },

    make: function (x, y, key, frame)
    {
        // console.log('ImageFactory.make', key, x, y, frame);

        return new Image(this.state, x, y, key, frame);
    }

};

module.exports = FactoryContainer.register(ImageFactory);


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Geom

module.exports = {
    
    Circle: __webpack_require__(126),
    Ellipse: __webpack_require__(137),
    Hermite: __webpack_require__(144),
    Intersects: __webpack_require__(152),
    Line: __webpack_require__(172),
    Point: __webpack_require__(192),
    Polygon: __webpack_require__(197),
    Rectangle: __webpack_require__(224)

};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    //  CONSTs (makes them visible under Phaser.Math)
    PI2: Math.PI * 2,
    TAU: Math.PI * 0.5,
    EPSILON: 1.0e-6,
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,

    //  Collections of functions
    Angle: __webpack_require__(263),
    Distance: __webpack_require__(266),
    Easing: __webpack_require__(278),
    Fuzzy: __webpack_require__(284),
    Interpolation: __webpack_require__(288),
    Pow2: __webpack_require__(291),
    Snap: __webpack_require__(296),

    //  Single functions
    Average: __webpack_require__(236),
    Bernstein: __webpack_require__(58),
    Between: __webpack_require__(59),
    CatmullRom: __webpack_require__(60),
    CeilTo: __webpack_require__(237),
    Clamp: __webpack_require__(238),
    DegToRad: __webpack_require__(239),
    Difference: __webpack_require__(240),
    Factorial: __webpack_require__(61),
    FloatBetween: __webpack_require__(241),
    FloorTo: __webpack_require__(242),
    Linear: __webpack_require__(62),
    MaxAdd: __webpack_require__(243),
    MinSub: __webpack_require__(244),
    Percent: __webpack_require__(245),
    RadToDeg: __webpack_require__(246),
    Rotate: __webpack_require__(247),
    RotateAround: __webpack_require__(248),
    RotateAroundDistance: __webpack_require__(249),
    RoundAwayFromZero: __webpack_require__(63),
    RoundTo: __webpack_require__(250),
    SinCosTableGenerator: __webpack_require__(251),
    SmootherStep: __webpack_require__(253),
    SmoothStep: __webpack_require__(252),
    Within: __webpack_require__(254),
    Wrap: __webpack_require__(11)

};


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(303);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(302);


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Sound

module.exports = {

    Dynamic: __webpack_require__(322)

};


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    FindClosestInSorted: __webpack_require__(343),
    GetRandomElement: __webpack_require__(344),
    NumberArray: __webpack_require__(73),
    NumberArrayStep: __webpack_require__(345),
    RemoveRandomElement: __webpack_require__(346),
    RotateLeft: __webpack_require__(347),
    RotateRight: __webpack_require__(348),
    Shuffle: __webpack_require__(349),
    SpliceOne: __webpack_require__(74)

};


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Extend: __webpack_require__(17),
    IsPlainObject: __webpack_require__(75)

};


/***/ },
/* 86 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(72);
var GetObjectValue = __webpack_require__(13);

var defaultBannerColor = [
    '#ff0000',
    '#ffff00',
    '#00ff00',
    '#00ffff',
    '#000000'
];

var defaultBannerTextColor = '#ffffff';

var Config = function (config)
{
    if (config === undefined) { config = {}; }

    this.width = GetObjectValue(config, 'width', 1024);
    this.height = GetObjectValue(config, 'height', 768);

    this.resolution = GetObjectValue(config, 'resolution', 1);

    this.renderType = GetObjectValue(config, 'type', CONST.AUTO);

    this.parent = GetObjectValue(config, 'parent', null);
    this.canvas = GetObjectValue(config, 'canvas', null);
    this.canvasStyle = GetObjectValue(config, 'canvasStyle', null);

    this.stateConfig = GetObjectValue(config, 'state', null);

    this.seed = GetObjectValue(config, 'seed', [ (Date.now() * Math.random()).toString() ]);

    this.gameTitle = GetObjectValue(config, 'title', '');
    this.gameURL = GetObjectValue(config, 'url', 'http://phaser.io');
    this.gameVersion = GetObjectValue(config, 'version', '');

    //  If you do: { banner: false } it won't display any banner at all
    this.hideBanner = (GetObjectValue(config, 'banner', null) === false);

    this.hidePhaser = GetObjectValue(config, 'banner.hidePhaser', false);
    this.bannerTextColor = GetObjectValue(config, 'banner.text', defaultBannerTextColor);
    this.bannerBackgroundColor = GetObjectValue(config, 'banner.background', defaultBannerColor);
   
    this.forceSetTimeOut = GetObjectValue(config, 'forceSetTimeOut', false);
    this.transparent = GetObjectValue(config, 'transparent', false);
    this.pixelArt = GetObjectValue(config, 'pixelArt', false);

    //  Callbacks
    this.preBoot = GetObjectValue(config, 'callbacks.preBoot', NOOP);
    this.postBoot = GetObjectValue(config, 'callbacks.postBoot', NOOP);
};

Config.prototype.constructor = Config;

module.exports = Config;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CanvasPool = __webpack_require__(20);
var Features = __webpack_require__(40);
var CanvasRenderer = __webpack_require__(306);
var WebGLRenderer = __webpack_require__(309);

/**
* Checks if the device is capable of using the requested renderer and sets it up or an alternative if not.
*
* @method Phaser.Game#setUpRenderer
* @protected
*/
var CreateRenderer = function (game)
{
    var config = game.config;

    //  Game either requested Canvas,
    //  or requested AUTO or WEBGL but the browser doesn't support it, so fall back to Canvas
    if (config.renderType === CONST.CANVAS || (config.renderType !== CONST.CANVAS && !Features.webGL))
    {
        if (Features.canvas)
        {
            //  They requested Canvas and their browser supports it
            config.renderType = CONST.CANVAS;
        }
        else
        {
            throw new Error('Cannot create Canvas or WebGL context, aborting.');
        }
    }
    else
    {
        //  Game requested WebGL and browser says it supports it
        config.renderType = CONST.WEBGL;
    }

    //  Does the game config provide its own canvas element to use?
    if (config.canvas)
    {
        game.canvas = config.canvas;
    }
    else
    {
        game.canvas = CanvasPool.create(game, config.width, config.height, config.renderType);
    }

    //  Does the game config provide some canvas css styles to use?
    if (config.canvasStyle)
    {
        game.canvas.style = config.canvasStyle;
    }

    //  Create the renderer
    if (config.renderType === CONST.WEBGL)
    {
        console.log('Creating WEBGL Renderer');
        game.renderer = new WebGLRenderer(game);
        game.context = null;
    }
    else
    {
        console.log('Creating Canvas Renderer');
        game.renderer = new CanvasRenderer(game);
        game.context = game.renderer.context;
    }
};

module.exports = CreateRenderer;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CHECKSUM = __webpack_require__(91);

var DebugHeader = function (game)
{
    var config = game.config;

    if (config.hideBanner)
    {
        return;
    }

    var renderType = (config.renderType === CONST.CANVAS) ? 'Canvas' : 'WebGL';

    var ie = false;

    if (!ie)
    {
        var c = '';
        var args = [c];

        if (Array.isArray(config.bannerBackgroundColor))
        {
            var lastColor;

            config.bannerBackgroundColor.forEach(function(color) {

                c = c.concat('%c ');

                args.push('background: ' + color);

                lastColor = color;

            });

            //  inject the text color
            args[args.length - 1] = 'color: ' + config.bannerTextColor + '; background: ' + lastColor;
        }
        else
        {
            c = c.concat('%c ');

            args.push('color: ' + config.bannerTextColor + '; background: ' + config.bannerBackgroundColor);
        }

        //  URL link background color (always white)
        args.push('background: #fff');

        if (config.gameTitle)
        {
            c = c.concat(config.gameTitle);

            if (config.gameVersion)
            {
                c = c.concat(' v' + config.gameVersion);
            }

            if (!config.hidePhaser)
            {
                c = c.concat(' / ');
            }
        }

        if (!config.hidePhaser)
        {
            c = c.concat('Phaser v' + CONST.VERSION + ' (' + renderType + ')');
        }

        c = c.concat(' %c ' + config.gameURL);

        //  Inject the new string back into the args array
        args[0] = c;

        console.log.apply(console, args);
    }
    else if (window['console'])
    {
        console.log('Phaser v' + CONST.VERSION + ' / http://phaser.io');
    }

    // Keep this during dev build only
    console.log(CHECKSUM.build);

};

module.exports = DebugHeader;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Component = __webpack_require__(19);
var MATH_CONST = __webpack_require__(2);
var WrapAngle = __webpack_require__(12);

/**
* A Camera is your view into the game world. It has a position and size and renders only those objects within its field of view.
* The game automatically creates a single Stage sized camera on boot. Move the camera around the world with Phaser.Camera.x/y
*
* @class Phaser.Camera
* @constructor
* @param {Phaser.Game} game - Game reference to the currently running game.
* @param {number} id - Not being used at the moment, will be when Phaser supports multiple camera
* @param {number} x - Position of the camera on the X axis
* @param {number} y - Position of the camera on the Y axis
* @param {number} width - The width of the view rectangle
* @param {number} height - The height of the view rectangle
*/
var Camera = function (state, x, y, viewportWidth, viewportHeight)
{
    /**
     * The State that this Camera belongs to. A Camera can only belong to one State, and a State only
     * has one Camera.
    * @property {Phaser.State} state
    */
    this.state = state;

    /**
    * @property {Phaser.Game} game - A reference to the currently running Game.
    */
    this.game = state.game;

    this.viewportWidth = viewportWidth;

    this.viewportHeight = viewportHeight;

    this.transform = new Component.Transform(this, x, y);

    /**
    * The Camera is bound to this Rectangle and cannot move outside of it. By default it is enabled and set to the size of the World.
    * The Rectangle can be located anywhere in the world and updated as often as you like. If you don't wish the Camera to be bound
    * at all then set this to null. The values can be anything and are in World coordinates, with 0,0 being the top-left of the world.
    *
    * @property {Phaser.Rectangle} bounds - The Rectangle in which the Camera is bounded. Set to null to allow for movement anywhere.
    */
    // this.bounds = new Phaser.Rectangle(x, y, width, height);

    // this.bounds = new Phaser.Circle(x, y)

    /**
    * @property {boolean} atLimit - Whether this camera is flush with the World Bounds or not.
    */
    this.atLimit = { x: false, y: false };
};

Camera.prototype.constructor = Camera;

Camera.prototype = {

    /**
    * Method called to ensure the camera doesn't venture outside of the game world.
    * Called automatically by Camera.update.
    *
    * @method Phaser.Camera#checkBounds
    * @protected
    */
    checkBounds: function ()
    {
        this.atLimit.x = false;
        this.atLimit.y = false;

        // var vx = this.view.x + this._shake.x;
        // var vw = this.view.right + this._shake.x;
        // var vy = this.view.y + this._shake.y;
        // var vh = this.view.bottom + this._shake.y;

        var vx = this.x;
        var vw = this.x + this.viewportWidth;
        var vy = this.y;
        var vh = this.y + this.viewportHeight;

        //  Make sure we didn't go outside the cameras bounds
        if (vx <= this.bounds.x * this.scale.x)
        {
            this.atLimit.x = true;
            this.view.x = this.bounds.x * this.scale.x;

            if (!this._shake.shakeBounds)
            {
                //  The camera is up against the bounds, so reset the shake
                this._shake.x = 0;
            }
        }

        if (vw >= this.bounds.right * this.scale.x)
        {
            this.atLimit.x = true;
            this.view.x = (this.bounds.right * this.scale.x) - this.width;

            if (!this._shake.shakeBounds)
            {
                //  The camera is up against the bounds, so reset the shake
                this._shake.x = 0;
            }
        }

        if (vy <= this.bounds.top * this.scale.y)
        {
            this.atLimit.y = true;
            this.view.y = this.bounds.top * this.scale.y;

            if (!this._shake.shakeBounds)
            {
                //  The camera is up against the bounds, so reset the shake
                this._shake.y = 0;
            }
        }

        if (vh >= this.bounds.bottom * this.scale.y)
        {
            this.atLimit.y = true;
            this.view.y = (this.bounds.bottom * this.scale.y) - this.height;

            if (!this._shake.shakeBounds)
            {
                //  The camera is up against the bounds, so reset the shake
                this._shake.y = 0;
            }
        }

    }

};

Object.defineProperties(Camera.prototype, {

    //  Transform getters / setters

    x: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posX;
        },

        set: function (value)
        {
            this.transform._posX = value;
            this.transform.dirty = true;
        }

    },

    y: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posY;
        },

        set: function (value)
        {
            this.transform._posY = value;
            this.transform.dirty = true;
        }

    },

    right: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posX + (this.viewportWidth * this.transform._scaleX);
        }

    },

    bottom: {

        enumerable: true,

        get: function ()
        {
            return this.transform._posY + (this.viewportHeight * this.transform._scaleY);
        }

    },

    scale: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX;
        },

        set: function (value)
        {
            this.transform._scaleX = value;
            this.transform._scaleY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    scaleX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX;
        },

        set: function (value)
        {
            this.transform._scaleX = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    scaleY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleY;
        },

        set: function (value)
        {
            this.transform._scaleY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    pivotX: {

        enumerable: true,

        get: function ()
        {
            return this.transform._pivotX;
        },

        set: function (value)
        {
            this.transform._pivotX = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    pivotY: {

        enumerable: true,

        get: function ()
        {
            return this.transform._pivotY;
        },

        set: function (value)
        {
            this.transform._pivotY = value;
            this.transform.dirty = true;
            this.transform.updateCache();
        }

    },

    angle: {

        enumerable: true,

        get: function ()
        {
            return WrapAngle(this.rotation * MATH_CONST.RAD_TO_DEG);
        },

        set: function (value)
        {
            this.rotation = WrapAngle(value) * MATH_CONST.DEG_TO_RAD;
        }

    },

    rotation: {

        enumerable: true,

        get: function ()
        {
            return this.transform._rotation;
        },

        set: function (value)
        {
            if (this.transform._rotation === value)
            {
                return;
            }

            this.transform._rotation = value;
            this.transform.dirty = true;

            if (this.transform._rotation % MATH_CONST.PI2)
            {
                this.transform.cache.sr = Math.sin(this.transform._rotation);
                this.transform.cache.cr = Math.cos(this.transform._rotation);
                this.transform.updateCache();
                this.transform.hasLocalRotation = true;
            }
            else
            {
                this.transform.hasLocalRotation = false;
            }
        }

    },

});

module.exports = Camera;


/***/ },
/* 91 */
/***/ function(module, exports) {

var CHECKSUM = {
build: '0df814a0-e24d-11e6-992e-1b6622daea3b'
};
module.exports = CHECKSUM;

/***/ },
/* 92 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* The Color Component allows you to control the alpha, blend mode, tint and background color
* of a Game Object.
*
* @class
*/
var Color = function (gameObject)
{
    this.gameObject = gameObject;

    this.state = gameObject.state;

    this._dirty = false;

    this._alpha = 1;
    this._worldAlpha = 1;

    this._blendMode = 0;

    this._tint = { topLeft: 0xffffff, topRight: 0xffffff, bottomLeft: 0xffffff, bottomRight: 0xffffff };
    this._glTint = { topLeft: 16777215, topRight: 16777215, bottomLeft: 16777215, bottomRight: 16777215 };
    this._hasTint = false;

    //  Between 0 and 255
    this._r = 0;
    this._g = 0;
    this._b = 0;

    //  Between 0 and 1
    this._a = 1;

    //  String version of RGBA
    this._rgba = '';

    //  32-bit version of ARGB
    this._glBg = 0;

    this._hasBackground = false;
};

Color.prototype.constructor = Color;

Color.prototype = {

    setBackground: function (red, green, blue, alpha)
    {
        if (red === undefined)
        {
            this._hasBackground = false;
            this._glBg = 0;
        }
        else
        {
            this._hasBackground = true;
            this._r = red;
            this._g = (green) ? green : 0;
            this._b = (blue) ? blue : 0;
            this._a = (alpha) ? alpha : 1;
        }

        this.dirty = true;
    },

    clearTint: function ()
    {
        this.setTint(0xffffff);

        this._hasTint = false;
    },

    setTint: function (topLeft, topRight, bottomLeft, bottomRight)
    {
        if (topRight === undefined)
        {
            topRight = topLeft;
            bottomLeft = topLeft;
            bottomRight = topLeft;
        }

        this.tintTopLeft = topLeft;
        this.tintTopRight = topRight;
        this.tintBottomLeft = bottomLeft;
        this.tintBottomRight = bottomRight;

        this._hasTint = true;

        this.dirty = true;
    },

    //  Called by the Dirty Manager
    update: function ()
    {
        this._dirty = false;

        if (this._hasBackground)
        {
            this._rgba = 'rgba(' + this._r + ',' + this._g + ',' + this._b + ',' + this._a + ')';
            this._glBg = this.getColor32(this._r, this._g, this._b, this._a);
        }

        //  Tint mults?

    },

    getColor: function (value)
    {
        return (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
    },

    getColor32: function (r, g, b, a)
    {
        a *= 255;

        return ((a << 24) | (b << 16) | (g << 8) | r) >>> 0;
    },

    destroy: function ()
    {
        this.gameObject = null;
        this.state = null;
        this._tint = [];
    }

};

Object.defineProperties(Color.prototype, {

    dirty: {

        enumerable: true,

        get: function ()
        {
            return this._dirty;
        },

        set: function (value)
        {
            if (value)
            {
                if (!this._dirty)
                {
                    this._dirty = true;

                    this.state.sys.updates.add(this);
                }
            }
            else
            {
                this._dirty = false;
            }
        }

    },

    tintTopLeft: {

        enumerable: true,

        get: function ()
        {
            return this._tint.topLeft;
        },

        set: function (value)
        {
            this._tint.topLeft = value;
            this._glTint.topLeft = this.getColor(value);
            this.dirty = true;
        }

    },

    tintTopRight: {

        enumerable: true,

        get: function ()
        {
            return this._tint.topRight;
        },

        set: function (value)
        {
            this._tint.topRight = value;
            this._glTint.topRight = this.getColor(value);
            this.dirty = true;
        }

    },

    tintBottomLeft: {

        enumerable: true,

        get: function ()
        {
            return this._tint.bottomLeft;
        },

        set: function (value)
        {
            this._tint.bottomLeft = value;
            this._glTint.bottomLeft = this.getColor(value);
            this.dirty = true;
        }

    },

    tintBottomRight: {

        enumerable: true,

        get: function ()
        {
            return this._tint.bottomRight;
        },

        set: function (value)
        {
            this._tint.bottomRight = value;
            this._glTint.bottomRight = this.getColor(value);
            this.dirty = true;
        }

    },

    tint: {

        enumerable: true,

        get: function ()
        {
            return this._tint;
        },

        set: function (value)
        {
            this.setTint(value, value, value, value);
        }

    },

    alpha: {

        enumerable: true,

        get: function ()
        {
            return this._alpha;
        },

        set: function (value)
        {
            if (value !== this._alpha)
            {
                this._alpha = value;
                this.dirty = true;
            }
        }

    },

    blendMode: {

        enumerable: true,

        get: function ()
        {
            return this._blendMode;
        },

        set: function (value)
        {
            if (value !== this._blendMode && value >= 0 && value <= 16)
            {
                this._blendMode = value;
                this.dirty = true;
            }
        }

    },

    worldAlpha: {

        enumerable: true,

        get: function ()
        {
            if (this.gameObject.parent)
            {
                this._worldAlpha = this._alpha * this.gameObject.parent.color.worldAlpha;
            }

            return this._worldAlpha;
        },

        set: function (value)
        {
            this._worldAlpha = this._alpha * value;
        }

    },

    backgroundAlpha: {

        enumerable: true,

        get: function ()
        {
            return this._a;
        },

        set: function (value)
        {
            if (value !== this._a)
            {
                this._a = value;
                this._hasBackground = true;
                this.dirty = true;
            }
        }

    },

    red: {

        enumerable: true,

        get: function ()
        {
            return this._r;
        },

        set: function (value)
        {
            if (value !== this._r)
            {
                this._r = value | 0;
                this._hasBackground = true;
                this.dirty = true;
            }
        }

    },

    green: {

        enumerable: true,

        get: function ()
        {
            return this._g;
        },

        set: function (value)
        {
            if (value !== this._g)
            {
                this._g = value | 0;
                this._hasBackground = true;
                this.dirty = true;
            }
        }

    },

    blue: {

        enumerable: true,

        get: function ()
        {
            return this._b;
        },

        set: function (value)
        {
            if (value !== this._b)
            {
                this._b = value | 0;
                this._hasBackground = true;
                this.dirty = true;
            }
        }

    }

});

module.exports = Color;


/***/ },
/* 93 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* The Data Component features a means to store pieces of data specific to a Game Object,
* search it, query it, and retrieve it.
*
* @class
*/
var Data = function (parent)
{
    this.parent = parent;

    this.list = {};

    this._beforeCallbacks = {};
    this._afterCallbacks = {};

    this._frozen = false;
};

Data.prototype.constructor = Data;

Data.prototype = {

    //  Retrieves the value for the given key, or undefined if it doesn't exist.
    get: function (key)
    {
        return this.list[key];
    },

    getAll: function ()
    {
        var results = {};

        for (var key in this.list)
        {
            results[key] = this.list[key];
        }

        return results;
    },

    query: function (search)
    {
        var results = {};

        for (var key in this.list)
        {
            if (key.match(search))
            {
                results[key] = this.list[key];
            }
        }

        return results;
    },

    set: function (key, data)
    {
        if (this._frozen)
        {
            return this;
        }

        var listener;
        var result;

        //  If there is a 'before' callback, then check it for a result
        if (this._beforeCallbacks.hasOwnProperty(key))
        {
            listener = this._beforeCallbacks[key];

            result = listener.callback.call(listener.scope, this.parent, key, data);

            if (result !== undefined)
            {
                data = result;
            }
        }

        this.list[key] = data;

        //  If there is a 'after' callback, then check it for a result
        if (this._afterCallbacks.hasOwnProperty(key))
        {
            listener = this._afterCallbacks[key];

            result = listener.callback.call(listener.scope, this.parent, key, data);

            if (result !== undefined)
            {
                this.list[key] = result;
            }
        }

        return this;
    },

    before: function (key, callback, scope)
    {
        if (callback === undefined)
        {
            //  Remove entry
            delete this._beforeCallbacks[key];
        }
        else
        {
            this._beforeCallbacks[key] = { callback: callback, scope: scope };
        }
    },

    after: function (key, callback, scope)
    {
        if (callback === undefined)
        {
            //  Remove entry
            delete this._afterCallbacks[key];
        }
        else
        {
            this._afterCallbacks[key] = { callback: callback, scope: scope };
        }
    },

    /**
    * Passes all data entries to the given callback. Stores the result of the callback.
    *
    * @method each
    * @param {function} callback - The function to call.
    * @param {object} [scope] - Value to use as `this` when executing callback.
    * @param {...*} [arguments] - Additional arguments that will be passed to the callback, after the game object, key, and data.
    */
    each: function (callback, scope)
    {
        var args = [ this.parent, null, undefined ];

        for (var i = 1; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }

        for (var key in this.list)
        {
            args[1] = key;
            args[2] = this.list[key];

            callback.apply(scope, args);
        }
    },

    merge: function (data, overwrite)
    {
        if (overwrite === undefined) { overwrite = true; }

        //  Merge data from another component into this one
        for (var key in data)
        {
            if (overwrite || (!overwrite && !this.has(key)))
            {
                this.list[key] = data;
            }
        }
    },

    remove: function (key)
    {
        if (!this._frozen && this.has(key))
        {
            delete this.list[key];

            this.removeListeners(key);
        }
    },

    removeListeners: function (key)
    {
        if (this._beforeCallbacks.hasOwnProperty(key))
        {
            delete this._beforeCallbacks[key];
        }

        if (this._afterCallbacks.hasOwnProperty(key))
        {
            delete this._afterCallbacks[key];
        }
    },

    //  Gets the data associated with the given 'key', deletes it from this Data store, then returns it.
    pop: function (key)
    {
        var data = undefined;

        if (!this._frozen && this.has(key))
        {
            data = this.list[key];

            delete this.list[key];

            this.removeListeners(key);
        }

        return data;
    },

    has: function (key)
    {
        return this.list.hasOwnProperty(key);
    },

    reset: function ()
    {
        for (var key in this.list)
        {
            delete this.list[key];
        }

        for (key in this._beforeCallbacks)
        {
            delete this._beforeCallbacks[key];
        }

        for (key in this._afterCallbacks)
        {
            delete this._afterCallbacks[key];
        }

        this._frozen = false;
    }

};

Object.defineProperties(Data.prototype, {

    /**
    * Freeze this Data component, so no changes can be written to it.
    *
    * @name freeze
    * @property {boolean} freeze
    */
    freeze: {

        enumerable: true,

        get: function ()
        {
            return this._frozen;
        },

        set: function (value)
        {
            this._frozen = (value) ? true : false;
        }

    },

    count: {

        enumerable: true,

        get: function ()
        {
            var i = 0;

            for (var key in this.list)
            {
                if (this.list[key] !== undefined)
                {
                    i++;
                }
            }

            return i;
        }

    }

});

module.exports = Data;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var MATH_CONST = __webpack_require__(2);
var WrapAngle = __webpack_require__(12);

/**
* 2D Transformation Component.
*
* @class
*/
var Transform = function (gameObject, x, y, scaleX, scaleY)
{
    if (x === undefined) { x = 0; }
    if (y === undefined) { y = 0; }
    if (scaleX === undefined) { scaleX = 1; }
    if (scaleY === undefined) { scaleY = 1; }

    this.gameObject = gameObject;

    this.state = (gameObject.state) ? gameObject.state : gameObject.parent.state;

    this.game = this.state.game;

    //  a = scale X
    //  b = shear Y
    //  c = shear X
    //  d = scale Y
    //  tx / ty = translation

    //  World Transform
    this.world = { a: scaleX, b: 0, c: 0, d: scaleY, tx: x, ty: y };

    //  Previous Transform (used for interpolation)
    this.old = { a: scaleX, b: 0, c: 0, d: scaleY, tx: x, ty: y };

    //  Cached Transform Calculations
    this.cache = { a: 1, b: 0, c: 0, d: 1, sr: 0, cr: 0 };

    //  GL Vertex Data
    this.glVertextData = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 };

    //  Canvas SetTransform data
    this.canvasData = { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0, dx: 0, dy: 0 };

    this.immediate = false;

    this.interpolate = false;

    this.hasLocalRotation = false;

    //  Private value holders, accessed via the getters and setters
    this._posX = x;
    this._posY = y;
    this._scaleX = scaleX;
    this._scaleY = scaleY;
    this._rotation = 0;
    this._pivotX = 0;
    this._pivotY = 0;
    this._anchorX = 0;
    this._anchorY = 0;

    this._worldRotation = 0;
    this._worldScaleX = scaleX;
    this._worldScaleY = scaleY;

    this._dirty = true;
    this._dirtyVertex = true;

    this.state.sys.updates.add(this);

    //  The parent Transform (NOT the parent GameObject, although very often they are related)
    this.parent = null;

    //  Any child Transforms of this one - note that they don't have to belong to Game Objects
    //  that are children of the owner of this Transform
    this.children = [];
};

Transform.prototype.constructor = Transform;

Transform.prototype = {

    add: function (child)
    {
        return this.addAt(child, this.children.length);
    },

    addAt: function (child, index)
    {
        //  Invalid child?
        if (child === this || child.parent === this || index < 0 || index > this.children.length)
        {
            console.log('Invalid child');
            return child;
        }

        //  Child already parented? Remove it
        if (child.parent)
        {
            child.parent.remove(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);

        this.dirty = true;

        this.updateAncestors();

        return child;
    },

    remove: function (child)
    {
        //  Invalid child?
        if (child === this || child.parent !== this)
        {
            return child;
        }

        var index = this.children.indexOf(child);

        if (index !== -1)
        {
            return this.removeAt(index);
        }
    },

    removeAt: function (index)
    {
        //  Valid index?
        if (index >= 0 && index < this.children.length)
        {
            var child = this.children.splice(index, 1);

            if (child[0])
            {
                child[0].parent = null;

                return child[0];
            }
        }
    },

    enableInterpolation: function ()
    {
        this.interpolate = true;

        this.syncInterpolation();
    },

    syncInterpolation: function ()
    {
        this._dirty = true;

        this.update();

        var old = this.old;
        var world = this.world;

        old.a = world.a;
        old.b = world.b;
        old.c = world.c;
        old.d = world.d;
        old.tx = world.tx;
        old.ty = world.ty;
    },

    disableInterpolation: function ()
    {
        this.interpolate = false;
    },

    setPosition: function (x, y)
    {
        if (y === undefined) { y = x; }

        this._posX = x;
        this._posY = y;

        return this.update();
    },

    setScale: function (x, y)
    {
        if (y === undefined) { y = x; }

        this._scaleX = x;
        this._scaleY = y;
        this.updateCache();

        return this.update();
    },

    setPivot: function (x, y)
    {
        if (y === undefined) { y = x; }

        this._pivotX = x;
        this._pivotY = y;

        return this.update();
    },

    setAnchor: function (x, y)
    {
        if (y === undefined) { y = x; }

        this._anchorX = x;
        this._anchorY = y;

        this.dirty = true;
    },

    setRotation: function (rotation)
    {
        this.rotation = rotation;

        return this.update();
    },

    //  Updates the Transform.world object, ready for rendering
    //  Assuming this Transform is a root node (i.e. no transform parent)
    updateFromRoot: function ()
    {
        var old = this.old;
        var world = this.world;

        old.a = world.a;
        old.b = world.b;
        old.c = world.c;
        old.d = world.d;
        old.tx = world.tx;
        old.ty = world.ty;

        if (this.hasLocalRotation)
        {
            // console.log(this.name, 'Transform.updateFromRoot');

            world.a = this.cache.a;
            world.b = this.cache.b;
            world.c = this.cache.c;
            world.d = this.cache.d;
            world.tx = this._posX - ((this._pivotX * this.cache.a) + (this._pivotY * this.cache.c));
            world.ty = this._posY - ((this._pivotX * this.cache.b) + (this._pivotY * this.cache.d));

            this._worldRotation = Math.atan2(-this.cache.c, this.cache.d);
        }
        else
        {
            // console.log(this.name, 'Transform.updateFromRoot FAST');

            world.a = this._scaleX;
            world.b = 0;
            world.c = 0;
            world.d = this._scaleY;
            world.tx = this._posX - (this._pivotX * this._scaleX);
            world.ty = this._posY - (this._pivotY * this._scaleY);

            this._worldRotation = 0;
        }

        this._worldScaleX = this._scaleX;
        this._worldScaleY = this._scaleY;

        return this;
    },

    updateFromParent: function ()
    {
        var old = this.old;
        var world = this.world;

        old.a = world.a;
        old.b = world.b;
        old.c = world.c;
        old.d = world.d;
        old.tx = world.tx;
        old.ty = world.ty;

        var parent = this.parent.world;
        var tx = 0;
        var ty = 0;
        var a;
        var b;
        var c;
        var d;

        if (this.hasLocalRotation)
        {
            // console.log(this.name, 'Transform.updateFromParent', this.parent.name);

            a = this.cache.a;
            b = this.cache.b;
            c = this.cache.c;
            d = this.cache.d;

            tx = this._posX - ((this._pivotX * a) + (this._pivotY * c));
            ty = this._posY - ((this._pivotX * b) + (this._pivotY * d));

            world.a = (a * parent.a) + (b * parent.c);
            world.b = (a * parent.b) + (b * parent.d);
            world.c = (c * parent.a) + (d * parent.c);
            world.d = (c * parent.b) + (d * parent.d);
        }
        else
        {
            // console.log(this.name, 'Transform.updateFromParent FAST', this.parent.name);

            tx = this._posX - (this._pivotX * this._scaleX);
            ty = this._posY - (this._pivotY * this._scaleY);

            world.a = this._scaleX * parent.a;
            world.b = this._scaleX * parent.b;
            world.c = this._scaleY * parent.c;
            world.d = this._scaleY * parent.d;
        }

        // this._worldRotation = Math.atan2(-this.world.c, this.world.d);

        world.tx = (tx * parent.a) + (ty * parent.c) + parent.tx;
        world.ty = (tx * parent.b) + (ty * parent.d) + parent.ty;

        a = world.a;
        b = world.b;
        c = world.c;
        d = world.d;

        var determ = (a * d) - (b * c);

        if (a || b)
        {
            var r = Math.sqrt((a * a) + (b * b));

            this._worldRotation = (b > 0) ? Math.acos(a / r) : -Math.acos(a / r);
            this._worldScaleX = r;
            this._worldScaleY = determ / r;
        }
        else if (c || d)
        {
            var s = Math.sqrt((c * c) + (d * d));

            this._worldRotation = MATH_CONST.TAU - ((d > 0) ? Math.acos(-c / s) : -Math.acos(c / s));
            this._worldScaleX = determ / s;
            this._worldScaleY = s;
        }
        else
        {
            this._worldScaleX = 0;
            this._worldScaleY = 0;
        }

        return this;
    },

    updateAncestors: function ()
    {
        // console.log(this.name, 'Transform.updateAncestors');

        //  No parent? Then just update the children and leave, our job is done
        if (!this.parent)
        {
            // console.log(this.name, 'updateAncestors has no parent Transform');

            this.updateFromRoot();

            this.updateChildren();

            this.dirty = false;

            return this;
        }

        // console.log(this.name, 'start updateAncestors while');

        //  Gets all parent nodes, starting from this Transform.
        //  Then updates from the top, down, but only on the ancestors,
        //  not any other children - will give us accurate worldX etc properties

        var node = this.parent;
        var nodes = [];

        do
        {
            nodes.push(node);
            node = node.parent;
        }
        while (node);

        //  We've got all the ancestors in the 'nodes' array, let's loop it

        while (nodes.length)
        {
            node = nodes.pop();

            if (node.parent)
            {
                node.updateFromParent();
            }
            else
            {
                node.updateFromRoot();
            }
        }

        //  By this point all of this Transforms ancestors have been
        //  updated, in the correct order, so we can now do this one
        //  and any of its children too

        this.update();
    },

    updateChildren: function ()
    {
        // console.log(this.name, 'Transform.updateChildren');

        for (var i = 0; i < this.children.length; i++)
        {
            this.children[i].update();
        }
    },

    updateFromDirtyParent: function ()
    {
        // console.log(this.name, 'is updateFromDirtyParent', this.parent.name);

        this.updateFromParent();

        if (this.children.length)
        {
            for (var i = 0; i < this.children.length; i++)
            {
                this.children[i].updateFromDirtyParent();
            }
        }

        this._dirty = false;
        this._dirtyVertex = true;
    },

    update: function ()
    {
        if (!this._dirty)
        {
            return;
        }

        //  If we got this far then this Transform is dirty
        //  so we need to update it from its parent
        //  and then force the update to all children

        if (this.parent)
        {
            this.updateFromParent();
        }
        else
        {
            this.updateFromRoot();
        }

        var len = this.children.length;

        if (len)
        {
            for (var i = 0; i < len; i++)
            {
                this.children[i].updateFromDirtyParent();
            }
        }

        this._dirty = false;
        this._dirtyVertex = true;
    },

    updateCache: function ()
    {
        this.cache.a = this.cache.cr * this._scaleX;
        this.cache.b = this.cache.sr * this._scaleX;
        this.cache.c = -this.cache.sr * this._scaleY;
        this.cache.d = this.cache.cr * this._scaleY;
    },

    updateVertexData: function (interpolationPercentage, renderer)
    {
        if (!this.gameObject.frame || (!this._dirtyVertex && !this.interpolate))
        {
            return;
        }

        var frame = this.gameObject.frame;

        var w0;
        var h0;
        var w1;
        var h1;

        if (frame.data.trim)
        {
            //  If the sprite is trimmed, add the extra space before transforming
            w1 = frame.x - (this._anchorX * frame.width);
            w0 = w1 + frame.cutWidth;

            h1 = frame.y - (this._anchorY * frame.height);
            h0 = h1 + frame.cutHeight;
        }
        else
        {
            w0 = frame.cutWidth * (1 - this._anchorX);
            w1 = frame.cutWidth * -this._anchorX;

            h0 = frame.cutHeight * (1 - this._anchorY);
            h1 = frame.cutHeight * -this._anchorY;
        }

        var resolution = frame.source.resolution;

        var wt = this.world;

        var a = wt.a / resolution;
        var b = wt.b / resolution;
        var c = wt.c / resolution;
        var d = wt.d / resolution;
        var tx = wt.tx;
        var ty = wt.ty;

        if (this.interpolate)
        {
            var old = this.old;

            // Interpolate with the last position to reduce stuttering.
            a = old.a + ((a - old.a) * interpolationPercentage);
            b = old.b + ((b - old.b) * interpolationPercentage);
            c = old.c + ((c - old.c) * interpolationPercentage);
            d = old.d + ((d - old.d) * interpolationPercentage);
            tx = old.tx + ((tx - old.tx) * interpolationPercentage);
            ty = old.ty + ((ty - old.ty) * interpolationPercentage);
        }

        if (frame.rotated)
        {
            // var cw = frame.cutWidth;
            var ch = frame.height;
            var a0 = a;
            var b0 = b;
            var c0 = c;
            var d0 = d;
            var _w1 = w1;
            var _w0 = w0;

            //  Offset before rotating
            tx = (wt.c * ch) + tx;
            ty = (wt.d * ch) + ty;
            
            //  Rotate matrix by 90 degrees with precalc values for sine and cosine of rad(90)
            a = (a0 * 6.123233995736766e-17) + -c0;
            b = (b0 * 6.123233995736766e-17) + -d0;
            c = a0 + (c0 * 6.123233995736766e-17);
            d = b0 + (d0 * 6.123233995736766e-17);

            // Update UV coordinates
            frame.updateUVsInverted();

            // Rotate dimensions
            w0 = h0;
            w1 = h1;
            h0 = _w0;
            h1 = _w1;
        }

        if (frame.autoRound === 1 || (frame.autoRound === -1 && renderer.roundPixels))
        {
            tx |= 0;
            ty |= 0;
        }

        var vert = this.glVertextData;

        //  Top Left Vert
        // vert.x0 = (a * w1) + (c * h1) + tx;
        // vert.y0 = (d * h1) + (b * w1) + ty;

        //  Top Right Vert
        // vert.x1 = (a * w0) + (c * h1) + tx;
        // vert.y1 = (d * h1) + (b * w0) + ty;

        //  Bottom Right Vert
        // vert.x2 = (a * w0) + (c * h0) + tx;
        // vert.y2 = (d * h0) + (b * w0) + ty;

        //  Bottom Left Vert
        // vert.x3 = (a * w1) + (c * h0) + tx;
        // vert.y3 = (d * h0) + (b * w1) + ty;
        
        return vert;
    },

    getVertexData: function (interpolationPercentage, renderer)
    {
        if (this.interpolate || this._dirtyVertex)
        {
            this.updateVertexData(interpolationPercentage, renderer);

            this._dirtyVertex = false;
        }

        return this.glVertextData;
    },

    cloneVertexData: function ()
    {
        var src = this.glVertextData;

        return {
            x0: src.x0,
            y0: src.y0,
            x1: src.x1,
            y1: src.y1,
            x2: src.x2,
            y2: src.y2,
            x3: src.x3,
            y3: src.y3
        };
    },

    getCanvasTransformData: function (interpolationPercentage, renderer)
    {
        var frame = this.gameObject.frame;

        var world = this.world;
        var data = this.canvasData;

        if (this.interpolate)
        {
            var old = this.old;

            // Interpolate with the last position to reduce stuttering.
            data.a = old.a + ((world.a - old.a) * interpolationPercentage);
            data.b = old.b + ((world.b - old.b) * interpolationPercentage);
            data.c = old.c + ((world.c - old.c) * interpolationPercentage);
            data.d = old.d + ((world.d - old.d) * interpolationPercentage);
            data.tx = old.tx + ((world.tx - old.tx) * interpolationPercentage);
            data.ty = old.ty + ((world.ty - old.ty) * interpolationPercentage);
            data.dx = old.dx + ((frame.x - (this.anchorX * frame.width)) * interpolationPercentage);
            data.dy = old.dy + ((frame.y - (this.anchorY * frame.height)) * interpolationPercentage);
        }
        else
        {
            //  Copy over the values to the canvasData object, in case the renderer needs to adjust them
            data.a = world.a;
            data.b = world.b;
            data.c = world.c;
            data.d = world.d;
            data.tx = world.tx;
            data.ty = world.ty;
            data.dx = frame.x - (this.anchorX * frame.width);
            data.dy = frame.y - (this.anchorY * frame.height);
        }

        if (frame.autoRound === 1 || (frame.autoRound === -1 && renderer.roundPixels))
        {
            data.tx |= 0;
            data.ty |= 0;
            data.dx |= 0;
            data.dy |= 0;
        }

        return data;
    }

};

Object.defineProperties(Transform.prototype, {

    //  Transform getters / setters

    x: {

        enumerable: true,

        get: function ()
        {
            return this._posX;
        },

        set: function (value)
        {
            this._posX = value;
            this.dirty = true;
        }

    },

    y: {

        enumerable: true,

        get: function ()
        {
            return this._posY;
        },

        set: function (value)
        {
            this._posY = value;
            this.dirty = true;
        }

    },

    scale: {

        enumerable: true,

        get: function ()
        {
            return this._scaleX;
        },

        set: function (value)
        {
            this._scaleX = value;
            this._scaleY = value;

            this.dirty = true;
            this.updateCache();
        }

    },

    scaleX: {

        enumerable: true,

        get: function ()
        {
            return this._scaleX;
        },

        set: function (value)
        {
            this._scaleX = value;

            this.dirty = true;
            this.updateCache();
        }

    },

    scaleY: {

        enumerable: true,

        get: function ()
        {
            return this._scaleY;
        },

        set: function (value)
        {
            this._scaleY = value;

            this.dirty = true;
            this.updateCache();
        }

    },

    anchor: {

        enumerable: true,

        get: function ()
        {
            return this._anchorX;
        },

        set: function (value)
        {
            this.setAnchor(value);
        }

    },

    anchorX: {

        enumerable: true,

        get: function ()
        {
            return this._anchorX;
        },

        set: function (value)
        {
            this._anchorX = value;
            this.dirty = true;
        }

    },

    anchorY: {

        enumerable: true,

        get: function ()
        {
            return this._anchorY;
        },

        set: function (value)
        {
            this._anchorY = value;
            this.dirty = true;
        }

    },

    pivotX: {

        enumerable: true,

        get: function ()
        {
            return this._pivotX;
        },

        set: function (value)
        {
            this._pivotX = value;
            this.dirty = true;
            this.updateCache();
        }

    },

    pivotY: {

        enumerable: true,

        get: function ()
        {
            return this._pivotY;
        },

        set: function (value)
        {
            this._pivotY = value;
            this.dirty = true;
            this.updateCache();
        }

    },

    angle: {

        enumerable: true,

        get: function ()
        {
            return WrapAngle(this.rotation * MATH_CONST.RAD_TO_DEG);
        },

        set: function (value)
        {
            this.rotation = WrapAngle(value) * MATH_CONST.DEG_TO_RAD;
        }

    },

    rotation: {

        enumerable: true,

        get: function ()
        {
            return this._rotation;
        },

        set: function (value)
        {
            if (this._rotation === value)
            {
                return;
            }

            this._rotation = value;
            this.dirty = true;

            if (this._rotation % MATH_CONST.PI2)
            {
                this.cache.sr = Math.sin(this._rotation);
                this.cache.cr = Math.cos(this._rotation);
                this.updateCache();
                this.hasLocalRotation = true;
            }
            else
            {
                this.hasLocalRotation = false;
            }
        }

    },

    //  Sets this *component* as being dirty
    dirty: {

        enumerable: true,

        get: function ()
        {
            return this._dirty;
        },

        set: function (value)
        {
            if (value)
            {
                if (!this._dirty)
                {
                    this._dirty = true;

                    if (this.immediate)
                    {
                        this.update();
                    }
                    else
                    {
                        this._dirtyVertex = true;
                        this.state.sys.updates.add(this);
                    }
                }
            }
            else
            {
                this._dirty = false;
            }
        }

    },

    //  GLOBAL read-only properties from here on
    //  Need *all* parents taken into account to get the correct values

    name: {

        enumerable: true,

        get: function ()
        {
            return (this.gameObject) ? this.gameObject.name : '';
        }

    },

    worldRotation: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this._worldRotation;
        }

    },

    worldScaleX: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this._worldScaleX;
        }

    },

    worldScaleY: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this._worldScaleY;
        }

    },

    worldX: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this.world.tx;
        }

    },

    worldY: {

        enumerable: true,

        get: function ()
        {
            this.updateAncestors();

            return this.world.ty;
        }

    }

});

module.exports = Transform;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(4);
var Browser = __webpack_require__(5);

var Audio = {

    /**
    * @property {boolean} audioData - Are Audio tags available?
    * @default
    */
    audioData: false,

    /**
    * @property {boolean} webAudio - Is the WebAudio API available?
    * @default
    */
    webAudio: false,

    /**
    * @property {boolean} ogg - Can this device play ogg files?
    * @default
    */
    ogg: false,

    /**
    * @property {boolean} opus - Can this device play opus files?
    * @default
    */
    opus: false,

    /**
    * @property {boolean} mp3 - Can this device play mp3 files?
    * @default
    */
    mp3: false,

    /**
    * @property {boolean} wav - Can this device play wav files?
    * @default
    */
    wav: false,

    /**
    * Can this device play m4a files?
    * @property {boolean} m4a - True if this device can play m4a files.
    * @default
    */
    m4a: false,

    /**
    * @property {boolean} webm - Can this device play webm files?
    * @default
    */
    webm: false,

    /**
    * @property {boolean} dolby - Can this device play EC-3 Dolby Digital Plus files?
    * @default
    */
    dolby: false

};

function init ()
{
    Audio.audioData = !!(window['Audio']);
    Audio.webAudio = !!(window['AudioContext'] || window['webkitAudioContext']);

    var audioElement = document.createElement('audio');

    var result = !!audioElement.canPlayType;

    try
    {
        if (result)
        {
            if (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''))
            {
                Audio.ogg = true;
            }

            if (audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') || audioElement.canPlayType('audio/opus;').replace(/^no$/, ''))
            {
                Audio.opus = true;
            }

            if (audioElement.canPlayType('audio/mpeg;').replace(/^no$/, ''))
            {
                Audio.mp3 = true;
            }

            //  Mimetypes accepted:
            //  developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
            //  bit.ly/iphoneoscodecs
            if (audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''))
            {
                Audio.wav = true;
            }

            if (audioElement.canPlayType('audio/x-m4a;') || audioElement.canPlayType('audio/aac;').replace(/^no$/, ''))
            {
                Audio.m4a = true;
            }

            if (audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''))
            {
                Audio.webm = true;
            }

            if (audioElement.canPlayType('audio/mp4;codecs="ec-3"') !== '')
            {
                if (Browser.edge)
                {
                    Audio.dolby = true;
                }
                else if (Browser.safari && Browser.safariVersion >= 9)
                {
                    if ((/Mac OS X (\d+)_(\d+)/).test(navigator.userAgent))
                    {
                        var major = parseInt(RegExp.$1, 10);
                        var minor = parseInt(RegExp.$2, 10);

                        if ((major === 10 && minor >= 11) || major > 10)
                        {
                            Audio.dolby = true;
                        }
                    }
                }
            }
        }
    }
    catch (e)
    {
        //  Nothing to do here
    }

    return Audio;
}

module.exports = init();


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(4);
var Browser = __webpack_require__(5);

var Fullscreen = {

    /**
    * @property {boolean} available - Does the browser support the Full Screen API?
    * @default
    */
    available: false,

    /**
    * @property {string} request - If the browser supports the Full Screen API this holds the call you need to use to activate it.
    * @default
    */
    request: '',

    /**
    * @property {string} cancel - If the browser supports the Full Screen API this holds the call you need to use to cancel it.
    * @default
    */
    cancel: '',

    /**
    * @property {boolean} keyboard - Does the browser support access to the Keyboard during Full Screen mode?
    * @default
    */
    keyboard: false

};

/**
* Checks for support of the Full Screen API.
*/
function init ()
{
    var fs = [
        'requestFullscreen',
        'requestFullScreen',
        'webkitRequestFullscreen',
        'webkitRequestFullScreen',
        'msRequestFullscreen',
        'msRequestFullScreen',
        'mozRequestFullScreen',
        'mozRequestFullscreen'
    ];

    var element = document.createElement('div');

    for (var i = 0; i < fs.length; i++)
    {
        if (element[fs[i]])
        {
            Fullscreen.available = true;
            Fullscreen.request = fs[i];
            break;
        }
    }

    var cfs = [
        'cancelFullScreen',
        'exitFullscreen',
        'webkitCancelFullScreen',
        'webkitExitFullscreen',
        'msCancelFullScreen',
        'msExitFullscreen',
        'mozCancelFullScreen',
        'mozExitFullscreen'
    ];

    if (Fullscreen.available)
    {
        for (var i = 0; i < cfs.length; i++)
        {
            if (document[cfs[i]])
            {
                Fullscreen.cancel = cfs[i];
                break;
            }
        }
    }

    //  Keyboard Input?
    if (window['Element'] && Element['ALLOW_KEYBOARD_INPUT'])
    {
        Fullscreen.keyboard = true;
    }

    return Fullscreen;
}

module.exports = init();


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(4);
var Browser = __webpack_require__(5);

var Input = {

    /**
    * @property {boolean} touch - Is touch available?
    * @default
    */
    touch: false,

    /**
    * @property {boolean} mspointer - Is mspointer available?
    * @default
    */
    mspointer: false,

    /**
    * @property {?string} wheelType - The newest type of Wheel/Scroll event supported: 'wheel', 'mousewheel', 'DOMMouseScroll'
    * @default
    * @protected
    */
    wheelEvent: null
    
};

function init ()
{
    if ('ontouchstart' in document.documentElement || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints >= 1))
    {
        Input.touch = true;
    }

    if (window.navigator.msPointerEnabled || window.navigator.pointerEnabled)
    {
        Input.mspointer = true;
    }

    if (!OS.cocoonJS)
    {
        // See https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        if ('onwheel' in window || (Browser.ie && 'WheelEvent' in window))
        {
            // DOM3 Wheel Event: FF 17+, IE 9+, Chrome 31+, Safari 7+
            Input.wheelEvent = 'wheel';
        }
        else if ('onmousewheel' in window)
        {
            // Non-FF legacy: IE 6-9, Chrome 1-31, Safari 5-7.
            Input.wheelEvent = 'mousewheel';
        }
        else if (Browser.firefox && 'MouseScrollEvent' in window)
        {
            // FF prior to 17. This should probably be scrubbed.
            Input.wheelEvent = 'DOMMouseScroll';
        }
    }

    return Input;
}

module.exports = init();


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

var OS = __webpack_require__(4);
var Browser = __webpack_require__(5);

var Video = {

    /**
    * @property {boolean} oggVideo - Can this device play ogg video files?
    * @default
    */
    oggVideo: false,

    /**
    * @property {boolean} h264Video - Can this device play h264 mp4 video files?
    * @default
    */
    h264Video: false,

    /**
    * @property {boolean} mp4Video - Can this device play h264 mp4 video files?
    * @default
    */
    mp4Video: false,

    /**
    * @property {boolean} webmVideo - Can this device play webm video files?
    * @default
    */
    webmVideo: false,

    /**
    * @property {boolean} vp9Video - Can this device play vp9 video files?
    * @default
    */
    vp9Video: false,

    /**
    * @property {boolean} hlsVideo - Can this device play hls video files?
    * @default
    */
    hlsVideo: false

};

function init ()
{
    var videoElement = document.createElement('video');
    var result = !!videoElement.canPlayType;

    try
    {
        if (result)
        {
            if (videoElement.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''))
            {
                Video.oggVideo = true;
            }

            if (videoElement.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''))
            {
                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                Video.h264Video = true;
                Video.mp4Video = true;
            }

            if (videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''))
            {
                Video.webmVideo = true;
            }

            if (videoElement.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ''))
            {
                Video.vp9Video = true;
            }

            if (videoElement.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ''))
            {
                Video.hlsVideo = true;
            }
        }
    }
    catch (e)
    {
        //  Nothing to do
    }

    return Video;
}

module.exports = init();


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

//  This singleton is instantiated as soon as Phaser loads,
//  before a Phaser.Game instance has even been created.
//  Which means all instances of Phaser Games can share it,
//  without having to re-poll the device all over again

var OS = __webpack_require__(4);
var Browser = __webpack_require__(5);
var Features = __webpack_require__(40);
var Input = __webpack_require__(97);
var Audio = __webpack_require__(95);
var Video = __webpack_require__(98);
var Fullscreen = __webpack_require__(96);
var CanvasFeatures = __webpack_require__(39);

module.exports = {

    OS: OS,
    Browser: Browser,
    Features: Features,
    Input: Input,
    Audio: Audio,
    Video: Video,
    Fullscreen: Fullscreen,
    CanvasFeatures: CanvasFeatures

};


/***/ },
/* 100 */
/***/ function(module, exports) {

var AddToDOM = function (element, parent, overflowHidden)
{
    if (overflowHidden === undefined) { overflowHidden = true; }

    var target;

    if (parent)
    {
        if (typeof parent === 'string')
        {
            //  Hopefully an element ID
            target = document.getElementById(parent);
        }
        else if (typeof parent === 'object' && parent.nodeType === 1)
        {
            //  Quick test for a HTMLelement
            target = parent;
        }
    }

    //  Fallback, covers an invalid ID and a non HTMLelement object
    if (!target)
    {
        target = document.body;
    }

    if (overflowHidden && target.style)
    {
        target.style.overflow = 'hidden';
    }

    target.appendChild(element);

    return element;
};

module.exports = AddToDOM;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var OS = __webpack_require__(4);

var isBooted = false;

var DOMContentLoaded = function (callback)
{
    if (isBooted)
    {
        return;
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive')
    {
        isBooted = true;
        
        callback();

        return;
    }

    var check = function ()
    {
        isBooted = true;

        document.removeEventListener('deviceready', check, true);
        document.removeEventListener('DOMContentLoaded', check, true);
        window.removeEventListener('load', check, true);

        callback();
    };

    if (!document.body)
    {
        window.setTimeout(check, 20);
    }
    else if (OS.cordova && !OS.cocoonJS)
    {
        //  Ref. http://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html#deviceready
        document.addEventListener('deviceready', check, false);
    }
    else
    {
        document.addEventListener('DOMContentLoaded', check, true);
        window.addEventListener('load', check, true);
    }
};

module.exports = DOMContentLoaded;


/***/ },
/* 102 */
/***/ function(module, exports) {

var ParseXML = function (data)
{
    var xml = '';

    try
    {
        if (window['DOMParser'])
        {
            var domparser = new DOMParser();
            xml = domparser.parseFromString(data, 'text/xml');
        }
        else
        {
            xml = new ActiveXObject('Microsoft.XMLDOM');
            xml.loadXML(data);
        }
    }
    catch (e)
    {
        xml = null;
    }

    if (!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length)
    {
        return null;
    }
    else
    {
        return xml;
    }
};

module.exports = ParseXML;


/***/ },
/* 103 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Abstracts away the use of RAF or setTimeOut for the core game update loop.
*
* @class Phaser.RequestAnimationFrame
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
* @param {boolean} [forceSetTimeOut=false] - Tell Phaser to use setTimeOut even if raf is available.
*/
function RequestAnimationFrame (game)
{
    /**
    * @property {Phaser.Game} game - The currently running game.
    */
    this.game = game;

    /**
    * @property {boolean} isRunning - true if RequestAnimationFrame is running, otherwise false.
    * @default
    */
    this.isRunning = false;

    this.tick = 0;

    /**
    * @property {boolean} isSetTimeOut  - True if the browser is using setTimeout instead of rAf.
    */
    this.isSetTimeOut = false;

    /**
    * @property {number} timeOutID - The callback setTimeout or rAf callback ID used when calling cancel.
    */
    this.timeOutID = null;

    var _this = this;

    //  timestamp = DOMHighResTimeStamp
    var step = function (timestamp)
    {
        _this.tick = timestamp;

        _this.timeOutID = window.requestAnimationFrame(step);

        _this.game.update(timestamp);
    };

    var stepTimeout = function ()
    {
        _this.tick = Date.now();

        // _this.game.update(_this.tick);

        // _this.timeOutID = window.setTimeout(stepTimeout, _this.game.time.timeToCall);
    };

    /**
    * Starts the requestAnimationFrame running or setTimeout if unavailable in browser
    * @method Phaser.RequestAnimationFrame#start
    */
    this.start = function ()
    {
        this.isRunning = true;

        if (this.game.config.forceSetTimeOut)
        {
            this.isSetTimeOut = true;

            this.timeOutID = window.setTimeout(stepTimeout, 0);
        }
        else
        {
            this.isSetTimeOut = false;

            this.timeOutID = window.requestAnimationFrame(step);
        }
    };

    /**
    * Stops the requestAnimationFrame from running.
    * @method Phaser.RequestAnimationFrame#stop
    */
    this.stop = function ()
    {
        this.isRunning = false;

        if (this.isSetTimeOut)
        {
            clearTimeout(this.timeOutID);
        }
        else
        {
            window.cancelAnimationFrame(this.timeOutID);
        }
    };

    this.destroy = function ()
    {
        this.stop();

        this.game = undefined;
    };

}

RequestAnimationFrame.prototype.constructor = RequestAnimationFrame;

module.exports = RequestAnimationFrame;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(41);
var EventListener = __webpack_require__(105);

var EventBinding = function (dispatcher, type)
{
    this.dispatcher = dispatcher;
    this.type = type;
    this.state = CONST.DISPATCHER_IDLE;
    this.active = [];
};

EventBinding.prototype.constructor = EventBinding;

EventBinding.prototype = {

    total: function ()
    {
        var total = 0;

        for (var i = 0; i < this.active.length; i++)
        {
            if (this.active[i].state !== CONST.LISTENER_REMOVING)
            {
                total++;
            }
        }

        return total;
    },

    get: function (callback)
    {
        for (var i = 0; i < this.active.length; i++)
        {
            if (this.active[i].callback === callback)
            {
                return this.active[i];
            }
        }
    },

    getIndex: function (callback)
    {
        for (var i = 0; i < this.active.length; i++)
        {
            if (this.active[i].callback === callback)
            {
                return i;
            }
        }

        return null;
    },

    has: function (callback)
    {
        return (this.get(callback));
    },

    add: function (callback, priority, once)
    {
        var listener = this.get(callback);

        if (!listener)
        {
            //  The listener doesn't exist, so create one
            listener = EventListener(this.type, callback, priority, once);
        }
        else
        {
            //  Listener already exists, abort
            return;
        }

        if (this.state === CONST.DISPATCHER_IDLE)
        {
            //  The Dispatcher isn't doing anything, so we don't need a pending state
            listener.state = CONST.LISTENER_ACTIVE;

            this.active.push(listener);

            this.active.sort(this.sortHandler);
        }
        else if (this.state === CONST.DISPATCHER_DISPATCHING)
        {
            //  Add it to the list, but keep the state as pending.
            //  The call to 'tidy' will sort it out at the end of the dispatch.
            this.active.push(listener);
        }
    },

    sortHandler: function (listenerA, listenerB)
    {
        if (listenerB.priority < listenerA.priority)
        {
            return -1;
        }
        else if (listenerB.priority > listenerA.priority)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    },

    remove: function (callback)
    {
        if (this.state === CONST.DISPATCHER_IDLE)
        {
            //  The Dispatcher isn't doing anything, so we can remove right away
            var i = this.getIndex(callback);

            if (i !== null)
            {
                this.active.splice(i, 1);
            }
        }
        else if (this.state === CONST.DISPATCHER_DISPATCHING)
        {
            //  The Dispatcher is working, so we flag the listener for removal at the end
            var listener = this.get(callback);

            if (listener)
            {
                listener.state = CONST.LISTENER_REMOVING;
            }
        }
    },

    dispatch: function (event)
    {
        if (this.state !== CONST.DISPATCHER_IDLE)
        {
            throw new Error('Error: Failed to execute \'EventDispatcher.dispatch\' on \'' + this.type + '\': The event is already being dispatched.');
        }
        else if (this.active.length === 0)
        {
            //  This was a valid dispatch call, we just had nothing to do ...
            return;
        }

        this.state = CONST.DISPATCHER_DISPATCHING;

        var listener;

        for (var i = 0; i < this.active.length; i++)
        {
            listener = this.active[i];

            if (listener.state !== CONST.LISTENER_ACTIVE)
            {
                continue;
            }

            listener.callback.call(this.dispatcher, event);

            //  Has the callback changed the state of this binding?
            if (this.state !== CONST.DISPATCHER_DISPATCHING)
            {
                //  Yup! Let's break out
                break;
            }

            //  Was it a 'once' listener?
            if (listener.once)
            {
                listener.state = CONST.LISTENER_REMOVING;
            }

            //  Has the event been halted by the callback?
            if (!event._propagate)
            {
                //  Break out, a listener has called Event.stopPropagation
                break;
            }
        }

        //  Dispatch over, or aborted
        if (this.state === CONST.DISPATCHER_REMOVING)
        {
            this.removeAll();

            //  All done, tidy the list in case there were any pending events added
            this.tidy();
        }
        else if (this.state === CONST.DISPATCHER_DESTROYED)
        {
            this.dispatcher.delete(this.type);
        }
        else
        {
            //  All done, just purge the list
            this.tidy();

            this.state = CONST.DISPATCHER_IDLE;
        }
    },

    //  Removes all listeners
    //  If this is currently being dispatched then don't remove 'pending' listeners
    //  (i.e. ones that were added during the dispatch), only active ones
    removeAll: function ()
    {
        if (this.state === CONST.DISPATCHER_IDLE)
        {
            this.active.length = 0;
        }
        else
        {
            for (var i = this.active.length - 1; i >= 0; i--)
            {
                if (this.active[i].state !== CONST.LISTENER_PENDING)
                {
                    this.active.pop();
                }
            }

            this.state = CONST.DISPATCHER_IDLE;
        }
    },

    tidy: function ()
    {
        var added = 0;

        var i = this.active.length - 1;

        do
        {
            if (this.active[i].state === CONST.LISTENER_REMOVING)
            {
                this.active.splice(i, 1);
            }
            else if (this.active[i].state === CONST.LISTENER_PENDING)
            {
                this.active[i].state === CONST.LISTENER_ACTIVE;
                added++;
            }

            i--;
        }
        while (i >= 0);

        if (added > 0)
        {
            this.active.sort(this.sortHandler);
        }
    },

    destroy: function ()
    {
        this.active.length = 0;
        this.dispatcher = undefined;
        this.type = '';
        this.state = CONST.DISPATCHER_DESTROYED;
    }

};

module.exports = EventBinding;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(41);

var EventListener = function (type, callback, priority, once)
{
    return {
        type: type,
        callback: callback,
        priority: priority,
        once: once,
        state: CONST.LISTENER_PENDING
    };
};

module.exports = EventListener;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var Bob = __webpack_require__(108);
var GameObject = __webpack_require__(21);
var Children = __webpack_require__(18);

/**
* A Blitter Game Object.
*
* The Blitter Game Object is a special type of Container, that contains Blitter.Bob objects.
* These objects can be thought of as just texture frames with a transform, and nothing more.
* Bobs don't have any update methods, or the ability to have children, or any kind of special effects.
* They are essentially just texture renderers, and the Blitter object creates and manages them.
*
* @class Blitter
* @extends Phaser.GameObject
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
* @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {string} [key] - The texture used by the Image during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture, BitmapData or PIXI.Texture.
* @param {string|number} [frame] - If this Image is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
*/
var Blitter = function (state, x, y, key, frame)
{
    var _texture = state.game.textures.get(key);
    var _frame = _texture.get(frame);

    GameObject.call(this, state, x, y, _texture, _frame);

    this.type = CONST.BLITTER;

    this.children = new Children(this);
};

Blitter.prototype = Object.create(GameObject.prototype);
Blitter.prototype.constructor = Blitter;

// Blitter.prototype.renderCanvas = require('./BlitterCanvasRenderer');
Blitter.prototype.renderWebGL = __webpack_require__(107);

//  frame MUST be part of the Blitter texture
Blitter.prototype.create = function (x, y, frame, visible, index)
{
    if (frame === undefined) { frame = this.frame; }
    if (visible === undefined) { visible = true; }
    if (index === undefined) { index = 0; }

    var bob = new Bob(this, x, y, frame, visible);

    this.children.addAt(bob, index, false);

    return bob;
};

//  frame MUST be part of the Blitter texture
Blitter.prototype.createFromCallback = function (callback, quantity, frame, visible)
{
    var bobs = this.createMultiple(quantity, frame, visible);

    for (var i = 0; i < bobs.length; i++)
    {
        var bob = bobs[i];

        callback.call(this, bob, i);
    }

    return bobs;
};

//  frame MUST be part of the Blitter texture
Blitter.prototype.createMultiple = function (quantity, frame, visible)
{
    if (frame === undefined) { frame = this.frame; }
    if (visible === undefined) { visible = true; }

    if (!Array.isArray(frame))
    {
        frame = [ frame ];
    }

    var bobs = [];
    var _this = this;

    frame.forEach(function (singleFrame)
    {
        for (var i = 0; i < quantity; i++)
        {
            bobs.push(_this.create(0, 0, singleFrame, visible));
        }
    });

    return bobs;
};

module.exports = Blitter;


/***/ },
/* 107 */
/***/ function(module, exports) {


var BlitterWebGLRenderer = function (renderer, src, interpolationPercentage)
{
    var worldAlpha = src.color.worldAlpha;
    var len = src.children.list.length;

    //  Skip rendering?

    if (src.skipRender || !src.visible || worldAlpha === 0 || len === 0)
    {
        return;
    }

    //  Render children
    for (var i = 0; i < len; i++)
    {
        var bob = src.children.list[i];
        var frame = bob.frame;

        if (!bob.visible || !frame.cutWidth || !frame.cutHeight)
        {
            continue;
        }

        renderer.blitterBatch.add(bob.x, bob.y, frame, worldAlpha);
    }
};

module.exports = BlitterWebGLRenderer;


/***/ },
/* 108 */
/***/ function(module, exports) {

var Bob = function (blitter, x, y, frame, visible)
{
    this.parent = blitter;

    this.x = x;
    this.y = y;
    this.frame = frame;
    this.visible = visible;
};

module.exports = Bob;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var GameObject = __webpack_require__(21);
var ContainerWebGLRenderer = __webpack_require__(110);
var Children = __webpack_require__(18);

var Container = function (state, parent, x, y)
{
    GameObject.call(this, state, x, y, null, null, parent);

    this.type = CONST.CONTAINER;

    this.render = ContainerWebGLRenderer;

    this.children = new Children(this);
};

Container.prototype = Object.create(GameObject.prototype);
Container.prototype.constructor = Container;

Container.prototype.preUpdate = function ()
{
    this.children.preUpdate();
};

module.exports = Container;


/***/ },
/* 110 */
/***/ function(module, exports) {


var ContainerWebGLRenderer = function (renderer, src, interpolationPercentage)
{
    var alpha = src.color.worldAlpha * 255 << 24;

    //  Skip rendering?

    if (src.skipRender || !src.visible || alpha === 0 || src.children.list.length === 0)
    {
        return;
    }

    //  Render children
    for (var i = 0; i < src.children.list.length; i++)
    {
        var child = src.children.list[i];

        child.render(renderer, child);
    }
};

module.exports = ContainerWebGLRenderer;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var GameObject = __webpack_require__(21);

/**
* An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
* It can still rotate, scale, crop and receive input events. This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
*
* @class Phaser.GameObject.Image
* @extends Phaser.GameObject
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
* @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {string} [key] - The texture used by the Image during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture, BitmapData or PIXI.Texture.
* @param {string|number} [frame] - If this Image is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
*/
var Image = function (state, x, y, key, frame)
{
    var _texture = state.game.textures.get(key);
    var _frame = _texture.get(frame);

    GameObject.call(this, state, x, y, _texture, _frame);

    this.type = CONST.IMAGE;
};

Image.prototype = Object.create(GameObject.prototype);
Image.prototype.constructor = Image;

Image.prototype.renderCanvas = __webpack_require__(112);
Image.prototype.renderWebGL = __webpack_require__(113);

Object.defineProperties(Image.prototype, {

    width: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX * this.frame.realWidth;
        },

        set: function (value)
        {
            this.scaleX = value / this.frame.realWidth;
        }

    },

    height: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleY * this.frame.realHeight;
        },

        set: function (value)
        {
            this.scaleY = value / this.frame.realHeight;
        }

    }

});

module.exports = Image;


/***/ },
/* 112 */
/***/ function(module, exports) {


var ImageCanvasRenderer = function (renderer, src, interpolationPercentage)
{
    var frame = src.frame;
    var alpha = src.color.worldAlpha * 255 << 24;

    //  Skip rendering?

    if (src.skipRender || !src.visible || alpha === 0 || !frame.cutWidth || !frame.cutHeight)
    {
        return;
    }

    var data = src.transform.getCanvasTransformData(interpolationPercentage, renderer);
    var tint = src.color._glTint;
    var bg = src.color._glBg;

    renderer.drawImage(frame, src.blendMode, data, alpha, tint, bg);
};

module.exports = ImageCanvasRenderer;


/***/ },
/* 113 */
/***/ function(module, exports) {


var ImageWebGLRenderer = function (renderer, src, interpolationPercentage)
{
    var frame = src.frame;
    var alpha = src.color.worldAlpha * 255 << 24;

    //  Skip rendering?

    if (src.skipRender || !src.visible || alpha === 0 || !frame.cutWidth || !frame.cutHeight)
    {
        return;
    }

    // var verts = src.transform.getVertexData(interpolationPercentage, renderer);
    // var index = src.frame.source.glTextureIndex;
    // var tint = src.color._glTint;
    // var bg = src.color._glBg;
    // renderer.batch.add(frame.source, src.blendMode, verts, frame.uvs, index, alpha, tint, bg);

    var transform = src.transform;
    renderer.setBlendMode(src.color._blendMode);
    renderer.spriteBatch.add(
        frame,
        transform._anchorX, transform._anchorY,
        transform.world.tx, transform.world.ty,
        transform._worldScaleX, transform._worldScaleY,
        transform._worldRotation,
        src.color._glTint
    );
};

module.exports = ImageWebGLRenderer;


/***/ },
/* 114 */
/***/ function(module, exports) {

var Area = function (circle)
{
    return (circle.radius > 0) ? Math.PI * circle.radius * circle.radius : 0;
};

module.exports = Area;


/***/ },
/* 115 */
/***/ function(module, exports) {

var Circumference = function (circle)
{
    return 2 * (Math.PI * circle.radius);
};

module.exports = Circumference;


/***/ },
/* 116 */
/***/ function(module, exports) {

/**
* Returns a Point object containing the coordinates of a point on the circumference of the Circle based on the given angle.
* @method Phaser.Circle.circumferencePoint
* @param {Phaser.Circle} a - The first Circle object.
* @param {number} angle - The angle in radians (unless asDegrees is true) to return the point from.
* @param {Phaser.Point} [out] - An optional Point object to put the result in to. If none specified a new Point object will be created.
* @return {Phaser.Point} The Point object holding the result.
*/
var CircumferencePoint = function (circle, angle, out)
{
    if (out === undefined) { out = { x: 0, y: 0 }; }

    out.x = circle.x + (circle.radius * Math.cos(angle));
    out.y = circle.y + (circle.radius * Math.sin(angle));

    return out;
};

module.exports = CircumferencePoint;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var Circle = __webpack_require__(42);

var Clone = function (source)
{
    return new Circle(source.x, source.y, source.radius);
};

module.exports = Clone;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

var Contains = __webpack_require__(22);

var ContainsPoint = function (circle, point)
{
    return Contains(circle, point.x, point.y);
};

module.exports = ContainsPoint;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

var Contains = __webpack_require__(22);

var ContainsRect = function (circle, rect)
{
    return (
        Contains(circle, rect.x, rect.y) &&
        Contains(circle, rect.right, rect.y) &&
        Contains(circle, rect.x, rect.bottom) &&
        Contains(circle, rect.right, rect.bottom)
    );
};

module.exports = ContainsRect;


/***/ },
/* 120 */
/***/ function(module, exports) {

/**
* Copies the x, y and diameter properties from any given object to this Circle.
* @method Phaser.Circle#copyFrom
* @param {any} source - The object to copy from.
* @return {Circle} This Circle object.
*/
var CopyFrom = function (source, dest)
{
    return dest.setTo(source.x, source.y, source.radius);
};

module.exports = CopyFrom;


/***/ },
/* 121 */
/***/ function(module, exports) {

var Equals = function (circle, toCompare)
{
    return (
        circle.x === toCompare.x &&
        circle.y === toCompare.y &&
        circle.radius === toCompare.radius
    );
};

module.exports = Equals;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

var Rectangle = __webpack_require__(7);

var GetBounds = function (circle, out)
{
    if (out === undefined) { out = new Rectangle(); }

    out.x = circle.left;
    out.y = circle.top;
    out.width = circle.diameter;
    out.height = circle.diameter;

    return out;
};

module.exports = GetBounds;


/***/ },
/* 123 */
/***/ function(module, exports) {

var Offset = function (circle, x, y)
{
    circle.x += x;
    circle.y += y;

    return circle;
};

module.exports = Offset;


/***/ },
/* 124 */
/***/ function(module, exports) {

var OffsetPoint = function (circle, point)
{
    circle.x += point.x;
    circle.y += point.y;

    return circle;
};

module.exports = OffsetPoint;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

/**
* Returns a uniformly distributed random point from anywhere within this Circle.
* 
* @method Phaser.Circle#random
* @param {Phaser.Point|object} [out] - A Phaser.Point, or any object with public x/y properties, that the values will be set in.
*     If no object is provided a new Phaser.Point object will be created. In high performance areas avoid this by re-using an existing object.
* @return {Phaser.Point} An object containing the random point in its `x` and `y` properties.
*/
var Random = function (circle, out)
{
    if (out === undefined) { out = new Point(); }

    var t = 2 * Math.PI * Math.random();
    var u = Math.random() + Math.random();
    var r = (u > 1) ? 2 - u : u;
    var x = r * Math.cos(t);
    var y = r * Math.sin(t);

    out.x = circle.x + (x * circle.radius);
    out.y = circle.y + (y * circle.radius);

    return out;
};

module.exports = Random;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Geom.Circle

var Circle = __webpack_require__(42);

Circle.Area = __webpack_require__(114);
Circle.Circumference = __webpack_require__(115);
Circle.CircumferencePoint = __webpack_require__(116);
Circle.Clone = __webpack_require__(117);
Circle.Contains = __webpack_require__(22);
Circle.ContainsPoint = __webpack_require__(118);
Circle.ContainsRect = __webpack_require__(119);
Circle.CopyFrom = __webpack_require__(120);
Circle.Equals = __webpack_require__(121);
Circle.GetBounds = __webpack_require__(122);
Circle.Offset = __webpack_require__(123);
Circle.OffsetPoint = __webpack_require__(124);
Circle.Random = __webpack_require__(125);

module.exports = Circle;


/***/ },
/* 127 */
/***/ function(module, exports) {

var Area = function (ellipse)
{
    if (ellipse.isEmpty())
    {
        return 0;
    }

    //  units squared
    return (ellipse.getMajorRadius() * ellipse.getMinorRadius() * Math.PI);
};

module.exports = Area;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

var Ellipse = __webpack_require__(43);

var Clone = function (source)
{
    return new Ellipse(source.x, source.y, source.width, source.height);
};

module.exports = Clone;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

var Contains = __webpack_require__(23);

var ContainsPoint = function (ellipse, point)
{
    return Contains(ellipse, point.x, point.y);
};

module.exports = ContainsPoint;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

var Contains = __webpack_require__(23);

var ContainsRect = function (ellipse, rect)
{
    return (
        Contains(ellipse, rect.x, rect.y) &&
        Contains(ellipse, rect.right, rect.y) &&
        Contains(ellipse, rect.x, rect.bottom) &&
        Contains(ellipse, rect.right, rect.bottom)
    );
};

module.exports = ContainsRect;


/***/ },
/* 131 */
/***/ function(module, exports) {

/**
* Copies the x, y and diameter properties from any given object to this Circle.
* @method Phaser.Circle#copyFrom
* @param {any} source - The object to copy from.
* @return {Ellipse} This Circle object.
*/
var CopyFrom = function (source, dest)
{
    return dest.setTo(source.x, source.y, source.width, source.height);
};

module.exports = CopyFrom;


/***/ },
/* 132 */
/***/ function(module, exports) {

var Equals = function (ellipse, toCompare)
{
    return (
        ellipse.x === toCompare.x &&
        ellipse.y === toCompare.y &&
        ellipse.width === toCompare.width &&
        ellipse.height === toCompare.height
    );
};

module.exports = Equals;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

var Rectangle = __webpack_require__(7);

var GetBounds = function (ellipse, out)
{
    if (out === undefined) { out = new Rectangle(); }

    out.x = ellipse.x - ellipse.width;
    out.y = ellipse.y - ellipse.height;
    out.width = ellipse.width;
    out.height = ellipse.height;

    return out;
};

module.exports = GetBounds;


/***/ },
/* 134 */
/***/ function(module, exports) {

var Offset = function (ellipse, x, y)
{
    ellipse.x += x;
    ellipse.y += y;

    return ellipse;
};

module.exports = Offset;


/***/ },
/* 135 */
/***/ function(module, exports) {

var OffsetPoint = function (ellipse, point)
{
    ellipse.x += point.x;
    ellipse.y += point.y;

    return ellipse;
};

module.exports = OffsetPoint;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var Random = function (ellipse, out)
{
    if (out === undefined) { out = new Point(); }

    var p = Math.random() * Math.PI * 2;
    var s = Math.sqrt(Math.random());

    out.x = ellipse.x + ((s * Math.cos(p)) * ellipse.width / 2);
    out.y = ellipse.y + ((s * Math.sin(p)) * ellipse.height / 2);

    return out;
};

module.exports = Random;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Geom.Ellipse

var Ellipse = __webpack_require__(43);

Ellipse.Area = __webpack_require__(127);
Ellipse.Clone = __webpack_require__(128);
Ellipse.Contains = __webpack_require__(23);
Ellipse.ContainsPoint = __webpack_require__(129);
Ellipse.ContainsRect = __webpack_require__(130);
Ellipse.CopyFrom = __webpack_require__(131);
Ellipse.Equals = __webpack_require__(132);
Ellipse.GetBounds = __webpack_require__(133);
Ellipse.Offset = __webpack_require__(134);
Ellipse.OffsetPoint = __webpack_require__(135);
Ellipse.Random = __webpack_require__(136);

module.exports = Ellipse;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

var GetAngle = __webpack_require__(44);
var FindT = __webpack_require__(24);

/**
* Calculate and return the angle, in radians, of the curves tangent at the given pixel distance along the curves length.
*
* @method Phaser.Hermite#getAngleWithDistance
* @param {number} [distance=0] - The distance along the curve to get the angle from, in pixels.
* @return {number} The angle of the line at the specified distance along the curve. The value is in radians.
*/
var GetAngleWithDistance = function (curve, distance)
{
    if (distance === undefined) { distance = 0; }

    if (distance <= 0)
    {
        return Math.atan2(this._v1y, this._v1x);
    }
    else
    {
        return GetAngle(curve, FindT(curve, distance));
    }
};

module.exports = GetAngleWithDistance;


/***/ },
/* 139 */
/***/ function(module, exports) {

/**
* Get the angle of the curves entry point.
*
* @method Phaser.Hermite#getEntryTangent
* @param {Phaser.Point|Object} point - The Phaser.Point object, or an Object with public `x` and `y` properties, in which the tangent vector values will be stored.
* @return {Phaser.Point} A Point object containing the tangent vector of this Hermite curve.
*/
var GetEntryTangent = function (curve, point)
{
    point.x = curve._v1x;
    point.y = curve._v1y;

    return point;
};

module.exports = GetEntryTangent;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);
var GetPoint = __webpack_require__(25);
var FindT = __webpack_require__(24);

/**
* Get a point on the curve using the distance, in pixels, along the curve.
*
* @method Phaser.Hermite#getPointWithDistance
* @param {integer} [distance=0] - The distance along the curve to get the point from, given in pixels.
* @param {Phaser.Point|Object} [point] - An optional Phaser.Point, or Object containing public `x` and `y` properties. If given the resulting values will be stored in the Objects `x` and `y` properties. If omitted a new Phaser.Point object is created.
* @return {Phaser.Point} The point on the line at the specified 'distance' along the curve.
*/
var GetPointWithDistance = function (curve, distance, out)
{
    if (distance === undefined) { distance = 0; }
    if (out === undefined) { out = new Point(); }

    if (distance <= 0)
    {
        out.x = this._p1x;
        out.y = this._p1y;
    }
    else
    {
        GetPoint(curve, FindT(curve, distance), out);
    }
    
    return out;
};

module.exports = GetPointWithDistance;


/***/ },
/* 141 */
/***/ function(module, exports) {

/**
* Get the X component of a point on the curve based on the `t` (time) value, which must be between 0 and 1.
*
* @method Phaser.Hermite#getX
* @param {number} [t=0] - The time value along the curve from which to extract a point. This is a value between 0 and 1, where 0 represents the start of the curve and 1 the end.
* @return {number} The X component of a point on the curve based on the `t` (time) value.
*/
var GetX = function (curve, t)
{
    if (t === undefined)
    {
        t = 0;
    }
    else
    {
        if (t < 0)
        {
            t = 0;
        }

        if (t > 1)
        {
            t = 1;
        }
    }

    var t2 = t * t;
    var t3 = t * t2;

    return (t3 * curve._ax + t2 * curve._bx + t * curve._v1x + curve._p1x);
};

module.exports = GetX;


/***/ },
/* 142 */
/***/ function(module, exports) {

/**
* Get the Y component of a point on the curve based on the `t` (time) value, which must be between 0 and 1.
*
* @method Phaser.Hermite#getY
* @param {number} [t=0] - The time value along the curve from which to extract a point. This is a value between 0 and 1, where 0 represents the start of the curve and 1 the end.
* @return {number} The Y component of a point on the curve based on the `t` (time) value.
*/
var GetY = function (curve, t)
{
    if (t === undefined)
    {
        t = 0;
    }
    else
    {
        if (t < 0)
        {
            t = 0;
        }

        if (t > 1)
        {
            t = 1;
        }
    }

    var t2 = t * t;
    var t3 = t * t2;

    return (t3 * curve._ay + t2 * curve._by + t * curve._v1y + curve._p1y);
};

module.exports = GetY;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

/**
* @author       Richard Davey <rich@photonstorm.com>
* @author       Pete Baron <pete@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* A data representation of a Hermite Curve (see http://en.wikipedia.org/wiki/Cubic_Hermite_spline)
* 
* A Hermite curve has a start and end point and tangent vectors for both of them.
* The curve will always pass through the two control points and the shape of it is controlled
* by the length and direction of the tangent vectors.  At the control points the curve will
* be facing exactly in the vector direction.
* 
* As these curves change speed (speed = distance between points separated by an equal change in
* 't' value - see Hermite.getPoint) this class attempts to reduce the variation by pre-calculating
* the `accuracy` number of points on the curve. The straight-line distances to these points are stored
* in the private 'points' array, and this information is used by Hermite.findT() to convert a pixel
* distance along the curve into a 'time' value.
* 
* Higher `accuracy` values will result in more even movement, but require more memory for the points
* list. 5 works, but 10 seems to be an ideal value for the length of curves found in most games on
* a desktop screen. If you use very long curves (more than 400 pixels) you may need to increase
* this value further.
*
* @class Phaser.Hermite
* @constructor
* @param {number} p1x - The x coordinate of the start of the curve.
* @param {number} p1y - The y coordinate of the start of the curve.
* @param {number} p2x - The x coordinate of the end of the curve.
* @param {number} p2y - The y coordinate of the end of the curve.
* @param {number} v1x - The x component of the tangent vector for the start of the curve.
* @param {number} v1y - The y component of the tangent vector for the start of the curve.
* @param {number} v2x - The x component of the tangent vector for the end of the curve.
* @param {number} v2y - The y component of the tangent vector for the end of the curve.
* @param {number} [accuracy=10] The amount of points to pre-calculate on the curve.
*/
var Hermite = function (p1x, p1y, p2x, p2y, v1x, v1y, v2x, v2y, accuracy)
{
    if (accuracy === undefined) { accuracy = 10; }

    /**
    * @property {number} _accuracy - The amount of points to pre-calculate on the curve.
    * @private
    */
    this._accuracy = accuracy;

    /**
    * @property {number} _p1x - The x coordinate of the start of the curve.
    * @private
    */
    this._p1x = p1x;

    /**
    * @property {number} _p1y - The y coordinate of the start of the curve.
    * @private
    */
    this._p1y = p1y;

    /**
    * @property {number} _p2x - The x coordinate of the end of the curve.
    * @private
    */
    this._p2x = p2x;

    /**
    * @property {number} _p2y - The y coordinate of the end of the curve.
    * @private
    */
    this._p2y = p2y;

    /**
    * @property {number} _v1x - The x component of the tangent vector for the start of the curve.
    * @private
    */
    this._v1x = v1x;

    /**
    * @property {number} _v1y - The y component of the tangent vector for the start of the curve.
    * @private
    */
    this._v1y = v1y;

    /**
    * @property {number} _v2x - The x component of the tangent vector for the end of the curve.
    * @private
    */
    this._v2x = v2x;

    /**
    * @property {number} _v2y - The y component of the tangent vector for the end of the curve.
    * @private
    */
    this._v2y = v2y;
    
    /**
    * @property {array} _points - A local array of cached points.
    * @private
    */
    this._points = [];

    /**
    * @property {Phaser.Point} _temp1 - A local cached Point object.
    * @private
    */
    this._temp1 = new Point();

    /**
    * @property {Phaser.Point} _temp2 - A local cached Point object.
    * @private
    */
    this._temp2 = new Point();

    this.recalculate();
};

Hermite.prototype.constructor = Hermite;

Hermite.prototype = {

    /**
    * Performs the curve calculations.
    *
    * This is called automatically if you change any of the curves public properties, such as `Hermite.p1x` or `Hermite.v2y`.
    *
    * If you adjust any of the internal private values, then call this to update the points.
    *
    * @method Phaser.Hermite#recalculate
    * @return {Phaser.Hermite} This object.
    */
    recalculate: function () {

        this._ax = (2 * this._p1x - 2 * this._p2x + this._v1x + this._v2x);
        this._ay = (2 * this._p1y - 2 * this._p2y + this._v1y + this._v2y);
        this._bx = (-3 * this._p1x + 3 * this._p2x - 2 * this._v1x - this._v2x);
        this._by = (-3 * this._p1y + 3 * this._p2y - 2 * this._v1y - this._v2y);

        this.length = this.calculateEvenPoints();

        return this;

    },

    /**
    * Calculate a number of points along the curve, based on `Hermite.accuracy`, and stores them in the private `_points` array.
    *
    * @method Phaser.Hermite#calculateEvenPoints
    * @return {number} The total length of the curve approximated as straight line distances between the points.
    */
    calculateEvenPoints: function () {

        var totalLength = 0;

        this._temp1.setTo(0, 0);                    //  pnt
        this._temp2.setTo(this._p1x, this._p1y);    //  lastPnt

        this._points[0] = 0;

        for (var i = 1; i <= this._accuracy; i++)
        {
            this.getPoint(i / this._accuracy, this._temp1);
            totalLength += this._temp1.distance(this._temp2);
            this._points[i] = totalLength;
            this._temp2.copyFrom(this._temp1);
        }

        return totalLength;

    }

};

Object.defineProperties(Hermite.prototype, {

    /**
    * @name Phaser.Hermite#accuracy
    * @property {number} accuracy - The amount of points to pre-calculate on the curve.
    */
    accuracy: {

        enumerable: true,

        get: function ()
        {
            return this._accuracy;
        },

        set: function (value)
        {
            if (value !== this._accuracy)
            {
                this._accuracy = value;
                this.recalculate();
            }
        }

    },

    /**
    * @name Phaser.Hermite#p1x
    * @property {number} p1x - The x coordinate of the start of the curve. Setting this value will recalculate the curve.
    */
    p1x: {

        enumerable: true,

        get: function () {

            return this._p1x;

        },

        set: function (value) {

            if (value !== this._p1x)
            {
                this._p1x = value;
                this.recalculate();
            }

        }

    },

    /**
    * @name Phaser.Hermite#p1y
    * @property {number} p1y - The y coordinate of the start of the curve. Setting this value will recalculate the curve.
    */
    p1y: {

        enumerable: true,

        get: function () {

            return this._p1y;

        },

        set: function (value) {

            if (value !== this._p1y)
            {
                this._p1y = value;
                this.recalculate();
            }

        }

    },

    /**
    * @name Phaser.Hermite#p2x
    * @property {number} p2x - The x coordinate of the end of the curve. Setting this value will recalculate the curve.
    */
    p2x: {

        enumerable: true,

        get: function () {

            return this._p2x;

        },

        set: function (value) {

            if (value !== this._p2x)
            {
                this._p2x = value;
                this.recalculate();
            }

        }

    },

    /**
    * @name Phaser.Hermite#p2y
    * @property {number} p2y - The y coordinate of the end of the curve. Setting this value will recalculate the curve.
    */
    p2y: {

        enumerable: true,

        get: function () {

            return this._p2y;

        },

        set: function (value) {

            if (value !== this._p2y)
            {
                this._p2y = value;
                this.recalculate();
            }

        }

    },

    /**
    * @name Phaser.Hermite#v1x
    * @property {number} v1x - The x component of the tangent vector for the start of the curve. Setting this value will recalculate the curve.
    */
    v1x: {

        enumerable: true,

        get: function () {

            return this._v1x;

        },

        set: function (value) {

            if (value !== this._v1x)
            {
                this._v1x = value;
                this.recalculate();
            }

        }

    },

    /**
    * @name Phaser.Hermite#v1y
    * @property {number} v1y - The y component of the tangent vector for the start of the curve. Setting this value will recalculate the curve.
    */
    v1y: {

        enumerable: true,

        get: function () {

            return this._v1y;

        },

        set: function (value) {

            if (value !== this._v1y)
            {
                this._v1y = value;
                this.recalculate();
            }

        }

    },

    /**
    * @name Phaser.Hermite#v2x
    * @property {number} v2x - The x component of the tangent vector for the end of the curve. Setting this value will recalculate the curve.
    */
    v2x: {

        enumerable: true,

        get: function () {

            return this._v2x;

        },

        set: function (value) {

            if (value !== this._v2x)
            {
                this._v2x = value;
                this.recalculate();
            }

        }

    },

    /**
    * @name Phaser.Hermite#v2y
    * @property {number} v2y - The y component of the tangent vector for the end of the curve. Setting this value will recalculate the curve.
    */
    v2y: {

        enumerable: true,

        get: function () {

            return this._v2y;

        },

        set: function (value) {

            if (value !== this._v2y)
            {
                this._v2y = value;
                this.recalculate();
            }

        }

    }

});

module.exports = Hermite;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Geom.Hermite

var Hermite = __webpack_require__(143);

Hermite.FindT = __webpack_require__(24);
Hermite.GetAngle = __webpack_require__(44);
Hermite.GetAngleWithDistance = __webpack_require__(138);
Hermite.GetEntryTangent = __webpack_require__(139);
Hermite.GetPoint = __webpack_require__(25);
Hermite.GetPointWithDistance = __webpack_require__(140);
Hermite.GetX = __webpack_require__(141);
Hermite.GetY = __webpack_require__(142);

module.exports = Hermite;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

var DistanceBetween = __webpack_require__(65);

var CircleToCircle = function (circleA, circleB)
{
    return (DistanceBetween(circleA.x, circleA.y, circleB.x, circleB.y) <= (circleA.radius + circleB.radius));
};

module.exports = CircleToCircle;


/***/ },
/* 146 */
/***/ function(module, exports) {

var CircleToRectangle = function (circle, rect)
{
    var halfWidth = rect.width / 2;
    var halfHeight = rect.height / 2;

    var cx = Math.abs(circle.x - rect.x - halfWidth);
    var xDist = halfWidth + circle.radius;

    if (cx <= halfWidth || cx > xDist)
    {
        return false;
    }

    var cy = Math.abs(circle.y - rect.y - halfHeight);
    var yDist = halfHeight + circle.radius;

    if (cy <= halfHeight || cy > yDist)
    {
        return false;
    }

    var xCornerDist = cx - halfWidth;
    var yCornerDist = cy - halfHeight;
    var xCornerDistSq = xCornerDist * xCornerDist;
    var yCornerDistSq = yCornerDist * yCornerDist;
    var maxCornerDistSq = circle.radius * circle.radius;

    return (xCornerDistSq + yCornerDistSq <= maxCornerDistSq);
};

module.exports = CircleToRectangle;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

var Rectangle = __webpack_require__(7);
var RectangleToRectangle = __webpack_require__(46);

var GetRectangleIntersection = function (rectA, rectB, output)
{
    if (output === undefined) { output = new Rectangle(); }

    if (RectangleToRectangle(rectA, rectB))
    {
        output.x = Math.max(rectA.x, rectB.x);
        output.y = Math.max(rectA.y, rectB.y);
        output.width = Math.min(rectA.right, rectB.right) - output.x;
        output.height = Math.min(rectA.bottom, rectB.bottom) - output.y;
    }

    return output;
};

module.exports = GetRectangleIntersection;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var LineToLine = function (line1, line2, asSegment, out)
{
    if (asSegment === undefined) { asSegment = true; }
    if (out === undefined) { out = new Point(); }

    var a = line1.x1;
    var b = line1.y1;

    var e = line1.x2;
    var f = line1.y2;

    var a1 = b.y - a.y;
    var a2 = f.y - e.y;
    var b1 = a.x - b.x;
    var b2 = e.x - f.x;
    var c1 = (b.x * a.y) - (a.x * b.y);
    var c2 = (f.x * e.y) - (e.x * f.y);
    var denom = (a1 * b2) - (a2 * b1);

    if (denom === 0)
    {
        return null;
    }

    out.x = ((b1 * c2) - (b2 * c1)) / denom;
    out.y = ((a2 * c1) - (a1 * c2)) / denom;

    if (asSegment)
    {
        var uc = ((f.y - e.y) * (b.x - a.x) - (f.x - e.x) * (b.y - a.y));
        var ua = (((f.x - e.x) * (a.y - e.y)) - (f.y - e.y) * (a.x - e.x)) / uc;
        var ub = (((b.x - a.x) * (a.y - e.y)) - ((b.y - a.y) * (a.x - e.x))) / uc;

        if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1)
        {
            return out;
        }
        else
        {
            return null;
        }
    }

    return out;
};

module.exports = LineToLine;


/***/ },
/* 149 */
/***/ function(module, exports) {

/**
* Checks for intersection between the Line and a Rectangle shape, or a rectangle-like
* object, with public `x`, `y`, `right` and `bottom` properties, such as a Sprite or Body.
*
* An intersection is considered valid if:
*
* The line starts within, or ends within, the Rectangle.
* The line segment intersects one of the 4 rectangle edges.
*
* The for the purposes of this function rectangles are considered 'solid'.
*
* @method Phaser.Line.intersectsRectangle
* @param {Phaser.Line} line - The line to check for intersection with.
* @param {Phaser.Rectangle|object} rect - The rectangle, or rectangle-like object, to check for intersection with.
* @return {boolean} True if the line intersects with the rectangle edges, or starts or ends within the rectangle.
*/
var LineToRectangle = function (line, rect)
{
    var x1 = line.x1;
    var y1 = line.y2;

    var x2 = line.x2;
    var y2 = line.y2;

    var bx1 = rect.x;
    var by1 = rect.y;
    var bx2 = rect.right;
    var by2 = rect.bottom;

    var t = 0;

    //  If the start or end of the line is inside the rect then we assume
    //  collision, as rects are solid for our use-case.

    if ((x1 >= bx1 && x1 <= bx2 && y1 >= by1 && y1 <= by2) ||
        (x2 >= bx1 && x2 <= bx2 && y2 >= by1 && y2 <= by2))
    {
        return true;
    }

    if (x1 < bx1 && x2 >= bx1)
    {
        //  Left edge
        t = y1 + (y2 - y1) * (bx1 - x1) / (x2 - x1);

        if (t > by1 && t <= by2)
        {
            return true;
        }
    }
    else if (x1 > bx2 && x2 <= bx2)
    {
        //  Right edge
        t = y1 + (y2 - y1) * (bx2 - x1) / (x2 - x1);

        if (t >= by1 && t <= by2)
        {
            return true;
        }
    }

    if (y1 < by1 && y2 >= by1)
    {
        //  Top edge
        t = x1 + (x2 - x1) * (by1 - y1) / (y2 - y1);

        if (t >= bx1 && t <= bx2)
        {
            return true;
        }
    }
    else if (y1 > by2 && y2 <= by2)
    {
        //  Bottom edge
        t = x1 + (x2 - x1) * (by2 - y1) / (y2 - y1);

        if (t >= bx1 && t <= bx2)
        {
            return true;
        }
    }

    return false;
};

module.exports = LineToRectangle;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

var PointToLine = __webpack_require__(45);

var PointToLineSegment = function (point, line)
{
    if (!PointToLine(point, line))
    {
        return false;
    }

    var xMin = Math.min(line.x1, line.x2);
    var xMax = Math.max(line.x1, line.x2);
    var yMin = Math.min(line.y1, line.y2);
    var yMax = Math.max(line.y1, line.y2);

    return ((point.x >= xMin && point.x <= xMax) && (point.y >= yMin && point.y <= yMax));
};

module.exports = PointToLineSegment;


/***/ },
/* 151 */
/***/ function(module, exports) {

var RectangleToValues = function (rect, left, right, top, bottom, tolerance)
{
    if (tolerance === undefined) { tolerance = 0; }

    return !(
        left > rect.right + tolerance ||
        right < rect.left - tolerance ||
        top > rect.bottom + tolerance ||
        bottom < rect.top - tolerance
    );
};

module.exports = RectangleToValues;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {


module.exports = {

    CircleToCircle: __webpack_require__(145),
    CircleToRectangle: __webpack_require__(146),
    GetRectangleIntersection: __webpack_require__(147),
    LineToLine: __webpack_require__(148),
    LineToRectangle: __webpack_require__(149),
    PointToLine: __webpack_require__(45),
    PointToLineSegment: __webpack_require__(150),
    RectangleToRectangle: __webpack_require__(46),
    RectangleToValues: __webpack_require__(151)

};


/***/ },
/* 153 */
/***/ function(module, exports) {


var CenterOn = function (line, x, y)
{
    var tx = x - ((line.x1 + line.x2) / 2);
    var ty = y - ((line.y1 + line.y2) / 2);

    line.x1 += tx;
    line.y1 += ty;

    line.x2 += tx;
    line.y2 += ty;

    return line;
};

module.exports = CenterOn;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

var Line = __webpack_require__(47);

var Clone = function (source)
{
    return new Line(source.x1, source.y1, source.x2, source.y2);
};

module.exports = Clone;


/***/ },
/* 155 */
/***/ function(module, exports) {

/**
* Copies the x, y and diameter properties from any given object to this Circle.
* @method Phaser.Circle#copyFrom
* @param {any} source - The object to copy from.
* @return {Circle} This Circle object.
*/
var CopyFrom = function (source, dest)
{
    return dest.setTo(source.x1, source.y1, source.x2, source.y2);
};

module.exports = CopyFrom;


/***/ },
/* 156 */
/***/ function(module, exports) {

var Equals = function (line, toCompare)
{
    return (
        line.x1 === toCompare.x1 &&
        line.y1 === toCompare.y1 &&
        line.x2 === toCompare.x2 &&
        line.y2 === toCompare.y2
    );
};

module.exports = Equals;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var GetMidPoint = function (line, out)
{
    if (out === undefined) { out = new Point(); }

    out.x = (line.x1 + line.x2) / 2;
    out.y = (line.y1 + line.y2) / 2;

    return out;
};

module.exports = GetMidPoint;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

var MATH_CONST = __webpack_require__(2);
var Angle = __webpack_require__(6);
var Point = __webpack_require__(0);

var GetNormal = function (line, out)
{
    if (out === undefined) { out = new Point(); }

    var a = Angle(line) - MATH_CONST.TAU;

    out.x = Math.cos(a);
    out.y = Math.sin(a);

    return out;
};

module.exports = GetNormal;


/***/ },
/* 159 */
/***/ function(module, exports) {

/**
* Using Bresenham's line algorithm this will return an array of all coordinates on this line.
* The start and end points are rounded before this runs as the algorithm works on integers.
*
* @method Phaser.Line#coordinatesOnLine
* @param {number} [stepRate=1] - How many steps will we return? 1 = every coordinate on the line, 2 = every other coordinate, etc.
* @param {array} [results] - The array to store the results in. If not provided a new one will be generated.
* @return {array} An array of coordinates.
*/
var GetPointsOnLine = function (line, stepRate, results)
{
    if (stepRate === undefined) { stepRate = 1; }
    if (results === undefined) { results = []; }

    var x1 = Math.round(line.x1);
    var y1 = Math.round(line.y1);
    var x2 = Math.round(line.x2);
    var y2 = Math.round(line.y2);

    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var sx = (x1 < x2) ? 1 : -1;
    var sy = (y1 < y2) ? 1 : -1;
    var err = dx - dy;

    results.push([ x1, y1 ]);

    var i = 1;

    while (!((x1 === x2) && (y1 === y2)))
    {
        var e2 = err << 1;

        if (e2 > -dy)
        {
            err -= dy;
            x1 += sx;
        }

        if (e2 < dx)
        {
            err += dx;
            y1 += sy;
        }

        if (i % stepRate === 0)
        {
            results.push([ x1, y1 ]);
        }

        i++;
    }

    return results;
};

module.exports = GetPointsOnLine;


/***/ },
/* 160 */
/***/ function(module, exports) {

var Height = function (line)
{
    return Math.abs(line.y1 - line.y2);
};

module.exports = Height;


/***/ },
/* 161 */
/***/ function(module, exports) {

var Length = function (line)
{
    return Math.sqrt((line.x2 - line.x1) * (line.x2 - line.x1) + (line.y2 - line.y1) * (line.y2 - line.y1));
};

module.exports = Length;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

var MATH_CONST = __webpack_require__(2);
var Angle = __webpack_require__(6);

var NormalX = function (line)
{
    return Math.cos(Angle(line) - MATH_CONST.TAU);
};

module.exports = NormalX;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

var MATH_CONST = __webpack_require__(2);
var Angle = __webpack_require__(6);

var NormalY = function (line)
{
    return Math.sin(Angle(line) - MATH_CONST.TAU);
};

module.exports = NormalY;


/***/ },
/* 164 */
/***/ function(module, exports) {

var PerpSlope = function (line)
{
    return -((line.x2 - line.x1) / (line.y2 - line.y1));
};

module.exports = PerpSlope;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var Random = function (line, out)
{
    if (out === undefined) { out = new Point(); }

    var t = Math.random();

    out.x = line.x1 + t * (line.x2 - line.x1);
    out.y = line.y1 + t * (line.y2 - line.y1);

    return out;
};

module.exports = Random;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

var Angle = __webpack_require__(6);
var NormalAngle = __webpack_require__(48);

/**
* Returns the reflected angle between two lines.
* This is the outgoing angle based on the angle of Line 1 and the normalAngle of Line 2.
*
* @method Phaser.Line.reflect
* @param {Phaser.Line} a - The base line.
* @param {Phaser.Line} b - The line to be reflected from the base line.
* @return {number} The reflected angle in radians.
*/
var ReflectAngle = function (lineA, lineB)
{
    return (2 * NormalAngle(lineB) - Math.PI - Angle(lineA));
};

module.exports = ReflectAngle;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

var RotateAroundXY = __webpack_require__(26);

var Rotate = function (line, angle)
{
    var x = (line.x1 + line.x2) / 2;
    var y = (line.y1 + line.y2) / 2;

    return RotateAroundXY(line, x, y, angle);
};

module.exports = Rotate;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

var RotateAroundXY = __webpack_require__(26);

var RotateAroundPoint = function (line, point, angle)
{
    return RotateAroundXY(line, point.x, point.y, angle);
};

module.exports = RotateAroundPoint;


/***/ },
/* 169 */
/***/ function(module, exports) {

var SetToAngle = function (line, x, y, angle, length)
{
    line.x1 = x;
    line.y1 = y;

    line.x2 = x + (Math.cos(angle) * length);
    line.y2 = y + (Math.sin(angle) * length);

    return line;
};

module.exports = SetToAngle;


/***/ },
/* 170 */
/***/ function(module, exports) {

var Slope = function (line)
{
    return (line.y2 - line.y1) / (line.x2 - line.x1);
};

module.exports = Slope;


/***/ },
/* 171 */
/***/ function(module, exports) {

var Width = function (line)
{
    return Math.abs(line.x1 - line.x2);
};

module.exports = Width;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Geom.Line

var Line = __webpack_require__(47);

Line.Angle = __webpack_require__(6);
Line.CenterOn = __webpack_require__(153);
Line.Clone = __webpack_require__(154);
Line.CopyFrom = __webpack_require__(155);
Line.Equals = __webpack_require__(156);
Line.GetMidPoint = __webpack_require__(157);
Line.GetNormal = __webpack_require__(158);
Line.GetPointsOnLine = __webpack_require__(159);
Line.Height = __webpack_require__(160);
Line.Length = __webpack_require__(161);
Line.NormalAngle = __webpack_require__(48);
Line.NormalX = __webpack_require__(162);
Line.NormalY = __webpack_require__(163);
Line.PerpSlope = __webpack_require__(164);
Line.Random = __webpack_require__(165);
Line.ReflectAngle = __webpack_require__(166);
Line.Rotate = __webpack_require__(167);
Line.RotateAroundPoint = __webpack_require__(168);
Line.RotateAroundXY = __webpack_require__(26);
Line.SetToAngle = __webpack_require__(169);
Line.Slope = __webpack_require__(170);
Line.Width = __webpack_require__(171);

module.exports = Line;


/***/ },
/* 173 */
/***/ function(module, exports) {

var Add = function (point, x, y)
{
    point.x += x;
    point.y += y;

    return point;
};

module.exports = Add;


/***/ },
/* 174 */
/***/ function(module, exports) {

var Ceil = function (point)
{
    return point.setTo(Math.ceil(point.x), Math.ceil(point.y));
};

module.exports = Ceil;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var Clone = function (source)
{
    return new Point(source.x, source.y);
};

module.exports = Clone;


/***/ },
/* 176 */
/***/ function(module, exports) {

/**
* Copies the x, y and diameter properties from any given object to this Circle.
* @method Phaser.Circle#copyFrom
* @param {any} source - The object to copy from.
* @return {Circle} This Circle object.
*/
var CopyFrom = function (source, dest)
{
    return dest.setTo(source.x, source.y);
};

module.exports = CopyFrom;


/***/ },
/* 177 */
/***/ function(module, exports) {

var Cross = function (pointA, pointB)
{
    return ((pointA.x * pointB.y) - (pointA.y * pointB.x));
};

module.exports = Cross;


/***/ },
/* 178 */
/***/ function(module, exports) {

var Divide = function (point, x, y)
{
    point.x /= x;
    point.y /= y;

    return point;
};

module.exports = Divide;


/***/ },
/* 179 */
/***/ function(module, exports) {

var Equals = function (point, toCompare)
{
    return (point.x === toCompare.x && point.y === toCompare.y);
};

module.exports = Equals;


/***/ },
/* 180 */
/***/ function(module, exports) {

var Floor = function (point)
{
    return point.setTo(Math.floor(point.x), Math.floor(point.y));
};

module.exports = Floor;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var GetCentroid = function (points, out)
{
    if (out === undefined) { out = new Point(); }

    if (!Array.isArray(points))
    {
        throw new Error('GetCentroid points argument must be an array');
    }

    var len = points.length;

    if (len < 1)
    {
        throw new Error('GetCentroid points array must not be empty');
    }
    else if (len === 1)
    {
        out.x = points[0].x;
        out.y = points[0].y;
    }
    else
    {
        for (var i = 0; i < len; i++)
        {
            out.x += points[i].x;
            out.y += points[i].y;
        }

        out.x /= len;
        out.y /= len;
    }

    return out;
};

module.exports = GetCentroid;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var Interpolate = function (pointA, pointB, t, out)
{
    if (t === undefined) { t = 0; }
    if (out === undefined) { out = new Point(); }

    out.x = pointA.x + ((pointB.x - pointA.x) * t);
    out.y = pointA.y + ((pointB.y - pointA.y) * t);

    return out;
};

module.exports = Interpolate;


/***/ },
/* 183 */
/***/ function(module, exports) {

/**
* Copies the x, y and diameter properties from any given object to this Circle.
* @method Phaser.Circle#copyFrom
* @param {any} source - The object to copy from.
* @return {Circle} This Circle object.
*/
var Invert = function (point)
{
    return point.setTo(point.y, point.x);
};

module.exports = Invert;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var Negative = function (point, out)
{
    if (out === undefined) { out = new Point(); }

    return out.setTo(-point.x, -point.y);
};

module.exports = Negative;


/***/ },
/* 185 */
/***/ function(module, exports) {

var NormalizeRightHand = function (point)
{
    return point.setTo(point.y * -1, point.x);
};

module.exports = NormalizeRightHand;


/***/ },
/* 186 */
/***/ function(module, exports) {

var Perp = function (point)
{
    return point.setTo(-point.y, point.x);
};

module.exports = Perp;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

var Dot = __webpack_require__(27);
var Point = __webpack_require__(0);
var GetMagnitudeSq = __webpack_require__(50);

var Project = function (pointA, pointB, out)
{
    if (out === undefined) { out = new Point(); }

    var amt = Dot(pointA, pointB) / GetMagnitudeSq(pointB);

    if (amt !== 0)
    {
        out.x = amt * pointB.x;
        out.y = amt * pointB.y;
    }

    return out;
};

module.exports = Project;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

var Dot = __webpack_require__(27);
var Point = __webpack_require__(0);

var ProjectUnit = function (pointA, pointB, out)
{
    if (out === undefined) { out = new Point(); }

    var amt = Dot(pointA, pointB);

    if (amt !== 0)
    {
        out.x = amt * pointB.x;
        out.y = amt * pointB.y;
    }

    return out;
};

module.exports = ProjectUnit;


/***/ },
/* 189 */
/***/ function(module, exports) {

var RPerp = function (point)
{
    return point.setTo(point.y, -point.x);
};

module.exports = RPerp;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

var Normalize = __webpack_require__(52);
var Multiply = __webpack_require__(51);

var SetMagnitude = function (point, magnitude)
{
    Normalize(point);

    return Multiply(point, magnitude, magnitude);
};

module.exports = SetMagnitude;


/***/ },
/* 191 */
/***/ function(module, exports) {

var Subtract = function (point, x, y)
{
    point.x -= x;
    point.y -= y;

    return point;
};

module.exports = Subtract;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Geom.Point

var Point = __webpack_require__(0);

Point.Add = __webpack_require__(173);
Point.Ceil = __webpack_require__(174);
Point.Clone = __webpack_require__(175);
Point.CopyFrom = __webpack_require__(176);
Point.Cross = __webpack_require__(177);
Point.Divide = __webpack_require__(178);
Point.Dot = __webpack_require__(27);
Point.Equals = __webpack_require__(179);
Point.Floor = __webpack_require__(180);
Point.GetCentroid = __webpack_require__(181);
Point.GetMagnitude = __webpack_require__(49);
Point.GetMagnitudeSq = __webpack_require__(50);
Point.Interpolate = __webpack_require__(182);
Point.Invert = __webpack_require__(183);
Point.Multiply = __webpack_require__(51);
Point.Negative = __webpack_require__(184);
Point.Normalize = __webpack_require__(52);
Point.NormalizeRightHand = __webpack_require__(185);
Point.Perp = __webpack_require__(186);
Point.Project = __webpack_require__(187);
Point.ProjectUnit = __webpack_require__(188);
Point.RPerp = __webpack_require__(189);
Point.SetMagnitude = __webpack_require__(190);
Point.Subtract = __webpack_require__(191);

module.exports = Point;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

var Polygon = __webpack_require__(54);

var Clone = function (polygon)
{
    return new Polygon(polygon.points);
};

module.exports = Clone;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

var Contains = __webpack_require__(53);

/**
* Checks whether the x and y coordinates are contained within this polygon.
*
* @method Phaser.Polygon#contains
* @param {number} x - The X value of the coordinate to test.
* @param {number} y - The Y value of the coordinate to test.
* @return {boolean} True if the coordinates are within this polygon, otherwise false.
*/
var ContainsPoint = function (polygon, point)
{
    return Contains(polygon, point.x, point.y);
};

module.exports = ContainsPoint;


/***/ },
/* 195 */
/***/ function(module, exports) {


var GetAABB = function (polygon)
{
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -minX;
    var maxY = -minY;
    var p;

    for (var i = 0; i < polygon.points.length; i++)
    {
        p = polygon.points[i];

        minX = Math.min(minX, p.x);
        minY = Math.min(minY, p.y);
        maxX = Math.max(maxX, p.x);
        maxY = Math.max(maxY, p.y);
    }

    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
};

module.exports = GetAABB;


/***/ },
/* 196 */
/***/ function(module, exports) {

/**
 * Export the points as an array of flat numbers, following the sequence [ x,y, x,y, x,y ]
 *
 * @method Phaser.Polygon#toNumberArray
 * @param {array} [output] - The array to append the points to. If not specified a new array will be created.
 * @return {array} The flattened array.
 */
var GetNumberArray = function (polygon, output)
{
    if (output === undefined) { output = []; }

    for (var i = 0; i < polygon.points.length; i++)
    {
        output.push(polygon.points[i].x);
        output.push(polygon.points[i].y);
    }

    return output;
};

module.exports = GetNumberArray;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Geom.Polygon

var Polygon = __webpack_require__(54);

Polygon.Clone = __webpack_require__(193);
Polygon.Contains = __webpack_require__(53);
Polygon.ContainsPoint = __webpack_require__(194);
Polygon.GetAABB = __webpack_require__(195);
Polygon.GetNumberArray = __webpack_require__(196);

module.exports = Polygon;


/***/ },
/* 198 */
/***/ function(module, exports) {

var Area = function (rect)
{
    return rect.width * rect.height;
};

module.exports = Area;


/***/ },
/* 199 */
/***/ function(module, exports) {

var Ceil = function (rect)
{
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);

    return rect;
};

module.exports = Ceil;


/***/ },
/* 200 */
/***/ function(module, exports) {

var CeilAll = function (rect)
{
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);
    rect.width = Math.ceil(rect.width);
    rect.height = Math.ceil(rect.height);

    return rect;
};

module.exports = CeilAll;


/***/ },
/* 201 */
/***/ function(module, exports) {

/**
* Centers this Rectangle so that the center coordinates match the given x and y values.
*
* @method Phaser.Rectangle#centerOn
* @param {number} x - The x coordinate to place the center of the Rectangle at.
* @param {number} y - The y coordinate to place the center of the Rectangle at.
* @return {Phaser.Rectangle} This Rectangle object
*/
var CenterOn = function (rect, x, y)
{
    rect.x = x - (rect.width / 2);
    rect.y = y - (rect.height / 2);

    return rect;
};

module.exports = CenterOn;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

var Rectangle = __webpack_require__(7);

var Clone = function (source)
{
    return new Rectangle(source.x, source.y, source.width, source.height);
};

module.exports = Clone;


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

var Contains = __webpack_require__(55);

var ContainsPoint = function (rect, point)
{
    return Contains(rect, point.x, point.y);
};

module.exports = ContainsPoint;


/***/ },
/* 204 */
/***/ function(module, exports) {

//  Checks if rectB is fully contained within rectA

var ContainsRect = function (rectA, rectB)
{
    //  Volume check (if rectB volume > rectA then rectA cannot contain it)
    if ((rectB.width * rectB.height) > (rectA.width * rectA.height))
    {
        return false;
    }

    return
        (
            (rectB.x > rectA.x && rectB.x < rectA.right) && 
            (rectB.right > rectA.x && rectB.right < rectA.right)
        ) && (
            (rectB.y > rectA.y && rectB.y < rectA.bottom) && 
            (rectB.bottom > rectA.y && rectB.bottom < rectA.bottom)
        );
    
};

module.exports = ContainsRect;


/***/ },
/* 205 */
/***/ function(module, exports) {

/**
* Copies the x, y and diameter properties from any given object to this Circle.
* @method Phaser.Circle#copyFrom
* @param {any} source - The object to copy from.
* @return {Circle} This Circle object.
*/
var CopyFrom = function (source, dest)
{
    return dest.setTo(source.x, source.y, source.width, source.height);
};

module.exports = CopyFrom;


/***/ },
/* 206 */
/***/ function(module, exports) {

var Equals = function (rect, toCompare)
{
    return (
        rect.x === toCompare.x &&
        rect.y === toCompare.y &&
        rect.width === toCompare.width &&
        rect.height === toCompare.height
    );
};

module.exports = Equals;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

var GetAspectRatio = __webpack_require__(28);

//  Fits the target rectangle into the source rectangle.
//  Preserves aspect ratio.
//  Scales and centers the target rectangle to the source rectangle

var FitInside = function (target, source)
{
    var ratio = GetAspectRatio(target);

    if (ratio < GetAspectRatio(source))
    {
        //  Taller than Wide
        target.setSize(source.height * ratio, source.height);
    }
    else
    {
        //  Wider than Tall
        target.setSize(source.width, source.width * ratio);
    }

    return target.setPosition(
        (source.right / 2) - (target.width / 2),
        (source.bottom / 2) - (target.height / 2)
    );
};

module.exports = FitInside;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

var GetAspectRatio = __webpack_require__(28);

//  Fits the target rectangle around the source rectangle.
//  Preserves aspect ration.
//  Scales and centers the target rectangle to the source rectangle

var FitOutside = function (target, source)
{
    var ratio = GetAspectRatio(target);

    if (ratio > GetAspectRatio(source))
    {
        //  Wider than Tall
        target.setSize(source.height * ratio, source.height);
    }
    else
    {
        //  Taller than Wide
        target.setSize(source.width, source.width * ratio);
    }

    return target.setPosition(
        (source.right / 2) - target.width / 2,
        (source.bottom / 2) - target.height / 2
    );
};

module.exports = FitOutside;


/***/ },
/* 209 */
/***/ function(module, exports) {

var Floor = function (rect)
{
    rect.x = Math.floor(rect.x);
    rect.y = Math.floor(rect.y);

    return rect;
};

module.exports = Floor;


/***/ },
/* 210 */
/***/ function(module, exports) {

var FloorAll = function (rect)
{
    rect.x = Math.floor(rect.x);
    rect.y = Math.floor(rect.y);
    rect.width = Math.floor(rect.width);
    rect.height = Math.floor(rect.height);

    return rect;
};

module.exports = FloorAll;


/***/ },
/* 211 */
/***/ function(module, exports) {

//  The center of the Rectangle object, expressed as a Point object 

var GetCenter = function (rect, out)
{
    if (out === undefined) { out = { x: 0, y: 0 }; }

    out.x = rect.right / 2;
    out.y = rect.bottom / 2;

    return out;
};

module.exports = GetCenter;


/***/ },
/* 212 */
/***/ function(module, exports) {

//  The size of the Rectangle object, expressed as a Point object 
//  with the values of the width and height properties.

var GetSize = function (rect, out)
{
    if (out === undefined) { out = { x: 0, y: 0 }; }

    out.x = rect.width;
    out.y = rect.height;

    return out;
};

module.exports = GetSize;


/***/ },
/* 213 */
/***/ function(module, exports) {

//  Increases the size of the Rectangle object by the specified amounts.
//  The center point of the Rectangle object stays the same, and its size increases 
//  to the left and right by the x value, and to the top and the bottom by the y value.

var Inflate = function (rect, x, y)
{
    //  Get the current center
    var cx = rect.x + (rect.width / 2);
    var cy = rect.y + (rect.height / 2);

    //  Inflate
    rect.width = 2 * x;
    rect.height = 2 * y;

    rect.x = x - (rect.width / 2);
    rect.y = y - (rect.height / 2);

    return rect;
};

module.exports = Inflate;


/***/ },
/* 214 */
/***/ function(module, exports) {

//  Merges the target Rectangle with a list of points.
//  The points is an array of objects with public x/y properties.

var MergePoints = function (target, points)
{
    var minX = target.x;
    var maxX = target.right;
    var minY = target.y;
    var maxY = target.bottom;

    for (var i = 0; i < points.length; i++)
    {
        minX = Math.min(minX, points[i].x);
        maxX = Math.max(maxX, points[i].x);
        minY = Math.min(minY, points[i].y);
        maxY = Math.max(maxY, points[i].y);
    }

    target.x = minX;
    target.y = minY;
    target.width = maxX - minX;
    target.height = maxY - minY;

    return target;
};

module.exports = MergePoints;


/***/ },
/* 215 */
/***/ function(module, exports) {

//  Merges source rectangle into target rectangle and returns target
//  Neither rect should have negative widths or heights

var MergeRect = function (target, source)
{
    var minX = Math.min(target.x, source.x);
    var maxX = Math.max(target.right, source.right);

    target.x = minX;
    target.width = maxX - minX;

    var minY = Math.min(target.y, source.y);
    var maxY = Math.max(target.bottom, source.bottom);

    target.y = minY;
    target.height = maxY - minY;

    return target;
};

module.exports = MergeRect;


/***/ },
/* 216 */
/***/ function(module, exports) {


var MergeXY = function (target, x, y)
{
    var minX = Math.min(target.x, x);
    var maxX = Math.max(target.right, x);

    target.x = minX;
    target.width = maxX - minX;

    var minY = Math.min(target.y, y);
    var maxY = Math.max(target.bottom, y);

    target.y = minY;
    target.height = maxY - minY;

    return target;
};

module.exports = MergeXY;


/***/ },
/* 217 */
/***/ function(module, exports) {

var Offset = function (rect, x, y)
{
    rect.x += x;
    rect.y += y;

    return rect;
};

module.exports = Offset;


/***/ },
/* 218 */
/***/ function(module, exports) {

var OffsetPoint = function (rect, point)
{
    rect.x += point.x;
    rect.y += point.y;

    return rect;
};

module.exports = OffsetPoint;


/***/ },
/* 219 */
/***/ function(module, exports) {

var Overlaps = function (rectA, rectB)
{
    return (
        rectA.x < rectB.right && 
        rectA.right > rectB.x && 
        rectA.y < rectB.bottom && 
        rectA.bottom > rectB.y
    );
};

module.exports = Overlaps;


/***/ },
/* 220 */
/***/ function(module, exports) {

var Perimeter = function (rect)
{
    return 2 * (rect.width + rect.height);
};

module.exports = Perimeter;


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

var Point = __webpack_require__(0);

var Random = function (rect, out)
{
    if (out === undefined) { out = new Point(); }

    out.x = rect.x + (Math.random() * rect.width);
    out.y = rect.y + (Math.random() * rect.height);

    return out;
};

module.exports = Random;


/***/ },
/* 222 */
/***/ function(module, exports) {

/**
* Scales the width and height of this Rectangle by the given amounts.
* 
* @method Phaser.Rectangle#scale
* @param {number} x - The amount to scale the width of the Rectangle by. A value of 0.5 would reduce by half, a value of 2 would double the width, etc.
* @param {number} [y] - The amount to scale the height of the Rectangle by. A value of 0.5 would reduce by half, a value of 2 would double the height, etc.
* @return {Phaser.Rectangle} This Rectangle object
*/
var Scale = function (rect, x, y)
{
    if (y === undefined) { y = x; }

    rect.width *= x;
    rect.height *= y;

    return rect;
};

module.exports = Scale;


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

var Rectangle = __webpack_require__(7);

var Union = function (rectA, rectB, output)
{
    if (output === undefined) { output = Rectangle(); }

    var x = Math.min(rectA.x, rectB.x);
    var y = Math.min(rectA.y, rectB.y);

    return output.set(
        x,
        y,
        Math.max(rectA.right, rectB.right) - x,
        Math.max(rectA.bottom, rectB.bottom) - y
    );
    
};

module.exports = Union;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Geom.Rectangle

var Rectangle = __webpack_require__(7);

Rectangle.Area = __webpack_require__(198);
Rectangle.Ceil = __webpack_require__(199);
Rectangle.CeilAll = __webpack_require__(200);
Rectangle.CenterOn = __webpack_require__(201);
Rectangle.Clone = __webpack_require__(202);
Rectangle.Contains = __webpack_require__(55);
Rectangle.ContainsPoint = __webpack_require__(203);
Rectangle.ContainsRect = __webpack_require__(204);
Rectangle.CopyFrom = __webpack_require__(205);
Rectangle.Equals = __webpack_require__(206);
Rectangle.FitInside = __webpack_require__(207);
Rectangle.FitOutside = __webpack_require__(208);
Rectangle.Floor = __webpack_require__(209);
Rectangle.FloorAll = __webpack_require__(210);
Rectangle.GetAspectRatio = __webpack_require__(28);
Rectangle.GetCenter = __webpack_require__(211);
Rectangle.GetSize = __webpack_require__(212);
Rectangle.Inflate = __webpack_require__(213);
Rectangle.MergePoints = __webpack_require__(214);
Rectangle.MergeRect = __webpack_require__(215);
Rectangle.MergeXY = __webpack_require__(216);
Rectangle.Offset = __webpack_require__(217);
Rectangle.OffsetPoint = __webpack_require__(218);
Rectangle.Overlaps = __webpack_require__(219);
Rectangle.Perimeter = __webpack_require__(220);
Rectangle.Random = __webpack_require__(221);
Rectangle.Scale = __webpack_require__(222);
Rectangle.Union = __webpack_require__(223);

module.exports = Rectangle;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var Set = __webpack_require__(330);
var XHRSettings = __webpack_require__(29);
var Event = __webpack_require__(230);
var EventDispatcher = __webpack_require__(15);

var BaseLoader = function ()
{
    //  To finish the loader ...
    //  
    //  3) Progress update
    //  4) JSON loader
    //  5) XML Loader
    //  6) Multi File support (atlas + data)
    //  7) Atlas Loader

    this.events = new EventDispatcher();

    //  Move to a 'setURL' method?
    this.baseURL = '';
    this.path = '';

    //  Read from Game / State Config
    this.enableParallel = true;
    this.maxParallelDownloads = 4;

    //  xhr specific global settings (can be overridden on a per-file basis)
    this.xhr = XHRSettings();

    this.crossOrigin = undefined;

    this.list = new Set();
    this.inflight = new Set();
    this.failed = new Set();
    this.queue = new Set();
    this.storage = new Set();

    this._state = CONST.LOADER_IDLE;
};

BaseLoader.prototype.contructor = BaseLoader;

BaseLoader.prototype = {

    addFile: function (file)
    {
        if (!this.isReady())
        {
            return -1;
        }

        file.path = this.path;

        this.list.set(file);

        return this;
    },

    //  Is the Loader actively loading (or processing loaded files)
    isLoading: function ()
    {
        return (this._state === CONST.LOADER_LOADING || this._state === CONST.LOADER_PROCESSING);
    },

    //  Is the Loader ready to start a new load?
    isReady: function ()
    {
        return (this._state === CONST.LOADER_IDLE || this._state === CONST.LOADER_COMPLETE || this._state === CONST.LOADER_FAILED);
    },

    start: function ()
    {
        console.log('BaseLoader start. Files to load:', this.list.size);

        if (!this.isReady())
        {
            return;
        }

        this.events.dispatch(new Event.LOADER_START_EVENT(this));

        if (this.list.size === 0)
        {
            this.finishedLoading();
        }
        else
        {
            this._state = CONST.LOADER_LOADING;

            this.failed.clear();
            this.inflight.clear();
            this.queue.clear();

            this.queue.debug = true;

            this.updateProgress();

            this.processLoadQueue();
        }
    },

    updateProgress: function ()
    {

    },

    processLoadQueue: function ()
    {
        // console.log('======== BaseLoader processLoadQueue');
        // console.log('List size', this.list.size);
        // console.log(this.inflight.size, 'items still in flight. Can load another', (this.maxParallelDownloads - this.inflight.size));

        var _this = this;

        this.list.each(function (file)
        {
            if (file.state === CONST.FILE_PENDING && _this.inflight.size < _this.maxParallelDownloads)
            {
                _this.inflight.set(file);

                _this.list.delete(file);

                _this.loadFile(file);
            }

            if (_this.inflight.size === _this.maxParallelDownloads)
            {
                //  Tells the Set iterator to abort
                return false;
            }

        });
    },

    //  private
    loadFile: function (file)
    {
        // console.log('LOADING', file.key);

        //  If the file doesn't have its own crossOrigin set,
        //  we'll use the Loaders (which is undefined by default)
        if (!file.crossOrigin)
        {
            file.crossOrigin = this.crossOrigin;
        }

        file.load(this.nextFile.bind(this), this.baseURL);
    },

    nextFile: function (previousFile, success)
    {
        // console.log('LOADED:', previousFile.src, success);

        //  Move the file that just loaded from the inflight list to the queue or failed Set

        if (success)
        {
            this.queue.set(previousFile);
        }
        else
        {
            this.failed.set(previousFile);
        }

        this.inflight.delete(previousFile);

        if (this.list.size > 0)
        {
            // console.log('nextFile - still something in the list');
            this.processLoadQueue();
        }
        else if (this.inflight.size === 0)
        {
            // console.log('nextFile calling finishedLoading');
            this.finishedLoading();
        }
    },

    finishedLoading: function ()
    {
        // console.log('---> BaseLoader.finishedLoading PROCESSING', this.queue.size, 'files');

        this._state = CONST.LOADER_PROCESSING;

        this.storage.clear();

        var _this = this;

        this.queue.each(function (file)
        {
            // console.log('%c Calling process on ' + file.key, 'color: #000000; background: #ffff00;');

            file.onProcess(_this.processUpdate.bind(_this));
        });
    },

    //  Called automatically by the File when it has finished processing
    processUpdate: function (file)
    {
        // console.log('-> processUpdate', file.key, file.state);

        //  This file has failed to load, so move it to the failed Set
        if (file.state === CONST.FILE_ERRORED)
        {
            this.failed.set(file);

            if (file.linkFile)
            {
                this.queue.delete(file.linkFile);
            }

            return this.removeFromQueue(file);
        }

        //  If we got here, then the file loaded

        //  Special handling for multi-part files

        if (file.linkFile)
        {
            if (file.state === CONST.FILE_COMPLETE && file.linkFile.state === CONST.FILE_COMPLETE)
            {
                //  Partner has loaded, so add them both to Storage

                this.storage.set({ type: file.linkType, fileA: file, fileB: file.linkFile });

                this.queue.delete(file.linkFile);

                this.removeFromQueue(file);
            }
        }
        else
        {
            this.storage.set(file);

            this.removeFromQueue(file);
        }
    },

    removeFromQueue: function (file)
    {
        this.queue.delete(file);

        if (this.queue.size === 0 && this._state === CONST.LOADER_PROCESSING)
        {
            //  We've processed all the files we loaded
            this.processComplete();
        }
    },

    processComplete: function ()
    {
        console.log('Loader Complete. Loaded:', this.storage.size, 'Failed:', this.failed.size);

        this.list.clear();
        this.inflight.clear();
        this.queue.clear();

        if (this.processCallback)
        {
            this.processCallback();
        }

        this._state = CONST.LOADER_COMPLETE;

        this.events.dispatch(new Event.LOADER_COMPLETE_EVENT(this));
    },

    reset: function ()
    {
        this.list.clear();
        this.inflight.clear();
        this.failed.clear();
        this.queue.clear();
        this.storage.clear();

        this.tag = '';
        this.path = '';
        this.baseURL = '';

        this._state = CONST.LOADER_IDLE;
    },

    destroy: function ()
    {
        this.reset();
        this._state = CONST.LOADER_DESTROYED;
    }

};

module.exports = BaseLoader;


/***/ },
/* 226 */
/***/ function(module, exports) {

var GetURL = function (file, baseURL)
{
    if (!file.url)
    {
        return false;
    }

    if (file.url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/))
    {
        return file.url;
    }
    else
    {
        return baseURL + file.url;
    }
};

module.exports = GetURL;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

var MergeXHRSettings = __webpack_require__(56);

var XHRLoader = function (file, globalXHRSettings)
{
    var config = MergeXHRSettings(globalXHRSettings, file.xhrSettings);

    var xhr = new XMLHttpRequest();

    xhr.open('GET', file.src, config.async, config.user, config.password);

    xhr.responseType = file.xhrSettings.responseType;
    xhr.timeout = config.timeout;

    if (config.header && config.headerValue)
    {
        xhr.setRequestHeader(config.header, config.headerValue);
    }

    if (config.overrideMimeType)
    {
        xhr.overrideMimeType(config.overrideMimeType);
    }

    // After a successful request, the xhr.response property will contain the requested data as a DOMString, ArrayBuffer, Blob, or Document (depending on what was set for responseType.)

    xhr.onload = file.onLoad.bind(file);
    xhr.onerror = file.onError.bind(file);
    xhr.onprogress = file.onProgress.bind(file);

    //  This is the only standard method, the ones above are browser additions (maybe not universal?)
    // xhr.onreadystatechange

    xhr.send();

    return xhr;
};

module.exports = XHRLoader;


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

var Event = __webpack_require__(14);

var LoaderCompleteEvent = function (loader)
{
    Event.call(this, 'LOADER_COMPLETE_EVENT');

    this.loader = loader;
};

LoaderCompleteEvent.prototype = Object.create(Event.prototype);
LoaderCompleteEvent.prototype.constructor = LoaderCompleteEvent;

module.exports = LoaderCompleteEvent;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

var Event = __webpack_require__(14);

var LoaderStartEvent = function (loader)
{
    Event.call(this, 'LOADER_START_EVENT');

    this.loader = loader;
};

LoaderStartEvent.prototype = Object.create(Event.prototype);
LoaderStartEvent.prototype.constructor = LoaderStartEvent;

module.exports = LoaderStartEvent;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    LOADER_START_EVENT: __webpack_require__(229),
    LOADER_COMPLETE_EVENT: __webpack_require__(228)

};


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

var ImageFile = __webpack_require__(16);
var JSONFile = __webpack_require__(57);

var AtlasJSONFile = function (key, textureURL, atlasURL, path, textureXhrSettings, atlasXhrSettings)
{
    var image = new ImageFile(key, textureURL, path, textureXhrSettings);
    var data = new JSONFile(key, atlasURL, path, atlasXhrSettings);

    //  Link them together
    image.linkFile = data;
    data.linkFile = image;

    //  Set the type
    image.linkType = 'atlasjson';
    data.linkType = 'atlasjson';

    return { texture: image, data: data };
};

module.exports = AtlasJSONFile;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var File = __webpack_require__(8);

var BinaryFile = function (key, url, path, xhrSettings)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        throw new Error('Error calling \'Loader.binary\' invalid key provided.');
    }

    if (!url)
    {
        url = path + key + '.bin';
    }
    else
    {
        url = path.concat(url);
    }

    File.call(this, 'binary', key, url, 'arraybuffer', xhrSettings);
};

BinaryFile.prototype = Object.create(File.prototype);
BinaryFile.prototype.constructor = BinaryFile;

BinaryFile.prototype.onProcess = function (callback)
{
    this.state = CONST.FILE_PROCESSING;

    this.data = this.xhrLoader.response;

    this.onComplete();

    callback(this);
};

module.exports = BinaryFile;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var File = __webpack_require__(8);

var GLSLFile = function (key, url, path, xhrSettings)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        throw new Error('Error calling \'Loader.text\' invalid key provided.');
    }

    if (!url)
    {
        url = path + key + '.glsl';
    }
    else
    {
        url = path.concat(url);
    }

    File.call(this, 'glsl', key, url, 'text', xhrSettings);
};

GLSLFile.prototype = Object.create(File.prototype);
GLSLFile.prototype.constructor = GLSLFile;

GLSLFile.prototype.onProcess = function (callback)
{
    this.state = CONST.FILE_PROCESSING;

    this.data = this.xhrLoader.responseText;

    this.onComplete();

    callback(this);
};

module.exports = GLSLFile;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var File = __webpack_require__(8);

var TextFile = function (key, url, path, xhrSettings)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        throw new Error('Error calling \'Loader.text\' invalid key provided.');
    }

    if (!url)
    {
        url = path + key + '.text';
    }
    else
    {
        url = path.concat(url);
    }

    File.call(this, 'text', key, url, 'text', xhrSettings);
};

TextFile.prototype = Object.create(File.prototype);
TextFile.prototype.constructor = TextFile;

TextFile.prototype.onProcess = function (callback)
{
    this.state = CONST.FILE_PROCESSING;

    this.data = this.xhrLoader.responseText;

    this.onComplete();

    callback(this);
};

module.exports = TextFile;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {


var CONST = __webpack_require__(3);
var File = __webpack_require__(8);
var ParseXML = __webpack_require__(102);

var XMLFile = function (key, url, path, xhrSettings)
{
    if (path === undefined) { path = ''; }

    if (!key)
    {
        throw new Error('Error calling \'Loader.xml\' invalid key provided.');
    }

    if (!url)
    {
        url = path + key + '.xml';
    }
    else
    {
        url = path.concat(url);
    }

    File.call(this, 'xml', key, url, 'text', xhrSettings);
};

XMLFile.prototype = Object.create(File.prototype);
XMLFile.prototype.constructor = XMLFile;

XMLFile.prototype.onProcess = function (callback)
{
    this.state = CONST.FILE_PROCESSING;

    this.data = ParseXML(this.xhrLoader.responseText);

    if (this.data === null)
    {
        throw new Error('XMLFile: Invalid XML');
    }

    this.onComplete();

    callback(this);
};

module.exports = XMLFile;


/***/ },
/* 236 */
/***/ function(module, exports) {

var Average = function (values)
{
    var sum = 0;

    for (var i = 0; i < values.length; i++)
    {
        sum += (+values[i]);
    }

    return sum / values.length;
};

module.exports = Average;


/***/ },
/* 237 */
/***/ function(module, exports) {

var CeilTo = function (value, place, base)
{
    if (place === undefined) { place = 0; }
    if (base === undefined) { base = 10; }

    var p = Math.pow(base, -place);

    return Math.ceil(value * p) / p;
};

module.exports = CeilTo;


/***/ },
/* 238 */
/***/ function(module, exports) {

/**
* Force a value within the boundaries by clamping it to the range `min`, `max`.
*
* @method Phaser.Math#clamp
* @param {float} v - The value to be clamped.
* @param {float} min - The minimum bounds.
* @param {float} max - The maximum bounds.
* @return {number} The clamped value.
*/
var Clamp = function (v, min, max)
{
    if (v < min)
    {
        return min;
    }
    else if (max < v)
    {
        return max;
    }
    else
    {
        return v;
    }
};

module.exports = Clamp;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(2);

var DegToRad = function (degrees)
{
    return degrees * CONST.DEG_TO_RAD;
};

module.exports = DegToRad;


/***/ },
/* 240 */
/***/ function(module, exports) {

var Difference = function (a, b)
{
    return Math.abs(a - b);
};

module.exports = Difference;


/***/ },
/* 241 */
/***/ function(module, exports) {

var FloatBetween = function (min, max)
{
    return Math.random() * (max - min + 1) + min;
};

module.exports = FloatBetween;


/***/ },
/* 242 */
/***/ function(module, exports) {

var FloorTo = function (value, place, base)
{
    if (place === undefined) { place = 0; }
    if (base === undefined) { base = 10; }

    var p = Math.pow(base, -place);

    return Math.floor(value * p) / p;
};

module.exports = FloorTo;


/***/ },
/* 243 */
/***/ function(module, exports) {


var MaxAdd = function (value, amount, max)
{
    return Math.min(value + amount, max);
};

module.exports = MaxAdd;


/***/ },
/* 244 */
/***/ function(module, exports) {

var MinSub = function (value, amount, min)
{
    return Math.max(value - amount, min);
};

module.exports = MinSub;


/***/ },
/* 245 */
/***/ function(module, exports) {

var Percent = function (a, b, base)
{
    if (base === undefined) { base = 0; }

    if (a > b || base > b)
    {
        return 1;
    }
    else if (a < base || base > a)
    {
        return 0;
    }
    else
    {
        return (a - base) / b;
    }
};

module.exports = Percent;


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(2);

var RadToDeg = function (radians)
{
    return radians * CONST.RAD_TO_DEG;
};

module.exports = RadToDeg;


/***/ },
/* 247 */
/***/ function(module, exports) {

//  p = Point or any object with public x/y properties

var Rotate = function (point, angle)
{
    var x = point.x;
    var y = point.y;

    point.x = (x * Math.cos(angle)) - (y * Math.sin(angle));
    point.y = (x * Math.sin(angle)) + (y * Math.cos(angle));

    return point;
};

module.exports = Rotate;


/***/ },
/* 248 */
/***/ function(module, exports) {

//  p = Point or any object with public x/y properties

var RotateAround = function (point, x, y, angle)
{
    var c = Math.cos(angle);
    var s = Math.sin(angle);

    var tx = point.x - x;
    var ty = point.y - y;

    point.x = tx * c - ty * s + x;
    point.y = tx * s + ty * c + y;

    return point;
};

module.exports = RotateAround;


/***/ },
/* 249 */
/***/ function(module, exports) {

//  p = Point or any object with public x/y properties

var RotateAroundDistance = function (point, x, y, angle, distance)
{
    var t = angle + Math.atan2(point.y - y, point.x - x);

    point.x = x + (distance * Math.cos(t));
    point.y = y + (distance * Math.sin(t));

    return point;
};

module.exports = RotateAroundDistance;


/***/ },
/* 250 */
/***/ function(module, exports) {

var RoundTo = function (value, place, base)
{
    if (place === undefined) { place = 0; }
    if (base === undefined) { base = 10; }

    var p = Math.pow(base, -place);

    return Math.round(value * p) / p;
};

module.exports = RoundTo;


/***/ },
/* 251 */
/***/ function(module, exports) {


var SinCosTableGenerator = function (length, sinAmp, cosAmp, frequency)
{
    if (sinAmp === undefined) { sinAmp = 1; }
    if (cosAmp === undefined) { cosAmp = 1; }
    if (frequency === undefined) { frequency = 1; }

    frequency *= Math.PI / length;

    var cos = [];
    var sin = [];

    for (var c = 0; c < length; c++)
    {
        cosAmp -= sinAmp * frequency;
        sinAmp += cosAmp * frequency;

        cos[c] = cosAmp;
        sin[c] = sinAmp;
    }

    return {
        sin: sin,
        cos: cos,
        length: length
    };
};

module.exports = SinCosTableGenerator;


/***/ },
/* 252 */
/***/ function(module, exports) {

var SmoothStep = function (x, min, max)
{
    x = Math.max(0, Math.min(1, (x - min) / (max - min)));

    return x * x * (3 - 2 * x);
};

module.exports = SmoothStep;


/***/ },
/* 253 */
/***/ function(module, exports) {

var SmootherStep = function (x, min, max)
{
    x = Math.max(0, Math.min(1, (x - min) / (max - min)));

    return x * x * x * (x * (x * 6 - 15) + 10);
};

module.exports = SmootherStep;


/***/ },
/* 254 */
/***/ function(module, exports) {

/**
* Checks if two values are within the given tolerance of each other.
*
* @method Phaser.Math#within
* @param {number} a - The first number to check
* @param {number} b - The second number to check
* @param {number} tolerance - The tolerance. Anything equal to or less than this is considered within the range.
* @return {boolean} True if a is <= tolerance of b.
* @see {@link Phaser.Math.fuzzyEqual}
*/
var Within = function (a, b, tolerance)
{
    return (Math.abs(a - b) <= tolerance);
};

module.exports = Within;


/***/ },
/* 255 */
/***/ function(module, exports) {

var Between = function (x1, y1, x2, y2)
{
    return Math.atan2(y2 - y1, x2 - x1);
};

module.exports = Between;


/***/ },
/* 256 */
/***/ function(module, exports) {

var BetweenPoints = function (point1, point2)
{
    return Math.atan2(point2.y - point1.y, point2.x - point1.x);
};

module.exports = BetweenPoints;


/***/ },
/* 257 */
/***/ function(module, exports) {

var BetweenPointsY = function (point1, point2)
{
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
};

module.exports = BetweenPointsY;


/***/ },
/* 258 */
/***/ function(module, exports) {

var BetweenY = function (x1, y1, x2, y2)
{
    return Math.atan2(x2 - x1, y2 - y1);
};

module.exports = BetweenY;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

var Normalize = __webpack_require__(64);

var Reverse = function (angle)
{
    return Normalize(angle + Math.PI);
};

module.exports = Reverse;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

var MATH_CONST = __webpack_require__(2);

/**
* Rotates currentAngle towards targetAngle, taking the shortest rotation distance.
* The lerp argument is the amount to rotate by in this call.
* 
* @method Phaser.Math#rotateToAngle
* @param {number} currentAngle - The current angle, in radians.
* @param {number} targetAngle - The target angle to rotate to, in radians.
* @param {number} [lerp=0.05] - The lerp value to add to the current angle.
* @return {number} The adjusted angle.
*/
var RotateTo = function (currentAngle, targetAngle, lerp)
{
    if (lerp === undefined) { lerp = 0.05; }

    if (currentAngle === targetAngle)
    {
        return currentAngle;
    }

    if (Math.abs(targetAngle - currentAngle) <= lerp || Math.abs(targetAngle - currentAngle) >= (MATH_CONST.PI2 - lerp))
    {
        currentAngle = targetAngle;
    }
    else
    {
        if (Math.abs(targetAngle - currentAngle) > Math.PI)
        {
            if (targetAngle < currentAngle)
            {
                targetAngle += MATH_CONST.PI2;
            }
            else
            {
                targetAngle -= MATH_CONST.PI2;
            }
        }

        if (targetAngle > currentAngle)
        {
            currentAngle += lerp;
        }
        else if (targetAngle < currentAngle)
        {
            currentAngle -= lerp;
        }
    }

    return currentAngle;
};

module.exports = RotateTo;


/***/ },
/* 261 */
/***/ function(module, exports) {

/**
* Gets the shortest angle between `angle1` and `angle2`.
* Both angles must be in the range -180 to 180, which is the same clamped
* range that `sprite.angle` uses, so you can pass in two sprite angles to
* this method, and get the shortest angle back between the two of them.
*
* The angle returned will be in the same range. If the returned angle is
* greater than 0 then it's a counter-clockwise rotation, if < 0 then it's
* a clockwise rotation.
* 
* @method Phaser.Math#getShortestAngle
* @param {number} angle1 - The first angle. In the range -180 to 180.
* @param {number} angle2 - The second angle. In the range -180 to 180.
* @return {number} The shortest angle, in degrees. If greater than zero it's a counter-clockwise rotation.
*/
var ShortestBetween = function (angle1, angle2)
{
    var difference = angle2 - angle1;

    if (difference === 0)
    {
        return 0;
    }

    var times = Math.floor((difference - (-180)) / 360);

    return difference - (times * 360);

};

module.exports = ShortestBetween;


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

var Wrap = __webpack_require__(11);

var WrapDegrees = function (angle)
{
    return Wrap(angle, -180, 180);
};

module.exports = WrapDegrees;


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Between: __webpack_require__(255),
    BetweenY: __webpack_require__(258),
    BetweenPoints: __webpack_require__(256),
    BetweenPointsY: __webpack_require__(257),
    Reverse: __webpack_require__(259),
    RotateTo: __webpack_require__(260),
    ShortestBetween: __webpack_require__(261),
    Normalize: __webpack_require__(64),
    Wrap: __webpack_require__(12),
    WrapDegrees: __webpack_require__(262)

};


/***/ },
/* 264 */
/***/ function(module, exports) {

var DistancePower = function (x1, y1, x2, y2, pow)
{
    if (pow === undefined) { pow = 2; }

    return Math.sqrt(Math.pow(x2 - x1, pow) + Math.pow(y2 - y1, pow));
};

module.exports = DistancePower;


/***/ },
/* 265 */
/***/ function(module, exports) {

var DistanceSquared = function (x1, y1, x2, y2)
{
    var dx = x1 - x2;
    var dy = y1 - y2;

    return dx * dx + dy * dy;
};

module.exports = DistanceSquared;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Between: __webpack_require__(65),
    Power: __webpack_require__(264),
    Squared: __webpack_require__(265)

};


/***/ },
/* 267 */
/***/ function(module, exports) {

function In (v, overshoot)
{
    if (overshoot === undefined) { overshoot = 1.70158; }

    return v * v * ((overshoot + 1) * v - overshoot);
}

function Out (v, overshoot)
{
    if (overshoot === undefined) { overshoot = 1.70158; }

    return --v * v * ((overshoot + 1) * v + overshoot) + 1;
}

function InOut (v, overshoot)
{
    if (overshoot === undefined) { overshoot = 1.70158; }

    var s = overshoot * 1.525;

    if ((v *= 2) < 1)
    {
        return 0.5 * (v * v * ((s + 1) * v - s));
    }
    else
    {
        return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2);
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 268 */
/***/ function(module, exports) {

function In (v)
{
    v = 1 - v;

    if (v < 1 / 2.75)
    {
        return 1 - (7.5625 * v * v);
    }
    else if (v < 2 / 2.75)
    {
        return 1 - (7.5625 * (v -= 1.5 / 2.75) * v + 0.75);
    }
    else if (v < 2.5 / 2.75)
    {
        return 1 - (7.5625 * (v -= 2.25 / 2.75) * v + 0.9375);
    }
    else
    {
        return 1 - (7.5625 * (v -= 2.625 / 2.75) * v + 0.984375);
    }
}

function Out (v)
{
    if (v < 1 / 2.75)
    {
        return 7.5625 * v * v;
    }
    else if (v < 2 / 2.75)
    {
        return 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
    }
    else if (v < 2.5 / 2.75)
    {
        return 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
    }
    else
    {
        return 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
    }
}

function InOut (v)
{
    var reverse = false;

    if (v < 0.5)
    {
        v = 1 - (v * 2);
        reverse = true;
    }
    else
    {
        v = (v * 2) - 1;
    }

    if (v < 1 / 2.75)
    {
        v = 7.5625 * v * v;
    }
    else if (v < 2 / 2.75)
    {
        v = 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
    }
    else if (v < 2.5 / 2.75)
    {
        v = 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
    }
    else
    {
        v = 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
    }

    if (reverse)
    {
        return (1 - v) * 0.5;
    }
    else
    {
        return v * 0.5 + 0.5;
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 269 */
/***/ function(module, exports) {

function In (v)
{
    return 1 - Math.sqrt(1 - v * v);
}

function Out (v)
{
    return Math.sqrt(1 - (--v * v));
}

function InOut (v)
{
    if ((v *= 2) < 1)
    {
        return -0.5 * (Math.sqrt(1 - v * v) - 1);
    }
    else
    {
        return 0.5 * (Math.sqrt(1 - (v -= 2) * v) + 1);
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 270 */
/***/ function(module, exports) {

function In (v)
{
    return v * v * v;
}

function Out (v)
{
    return --v * v * v + 1;
}

function InOut (v)
{
    if ((v *= 2) < 1)
    {
        return 0.5 * v * v * v;
    }
    else
    {
        return 0.5 * ((v -= 2) * v * v + 2);
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 271 */
/***/ function(module, exports) {

function In (v, amplitude, period)
{
    if (amplitude === undefined) { amplitude = 0.1; }
    if (period === undefined) { period = 0.1; }

    if (v === 0)
    {
        return 0;
    }
    else if (v === 1)
    {
        return 1;
    }
    else
    {
        var s = period / 4;

        if (amplitude < 1)
        {
            amplitude = 1;
        }
        else
        {
            s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
        }

        return -(amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
    }
}

function Out (v, amplitude, period)
{
    if (amplitude === undefined) { amplitude = 0.1; }
    if (period === undefined) { period = 0.1; }

    if (v === 0)
    {
        return 0;
    }
    else if (v === 1)
    {
        return 1;
    }
    else
    {
        var s = period / 4;

        if (amplitude < 1)
        {
            amplitude = 1;
        }
        else
        {
            s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
        }

        return (amplitude * Math.pow(2, -10 * v) * Math.sin((v - s) * (2 * Math.PI) / period) + 1);
    }
}

function InOut (v, amplitude, period)
{
    if (amplitude === undefined) { amplitude = 0.1; }
    if (period === undefined) { period = 0.1; }

    if (v === 0)
    {
        return 0;
    }
    else if (v === 1)
    {
        return 1;
    }
    else
    {
        var s = period / 4;

        if (amplitude < 1)
        {
            amplitude = 1;
        }
        else
        {
            s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
        }

        if ((v *= 2) < 1)
        {
            return -0.5 * (amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
        }
        else
        {
            return amplitude * Math.pow(2, -10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period) * 0.5 + 1;
        }
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 272 */
/***/ function(module, exports) {

function In (v)
{
    return Math.pow(2, 10 * (v - 1)) - 0.001;
}

function Out (v)
{
    return 1 - Math.pow(2, -10 * v);
}

function InOut (v)
{
    if ((v *= 2) < 1)
    {
        return 0.5 * Math.pow(2, 10 * (v - 1));
    }
    else
    {
        return 0.5 * (2 - Math.pow(2, -10 * (v - 1)));
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 273 */
/***/ function(module, exports) {

/**
* Linear Easing (no variation).
*
* @method Lazer.Easing.Linear#None
* @param {number} v - The value to be tweened.
* @returns {number} v.
*/
var Linear = function (v)
{
    return v;
};

module.exports = Linear;


/***/ },
/* 274 */
/***/ function(module, exports) {

function In (v)
{
    return v * v;
}

function Out (v)
{
    return v * (2 - v);
}

function InOut (v)
{
    if ((v *= 2) < 1)
    {
        return 0.5 * v * v;
    }
    else
    {
        return -0.5 * (--v * (v - 2) - 1);
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 275 */
/***/ function(module, exports) {

function In (v)
{
    return v * v * v * v;
}

function Out (v)
{
    return 1 - (--v * v * v * v);
}

function InOut (v)
{
    if ((v *= 2) < 1)
    {
        return 0.5 * v * v * v * v;
    }
    else
    {
        return -0.5 * ((v -= 2) * v * v * v - 2);
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 276 */
/***/ function(module, exports) {

function In (v)
{
    return v * v * v * v * v;
}

function Out (v)
{
    return --v * v * v * v * v + 1;
}

function InOut (v)
{
    if ((v *= 2) < 1)
    {
        return 0.5 * v * v * v * v * v;
    }
    else
    {
        return 0.5 * ((v -= 2) * v * v * v * v + 2);
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 277 */
/***/ function(module, exports) {

function In (v)
{
    if (v === 0)
    {
        return 0;
    }
    else if (v === 1)
    {
        return 1;
    }
    else
    {
        return 1 - Math.cos(v * Math.PI / 2);
    }
}

function Out (v)
{
    if (v === 0)
    {
        return 0;
    }
    else if (v === 1)
    {
        return 1;
    }
    else
    {
        return Math.sin(v * Math.PI / 2);
    }
}

function InOut (v)
{
    if (v === 0)
    {
        return 0;
    }
    else if (v === 1)
    {
        return 1;
    }
    else
    {
        return 0.5 * (1 - Math.cos(Math.PI * v));
    }
}

module.exports = {

    In: In,
    Out: Out,
    InOut: InOut

};


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Back: __webpack_require__(267),
    Bounce: __webpack_require__(268),
    Circular: __webpack_require__(269),
    Cubic: __webpack_require__(270),
    Elastic: __webpack_require__(271),
    Expo: __webpack_require__(272),
    Linear: __webpack_require__(273),
    Quadratic: __webpack_require__(274),
    Quartic: __webpack_require__(275),
    Quintic: __webpack_require__(276),
    Sine: __webpack_require__(277)

};


/***/ },
/* 279 */
/***/ function(module, exports) {

var Ceil = function (value, epsilon)
{
    if (epsilon === undefined) { epsilon = 0.0001; }

    return Math.ceil(value - epsilon);
};

module.exports = Ceil;


/***/ },
/* 280 */
/***/ function(module, exports) {

var Equal = function (a, b, epsilon)
{
    if (epsilon === undefined) { epsilon = 0.0001; }

    return Math.abs(a - b) < epsilon;
};

module.exports = Equal;


/***/ },
/* 281 */
/***/ function(module, exports) {

var Floor = function (a, b, epsilon)
{
    if (epsilon === undefined) { epsilon = 0.0001; }

    return Math.floor(value + epsilon);
};

module.exports = Floor;


/***/ },
/* 282 */
/***/ function(module, exports) {

var GreaterThan = function (a, b, epsilon)
{
    if (epsilon === undefined) { epsilon = 0.0001; }

    return a > b - epsilon;
};

module.exports = GreaterThan;


/***/ },
/* 283 */
/***/ function(module, exports) {

var LessThan = function (a, b, epsilon)
{
    if (epsilon === undefined) { epsilon = 0.0001; }

    return a < b + epsilon;
};

module.exports = LessThan;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Ceil: __webpack_require__(279),
    Equal: __webpack_require__(280),
    Floor: __webpack_require__(281),
    GreaterThan: __webpack_require__(282),
    LessThan: __webpack_require__(283)

};


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

var Bernstein = __webpack_require__(58);

var BezierInterpolation = function (v, k)
{
    var b = 0;
    var n = v.length - 1;

    for (var i = 0; i <= n; i++)
    {
        b += Math.pow(1 - k, n - i) * Math.pow(k, i) * v[i] * Bernstein(n, i);
    }

    return b;
};

module.exports = BezierInterpolation;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

var CatmullRom = __webpack_require__(60);

var CatmullRomInterpolation = function (v, k)
{
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);

    if (v[0] === v[m])
    {
        if (k < 0)
        {
            i = Math.floor(f = m * (1 + k));
        }

        return CatmullRom(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    }
    else
    {
        if (k < 0)
        {
            return v[0] - (CatmullRom(v[0], v[0], v[1], v[1], -f) - v[0]);
        }

        if (k > 1)
        {
            return v[m] - (CatmullRom(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
        }

        return CatmullRom(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
};

module.exports = CatmullRomInterpolation;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

var Linear = __webpack_require__(62);

var LinearInterpolation = function (v, k)
{
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);

    if (k < 0)
    {
        return Linear(v[0], v[1], f);
    }

    if (k > 1)
    {
        return Linear(v[m], v[m - 1], m - f);
    }

    return Linear(v[i], v[(i + 1 > m) ? m : i + 1], f - i);
};

module.exports = LinearInterpolation;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Bezier: __webpack_require__(285),
    CatmullRom: __webpack_require__(286),
    Linear: __webpack_require__(287)

};


/***/ },
/* 289 */
/***/ function(module, exports) {

//  Takes value and returns the nearest power of 2

var GetPowerOfTwo = function (value)
{
    //  Math.log(2)
    var index = Math.log(value) / 0.6931471805599453;

    return (1 << Math.ceil(index));
};

module.exports = GetPowerOfTwo;


/***/ },
/* 290 */
/***/ function(module, exports) {

//  Is value a power of 2?

var IsValuePowerOfTwo = function (value)
{
    return (value > 0 && (value & (value - 1)) === 0);
};

module.exports = IsValuePowerOfTwo;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {module.export = {

    GetNext: __webpack_require__(289),
    IsSize: __webpack_require__(66),
    IsValue: __webpack_require__(290)

};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(86)(module)))

/***/ },
/* 292 */
/***/ function(module, exports) {

/**
* @property {number} c - Internal var.
* @private
*/
var c = 1;

/**
* @property {number} s0 - Internal var.
* @private
*/
var s0 = 0;

/**
* @property {number} s1 - Internal var.
* @private
*/
var s1 = 0;

/**
* @property {number} s2 - Internal var.
* @private
*/
var s2 = 0;

/**
* @property {Array} sign - Internal var.
* @private
*/
var sign = [ -1, 1 ];

/**
* Private random helper.
*
* @method Phaser.RandomDataGenerator#rnd
* @private
* @return {number}
*/
var rnd = function ()
{
    var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32

    c = t | 0;
    s0 = s1;
    s1 = s2;
    s2 = t - c;

    return s2;
};

/**
* Internal method that creates a seed hash.
*
* @method Phaser.RandomDataGenerator#hash
* @private
* @param {any} data
* @return {number} hashed value.
*/
var hash = function (data)
{
    var h, i, n;
    n = 0xefc8249d;
    data = data.toString();

    for (i = 0; i < data.length; i++)
    {
        n += data.charCodeAt(i);
        h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000;// 2^32
    }

    return (n >>> 0) * 2.3283064365386963e-10;// 2^-32
};


var RandomDataGenerator = function (seeds)
{
    if (typeof seeds === 'string')
    {
        this.state(seeds);
    }
    else
    {
        this.sow(seeds);
    }
};

RandomDataGenerator.prototype.constructor = RandomDataGenerator;

RandomDataGenerator.prototype = {

    /**
    * Reset the seed of the random data generator.
    *
    * _Note_: the seed array is only processed up to the first `undefined` (or `null`) value, should such be present.
    *
    * @method Phaser.RandomDataGenerator#sow
    * @param {any[]} seeds - The array of seeds: the `toString()` of each value is used.
    */
    sow: function (seeds)
    {
        // Always reset to default seed
        s0 = hash(' ');
        s1 = hash(s0);
        s2 = hash(s1);
        c = 1;

        if (!seeds)
        {
            return;
        }

        // Apply any seeds
        for (var i = 0; i < seeds.length && (seeds[i] != null); i++)
        {
            var seed = seeds[i];

            s0 -= hash(seed);
            s0 += ~~(s0 < 0);
            s1 -= hash(seed);
            s1 += ~~(s1 < 0);
            s2 -= hash(seed);
            s2 += ~~(s2 < 0);
        }

    },

    /**
    * Returns a random integer between 0 and 2^32.
    *
    * @method Phaser.RandomDataGenerator#integer
    * @return {number} A random integer between 0 and 2^32.
    */
    integer: function ()
    {
        // 2^32
        return rnd() * 0x100000000;
    },

    /**
    * Returns a random real number between 0 and 1.
    *
    * @method Phaser.RandomDataGenerator#frac
    * @return {number} A random real number between 0 and 1.
    */
    frac: function ()
    {
        // 2^-53
        return rnd() + (rnd() * 0x200000 | 0) * 1.1102230246251565e-16;
    },

    /**
    * Returns a random real number between 0 and 2^32.
    *
    * @method Phaser.RandomDataGenerator#real
    * @return {number} A random real number between 0 and 2^32.
    */
    real: function ()
    {
        return this.integer() + this.frac();
    },

    /**
    * Returns a random integer between and including min and max.
    *
    * @method Phaser.RandomDataGenerator#integerInRange
    * @param {number} min - The minimum value in the range.
    * @param {number} max - The maximum value in the range.
    * @return {number} A random number between min and max.
    */
    integerInRange: function (min, max)
    {
        return Math.floor(this.realInRange(0, max - min + 1) + min);
    },

    /**
    * Returns a random integer between and including min and max.
    * This method is an alias for RandomDataGenerator.integerInRange.
    *
    * @method Phaser.RandomDataGenerator#between
    * @param {number} min - The minimum value in the range.
    * @param {number} max - The maximum value in the range.
    * @return {number} A random number between min and max.
    */
    between: function (min, max)
    {
        return this.integerInRange(min, max);
    },

    /**
    * Returns a random real number between min and max.
    *
    * @method Phaser.RandomDataGenerator#realInRange
    * @param {number} min - The minimum value in the range.
    * @param {number} max - The maximum value in the range.
    * @return {number} A random number between min and max.
    */
    realInRange: function (min, max)
    {
        return this.frac() * (max - min) + min;
    },

    /**
    * Returns a random real number between -1 and 1.
    *
    * @method Phaser.RandomDataGenerator#normal
    * @return {number} A random real number between -1 and 1.
    */
    normal: function ()
    {
        return 1 - (2 * this.frac());
    },

    /**
    * Returns a valid RFC4122 version4 ID hex string from https://gist.github.com/1308368
    *
    * @method Phaser.RandomDataGenerator#uuid
    * @return {string} A valid RFC4122 version4 ID hex string
    */
    uuid: function ()
    {
        var a = '';
        var b = '';

        for (b = a = ''; a++ < 36; b +=~a % 5 | a * 3&4 ? (a^15 ? 8^this.frac() * (a^20 ? 16 : 4) : 4).toString(16) : '-')
        {
        }

        return b;
    },

    /**
    * Returns a random member of `array`.
    *
    * @method Phaser.RandomDataGenerator#pick
    * @param {Array} array - An Array to pick a random member of.
    * @return {any} A random member of the array.
    */
    pick: function (array)
    {
        return array[this.integerInRange(0, array.length - 1)];
    },

    /**
    * Returns a sign to be used with multiplication operator.
    *
    * @method Phaser.RandomDataGenerator#sign
    * @return {number} -1 or +1.
    */
    sign: function ()
    {
        return this.pick(sign);
    },

    /**
    * Returns a random member of `array`, favoring the earlier entries.
    *
    * @method Phaser.RandomDataGenerator#weightedPick
    * @param {Array} array - An Array to pick a random member of.
    * @return {any} A random member of the array.
    */
    weightedPick: function (array)
    {
        return array[~~(Math.pow(this.frac(), 2) * (array.length - 1) + 0.5)];
    },

    /**
    * Returns a random timestamp between min and max, or between the beginning of 2000 and the end of 2020 if min and max aren't specified.
    *
    * @method Phaser.RandomDataGenerator#timestamp
    * @param {number} min - The minimum value in the range.
    * @param {number} max - The maximum value in the range.
    * @return {number} A random timestamp between min and max.
    */
    timestamp: function (min, max)
    {
        return this.realInRange(min || 946684800000, max || 1577862000000);
    },

    /**
    * Returns a random angle between -180 and 180.
    *
    * @method Phaser.RandomDataGenerator#angle
    * @return {number} A random number between -180 and 180.
    */
    angle: function ()
    {
        return this.integerInRange(-180, 180);
    },

    /**
    * Returns a random rotation in radians, between -3.141 and 3.141
    *
    * @method Phaser.RandomDataGenerator#rotation
    * @return {number} A random number between -3.141 and 3.141
    */
    rotation: function ()
    {
        return this.realInRange(-3.141592653589793, 3.141592653589793);
    },

    /**
    * Gets or Sets the state of the generator. This allows you to retain the values
    * that the generator is using between games, i.e. in a game save file.
    *
    * To seed this generator with a previously saved state you can pass it as the
    * `seed` value in your game config, or call this method directly after Phaser has booted.
    *
    * Call this method with no parameters to return the current state.
    *
    * If providing a state it should match the same format that this method
    * returns, which is a string with a header `!rnd` followed by the `c`,
    * `s0`, `s1` and `s2` values respectively, each comma-delimited.
    *
    * @method Phaser.RandomDataGenerator#state
    * @param {string} [state] - Generator state to be set.
    * @return {string} The current state of the generator.
    */
    state: function (state)
    {
        if (typeof state === 'string' && state.match(/^!rnd/))
        {
            state = state.split(',');

            c = parseFloat(state[1]);
            s0 = parseFloat(state[2]);
            s1 = parseFloat(state[3]);
            s2 = parseFloat(state[4]);
        }

        return [ '!rnd', c, s0, s1, s2 ].join(',');
    }

};

module.exports = RandomDataGenerator;


/***/ },
/* 293 */
/***/ function(module, exports) {

var SnapCeil = function (value, gap, start)
{
    if (start === undefined) { start = 0; }

    if (gap === 0)
    {
        return value;
    }

    value -= start;
    value = gap * Math.ceil(value / gap);

    return start + value;
};

module.exports = SnapCeil;


/***/ },
/* 294 */
/***/ function(module, exports) {

var SnapFloor = function (value, gap, start)
{
    if (start === undefined) { start = 0; }

    if (gap === 0)
    {
        return value;
    }

    value -= start;
    value = gap * Math.floor(value / gap);

    return start + value;
};

module.exports = SnapFloor;


/***/ },
/* 295 */
/***/ function(module, exports) {

var SnapTo = function (value, gap, start)
{
    if (start === undefined) { start = 0; }

    if (gap === 0)
    {
        return value;
    }

    value -= start;
    value = gap * Math.round(value / gap);

    return start + value;
};

module.exports = SnapTo;


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {

    Ceil: __webpack_require__(293),
    Floor: __webpack_require__(294),
    To: __webpack_require__(295)

};


/***/ },
/* 297 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* A polyfill for Array.forEach
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
if (!Array.prototype.forEach)
{
    Array.prototype.forEach = function (fun /*, thisArg */)
    {
        'use strict';

        if (this === void 0 || this === null)
        {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        if (typeof fun !== 'function')
        {
            throw new TypeError();
        }

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;

        for (var i = 0; i < len; i++)
        {
            if (i in t)
            {
                fun.call(thisArg, t[i], i, t);
            }
        }
    };
}


/***/ },
/* 298 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* A polyfill for Array.isArray
*/
if (!Array.isArray)
{
    Array.isArray = function (arg)
    {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}


/***/ },
/* 299 */
/***/ function(module, exports) {

/* Copyright 2013 Chris Wilson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*

This monkeypatch library is intended to be included in projects that are
written to the proper AudioContext spec (instead of webkitAudioContext),
and that use the new naming and proper bits of the Web Audio API (e.g.
using BufferSourceNode.start() instead of BufferSourceNode.noteOn()), but may
have to run on systems that only support the deprecated bits.

This library should be harmless to include if the browser supports
unprefixed "AudioContext", and/or if it supports the new names.

The patches this library handles:
if window.AudioContext is unsupported, it will be aliased to webkitAudioContext().
if AudioBufferSourceNode.start() is unimplemented, it will be routed to noteOn() or
noteGrainOn(), depending on parameters.

The following aliases only take effect if the new names are not already in place:

AudioBufferSourceNode.stop() is aliased to noteOff()
AudioContext.createGain() is aliased to createGainNode()
AudioContext.createDelay() is aliased to createDelayNode()
AudioContext.createScriptProcessor() is aliased to createJavaScriptNode()
AudioContext.createPeriodicWave() is aliased to createWaveTable()
OscillatorNode.start() is aliased to noteOn()
OscillatorNode.stop() is aliased to noteOff()
OscillatorNode.setPeriodicWave() is aliased to setWaveTable()
AudioParam.setTargetAtTime() is aliased to setTargetValueAtTime()

This library does NOT patch the enumerated type changes, as it is
recommended in the specification that implementations support both integer
and string types for AudioPannerNode.panningModel, AudioPannerNode.distanceModel
BiquadFilterNode.type and OscillatorNode.type.

*/
(function (global, exports, perf) {
  'use strict';

  function fixSetTarget(param) {
    if (!param)	// if NYI, just return
      return;
    if (!param.setTargetAtTime)
      param.setTargetAtTime = param.setTargetValueAtTime;
  }

  if (window.hasOwnProperty('webkitAudioContext') &&
      !window.hasOwnProperty('AudioContext')) {
    window.AudioContext = webkitAudioContext;

    if (!AudioContext.prototype.hasOwnProperty('createGain'))
      AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
    if (!AudioContext.prototype.hasOwnProperty('createDelay'))
      AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
    if (!AudioContext.prototype.hasOwnProperty('createScriptProcessor'))
      AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
    if (!AudioContext.prototype.hasOwnProperty('createPeriodicWave'))
      AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;


    AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
    AudioContext.prototype.createGain = function() {
      var node = this.internal_createGain();
      fixSetTarget(node.gain);
      return node;
    };

    AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
    AudioContext.prototype.createDelay = function(maxDelayTime) {
      var node = maxDelayTime ? this.internal_createDelay(maxDelayTime) : this.internal_createDelay();
      fixSetTarget(node.delayTime);
      return node;
    };

    AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
    AudioContext.prototype.createBufferSource = function() {
      var node = this.internal_createBufferSource();
      if (!node.start) {
        node.start = function ( when, offset, duration ) {
          if ( offset || duration )
            this.noteGrainOn( when || 0, offset, duration );
          else
            this.noteOn( when || 0 );
        };
      } else {
        node.internal_start = node.start;
        node.start = function( when, offset, duration ) {
          if( typeof duration !== 'undefined' )
            node.internal_start( when || 0, offset, duration );
          else
            node.internal_start( when || 0, offset || 0 );
        };
      }
      if (!node.stop) {
        node.stop = function ( when ) {
          this.noteOff( when || 0 );
        };
      } else {
        node.internal_stop = node.stop;
        node.stop = function( when ) {
          node.internal_stop( when || 0 );
        };
      }
      fixSetTarget(node.playbackRate);
      return node;
    };

    AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
    AudioContext.prototype.createDynamicsCompressor = function() {
      var node = this.internal_createDynamicsCompressor();
      fixSetTarget(node.threshold);
      fixSetTarget(node.knee);
      fixSetTarget(node.ratio);
      fixSetTarget(node.reduction);
      fixSetTarget(node.attack);
      fixSetTarget(node.release);
      return node;
    };

    AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
    AudioContext.prototype.createBiquadFilter = function() {
      var node = this.internal_createBiquadFilter();
      fixSetTarget(node.frequency);
      fixSetTarget(node.detune);
      fixSetTarget(node.Q);
      fixSetTarget(node.gain);
      return node;
    };

    if (AudioContext.prototype.hasOwnProperty( 'createOscillator' )) {
      AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
      AudioContext.prototype.createOscillator = function() {
        var node = this.internal_createOscillator();
        if (!node.start) {
          node.start = function ( when ) {
            this.noteOn( when || 0 );
          };
        } else {
          node.internal_start = node.start;
          node.start = function ( when ) {
            node.internal_start( when || 0);
          };
        }
        if (!node.stop) {
          node.stop = function ( when ) {
            this.noteOff( when || 0 );
          };
        } else {
          node.internal_stop = node.stop;
          node.stop = function( when ) {
            node.internal_stop( when || 0 );
          };
        }
        if (!node.setPeriodicWave)
          node.setPeriodicWave = node.setWaveTable;
        fixSetTarget(node.frequency);
        fixSetTarget(node.detune);
        return node;
      };
    }
  }

  if (window.hasOwnProperty('webkitOfflineAudioContext') &&
      !window.hasOwnProperty('OfflineAudioContext')) {
    window.OfflineAudioContext = webkitOfflineAudioContext;
  }

}(window));



/***/ },
/* 300 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

// ES6 Math.trunc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
if (!Math.trunc) {
    Math.trunc = function trunc(x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    };
}

/**
* A polyfill for Function.prototype.bind
*/
if (!Function.prototype.bind) {

    /* jshint freeze: false */
    Function.prototype.bind = (function () {

        var slice = Array.prototype.slice;

        return function (thisArg) {

            var target = this, boundArgs = slice.call(arguments, 1);

            if (typeof target !== 'function')
            {
                throw new TypeError();
            }

            function bound() {
                var args = boundArgs.concat(slice.call(arguments));
                target.apply(this instanceof bound ? this : thisArg, args);
            }

            bound.prototype = (function F(proto) {
                if (proto)
                {
                    F.prototype = proto;
                }

                if (!(this instanceof F))
                {
                    /* jshint supernew: true */
                    return new F;
                }
            })(target.prototype);

            return bound;
        };
    })();
}

/**
* A polyfill for Array.isArray
*/
if (!Array.isArray)
{
    Array.isArray = function (arg)
    {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

/**
* A polyfill for Array.forEach
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
if (!Array.prototype.forEach)
{
    Array.prototype.forEach = function(fun /*, thisArg */)
    {
        "use strict";

        if (this === void 0 || this === null)
        {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        if (typeof fun !== "function")
        {
            throw new TypeError();
        }

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;

        for (var i = 0; i < len; i++)
        {
            if (i in t)
            {
                fun.call(thisArg, t[i], i, t);
            }
        }
    };
}

/**
* Low-budget Float32Array knock-off, suitable for use with P2.js in IE9
* Source: http://www.html5gamedevs.com/topic/5988-phaser-12-ie9/
* Cameron Foale (http://www.kibibu.com)
*/
if (typeof window.Uint32Array !== "function" && typeof window.Uint32Array !== "object")
{
    var CheapArray = function(type)
    {
        var proto = new Array(); // jshint ignore:line

        window[type] = function(arg) {

            if (typeof(arg) === "number")
            {
                Array.call(this, arg);
                this.length = arg;

                for (var i = 0; i < this.length; i++)
                {
                    this[i] = 0;
                }
            }
            else
            {
                Array.call(this, arg.length);

                this.length = arg.length;

                for (var i = 0; i < this.length; i++)
                {
                    this[i] = arg[i];
                }
            }
        };

        window[type].prototype = proto;
        window[type].constructor = window[type];
    };

    CheapArray('Float32Array'); // jshint ignore:line
    CheapArray('Uint32Array'); // jshint ignore:line
    CheapArray('Uint16Array'); // jshint ignore:line
    CheapArray('Int16Array'); // jshint ignore:line
    CheapArray('ArrayBuffer'); // jshint ignore:line
}

/**
 * Also fix for the absent console in IE9
 */
if (!window.console)
{
    window.console = {};
    window.console.log = window.console.assert = function(){};
    window.console.warn = window.console.assert = function(){};
}

/**
 * performance.now
 */
(function(){

  if ("performance" in window == false) {
      window.performance = {};
  }
  
  Date.now = (Date.now || function () {  // thanks IE8
      return new Date().getTime();
  });

  if ("now" in window.performance == false)
  {
    var nowOffset = Date.now();
    
    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }

    window.performance.now = function now(){
      return Date.now() - nowOffset;
    }
  }

})();


/***/ },
/* 301 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

// ES6 Math.trunc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
if (!Math.trunc) {
    Math.trunc = function trunc(x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    };
}


/***/ },
/* 302 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/


/**
* Low-budget Float32Array knock-off, suitable for use with P2.js in IE9
* Source: http://www.html5gamedevs.com/topic/5988-phaser-12-ie9/
* Cameron Foale (http://www.kibibu.com)
*/
if (typeof window.Uint32Array !== "function" && typeof window.Uint32Array !== "object")
{
    var CheapArray = function(type)
    {
        var proto = new Array(); // jshint ignore:line

        window[type] = function(arg) {

            if (typeof(arg) === "number")
            {
                Array.call(this, arg);
                this.length = arg;

                for (var i = 0; i < this.length; i++)
                {
                    this[i] = 0;
                }
            }
            else
            {
                Array.call(this, arg.length);

                this.length = arg.length;

                for (var i = 0; i < this.length; i++)
                {
                    this[i] = arg[i];
                }
            }
        };

        window[type].prototype = proto;
        window[type].constructor = window[type];
    };

    CheapArray('Float32Array'); // jshint ignore:line
    CheapArray('Uint32Array'); // jshint ignore:line
    CheapArray('Uint16Array'); // jshint ignore:line
    CheapArray('Int16Array'); // jshint ignore:line
    CheapArray('ArrayBuffer'); // jshint ignore:line
}


/***/ },
/* 303 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
 * Also fix for the absent console in IE9
 */
if (!window.console)
{
    window.console = {};
    window.console.log = window.console.assert = function(){};
    window.console.warn = window.console.assert = function(){};
}


/***/ },
/* 304 */
/***/ function(module, exports) {

/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
 * performance.now
 */
(function(){

  if ("performance" in window == false) {
      window.performance = {};
  }
  
  Date.now = (Date.now || function () {  // thanks IE8
      return new Date().getTime();
  });

  if ("now" in window.performance == false)
  {
    var nowOffset = Date.now();
    
    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }

    window.performance.now = function now(){
      return Date.now() - nowOffset;
    }
  }

})();


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// References:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://gist.github.com/1579671
// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
// https://gist.github.com/timhall/4078614
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame

// Expected to be used with Browserfiy
// Browserify automatically detects the use of `global` and passes the
// correct reference of `global`, `self`, and finally `window`

// Date.now
if (!(Date.now && Date.prototype.getTime)) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

// performance.now
if (!(global.performance && global.performance.now)) {
    var startTime = Date.now();
    if (!global.performance) {
        global.performance = {};
    }
    global.performance.now = function () {
        return Date.now() - startTime;
    };
}

// requestAnimationFrame
var lastTime = Date.now();
var vendors = ['ms', 'moz', 'webkit', 'o'];

for(var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
    global.requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame'];
    global.cancelAnimationFrame = global[vendors[x] + 'CancelAnimationFrame'] ||
        global[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!global.requestAnimationFrame) {
    global.requestAnimationFrame = function (callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + 'is not a function');
        }

        var currentTime = Date.now(),
            delay = 16 + lastTime - currentTime;

        if (delay < 0) {
            delay = 0;
        }

        lastTime = currentTime;

        return setTimeout(function () {
            lastTime = Date.now();
            callback(performance.now());
        }, delay);
    };
}

if (!global.cancelAnimationFrame) {
    global.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(1);
var DrawImage = __webpack_require__(307);
var GetBlendModes = __webpack_require__(308);

var CanvasRenderer = function (game)
{
    /**
    * @property {Phaser.Game} game - A reference to the currently running Game.
    */
    //  Needed?
    this.game = game;

    //  Needed?
    this.type = CONST.CANVAS;

    //  Read all the following from game config (or State config?)
    this.clearBeforeRender = true;

    this.transparent = false;

    this.autoResize = false;

    // this.smoothProperty = Phaser.Canvas.getSmoothingPrefix(this.context);

    this.roundPixels = false;

    this.width = game.config.width * game.config.resolution;

    this.height = game.config.height * game.config.resolution;

    this.resolution = game.config.resolution;

    this.view = game.canvas;

    /**
     * The canvas 2d context that everything is drawn with
     * @property context
     * @type CanvasRenderingContext2D
     */
    this.context = this.view.getContext('2d', { alpha: true });

    //  Map to the required function
    this.drawImage = DrawImage;

    this.blendModes = GetBlendModes();

    this.currentAlpha = 1;
    this.currentBlendMode = 0;
    this.currentScaleMode = 0;

    // this.tintMethod = this.tintWithPerPixel;

    this.init();
};

CanvasRenderer.prototype.constructor = CanvasRenderer;

CanvasRenderer.prototype = {

    init: function ()
    {
        this.resize(this.width, this.height);
    },

    resize: function (width, height)
    {
        var res = this.game.config.resolution;

        this.width = width * res;
        this.height = height * res;

        this.view.width = this.width;
        this.view.height = this.height;

        if (this.autoResize)
        {
            this.view.style.width = (this.width / res) + 'px';
            this.view.style.height = (this.height / res) + 'px';
        }

        // if (this.smoothProperty)
        // {
        //     this.context[this.smoothProperty] = (this.scaleMode === ScaleModes.LINEAR);
        // }
    },

    /**
     * Renders the State.
     *
     * @method render
     * @param {Phaser.State} state - The State to be rendered.
     * @param {number} interpolationPercentage - The cumulative amount of time that hasn't been simulated yet, divided
     *   by the amount of time that will be simulated the next time update()
     *   runs. Useful for interpolating frames.
     */
    render: function (state, interpolationPercentage)
    {
        // console.log('%c render start ', 'color: #ffffff; background: #00ff00;');

        var ctx = this.context;

        //  Add Pre-render hook

        //  TODO: A State should have the option of having its own canvas to draw to

        ctx.setTransform(1, 0, 0, 1, 0, 0);

        //  If the alpha or blend mode didn't change since the last render, then don't set them again (saves 2 ops)

        if (this.currentAlpha !== 1)
        {
            ctx.globalAlpha = 1;
            this.currentAlpha = 1;
        }

        if (this.currentBlendMode !== 0)
        {
            ctx.globalCompositeOperation = 'source-over';
            this.currentBlendMode = 0;
        }

        this.currentScaleMode = 0;

        if (this.clearBeforeRender)
        {
            ctx.clearRect(0, 0, this.width, this.height);
        }

        for (var c = 0; c < state.sys.children.list.length; c++)
        {
            var child = state.sys.children.list[c];

            child.renderCanvas(this, child, interpolationPercentage);
        }

        // console.log('%c render end ', 'color: #ffffff; background: #ff0000;');

        //  Add Post-render hook
    },

    /**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     *
     * @method destroy
     * @param [removeView=true] {boolean} Removes the Canvas element from the DOM.
     */
    destroy: function ()
    {
        //  CanvasPool

        this.view = null;
        this.context = null;
    }

};

module.exports = CanvasRenderer;


/***/ },
/* 307 */
/***/ function(module, exports) {


var DrawImage = function (frame, blendMode, transform, alpha, tint, bg)
{
    var ctx = this.context;
    var cd = frame.canvasData;

    //  Blend Mode

    if (this.currentBlendMode !== blendMode)
    {
        this.currentBlendMode = blendMode;
        ctx.globalCompositeOperation = this.blendModes[blendMode];
    }

    //  Alpha

    if (this.currentAlpha !== alpha)
    {
        this.currentAlpha = alpha;
        ctx.globalAlpha = alpha;
    }

    //  Smoothing (should this be a Game Object, or Frame / Texture level property?)

    if (this.currentScaleMode !== frame.source.scaleMode)
    {
        // this.currentScaleMode = source.scaleMode;
        // ctx[this.smoothProperty] = (source.scaleMode === ScaleModes.LINEAR);
    }

    ctx.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
    ctx.drawImage(frame.source.image, cd.sx, cd.sy, cd.sWidth, cd.sHeight, transform.dx, transform.dy, cd.dWidth, cd.dHeight);

};

module.exports = DrawImage;


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

var modes = __webpack_require__(67);
var CanvasFeatures = __webpack_require__(39);

var GetBlendModes = function ()
{
    var output = [];
    var useNew = CanvasFeatures.supportNewBlendModes;

    output[modes.NORMAL] = 'source-over';
    output[modes.ADD] = 'lighter';
    output[modes.MULTIPLY] = (useNew) ? 'multiply' : 'source-over';
    output[modes.SCREEN] = (useNew) ? 'screen' : 'source-over';
    output[modes.OVERLAY] = (useNew) ? 'overlay' : 'source-over';
    output[modes.DARKEN] = (useNew) ? 'darken' : 'source-over';
    output[modes.LIGHTEN] = (useNew) ? 'lighten' : 'source-over';
    output[modes.COLOR_DODGE] = (useNew) ? 'color-dodge' : 'source-over';
    output[modes.COLOR_BURN] = (useNew) ? 'color-burn' : 'source-over';
    output[modes.HARD_LIGHT] = (useNew) ? 'hard-light' : 'source-over';
    output[modes.SOFT_LIGHT] = (useNew) ? 'soft-light' : 'source-over';
    output[modes.DIFFERENCE] = (useNew) ? 'difference' : 'source-over';
    output[modes.EXCLUSION] = (useNew) ? 'exclusion' : 'source-over';
    output[modes.HUE] = (useNew) ? 'hue' : 'source-over';
    output[modes.SATURATION] = (useNew) ? 'saturation' : 'source-over';
    output[modes.COLOR] = (useNew) ? 'color' : 'source-over';
    output[modes.LUMINOSITY] = (useNew) ? 'luminosity' : 'source-over';

    return output;
};

module.exports = GetBlendModes;


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @author       Mat Groves (@Doormat23)
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var CreateEmptyTexture = __webpack_require__(318);
var CreateTexture2DImage = __webpack_require__(69);
var BlitterBatch = __webpack_require__(310);
var SpriteBatch = __webpack_require__(315);
var SpriteBatch32 = __webpack_require__(316);
var BlendModes = __webpack_require__(67);

var WebGLRenderer = function (game)
{
    this.game = game;

    this.type = CONST.WEBGL;

    this.width = game.config.width * game.config.resolution;
    this.height = game.config.height * game.config.resolution;
    this.resolution = game.config.resolution;

    this.view = game.canvas;

    //   All of these settings will be able to be controlled via the Game Config
    this.config = {
        clearBeforeRender: true,
        transparent: false,
        autoResize: false,
        preserveDrawingBuffer: false,

        WebGLContextOptions: {
            alpha: true,
            antialias: true,
            premultipliedAlpha: true,
            stencil: true,
            preserveDrawingBuffer: false
        }
    };

    this.contextLost = false;
    this.maxTextures = 1;
    this.multiTexture = false;
    this.blendModes = [];

    this.gl = null;

    this.init();

    this.extensions = this.gl.getSupportedExtensions();

    this.blitterBatch = new BlitterBatch(game, this.gl, this);
    this.spriteBatch = null;
    if (this.extensions.indexOf('OES_element_index_uint') >= 0)
    {
        this.spriteBatch = new SpriteBatch32(game, this.gl, this);
    }
    else
    {
        this.spriteBatch = new SpriteBatch(game, this.gl, this);
    }

    this.batch = null;
    this.currentTexture2D = null;
};

WebGLRenderer.prototype.constructor = WebGLRenderer;

WebGLRenderer.prototype = {

    init: function ()
    {
        this.gl = this.view.getContext('webgl', this.config.WebGLContextOptions) || this.view.getContext('experimental-webgl', this.config.WebGLContextOptions);

        if (!this.gl)
        {
            this.contextLost = true;
            throw new Error('This browser does not support WebGL. Try using the Canvas renderer.');
        }

        var gl = this.gl;

        /*
        //  Will need supporting

        this.maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);

        if (this.maxTextures === 1)
        {
            this.multiTexture = false;
        }
        else
        {
            this.createMultiEmptyTextures();
        }

        this.emptyTexture = CreateEmptyTexture(this.gl, 1, 1, 0, 0);
        */

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        gl.enable(gl.BLEND);

        gl.clearColor(1, 0, 0, 1);

        this.resize(this.width, this.height);

        /*
        //  Will need supporting

        this.extensions.compression = {};

        var etc1 = gl.getExtension('WEBGL_compressed_texture_etc1') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_etc1');
        var pvrtc = gl.getExtension('WEBGL_compressed_texture_pvrtc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        var s3tc = gl.getExtension('WEBGL_compressed_texture_s3tc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');

        if (etc1)
        {
            this.extensions.compression.ETC1 = etc1;
        }

        if (pvrtc)
        {
            this.extensions.compression.PVRTC = pvrtc;
        }

        if (s3tc)
        {
            this.extensions.compression.S3TC = s3tc;
        }
        */

        //  Map Blend Modes

        var add = [ gl.SRC_ALPHA, gl.DST_ALPHA ];
        var normal = [ gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA ];
        var multiply = [ gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA ];
        var screen = [ gl.SRC_ALPHA, gl.ONE ];

        this.blendModes = [
            normal, add, multiply, screen, normal,
            normal, normal, normal, normal,
            normal, normal, normal, normal,
            normal, normal, normal, normal
        ];

        this.blendMode = -1;
    },

    createTexture2D: function (source)
    {
        var gl = this.gl;

        if (!source.glTexture)
        {
            source.glTexture = CreateTexture2DImage(gl, source.image, gl.NEAREST, 0);
        }

        this.currentTexture2D = source.glTexture;
    },

    setTexture2D: function (texture2D)
    {
        if (this.currentTexture2D !== texture2D)
        {
            if (this.batch)
            {
                this.batch.flush();
            }

            var gl = this.gl;

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture2D);

            this.currentTexture2D = texture2D;
        }
    },

    setBatch: function (batch, texture2D)
    {
        this.setTexture2D(texture2D);

        if (this.batch !== batch)
        {
            if (this.batch)
            {
                this.batch.flush();
            }

            batch.bind();

            this.batch = batch;
        }
    },

    resize: function (width, height)
    {
        var res = this.game.config.resolution;

        this.width = width * res;
        this.height = height * res;

        this.view.width = this.width;
        this.view.height = this.height;

        if (this.autoResize)
        {
            this.view.style.width = (this.width / res) + 'px';
            this.view.style.height = (this.height / res) + 'px';
        }

        this.gl.viewport(0, 0, this.width, this.height);

        //  Needed?
        // this.clipUnitX = 2 / this.width;
        // this.clipUnitY = 2 / this.height;

        //  Needed?
        // this.projection.x = (this.width / 2) / res;
        // this.projection.y = -(this.height / 2) / res;
    },

    /**
     * Renders the State.
     *
     * @method render
     * @param {Phaser.State} state - The State to be rendered.
     * @param {number} interpolationPercentage - The cumulative amount of time that hasn't been simulated yet, divided
     *   by the amount of time that will be simulated the next time update()
     *   runs. Useful for interpolating frames.
     */
    render: function (state, interpolationPercentage)
    {
        // console.log('%c render start ', 'color: #ffffff; background: #00ff00;');

        //  No point rendering if our context has been blown up!
        if (this.contextLost)
        {
            return;
        }

        //  Add Pre-render hook

        var gl = this.gl;

        

        //  This is the old render loop - add what you need here to replace it,
        //  but please allow each State to render to its own Quad FBO

        //var fbo = state.sys.fbo;

        //fbo.activate();

        //  clear is needed for the FBO, otherwise corruption ...
        gl.clear(gl.COLOR_BUFFER_BIT);

        this.setBlendMode(BlendModes.NORMAL);

        //  Could move to the State Systems or MainLoop
        for (var c = 0; c < state.sys.children.list.length; c++)
        {
            var child = state.sys.children.list[c];
            child.renderWebGL(this, child, interpolationPercentage);
            var batch = this.batch;
            if (batch && batch.isFull())
                batch.flush();
        }
        var batch = this.batch;
        if (batch)
            batch.flush();

        //this.batch.stop();

        //  Call state.render here, so we can do some extra shizzle on the top
        //  Maybe pass in the FBO texture too?

        //fbo.render(null);

        //  Unbind the fbo texture and replace it with an empty texture.
        //  If we forget this we corrupt the main context texture!
        //  or get `RENDER WARNING: there is no texture bound to the unit 0` spam in the console
        //gl.bindTexture(gl.TEXTURE_2D, this.emptyTexture);

        

        // console.log('%c render end ', 'color: #ffffff; background: #ff0000;');

        //  Add Post-render hook
    },

    destroy: function ()
    {
        this.gl = null;
    },

    createFBO: function () {},

    setBlendMode: function (newBlendMode)
    {
        var gl = this.gl;
        var batch = this.batch;
        var blend = null;

        if (this.blendMode !== newBlendMode)
        {
            if (batch)
                batch.flush();
            blend = this.blendModes[newBlendMode];
            gl.enable(gl.BLEND);
            if (blend.length > 2)
            {
                gl.blendFuncSeparate(blend[0], blend[1], blend[2], blend[3]);
            }
            else
            {
                gl.blendFunc(blend[0], blend[1]);        
            }
            this.blendMode = newBlendMode;
        }
    }
};

module.exports = WebGLRenderer;


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

//  Could you move these into sub-folders please, i.e. 'vao', 'shader' etc?

var BindVertexArray = __webpack_require__(35);
var CreateProgram = __webpack_require__(33);
var CreateShader = __webpack_require__(34);
var CreateBuffer = __webpack_require__(30);
var CreateAttribDesc = __webpack_require__(36);
var VertexBuffer = __webpack_require__(32);
var IndexBuffer = __webpack_require__(31);
var VertexArray = __webpack_require__(37);

var PHASER_CONST = __webpack_require__(1);
var CONST = __webpack_require__(313);

var BlitterBatch = function (game, gl, manager)
{
    this.game = game;
    this.type = PHASER_CONST.WEBGL;

    this.view = game.canvas;
    this.resolution = game.config.resolution;
    this.width = game.config.width * game.config.resolution;
    this.height = game.config.height * game.config.resolution;

    this.glContext = gl;

    this.maxParticles = null;

    this.vertShader = null;
    this.fragShader = null;

    this.program = null;

    this.vertexArray = null;
    this.indexBufferObject = null;
    this.vertexDataBuffer = null;
    this.indexDataBuffer = null;

    this.elementCount = 0;

    this.currentTexture2D = null;
    this.viewMatrixLocation = null;

    //   All of these settings will be able to be controlled via the Game Config
    this.config = {
        clearBeforeRender: true,
        transparent: false,
        autoResize: false,
        preserveDrawingBuffer: false,

        WebGLContextOptions: {
            alpha: true,
            antialias: true,
            premultipliedAlpha: true,
            stencil: true,
            preserveDrawingBuffer: false
        }
    };

    this.manager = manager;
    this.dirty = false;

    this.init(this.glContext);
};

BlitterBatch.prototype.constructor = BlitterBatch;

BlitterBatch.prototype = {

    init: function (gl)
    {

        var vertexDataBuffer = new VertexBuffer(CONST.VERTEX_SIZE * CONST.PARTICLE_VERTEX_COUNT * CONST.MAX_PARTICLES);

        var indexDataBuffer = new IndexBuffer(CONST.INDEX_SIZE * CONST.PARTICLE_INDEX_COUNT * CONST.MAX_PARTICLES);

        var vertShader = CreateShader(gl, CONST.VERTEX_SHADER_SOURCE, gl.VERTEX_SHADER);
        var fragShader = CreateShader(gl, CONST.FRAGMENT_SHADER_SOURCE, gl.FRAGMENT_SHADER);
        var program = CreateProgram(gl, vertShader, fragShader);

        var indexBufferObject = CreateBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, gl.STATIC_DRAW, null, indexDataBuffer.getByteCapacity());

        var attribArray = [
            CreateAttribDesc(gl, program, 'a_position', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 0),
            CreateAttribDesc(gl, program, 'a_tex_coord', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 8),
            CreateAttribDesc(gl, program, 'a_alpha', 1, gl.FLOAT, false, CONST.VERTEX_SIZE, 16)
        ];

        var vertexArray = new VertexArray(CreateBuffer(gl, gl.ARRAY_BUFFER, gl.STREAM_DRAW, null, vertexDataBuffer.getByteCapacity()), attribArray);

        var viewMatrixLocation = gl.getUniformLocation(program, 'u_view_matrix');

        this.vertexDataBuffer = vertexDataBuffer;
        this.indexDataBuffer = indexDataBuffer;

        this.vertShader = vertShader;
        this.fragShader = fragShader;
        this.program = program;

        this.indexBufferObject = indexBufferObject;
        this.vertexArray = vertexArray;


        this.viewMatrixLocation = viewMatrixLocation;
           
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBufferObject);

        var indexBuffer = indexDataBuffer.wordView;
        var max = CONST.MAX_PARTICLES * CONST.PARTICLE_INDEX_COUNT;

            // Populate the index buffer only once
        for (var indexA = 0, indexB = 0; indexA < max; indexA += CONST.PARTICLE_INDEX_COUNT, indexB += CONST.PARTICLE_VERTEX_COUNT)
        {
            indexBuffer[indexA + 0] = indexB + 0;
            indexBuffer[indexA + 1] = indexB + 1;
            indexBuffer[indexA + 2] = indexB + 2;
            indexBuffer[indexA + 3] = indexB + 0;
            indexBuffer[indexA + 4] = indexB + 2;
            indexBuffer[indexA + 5] = indexB + 3;
        }
        gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, indexDataBuffer.getUsedBufferAsWord());

        this.bind();

        this.resize(this.width, this.height);

        this.unbind();
    },

    isFull: function ()
    {
        return (this.vertexDataBuffer.getByteLength() >= this.vertexDataBuffer.getByteCapacity());
    },

    add: function (x, y, frame, alpha)
    {
        this.manager.setBatch(this, frame.texture.source[0].glTexture);

        // The user must check if the buffers are full before flushing
        // this is to give freedom of when should the renderer flush. var vertexDataBuffer = this.vertexDataBuffer;
        var vertexDataBuffer = this.vertexDataBuffer;
        var vertexBuffer = vertexDataBuffer.floatView;
        var vertexOffset = vertexDataBuffer.allocate(CONST.PARTICLE_VERTEX_COMPONENT_COUNT * CONST.PARTICLE_VERTEX_COUNT);
        var uvs = frame.uvs;
        var width = frame.width;
        var height = frame.height;

        vertexBuffer[vertexOffset++] = x;
        vertexBuffer[vertexOffset++] = y;
        vertexBuffer[vertexOffset++] = uvs.x0;
        vertexBuffer[vertexOffset++] = uvs.y0;
        vertexBuffer[vertexOffset++] = alpha;

        vertexBuffer[vertexOffset++] = x;
        vertexBuffer[vertexOffset++] = y + height;
        vertexBuffer[vertexOffset++] = uvs.x1;
        vertexBuffer[vertexOffset++] = uvs.y1;
        vertexBuffer[vertexOffset++] = alpha;

        vertexBuffer[vertexOffset++] = x + width;
        vertexBuffer[vertexOffset++] = y + height;
        vertexBuffer[vertexOffset++] = uvs.x2;
        vertexBuffer[vertexOffset++] = uvs.y2;
        vertexBuffer[vertexOffset++] = alpha;

        vertexBuffer[vertexOffset++] = x + width;
        vertexBuffer[vertexOffset++] = y;
        vertexBuffer[vertexOffset++] = uvs.x3;
        vertexBuffer[vertexOffset++] = uvs.y3;
        vertexBuffer[vertexOffset++] = alpha;

        this.elementCount += CONST.PARTICLE_INDEX_COUNT;
    },

    bind: function ()
    {
        var gl = this.glContext;

        gl.useProgram(this.program);

        gl.clearColor(0, 0, 0, 1);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBufferObject);

        BindVertexArray(gl, this.vertexArray);
    },

    unbind: function ()
    {
        var gl = this.glContext;

        gl.useProgram(null);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    },

    flush: function ()
    {
        var gl = this.glContext;
        var vertexDataBuffer = this.vertexDataBuffer;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertexDataBuffer.getUsedBufferAsFloat());

        gl.drawElements(gl.TRIANGLES, this.elementCount, gl.UNSIGNED_SHORT, 0);

        vertexDataBuffer.clear();

        this.elementCount = 0;
    },

    resize: function (width, height)
    {
        var gl = this.glContext;
        var res = this.game.config.resolution;
        
        this.width = width * res;
        this.height = height * res;
        
        this.view.width = this.width;
        this.view.height = this.height;
        
        if (this.autoResize)
        {
            this.view.style.width = (this.width / res) + 'px';
            this.view.style.height = (this.height / res) + 'px';
        }

        gl.viewport(0, 0, this.width, this.height);

        gl.uniformMatrix4fv(
            this.viewMatrixLocation,
            false,
            new Float32Array([
                2 / this.view.width, 0, 0, 0,
                0, -2 / this.view.height, 0, 0,
                0, 0, 1, 1,
                -1, 1, 0, 0
            ])
        );
    },

    destroy: function ()
    {
        var gl = this.glContext;

        if (gl)
        {
            gl.deleteShader(this.vertShader);
            gl.deleteShader(this.fragShader);
            gl.deleteProgram(this.program);
            gl.deleteBuffer(this.indexBufferObject);
            gl.deleteBuffer(this.vertexArray.buffer);
        }
    }

};

module.exports = BlitterBatch;


/***/ },
/* 311 */
/***/ function(module, exports) {

module.exports = [
    'precision lowp float;',
    'uniform sampler2D u_sampler2D;',
    'varying vec2 v_tex_coord;',
    'varying float v_alpha;',
    'void main() {',
    '   gl_FragColor = texture2D(u_sampler2D, v_tex_coord) * vec4(1.0, 1.0, 1.0, v_alpha);',
    '}'
].join('\n');


/***/ },
/* 312 */
/***/ function(module, exports) {

module.exports = [
    'uniform mat4 u_view_matrix;',
    'attribute vec2 a_position;',
    'attribute vec2 a_tex_coord;',
    'attribute float a_alpha;',
    'varying vec2 v_tex_coord;',
    'varying float v_alpha;',
    'void main () {',
    '   gl_Position = u_view_matrix * vec4(a_position, 1.0, 1.0);',
    '   v_tex_coord = a_tex_coord;',
    '	v_alpha = a_alpha;',
    '}'
].join('\n');


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

var FragmentShader = __webpack_require__(311);
var VertexShader = __webpack_require__(312);

var CONST = {

    // VERTEX_SIZE = sizeof(vec2) + sizeof(vec2) + sizeof(float)
    VERTEX_SIZE: 20,
    INDEX_SIZE: 2,
    PARTICLE_VERTEX_COUNT: 4,
    PARTICLE_INDEX_COUNT: 6,

    // How many 32-bit components does the vertex have.
    PARTICLE_VERTEX_COMPONENT_COUNT: 5,

    // Can't be bigger since index are 16-bit
    MAX_PARTICLES: 10000,

    VERTEX_SHADER_SOURCE: VertexShader,
    FRAGMENT_SHADER_SOURCE: FragmentShader

};

module.exports = CONST;


/***/ },
/* 314 */
/***/ function(module, exports) {

module.exports = [
    'precision lowp float;',
    'uniform sampler2D u_sampler2D;',
    'varying vec2 v_tex_coord;',
    'varying vec3 v_color;',
    'void main() {',
    '   gl_FragColor = texture2D(u_sampler2D, v_tex_coord) * vec4(v_color, 1.0);',
    '}'
].join('\n');


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

var BindVertexArray = __webpack_require__(35);
var CreateProgram = __webpack_require__(33);
var CreateShader = __webpack_require__(34);
var CreateBuffer = __webpack_require__(30);
var CreateAttribDesc = __webpack_require__(36);
var VertexBuffer = __webpack_require__(32);
var IndexBuffer = __webpack_require__(31);
var VertexArray = __webpack_require__(37);

var PHASER_CONST = __webpack_require__(1);
var CONST = __webpack_require__(68);

var SpriteBatch = function (game, gl, manager)
{
    this.game = game;
    this.type = PHASER_CONST.WEBGL;

    this.view = game.canvas;
    this.resolution = game.config.resolution;
    this.width = game.config.width * game.config.resolution;
    this.height = game.config.height * game.config.resolution;

    this.glContext = gl;

    this.maxSprites = null;

    this.vertShader = null;
    this.fragShader = null;

    this.program = null;

    this.vertexArray = null;
    this.indexBufferObject = null;
    this.vertexDataBuffer = null;
    this.indexDataBuffer = null;

    this.elementCount = 0;

    this.currentTexture2D = null;
    this.viewMatrixLocation = null;

    //   All of these settings will be able to be controlled via the Game Config
    this.config = {
        clearBeforeRender: true,
        transparent: false,
        autoResize: false,
        preserveDrawingBuffer: false,

        WebGLContextOptions: {
            alpha: true,
            antialias: true,
            premultipliedAlpha: true,
            stencil: true,
            preserveDrawingBuffer: false
        }
    };

    this.manager = manager;
    this.dirty = false;

    this.init(this.glContext);
};

SpriteBatch.prototype.constructor = SpriteBatch;

SpriteBatch.prototype = {

    init: function (gl)
    {

        var vertexDataBuffer = new VertexBuffer(CONST.VERTEX_SIZE * CONST.SPRITE_VERTEX_COUNT * CONST.MAX_SPRITES);

        var indexDataBuffer = new IndexBuffer(CONST.INDEX_SIZE * CONST.SPRITE_INDEX_COUNT * CONST.MAX_SPRITES);

        var vertShader = CreateShader(gl, CONST.VERTEX_SHADER_SOURCE, gl.VERTEX_SHADER);
        var fragShader = CreateShader(gl, CONST.FRAGMENT_SHADER_SOURCE, gl.FRAGMENT_SHADER);
        var program = CreateProgram(gl, vertShader, fragShader);

        var indexBufferObject = CreateBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, gl.STATIC_DRAW, null, indexDataBuffer.getByteCapacity());

        var attribArray = [
            CreateAttribDesc(gl, program, 'a_position', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 0),
            CreateAttribDesc(gl, program, 'a_tex_coord', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 8),
            CreateAttribDesc(gl, program, 'a_translate', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 16),
            CreateAttribDesc(gl, program, 'a_scale', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 24),
            CreateAttribDesc(gl, program, 'a_rotation', 1, gl.FLOAT, false, CONST.VERTEX_SIZE, 32),
            CreateAttribDesc(gl, program, 'a_color', 3, 5121, true, CONST.VERTEX_SIZE, 36)
        ];

        var vertexArray = new VertexArray(CreateBuffer(gl, gl.ARRAY_BUFFER, gl.STREAM_DRAW, null, vertexDataBuffer.getByteCapacity()), attribArray);

        var viewMatrixLocation = gl.getUniformLocation(program, 'u_view_matrix');

        this.vertexDataBuffer = vertexDataBuffer;
        this.indexDataBuffer = indexDataBuffer;

        this.vertShader = vertShader;
        this.fragShader = fragShader;
        this.program = program;

        this.indexBufferObject = indexBufferObject;
        this.vertexArray = vertexArray;


        this.viewMatrixLocation = viewMatrixLocation;
           
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBufferObject);

        var indexBuffer = indexDataBuffer.wordView;
        var max = CONST.MAX_SPRITES * CONST.SPRITE_INDEX_COUNT;

            // Populate the index buffer only once
        for (var indexA = 0, indexB = 0; indexA < max; indexA += CONST.SPRITE_INDEX_COUNT, indexB += CONST.SPRITE_VERTEX_COUNT)
        {
            indexBuffer[indexA + 0] = indexB + 0;
            indexBuffer[indexA + 1] = indexB + 1;
            indexBuffer[indexA + 2] = indexB + 2;
            indexBuffer[indexA + 3] = indexB + 0;
            indexBuffer[indexA + 4] = indexB + 2;
            indexBuffer[indexA + 5] = indexB + 3;
        }
        gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, indexBuffer);

        this.bind();

        this.resize(this.width, this.height);

        this.unbind();
    },

    isFull: function ()
    {
        return (this.vertexDataBuffer.getByteLength() >= this.vertexDataBuffer.getByteCapacity());
    },

    add: function (frame, anchorX, anchorY, translateX, translateY, scaleX, scaleY, rotation, vertexColor)
    {
        this.manager.setBatch(this, frame.texture.source[0].glTexture);

        // The user must check if the buffers are full before flushing
        // this is to give freedom of when should the renderer flush. var vertexDataBuffer = this.vertexDataBuffer;
        var vertexDataBuffer = this.vertexDataBuffer;
        var vertexBufferF32 = vertexDataBuffer.floatView;
        var vertexBufferU32 = vertexDataBuffer.uintView;
        var vertexOffset = vertexDataBuffer.allocate(CONST.SPRITE_VERTEX_COMPONENT_COUNT * CONST.SPRITE_VERTEX_COUNT);
        var uvs = frame.uvs;
        var width = frame.width;
        var height = frame.height;
        var x = width * -anchorX;
        var y = height * -anchorY;

        vertexBufferF32[vertexOffset++] = x;
        vertexBufferF32[vertexOffset++] = y;
        vertexBufferF32[vertexOffset++] = uvs.x0;
        vertexBufferF32[vertexOffset++] = uvs.y0;
        vertexBufferF32[vertexOffset++] = translateX;
        vertexBufferF32[vertexOffset++] = translateY;
        vertexBufferF32[vertexOffset++] = scaleX;
        vertexBufferF32[vertexOffset++] = scaleY;
        vertexBufferF32[vertexOffset++] = rotation;
        vertexBufferU32[vertexOffset++] = vertexColor.topLeft;

        vertexBufferF32[vertexOffset++] = x;
        vertexBufferF32[vertexOffset++] = y + height;
        vertexBufferF32[vertexOffset++] = uvs.x1;
        vertexBufferF32[vertexOffset++] = uvs.y1;
        vertexBufferF32[vertexOffset++] = translateX;
        vertexBufferF32[vertexOffset++] = translateY;
        vertexBufferF32[vertexOffset++] = scaleX;
        vertexBufferF32[vertexOffset++] = scaleY;
        vertexBufferF32[vertexOffset++] = rotation;
        vertexBufferU32[vertexOffset++] = vertexColor.bottomLeft;
    
        vertexBufferF32[vertexOffset++] = x + width;
        vertexBufferF32[vertexOffset++] = y + height;
        vertexBufferF32[vertexOffset++] = uvs.x2;
        vertexBufferF32[vertexOffset++] = uvs.y2;
        vertexBufferF32[vertexOffset++] = translateX;
        vertexBufferF32[vertexOffset++] = translateY;
        vertexBufferF32[vertexOffset++] = scaleX;
        vertexBufferF32[vertexOffset++] = scaleY;
        vertexBufferF32[vertexOffset++] = rotation;
        vertexBufferU32[vertexOffset++] = vertexColor.bottomRight;

        vertexBufferF32[vertexOffset++] = x + width;
        vertexBufferF32[vertexOffset++] = y;
        vertexBufferF32[vertexOffset++] = uvs.x3;
        vertexBufferF32[vertexOffset++] = uvs.y3;
        vertexBufferF32[vertexOffset++] = translateX;
        vertexBufferF32[vertexOffset++] = translateY;
        vertexBufferF32[vertexOffset++] = scaleX;
        vertexBufferF32[vertexOffset++] = scaleY;
        vertexBufferF32[vertexOffset++] = rotation;
        vertexBufferU32[vertexOffset++] = vertexColor.topRight;

        this.elementCount += CONST.SPRITE_INDEX_COUNT;
    },

    bind: function ()
    {
        var gl = this.glContext;

        gl.useProgram(this.program);

        gl.clearColor(0, 0, 0, 1);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBufferObject);

        BindVertexArray(gl, this.vertexArray);
    },

    unbind: function ()
    {
        var gl = this.glContext;

        gl.useProgram(null);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    },

    flush: function ()
    {
        var gl = this.glContext;
        var vertexDataBuffer = this.vertexDataBuffer;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertexDataBuffer.getUsedBufferAsFloat());

        gl.drawElements(gl.TRIANGLES, this.elementCount, gl.UNSIGNED_SHORT, 0);

        vertexDataBuffer.clear();

        this.elementCount = 0;
    },

    resize: function (width, height)
    {
        var gl = this.glContext;
        var res = this.game.config.resolution;
        
        this.width = width * res;
        this.height = height * res;
        
        this.view.width = this.width;
        this.view.height = this.height;
        
        if (this.autoResize)
        {
            this.view.style.width = (this.width / res) + 'px';
            this.view.style.height = (this.height / res) + 'px';
        }

        gl.viewport(0, 0, this.width, this.height);

        gl.uniformMatrix4fv(
            this.viewMatrixLocation,
            false,
            new Float32Array([
                2 / this.view.width, 0, 0, 0,
                0, -2 / this.view.height, 0, 0,
                0, 0, 1, 1,
                -1, 1, 0, 0
            ])
        );
    },

    destroy: function ()
    {
        var gl = this.glContext;

        if (gl)
        {
            gl.deleteShader(this.vertShader);
            gl.deleteShader(this.fragShader);
            gl.deleteProgram(this.program);
            gl.deleteBuffer(this.indexBufferObject);
            gl.deleteBuffer(this.vertexArray.buffer);
        }
    }

};

module.exports = SpriteBatch;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

var BindVertexArray = __webpack_require__(35);
var CreateProgram = __webpack_require__(33);
var CreateShader = __webpack_require__(34);
var CreateBuffer = __webpack_require__(30);
var CreateAttribDesc = __webpack_require__(36);
var VertexBuffer = __webpack_require__(32);
var IndexBuffer = __webpack_require__(31);
var VertexArray = __webpack_require__(37);

var PHASER_CONST = __webpack_require__(1);
var CONST = __webpack_require__(68);

var SpriteBatch32 = function (game, gl, manager)
{
    gl.getExtension('OES_element_index_uint');
    CONST.INDEX_SIZE = 4;
    CONST.MAX_SPRITES = 100000;

    this.game = game;
    this.type = PHASER_CONST.WEBGL;

    this.view = game.canvas;
    this.resolution = game.config.resolution;
    this.width = game.config.width * game.config.resolution;
    this.height = game.config.height * game.config.resolution;

    this.glContext = gl;

    this.maxSprites = null;

    this.vertShader = null;
    this.fragShader = null;

    this.program = null;

    this.vertexArray = null;
    this.indexBufferObject = null;
    this.vertexDataBuffer = null;
    this.indexDataBuffer = null;

    this.elementCount = 0;

    this.currentTexture2D = null;
    this.viewMatrixLocation = null;

    //   All of these settings will be able to be controlled via the Game Config
    this.config = {
        clearBeforeRender: true,
        transparent: false,
        autoResize: false,
        preserveDrawingBuffer: false,

        WebGLContextOptions: {
            alpha: true,
            antialias: true,
            premultipliedAlpha: true,
            stencil: true,
            preserveDrawingBuffer: false
        }
    };

    this.manager = manager;
    this.dirty = false;

    this.init(this.glContext);
};

SpriteBatch32.prototype.constructor = SpriteBatch32;

SpriteBatch32.prototype = {

    init: function (gl)
    {

        var vertexDataBuffer = new VertexBuffer(CONST.VERTEX_SIZE * CONST.SPRITE_VERTEX_COUNT * CONST.MAX_SPRITES);

        var indexDataBuffer = new VertexBuffer(CONST.INDEX_SIZE * CONST.SPRITE_INDEX_COUNT * CONST.MAX_SPRITES);

        var vertShader = CreateShader(gl, CONST.VERTEX_SHADER_SOURCE, gl.VERTEX_SHADER);
        var fragShader = CreateShader(gl, CONST.FRAGMENT_SHADER_SOURCE, gl.FRAGMENT_SHADER);
        var program = CreateProgram(gl, vertShader, fragShader);

        var indexBufferObject = CreateBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, gl.STATIC_DRAW, null, indexDataBuffer.getByteCapacity());

        var attribArray = [
            CreateAttribDesc(gl, program, 'a_position', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 0),
            CreateAttribDesc(gl, program, 'a_tex_coord', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 8),
            CreateAttribDesc(gl, program, 'a_translate', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 16),
            CreateAttribDesc(gl, program, 'a_scale', 2, gl.FLOAT, false, CONST.VERTEX_SIZE, 24),
            CreateAttribDesc(gl, program, 'a_rotation', 1, gl.FLOAT, false, CONST.VERTEX_SIZE, 32),
            CreateAttribDesc(gl, program, 'a_color', 3, 5121, true, CONST.VERTEX_SIZE, 36)
        ];

        var vertexArray = new VertexArray(CreateBuffer(gl, gl.ARRAY_BUFFER, gl.STREAM_DRAW, null, vertexDataBuffer.getByteCapacity()), attribArray);

        var viewMatrixLocation = gl.getUniformLocation(program, 'u_view_matrix');

        this.vertexDataBuffer = vertexDataBuffer;
        this.indexDataBuffer = indexDataBuffer;

        this.vertShader = vertShader;
        this.fragShader = fragShader;
        this.program = program;

        this.indexBufferObject = indexBufferObject;
        this.vertexArray = vertexArray;


        this.viewMatrixLocation = viewMatrixLocation;
           
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBufferObject);

        var indexBuffer = indexDataBuffer.uintView;
        var max = CONST.MAX_SPRITES * CONST.SPRITE_INDEX_COUNT;

            // Populate the index buffer only once
        for (var indexA = 0, indexB = 0; indexA < max; indexA += CONST.SPRITE_INDEX_COUNT, indexB += CONST.SPRITE_VERTEX_COUNT)
        {
            indexBuffer[indexA + 0] = indexB + 0;
            indexBuffer[indexA + 1] = indexB + 1;
            indexBuffer[indexA + 2] = indexB + 2;
            indexBuffer[indexA + 3] = indexB + 0;
            indexBuffer[indexA + 4] = indexB + 2;
            indexBuffer[indexA + 5] = indexB + 3;
        }
        gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, indexBuffer);

        this.bind();

        this.resize(this.width, this.height);

        this.unbind();
    },

    isFull: function ()
    {
        return (this.vertexDataBuffer.getByteLength() >= this.vertexDataBuffer.getByteCapacity());
    },

    add: function (frame, anchorX, anchorY, translateX, translateY, scaleX, scaleY, rotation, vertexColor)
    {
        this.manager.setBatch(this, frame.texture.source[0].glTexture);

        // The user must check if the buffers are full before flushing
        // this is to give freedom of when should the renderer flush. var vertexDataBuffer = this.vertexDataBuffer;
        var vertexDataBuffer = this.vertexDataBuffer;
        var vertexBufferF32 = vertexDataBuffer.floatView;
        var vertexBufferU32 = vertexDataBuffer.uintView;
        var vertexOffset = vertexDataBuffer.allocate(CONST.SPRITE_VERTEX_COMPONENT_COUNT * CONST.SPRITE_VERTEX_COUNT);
        var uvs = frame.uvs;
        var width = frame.width;
        var height = frame.height;
        var x = width * -anchorX;
        var y = height * -anchorY;
        
        vertexBufferF32[vertexOffset++] = x;
        vertexBufferF32[vertexOffset++] = y;
        vertexBufferF32[vertexOffset++] = uvs.x0;
        vertexBufferF32[vertexOffset++] = uvs.y0;
        vertexBufferF32[vertexOffset++] = translateX;
        vertexBufferF32[vertexOffset++] = translateY;
        vertexBufferF32[vertexOffset++] = scaleX;
        vertexBufferF32[vertexOffset++] = scaleY;
        vertexBufferF32[vertexOffset++] = rotation;
        vertexBufferU32[vertexOffset++] = vertexColor.topLeft;

        vertexBufferF32[vertexOffset++] = x;
        vertexBufferF32[vertexOffset++] = y + height;
        vertexBufferF32[vertexOffset++] = uvs.x1;
        vertexBufferF32[vertexOffset++] = uvs.y1;
        vertexBufferF32[vertexOffset++] = translateX;
        vertexBufferF32[vertexOffset++] = translateY;
        vertexBufferF32[vertexOffset++] = scaleX;
        vertexBufferF32[vertexOffset++] = scaleY;
        vertexBufferF32[vertexOffset++] = rotation;
        vertexBufferU32[vertexOffset++] = vertexColor.bottomLeft;
    
        vertexBufferF32[vertexOffset++] = x + width;
        vertexBufferF32[vertexOffset++] = y + height;
        vertexBufferF32[vertexOffset++] = uvs.x2;
        vertexBufferF32[vertexOffset++] = uvs.y2;
        vertexBufferF32[vertexOffset++] = translateX;
        vertexBufferF32[vertexOffset++] = translateY;
        vertexBufferF32[vertexOffset++] = scaleX;
        vertexBufferF32[vertexOffset++] = scaleY;
        vertexBufferF32[vertexOffset++] = rotation;
        vertexBufferU32[vertexOffset++] = vertexColor.bottomRight;

        vertexBufferF32[vertexOffset++] = x + width;
        vertexBufferF32[vertexOffset++] = y;
        vertexBufferF32[vertexOffset++] = uvs.x3;
        vertexBufferF32[vertexOffset++] = uvs.y3;
        vertexBufferF32[vertexOffset++] = translateX;
        vertexBufferF32[vertexOffset++] = translateY;
        vertexBufferF32[vertexOffset++] = scaleX;
        vertexBufferF32[vertexOffset++] = scaleY;
        vertexBufferF32[vertexOffset++] = rotation;
        vertexBufferU32[vertexOffset++] = vertexColor.topRight;

        this.elementCount += CONST.SPRITE_INDEX_COUNT;
    },

    bind: function ()
    {
        var gl = this.glContext;

        gl.useProgram(this.program);

        gl.clearColor(0, 0, 0, 1);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBufferObject);

        BindVertexArray(gl, this.vertexArray);
    },

    unbind: function ()
    {
        var gl = this.glContext;

        gl.useProgram(null);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    },

    flush: function ()
    {
        var gl = this.glContext;
        var vertexDataBuffer = this.vertexDataBuffer;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertexDataBuffer.getUsedBufferAsFloat());

        gl.drawElements(gl.TRIANGLES, this.elementCount, gl.UNSIGNED_INT, 0);

        vertexDataBuffer.clear();

        this.elementCount = 0;
    },

    resize: function (width, height)
    {
        var gl = this.glContext;
        var res = this.game.config.resolution;
        
        this.width = width * res;
        this.height = height * res;
        
        this.view.width = this.width;
        this.view.height = this.height;
        
        if (this.autoResize)
        {
            this.view.style.width = (this.width / res) + 'px';
            this.view.style.height = (this.height / res) + 'px';
        }

        gl.viewport(0, 0, this.width, this.height);

        gl.uniformMatrix4fv(
            this.viewMatrixLocation,
            false,
            new Float32Array([
                2 / this.view.width, 0, 0, 0,
                0, -2 / this.view.height, 0, 0,
                0, 0, 1, 1,
                -1, 1, 0, 0
            ])
        );
    },

    destroy: function ()
    {
        var gl = this.glContext;

        if (gl)
        {
            gl.deleteShader(this.vertShader);
            gl.deleteShader(this.fragShader);
            gl.deleteProgram(this.program);
            gl.deleteBuffer(this.indexBufferObject);
            gl.deleteBuffer(this.vertexArray.buffer);
        }
    }

};

module.exports = SpriteBatch32;


/***/ },
/* 317 */
/***/ function(module, exports) {

module.exports = [
    'uniform mat4 u_view_matrix;',
    'attribute vec2 a_position;',
    'attribute vec2 a_tex_coord;',
    'attribute vec2 a_translate;',
    'attribute vec2 a_scale;',
    'attribute vec3 a_color;',
    'attribute float a_rotation;',
    'varying vec2 v_tex_coord;',
    'varying vec3 v_color;',
    'void main () {',
    '   float t_cos = cos(a_rotation);',
    '   float t_sin = sin(a_rotation);',
    '   vec2 t_position = (a_position );',
    '   t_position = vec2(t_position.x * t_cos - t_position.y * t_sin, t_position.x * t_sin + t_position.y * t_cos);',
    '   gl_Position = u_view_matrix * vec4((t_position * a_scale) + a_translate, 1.0, 1.0);',
    '   v_tex_coord = a_tex_coord;',
    '   v_color = a_color;',
    '}'
].join('\n');


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

var ScaleModes = __webpack_require__(10);

var CreateEmptyTexture = function (gl, width, height, scaleMode, textureIndex)
{
    var texture = gl.createTexture();
    var glScaleMode = (scaleMode === ScaleModes.LINEAR) ? gl.LINEAR : gl.NEAREST;

    gl.activeTexture(gl.TEXTURE0 + textureIndex);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    //  We'll read from this texture, but it won't have mipmaps, so turn them off:
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, glScaleMode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, glScaleMode);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    return texture;
};

module.exports = CreateEmptyTexture;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

var ScaleModes = __webpack_require__(10);
var CreateTexture2DImage = __webpack_require__(69);

var CreateTexture2DFromSource = function (gl, source)
{
    var filter;

    if (source.scaleMode === ScaleModes.LINEAR)
    {
        filter = gl.LINEAR;
    }
    else if (source.scaleMode === ScaleModes.NEAREST)
    {
        filter = gl.NEAREST;
    }

    source.glTexture = CreateTexture2DImage(gl, source.image, filter, source.mipmapLevel)
};

module.exports = CreateTexture2DFromSource;


/***/ },
/* 320 */
/***/ function(module, exports) {

var Attribute = function (location, size, type, normalized, stride, offset)
{
    this.location = location;
    this.size = size;
    this.type = type;
    this.normalized = normalized;
    this.stride = stride;
    this.offset = offset;
};

module.exports = Attribute;


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {


var Between = __webpack_require__(59);
var GetObjectValue = __webpack_require__(13);

//  Phaser.Sound.Dynamic.FX

//  Based on Sound.js by KittyKatAttack
//  https://github.com/kittykatattack/sound.js

// frequency,      //The sound's fequency pitch in Hertz
// attack,              //The time, in seconds, to fade the sound in
// decay,               //The time, in seconds, to fade the sound out
// type,                //waveform type: "sine", "triangle", "square", "sawtooth"
// volume,         //The sound's maximum volume
// panValue,            //The speaker pan. left: -1, middle: 0, right: 1
// wait,                //The time, in seconds, to wait before playing the sound
// pitchBend,     //The number of Hz in which to bend the sound's pitch down
// reverse,             //If `reverse` is true the pitch will bend up
// random,         //A range, in Hz, within which to randomize the pitch
// dissonance,          //A value in Hz. It creates 2 dissonant frequencies above and below the target pitch
// echo,                //An array: [delayTimeInSeconds, feedbackTimeInSeconds, filterValueInHz]
// reverb,              //An array: [durationInSeconds, decayRateInSeconds, reverse]
// timeout              //A number, in seconds, which is the maximum duration for sound effects

var FX = function (ctx, config)
{
    this.audioContext = ctx;

    this.frequencyValue = GetObjectValue(config, 'frequency', 200);
    this.attack = GetObjectValue(config, 'attack', 0);
    this.decay = GetObjectValue(config, 'decay', 1);
    this.type = GetObjectValue(config, 'type', 'sine');
    this.volumeValue = GetObjectValue(config, 'volume', 1);
    this.panValue = GetObjectValue(config, 'pan', 0);
    this.wait = GetObjectValue(config, 'wait', 0);
    this.pitchBendAmount = GetObjectValue(config, 'pitchBend', 0);
    this.reverse = GetObjectValue(config, 'reverse', false);
    this.randomValue = GetObjectValue(config, 'random', 0);
    this.dissonance = GetObjectValue(config, 'dissonance', 0);
    this.echo = GetObjectValue(config, 'echo', false);
    this.echoDelay = GetObjectValue(config, 'echo.delay', 0);
    this.echoFeedback = GetObjectValue(config, 'echo.feedback', 0);
    this.echoFilter = GetObjectValue(config, 'echo.filter', 0);
    this.reverb = GetObjectValue(config, 'reverb', false);
    this.reverbDuration = GetObjectValue(config, 'reverb.duration', 0);
    this.reverbDecay = GetObjectValue(config, 'reverb.decay', 0);
    this.reverbReverse = GetObjectValue(config, 'reverb.reverse', false);
    this.timeout = GetObjectValue(config, 'timeout', false);

    this.volume = ctx.createGain();
    this.pan = (!ctx.createStereoPanner) ? ctx.createPanner() : ctx.createStereoPanner();

    this.volume.connect(this.pan);
    this.pan.connect(ctx.destination);

    //  Set the values

    this.volume.gain.value = this.volumeValue;

    if (!ctx.createStereoPanner)
    {
        this.pan.setPosition(this.panValue, 0, 1 - Math.abs(this.panValue));
    }
    else
    {
        this.pan.pan.value = this.panValue;
    }

    //  Create an oscillator, gain and pan nodes, and connect them together to the destination

    var oscillator = ctx.createOscillator();

    oscillator.connect(this.volume);
    oscillator.type = this.type;

    //  Optionally randomize the pitch if `randomValue` > 0.
    //  A random pitch is selected that's within the range specified by `frequencyValue`.
    //  The random pitch will be either above or below the target frequency.

    if (this.randomValue > 0)
    {
        oscillator.frequency.value = Between(
            this.frequencyValue - this.randomValue / 2,
            this.frequencyValue + this.randomValue / 2
        );
    }
    else
    {
        oscillator.frequency.value = this.frequencyValue;
    }

    //  Apply effects

    if (this.attack > 0)
    {
        this.fadeIn(this.volume);
    }

    this.fadeOut(this.volume);

    if (this.pitchBendAmount > 0)
    {
        this.pitchBend(oscillator);
    }

    if (this.echo)
    {
        this.addEcho(this.volume);
    }

    if (this.reverb)
    {
        this.addReverb(this.volume);
    }

    if (this.dissonance > 0)
    {
        this.addDissonance();
    }

    this.play(oscillator);

    var _this = this;

    oscillator.onended = function ()
    {
        console.log('onended');
        _this.pan.disconnect();
        _this.volume.disconnect();
    };
};

FX.prototype.constructor = FX;

FX.prototype = {

    play: function (oscillator)
    {
        oscillator.start(this.audioContext.currentTime + this.wait);

        //Oscillators have to be stopped otherwise they accumulate in 
        //memory and tax the CPU. They'll be stopped after a default
        //timeout of 2 seconds, which should be enough for most sound 
        //effects. Override this in the `soundEffect` parameters if you
        //need a longer sound

        oscillator.stop(this.audioContext.currentTime + this.wait + 2);
    },

    fadeIn: function (volume)
    {
        volume.gain.value = 0;

        volume.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + this.wait);

        volume.gain.linearRampToValueAtTime(this.volumeValue, this.audioContext.currentTime + this.wait + this.attack);
    },

    fadeOut: function (volume)
    {
        volume.gain.linearRampToValueAtTime(this.volumeValue, this.audioContext.currentTime + this.wait + this.attack);

        volume.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + this.wait + this.attack + this.decay);
    },

    addReverb: function (volume)
    {
        var convolver = this.audioContext.createConvolver();

        convolver.buffer = this.impulseResponse(this.reverbDuration, this.reverbDecay, this.reverbReverse, this.audioContext);

        volume.connect(convolver);

        convolver.connect(this.pan);
    },

    addEcho: function (volume)
    {
        var feedback = this.audioContext.createGain();
        var delay = this.audioContext.createDelay();
        var filter = this.audioContext.createBiquadFilter();

        //  Set the node values

        feedback.gain.value = this.echoFeedback;
        delay.delayTime.value = this.echoDelay;

        if (this.echoFilter)
        {
            filter.frequency.value = this.echoFilter;
        }

        //  Create the delay feedback loop (with optional filtering)

        delay.connect(feedback);

        if (this.echoFilter)
        {
            feedback.connect(filter);
            filter.connect(delay);
        }
        else
        {
            feedback.connect(delay);
        }

        //  Connect the delay node to the oscillator volume node

        volume.connect(delay);

        //  Connect the delay node to the main sound chains pan node,
        //  so that the echo effect is directed to the correct speaker

        delay.connect(this.pan);
    },

    pitchBend: function (oscillator)
    {
        var frequency = oscillator.frequency.value;

        if (!this.reverse)
        {
            //  If reverse is false, make the sound drop in pitch
            oscillator.frequency.linearRampToValueAtTime(frequency, this.audioContext.currentTime + this.wait);
            oscillator.frequency.linearRampToValueAtTime(frequency - this.pitchBendAmount, this.audioContext.currentTime + this.wait + this.attack + this.decay);
        }
        else
        {
            //  If reverse is true, make the sound rise in pitch
            oscillator.frequency.linearRampToValueAtTime(frequency, this.audioContext.currentTime + this.wait);
            oscillator.frequency.linearRampToValueAtTime(frequency + this.pitchBendAmount, this.audioContext.currentTime + this.wait + this.attack + this.decay);
        }

    },

    addDissonance: function ()
    {
        //  Create two more oscillators and gain nodes

        var ctx = this.audioContext;

        var d1 = ctx.createOscillator();
        var d2 = ctx.createOscillator();
        var d1Volume = ctx.createGain();
        var d2Volume = ctx.createGain();

        //  Set the volume to the `volumeValue`
        d1Volume.gain.value = this.volumeValue;
        d2Volume.gain.value = this.volumeValue;

        //  Connect the oscillators to the gain and destination nodes
        d1.connect(d1Volume);
        d2.connect(d2Volume);

        d1Volume.connect(ctx.destination);
        d2Volume.connect(ctx.destination);

        //  Set the waveform to "sawtooth" for a harsh effect
        d1.type = 'sawtooth';
        d2.type = 'sawtooth';

        //  Make the two oscillators play at frequencies above and below the main sound's frequency.
        //  Use whatever value was supplied by the `dissonance` argument
        d1.frequency.value = this.frequencyValue + this.dissonance;
        d2.frequency.value = this.frequencyValue - this.dissonance;

        //  Fade in / out, pitch bend and play the oscillators to match the main sound
        if (this.attack > 0)
        {
            this.fadeIn(d1Volume);
            this.fadeIn(d2Volume);
        }

        if (this.decay > 0)
        {
            this.fadeOut(d1Volume);
            this.fadeOut(d2Volume);
        }

        if (this.pitchBendAmount > 0)
        {
            this.pitchBend(d1);
            this.pitchBend(d2);
        }

        if (this.echo)
        {
            this.addEcho(d1Volume);
            this.addEcho(d2Volume);
        }

        if (this.reverb)
        {
            this.addReverb(d1Volume);
            this.addReverb(d2Volume);
        }

        this.play(d1);
        this.play(d2);
    },

    impulseResponse: function (duration, decay, reverse)
    {
        //  The length of the buffer.
        var length = this.audioContext.sampleRate * duration;

        //  Create an audio buffer (an empty sound container) to store the reverb effect.
        var impulse = this.audioContext.createBuffer(2, length, this.audioContext.sampleRate);

        //  Use `getChannelData` to initialize empty arrays to store sound data for the left and right channels.
        var left = impulse.getChannelData(0);
        var right = impulse.getChannelData(1);

        //  Loop through each sample-frame and fill the channel data with random noise.
        for (var i = 0; i < length; i++)
        {
            //  Apply the reverse effect, if `reverse` is `true`.
            var n = (reverse) ? length - i : i;

            //  Fill the left and right channels with random white noise which decays exponentially.
            left[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
            right[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
        }

        //  Return the `impulse`.
        return impulse;
    }

};

module.exports = FX;


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

//  Phaser.Sound.Dynamic

module.exports = {

    FX: __webpack_require__(321)

};


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Settings = __webpack_require__(70);
var Systems = __webpack_require__(71);

/**
* A Base State Class.
*
* @class Phaser.State
* @constructor
*/
var State = function (config)
{
    //  The properties a State *must* have, that cannot be changed without breaking it:

    this.game = null;

    //  Maybe just an object? Doesn't have to instantiate I don't think ...
    this.settings = new Settings(this, config);

    this.sys = new Systems(this, config);

    //  Reference to sys.children, set during sys.init only
    this.children;
};

State.prototype.constructor = State;

State.prototype = {

    //  Can be overridden by your own States
    preUpdate: function ()
    {
    },

    //  Can be overridden by your own States
    update: function ()
    {
    },

    //  Can be overridden by your own States
    postUpdate: function ()
    {
    },

    //  Can be overridden by your own States
    render: function ()
    {
    }

};

module.exports = State;


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var NOOP = __webpack_require__(72);
var State = __webpack_require__(323);
var Settings = __webpack_require__(70);
var Systems = __webpack_require__(71);
var GetObjectValue = __webpack_require__(13);
// var LoaderEvent = require('../loader/events/');

/**
* The State Manager is responsible for loading, setting up and switching game states.
*
* @class Phaser.StateManager
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
*/
var StateManager = function (game, stateConfig)
{
    this.game = game;

    //  Everything kept in here
    this.keys = {};
    this.states = [];

    //  Only active states are kept in here
    this.active = [];

    this._pending = [];

    if (stateConfig)
    {
        if (Array.isArray(stateConfig))
        {
            for (var i = 0; i < stateConfig.length; i++)
            {
                //  The i === 0 part just starts the first State given
                this._pending.push({
                    index: i,
                    key: 'default',
                    state: stateConfig[i],
                    autoStart: (i === 0)
                });
            }
        }
        else
        {
            this._pending.push({
                index: 0,
                key: 'default',
                state: stateConfig,
                autoStart: true
            });
        }
    }
};

StateManager.prototype.constructor = StateManager;

StateManager.prototype = {

    /**
    * The Boot handler is called by Phaser.Game when it first starts up.
    * The renderer is available by now.
    *
    * @method Phaser.StateManager#boot
    * @private
    */
    boot: function ()
    {
        // this.game.onPause.add(this.pause, this);
        // this.game.onResume.add(this.resume, this);

        for (var i = 0; i < this._pending.length; i++)
        {
            var entry = this._pending[i];

            this.add(entry.key, entry.state, entry.autoStart);
        }

        //  Clear the pending list
        this._pending = [];
    },

    getKey: function (key, stateConfig)
    {
        if (!key) { key = 'default'; }

        if (stateConfig instanceof State)
        {
            key = stateConfig.settings.key;
        }
        else if (typeof stateConfig === 'object' && stateConfig.hasOwnProperty('key'))
        {
            key = stateConfig.key;
        }

        //  By this point it's either 'default' or extracted from the State

        if (this.keys.hasOwnProperty(key))
        {
            throw new Error('Cannot add a State with duplicate key: ' + key);
        }
        else
        {
            return key;
        }
    },

    /**
    * Adds a new State into the StateManager. You must give each State a unique key by which you'll identify it.
    * The State can be either a Phaser.State object (or an object that extends it), a plain JavaScript object or a function.
    * If a function is given a new state object will be created by calling it.
    *
    * @method Phaser.StateManager#add
    * @param {string} key - A unique key you use to reference this state, i.e. "MainMenu", "Level1".
    * @param {Phaser.State|object|function} state  - The state you want to switch to.
    * @param {boolean} [autoStart=false]  - If true the State will be started immediately after adding it.
    */
    add: function (key, stateConfig, autoStart)
    {
        if (autoStart === undefined) { autoStart = false; }

        //  if not booted, then put state into a holding pattern
        if (!this.game.isBooted)
        {
            this._pending.push({
                index: this._pending.length,
                key: key,
                state: stateConfig,
                autoStart: autoStart
            });

            // console.log('StateManager not yet booted, adding to list', this._pending.length);

            return;
        }

        key = this.getKey(key, stateConfig);

        var newState;

        if (stateConfig instanceof State)
        {
            // console.log('StateManager.add from instance', key);
            newState = this.createStateFromInstance(key, stateConfig);
        }
        else if (typeof stateConfig === 'object')
        {
            // console.log('StateManager.add from object', key);

            stateConfig.key = key;

            newState = this.createStateFromObject(key, stateConfig);
        }
        else if (typeof stateConfig === 'function')
        {
            // console.log('StateManager.add from function', key);

            newState = this.createStateFromFunction(key, stateConfig);
        }

        this.keys[key] = newState;

        this.states.push(newState);

        if (autoStart || newState.settings.active)
        {
            if (this.game.isBooted)
            {
                this.start(key);
            }
            else
            {
                this._start.push(key);
            }
        }

        return newState;
    },

    createStateFromInstance: function (key, newState)
    {
        newState.game = this.game;

        newState.settings.key = key;

        newState.sys.init();

        if (this.game.config.renderType === CONST.WEBGL)
        {
            this.createStateFrameBuffer(newState);
        }

        return newState;
    },

    createStateFromObject: function (key, stateConfig)
    {
        var newState = new State(stateConfig);

        newState.game = this.game;

        newState.sys.init();

        if (this.game.config.renderType === CONST.WEBGL)
        {
            this.createStateFrameBuffer(newState);
        }

        return this.setupCallbacks(newState, stateConfig);
    },

    createStateFromFunction: function (key, state)
    {
        var newState = new state();

        if (newState instanceof State)
        {
            return this.createStateFromInstance(key, newState);
        }
        else
        {
            newState.game = this.game;

            newState.settings = new Settings(newState, key);
            newState.sys = new Systems(newState);

            newState.sys.init();

            if (this.game.config.renderType === CONST.WEBGL)
            {
                this.createStateFrameBuffer(newState);
            }

            //  Default required functions
            return this.setupCallbacks(newState);
        }
    },

    setupCallbacks: function (newState, stateConfig)
    {
        if (stateConfig === undefined) { stateConfig = newState; }

        //  Extract callbacks or set NOOP

        newState.init = GetObjectValue(stateConfig, 'init', NOOP);
        newState.preload = GetObjectValue(stateConfig, 'preload', NOOP);
        newState.create = GetObjectValue(stateConfig, 'create', NOOP);
        newState.shutdown = GetObjectValue(stateConfig, 'shutdown', NOOP);

        newState.preUpdate = GetObjectValue(stateConfig, 'preUpdate', NOOP);
        newState.update = GetObjectValue(stateConfig, 'update', NOOP);
        newState.postUpdate = GetObjectValue(stateConfig, 'postUpdate', NOOP);
        newState.render = GetObjectValue(stateConfig, 'render', NOOP);

        return newState;
    },

    createStateFrameBuffer: function (newState)
    {
        var x = newState.settings.x;
        var y = newState.settings.y;

        if (newState.settings.width === -1)
        {
            newState.settings.width = this.game.config.width;
        }

        if (newState.settings.height === -1)
        {
            newState.settings.height = this.game.config.height;
        }

        var width = newState.settings.width;
        var height = newState.settings.height;

        newState.sys.fbo = this.game.renderer.createFBO(newState, x, y, width, height);
    },

    getState: function (key)
    {
        return this.keys[key];
    },

    getStateIndex: function (state)
    {
        return this.states.indexOf(state);
    },

    getActiveStateIndex: function (state)
    {
        for (var i = 0; i < this.active.length; i++)
        {
            if (this.active[i].state === state)
            {
                return this.active[i].index;
            }
        }

        return -1;
    },

    isActive: function (key)
    {
        var state = this.getState(key);

        return (state && state.settings.active && this.active.indexOf(state) !== -1);
    },

    start: function (key)
    {
        //  if not booted, then put state into a holding pattern
        if (!this.game.isBooted)
        {
            // console.log('StateManager not yet booted, setting autoStart on pending list');

            for (var i = 0; i < this._pending.length; i++)
            {
                var entry = this._pending[i];

                if (entry.key === key)
                {
                    entry.autoStart = true;
                }
            }

            return;
        }

        var state = this.getState(key);

        if (state)
        {
            //  Already started? Nothing more to do here ...
            if (this.isActive(key))
            {
                return;
            }

            state.settings.active = true;

            //  + arguments
            if (state.init)
            {
                state.init.call(state);
            }

            if (state.preload && state.sys.load)
            {
                state.sys.load.reset();

                state.preload.call(state, this.game);

                //  Is the loader empty?
                if (state.sys.load.list.size === 0)
                {
                    this.startCreate(state);
                }
                else
                {
                    //  Start the loader going as we have something in the queue

                    state.sys.load.events.once('LOADER_COMPLETE_EVENT', this.loadComplete.bind(this));

                    state.sys.load.start();
                }
            }
            else
            {
                //  No preload? Then there was nothing to load either
                this.startCreate(state);
            }

        }
    },

    loadComplete: function (event)
    {
        var state = event.loader.state;

        //  Make sure to do load-update one last time before state is set to _created

        //  Stop doing this ...
        if (state.hasOwnProperty('loadUpdate'))
        {
            state.loadUpdate.call(state);
        }

        this.startCreate(state);
    },

    startCreate: function (state)
    {
        if (state.create)
        {
            state.create.call(state);
        }

        //  Insert at the correct index, or it just all goes wrong :)

        var i = this.getStateIndex(state);

        this.active.push({ index: i, state: state });

        //  Sort the 'active' array based on the index property
        this.active.sort(this.sortStates.bind(this));

        state.sys.updates.running = true;

        state.sys.mainloop.start();
    },

    pause: function (key)
    {
        var index = this.getActiveStateIndex(key);

        if (index > -1)
        {
            var state = this.getState(key);

            state.settings.active = false;

            this.active.splice(index, 1);

            this.active.sort(this.sortStates.bind(this));
        }
    },

    sortStates: function (stateA, stateB)
    {
        //  Sort descending
        if (stateA.index < stateB.index)
        {
            return -1;
        }
        else if (stateA.index > stateB.index)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    },

    //  See if we can reduce this down to just update and render

    step: function (timestamp)
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            if (state.sys.mainloop.running)
            {
                state.sys.mainloop.step(timestamp);
            }
        }
    },

    /*
    preUpdate: function ()
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            for (var c = 0; c < state.sys.children.list.length; c++)
            {
                state.sys.children.list[c].preUpdate();
            }

            state.preUpdate();
        }
    },

    update: function ()
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            //  Invoke State Main Loop here - updating all of its systems (tweens, physics, etc)

            //  This shouldn't be called if the State is still loading
            //  Have a State.STATUS const in the Settings, dictating what is going on

            for (var c = 0; c < state.sys.children.list.length; c++)
            {
                var child = state.sys.children.list[c];

                if (child.exists)
                {
                    child.update();
                }
            }

            state.update();
        }
    },

    postUpdate: function ()
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            for (var c = 0; c < state.sys.children.list.length; c++)
            {
                state.sys.children.list[c].postUpdate();
            }

            state.postUpdate();
        }
    },

    render: function ()
    {
        for (var i = 0; i < this.active.length; i++)
        {
            var state = this.active[i].state;

            //  Can put all kinds of other checks in here, like MainLoop, FPS, etc.
            if (!state.settings.visible || state.sys.color.alpha === 0 || state.sys.children.list.length === 0)
            {
                continue;
            }

            this.game.renderer.render(state);
        }
    },
    */

};

module.exports = StateManager;


/***/ },
/* 325 */
/***/ function(module, exports) {


module.exports = {

    PENDING: 0,
    INSTALLED: 1,

    BOOT: 0,
    INIT: 1,
    PRELOAD: 2,
    CREATE: 3,
    UPDATE: 4,
    RENDER: 5,
    SHUTDOWN: 6

};


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var FactoryContainer = __webpack_require__(9);

/**
* The GameObject Factory is a quick way to create many common game objects. The Factory is owned by the State.
*
* @class Phaser.GameObject.Factory
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
*/

var GameObjectFactory = {

    /**
    * @property {Phaser.State} state - The State that owns this Factory
    * @protected
    */
    state: null

};

function init (state)
{
    console.log('Creating GameObjectFactory instance for State');

    GameObjectFactory.state = state;

    //   Load the factories into this Object

    return FactoryContainer.load(GameObjectFactory, true);

    // return GameObjectFactory;
}

module.exports = init;


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

var CONST = __webpack_require__(3);
var BaseLoader = __webpack_require__(225);
var NumberArray = __webpack_require__(73);

var ImageFile = __webpack_require__(16);
var JSONFile = __webpack_require__(57);
var XMLFile = __webpack_require__(235);
var BinaryFile = __webpack_require__(232);
var GLSLFile = __webpack_require__(233);
var TextFile = __webpack_require__(234);
var AtlasJSONFile = __webpack_require__(231);

var Loader = function (state)
{
    BaseLoader.call(this);

    /**
    * @property {Phaser.State} state - The State that owns this Factory
    * @protected
    */
    this.state = state;

    this._multilist = {};
};

Loader.prototype = Object.create(BaseLoader.prototype);
Loader.prototype.constructor = Loader;

Loader.prototype.image = function (key, url, xhrSettings)
{
    var file = new ImageFile(key, url, this.path, xhrSettings);

    return this.addFile(file);
};

Loader.prototype.json = function (key, url, xhrSettings)
{
    var file = new JSONFile(key, url, this.path, xhrSettings);

    return this.addFile(file);
};

Loader.prototype.xml = function (key, url, xhrSettings)
{
    var file = new XMLFile(key, url, this.path, xhrSettings);

    return this.addFile(file);
};

Loader.prototype.binary = function (key, url, xhrSettings)
{
    var file = new BinaryFile(key, url, this.path, xhrSettings);

    return this.addFile(file);
};

Loader.prototype.text = function (key, url, xhrSettings)
{
    var file = new TextFile(key, url, this.path, xhrSettings);

    return this.addFile(file);
};

Loader.prototype.glsl = function (key, url, xhrSettings)
{
    var file = new GLSLFile(key, url, this.path, xhrSettings);

    return this.addFile(file);
};

Loader.prototype.atlas = function (key, textureURL, atlasURL, textureXhrSettings, atlasXhrSettings)
{
    //  Returns an object with two properties: 'texture' and 'data'
    var files = new AtlasJSONFile(key, textureURL, atlasURL, this.path, textureXhrSettings, atlasXhrSettings);

    this.addFile(files.texture);
    this.addFile(files.data);

    return this;
};

Loader.prototype.multiatlas = function (key, textureURLs, atlasURLs, textureXhrSettings, atlasXhrSettings)
{
    if (typeof textureURLs === 'number')
    {
        var total = textureURLs;

        textureURLs = NumberArray(0, total, key + '-', '.png');
        atlasURLs = NumberArray(0, total, key + '-', '.json');
    }
    else
    {
        if (!Array.isArray(textureURLs))
        {
            textureURLs = [ textureURLs ];
        }

        if (!Array.isArray(atlasURLs))
        {
            atlasURLs = [ atlasURLs ];
        }
    }

    var file;
    var i = 0;
    var multiKey;

    this._multilist[key] = [];

    for (i = 0; i < textureURLs.length; i++)
    {
        multiKey = '_MA_IMG_' + key + '_' + i.toString();

        file = new ImageFile(multiKey, textureURLs[i], this.path, textureXhrSettings);

        this.addFile(file);

        this._multilist[key].push(multiKey);
    }

    for (i = 0; i < atlasURLs.length; i++)
    {
        multiKey = '_MA_JSON_' + key + '_' + i.toString();

        file = new JSONFile(multiKey, atlasURLs[i], this.path, atlasXhrSettings);

        this.addFile(file);

        this._multilist[key].push(multiKey);
    }
};

//  The Loader has finished
Loader.prototype.processCallback = function ()
{
    if (this.storage.size === 0)
    {
        return;
    }

    //  The global Texture Manager
    var textures = this.state.sys.textures;

    //  Process multiatlas groups first

    var file;

    for (var key in this._multilist)
    {
        var data = [];
        var images = [];
        var keys = this._multilist[key];

        for (var i = 0; i < keys.length; i++)
        {
            file = this.storage.get('key', keys[i]);

            if (file)
            {
                if (file.type === 'image')
                {
                    images.push(file.data);
                }
                else if (file.type === 'json')
                {
                    data.push(file.data);
                }

                this.storage.delete(file);
            }
        }

        //  Do we have everything needed?
        if (images.length + data.length === keys.length)
        {
            //  Yup, add them to the Texture Manager

            //  Is the data JSON Hash or JSON Array?
            if (Array.isArray(data[0].frames))
            {
                textures.addAtlasJSONArray(key, images, data);
            }
            else
            {
                textures.addAtlasJSONHash(key, images, data);
            }
        }
    }

    this.storage.each(function (file)
    {
        if (file.type === 'image')
        {
            textures.addImage(file.key, file.data);
        }
        else if (file.type === 'atlasjson')
        {
            var fileA = file.fileA;
            var fileB = file.fileB;

            if (fileA.type === 'image')
            {
                textures.addAtlas(fileA.key, fileA.data, fileB.data);
            }
            else
            {
                textures.addAtlas(fileB.key, fileB.data, fileA.data);
            }
        }
        else if (file.type === 'json')
        {
            // console.dir(file.data);
        }
    });

    this.storage.clear();
};

module.exports = Loader;


/***/ },
/* 328 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

// My thanks to Isaac Sukin for creating MainLoop.js, on which lots of this is based.

var MainLoop = function (state, framerate)
{
    /**
    * @property {Phaser.State} state
    */
    this.state = state;

    /**
    * @property {Phaser.Game} game - A reference to the currently running Game.
    */
    this.game = state.game;

    // The amount of time (in milliseconds) to simulate each time update() runs.
    this.timestep = 1000 / framerate;

    this.physicsStep = 1 / framerate;

    // The cumulative amount of in-app time that hasn't been simulated yet.
    // See the comments inside animate() for details.
    this.frameDelta = 0;

    // The timestamp in milliseconds of the last time the main loop was run.
    // Used to compute the time elapsed between frames.
    this.lastFrameTimeMs = 0;

    // An exponential moving average of the frames per second.
    this.fps = 60;

    // The timestamp (in milliseconds) of the last time the `fps` moving
    // average was updated.
    this.lastFpsUpdate = 0;

    // The number of frames delivered in the current second.
    this.framesThisSecond = 0;

    // The number of times update() is called in a given frame. This is only
    // relevant inside of animate(), but a reference is held externally so that
    // this variable is not marked for garbage collection every time the main
    // loop runs.
    this.numUpdateSteps = 0;

    // The minimum amount of time in milliseconds that must pass since the last
    // frame was executed before another frame can be executed. The
    // multiplicative inverse caps the FPS (the default of zero means there is
    // no cap).
    this.minFrameDelay = 0;

    // Whether the main loop is running.
    this.running = false;

    // `true` if `MainLoop.start()` has been called and the most recent time it
    // was called has not been followed by a call to `MainLoop.stop()`. This is
    // different than `running` because there is a delay of a few milliseconds
    // after `MainLoop.start()` is called before the application is considered
    // "running." This delay is due to waiting for the next frame.
    this.started = false;

    // Whether the simulation has fallen too far behind real time.
    // Specifically, `panic` will be set to `true` if too many updates occur in
    // one frame. This is only relevant inside of animate(), but a reference is
    // held externally so that this variable is not marked for garbage
    // collection every time the main loop runs.
    this.panic = false;
};

MainLoop.prototype.constructor = MainLoop;

MainLoop.prototype = {

    setMaxFPS: function (fps)
    {
        if (fps === 0)
        {
            this.stop();
        }
        else
        {
            this.minFrameDelay = 1000 / fps;
        }
    },

    getMaxFPS: function ()
    {
        return 1000 / this.minFrameDelay;
    },

    resetFrameDelta: function ()
    {
        var oldFrameDelta = this.frameDelta;

        this.frameDelta = 0;

        return oldFrameDelta;
    },

    start: function ()
    {
        if (this.started)
        {
            return this;
        }

        this.started = true;
        this.running = true;

        this.lastFrameTimeMs = window.performance.now();
        this.lastFpsUpdate = window.performance.now();
        this.framesThisSecond = 0;
    },

    //  timestamp = DOMHighResTimeStamp
    step: function (timestamp)
    {
        // Throttle the frame rate (if minFrameDelay is set to a non-zero value by
        // `MainLoop.setMaxAllowedFPS()`).
        if (timestamp < this.lastFrameTimeMs + this.minFrameDelay)
        {
            return;
        }

        // frameDelta is the cumulative amount of in-app time that hasn't been
        // simulated yet. Add the time since the last frame. We need to track total
        // not-yet-simulated time (as opposed to just the time elapsed since the
        // last frame) because not all actually elapsed time is guaranteed to be
        // simulated each frame. See the comments below for details.
        this.frameDelta += timestamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timestamp;

        // Run any updates that are not dependent on time in the simulation.

        //  Here we'll need to run things like tween.update, input.update, etc.
        this.state.sys.begin(timestamp, this.frameDelta);

        // Update the estimate of the frame rate, `fps`. Every second, the number
        // of frames that occurred in that second are included in an exponential
        // moving average of all frames per second, with an alpha of 0.25. This
        // means that more recent seconds affect the estimated frame rate more than
        // older seconds.
        if (timestamp > this.lastFpsUpdate + 1000)
        {
            // Compute the new exponential moving average with an alpha of 0.25.
            // Using constants inline is okay here.
            this.fps = 0.25 * this.framesThisSecond + 0.75 * this.fps;

            this.lastFpsUpdate = timestamp;
            this.framesThisSecond = 0;
        }

        this.framesThisSecond++;

        this.numUpdateSteps = 0;

        var step = this.timestep;

        while (this.frameDelta >= step)
        {
            // this.update(this.timestep);

            this.state.sys.update(step, this.physicsStep);

            for (var c = 0; c < this.state.sys.children.list.length; c++)
            {
                var child = this.state.sys.children.list[c];

                if (child.exists)
                {
                    child.update(step);
                }
            }

            //  Dev level callback
            this.state.update(step);

            this.frameDelta -= this.timestep;

            if (++this.numUpdateSteps >= 240)
            {
                this.panic = true;
                break;
            }
        }

        this.state.sys.preRender();

        this.state.sys.updates.start();

        if (this.state.settings.visible && this.state.sys.color.alpha !== 0)
        {
            this.game.renderer.render(this.state, this.frameDelta / this.timestep);
        }

        this.state.sys.updates.stop();

        // Run any updates that are not dependent on time in the simulation.
        this.state.sys.end(this.fps, this.panic);

        this.panic = false;
    },

    /*
    update: function (timestep)
    {
        this.state.sys.update(timestep);

        var c;
        var child;

        for (var c = 0; c < this.state.sys.children.list.length; c++)
        {
            var child = this.state.sys.children.list[c];

            if (child.exists)
            {
                child.update(timestep);
            }
        }

        //  Dev level callback
        this.state.update(timestep);

        for (c = 0; c < this.state.sys.children.list.length; c++)
        {
            var child = this.state.sys.children.list[c];

            if (child.exists)
            {
                child.update(timestep);
            }
        }
    },
    */

    stop: function ()
    {
        this.running = false;
        this.started = false;

        return this;
    }

};

module.exports = MainLoop;


/***/ },
/* 329 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Dirty! Manager
*
* @class
*/
var UpdateManager = function (state)
{
    this.state = state;

    this.game = state.game;

    this.list = [];

    // this.i = 1;

    this.running = false;
    
    this.processed = 0;
};

UpdateManager.prototype.constructor = UpdateManager;

UpdateManager.prototype = {

    stop: function ()
    {
        if (!this.running)
        {
            return;
        }

        // console.log(this.i, 'UpdateManager.stop', this.processed);

        this.list.length = 0;

        // this.i++;
    },

    start: function ()
    {
        if (!this.running)
        {
            return;
        }

        var len = this.list.length;

        if (len === 0)
        {
            return;
        }

        // console.log(this.i, 'UpdateManager.start', len);

        this.processed = 0;

        for (var i = 0; i < len; i++)
        {
            //  Because it may have already been processed (as a child of another Transform that was updated)
            if (this.list[i] && this.list[i]._dirty)
            {
                this.processed++;
                this.list[i].update();
            }
        }
    },

    add: function (transform)
    {
        this.list.push(transform);
    }

};

module.exports = UpdateManager;


/***/ },
/* 330 */
/***/ function(module, exports) {

// A Set is a collection of unique elements.

var Set = function (elements)
{
    this.entries = [];

    if (Array.isArray(elements))
    {
        for (var i = 0; i < elements.length; i++)
        {
            this.add(elements[i]);
        }
    }
};

Set.prototype.constructor = Set;

Set.prototype = {

    set: function (value)
    {
        if (this.entries.indexOf(value) === -1)
        {
            this.entries.push(value);
        }

        return this;
    },

    get: function (property, value)
    {
        for (var i = 0; i < this.entries.length; i++)
        {
            var entry = this.entries[i];

            if (entry[property] === value)
            {
                return entry;
            }
        }
    },

    delete: function (value)
    {
        var index = this.entries.indexOf(value);

        if (index > -1)
        {
            this.entries.splice(index, 1);
        }

        return this;
    },

    dump: function ()
    {
        console.group('Set');

        for (var i = 0; i < this.entries.length; i++)
        {
            var entry = this.entries[i];
            console.log(entry);
        }

        console.groupEnd();
    },


    //  For when you know this Set will be modified during the iteration
    each: function (callback)
    {
        var temp = this.entries.slice();

        for (var i = 0; i < temp.length; i++)
        {
            if (callback(temp[i]) === false)
            {
                break;
            }
        }

        return this;
    },

    //  For when you absolutely know this Set won't be modified during the iteration
    iterate: function (callback)
    {
        for (var i = 0; i < this.entries.length; i++)
        {
            if (callback(this.entries[i]) === false)
            {
                break;
            }
        }

        return this;
    },

    clear: function ()
    {
        this.entries.length = 0;

        return this;
    },

    contains: function (value)
    {
        return (this.entries.indexOf(value) > -1);
    },

    union: function (set)
    {
        var newSet = new Set();

        set.values.forEach(function (value)
        {
            newSet.add(value);
        });

        this.entries.forEach(function (value)
        {
            newSet.add(value);
        });

        return newSet;
    },

    intersect: function (set)
    {
        var newSet = new Set();

        this.entries.forEach(function (value)
        {
            if (set.contains(value))
            {
                newSet.add(value);
            }
        });

        return newSet;
    },

    difference: function (set)
    {
        var newSet = new Set();

        this.entries.forEach(function (value)
        {
            if (!set.contains(value))
            {
                newSet.add(value);
            }
        });

        return newSet;
    }

};

Object.defineProperties(Set.prototype, {

    size: {

        enumerable: true,

        get: function ()
        {
            return this.entries.length;
        },

        set: function (value)
        {
            return this.entries.length = value;
        }

    }

});

module.exports = Set;


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Extend = __webpack_require__(17);

/**
* A Frame is a section of a Texture.
*
* @class Phaser.Frame
* @constructor
* @param {Phaser.Texture} texture - The Texture this Frame belongs to.
* @param {string} name - The unique (within the Texture) name of this Frame.
* @param {number} x - X position of the frame within the Texture.
* @param {number} y - Y position of the frame within the Texture.
* @param {number} width - Width of the frame within the Texture.
* @param {number} height - Height of the frame within the Texture.
*/
var Frame = function (texture, name, sourceIndex, x, y, width, height)
{
    /**
    * @property {Phaser.Texture} texture - The Texture this frame belongs to.
    */
    this.texture = texture;

    /**
    * @property {string} name - The name of this frame within the Texture.
    */
    this.name = name;

    this.source = texture.source[sourceIndex];

    this.sourceIndex = sourceIndex;

    /**
    * @property {number} cutX - X position within the source image to cut from.
    */
    this.cutX = x;

    /**
    * @property {number} cutY - Y position within the source image to cut from.
    */
    this.cutY = y;

    /**
    * @property {number} cutWidth - The width of the area in the source image to cut.
    */
    this.cutWidth = width;

    /**
    * @property {number} cutHeight - The height of the area in the source image to cut.
    */
    this.cutHeight = height;

    /**
    * @property {number} x - The X rendering offset of this Frame, taking trim into account.
    */
    this.x = 0;

    /**
    * @property {number} y - The Y rendering offset of this Frame, taking trim into account.
    */
    this.y = 0;

    /**
    * @property {number} width - The rendering width of this Frame, taking trim into account.
    */
    this.width = width;

    /**
    * @property {number} height - The rendering height of this Frame, taking trim into account.
    */
    this.height = height;

    /**
    * Is this frame is rotated or not in the Texture?
    * Rotation allows you to use rotated frames in texture atlas packing.
    * It has nothing to do with Sprite rotation.
    *
    * @property {boolean} rotated
    * @default
    */
    this.rotated = false;

    /**
    * Is this a tiling texture? As used by the likes of a TilingSprite.
    * TODO: Try and remove this, it shouldn't be here
    *
    * @property {boolean} isTiling
    * @default
    */
    this.isTiling = false;

    /**
    * This will let a renderer know that a tinted parent has updated its texture.
    * TODO: Try and remove this, it shouldn't be here
    *
    * @property {boolean} requiresReTint
    * @default
    */
    this.requiresReTint = false;

    //  Over-rides the Renderer setting? -1 = use Renderer Setting, 0 = No rounding, 1 = Round
    this.autoRound = -1;

    /**
    * The un-modified source frame, trim and UV data.
    *
    * @private
    * @property {object} data
    */
    this.data = {
        cut: {
            x: x,
            y: y,
            w: width,
            h: height,
            r: x + width,
            b: y + height
        },
        trim: false,
        sourceSize: {
            w: width,
            h: height
        },
        spriteSourceSize: {
            x: 0,
            y: 0,
            w: width,
            h: height
        },
        uvs: {
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            x3: 0,
            y3: 0
        },
        drawImage: {
            sx: x,
            sy: y,
            sWidth: width,
            sHeight: height,
            dWidth: width,
            dHeight: height
        }
    };

    this.updateUVs();
};

Frame.prototype.constructor = Frame;

Frame.prototype = {

    /**
    * If the frame was trimmed when added to the Texture Atlas, this records the trim and source data.
    *
    * @method Phaser.TextureFrame#setTrim
    * @param {number} actualWidth - The width of the frame before being trimmed.
    * @param {number} actualHeight - The height of the frame before being trimmed.
    * @param {number} destX - The destination X position of the trimmed frame for display.
    * @param {number} destY - The destination Y position of the trimmed frame for display.
    * @param {number} destWidth - The destination width of the trimmed frame for display.
    * @param {number} destHeight - The destination height of the trimmed frame for display.
    */
    setTrim: function (actualWidth, actualHeight, destX, destY, destWidth, destHeight)
    {
        var data = this.data;
        var ss = data.spriteSourceSize;
        var di = data.drawImage;

        //  Store actual values

        data.trim = true;

        data.sourceSize.w = actualWidth;
        data.sourceSize.h = actualHeight;

        ss.x = destX;
        ss.y = destY;
        ss.w = destWidth;
        ss.h = destHeight;

        //  Adjust properties
        this.x = destX;
        this.y = destY;
        this.width = destWidth;
        this.height = destHeight;

        //  drawImage data
        di.sx = destX;
        di.sy = destY;
        di.sWidth = destWidth;
        di.sHeight = destHeight;
        di.dWidth = destWidth;
        di.dHeight = destHeight;

        this.updateUVs();

        return this;
    },

    /**
    * Updates the internal WebGL UV cache.
    *
    * @method updateUVs
    * @private
    */
    updateUVs: function ()
    {
        var tw = this.source.width;
        var th = this.source.height;
        var uvs = this.data.uvs;
        
        uvs.x0 = this.cutX / tw;
        uvs.y0 = this.cutY / th;

        uvs.x1 = this.cutX / tw;
        uvs.y1 = (this.cutY + this.cutHeight) / th;

        uvs.x2 = (this.cutX + this.cutWidth) / tw;
        uvs.y2 = (this.cutY + this.cutHeight) / th;

        uvs.x3 = (this.cutX + this.cutWidth) / tw;
        uvs.y3 = this.cutY / th;

        return this;
    },

    /**
    * Updates the internal WebGL UV cache.
    *
    * @method updateUVsInverted
    * @private
    */
    updateUVsInverted: function ()
    {
        var tw = this.source.width;
        var th = this.source.height;
        var uvs = this.data.uvs;
        
        uvs.x3 = (this.cutX + this.cutHeight) / tw;
        uvs.y3 = (this.cutY + this.cutWidth) / th;

        uvs.x2 = this.cutX / tw;        
        uvs.y2 = (this.cutY + this.cutWidth) / th;
        
        uvs.x1 = this.cutX / tw;
        uvs.y1 = this.cutY / th;
        
        uvs.x0 = (this.cutX + this.cutHeight) / tw;
        uvs.y0 = this.cutY / th;

        return this;
    },

    clone: function ()
    {
        var clone = new Frame(this.texture, this.name, this.sourceIndex);

        clone.cutX = this.cutX;
        clone.cutY = this.cutY;
        clone.cutWidth = this.cutWidth;
        clone.cutHeight = this.cutHeight;

        clone.x = this.x;
        clone.y = this.y;
        clone.width = this.width;
        clone.height = this.height;

        clone.rotated = this.rotated;

        clone.data = Extend(true, clone.data, this.data);

        clone.updateUVs();

        return clone;
    },

    destroy: function ()
    {
    }

};

Object.defineProperties(Frame.prototype, {

    /**
    * The width of the Frame in its un-trimmed, un-padded state, as prepared in the art package,
    * before being packed.
    *
    * @name Phaser.TextureFrame#realWidth
    * @property {any} realWidth
    */
    realWidth: {

        enumerable: true,

        get: function ()
        {
            return this.data.sourceSize.w;
        }

    },

    /**
    * The height of the Frame in its un-trimmed, un-padded state, as prepared in the art package,
    * before being packed.
    *
    * @name Phaser.TextureFrame#realHeight
    * @property {any} realHeight
    */
    realHeight: {

        enumerable: true,

        get: function ()
        {
            return this.data.sourceSize.h;
        }

    },

    /**
    * UVs
    *
    * @name Phaser.TextureFrame#uvs
    * @property {Object} uvs
    */
    uvs: {

        enumerable: true,

        get: function ()
        {
            return this.data.uvs;
        }

    },

    /**
    * Canvas Draw Image data
    *
    * @name Phaser.TextureFrame#canvasData
    * @property {Object} canvasData
    */
    canvasData: {

        enumerable: true,

        get: function ()
        {
            return this.data.drawImage;
        }

    }

});

module.exports = Frame;


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Frame = __webpack_require__(331);
var TextureSource = __webpack_require__(334);

/**
* A Texture consists of a source, usually an Image from the Cache, or a Canvas, and a collection
* of Frames. The Frames represent the different areas of the Texture. For example a texture atlas
* may have many Frames, one for each element within the atlas. Where-as a single image would have
* just one frame, that encompasses the whole image.
*
* Textures are managed by the global TextureManager. This is a singleton class that is
* responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
*
* Sprites and other Game Objects get the texture data they need from the TextureManager.
*
* @class Phaser.Texture
* @constructor
* @param {object} source
* @param {number} scaleMode
*/
var Texture = function (manager, key, source)
{
    this.manager = manager;

    if (!Array.isArray(source))
    {
        source = [ source ];
    }

    this.key = key;

    /**
    * The source that is used to create the texture.
    * Usually an Image, but can also be a Canvas.
    *
    * @property source
    * @type array
    */
    this.source = [];

    /**
    * @property {object} frames - Frames
    */
    this.frames = {};

    this.frameTotal = 0;

    //  Load the Sources
    for (var i = 0; i < source.length; i++)
    {
        this.source.push(new TextureSource(this, source[i]));
    }
};

Texture.prototype.constructor = Texture;

Texture.prototype = {

    add: function (name, sourceIndex, x, y, width, height)
    {
        var frame = new Frame(this, name, sourceIndex, x, y, width, height);

        this.frames[name] = frame;

        this.frameTotal++;

        return frame;
    },

    get: function (name)
    {
        if (name === undefined || name === null || this.frameTotal === 1)
        {
            name = '__BASE';
        }

        var frame = this.frames[name];

        if (!frame)
        {
            console.warn('No Texture.frame found with name ' + name);

            return this.frames['__BASE'];
        }
        else
        {
            return frame;
        }
    },

    setTextureIndex: function (index)
    {
        for (var i = 0; i < this.source.length; i++)
        {
            this.source[i].glTextureIndex = index;

            console.log(this.source[i].image.currentSrc, 'index = ', index);

            index++;
        }

        return index;
    },

    /**
    * Destroys this base texture
    *
    * @method destroy
    */
    destroy: function ()
    {
        //  Need to iterate though the TextureSources, and unload each one
        //  then clear out the frames

        /*
        if (this.source)
        {
            Phaser.CanvasPool.removeByCanvas(this.source);
        }

        this.source = null;
        */
    }

};

/**
* Helper function that creates a base texture from the given canvas element.
*
* @static
* @method fromCanvas
* @param canvas {Canvas} The canvas element source of the texture
* @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}Phaser.scaleModes{{/crossLink}} for possible values
* @return {BaseTexture}
Phaser.Texture.fromCanvas = function (canvas, scaleMode)
{
    if (canvas.width === 0)
    {
        canvas.width = 1;
    }

    if (canvas.height === 0)
    {
        canvas.height = 1;
    }

    return new Phaser.Texture(canvas, scaleMode);
};
*/

module.exports = Texture;


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var Parser = __webpack_require__(342);
var Texture = __webpack_require__(332);

/**
* Textures are managed by the global TextureManager. This is a singleton class that is
* responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
*
* Sprites and other Game Objects get the texture data they need from the TextureManager.
*
* Access it via `state.textures`.
*
* @class Phaser.TextureManager
* @constructor
*/
var TextureManager = function (game)
{
    this.game = game;

    this.list = {};
};

TextureManager.prototype.constructor = TextureManager;

TextureManager.prototype = {

    addImage: function (key, source)
    {
        var texture = this.create(key, source);
        
        Parser.Image(texture, 0);

        return texture;
    },

    addCanvas: function (key, source)
    {
        var texture = this.create(key, source);
        
        Parser.Canvas(texture, 0);

        return texture;
    },

    addAtlas: function (key, source, data)
    {
        //  Is it a Hash or an Array?

        if (Array.isArray(data.frames))
        {
            return this.addAtlasJSONArray(key, source, data);
        }
        else
        {
            return this.addAtlasJSONHash(key, source, data);
        }
    },

    addAtlasJSONArray: function (key, source, data)
    {
        var texture = this.create(key, source);

        if (Array.isArray(data))
        {
            for (var i = 0; i < data.length; i++)
            {
                Parser.JSONArray(texture, i, data[i]);
            }
        }
        else
        {
            Parser.JSONArray(texture, 0, data);
        }

        return texture;
    },

    addAtlasJSONHash: function (key, source, data)
    {
        var texture = this.create(key, source);

        if (Array.isArray(data))
        {
            for (var i = 0; i < data.length; i++)
            {
                Parser.JSONHash(texture, i, data[i]);
            }
        }
        else
        {
            Parser.JSONHash(texture, 0, data);
        }

        return texture;
    },

    addSpriteSheet: function (key, source, frameWidth, frameHeight, startFrame, endFrame, margin, spacing)
    {
        var texture = this.create(key, source);

        var width = texture.source[0].width;
        var height = texture.source[0].height;

        Parser.SpriteSheet(texture, 0, 0, 0, width, height, frameWidth, frameHeight, startFrame, endFrame, margin, spacing);

        return texture;
    },

    addSpriteSheetFromAtlas: function (key, atlasKey, atlasFrame, frameWidth, frameHeight, startFrame, endFrame, margin, spacing)
    {
        var atlas = this.get(atlasKey);
        var sheet = atlas.get(atlasFrame);

        if (sheet)
        {
            var texture = this.create(key, sheet.source.image);

            Parser.SpriteSheet(texture, 0, sheet.cutX, sheet.cutY, sheet.cutWidth, sheet.cutHeight, frameWidth, frameHeight, startFrame, endFrame, margin, spacing);

            return texture;
        }
    },

    addAtlasStarlingXML: function (key, source, data)
    {
        var texture = this.create(key, source);

        if (Array.isArray(data))
        {
            for (var i = 0; i < data.length; i++)
            {
                Parser.StarlingXML(texture, i, data[i]);
            }
        }
        else
        {
            Parser.StarlingXML(texture, 0, data);
        }

        return texture;
    },

    addAtlasPyxel: function (key, source, data)
    {
        var texture = this.create(key, source);

        if (Array.isArray(data))
        {
            for (var i = 0; i < data.length; i++)
            {
                Parser.Pyxel(texture, i, data[i]);
            }
        }
        else
        {
            Parser.Pyxel(texture, 0, data);
        }

        return texture;
    },

    create: function (key, source)
    {
        var texture = new Texture(this, key, source);

        this.list[key] = texture;

        return texture;
    },

    exists: function (key)
    {
        return (this.list.hasOwnProperty(key));
    },

    get: function (key)
    {
        if (key === undefined) { key = '__DEFAULT'; }

        if (this.list[key])
        {
            return this.list[key];
        }
        else
        {
            return this.list['__MISSING'];
        }
    },

    cloneFrame: function (key, frame)
    {
        if (this.list[key])
        {
            return this.list[key].get(frame).clone();
        }
    },

    getFrame: function (key, frame)
    {
        if (this.list[key])
        {
            return this.list[key].get(frame);
        }
    },

    setTexture: function (gameObject, key, frame)
    {
        if (this.list[key])
        {
            gameObject.texture = this.list[key];
            gameObject.frame = gameObject.texture.get(frame);
        }

        return gameObject;
    },

    /**
    * Passes all Textures to the given callback.
    *
    * @method each
    * @param {function} callback - The function to call.
    * @param {object} [thisArg] - Value to use as `this` when executing callback.
    * @param {...*} [arguments] - Additional arguments that will be passed to the callback, after the child.
    */
    each: function (callback, thisArg)
    {
        var args = [ null ];

        for (var i = 1; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }

        for (var texture in this.list)
        {
            args[0] = this.list[texture];

            callback.apply(thisArg, args);
        }
    }

};

module.exports = TextureManager;


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

var CONST = __webpack_require__(1);
var ScaleModes = __webpack_require__(10);
var IsSizePowerOfTwo = __webpack_require__(66);
var CreateTexture2DFromSource = __webpack_require__(319);

/**
*
* @class Phaser.TextureSource
* @constructor
* @param {object} source
* @param {number} scaleMode
*/
var TextureSource = function (texture, source)
{
    this.texture = texture;

    this.image = source;

    this.compressionAlgorithm = null;

    /**
    * The Resolution of the texture.
    *
    * @property resolution
    * @type Number
    */
    this.resolution = 1;
    
    /**
    * The width of the Texture.
    *
    * @property width
    * @type Number
    * @readOnly
    */
    this.width = source.naturalWidth || source.width || 0;

    /**
    * The height of the Texture.
    *
    * @property height
    * @type Number
    * @readOnly
    */
    this.height = source.naturalHeight || source.height || 0;

    /**
    * The scale mode to apply when scaling this texture.
    * NEAREST or DEFAULT
    *
    * @property scaleMode
    * @type {Number}
    * @default Phaser.scaleModes.DEFAULT;
    */
    this.scaleMode = ScaleModes.DEFAULT;

    /**
    * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
    *
    * @property premultipliedAlpha
    * @type Boolean
    * @default true
    */
    this.premultipliedAlpha = true;

    /**
    * Set this to true if a mipmap of this texture needs to be generated. This value needs to be set before the texture is used
    * Also the texture must be a power of two size to work
    *
    * @property mipmapLevel
    * @type {integer}
    */
    this.mipmapLevel = 0;

    /**
    * A BaseTexture can be set to skip the rendering phase in the WebGL Sprite Batch.
    *
    * You may want to do this if you have a parent Sprite with no visible texture (i.e. uses the internal `__default` texture)
    * that has children that you do want to render, without causing a batch flush in the process.
    *
    * @property renderable
    * @type Boolean
    */
    this.renderable = true;

    /**
    * @property isPowerOf2
    * @type boolean
    */
    this.isPowerOf2 = IsSizePowerOfTwo(this.width, this.height);

    /**
    * @property glTexture
    */
    this.glTexture = null;

    /**
    * The multi texture batching index number.
    * @property glTextureIndex
    * @type Number
    */
    this.glTextureIndex = 0;

    /**
    * The timestamp when this texture was last used by the WebGL renderer.
    * Can be used to purge out 'dead' textures from GPU memory.
    * @property glLastUsed
    * @type Number
    */
    this.glLastUsed = 0;

    /**
    * @property glDirty
    */
    this.glDirty = true;

    var game = texture.manager.game;

    if (game.config.renderType === CONST.WEBGL)
    {
        CreateTexture2DFromSource(game.renderer.gl, this);
    }
};

module.exports = TextureSource;


/***/ },
/* 335 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parse a Sprite Sheet and extracts the frame data from it.
*
* @class Phaser.TextureParser.Image
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {string} key - The key of the Frame within the Texture that the Sprite Sheet is stored in.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var CanvasTextureParser = function (texture, sourceIndex)
{
    var source = texture.source[sourceIndex];

    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

    return texture;
};

module.exports = CanvasTextureParser;


/***/ },
/* 336 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parse a Sprite Sheet and extracts the frame data from it.
*
* @class Phaser.TextureParser.Image
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {string} key - The key of the Frame within the Texture that the Sprite Sheet is stored in.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var ImageTextureParser = function (texture, sourceIndex)
{
    var source = texture.source[sourceIndex];

    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

    return texture;
};

module.exports = ImageTextureParser;


/***/ },
/* 337 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parses a JSON Array and extracts the frame data from it.
*
* @class Phaser.TextureParser.JSONArray
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {object} json - The JSON data from the Texture Atlas. Must be in Array format.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var JSONArrayTextureParser = function (texture, sourceIndex, json)
{
    //  Malformed?
    if (!json['frames'])
    {
        console.warn('Invalid Texture Atlas JSON Array given, missing \'frames\' array');
        return;
    }

    //  Add in a __BASE entry (for the entire atlas)
    var source = texture.source[sourceIndex];
    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

    //  By this stage frames is a fully parsed array
    var frames = json['frames'];
    var newFrame;

    for (var i = 0; i < frames.length; i++)
    {
        var src = frames[i];

        //  The frame values are the exact coordinates to cut the frame out of the atlas from
        newFrame = texture.add(src.filename, sourceIndex, src.frame.x, src.frame.y, src.frame.w, src.frame.h);

        //  These are the original (non-trimmed) sprite values
        if (src.trimmed)
        {
            newFrame.setTrim(
                src.sourceSize.w,
                src.sourceSize.h,
                src.spriteSourceSize.x,
                src.spriteSourceSize.y,
                src.spriteSourceSize.w,
                src.spriteSourceSize.h
            );
        }

        if (src.rotated)
        {
            newFrame.rotated = true;
            newFrame.updateUVsInverted();
        }
    }

    return texture;
};

module.exports = JSONArrayTextureParser;


/***/ },
/* 338 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parses a JSON Array and extracts the frame data from it.
*
* @class Phaser.TextureParser.JSONArray
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {object} json - The JSON data from the Texture Atlas. Must be in JSON Hash format.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var JSONHashTextureParser = function (texture, sourceIndex, json)
{
    //  Malformed?
    if (!json['frames'])
    {
        console.warn('Invalid Texture Atlas JSON Hash given, missing \'frames\' Object');
        return;
    }

    //  Add in a __BASE entry (for the entire atlas)
    var source = texture.source[sourceIndex];
    texture.add('__BASE', sourceIndex, 0, 0, source.width, source.height);

    //  By this stage frames is a fully parsed Object
    var frames = json['frames'];
    var newFrame;

    for (var key in frames)
    {
        var src = frames[key];

        //  The frame values are the exact coordinates to cut the frame out of the atlas from
        newFrame = texture.add(key, sourceIndex, src.frame.x, src.frame.y, src.frame.w, src.frame.h);

        //  These are the original (non-trimmed) sprite values
        if (src.trimmed)
        {
            newFrame.setTrim(
                src.sourceSize.w,
                src.sourceSize.h,
                src.spriteSourceSize.x,
                src.spriteSourceSize.y,
                src.spriteSourceSize.w,
                src.spriteSourceSize.h
            );
        }

        if (src.rotated)
        {
            newFrame.rotated = true;
            newFrame.updateUVsInverted();
        }
    }

    return texture;
};

module.exports = JSONHashTextureParser;


/***/ },
/* 339 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parses a Pyxel JSON File and extracts the frame data from it.
*
* @class Phaser.TextureParser.JSONArray
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {object} json - The JSON data from the Texture Atlas. Must be in Pyxel JSON format.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var PyxelTextureParser = function (texture, json)
{
    //  Malformed? There are a few keys to check here.
    var signature = [ 'layers', 'tilewidth', 'tileheight', 'tileswide', 'tileshigh' ];

    signature.forEach(function (key)
    {
        if (!json[key])
        {
            // console.warn('Phaser.AnimationParser.JSONDataPyxel: Invalid Pyxel Tilemap JSON given, missing "' + key + '" key.');
            // console.log(json);
            return;
        }
    });

    // For this purpose, I only care about parsing tilemaps with a single layer.
    if (json['layers'].length !== 1)
    {
        // console.warn('Phaser.AnimationParser.JSONDataPyxel: Too many layers, this parser only supports flat Tilemaps.');
        // console.log(json);
        return;
    }

    var data = new Phaser.FrameData();

    var tileheight = json['tileheight'];
    var tilewidth = json['tilewidth'];

    var frames = json['layers'][0]['tiles'];
    var newFrame;

    for (var i = 0; i < frames.length; i++)
    {
        newFrame = data.addFrame(new Phaser.Frame(
            i,
            frames[i].x,
            frames[i].y,
            tilewidth,
            tileheight,
            "frame_" + i  // No names are included in pyxel tilemap data.
        ));

        // No trim data is included.
        newFrame.setTrim(false);
    }

    return data;
};

module.exports = PyxelTextureParser;


/***/ },
/* 340 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parse a Sprite Sheet and extracts the frame data from it.
*
* @class Phaser.TextureParser.SpriteSheet
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {string} key - The key of the Frame within the Texture that the Sprite Sheet is stored in.
* @param {number} frameWidth - The fixed width of each frame.
* @param {number} frameHeight - The fixed height of each frame.
* @param {number} [startFrame=0] - Skip a number of frames. Useful when there are multiple sprite sheets in one Texture.
* @param {number} [endFrame=-1] - The total number of frames to extract from the Sprite Sheet. The default value of -1 means "extract all frames".
* @param {number} [margin=0] - If the frames have been drawn with a margin, specify the amount here.
* @param {number} [spacing=0] - If the frames have been drawn with spacing between them, specify the amount here.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var SpriteSheetTextureParser = function (texture, sourceIndex, x, y, width, height, frameWidth, frameHeight, startFrame, endFrame, margin, spacing)
{
    if (startFrame === undefined) { startFrame = 0; }
    if (endFrame === undefined) { endFrame = -1; }
    if (margin === undefined) { margin = 0; }
    if (spacing === undefined) { spacing = 0; }

    var row = Math.floor((width - margin) / (frameWidth + spacing));
    var column = Math.floor((height - margin) / (frameHeight + spacing));
    var total = row * column;

    if (startFrame > total || startFrame < -total)
    {
        startFrame = 0;
    }

    if (startFrame < 0)
    {
        //  Allow negative skipframes.
        startFrame = total + startFrame;
    }

    if (endFrame !== -1)
    {
        total = startFrame + (endFrame + 1);
    }

    var fx = margin;
    var fy = margin;
    var ax = 0;
    var ay = 0;

    for (var i = 0; i < total; i++)
    {
        ax = 0;
        ay = 0;

        var w = fx + frameWidth;
        var h = fy + frameHeight;

        if (w > width)
        {
            ax = w - width;
        }

        if (h > height)
        {
            ay = h - height;
        }

        texture.add(i, sourceIndex, x + fx, y + fy, frameWidth - ax, frameHeight - ay);

        fx += frameWidth + spacing;

        if (fx + frameWidth > width)
        {
            fx = margin;
            fy += frameHeight + spacing;
        }
    }

    return texture;
};

module.exports = SpriteSheetTextureParser;


/***/ },
/* 341 */
/***/ function(module, exports) {

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Parses the XML and extracts the frame data from it.
*
* @class Phaser.TextureParser.StarlingXML
* @static
* @param {Phaser.Texture} texture - The parent Texture.
* @param {object} xml - The XML data from the Texture Atlas. Must be in Starling XML format.
* @return {Phaser.FrameData} A FrameData object containing the parsed frames.
*/
var StarlingXMLTextureParser = function (texture, xml)
{
    //  Malformed?
    if (!xml.getElementsByTagName('TextureAtlas'))
    {
        // console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");
        return;
    }

    //  Let's create some frames then
    var data = new Phaser.FrameData();
    var frames = xml.getElementsByTagName('SubTexture');
    var newFrame;

    var name;
    var frame;
    var x;
    var y;
    var width;
    var height;
    var frameX;
    var frameY;
    var frameWidth;
    var frameHeight;

    for (var i = 0; i < frames.length; i++)
    {
        frame = frames[i].attributes;

        name = frame.name.value;
        x = parseInt(frame.x.value, 10);
        y = parseInt(frame.y.value, 10);
        width = parseInt(frame.width.value, 10);
        height = parseInt(frame.height.value, 10);

        frameX = null;
        frameY = null;

        if (frame.frameX)
        {
            frameX = Math.abs(parseInt(frame.frameX.value, 10));
            frameY = Math.abs(parseInt(frame.frameY.value, 10));
            frameWidth = parseInt(frame.frameWidth.value, 10);
            frameHeight = parseInt(frame.frameHeight.value, 10);
        }

        newFrame = data.addFrame(new Phaser.Frame(i, x, y, width, height, name));

        //  Trimmed?
        if (frameX !== null || frameY !== null)
        {
            newFrame.setTrim(true, width, height, frameX, frameY, frameWidth, frameHeight);
        }
    }

    return data;

};

module.exports = StarlingXMLTextureParser;


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {


module.exports = {
    Canvas: __webpack_require__(335),
    Image: __webpack_require__(336),
    SpriteSheet: __webpack_require__(340),
    JSONArray: __webpack_require__(337),
    JSONHash: __webpack_require__(338),
    StarlingXML: __webpack_require__(341),
    Pyxel: __webpack_require__(339)
};


/***/ },
/* 343 */
/***/ function(module, exports) {

/**
* Snaps a value to the nearest value in an array.
* The result will always be in the range `[first_value, last_value]`.
*
* @method
* @param {number} value - The search value
* @param {number[]} arr - The input array which _must_ be sorted.
* @return {number} The nearest value found.
*/
var FindClosestInSorted = function (value, array)
{
    if (!array.length)
    {
        return NaN;
    }
    else if (array.length === 1 || value < array[0])
    {
        return array[0];
    }

    var i = 1;

    while (array[i] < value)
    {
        i++;
    }

    var low = array[i - 1];
    var high = (i < array.length) ? array[i] : Number.POSITIVE_INFINITY;

    return ((high - value) <= (value - low)) ? high : low;
};

module.exports = FindClosestInSorted;


/***/ },
/* 344 */
/***/ function(module, exports) {

/**
* Fetch a random entry from the given array.
*
* Will return null if there are no array items that fall within the specified range
* or if there is no item for the randomly chosen index.
*
* @method
* @param {any[]} objects - An array of objects.
* @param {integer} startIndex - Optional offset off the front of the array. Default value is 0, or the beginning of the array.
* @param {integer} length - Optional restriction on the number of values you want to randomly select from.
* @return {object} The random object that was selected.
*/

var GetRandomElement = function (array, start, length)
{
    if (start === undefined) { start = 0; }
    if (length === undefined) { length = array.length; }

    var randomIndex = start + Math.floor(Math.random() * length);

    return (array[randomIndex] === undefined) ? null : array[randomIndex];
};

module.exports = GetRandomElement;


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

var RoundAwayFromZero = __webpack_require__(63);

/**
* Create an array of numbers (positive and/or negative) progressing from `start`
* up to but not including `end` by advancing by `step`.
*
* If `start` is less than `end` a zero-length range is created unless a negative `step` is specified.
*
* Certain values for `start` and `end` (eg. NaN/undefined/null) are currently coerced to 0;
* for forward compatibility make sure to pass in actual numbers.
*
* @method Phaser.ArrayUtils#numberArrayStep
* @param {number} start - The start of the range.
* @param {number} [end] - The end of the range.
* @param {number} [step=1] - The value to increment or decrement by.
* @returns {Array} Returns the new array of numbers.
* @example
* NumberArrayStep(4);
* // => [0, 1, 2, 3]
*
* NumberArrayStep(1, 5);
* // => [1, 2, 3, 4]
*
* NumberArrayStep(0, 20, 5);
* // => [0, 5, 10, 15]
*
* NumberArrayStep(0, -4, -1);
* // => [0, -1, -2, -3]
*
* NumberArrayStep(1, 4, 0);
* // => [1, 1, 1]
*
* NumberArrayStep(0);
* // => []
*/
var NumberArrayStep = function (start, end, step)
{
    if (start === undefined) { start = 0; }
    if (end === undefined) { end = null; }
    if (step === undefined) { step = 1; }

    if (end === null)
    {
        end = start;
        start = 0;
    }

    var result = [];

    var total = Math.max(RoundAwayFromZero((end - start) / (step || 1)), 0);

    for (var i = 0; i < total; i++)
    {
        result.push(start);
        start += step;
    }

    return result;
};

module.exports = NumberArrayStep;


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

var SpliceOne = __webpack_require__(74);

/**
* Removes a random object from the given array and returns it.
*
* Will return null if there are no array items that fall within the specified range
* or if there is no item for the randomly chosen index.
*
* @method
* @param {any[]} objects - An array of objects.
* @param {integer} startIndex - Optional offset off the front of the array. Default value is 0, or the beginning of the array.
* @param {integer} length - Optional restriction on the number of values you want to randomly select from.
* @return {object} The random object that was removed.
*/

var RemoveRandomElement = function (array, start, length)
{
    if (start === undefined) { start = 0; }
    if (length === undefined) { length = array.length; }

    var randomIndex = start + Math.floor(Math.random() * length);

    return SpliceOne(array, randomIndex);
};

module.exports = RemoveRandomElement;


/***/ },
/* 347 */
/***/ function(module, exports) {

/**
* Moves the element at the start of the array to the end, shifting all items in the process.
* The "rotation" happens to the left.
*
* @method Phaser.ArrayUtils.rotate
* @param {any[]} array - The array to shift/rotate. The array is modified.
* @param {integer} [total=1] - The number of times to shift the array. Only the most recently shifted element is returned.
* @return {any} The shifted value.
*/
var RotateLeft = function (array, total)
{
    if (total === undefined) { total = 1; }

    var element = null;

    for (var i = 0; i < total; i++)
    {
        element = array.shift();
        array.push(element);
    }

    return element;
};

module.exports = RotateLeft;


/***/ },
/* 348 */
/***/ function(module, exports) {

/**
* Moves the element at the end of the array to the start, shifting all items in the process.
* The "rotation" happens to the right.
*
* @param {any[]} array - The array to shift/rotate. The array is modified.
* @param {integer} [total=1] - The number of times to shift the array. Only the most recently shifted element is returned.
* @return {any} The shifted value.
*/
var RotateRight = function (array, total)
{
    if (total === undefined) { total = 1; }

    var element = null;

    for (var i = 0; i < total; i++)
    {
        element = array.pop();
        array.unshift(element);
    }

    return element;
};

module.exports = RotateRight;


/***/ },
/* 349 */
/***/ function(module, exports) {

/**
* A standard Fisher-Yates Array shuffle implementation which modifies the array in place.
*
* @method
* @param {any[]} array - The array to shuffle.
* @return {any[]} The original array, now shuffled.
*/
var Shuffle = function (array)
{
    for (var i = array.length - 1; i > 0; i--)
    {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};

module.exports = Shuffle;


/***/ },
/* 350 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(82);

var CONST = __webpack_require__(1);
var Extend = __webpack_require__(17);

//  This object is exported globally

var Phaser = {

    Game: __webpack_require__(76),

    Event: __webpack_require__(14),
    EventDispatcher: __webpack_require__(15),

    Math: __webpack_require__(81),

    Geom: __webpack_require__(80),

    GameObjects: {

        Factory: __webpack_require__(9)

    },

    Loader: {

        ImageFile: __webpack_require__(16)

    },

    Sound: __webpack_require__(83),

    Utils: {

        Array: __webpack_require__(84),
        Objects: __webpack_require__(85)

    }

};

//  Required, but don't need Phaser level exports

__webpack_require__(77);
__webpack_require__(79);
__webpack_require__(78);

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * “Sometimes, the elegant implementation is just a function.
 * Not a method. Not a class. Not a framework. Just a function.”
 * - John Carmack
 */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ }
/******/ ]);
});