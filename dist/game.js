(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });

var BootState = function (_Phaser$State) {
    _inherits(BootState, _Phaser$State);

    function BootState() {
        _classCallCheck(this, BootState);

        return _possibleConstructorReturn(this, (BootState.__proto__ || Object.getPrototypeOf(BootState)).call(this));
    }

    _createClass(BootState, [{
        key: "init",
        value: function init() {
            // scale to fit screen
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceLandscape = true;
            this.game.scale.windowConstraints.bottom = 'visual'; // make sure it doesn't go over screen height
            this.game.scale.refresh();
            // keep pixels sharp
            this.game.antialias = false;
            this.game.stage.smoothed = false;
            Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
        }
    }, {
        key: "update",
        value: function update() {
            this.game.state.start('game');
        }
    }]);

    return BootState;
}(Phaser.State);

exports.BootState = BootState;

},{}],2:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var BootState_1 = require("./BootState");
var GameState_1 = require("./GameState");

var EcsPong = function () {
    function EcsPong() {
        _classCallCheck(this, EcsPong);

        this._game = new Phaser.Game({
            width: 1024,
            height: 576,
            renderer: Phaser.AUTO,
            parent: 'game-container'
        });
    }

    _createClass(EcsPong, [{
        key: "start",
        value: function start() {
            this._game.state.add('boot', new BootState_1.BootState());
            this._game.state.add('game', new GameState_1.GameState());
            this._game.state.start('boot');
        }
    }]);

    return EcsPong;
}();

exports.EcsPong = EcsPong;

},{"./BootState":1,"./GameState":3}],3:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./base");
var index_2 = require("./base");
var index_3 = require("./base");
var index_4 = require("./base");
var index_5 = require("./base");
var index_6 = require("./base");
var index_7 = require("./base");
var index_8 = require("./base");
var index_9 = require("./phaser");
var index_10 = require("./pong");

var GameState = function (_Phaser$State) {
    _inherits(GameState, _Phaser$State);

    function GameState() {
        _classCallCheck(this, GameState);

        return _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).apply(this, arguments));
    }

    _createClass(GameState, [{
        key: "init",
        value: function init() {
            var font = new index_5.BaseBitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt', 32);
            var entities = new index_2.BaseEntityPool().createMany([new index_10.Score(new index_4.BasePosition(0.25 * this.game.world.width - 2 * font.size(), 4 * font.size()), font), new index_10.Score(new index_4.BasePosition(0.75 * this.game.world.width - 2 * font.size(), 4 * font.size()), font)]);
            this.ecs = new index_1.BaseWorld(entities, new index_3.BaseSystemCollection([new index_9.PhaserBitmapTextSystem(entities, this.game.load, this.game.add)]));
        }
    }, {
        key: "preload",
        value: function preload() {
            new index_8.PhaseExecute(this.ecs.systems(), index_6.Load.ID).execute();
        }
    }, {
        key: "create",
        value: function create() {
            new index_8.PhaseExecute(this.ecs.systems(), index_7.Start.ID).execute();
        }
    }]);

    return GameState;
}(Phaser.State);

exports.GameState = GameState;

},{"./base":19,"./phaser":41,"./pong":49}],4:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../id");

var BaseComponentId = function (_index_1$BaseId) {
  _inherits(BaseComponentId, _index_1$BaseId);

  function BaseComponentId() {
    _classCallCheck(this, BaseComponentId);

    return _possibleConstructorReturn(this, (BaseComponentId.__proto__ || Object.getPrototypeOf(BaseComponentId)).apply(this, arguments));
  }

  return BaseComponentId;
}(index_1.BaseId);

exports.BaseComponentId = BaseComponentId;

},{"../id":18}],5:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../system");

var ComponentDuplicateError = function (_index_1$DuplicateErr) {
    _inherits(ComponentDuplicateError, _index_1$DuplicateErr);

    function ComponentDuplicateError() {
        var _ref;

        _classCallCheck(this, ComponentDuplicateError);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = ComponentDuplicateError.__proto__ || Object.getPrototypeOf(ComponentDuplicateError)).call.apply(_ref, [this].concat(args)));
    }

    return ComponentDuplicateError;
}(index_1.DuplicateError);

exports.ComponentDuplicateError = ComponentDuplicateError;

},{"../../system":56}],6:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../system");

var ComponentNotFoundError = function (_index_1$NotFoundErro) {
    _inherits(ComponentNotFoundError, _index_1$NotFoundErro);

    function ComponentNotFoundError() {
        var _ref;

        _classCallCheck(this, ComponentNotFoundError);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = ComponentNotFoundError.__proto__ || Object.getPrototypeOf(ComponentNotFoundError)).call.apply(_ref, [this].concat(args)));
    }

    return ComponentNotFoundError;
}(index_1.NotFoundError);

exports.ComponentNotFoundError = ComponentNotFoundError;

},{"../../system":56}],7:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseComponentId"));
__export(require("./ComponentDuplicateError"));
__export(require("./ComponentNotFoundError"));

},{"./BaseComponentId":4,"./ComponentDuplicateError":5,"./ComponentNotFoundError":6}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../component");
var index_2 = require("../component");

var BaseEntity = function () {
    function BaseEntity(id) {
        var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();

        _classCallCheck(this, BaseEntity);

        this.components = components;
        this.entityId = id;
    }

    _createClass(BaseEntity, [{
        key: "id",
        value: function id() {
            return this.entityId;
        }
    }, {
        key: "attach",
        value: function attach(component) {
            if (this.components.has(component.id())) {
                throw new index_2.ComponentDuplicateError();
            }
            this.components.set(component.id(), component);
            return this;
        }
    }, {
        key: "attachMany",
        value: function attachMany(components) {
            var _this = this;

            components.forEach(function (component) {
                _this.attach(component);
            });
            return this;
        }
    }, {
        key: "detach",
        value: function detach(id) {
            this.components.delete(id);
            return this;
        }
    }, {
        key: "has",
        value: function has(components) {
            var _this2 = this;

            return components.every(function (id) {
                return _this2.components.has(id);
            });
        }
    }, {
        key: "get",
        value: function get(component) {
            if (!this.components.has(component)) {
                throw new index_1.ComponentNotFoundError();
            }
            return this.components.get(component);
        }
    }]);

    return BaseEntity;
}();

exports.BaseEntity = BaseEntity;

},{"../component":7}],9:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../id");

var BaseEntityId = function (_index_1$BaseId) {
  _inherits(BaseEntityId, _index_1$BaseId);

  function BaseEntityId() {
    _classCallCheck(this, BaseEntityId);

    return _possibleConstructorReturn(this, (BaseEntityId.__proto__ || Object.getPrototypeOf(BaseEntityId)).apply(this, arguments));
  }

  return BaseEntityId;
}(index_1.BaseId);

exports.BaseEntityId = BaseEntityId;

},{"../id":18}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("./index");

