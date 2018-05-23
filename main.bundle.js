/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/frello.png":
/*!***************************!*\
  !*** ./assets/frello.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7fae688048f5157e3ea34535e40f5259.png";

/***/ }),

/***/ "./assets/minesweeper.png":
/*!********************************!*\
  !*** ./assets/minesweeper.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9aaf7032a5cfa72171df4328daf0f6a3.png";

/***/ }),

/***/ "./assets/sam.jpg":
/*!************************!*\
  !*** ./assets/sam.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "35f01e939910ecab7feb608b3f9064de.jpg";

/***/ }),

/***/ "./src/components/about/about.js":
/*!***************************************!*\
  !*** ./src/components/about/about.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./about.scss */ "./src/components/about/about.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden element', id: 'element_2' },
        _react2.default.createElement(
            'div',
            { className: 'hidden-title pb-3' },
            'About Me'
        ),
        _react2.default.createElement(
            'div',
            { className: 'row align-items-top' },
            _react2.default.createElement(
                'div',
                { className: 'col-4 title' },
                _react2.default.createElement(
                    'div',
                    { className: 'float-right pr-5' },
                    _react2.default.createElement(
                        'span',
                        { className: 'title-top-border' },
                        'About Me'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'col about-content' },
                _react2.default.createElement(
                    'p',
                    null,
                    'I started writing code several years ago with ',
                    _react2.default.createElement(
                        'strong',
                        null,
                        'C++'
                    ),
                    '. Now, I build fullstack ',
                    _react2.default.createElement(
                        'strong',
                        null,
                        'JavaScript'
                    ),
                    ' applications using a host of modern technologies. Currently, I work fulltime as a software engineer for ',
                    _react2.default.createElement(
                        'strong',
                        null,
                        'General Dynamics'
                    ),
                    ' where I build applications for the US Centers for Disease Control in ',
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Atlanta, GA'
                    ),
                    '. I have my Bachelor\'s in Electrical Engineering and am working on my Master\'s in Computer Science at Georgia Tech.'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    null,
                    'I\'m driven to develop scalable, clean and efficient code while also delivering an excellent experience to my users. With a passion for people, I seek to impact society through the creation of excellent software with real world functionality.'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    null,
                    'When I\'m off the clock, I enjoy catching waves in the big blue, time spent with my wife or a good book.'
                )
            )
        )
    );
};

exports.default = About;

/***/ }),

/***/ "./src/components/about/about.scss":
/*!*****************************************!*\
  !*** ./src/components/about/about.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/contact/contact.js":
/*!*******************************************!*\
  !*** ./src/components/contact/contact.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./contact.scss */ "./src/components/contact/contact.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact(props) {
    return _react2.default.createElement(
        'div',
        { className: (props.scrollable ? 'element' : '') + ' row align-items-end contact-block', id: '' + (props.scrollable ? 'element_6' : '') },
        _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
                'div',
                { className: 'row justify-content-center mb-3' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-3 p-1 text-center' },
                    _react2.default.createElement(
                        'a',
                        { className: 'contact-link', href: 'mailto:cooper.samuel22@gmail.com' },
                        'EMAIL'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-3 p-1 text-center' },
                    _react2.default.createElement(
                        'a',
                        { className: 'contact-link', target: '_blank', href: 'https://github.com/coopersamuel' },
                        'GITHUB'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-3 p-1 text-center' },
                    _react2.default.createElement(
                        'a',
                        { className: 'contact-link', target: '_blank', href: 'https://www.linkedin.com/in/samuel-cooper-b81945a5/' },
                        'LINKEDIN'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row justify-content-center text-center mb-4' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-8 credits' },
                    _react2.default.createElement(
                        'i',
                        null,
                        'Design + Development by Samuel Cooper, 2018'
                    )
                )
            )
        )
    );
};

exports.default = Contact;

/***/ }),

