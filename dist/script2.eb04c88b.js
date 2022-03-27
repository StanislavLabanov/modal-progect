// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/image.png":[function(require,module,exports) {
module.exports = "/image.90ac9039.png";
},{}],"utilis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.block = block;
exports.col = col;
exports.css = css;
exports.row = row;

function row(content, styles) {
  return "<div class=\"row\" style=\"".concat(styles, "\">").concat(content, "</div>");
}

function col(content) {
  return "<div class=\"col-sm\">".concat(content, "</div>");
}

function css(styles) {
  if (typeof styles === 'string') return styles;
  var key = [];

  for (var keys in styles) {
    key.push(keys + ': ' + styles[keys]);
  }

  return key.join('; ');
}

function block(type) {
  return "\n   <form name=\"".concat(type, "\">\n      <h5>").concat(type, "</h5>\n         <div class=\"form-group\">\n            <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\" style=\"margin-bottom: 20px\">  \n         </div>\n         <div class=\"form-group\">\n            <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\" style=\"margin-bottom: 20px\">  \n         </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\">Submit</button>\n   </form>\n   <hr />\n   ");
}
},{}],"classes/blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBlock = exports.TextBlock = exports.ImageBlock = exports.ColumsBlock = void 0;

var _utilis = require("../utilis");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(value, options) {
    _classCallCheck(this, Block);

    this.value = value;
    this.options = options;
  }

  _createClass(Block, [{
    key: "toHtml",
    value: function toHtml() {
      throw new Error('Метод toHTML должен быть реализован');
    }
  }]);

  return Block;
}();

var TitleBlock = /*#__PURE__*/function (_Block) {
  _inherits(TitleBlock, _Block);

  var _super = _createSuper(TitleBlock);

  function TitleBlock(value, options) {
    _classCallCheck(this, TitleBlock);

    return _super.call(this, value, options);
  }

  _createClass(TitleBlock, [{
    key: "toHtml",
    value: function toHtml() {
      var tag = this.options.tag;
      var styles = this.options.styles;
      return (0, _utilis.row)((0, _utilis.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), (0, _utilis.css)(styles));
    }
  }]);

  return TitleBlock;
}(Block);

exports.TitleBlock = TitleBlock;

var ImageBlock = /*#__PURE__*/function (_Block2) {
  _inherits(ImageBlock, _Block2);

  var _super2 = _createSuper(ImageBlock);

  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);

    return _super2.call(this, value, options);
  }

  _createClass(ImageBlock, [{
    key: "toHtml",
    value: function toHtml() {
      var imageStyles = this.options.imageStyles;
      var alt = this.options.alt;
      var styles = this.options.styles;
      return (0, _utilis.row)("<img src=\"".concat(this.value, "\" alt=\"").concat(alt, "\" style=\"").concat((0, _utilis.css)(imageStyles), "\"/>"), (0, _utilis.css)(styles));
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;

var ColumsBlock = /*#__PURE__*/function (_Block3) {
  _inherits(ColumsBlock, _Block3);

  var _super3 = _createSuper(ColumsBlock);

  function ColumsBlock(value, options) {
    _classCallCheck(this, ColumsBlock);

    return _super3.call(this, value, options);
  }

  _createClass(ColumsBlock, [{
    key: "toHtml",
    value: function toHtml() {
      var html = this.value.map(function (item) {
        return (0, _utilis.col)(item);
      });
      return (0, _utilis.row)(html.join(''), (0, _utilis.css)(this.options.styles));
    }
  }]);

  return ColumsBlock;
}(Block);

exports.ColumsBlock = ColumsBlock;

var TextBlock = /*#__PURE__*/function (_Block4) {
  _inherits(TextBlock, _Block4);

  var _super4 = _createSuper(TextBlock);

  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);

    return _super4.call(this, value, options);
  }

  _createClass(TextBlock, [{
    key: "toHtml",
    value: function toHtml() {
      return (0, _utilis.row)((0, _utilis.col)("<p>".concat(this.value, "</p>")), (0, _utilis.css)(this.options.styles));
    }
  }]);

  return TextBlock;
}(Block);

exports.TextBlock = TextBlock;
},{"../utilis":"utilis.js"}],"modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modal = void 0;