var BaseEntityPool = function () {
    function BaseEntityPool() {
        _classCallCheck(this, BaseEntityPool);

        this.pool = [];
    }

    _createClass(BaseEntityPool, [{
        key: "getNewId",
        value: function getNewId() {
            return new index_2.BaseEntityId(this.pool.length + '');
        }
    }, {
        key: "create",
        value: function create(components) {
            var entity = new index_1.BaseEntity(this.getNewId(), new Map(components.map(function (component) {
                return [component.id(), component];
            })));
            this.pool.push(entity);
            return entity;
        }
    }, {
        key: "createMany",
        value: function createMany(prefabs) {
            var _this = this;

            prefabs.forEach(function (prefab) {
                _this.create(prefab.create());
            });
            return this;
        }
    }, {
        key: "entities",
        value: function entities() {
            return this.pool;
        }
    }]);

    return BaseEntityPool;
}();

exports.BaseEntityPool = BaseEntityPool;

},{"./index":13}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");

var ComponentSearch = function () {
    function ComponentSearch(id) {
        var entitySearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new index_1.EntitySearch(id);

        _classCallCheck(this, ComponentSearch);

        this.id = id;
        this.entitySearch = entitySearch;
    }

    _createClass(ComponentSearch, [{
        key: "find",
        value: function find(pool) {
            var _this = this;

            return this.entitySearch.find(pool).map(function (entity) {
                return entity.get(_this.id);
            });
        }
    }]);

    return ComponentSearch;
}();

exports.ComponentSearch = ComponentSearch;

},{"./index":13}],12:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var EntitySearch = function () {
    function EntitySearch(ids) {
        _classCallCheck(this, EntitySearch);

        this.ids = ids && ids.constructor === Array ? ids : [ids];
    }

    _createClass(EntitySearch, [{
        key: "find",
        value: function find(pool) {
            var _this = this;

            return pool.entities().filter(function (entity) {
                return entity.has(_this.ids);
            });
        }
    }]);

    return EntitySearch;
}();

exports.EntitySearch = EntitySearch;

},{}],13:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseEntity"));
__export(require("./BaseEntityId"));
__export(require("./BaseEntityPool"));
__export(require("./ComponentSearch"));
__export(require("./EntitySearch"));

},{"./BaseEntity":8,"./BaseEntityId":9,"./BaseEntityPool":10,"./ComponentSearch":11,"./EntitySearch":12}],14:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BaseBitmapFont = function () {
    function BaseBitmapFont(key, imagePath, atlasPath, size) {
        _classCallCheck(this, BaseBitmapFont);

        this.key = key;
        this.imagePath = imagePath;
        this.atlasPath = atlasPath;
        this.fontSize = size;
    }

    _createClass(BaseBitmapFont, [{
        key: "id",
        value: function id() {
            return this.key;
        }
    }, {
        key: "image",
        value: function image() {
            return this.imagePath;
        }
    }, {
        key: "atlas",
        value: function atlas() {
            return this.atlasPath;
        }
    }, {
        key: "size",
        value: function size() {
            return this.fontSize;
        }
    }]);

    return BaseBitmapFont;
}();

exports.BaseBitmapFont = BaseBitmapFont;

},{}],15:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../entity");
var index_2 = require("../text");

var BitmapFontSearch = function () {
    function BitmapFontSearch() {
        var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new index_1.ComponentSearch(index_2.BaseBitmapText.ID);

        _classCallCheck(this, BitmapFontSearch);

        this.search = search;
    }

    _createClass(BitmapFontSearch, [{
        key: "find",
        value: function find(pool) {
            return [].concat(_toConsumableArray(new Set( // unique set
            this.search.find(pool).map(function (text) {
                return text.font();
            }))));
        }
    }]);

    return BitmapFontSearch;
}();

exports.BitmapFontSearch = BitmapFontSearch;

},{"../entity":13,"../text":35}],16:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseBitmapFont"));
__export(require("./BitmapFontSearch"));

},{"./BaseBitmapFont":14,"./BitmapFontSearch":15}],17:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BaseId = function () {
    function BaseId(id) {
        _classCallCheck(this, BaseId);

        this.id = id instanceof Object ? id.print() : id + '';
    }

    _createClass(BaseId, [{
        key: "print",
        value: function print() {
            return this.id;
        }
    }]);

    return BaseId;
}();

exports.BaseId = BaseId;

},{}],18:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseId"));

},{"./BaseId":17}],19:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./component/index"));
__export(require("./entity/index"));
__export(require("./font/index"));
__export(require("./id/index"));
__export(require("./phase/index"));
__export(require("./position/index"));
__export(require("./system/index"));
__export(require("./text/index"));
__export(require("./world/index"));

},{"./component/index":7,"./entity/index":13,"./font/index":16,"./id/index":18,"./phase/index":25,"./position/index":27,"./system/index":31,"./text/index":35,"./world/index":37}],20:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../id");

var BasePhaseId = function (_index_1$BaseId) {
  _inherits(BasePhaseId, _index_1$BaseId);

  function BasePhaseId() {
    _classCallCheck(this, BasePhaseId);

    return _possibleConstructorReturn(this, (BasePhaseId.__proto__ || Object.getPrototypeOf(BasePhaseId)).apply(this, arguments));
  }

  return BasePhaseId;
}(index_1.BaseId);

exports.BasePhaseId = BasePhaseId;

},{"../id":18}],21:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BasePhasePool = function () {
    function BasePhasePool(phases) {
        _classCallCheck(this, BasePhasePool);

        this.phases = phases instanceof Map ? phases : new Map(phases.map(function (phase) {
            return [phase.id(), phase];
        }));
    }

    _createClass(BasePhasePool, [{
        key: "has",
        value: function has(id) {
            return this.phases.has(id);
        }
    }, {
        key: "get",
        value: function get(id) {
            return this.phases.get(id);
        }
    }]);

    return BasePhasePool;
}();

exports.BasePhasePool = BasePhasePool;

},{}],22:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");

var Load = function () {
    function Load() {
        _classCallCheck(this, Load);
    }

    _createClass(Load, [{
        key: "id",
        value: function id() {
            return Load.ID;
        }
    }]);

    return Load;
}();

Load.ID = new index_1.BasePhaseId(Load.name);
exports.Load = Load;

},{"./index":25}],23:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../system");

var PhaseExecute = function () {
    function PhaseExecute(systems, search) {
        _classCallCheck(this, PhaseExecute);

        this.systems = systems;
        this.search = search instanceof index_1.PhaseSearch ? search : new index_1.PhaseSearch(search);
    }

    _createClass(PhaseExecute, [{
        key: "execute",
        value: function execute() {
            this.search.find(this.systems).forEach(function (phase) {
                return phase.execute();
            });
        }
    }]);

    return PhaseExecute;
}();

exports.PhaseExecute = PhaseExecute;

},{"../system":31}],24:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");

var Start = function () {
    function Start() {
        _classCallCheck(this, Start);
    }

    _createClass(Start, [{
        key: "id",
        value: function id() {
            return Start.ID;
        }
    }]);

    return Start;
}();

