/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controller = __webpack_require__(1);

var _controller2 = _interopRequireDefault(_controller);

var _model = __webpack_require__(2);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(3);

var _view2 = _interopRequireDefault(_view);

var _observer = __webpack_require__(5);

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*window.addEventListener('DOMContentLoaded', function () {
  let model = new game.Model(),
    view = new game.View(),
    controller = new game.Controller(model, view);

  controller.init();
}, false);*/
window.addEventListener('load', function () {
  var observer = new _observer2.default();
  var model = new _model2.default();
  var view = new _view2.default(observer);
  var controller = new _controller2.default(observer, model, view);

  controller.init();
}, false);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller(observer, model, view) {
    _classCallCheck(this, Controller);

    this._model = model;
    this._view = view;
    this._observer = observer;
  }

  _createClass(Controller, [{
    key: 'showMessage',
    value: function showMessage(message) {
      console.log(message);
    }
  }, {
    key: 'init',
    value: function init() {
      this._model.init();
      this._view.init();
      this._observer.attachHandler(this, 'shuffleButtonPressed', this.showMessage);
    }
  }]);

  return Controller;
}();
/*(function (window) {
  function Controller(model, view) {
    this._model = model;
    this._view = view;
  }
  
  Controller.prototype.init = function () {
    var self = this;

    self._model.init();
    self._view.init();
    self._view.renderItems( self._model.items() );
    self._view.renderStatistic( self._model.count() );
    self._registerHandlers();
  };
  
  Controller.prototype._registerHandlers = function () {
    let self = this;

    Observer.attachHandler(null, 'arrowKeyPressed', function (direction) {
      self._model.makeMove(direction);
    });

    Observer.attachHandler(null, 'itemsSwapped', function (previousPosition, currentPosition) {
      self._view.moveBlock(previousPosition, currentPosition);
      self._view.renderStatistic( self._model.count() );
    });

    Observer.attachHandler(null, 'shuffleButtonPressed', function (movesArray) {
      self._model.shufflePuzzleDeck(movesArray);
      self._view.renderItems( self._model.items() );
      self._view.renderStatistic( self._model.count() );
    });
  };

  window.game = window.game || {};
  window.game.Controller = Controller;
})(window);*/


exports.default = Controller;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);
  }

  _createClass(Model, [{
    key: 'init',
    value: function init() {
      console.log('hello I\'m Model');
    }
  }]);

  return Model;
}();

/*(function (window) {

  function Model() {
    this._matrixSize = null;
    this._items = []; 
    this._possibleMoves = { left: [], up: [], right: [], down: [] };
    this._targetItemPosition = [];
    this._movesCount = 0;
  }

  Model.prototype.matrixSize = function (value) {
    if (value) {
      this._matrixSize = value; 
      return;
    }

    return this._matrixSize;
  };

  Model.prototype.items = function (value) {
    if (value) {
      this._items = value; 
      return;
    }

    return this._items;
  };
  
  Model.prototype.targetItemPosition = function (value) {
    if (value) {
      this._targetItemPosition = value;
      return;
    } 

    return this._targetItemPosition;
  };

  Model.prototype._loadDefaults = function () {
    this.matrixSize(GAME_DEFAULTS.MATRIX_SIZE);
    this.items(GAME_DEFAULTS.ITEMS);
    this.targetItemPosition(GAME_DEFAULTS.TARGET_ITEM_POSITION);
    this._calculatePossibleMoves();
  };

  Model.prototype._calculatePossibleMoves = function () {
    let targetItemPosition = this.targetItemPosition();

    this._possibleMoves.left = [targetItemPosition[0], targetItemPosition[1] - 1];
    this._possibleMoves.up = [targetItemPosition[0] - 1, targetItemPosition[1]];
    this._possibleMoves.right = [targetItemPosition[0], targetItemPosition[1] + 1];
    this._possibleMoves.down = [targetItemPosition[0] + 1, targetItemPosition[1]];
  };

  Model.prototype._getPossibleMoves = function () {
    return this._possibleMoves;
  };

  Model.prototype.count = function (param) {
    if (param === 'refresh') {
      this._movesCount = 0;
    } else if (param === 'increment') {
      this._movesCount++;
    } else {
      return this._movesCount;
    }
  };

  Model.prototype._swapItems = function (direction) {
    let oldPosition = this.targetItemPosition();
    let directionIndex = this._getPossibleMoves()[direction],
      directionRow = directionIndex[0],
      directionColumn = directionIndex[1],
      items = this.items(),
      directionItem = items[directionRow] ? items[directionRow][directionColumn] : undefined;

    if (directionItem) {
      let newPosition = items._2dSwap( oldPosition, [directionRow, directionColumn] );
      this.targetItemPosition(newPosition);
      this._calculatePossibleMoves();
      
      return [newPosition, oldPosition];
    } else {
      return false;
    }
  };
    
  Model.prototype.makeMove = function (direction) {
    let viewData = this._swapItems(direction);

    if (viewData) {
      this.count('increment');
      Observer.callTrigger('itemsSwapped', viewData);
    }
  };

  Model.prototype.shufflePuzzleDeck = function (directions) {
    let self = this;

    directions.forEach(directionString => {
      self._swapItems(directionString);
    });

    self.count('refresh');
  };

  Model.prototype.init = function () {
    this._loadDefaults();
  };

  window.game = window.game || {};
  window.game.Model = Model;
})(window);*/