var _image = _interopRequireDefault(require("./assets/image.png"));

var _blocks = require("./classes/blocks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = "\nQuickly design and customize responsive mobile-first sites with Bootstrap, the world\u2019s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.\n";
var modal = [new _blocks.TitleBlock('Конструктор сайтов на JavaScript', {
  tag: 'h1',
  styles: {
    background: 'linear-gradient(to right, #ff0099, #493240)',
    color: '#fff',
    'text-align': 'center',
    padding: '1.5rem'
  }
}), new _blocks.ImageBlock(_image.default, {
  styles: {
    padding: '2rem 0',
    display: 'flex',
    'justify-content': 'center'
  },
  imageStyles: {
    width: '500px',
    height: 'auto'
  },
  alt: 'Это картинка'
}), new _blocks.ColumsBlock(['Quickly design and customize responsive mobile-first sites with Bootstrap', 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular', 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular'], {
  styles: {
    background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
    padding: '2rem',
    color: '#fff',
    'font-weight': 'bold'
  }
}), new _blocks.TextBlock(text, {
  styles: {
    background: 'linear-gradient(to left, #f2994a, #f2c94c)',
    padding: '1rem',
    'font-weight': 'bold'
  }
})];
exports.modal = modal;
},{"./assets/image.png":"assets/image.png","./classes/blocks":"classes/blocks.js"}],"classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);

    this.el = document.querySelector(selector);
  }

  _createClass(Site, [{
    key: "render",
    value: function render(modal) {
      var _this = this;

      this.el.innerHTML = '';
      modal.forEach(function (block) {
        _this.el.insertAdjacentHTML('beforeend', block.toHtml());
      });
    }
  }]);

  return Site;
}();

exports.Site = Site;
},{}],"classes/sitebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sitebar = void 0;

var _utilis = require("../utilis");

var _blocks = require("./blocks");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Sitebar = /*#__PURE__*/function () {
  function Sitebar(selector, updateCallBack) {
    _classCallCheck(this, Sitebar);

    this.el = document.querySelector(selector);
    this.init();
    this.update = updateCallBack;
  }

  _createClass(Sitebar, [{
    key: "init",
    value: function init() {
      this.el.insertAdjacentHTML('afterbegin', this.template);
      this.el.addEventListener('submit', this.add.bind(this));
    }
  }, {
    key: "template",
    get: function get() {
      return [(0, _utilis.block)('text'), (0, _utilis.block)('title')].join('');
    }
  }, {
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var type = event.target.name;
      var value = event.target.value.value;
      var styles = event.target.styles.value;
      var newBlock = type === 'text' ? newBlock = new _blocks.TextBlock(value, {
        styles: styles
      }) : newBlock = new _blocks.TitleBlock(value, {
        styles: styles
      });
      this.update(newBlock);
      event.target.value.value = '';
      event.target.styles.value = '';
    }
  }]);

  return Sitebar;
}();

exports.Sitebar = Sitebar;
},{"../utilis":"utilis.js","./blocks":"classes/blocks.js"}],"classes/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _site = require("./site");

var _sitebar = require("./sitebar");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(modal) {
    _classCallCheck(this, App);

    this.modal = modal;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var site = new _site.Site('#site');
      site.render(this.modal);

      var updateCallBack = function updateCallBack(newBlock) {
        _this.modal.push(newBlock);

        site.render(_this.modal);
      };

      new _sitebar.Sitebar('#panel', updateCallBack);
    }
  }]);

  return App;
}();

exports.App = App;
},{"./site":"classes/site.js","./sitebar":"classes/sitebar.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/style2.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"script2.js":[function(require,module,exports) {
"use strict";

var _modal = require("./modal");

var _app = require("./classes/app");

require("./styles/style2.css");

new _app.App(_modal.modal).init();
},{"./modal":"modal.js","./classes/app":"classes/app.js","./styles/style2.css":"styles/style2.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58149" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script2.js"], null)
//# sourceMappingURL=/script2.eb04c88b.js.map