Start.ID = new index_1.BasePhaseId(Start.name);
exports.Start = Start;

},{"./index":25}],25:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BasePhaseId"));
__export(require("./BasePhasePool"));
__export(require("./Load"));
__export(require("./PhaseExecute"));
__export(require("./Start"));

},{"./BasePhaseId":20,"./BasePhasePool":21,"./Load":22,"./PhaseExecute":23,"./Start":24}],26:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BasePosition = function () {
    function BasePosition(x, y) {
        _classCallCheck(this, BasePosition);

        this.coordinates = [x, y];
    }

    _createClass(BasePosition, [{
        key: "x",
        value: function x() {
            return this.coordinates[0];
        }
    }, {
        key: "y",
        value: function y() {
            return this.coordinates[1];
        }
    }]);

    return BasePosition;
}();

exports.BasePosition = BasePosition;

},{}],27:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BasePosition"));

},{"./BasePosition":26}],28:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../phase");

var BaseSystem = function () {
    function BaseSystem(phases) {
        _classCallCheck(this, BaseSystem);

        this.phasePool = phases instanceof Array || phases instanceof Map ? new index_1.BasePhasePool(phases) : phases;
    }

    _createClass(BaseSystem, [{
        key: "phases",
        value: function phases() {
            return this.phasePool;
        }
    }]);

    return BaseSystem;
}();

exports.BaseSystem = BaseSystem;

},{"../phase":25}],29:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BaseSystemCollection = function () {
    function BaseSystemCollection(systems) {
        _classCallCheck(this, BaseSystemCollection);

        this.systems = systems || [];
    }

    _createClass(BaseSystemCollection, [{
        key: "register",
        value: function register(system) {
            this.systems.push(system);
            return this;
        }
    }, {
        key: "registerMany",
        value: function registerMany(systems) {
            var _this = this;

            systems.forEach(function (system) {
                _this.register(system);
            });
            return this;
        }
    }, {
        key: "filter",
        value: function filter(id) {
            return this.systems.filter(function (system) {
                return system.phases().has(id);
            });
        }
    }]);

    return BaseSystemCollection;
}();

exports.BaseSystemCollection = BaseSystemCollection;

},{}],30:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var PhaseSearch = function () {
    function PhaseSearch(id) {
        _classCallCheck(this, PhaseSearch);

        this.id = id;
    }

    _createClass(PhaseSearch, [{
        key: "find",
        value: function find(systems) {
            var _this = this;

            return systems.filter(this.id).map(function (system) {
                return system.phases().get(_this.id);
            });
        }
    }]);

    return PhaseSearch;
}();

exports.PhaseSearch = PhaseSearch;

},{}],31:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseSystem"));
__export(require("./BaseSystemCollection"));
__export(require("./PhaseSearch"));

},{"./BaseSystem":28,"./BaseSystemCollection":29,"./PhaseSearch":30}],32:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../component");
var index_2 = require("./index");

var BaseBitmapText = function () {
    function BaseBitmapText(position, font, text) {
        _classCallCheck(this, BaseBitmapText);

        this.textPosition = position;
        this.textFont = font;
        this.writeText = new index_2.ReadWriteText(text);
    }

    _createClass(BaseBitmapText, [{
        key: "id",
        value: function id() {
            return BaseBitmapText.ID;
        }
    }, {
        key: "position",
        value: function position() {
            return this.textPosition;
        }
    }, {
        key: "font",
        value: function font() {
            return this.textFont;
        }
    }, {
        key: "text",
        value: function text() {
            return this.writeText;
        }
    }]);

    return BaseBitmapText;
}();

BaseBitmapText.ID = new index_1.BaseComponentId(BaseBitmapText.name);
exports.BaseBitmapText = BaseBitmapText;

},{"../component":7,"./index":35}],33:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var ReadText = function () {
    function ReadText(text) {
        _classCallCheck(this, ReadText);

        this.text = text;
    }

    _createClass(ReadText, [{
        key: "value",
        value: function value() {
            return this.text;
        }
    }]);

    return ReadText;
}();

exports.ReadText = ReadText;

},{}],34:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var ReadWriteText = function () {
    function ReadWriteText(text) {
        _classCallCheck(this, ReadWriteText);

        this.text = text;
    }

    _createClass(ReadWriteText, [{
        key: "value",
        value: function value() {
            return this.text;
        }
    }, {
        key: "update",
        value: function update(text) {
            this.text = text;
        }
    }]);

    return ReadWriteText;
}();

exports.ReadWriteText = ReadWriteText;

},{}],35:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseBitmapText"));
__export(require("./ReadText"));
__export(require("./ReadWriteText"));

},{"./BaseBitmapText":32,"./ReadText":33,"./ReadWriteText":34}],36:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var BaseWorld = function () {
    function BaseWorld(entities, systems) {
        _classCallCheck(this, BaseWorld);

        this.entityPool = entities;
        this.systemCollection = systems;
    }

    _createClass(BaseWorld, [{
        key: "entities",
        value: function entities() {
            return this.entityPool;
        }
    }, {
        key: "systems",
        value: function systems() {
            return this.systemCollection;
        }
    }]);

    return BaseWorld;
}();

exports.BaseWorld = BaseWorld;

},{}],37:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseWorld"));

},{"./BaseWorld":36}],38:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>

Object.defineProperty(exports, "__esModule", { value: true });
var EcsPong_1 = require("./EcsPong");
new EcsPong_1.EcsPong().start();

},{"./EcsPong":2}],39:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var PhaserBitmapFontLoad = function () {
    function PhaserBitmapFontLoad(loader) {
        _classCallCheck(this, PhaserBitmapFontLoad);

        this.loader = loader;
    }

    _createClass(PhaserBitmapFontLoad, [{
        key: "load",
        value: function load(fonts) {
            var _this = this;

            fonts.forEach(function (font) {
                _this.loader.bitmapFont(font.id(), font.image(), font.atlas());
            }, this);
            return this;
        }
    }]);

    return PhaserBitmapFontLoad;
}();

exports.PhaserBitmapFontLoad = PhaserBitmapFontLoad;

},{}],40:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./PhaserBitmapFontLoad"));

},{"./PhaserBitmapFontLoad":39}],41:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./font/index"));
__export(require("./text/index"));

},{"./font/index":40,"./text/index":48}],42:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("../../base");
var index_3 = require("..");

var PhaserBitmapText = function () {
    function PhaserBitmapText(text, font) {
        _classCallCheck(this, PhaserBitmapText);

        this.bitmapText = text;
        this.textFont = font;
    }

    _createClass(PhaserBitmapText, [{
        key: "id",
        value: function id() {
            return PhaserBitmapText.ID;
        }
    }, {
        key: "position",
        value: function position() {
            return new index_2.BasePosition(this.bitmapText.x, this.bitmapText.y);
        }
    }, {
        key: "font",
        value: function font() {
            return this.textFont;
        }
    }, {
        key: "text",
        value: function text() {
            return new index_3.PhaserText(this.bitmapText);
        }
    }]);

    return PhaserBitmapText;
}();

PhaserBitmapText.ID = new index_1.BaseComponentId(PhaserBitmapText.name);
exports.PhaserBitmapText = PhaserBitmapText;

},{"..":41,"../../base":19}],43:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var PhaserBitmapTextFactory = function () {
    function PhaserBitmapTextFactory(factory) {
        _classCallCheck(this, PhaserBitmapTextFactory);

        this.factory = factory;
    }

    _createClass(PhaserBitmapTextFactory, [{
        key: "create",
        value: function create(text) {
            return this.factory.bitmapText(Math.floor(text.position().x()), Math.floor(text.position().y()), text.font().id(), text.text().value(), text.font().size());
        }
    }]);

    return PhaserBitmapTextFactory;
}();