/***/ "./src/components/contact/contact.scss":
/*!*********************************************!*\
  !*** ./src/components/contact/contact.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/experience/experience.js":
/*!*************************************************!*\
  !*** ./src/components/experience/experience.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./experience.scss */ "./src/components/experience/experience.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Experience = function Experience(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden element', id: 'element_4' },
        _react2.default.createElement(
            'div',
            { className: 'hidden-title pb-3' },
            'Experience'
        ),
        _react2.default.createElement(
            'div',
            { className: 'row align-items-top' },
            _react2.default.createElement(
                'div',
                { className: 'col-4 title' },
                _react2.default.createElement(
                    'div',
                    { className: 'float-right pr-5' },
                    _react2.default.createElement(
                        'span',
                        { className: 'title-top-border' },
                        'Experience'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'col experience-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'experience-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Fullstack Software Engineer'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'In my current role with ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'General Dynamics'
                            ),
                            ', I build high performance, data heavy applications at the ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'CDC'
                            ),
                            ', in Atlanta. These apps are geared toward bioinformatics specific functions at CDC and are of great benefit to the public health. Several of the apps that myself and my team work on have attention from the ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'World Health Organization'
                            ),
                            ' for their potential to aid in the eradication of high profile, worldwide diseases.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'experience-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Software Engineer'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Throughout my time with ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Eaton'
                            ),
                            ', I was involved in the design and implementation of ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'IoT'
                            ),
                            ' lighting solutions. Eaton\'s enterprise solutions help business leaders keep a finger on the pulse of their company by providing insight into power draw and management, usage and location of business assets and more. With Eaton, I was an integral part in the development of ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'web and mobile applications'
                            ),
                            ' that provided a user interface to Eaton\'s complex IoT system.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'experience-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Computer Engineer'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Several years back as a part of a design competition, I led a team of software and electrical engineers in a small project with the goal of developing a ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Bicycle Training Computer'
                            ),
                            '. This computer gathered ride-time data and performed post-ride analysis on the cyclist\'s performance. Cyclists could use the system to track their total mileage, max speed, etc. Out of the five projects entered in the competition, ours won the award for ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'most innovative'
                            ),
                            '.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'experience-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Engineering Intern'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'In an internship with ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Fresenius Kabi'
                            ),
                            ', an international health technologies company, I developed a system for scoring suppliers based on a diverse set of acceptance criteria. I wrote a program to automate the scoring process and save time for the quality engineers that needed to undergo this otherwise tedious process.'
                        )
                    )
                )
            )
        )
    );
};

exports.default = Experience;

/***/ }),

/***/ "./src/components/experience/experience.scss":
/*!***************************************************!*\
  !*** ./src/components/experience/experience.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/intro/intro.js":
/*!***************************************!*\
  !*** ./src/components/intro/intro.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _go = __webpack_require__(/*! react-icons/lib/go */ "./node_modules/react-icons/lib/go/index.js");

var _fa = __webpack_require__(/*! react-icons/lib/fa */ "./node_modules/react-icons/lib/fa/index.js");

var _md = __webpack_require__(/*! react-icons/lib/md */ "./node_modules/react-icons/lib/md/index.js");

__webpack_require__(/*! ./intro.scss */ "./src/components/intro/intro.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function Intro(props) {
    var isScrolled = props.isScrolled;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'intro row align-items-center element', id: 'element_1' },
            _react2.default.createElement(
                'div',
                { className: 'col-6 left-spacer' },
                '\xA0'
            ),
            _react2.default.createElement(
                'div',
                { className: 'col mb-5' },
                _react2.default.createElement(
                    'div',
                    { className: 'intro-title pb-5' },
                    'Hey! I\'m ',
                    _react2.default.createElement(
                        'strong',
                        { className: 'green' },
                        'Sam'
                    ),
                    ','
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'intro-body' },
                    'I\'m a ',
                    _react2.default.createElement(
                        'strong',
                        { className: 'green' },
                        'Fullstack Developer'
                    ),
                    '. I write software to do all sorts of things, everything from intuitive user experiences to complex algorithms.'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'intro-contact pt-5' },
                    _react2.default.createElement(
                        'a',
                        { className: 'icon-link', href: 'mailto:cooper.samuel22@gmail.com' },
                        _react2.default.createElement(_md.MdMailOutline, { className: 'mr-3', size: 30 })
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'icon-link', target: '_blank', href: 'https://github.com/coopersamuel' },
                        _react2.default.createElement(_go.GoMarkGithub, { className: 'mr-3', size: 27 })
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'icon-link', target: '_blank', href: 'https://www.linkedin.com/in/samuel-cooper-b81945a5/' },
                        _react2.default.createElement(_fa.FaLinkedinSquare, { className: 'mr-3', size: 28 })
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'scroll-indicator ' + (isScrolled ? 'hide' : '') },
                _react2.default.createElement(_md.MdKeyboardArrowDown, { size: 50, onScroll: function onScroll(event) {
                        return console.log('scroll');
                    } })
            )
        )
    );
};