exports.default = Model;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View(observer) {
    _classCallCheck(this, View);

    this._observer = observer;
  }

  _createClass(View, [{
    key: '_cacheTheDom',
    value: function _cacheTheDom() {
      return {
        root: _helpers._h.qs('#root'),
        body: _helpers._h.qs('body'),
        statistic: _helpers._h.qs('#statistic', this.body),
        shuffleButton: _helpers._h.qs('#makeShuffle', this.body)
      };
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this = this;

      var pageElements = this._cacheTheDom();

      pageElements.shuffleButton.addEventListener('click', function (event) {
        _this._observer.callTrigger('shuffleButtonPressed', ['hello'], null);
      }, false);
    }
  }, {
    key: 'init',
    value: function init() {
      this._bindEvents();
    }
  }]);

  return View;
}();

/*(function (window) {
  let pageElements = null;
  
  function View() {}

  View.prototype.renderItems = function (items) {
    let self = this;
    let _fragment = _h.cdf(); 
    
    for (let row = 0, rows = items.length; row < rows; row += 1) {
      for (let column = 0, columns = items[row].length; column < columns; column += 1) {
        if (items[row][column] != ' ') {
          _fragment.appendChild( self._createItemNode(row, column, items[row][column]) );
        }
      }
    }

    pageElements.root.innerHTML = '';
    pageElements.root.appendChild( _fragment );
  };

  View.prototype.renderStatistic = function (movesCount) {
    let movesCountNode = _h.qs('.statistic__moves-value');
    movesCountNode.textContent = movesCount;
  };
  
  View.prototype._createItemNode = function (currentRow, currentColumn, innerValue) {
    let itemNode = _h.ce('div');

    itemNode.dataset.row = currentRow;
    itemNode.dataset.column = currentColumn;
    itemNode.dataset.value = innerValue;
    itemNode.className = 'item';
    
    return itemNode; 
  };

  View.prototype._cacheTheDom = function () {
    pageElements = {
          };
  };

  View.prototype._getDirectionFromKeyCode = function (keyCode) {
    switch (keyCode) {
      case KEY.LEFT:
        return 'right';
        break;

      case KEY.UP:
        return 'down';
        break;

      case KEY.RIGHT:
        return 'left';
        break;

      case KEY.DOWN:
        return 'up';
        break;

      default:
        break;
    }
  };

  View.prototype.generateMovesArray = function (count) {
    let self = this,
      movesArray = [];

    for (let i = 0; i < count; i += 1) {
      movesArray.push( self._getDirectionFromKeyCode(generateKeyCode(KEY.LEFT, KEY.DOWN + 1)) );
    }
    
    function generateKeyCode(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return movesArray;
  };

  View.prototype.moveBlock = function (previousPosition, currentPosition) {
    let elementToMove = _h.qs(`.item[data-row="${previousPosition[0]}"][data-column="${previousPosition[1]}"]`, pageElements.root);
    
    if (elementToMove != null) {
      elementToMove.dataset.row = currentPosition[0];
      elementToMove.dataset.column = currentPosition[1];
    }
  }

  View.prototype._bindEvents = function () {
    let self = this;

    window.addEventListener('keydown', event => {
      let keyCode = event.keyCode,
        direction = self._getDirectionFromKeyCode( event.keyCode ); 

      if (keyCode >= 37 && keyCode <= 40) {
        Observer.callTrigger('arrowKeyPressed', direction, null); 
      }
    }, false);

    pageElements.shuffleButton.addEventListener('click', event => {
      let movesArray = self.generateMovesArray(400);

      Observer.callTrigger('shuffleButtonPressed', [movesArray], null);
    }, false);
  }
  
  View.prototype.init = function () {
    this._cacheTheDom();
    this._bindEvents();
  };
  
  window.game = window.game || {};
  window.game.View = View;
})(window);*/


exports.default = View;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _h = exports._h = {
  qs: function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  },
  qsa: function qsa(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  cdf: function cdf() {
    return document.createDocumentFragment();
  },
  ce: function ce(nodeString) {
    return document.createElement(nodeString);
  }
};

var _2dSwap = exports._2dSwap = function _2dSwap(array, a, b) {
  array[a[0]][a[1]] = [array[b[0]][b[1]], array[b[0]][b[1]] = array[a[0]][a[1]]][0];

  return b;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = function () {
  function Observer(owner, triggerName, handler) {
    _classCallCheck(this, Observer);

    this._handlers = [];
  }

  _createClass(Observer, [{
    key: "attachHandler",
    value: function attachHandler(owner, triggerName, handler) {
      this._handlers.push({
        owner: owner,
        triggerName: triggerName,
        handler: handler
      });
    }
  }, {
    key: "callTrigger",
    value: function callTrigger(triggerName, args, callback) {
      for (var i = 0, end = this._handlers.length; i < end; i += 1) {
        if (triggerName === this._handlers.triggerName) {
          this._handlers[i].handler.apply(this._nandlers[i].owner, [].concat(args));
        }
      }

      callback && callback();
    }
  }]);

  return Observer;
}();

exports.default = Observer;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map