exports.PhaserBitmapTextFactory = PhaserBitmapTextFactory;

},{}],44:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("../../base");
var index_3 = require("..");

var PhaserBitmapTextLoad = function (_index_1$Load) {
    _inherits(PhaserBitmapTextLoad, _index_1$Load);

    function PhaserBitmapTextLoad(entities, loader) {
        _classCallCheck(this, PhaserBitmapTextLoad);

        var _this = _possibleConstructorReturn(this, (PhaserBitmapTextLoad.__proto__ || Object.getPrototypeOf(PhaserBitmapTextLoad)).call(this));

        _this.entities = entities;
        _this.loader = loader;
        return _this;
    }

    _createClass(PhaserBitmapTextLoad, [{
        key: "execute",
        value: function execute() {
            new index_3.PhaserBitmapFontLoad(this.loader).load(new index_2.BitmapFontSearch().find(this.entities));
        }
    }]);

    return PhaserBitmapTextLoad;
}(index_1.Load);

exports.PhaserBitmapTextLoad = PhaserBitmapTextLoad;

},{"..":41,"../../base":19}],45:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("../../base");
var index_3 = require("../../base");
var index_4 = require("..");

var PhaserBitmapTextStart = function (_index_1$Start) {
    _inherits(PhaserBitmapTextStart, _index_1$Start);

    function PhaserBitmapTextStart(entities, factory) {
        _classCallCheck(this, PhaserBitmapTextStart);

        var _this = _possibleConstructorReturn(this, (PhaserBitmapTextStart.__proto__ || Object.getPrototypeOf(PhaserBitmapTextStart)).call(this));

        _this.entities = entities;
        _this.factory = factory;
        return _this;
    }

    _createClass(PhaserBitmapTextStart, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            new index_2.EntitySearch(index_3.BaseBitmapText.ID).find(this.entities).forEach(function (entity) {
                var text = entity.get(index_3.BaseBitmapText.ID);
                entity.attach(new index_4.PhaserBitmapText(_this2.factory.create(text), text.font())).detach(text.id());
            });
        }
    }]);

    return PhaserBitmapTextStart;
}(index_1.Start);

exports.PhaserBitmapTextStart = PhaserBitmapTextStart;

},{"..":41,"../../base":19}],46:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("..");
/**
 * Loads and creates bitmap text using Phaser.
 */

var PhaserBitmapTextSystem = function (_index_1$BaseSystem) {
    _inherits(PhaserBitmapTextSystem, _index_1$BaseSystem);

    function PhaserBitmapTextSystem(entities, loader, factory) {
        _classCallCheck(this, PhaserBitmapTextSystem);

        return _possibleConstructorReturn(this, (PhaserBitmapTextSystem.__proto__ || Object.getPrototypeOf(PhaserBitmapTextSystem)).call(this, [new index_2.PhaserBitmapTextLoad(entities, loader), new index_3.PhaserBitmapTextStart(entities, new index_4.PhaserBitmapTextFactory(factory))]));
    }

    return PhaserBitmapTextSystem;
}(index_1.BaseSystem);

exports.PhaserBitmapTextSystem = PhaserBitmapTextSystem;

},{"..":41,"../../base":19}],47:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var PhaserText = function () {
    function PhaserText(text) {
        _classCallCheck(this, PhaserText);

        this.textObj = text;
    }

    _createClass(PhaserText, [{
        key: "value",
        value: function value() {
            return this.textObj.text;
        }
    }, {
        key: "update",
        value: function update(text) {
            this.textObj.text = text;
        }
    }]);

    return PhaserText;
}();

exports.PhaserText = PhaserText;

},{}],48:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./PhaserBitmapText"));
__export(require("./PhaserBitmapTextFactory"));
__export(require("./PhaserBitmapTextLoad"));
__export(require("./PhaserBitmapTextStart"));
__export(require("./PhaserBitmapTextSystem"));
__export(require("./PhaserText"));

},{"./PhaserBitmapText":42,"./PhaserBitmapTextFactory":43,"./PhaserBitmapTextLoad":44,"./PhaserBitmapTextStart":45,"./PhaserBitmapTextSystem":46,"./PhaserText":47}],49:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./score/index"));

},{"./score/index":52}],50:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("..");

var Score = function () {
    function Score(position, font) {
        _classCallCheck(this, Score);

        this.position = position;
        this.font = font;
    }

    _createClass(Score, [{
        key: "create",
        value: function create() {
            return [new index_2.ScoreComponent(), new index_1.BaseBitmapText(this.position, this.font, '0')];
        }
    }]);

    return Score;
}();

exports.Score = Score;

},{"..":49,"../../base":19}],51:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");

var ScoreComponent = function () {
    function ScoreComponent() {
        _classCallCheck(this, ScoreComponent);

        this.score = 0;
    }

    _createClass(ScoreComponent, [{
        key: "id",
        value: function id() {
            return ScoreComponent.ID;
        }
    }, {
        key: "value",
        value: function value() {
            return this.score;
        }
    }, {
        key: "increment",
        value: function increment() {
            this.score += 1;
        }
    }]);

    return ScoreComponent;
}();

ScoreComponent.ID = new index_1.BaseComponentId(ScoreComponent.name);
exports.ScoreComponent = ScoreComponent;

},{"../../base":19}],52:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Score"));
__export(require("./ScoreComponent"));

},{"./Score":50,"./ScoreComponent":51}],53:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });

var DuplicateError = function (_Error) {
    _inherits(DuplicateError, _Error);

    function DuplicateError() {
        var _ref;

        _classCallCheck(this, DuplicateError);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = DuplicateError.__proto__ || Object.getPrototypeOf(DuplicateError)).call.apply(_ref, [this].concat(args)));

        Error.captureStackTrace(_this, DuplicateError);
        return _this;
    }

    return DuplicateError;
}(Error);

exports.DuplicateError = DuplicateError;

},{}],54:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });

var NotFoundError = function (_Error) {
    _inherits(NotFoundError, _Error);

    function NotFoundError() {
        var _ref;

        _classCallCheck(this, NotFoundError);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = NotFoundError.__proto__ || Object.getPrototypeOf(NotFoundError)).call.apply(_ref, [this].concat(args)));

        Error.captureStackTrace(_this, NotFoundError);
        return _this;
    }

    return NotFoundError;
}(Error);