exports.default = Intro;

/***/ }),

/***/ "./src/components/intro/intro.scss":
/*!*****************************************!*\
  !*** ./src/components/intro/intro.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/projects/projects.js":
/*!*********************************************!*\
  !*** ./src/components/projects/projects.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./projects.scss */ "./src/components/projects/projects.scss");

var _frello = __webpack_require__(/*! ../../../assets/frello.png */ "./assets/frello.png");

var _frello2 = _interopRequireDefault(_frello);

var _minesweeper = __webpack_require__(/*! ../../../assets/minesweeper.png */ "./assets/minesweeper.png");

var _minesweeper2 = _interopRequireDefault(_minesweeper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function Projects(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden element', id: 'element_5' },
        _react2.default.createElement(
            'div',
            { className: 'hidden-title pb-3' },
            'Personal Projects'
        ),
        _react2.default.createElement(
            'div',
            { className: 'row align-items-top' },
            _react2.default.createElement(
                'div',
                { className: 'col-4 title' },
                _react2.default.createElement(
                    'div',
                    { className: 'float-right pr-5' },
                    _react2.default.createElement(
                        'span',
                        { className: 'title-top-border' },
                        'Personal Projects'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'col project-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'project-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Frello'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Frello (clever name, right?) is a Trello clone, it could be used for tracking todos or managing a project. Creating Frello presented an opportunity for me to flex my JavaScript muscles and learn new technologies such as ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'ReactDnD'
                            ),
                            ' (for drag and drop functionality). This application uses ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Redux'
                            ),
                            ' for application state management. Try tracking some todos with ',
                            _react2.default.createElement(
                                'a',
                                { className: 'link', target: '_blank', href: 'https://coopersamuel.github.io/frello/' },
                                'Frello'
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'React'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Redux'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'ReactDnD'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Webpack'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Bootstrap'
                        ),
                        _react2.default.createElement('img', { className: 'project-mockup mt-3', src: _frello2.default })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'project-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'MinesweeperJS'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'A from-scratch remix of the classic minesweeper game! This was a fun project that involved both UI design/development and some algorithmic chops. Creating an efficient application state that maintained ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'immutability'
                            ),
                            ' was no easy task. Go ahead and give ',
                            _react2.default.createElement(
                                'a',
                                { className: 'link', target: '_blank', href: 'https://coopersamuel.github.io/minesweeperJS/' },
                                'MinesweeperJS'
                            ),
                            ' a go, be careful not to step on any mines!'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'React'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Redux'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Webpack'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Material'
                        ),
                        _react2.default.createElement('img', { className: 'project-mockup mt-3', src: _minesweeper2.default })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'project-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Auth-GraphQL'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'I created Auth-GraphQL to learn the cutting edge new query language ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'GraphQL'
                            ),
                            '. The application itself is simple, but there\'s a lot going on in the backend. Auth-GraphQL gave an opportunity to learn authentication with ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'PassportJS'
                            ),
                            ' as well as create a ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'MongoDB'
                            ),
                            ' interface and understand how to query/mutate the data with GraphQL.'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'GraphQL'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'MongoDB'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Apollo'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Express'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'PassportJS'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'React Router'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'project-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Jamming'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'I created Jamming awhile ago when I was learning ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'React'
                            ),
                            '. Jamming uses Spotify\'s external ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'API'
                            ),
                            ' to allow the user to search for songs and create a playlist. The user can then save the playlist to their Spotify account and listen at their leisure.'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'React'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Axios'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Sass'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'project-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Songwriter'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Songwriter is a simple app that lets the user create a song and add lyrics. The lyrics can then be upvoted or liked by subsequent users. This app persists data in a ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'MongoDB'
                            ),
                            ' instance and uses ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'GraphQL'
                            ),
                            ' to access the database.'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'GraphQL'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'MongoDB'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Apollo'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Express'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'React'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'React Router'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'project-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Five-Day Weather'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'My first go with ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Redux'
                            ),
                            ', five-day weather is an application that grabs weather data from the Open Weather ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'API'
                            ),
                            ' and displays it to the user. All the user needs to do is enter a city or location and Five-Day Weather does the rest.'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'React'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Redux'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Axios'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-5' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'div',
                            { className: 'project-name' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Ravenous'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Ravenous queries the Yelp ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'API'
                            ),
                            ' to find restaurants or businesses based on the user\'s search preferences. Users can filter their search by best match, most reviewed or highest rating for a flexible and powerful search. Ravenous uses ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'React'
                            ),
                            ' on the front-end and ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Axios'
                            ),
                            ' for API calls.'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'React'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Axios'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'tech-item' },
                            'Sass'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row pb-3' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col small-text' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Source code for all of my projects can be viewed on my ',
                            _react2.default.createElement(
                                'a',
                                { className: 'link', target: '_blank', href: 'https://github.com/coopersamuel' },
                                'GitHub'
                            ),
                            ' profile'
                        )
                    )
                )
            )
        )
    );
};

exports.default = Projects;

/***/ }),

/***/ "./src/components/projects/projects.scss":
/*!***********************************************!*\
  !*** ./src/components/projects/projects.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/skills/skills.js":
/*!*****************************************!*\
  !*** ./src/components/skills/skills.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./skills.scss */ "./src/components/skills/skills.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skills = function Skills(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden element', id: 'element_3' },
        _react2.default.createElement(
            'div',
            { className: 'hidden-title pb-3' },
            'Skills'
        ),
        _react2.default.createElement(
            'div',
            { className: 'row align-items-top' },
            _react2.default.createElement(
                'div',
                { className: 'col-4 title' },
                _react2.default.createElement(
                    'div',
                    { className: 'float-right pr-5' },
                    _react2.default.createElement(
                        'span',
                        { className: 'title-top-border' },
                        'Skills'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'col skills-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-3 col-6 pb-4' },
                        _react2.default.createElement(
                            'div',
                            { className: 'skills-category' },
                            'Languages'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'JavaScript'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'TypeScript'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'GraphQL'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'HTML'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'CSS/Sass'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'C/C++'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-3 col-6 pb-4' },
                        _react2.default.createElement(
                            'div',
                            { className: 'skills-category' },
                            'Libraries'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'React'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Redux'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'React Router'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'React Native'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Bootstrap'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Material Design'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Apollo'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Angular'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-3 col-6' },
                        _react2.default.createElement(
                            'div',
                            { className: 'skills-category' },
                            'Backend'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Node'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Express'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'MongoDB'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'REST APIs'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Axios'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-3 col-6' },
                        _react2.default.createElement(
                            'div',
                            { className: 'skills-category' },
                            'Tools'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Babel'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Webpack'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Git'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'Jest'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'skill' },
                            'CI Servers'
                        )
                    )
                )
            )
        )
    );
};

exports.default = Skills;

/***/ }),

/***/ "./src/components/skills/skills.scss":
/*!*******************************************!*\
  !*** ./src/components/skills/skills.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _scrollIntoView = __webpack_require__(/*! scroll-into-view */ "./node_modules/scroll-into-view/scrollIntoView.js");

var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);

var _intro = __webpack_require__(/*! ./components/intro/intro */ "./src/components/intro/intro.js");

var _intro2 = _interopRequireDefault(_intro);

var _about = __webpack_require__(/*! ./components/about/about */ "./src/components/about/about.js");

var _about2 = _interopRequireDefault(_about);

var _skills = __webpack_require__(/*! ./components/skills/skills */ "./src/components/skills/skills.js");

var _skills2 = _interopRequireDefault(_skills);

var _experience = __webpack_require__(/*! ./components/experience/experience */ "./src/components/experience/experience.js");

var _experience2 = _interopRequireDefault(_experience);

var _projects = __webpack_require__(/*! ./components/projects/projects */ "./src/components/projects/projects.js");

var _projects2 = _interopRequireDefault(_projects);

var _contact = __webpack_require__(/*! ./components/contact/contact */ "./src/components/contact/contact.js");

var _contact2 = _interopRequireDefault(_contact);

__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");

var _sam = __webpack_require__(/*! ../assets/sam.jpg */ "./assets/sam.jpg");