exports.NotFoundError = NotFoundError;

},{}],55:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./DuplicateError"));
__export(require("./NotFoundError"));

},{"./DuplicateError":53,"./NotFoundError":54}],56:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./errors/index"));

},{"./errors/index":55}]},{},[38])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9CYXNlQ29tcG9uZW50SWQudHMiLCJzcmMvZWNzL2Jhc2UvY29tcG9uZW50L0NvbXBvbmVudER1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eS50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eUlkLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9CYXNlRW50aXR5UG9vbC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQ29tcG9uZW50U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9FbnRpdHlTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvZW50aXR5L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvQmFzZUJpdG1hcEZvbnQudHMiLCJzcmMvZWNzL2Jhc2UvZm9udC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvaWQvQmFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL2lkL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZVBvb2wudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvTG9hZC50cyIsInNyYy9lY3MvYmFzZS9waGFzZS9QaGFzZUV4ZWN1dGUudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvU3RhcnQudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvcG9zaXRpb24vQmFzZVBvc2l0aW9uLnRzIiwic3JjL2Vjcy9iYXNlL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtLnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtQ29sbGVjdGlvbi50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2Uvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3RleHQvQmFzZUJpdG1hcFRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9SZWFkVGV4dC50cyIsInNyYy9lY3MvYmFzZS90ZXh0L1JlYWRXcml0ZVRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS93b3JsZC9CYXNlV29ybGQudHMiLCJzcmMvZWNzL2Jhc2Uvd29ybGQvaW5kZXgudHMiLCJzcmMvZWNzL21haW4udHMiLCJzcmMvZWNzL3BoYXNlci9mb250L1BoYXNlckJpdG1hcEZvbnRMb2FkLnRzIiwic3JjL2Vjcy9waGFzZXIvZm9udC9pbmRleC50cyIsInNyYy9lY3MvcGhhc2VyL2luZGV4LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dExvYWQudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHRTdGFydC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dFN5c3RlbS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyVGV4dC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvaW5kZXgudHMiLCJzcmMvZWNzL3BvbmcvaW5kZXgudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmUudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmVDb21wb25lbnQudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvaW5kZXgudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvRHVwbGljYXRlRXJyb3IudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvTm90Rm91bmRFcnJvci50cyIsInNyYy9lY3Mvc3lzdGVtL2Vycm9ycy9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLEFBQWdEOzs7Ozs7Ozs7O3NEQUVoRDs7SUFBdUI7OztBQUNuQjtBQUNJLEFBQUssQUFBRSxBQUFDLEFBQ1o7OztBQUFDLEFBRU0sQUFBSTs7Ozs7QUFDUCxBQUFzQjtBQUN0QixBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFTLFlBQUcsQUFBTSxPQUFDLEFBQVksYUFBQyxBQUFRLEFBQUM7QUFDcEQsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBbUIsc0JBQUcsQUFBTSxPQUFDLEFBQVksYUFBQyxBQUFRLEFBQUM7QUFDOUQsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBcUIsd0JBQUcsQUFBSSxBQUFDO0FBQ3hDLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFBQW1CLHNCQUFHLEFBQUksQUFBQztBQUN0QyxBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFjLGlCQUFHLEFBQUksQUFBQztBQUNqQyxBQUFJLGlCQUFDLEFBQUksS0FBQyxBQUFLLE1BQUMsQUFBaUIsa0JBQUMsQUFBTSxTQUFHLEFBQVEsQUFBQyxVQUFDLEFBQTZDO0FBQ2xHLEFBQUksaUJBQUMsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFPLEFBQUUsQUFBQztBQUUxQixBQUFvQjtBQUNwQixBQUFJLGlCQUFDLEFBQUksS0FBQyxBQUFTLFlBQUcsQUFBSyxBQUFDO0FBQzVCLEFBQUksaUJBQUMsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFRLFdBQUcsQUFBSyxBQUFDO0FBQ2pDLEFBQU0s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ekUseUJBcUJDOzs7Ozs7Ozs7OztBQ3pCRCxpQkFBd0I7QUFDeEIsaUJBQWlDOzs7Ozs7Ozs7OztzRENEakM7O0lBQTRCOzs7QUFDeEIsQUFBWTtBQUNSLEFBQUssQUFBQzs7Ozs7QUFESyxBQUFXOzs7K0pBQ2IsQUFBSSxBQUFDLEFBQUM7O0FBQ2YsQUFBSyxjQUFDLEFBQWlCLEFBQUMsQUFBSSx5QkFBRSxBQUFjLEFBQUMsQUFBQyxBQUNsRDs7QUFBQyxBQUNKOzs7RUFMbUMsQUFBSzs7QUFBekMseUJBS0M7Ozs7Ozs7Ozs7O3NEQ0xEOztJQUEyQjs7O0FBQ3ZCLEFBQVk7QUFDUixBQUFLLEFBQUM7Ozs7O0FBREssQUFBVzs7OzZKQUNiLEFBQUksQUFBQyxBQUFDOztBQUNmLEFBQUssY0FBQyxBQUFpQixBQUFDLEFBQUkseUJBQUUsQUFBYSxBQUFDLEFBQUMsQUFDakQ7O0FBQUMsQUFDSjs7O0VBTGtDLEFBQUs7O0FBQXhDLHdCQUtDOzs7Ozs7Ozs7OztBQ0xELGlCQUFpQztBQUNqQyxpQkFBZ0M7Ozs7Ozs7Ozs7O0FDRGhDLGlCQUErQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIHNjYWxlIHRvIGZpdCBzY3JlZW5cclxuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mdWxsU2NyZWVuU2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUud2luZG93Q29uc3RyYWludHMuYm90dG9tID0gJ3Zpc3VhbCc7IC8vIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG92ZXIgc2NyZWVuIGhlaWdodFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgcGl4ZWxzIHNoYXJwXHJcbiAgICAgICAgdGhpcy5nYW1lLmFudGlhbGlhcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5zbW9vdGhlZCA9IGZhbHNlO1xyXG4gICAgICAgIFBoYXNlci5DYW52YXMuc2V0SW1hZ2VSZW5kZXJpbmdDcmlzcCh0aGlzLmdhbWUuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IEJvb3RTdGF0ZSB9IGZyb20gJy4vQm9vdFN0YXRlJztcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9HYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVjc1Bvbmcge1xyXG4gICAgcHJpdmF0ZSBfZ2FtZTogUGhhc2VyLkdhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDI0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDU3NixcclxuICAgICAgICAgICAgcmVuZGVyZXI6IFBoYXNlci5BVVRPLFxyXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lLWNvbnRhaW5lcidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2Jvb3QnLCBuZXcgQm9vdFN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdnYW1lJywgbmV3IEdhbWVTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgQmFzZVdvcmxkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlRW50aXR5UG9vbCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICdAYmFzZS8vaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUG9zaXRpb24gfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBGb250IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGFydCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VFeGVjdXRlIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSAnQHBvbmcvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBwcml2YXRlIGVjczogQmFzZVdvcmxkO1xyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZm9udCA9IG5ldyBCYXNlQml0bWFwRm9udCgnUHJlc3MgU3RhcnQgMlAnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlBfMC5wbmcnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlAuZm50JywgMzIpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzID0gbmV3IEJhc2VFbnRpdHlQb29sKClcclxuICAgICAgICAgICAgLmNyZWF0ZU1hbnkoW1xyXG4gICAgICAgICAgICAgICAgbmV3IFNjb3JlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCYXNlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjUgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyICogZm9udC5zaXplKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQgKiBmb250LnNpemUoKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQmFzZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc1ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMiAqIGZvbnQuc2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0ICogZm9udC5zaXplKClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5lY3MgPSBuZXcgQmFzZVdvcmxkKFxyXG4gICAgICAgICAgICBlbnRpdGllcyxcclxuICAgICAgICAgICAgbmV3IEJhc2VTeXN0ZW1Db2xsZWN0aW9uKFtcclxuICAgICAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtKGVudGl0aWVzLCB0aGlzLmdhbWUubG9hZCwgdGhpcy5nYW1lLmFkZClcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlRXhlY3V0ZSh0aGlzLmVjcy5zeXN0ZW1zKCksIExvYWQuSUQpXHJcbiAgICAgICAgICAgIC5leGVjdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZUV4ZWN1dGUodGhpcy5lY3Muc3lzdGVtcygpLCBTdGFydC5JRClcclxuICAgICAgICAgICAgLmV4ZWN1dGUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICdAYmFzZS9pZC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudElkIGV4dGVuZHMgQmFzZUlkIGltcGxlbWVudHMgQ29tcG9uZW50SWQge1xyXG59IiwiaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnREdXBsaWNhdGVFcnJvciBleHRlbmRzIER1cGxpY2F0ZUVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Tm90Rm91bmRFcnJvciBleHRlbmRzIE5vdEZvdW5kRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUNvbXBvbmVudElkJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnREdXBsaWNhdGVFcnJvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29tcG9uZW50Tm90Rm91bmRFcnJvcic7IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50Tm90Rm91bmRFcnJvciB9IGZyb20gJ0BiYXNlL2NvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQGJhc2UvY29tcG9uZW50L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5IGltcGxlbWVudHMgRW50aXR5IHtcclxuICAgIHByaXZhdGUgZW50aXR5SWQ6IEVudGl0eUlkO1xyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRzOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIGlkOiBFbnRpdHlJZCxcclxuICAgICAgICBjb21wb25lbnRzOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD4gPSBuZXcgTWFwKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlJZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IEVudGl0eUlkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlJZDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goY29tcG9uZW50OiBDb21wb25lbnQpOiBFbnRpdHkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMuaGFzKGNvbXBvbmVudC5pZCgpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNldChjb21wb25lbnQuaWQoKSwgY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoTWFueShjb21wb25lbnRzOiBDb21wb25lbnRbXSk6IEVudGl0eSB7XHJcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaChpZDogQ29tcG9uZW50SWQpOiBFbnRpdHkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5kZWxldGUoaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBoYXMoY29tcG9uZW50czogQ29tcG9uZW50SWRbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmV2ZXJ5KGlkID0+IHRoaXMuY29tcG9uZW50cy5oYXMoaWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQ8VCBleHRlbmRzIENvbXBvbmVudD4oY29tcG9uZW50OiBDb21wb25lbnRJZCk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21wb25lbnROb3RGb3VuZEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmdldChjb21wb25lbnQpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VJZCB9IGZyb20gJ0BiYXNlL2lkL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5SWQgZXh0ZW5kcyBCYXNlSWQgaW1wbGVtZW50cyBFbnRpdHlJZCB7XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQcmVmYWIgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICdAYmFzZS9lbnRpdHkvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlRW50aXR5SWQgfSBmcm9tICdAYmFzZS9lbnRpdHkvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHlQb29sIGltcGxlbWVudHMgRW50aXR5UG9vbCB7XHJcbiAgICBwcml2YXRlIHBvb2w6IEVudGl0eVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmV3SWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFzZUVudGl0eUlkKHRoaXMucG9vbC5sZW5ndGggKyAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNvbXBvbmVudHM/OiBDb21wb25lbnRbXSk6IEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEJhc2VFbnRpdHkoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV3SWQoKSxcclxuICAgICAgICAgICAgbmV3IE1hcChcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiBbY29tcG9uZW50LmlkKCksIGNvbXBvbmVudF0gYXMgW0NvbXBvbmVudElkLCBDb21wb25lbnRdKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBvb2wucHVzaChlbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1hbnkocHJlZmFiczogUHJlZmFiW10pOiBFbnRpdHlQb29sIHtcclxuICAgICAgICBwcmVmYWJzLmZvckVhY2gocHJlZmFiID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICBwcmVmYWIuY3JlYXRlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXRpZXMoKTogRW50aXR5W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvb2w7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVNlYXJjaCB9IGZyb20gJ0BiYXNlL2VudGl0eS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U2VhcmNoPFQgZXh0ZW5kcyBDb21wb25lbnQ+IGltcGxlbWVudHMgU2VhcmNoPFQ+IHtcclxuICAgIHByaXZhdGUgaWQ6IENvbXBvbmVudElkO1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlTZWFyY2g6IEVudGl0eVNlYXJjaDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpZDogQ29tcG9uZW50SWQsXHJcbiAgICAgICAgZW50aXR5U2VhcmNoOiBFbnRpdHlTZWFyY2ggPSBuZXcgRW50aXR5U2VhcmNoKGlkKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZW50aXR5U2VhcmNoID0gZW50aXR5U2VhcmNoO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VhcmNoLmZpbmQocG9vbClcclxuICAgICAgICAgICAgLm1hcChlbnRpdHkgPT4gZW50aXR5LmdldDxUPih0aGlzLmlkKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZWFyY2ggaW1wbGVtZW50cyBTZWFyY2g8RW50aXR5PiB7XHJcbiAgICBwcml2YXRlIGlkczogQ29tcG9uZW50SWRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZHM6IENvbXBvbmVudElkW10gfCBDb21wb25lbnRJZCkge1xyXG4gICAgICAgIHRoaXMuaWRzID0gKGlkcyAmJiBpZHMuY29uc3RydWN0b3IgPT09IEFycmF5KSA/XHJcbiAgICAgICAgICAgIGlkcyBhcyBDb21wb25lbnRJZFtdIDpcclxuICAgICAgICAgICAgW2lkcyBhcyBDb21wb25lbnRJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChwb29sOiBFbnRpdHlQb29sKTogRW50aXR5W10ge1xyXG4gICAgICAgIHJldHVybiBwb29sLmVudGl0aWVzKClcclxuICAgICAgICAgICAgLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5Lmhhcyh0aGlzLmlkcykpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5SWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VFbnRpdHlQb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnRTZWFyY2gnO1xyXG5leHBvcnQgKiBmcm9tICcuL0VudGl0eVNlYXJjaCc7IiwiZXhwb3J0IGNsYXNzIEJhc2VCaXRtYXBGb250IHtcclxuICAgIHByaXZhdGUga2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhdGxhc1BhdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgZm9udFNpemU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgaW1hZ2VQYXRoOiBzdHJpbmcsIGF0bGFzUGF0aDogc3RyaW5nLCBzaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcclxuICAgICAgICB0aGlzLmF0bGFzUGF0aCA9IGF0bGFzUGF0aDtcclxuICAgICAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBhdGxhcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udFNpemU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJ0BiYXNlL2VudGl0eS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnQGJhc2UvdGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQml0bWFwRm9udFNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxCaXRtYXBGb250PiB7XHJcbiAgICBwcml2YXRlIHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+ID0gbmV3IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0Q29tcG9uZW50PihCYXNlQml0bWFwVGV4dC5JRCkpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBCaXRtYXBGb250W10ge1xyXG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldCgvLyB1bmlxdWUgc2V0XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmZpbmQocG9vbClcclxuICAgICAgICAgICAgICAgIC5tYXAodGV4dCA9PiB0ZXh0LmZvbnQoKSlcclxuICAgICAgICApXTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUJpdG1hcEZvbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0JpdG1hcEZvbnRTZWFyY2gnOyIsImltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VJZCBpbXBsZW1lbnRzIElkIHtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogSWQgfCBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gKGlkIGluc3RhbmNlb2YgT2JqZWN0KSA/XHJcbiAgICAgICAgICAgIChpZCBhcyBJZCkucHJpbnQoKSA6XHJcbiAgICAgICAgICAgIGlkICsgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUlkJzsiLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZW50aXR5L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9mb250L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9pZC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGhhc2UvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Bvc2l0aW9uL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9zeXN0ZW0vaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RleHQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dvcmxkL2luZGV4JzsiLCJpbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUlkIH0gZnJvbSAnQGJhc2UvaWQvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQaGFzZUlkIGV4dGVuZHMgQmFzZUlkIGltcGxlbWVudHMgQ29tcG9uZW50SWQge1xyXG59IiwiaW1wb3J0IHsgUGhhc2VQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUGhhc2VQb29sIGltcGxlbWVudHMgUGhhc2VQb29sIHtcclxuICAgIHByaXZhdGUgcGhhc2VzOiBNYXA8UGhhc2VJZCwgUGhhc2U+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBoYXNlczogUGhhc2VbXSB8IE1hcDxQaGFzZUlkLCBQaGFzZT4pIHtcclxuICAgICAgICB0aGlzLnBoYXNlcyA9IChwaGFzZXMgaW5zdGFuY2VvZiBNYXApID8gcGhhc2VzIDpcclxuICAgICAgICAgICAgbmV3IE1hcChcclxuICAgICAgICAgICAgICAgIHBoYXNlcy5tYXAocGhhc2UgPT5cclxuICAgICAgICAgICAgICAgICAgICBbcGhhc2UuaWQoKSwgcGhhc2VdIGFzIFtQaGFzZUlkLCBQaGFzZV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXMoaWQ6IFBoYXNlSWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZXMuaGFzKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQ8VCBleHRlbmRzIFBoYXNlPihpZDogUGhhc2VJZCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlcy5nZXQoaWQpIGFzIFQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaGFzZSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVBoYXNlSWQgfSBmcm9tICdAYmFzZS9waGFzZS9pbmRleCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9hZCBpbXBsZW1lbnRzIFBoYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZVBoYXNlSWQoTG9hZC5uYW1lKTtcclxuXHJcbiAgICBpZCgpOiBQaGFzZUlkIHtcclxuICAgICAgICByZXR1cm4gTG9hZC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBleGVjdXRlKCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZVNlYXJjaCB9IGZyb20gJ0BiYXNlL3N5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VFeGVjdXRlIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbjtcclxuICAgIHByaXZhdGUgc2VhcmNoOiBQaGFzZVNlYXJjaDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uLCBzZWFyY2g6IFBoYXNlU2VhcmNoIHwgUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IHN5c3RlbXM7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSAoc2VhcmNoIGluc3RhbmNlb2YgUGhhc2VTZWFyY2gpID8gc2VhcmNoIDogbmV3IFBoYXNlU2VhcmNoKHNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlYXJjaC5maW5kKHRoaXMuc3lzdGVtcylcclxuICAgICAgICAgICAgLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuZXhlY3V0ZSgpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VJZCB9IGZyb20gJ0BiYXNlL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdGFydCBpbXBsZW1lbnRzIFBoYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZVBoYXNlSWQoU3RhcnQubmFtZSk7XHJcblxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXJ0LklEO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGV4ZWN1dGUoKTogdm9pZDtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVBoYXNlSWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VQaGFzZVBvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlRXhlY3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3RhcnQnOyIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQb3NpdGlvbiBpbXBsZW1lbnRzIFBvc2l0aW9uIHtcclxuICAgIHByaXZhdGUgY29vcmRpbmF0ZXM6IG51bWJlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICB4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzFdO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlUG9zaXRpb24nOyIsImltcG9ydCB7IFBoYXNlUG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVBoYXNlUG9vbCB9IGZyb20gJ0BiYXNlL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlU3lzdGVtIGltcGxlbWVudHMgU3lzdGVtIHtcclxuICAgIHByaXZhdGUgcGhhc2VQb29sOiBQaGFzZVBvb2w7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGhhc2VzOiBQaGFzZVBvb2wgfCBQaGFzZVtdIHwgTWFwPFBoYXNlSWQsIFBoYXNlPikge1xyXG4gICAgICAgIHRoaXMucGhhc2VQb29sID0gKHBoYXNlcyBpbnN0YW5jZW9mIEFycmF5IHx8IHBoYXNlcyBpbnN0YW5jZW9mIE1hcCkgP1xyXG4gICAgICAgICAgICBuZXcgQmFzZVBoYXNlUG9vbChwaGFzZXMpIDpcclxuICAgICAgICAgICAgcGhhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHBoYXNlcygpOiBQaGFzZVBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlUG9vbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlU3lzdGVtQ29sbGVjdGlvbiBpbXBsZW1lbnRzIFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW1zOiBTeXN0ZW1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzeXN0ZW1zPzogU3lzdGVtW10pIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMgPSBzeXN0ZW1zIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHN5c3RlbTogU3lzdGVtKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zLnB1c2goc3lzdGVtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJNYW55KHN5c3RlbXM6IFN5c3RlbVtdKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgc3lzdGVtcy5mb3JFYWNoKHN5c3RlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoc3lzdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGlkOiBQaGFzZUlkKTogU3lzdGVtW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbXMuZmlsdGVyKHN5c3RlbSA9PlxyXG4gICAgICAgICAgICBzeXN0ZW0ucGhhc2VzKCkuaGFzKGlkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW1TZWFyY2ggfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlU2VhcmNoIGltcGxlbWVudHMgU3lzdGVtU2VhcmNoPFBoYXNlPiB7XHJcbiAgICBwcml2YXRlIGlkOiBQaGFzZUlkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBQaGFzZUlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbik6IFBoYXNlW10ge1xyXG4gICAgICAgIHJldHVybiBzeXN0ZW1zLmZpbHRlcih0aGlzLmlkKVxyXG4gICAgICAgICAgICAubWFwKHN5c3RlbSA9PiBzeXN0ZW0ucGhhc2VzKCkuZ2V0KHRoaXMuaWQpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVN5c3RlbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQmFzZVN5c3RlbUNvbGxlY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlU2VhcmNoJzsiLCJpbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnQGJhc2UvY29tcG9uZW50L2luZGV4JztcclxuaW1wb3J0IHsgUmVhZFdyaXRlVGV4dCB9IGZyb20gJ0BiYXNlL3RleHQvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VCaXRtYXBUZXh0IGltcGxlbWVudHMgQml0bWFwVGV4dENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VDb21wb25lbnRJZChCYXNlQml0bWFwVGV4dC5uYW1lKTtcclxuXHJcbiAgICBwcml2YXRlIHRleHRQb3NpdGlvbjogUG9zaXRpb247XHJcbiAgICBwcml2YXRlIHRleHRGb250OiBCaXRtYXBGb250O1xyXG4gICAgcHJpdmF0ZSB3cml0ZVRleHQ6IFJlYWRXcml0ZVRleHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBmb250OiBCaXRtYXBGb250LCB0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHRQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBmb250O1xyXG4gICAgICAgIHRoaXMud3JpdGVUZXh0ID0gbmV3IFJlYWRXcml0ZVRleHQodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogQ29tcG9uZW50SWQge1xyXG4gICAgICAgIHJldHVybiBCYXNlQml0bWFwVGV4dC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZvbnQoKTogQml0bWFwRm9udCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dCgpOiBXcml0ZVRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlVGV4dDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRleHQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVhZFRleHQgaW1wbGVtZW50cyBUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgV3JpdGVUZXh0IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlYWRXcml0ZVRleHQgaW1wbGVtZW50cyBXcml0ZVRleHQge1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VCaXRtYXBUZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9SZWFkVGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVhZFdyaXRlVGV4dCc7IiwiaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVdvcmxkIGltcGxlbWVudHMgV29ybGQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlQb29sOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW1Db2xsZWN0aW9uOiBTeXN0ZW1Db2xsZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlQb29sID0gZW50aXRpZXM7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1Db2xsZWN0aW9uID0gc3lzdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBlbnRpdGllcygpOiBFbnRpdHlQb29sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlQb29sO1xyXG4gICAgfVxyXG5cclxuICAgIHN5c3RlbXMoKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtQ29sbGVjdGlvbjtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVdvcmxkJzsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgRWNzUG9uZyB9IGZyb20gJy4vRWNzUG9uZyc7XHJcblxyXG5uZXcgRWNzUG9uZygpLnN0YXJ0KCk7IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwRm9udExvYWQge1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI6IFBoYXNlci5Mb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBQaGFzZXIuTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChmb250czogQml0bWFwRm9udFtdKTogUGhhc2VyQml0bWFwRm9udExvYWQge1xyXG4gICAgICAgIGZvbnRzLmZvckVhY2goZm9udCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmJpdG1hcEZvbnQoXHJcbiAgICAgICAgICAgICAgICBmb250LmlkKCksXHJcbiAgICAgICAgICAgICAgICBmb250LmltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBmb250LmF0bGFzKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcEZvbnRMb2FkJzsiLCJleHBvcnQgKiBmcm9tICcuL2ZvbnQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RleHQvaW5kZXgnOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgV3JpdGVUZXh0IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQb3NpdGlvbiB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyVGV4dCB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHQgaW1wbGVtZW50cyBCaXRtYXBUZXh0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKFBoYXNlckJpdG1hcFRleHQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSBiaXRtYXBUZXh0OiBQaGFzZXIuQml0bWFwVGV4dDtcclxuICAgIHByaXZhdGUgdGV4dEZvbnQ6IEJpdG1hcEZvbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogUGhhc2VyLkJpdG1hcFRleHQsIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLmJpdG1hcFRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBmb250O1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gUGhhc2VyQml0bWFwVGV4dC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNlUG9zaXRpb24odGhpcy5iaXRtYXBUZXh0LngsIHRoaXMuYml0bWFwVGV4dC55KTtcclxuICAgIH1cclxuXHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHQoKTogV3JpdGVUZXh0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFBoYXNlclRleHQodGhpcy5iaXRtYXBUZXh0KTtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSh0ZXh0OiBCaXRtYXBUZXh0Q29tcG9uZW50KTogUGhhc2VyLkJpdG1hcFRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkuYml0bWFwVGV4dChcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueCgpKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueSgpKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuaWQoKSxcclxuICAgICAgICAgICAgdGV4dC50ZXh0KCkudmFsdWUoKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuc2l6ZSgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250U2VhcmNoIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBGb250TG9hZCB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRMb2FkIGV4dGVuZHMgTG9hZCB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI6IFBoYXNlci5Mb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlckJpdG1hcEZvbnRMb2FkKHRoaXMubG9hZGVyKVxyXG4gICAgICAgICAgICAubG9hZChcclxuICAgICAgICAgICAgICAgIG5ldyBCaXRtYXBGb250U2VhcmNoKClcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCh0aGlzLmVudGl0aWVzKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3RhcnQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVNlYXJjaCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHQgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0U3RhcnQgZXh0ZW5kcyBTdGFydCB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgZmFjdG9yeTogUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IEVudGl0eVNlYXJjaChCYXNlQml0bWFwVGV4dC5JRClcclxuICAgICAgICAgICAgLmZpbmQodGhpcy5lbnRpdGllcylcclxuICAgICAgICAgICAgLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbnRpdHkuZ2V0PEJpdG1hcFRleHRDb21wb25lbnQ+KEJhc2VCaXRtYXBUZXh0LklEKTtcclxuICAgICAgICAgICAgICAgIGVudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWN0b3J5LmNyZWF0ZSh0ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuZm9udCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLmRldGFjaCh0ZXh0LmlkKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VTeXN0ZW0gfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRMb2FkIH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRTdGFydCB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIExvYWRzIGFuZCBjcmVhdGVzIGJpdG1hcCB0ZXh0IHVzaW5nIFBoYXNlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIGV4dGVuZHMgQmFzZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgbG9hZGVyOiBQaGFzZXIuTG9hZGVyLCBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICBzdXBlcihbXHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0TG9hZChlbnRpdGllcywgbG9hZGVyKSxcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRTdGFydChcclxuICAgICAgICAgICAgICAgIGVudGl0aWVzLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KGZhY3RvcnkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyVGV4dCBpbXBsZW1lbnRzIFdyaXRlVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHRPYmo6IHsgdGV4dDogc3RyaW5nIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogUGhhc2VyLkJpdG1hcFRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHRPYmogPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dE9iai50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHRPYmoudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRGYWN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0TG9hZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dFN0YXJ0JztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3lzdGVtJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJUZXh0JzsiLCJleHBvcnQgKiBmcm9tICcuL3Njb3JlL2luZGV4JzsiLCJpbXBvcnQgeyBQcmVmYWIgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCB9IGZyb20gJ0Bwb25nL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY29yZSBpbXBsZW1lbnRzIFByZWZhYiB7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgZm9udDogQml0bWFwRm9udDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogQ29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5ldyBTY29yZUNvbXBvbmVudCgpLFxyXG4gICAgICAgICAgICBuZXcgQmFzZUJpdG1hcFRleHQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb250LFxyXG4gICAgICAgICAgICAgICAgJzAnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKFNjb3JlQ29tcG9uZW50Lm5hbWUpO1xyXG5cclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIFNjb3JlQ29tcG9uZW50LklEO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1Njb3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY29yZUNvbXBvbmVudCc7IiwiZXhwb3J0IGNsYXNzIER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBEdXBsaWNhdGVFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgTm90Rm91bmRFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0R1cGxpY2F0ZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ob3RGb3VuZEVycm9yJzsiLCJleHBvcnQgKiBmcm9tICcuL2Vycm9ycy9pbmRleCc7Il19