var _sam2 = _interopRequireDefault(_sam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            isScrolled: false,
            location: "element_1"
        };

        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.checkPosition = _this.checkPosition.bind(_this);
        _this.scrollToLocation = _this.scrollToLocation.bind(_this);
        _this.setLocationOnScroll = _this.setLocationOnScroll.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'handleScroll',
        value: function handleScroll() {
            if (window.scrollY && !this.state.isScrolled) {
                this.setState({ isScrolled: true });
            } else if (!window.scrollY) {
                this.setState({ isScrolled: false });
            }

            this.checkPosition();
            this.setLocationOnScroll();
        }
    }, {
        key: 'checkPosition',
        value: function checkPosition() {
            var elements = document.getElementsByClassName('hidden');
            var windowHeight = window.innerHeight;

            _lodash2.default.forEach(elements, function (element) {
                if (element) {
                    var posFromTop = element.getBoundingClientRect().top;
                    if (posFromTop - windowHeight <= -150) {
                        element.className = element.className.replace('hidden', 'fade-in-element');
                    }
                }
            });
        }
    }, {
        key: 'scrollToLocation',
        value: function scrollToLocation(location) {
            var element = document.getElementById(location);

            (0, _scrollIntoView2.default)(element, {
                time: 400,
                ease: function ease(value) {
                    return 1 - Math.pow(1 - value, value / 5);
                }
            });
        }
    }, {
        key: 'setLocationOnScroll',
        value: function setLocationOnScroll() {
            var _this2 = this;

            var elements = document.getElementsByClassName('element');
            var windowHeight = window.innerHeight;

            _lodash2.default.forEach(elements, function (element) {
                if (element) {
                    var posFromTop = element.getBoundingClientRect().top;
                    if (posFromTop - windowHeight <= -200) {
                        // Set the location in the state
                        if (_this2.state.location !== element.id) {
                            _this2.setState({ location: element.id });
                        }
                    }
                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
            this.checkPosition(); // Run this once just to make sure the element is already in view when the component is mounted
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'green-block' },
                    '\xA0'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-9' },
                            _react2.default.createElement(_intro2.default, { isScrolled: this.state.isScrolled }),
                            _react2.default.createElement(_about2.default, null),
                            _react2.default.createElement(
                                'div',
                                { className: 'spacer' },
                                '\xA0'
                            ),
                            _react2.default.createElement(_skills2.default, null),
                            _react2.default.createElement(
                                'div',
                                { className: 'spacer' },
                                '\xA0'
                            ),
                            _react2.default.createElement(_experience2.default, null),
                            _react2.default.createElement(
                                'div',
                                { className: 'spacer' },
                                '\xA0'
                            ),
                            _react2.default.createElement(_projects2.default, null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col hidden-contact-info' },
                            _react2.default.createElement(_contact2.default, { scrollable: false })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-content-left' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col contact-info' },
                            _react2.default.createElement(_contact2.default, { scrollable: true })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col m-0 p-0' },
                            _react2.default.createElement('img', { className: 'sam-photo', src: _sam2.default })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navigation' },
                        _react2.default.createElement(
                            'div',
                            { className: 'dots-container' },
                            _react2.default.createElement('div', { className: 'dot ' + (this.state.location === 'element_1' ? 'filled-in' : ''),
                                onClick: function onClick() {
                                    return _this3.scrollToLocation('element_' + 1);
                                } }),
                            _react2.default.createElement('div', { className: 'dot ' + (this.state.location === 'element_2' ? 'filled-in' : ''),
                                onClick: function onClick() {
                                    return _this3.scrollToLocation('element_' + 2);
                                } }),
                            _react2.default.createElement('div', { className: 'dot ' + (this.state.location === 'element_3' ? 'filled-in' : ''),
                                onClick: function onClick() {
                                    return _this3.scrollToLocation('element_' + 3);
                                } }),
                            _react2.default.createElement('div', { className: 'dot ' + (this.state.location === 'element_4' ? 'filled-in' : ''),
                                onClick: function onClick() {
                                    return _this3.scrollToLocation('element_' + 4);
                                } }),
                            _react2.default.createElement('div', { className: 'dot ' + (this.state.location === 'element_5' ? 'filled-in' : ''),
                                onClick: function onClick() {
                                    return _this3.scrollToLocation('element_' + 5);
                                } }),
                            _react2.default.createElement('div', { className: 'dot ' + (this.state.location === 'element_6' ? 'filled-in' : ''),
                                onClick: function onClick() {
                                    return _this3.scrollToLocation('element_' + 6);
                                } })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! /Users/cooper/Documents/projects/portfolio/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map