(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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

},{"./base":20,"./phaser":42,"./pong":50}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../id");

var BaseComponentId = function () {
    function BaseComponentId(id) {
        _classCallCheck(this, BaseComponentId);

        this.id = new index_1.BaseId(id);
    }

    _createClass(BaseComponentId, [{
        key: "value",
        value: function value() {
            return this.id.value();
        }
    }]);

    return BaseComponentId;
}();

exports.BaseComponentId = BaseComponentId;

},{"../id":19}],5:[function(require,module,exports){
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

},{"../../system":57}],6:[function(require,module,exports){
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

},{"../../system":57}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("../../system");

var MapComponentPool = function () {
    function MapComponentPool() {
        var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();

        _classCallCheck(this, MapComponentPool);

        this.map = components instanceof Map ? components : new index_3.MapOf(components, function (component) {
            return [component.id(), component];
        });
    }

    _createClass(MapComponentPool, [{
        key: "attach",
        value: function attach(component) {
            if (this.map.has(component.id())) {
                throw new index_1.ComponentDuplicateError();
            }
            this.map.set(component.id(), component);
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
            this.map.delete(id);
            return this;
        }
    }, {
        key: "has",
        value: function has(components) {
            var _this2 = this;

            return components.every(function (id) {
                return _this2.map.has(id);
            });
        }
    }, {
        key: "get",
        value: function get(component) {
            if (!this.map.has(component)) {
                throw new index_2.ComponentNotFoundError();
            }
            return this.map.get(component);
        }
    }]);

    return MapComponentPool;
}();

exports.MapComponentPool = MapComponentPool;

},{"../../system":57,"./index":8}],8:[function(require,module,exports){
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
__export(require("./MapComponentPool"));

},{"./BaseComponentId":4,"./ComponentDuplicateError":5,"./ComponentNotFoundError":6,"./MapComponentPool":7}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../component");

var BaseEntity = function () {
    function BaseEntity(id) {
        var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new index_1.MapComponentPool();

        _classCallCheck(this, BaseEntity);

        this.entityId = id;
        this.entityComponents = components;
    }

    _createClass(BaseEntity, [{
        key: "id",
        value: function id() {
            return this.entityId;
        }
    }, {
        key: "components",
        value: function components() {
            return this.entityComponents;
        }
    }]);

    return BaseEntity;
}();

exports.BaseEntity = BaseEntity;

},{"../component":8}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../id");

var BaseEntityId = function () {
    function BaseEntityId(id) {
        _classCallCheck(this, BaseEntityId);

        this.id = new index_1.BaseId(id);
    }

    _createClass(BaseEntityId, [{
        key: "value",
        value: function value() {
            return this.id.value();
        }
    }]);

    return BaseEntityId;
}();

exports.BaseEntityId = BaseEntityId;

},{"../id":19}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("../../system");

var BaseEntityPool = function () {
    function BaseEntityPool() {
        var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, BaseEntityPool);

        this.pool = entities;
    }

    _createClass(BaseEntityPool, [{
        key: "getNewId",
        value: function getNewId() {
            return new index_2.BaseEntityId(new index_3.StringOf(this.pool.length));
        }
    }, {
        key: "create",
        value: function create(components) {
            var entity = new index_1.BaseEntity(this.getNewId(), components);
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

},{"../../system":57,"./index":14}],12:[function(require,module,exports){
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
                return entity.components().get(_this.id);
            });
        }
    }]);

    return ComponentSearch;
}();

exports.ComponentSearch = ComponentSearch;

},{"./index":14}],13:[function(require,module,exports){
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
                return entity.components().has(_this.ids);
            });
        }
    }]);

    return EntitySearch;
}();

exports.EntitySearch = EntitySearch;

},{}],14:[function(require,module,exports){
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

},{"./BaseEntity":9,"./BaseEntityId":10,"./BaseEntityPool":11,"./ComponentSearch":12,"./EntitySearch":13}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"../entity":14,"../text":36}],17:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseBitmapFont"));
__export(require("./BitmapFontSearch"));

},{"./BaseBitmapFont":15,"./BitmapFontSearch":16}],18:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../system");

var BaseId = function () {
    function BaseId(id) {
        _classCallCheck(this, BaseId);

        this.scalar = typeof id === 'string' ? new index_1.StringOf(id) : id;
    }

    _createClass(BaseId, [{
        key: "value",
        value: function value() {
            return this.scalar.value();
        }
    }]);

    return BaseId;
}();

exports.BaseId = BaseId;

},{"../../system":57}],19:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseId"));

},{"./BaseId":18}],20:[function(require,module,exports){
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

},{"./component/index":8,"./entity/index":14,"./font/index":17,"./id/index":19,"./phase/index":26,"./position/index":28,"./system/index":32,"./text/index":36,"./world/index":38}],21:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../id");

var BasePhaseId = function () {
    function BasePhaseId(id) {
        _classCallCheck(this, BasePhaseId);

        this.id = new index_1.BaseId(id);
    }

    _createClass(BasePhaseId, [{
        key: "value",
        value: function value() {
            return this.id.value();
        }
    }]);

    return BasePhaseId;
}();

exports.BasePhaseId = BasePhaseId;

},{"../id":19}],22:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../system");

var BasePhasePool = function () {
    function BasePhasePool(phases) {
        _classCallCheck(this, BasePhasePool);

        this.phases = phases instanceof Map ? phases : new index_1.MapOf(phases, function (phase) {
            return [phase.id(), phase];
        });
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

},{"../../system":57}],23:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");

var Load = function () {
    function Load(callback) {
        _classCallCheck(this, Load);

        this.callback = callback;
    }

    _createClass(Load, [{
        key: "id",
        value: function id() {
            return Load.ID;
        }
    }, {
        key: "execute",
        value: function execute() {
            this.callback();
        }
    }]);

    return Load;
}();

Load.ID = new index_1.BasePhaseId(Load.name);
exports.Load = Load;

},{"./index":26}],24:[function(require,module,exports){
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

},{"../system":32}],25:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");

var Start = function () {
    function Start(callback) {
        _classCallCheck(this, Start);

        this.callback = callback;
    }

    _createClass(Start, [{
        key: "id",
        value: function id() {
            return Start.ID;
        }
    }, {
        key: "execute",
        value: function execute() {
            this.callback();
        }
    }]);

    return Start;
}();

Start.ID = new index_1.BasePhaseId(Start.name);
exports.Start = Start;

},{"./index":26}],26:[function(require,module,exports){
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

},{"./BasePhaseId":21,"./BasePhasePool":22,"./Load":23,"./PhaseExecute":24,"./Start":25}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BasePosition"));

},{"./BasePosition":27}],29:[function(require,module,exports){
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

},{"../phase":26}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{"./BaseSystem":29,"./BaseSystemCollection":30,"./PhaseSearch":31}],33:[function(require,module,exports){
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

},{"../component":8,"./index":36}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{"./BaseBitmapText":33,"./ReadText":34,"./ReadWriteText":35}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseWorld"));

},{"./BaseWorld":37}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EcsPong_1 = require("./EcsPong");
new EcsPong_1.EcsPong().start();

},{"./EcsPong":2}],40:[function(require,module,exports){
"use strict";

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

},{}],41:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./PhaserBitmapFontLoad"));

},{"./PhaserBitmapFontLoad":40}],42:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./font/index"));
__export(require("./text/index"));

},{"./font/index":41,"./text/index":49}],43:[function(require,module,exports){
"use strict";

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

},{"..":42,"../../base":20}],44:[function(require,module,exports){
"use strict";

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

},{}],45:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("../../base");
var index_3 = require("..");

var PhaserBitmapTextLoad = function () {
    function PhaserBitmapTextLoad(entities, loader) {
        _classCallCheck(this, PhaserBitmapTextLoad);

        this.phase = new index_1.Load(function () {
            new index_3.PhaserBitmapFontLoad(loader).load(new index_2.BitmapFontSearch().find(entities));
        });
    }

    _createClass(PhaserBitmapTextLoad, [{
        key: "id",
        value: function id() {
            return this.phase.id();
        }
    }, {
        key: "execute",
        value: function execute() {
            this.phase.execute();
        }
    }]);

    return PhaserBitmapTextLoad;
}();

exports.PhaserBitmapTextLoad = PhaserBitmapTextLoad;

},{"..":42,"../../base":20}],46:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("../../base");
var index_3 = require("../../base");
var index_4 = require("..");

var PhaserBitmapTextStart = function () {
    function PhaserBitmapTextStart(entities, factory) {
        _classCallCheck(this, PhaserBitmapTextStart);

        this.phase = new index_1.Start(function () {
            new index_2.EntitySearch(index_3.BaseBitmapText.ID).find(entities).forEach(function (entity) {
                var text = entity.components().get(index_3.BaseBitmapText.ID);
                entity.components().attach(new index_4.PhaserBitmapText(factory.create(text), text.font())).detach(text.id());
            });
        });
    }

    _createClass(PhaserBitmapTextStart, [{
        key: "id",
        value: function id() {
            return this.phase.id();
        }
    }, {
        key: "execute",
        value: function execute() {
            this.phase.execute();
        }
    }]);

    return PhaserBitmapTextStart;
}();

exports.PhaserBitmapTextStart = PhaserBitmapTextStart;

},{"..":42,"../../base":20}],47:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("..");
/**
 * Loads and creates bitmap text using Phaser.
 */

var PhaserBitmapTextSystem = function () {
    function PhaserBitmapTextSystem(entities, loader, factory) {
        _classCallCheck(this, PhaserBitmapTextSystem);

        this.system = new index_1.BaseSystem([new index_2.PhaserBitmapTextLoad(entities, loader), new index_3.PhaserBitmapTextStart(entities, new index_4.PhaserBitmapTextFactory(factory))]);
    }

    _createClass(PhaserBitmapTextSystem, [{
        key: "phases",
        value: function phases() {
            return this.system.phases();
        }
    }]);

    return PhaserBitmapTextSystem;
}();

exports.PhaserBitmapTextSystem = PhaserBitmapTextSystem;

},{"..":42,"../../base":20}],48:[function(require,module,exports){
"use strict";

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

},{}],49:[function(require,module,exports){
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

},{"./PhaserBitmapText":43,"./PhaserBitmapTextFactory":44,"./PhaserBitmapTextLoad":45,"./PhaserBitmapTextStart":46,"./PhaserBitmapTextSystem":47,"./PhaserText":48}],50:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./score/index"));

},{"./score/index":53}],51:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base");
var index_2 = require("../../base");
var index_3 = require("..");

var Score = function () {
    function Score(position, font) {
        _classCallCheck(this, Score);

        this.position = position;
        this.font = font;
    }

    _createClass(Score, [{
        key: "create",
        value: function create() {
            return new index_2.MapComponentPool([new index_3.ScoreComponent(), new index_1.BaseBitmapText(this.position, this.font, '0')]);
        }
    }]);

    return Score;
}();

exports.Score = Score;

},{"..":50,"../../base":20}],52:[function(require,module,exports){
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

},{"../../base":20}],53:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Score"));
__export(require("./ScoreComponent"));

},{"./Score":51,"./ScoreComponent":52}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
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

},{}],56:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./DuplicateError"));
__export(require("./NotFoundError"));

},{"./DuplicateError":54,"./NotFoundError":55}],57:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./errors/index"));
__export(require("./map/index"));
__export(require("./scalar/index"));

},{"./errors/index":56,"./map/index":60,"./scalar/index":63}],58:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var MapFromIterable = function () {
    function MapFromIterable(entries, getKeyValueFn) {
        _classCallCheck(this, MapFromIterable);

        this.entries = entries;
        this.getKeyValueFn = getKeyValueFn;
    }

    _createClass(MapFromIterable, [{
        key: "value",
        value: function value() {
            var _this = this;

            return new Map(this.entries.map(function (entry) {
                return _this.getKeyValueFn(entry);
            }));
        }
    }]);

    return MapFromIterable;
}();

exports.MapFromIterable = MapFromIterable;

},{}],59:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("../scalar");

var MapOf = function () {
    function MapOf(entries, getKeyValueFn) {
        _classCallCheck(this, MapOf);

        this.map = new index_2.StickyScalar(entries instanceof index_1.MapFromIterable ? entries : new index_1.MapFromIterable(entries, getKeyValueFn));
    }

    _createClass(MapOf, [{
        key: "clear",
        value: function clear() {
            this.map.value().clear();
        }
    }, {
        key: "delete",
        value: function _delete(key) {
            return this.map.value().delete(key);
        }
    }, {
        key: "forEach",
        value: function forEach(callbackfn, thisArg) {
            this.map.value().forEach(callbackfn, thisArg);
        }
    }, {
        key: "get",
        value: function get(key) {
            return this.map.value().get(key);
        }
    }, {
        key: "has",
        value: function has(key) {
            return this.map.value().has(key);
        }
    }, {
        key: "set",
        value: function set(key, value) {
            this.map.value().set(key, value);
            return this;
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            return this.map.value()[Symbol.iterator]();
        }
    }, {
        key: "entries",
        value: function entries() {
            return this.map.value().entries();
        }
    }, {
        key: "keys",
        value: function keys() {
            return this.map.value().keys();
        }
    }, {
        key: "values",
        value: function values() {
            return this.map.value().values();
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            return this.map.value().toJSON();
        }
    }, {
        key: "size",
        get: function get() {
            return this.map.value().size;
        }
    }]);

    return MapOf;
}();

exports.MapOf = MapOf;

},{"../scalar":63,"./index":60}],60:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./MapOf"));
__export(require("./MapFromIterable"));

},{"./MapFromIterable":58,"./MapOf":59}],61:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var StickyScalar = function () {
    function StickyScalar(scalar) {
        _classCallCheck(this, StickyScalar);

        this.source = scalar;
        this.isDone = false;
    }

    _createClass(StickyScalar, [{
        key: "value",
        value: function value() {
            if (!this.isDone) {
                this.result = this.source.value();
                this.source = null; // lose source, no longer need it
                this.isDone = true;
            }
            return this.result;
        }
    }]);

    return StickyScalar;
}();

exports.StickyScalar = StickyScalar;

},{}],62:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var StringOf = function () {
    function StringOf(value) {
        _classCallCheck(this, StringOf);

        this.obj = value;
    }

    _createClass(StringOf, [{
        key: "value",
        value: function value() {
            return this.obj.toString();
        }
    }]);

    return StringOf;
}();

exports.StringOf = StringOf;

},{}],63:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./StickyScalar"));
__export(require("./StringOf"));

},{"./StickyScalar":61,"./StringOf":62}]},{},[39])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9CYXNlQ29tcG9uZW50SWQudHMiLCJzcmMvZWNzL2Jhc2UvY29tcG9uZW50L0NvbXBvbmVudER1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9NYXBDb21wb25lbnRQb29sLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eS50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eUlkLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9CYXNlRW50aXR5UG9vbC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQ29tcG9uZW50U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9FbnRpdHlTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvZW50aXR5L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvQmFzZUJpdG1hcEZvbnQudHMiLCJzcmMvZWNzL2Jhc2UvZm9udC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvaWQvQmFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL2lkL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZVBvb2wudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvTG9hZC50cyIsInNyYy9lY3MvYmFzZS9waGFzZS9QaGFzZUV4ZWN1dGUudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvU3RhcnQudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvcG9zaXRpb24vQmFzZVBvc2l0aW9uLnRzIiwic3JjL2Vjcy9iYXNlL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtLnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtQ29sbGVjdGlvbi50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2Uvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3RleHQvQmFzZUJpdG1hcFRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9SZWFkVGV4dC50cyIsInNyYy9lY3MvYmFzZS90ZXh0L1JlYWRXcml0ZVRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS93b3JsZC9CYXNlV29ybGQudHMiLCJzcmMvZWNzL2Jhc2Uvd29ybGQvaW5kZXgudHMiLCJzcmMvZWNzL21haW4udHMiLCJzcmMvZWNzL3BoYXNlci9mb250L1BoYXNlckJpdG1hcEZvbnRMb2FkLnRzIiwic3JjL2Vjcy9waGFzZXIvZm9udC9pbmRleC50cyIsInNyYy9lY3MvcGhhc2VyL2luZGV4LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dExvYWQudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHRTdGFydC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dFN5c3RlbS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyVGV4dC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvaW5kZXgudHMiLCJzcmMvZWNzL3BvbmcvaW5kZXgudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmUudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmVDb21wb25lbnQudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvaW5kZXgudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvRHVwbGljYXRlRXJyb3IudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvTm90Rm91bmRFcnJvci50cyIsInNyYy9lY3Mvc3lzdGVtL2Vycm9ycy9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9zeXN0ZW0vbWFwL01hcEZyb21JdGVyYWJsZS50cyIsInNyYy9lY3Mvc3lzdGVtL21hcC9NYXBPZi50cyIsInNyYy9lY3Mvc3lzdGVtL21hcC9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL3NjYWxhci9TdGlja3lTY2FsYXIudHMiLCJzcmMvZWNzL3N5c3RlbS9zY2FsYXIvU3RyaW5nT2YudHMiLCJzcmMvZWNzL3N5c3RlbS9zY2FsYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O3NEQ0FBOztJQUF1Qjs7O0FBQ25CO0FBQ0ksQUFBSyxBQUFFLEFBQUMsQUFDWjs7O0FBQUMsQUFFTSxBQUFJOzs7OztBQUNQLEFBQXNCO0FBQ3RCLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFBQVMsWUFBRyxBQUFNLE9BQUMsQUFBWSxhQUFDLEFBQVEsQUFBQztBQUNwRCxBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFtQixzQkFBRyxBQUFNLE9BQUMsQUFBWSxhQUFDLEFBQVEsQUFBQztBQUM5RCxBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFxQix3QkFBRyxBQUFJLEFBQUM7QUFDeEMsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBbUIsc0JBQUcsQUFBSSxBQUFDO0FBQ3RDLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFBQWMsaUJBQUcsQUFBSSxBQUFDO0FBQ2pDLEFBQUksaUJBQUMs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LEFBQU0sbUJBQUMsQUFBSSxLQUFDLEFBQUcsSUFBQyxBQUFLLEFBQUUsUUFBQyxBQUFJLEFBQUMsQUFDakM7QUFBQyxBQUNEOzs7Ozs7QUFqQ0osZ0JBZ0RDOzs7Ozs7Ozs7OztBQ3JERCxpQkFBd0I7QUFDeEIsaUJBQWtDOzs7Ozs7Ozs7c0RDQ2xDOzs7QUFLSSwwQkFBWSxBQUFpQjs7O0FBQ3pCLEFBQUksYUFBQyxBQUFNLFNBQUcsQUFBTSxBQUFDO0FBQ3JCLEFBQUksYUFBQyxBQUFNLFNBQUcsQUFBSyxBQUFDLEFBQ3hCO0FBQUMsQUFDRCxBQUFLOzs7OztBQUNELEFBQUUsQUFBQyxnQkFBQyxDQUFDLEFBQUksS0FBQyxBQUFNLEFBQUMsUUFBQyxBQUFDO0FBQ2YsQUFBSSxxQkFBQyxBQUFNLFNBQUcsQUFBSSxLQUFDLEFBQU0sT0FBQyxBQUFLLEFBQUUsQUFBQztBQUNsQyxBQUFJLHFCQUFDLEFBQU0sU0FBRyxBQUFJLEFBQUMsTUFBQyxBQUFpQztBQUNyRCxBQUFJLHFCQUFDLEFBQU0sU0FBRyxBQUFJLEFBQUMsQUFDdkI7QUFBQztBQUVELEFBQU0sbUJBQUMsQUFBSSxLQUFDLEFBQU0sQUFBQyxBQUN2QjtBQUFDLEFBQ0o7Ozs7OztBQWxCRCx1QkFrQkM7Ozs7Ozs7OztzRENsQkQ7OztBQUdJLHNCQUFZLEFBQTZCOzs7QUFDckMsQUFBSSxhQUFDLEFBQUcsTUFBRyxBQUFLLEFBQUMsQUFDckI7QUFBQyxBQUNELEFBQUs7Ozs7O0FBQ0QsQUFBTSxtQkFBQyxBQUFJLEtBQUMsQUFBRyxJQUFDLEFBQVEsQUFBRSxBQUFDLEFBQy9CO0FBQUMsQUFDSjs7Ozs7O0FBVEQsbUJBU0M7Ozs7Ozs7Ozs7O0FDVkQsaUJBQStCO0FBQy9CLGlCQUEyQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY2xhc3MgQm9vdFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8gc2NhbGUgdG8gZml0IHNjcmVlblxyXG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLmZ1bGxTY3JlZW5TY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZm9yY2VMYW5kc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS53aW5kb3dDb25zdHJhaW50cy5ib3R0b20gPSAndmlzdWFsJzsgLy8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgZ28gb3ZlciBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgLy8ga2VlcCBwaXhlbHMgc2hhcnBcclxuICAgICAgICB0aGlzLmdhbWUuYW50aWFsaWFzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLnNtb290aGVkID0gZmFsc2U7XHJcbiAgICAgICAgUGhhc2VyLkNhbnZhcy5zZXRJbWFnZVJlbmRlcmluZ0NyaXNwKHRoaXMuZ2FtZS5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCb290U3RhdGUgfSBmcm9tICcuL0Jvb3RTdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vR2FtZVN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFY3NQb25nIHtcclxuICAgIHByaXZhdGUgX2dhbWU6IFBoYXNlci5HYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBuZXcgUGhhc2VyLkdhbWUoe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzYsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcclxuICAgICAgICAgICAgcGFyZW50OiAnZ2FtZS1jb250YWluZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3RTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lU3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZVdvcmxkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlRW50aXR5UG9vbCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICdAYmFzZS8vaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUG9zaXRpb24gfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBGb250IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGFydCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VFeGVjdXRlIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSAnQHBvbmcvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBwcml2YXRlIGVjczogQmFzZVdvcmxkO1xyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZm9udCA9IG5ldyBCYXNlQml0bWFwRm9udCgnUHJlc3MgU3RhcnQgMlAnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlBfMC5wbmcnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlAuZm50JywgMzIpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzID0gbmV3IEJhc2VFbnRpdHlQb29sKClcclxuICAgICAgICAgICAgLmNyZWF0ZU1hbnkoW1xyXG4gICAgICAgICAgICAgICAgbmV3IFNjb3JlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCYXNlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjUgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyICogZm9udC5zaXplKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQgKiBmb250LnNpemUoKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQmFzZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc1ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMiAqIGZvbnQuc2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0ICogZm9udC5zaXplKClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5lY3MgPSBuZXcgQmFzZVdvcmxkKFxyXG4gICAgICAgICAgICBlbnRpdGllcyxcclxuICAgICAgICAgICAgbmV3IEJhc2VTeXN0ZW1Db2xsZWN0aW9uKFtcclxuICAgICAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtKGVudGl0aWVzLCB0aGlzLmdhbWUubG9hZCwgdGhpcy5nYW1lLmFkZClcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlRXhlY3V0ZSh0aGlzLmVjcy5zeXN0ZW1zKCksIExvYWQuSUQpXHJcbiAgICAgICAgICAgIC5leGVjdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZUV4ZWN1dGUodGhpcy5lY3Muc3lzdGVtcygpLCBTdGFydC5JRClcclxuICAgICAgICAgICAgLmV4ZWN1dGUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUlkIH0gZnJvbSAnQGJhc2UvaWQvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50SWQgaW1wbGVtZW50cyBDb21wb25lbnRJZCB7XHJcbiAgICBwcml2YXRlIGlkOiBJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogU2NhbGFyPHN0cmluZz4gfCBJZCB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBuZXcgQmFzZUlkKGlkKTtcclxuICAgIH1cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQudmFsdWUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBEdXBsaWNhdGVFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBOb3RGb3VuZEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnREdXBsaWNhdGVFcnJvciB9IGZyb20gJ0BiYXNlL2NvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAYmFzZS9jb21wb25lbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IE1hcE9mIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50UG9vbCBpbXBsZW1lbnRzIENvbXBvbmVudFBvb2wge1xyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDxDb21wb25lbnRJZCwgQ29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD4gfCBDb21wb25lbnRbXSA9IG5ldyBNYXAoKSkge1xyXG4gICAgICAgIHRoaXMubWFwID0gY29tcG9uZW50cyBpbnN0YW5jZW9mIE1hcCA/XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHMgOlxyXG4gICAgICAgICAgICBuZXcgTWFwT2YoY29tcG9uZW50cyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9PiBbY29tcG9uZW50LmlkKCksIGNvbXBvbmVudF1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGF0dGFjaChjb21wb25lbnQ6IENvbXBvbmVudCk6IENvbXBvbmVudFBvb2wge1xyXG4gICAgICAgIGlmICh0aGlzLm1hcC5oYXMoY29tcG9uZW50LmlkKCkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21wb25lbnREdXBsaWNhdGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hcC5zZXQoY29tcG9uZW50LmlkKCksIGNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoTWFueShjb21wb25lbnRzOiBDb21wb25lbnRbXSk6IENvbXBvbmVudFBvb2wge1xyXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaChjb21wb25lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGRldGFjaChpZDogQ29tcG9uZW50SWQpOiBDb21wb25lbnRQb29sIHtcclxuICAgICAgICB0aGlzLm1hcC5kZWxldGUoaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhhcyhjb21wb25lbnRzOiBDb21wb25lbnRJZFtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuZXZlcnkoaWQgPT4gdGhpcy5tYXAuaGFzKGlkKSk7XHJcbiAgICB9XHJcbiAgICBnZXQ8VCBleHRlbmRzIENvbXBvbmVudD4oY29tcG9uZW50OiBDb21wb25lbnRJZCk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXAuaGFzKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbXBvbmVudE5vdEZvdW5kRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoY29tcG9uZW50KSBhcyBUO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQ29tcG9uZW50SWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbXBvbmVudER1cGxpY2F0ZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnROb3RGb3VuZEVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9NYXBDb21wb25lbnRQb29sJzsiLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnROb3RGb3VuZEVycm9yIH0gZnJvbSAnQGJhc2UvY29tcG9uZW50L2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgfSBmcm9tICdAYmFzZS9jb21wb25lbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnRQb29sIH0gZnJvbSAnQGJhc2UvY29tcG9uZW50L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5IGltcGxlbWVudHMgRW50aXR5IHtcclxuICAgIHByaXZhdGUgZW50aXR5SWQ6IEVudGl0eUlkO1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlDb21wb25lbnRzOiBDb21wb25lbnRQb29sO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBpZDogRW50aXR5SWQsXHJcbiAgICAgICAgY29tcG9uZW50czogQ29tcG9uZW50UG9vbCA9IG5ldyBNYXBDb21wb25lbnRQb29sKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZW50aXR5SWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVudGl0eUNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xyXG4gICAgfVxyXG4gICAgaWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eUlkO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlDb21wb25lbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICdAYmFzZS9pZC9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHlJZCBpbXBsZW1lbnRzIEVudGl0eUlkIHtcclxuICAgIHByaXZhdGUgaWQ6IElkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBTY2FsYXI8c3RyaW5nPiB8IElkIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBCYXNlSWQoaWQpO1xyXG4gICAgfVxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZC52YWx1ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUHJlZmFiIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnQGJhc2UvZW50aXR5L2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUVudGl0eUlkIH0gZnJvbSAnQGJhc2UvZW50aXR5L2luZGV4JztcclxuaW1wb3J0IHsgU3RyaW5nT2YgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5UG9vbCBpbXBsZW1lbnRzIEVudGl0eVBvb2wge1xyXG4gICAgcHJpdmF0ZSBwb29sOiBFbnRpdHlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5W10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IGVudGl0aWVzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXROZXdJZCgpOiBFbnRpdHlJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNlRW50aXR5SWQobmV3IFN0cmluZ09mKHRoaXMucG9vbC5sZW5ndGgpKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZShjb21wb25lbnRzPzogQ29tcG9uZW50UG9vbCk6IEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEJhc2VFbnRpdHkodGhpcy5nZXROZXdJZCgpLCBjb21wb25lbnRzKTtcclxuICAgICAgICB0aGlzLnBvb2wucHVzaChlbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTWFueShwcmVmYWJzOiBQcmVmYWJbXSk6IEVudGl0eVBvb2wge1xyXG4gICAgICAgIHByZWZhYnMuZm9yRWFjaChwcmVmYWIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHByZWZhYi5jcmVhdGUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGVudGl0aWVzKCk6IEVudGl0eVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29sO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFNlYXJjaCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICdAYmFzZS9lbnRpdHkvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFNlYXJjaDxUIGV4dGVuZHMgQ29tcG9uZW50PiBpbXBsZW1lbnRzIFNlYXJjaDxUPiB7XHJcbiAgICBwcml2YXRlIGlkOiBDb21wb25lbnRJZDtcclxuICAgIHByaXZhdGUgZW50aXR5U2VhcmNoOiBFbnRpdHlTZWFyY2g7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IENvbXBvbmVudElkLFxyXG4gICAgICAgIGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoID0gbmV3IEVudGl0eVNlYXJjaChpZClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVudGl0eVNlYXJjaCA9IGVudGl0eVNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlYXJjaC5maW5kKHBvb2wpXHJcbiAgICAgICAgICAgIC5tYXAoZW50aXR5ID0+IGVudGl0eS5jb21wb25lbnRzKCkuZ2V0PFQ+KHRoaXMuaWQpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eVNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxFbnRpdHk+IHtcclxuICAgIHByaXZhdGUgaWRzOiBDb21wb25lbnRJZFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkczogQ29tcG9uZW50SWRbXSB8IENvbXBvbmVudElkKSB7XHJcbiAgICAgICAgdGhpcy5pZHMgPSAoaWRzICYmIGlkcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpID9cclxuICAgICAgICAgICAgaWRzIGFzIENvbXBvbmVudElkW10gOlxyXG4gICAgICAgICAgICBbaWRzIGFzIENvbXBvbmVudElkXTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuZW50aXRpZXMoKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuY29tcG9uZW50cygpLmhhcyh0aGlzLmlkcykpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5SWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VFbnRpdHlQb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnRTZWFyY2gnO1xyXG5leHBvcnQgKiBmcm9tICcuL0VudGl0eVNlYXJjaCc7IiwiZXhwb3J0IGNsYXNzIEJhc2VCaXRtYXBGb250IHtcclxuICAgIHByaXZhdGUga2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhdGxhc1BhdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgZm9udFNpemU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgaW1hZ2VQYXRoOiBzdHJpbmcsIGF0bGFzUGF0aDogc3RyaW5nLCBzaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcclxuICAgICAgICB0aGlzLmF0bGFzUGF0aCA9IGF0bGFzUGF0aDtcclxuICAgICAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBhdGxhcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udFNpemU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJ0BiYXNlL2VudGl0eS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnQGJhc2UvdGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQml0bWFwRm9udFNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxCaXRtYXBGb250PiB7XHJcbiAgICBwcml2YXRlIHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+ID0gbmV3IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0Q29tcG9uZW50PihCYXNlQml0bWFwVGV4dC5JRCkpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBCaXRtYXBGb250W10ge1xyXG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldCgvLyB1bmlxdWUgc2V0XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmZpbmQocG9vbClcclxuICAgICAgICAgICAgICAgIC5tYXAodGV4dCA9PiB0ZXh0LmZvbnQoKSlcclxuICAgICAgICApXTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUJpdG1hcEZvbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0JpdG1hcEZvbnRTZWFyY2gnOyIsImltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuaW1wb3J0IHsgU3RyaW5nT2YgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlSWQgaW1wbGVtZW50cyBJZCB7XHJcbiAgICBwcml2YXRlIHNjYWxhcjogU2NhbGFyPHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IFNjYWxhcjxzdHJpbmc+IHwgSWQgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNjYWxhciA9IHR5cGVvZiBpZCA9PT0gJ3N0cmluZycgP1xyXG4gICAgICAgICAgICBuZXcgU3RyaW5nT2YoaWQpIDpcclxuICAgICAgICAgICAgaWQ7XHJcbiAgICB9XHJcbiAgICB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxhci52YWx1ZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlSWQnOyIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9lbnRpdHkvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZvbnQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lkL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9waGFzZS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcG9zaXRpb24vaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N5c3RlbS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd29ybGQvaW5kZXgnOyIsImltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICdAYmFzZS9pZC9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQaGFzZUlkIGltcGxlbWVudHMgUGhhc2VJZCB7XHJcbiAgICBwcml2YXRlIGlkOiBJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogU2NhbGFyPHN0cmluZz4gfCBJZCB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBuZXcgQmFzZUlkKGlkKTtcclxuICAgIH1cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQudmFsdWUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlUG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IE1hcE9mIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVBoYXNlUG9vbCBpbXBsZW1lbnRzIFBoYXNlUG9vbCB7XHJcbiAgICBwcml2YXRlIHBoYXNlczogTWFwPFBoYXNlSWQsIFBoYXNlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaGFzZXM6IFBoYXNlW10gfCBNYXA8UGhhc2VJZCwgUGhhc2U+KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZXMgPSBwaGFzZXMgaW5zdGFuY2VvZiBNYXAgP1xyXG4gICAgICAgICAgICBwaGFzZXMgOlxyXG4gICAgICAgICAgICBuZXcgTWFwT2YocGhhc2VzLCBwaGFzZSA9PlxyXG4gICAgICAgICAgICAgICAgW3BoYXNlLmlkKCksIHBoYXNlXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhpZDogUGhhc2VJZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlcy5oYXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldDxUIGV4dGVuZHMgUGhhc2U+KGlkOiBQaGFzZUlkKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VzLmdldChpZCkgYXMgVDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VJZCB9IGZyb20gJ0BiYXNlL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkIGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlUGhhc2VJZChMb2FkLm5hbWUpO1xyXG4gICAgcHJpdmF0ZSBjYWxsYmFjazogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuICAgIGlkKCk6IFBoYXNlSWQge1xyXG4gICAgICAgIHJldHVybiBMb2FkLklEO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZVNlYXJjaCB9IGZyb20gJ0BiYXNlL3N5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VFeGVjdXRlIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbjtcclxuICAgIHByaXZhdGUgc2VhcmNoOiBQaGFzZVNlYXJjaDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uLCBzZWFyY2g6IFBoYXNlU2VhcmNoIHwgUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IHN5c3RlbXM7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSAoc2VhcmNoIGluc3RhbmNlb2YgUGhhc2VTZWFyY2gpID8gc2VhcmNoIDogbmV3IFBoYXNlU2VhcmNoKHNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlYXJjaC5maW5kKHRoaXMuc3lzdGVtcylcclxuICAgICAgICAgICAgLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuZXhlY3V0ZSgpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VJZCB9IGZyb20gJ0BiYXNlL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydCBpbXBsZW1lbnRzIFBoYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZVBoYXNlSWQoU3RhcnQubmFtZSk7XHJcbiAgICBwcml2YXRlIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXJ0LklEO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlUGhhc2VQb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZUV4ZWN1dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1N0YXJ0JzsiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUG9zaXRpb24gaW1wbGVtZW50cyBQb3NpdGlvbiB7XHJcbiAgICBwcml2YXRlIGNvb3JkaW5hdGVzOiBudW1iZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc1sxXTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVBvc2l0aW9uJzsiLCJpbXBvcnQgeyBQaGFzZVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQaGFzZVBvb2wgfSBmcm9tICdAYmFzZS9waGFzZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVN5c3RlbSBpbXBsZW1lbnRzIFN5c3RlbSB7XHJcbiAgICBwcml2YXRlIHBoYXNlUG9vbDogUGhhc2VQb29sO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBoYXNlczogUGhhc2VQb29sIHwgUGhhc2VbXSB8IE1hcDxQaGFzZUlkLCBQaGFzZT4pIHtcclxuICAgICAgICB0aGlzLnBoYXNlUG9vbCA9IChwaGFzZXMgaW5zdGFuY2VvZiBBcnJheSB8fCBwaGFzZXMgaW5zdGFuY2VvZiBNYXApID9cclxuICAgICAgICAgICAgbmV3IEJhc2VQaGFzZVBvb2wocGhhc2VzKSA6XHJcbiAgICAgICAgICAgIHBoYXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwaGFzZXMoKTogUGhhc2VQb29sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZVBvb2w7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVN5c3RlbUNvbGxlY3Rpb24gaW1wbGVtZW50cyBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3lzdGVtcz86IFN5c3RlbVtdKSB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zID0gc3lzdGVtcyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihzeXN0ZW06IFN5c3RlbSk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5wdXNoKHN5c3RlbSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyTWFueShzeXN0ZW1zOiBTeXN0ZW1bXSk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHN5c3RlbXMuZm9yRWFjaChzeXN0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHN5c3RlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihpZDogUGhhc2VJZCk6IFN5c3RlbVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1zLmZpbHRlcihzeXN0ZW0gPT5cclxuICAgICAgICAgICAgc3lzdGVtLnBoYXNlcygpLmhhcyhpZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3lzdGVtU2VhcmNoIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZVNlYXJjaCBpbXBsZW1lbnRzIFN5c3RlbVNlYXJjaDxQaGFzZT4ge1xyXG4gICAgcHJpdmF0ZSBpZDogUGhhc2VJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pOiBQaGFzZVtdIHtcclxuICAgICAgICByZXR1cm4gc3lzdGVtcy5maWx0ZXIodGhpcy5pZClcclxuICAgICAgICAgICAgLm1hcChzeXN0ZW0gPT4gc3lzdGVtLnBoYXNlcygpLmdldCh0aGlzLmlkKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VTeXN0ZW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VTeXN0ZW1Db2xsZWN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZVNlYXJjaCc7IiwiaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJ0BiYXNlL2NvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IFJlYWRXcml0ZVRleHQgfSBmcm9tICdAYmFzZS90ZXh0L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQml0bWFwVGV4dCBpbXBsZW1lbnRzIEJpdG1hcFRleHRDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoQmFzZUJpdG1hcFRleHQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXh0UG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuICAgIHByaXZhdGUgd3JpdGVUZXh0OiBSZWFkV3JpdGVUZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCwgdGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnRleHRGb250ID0gZm9udDtcclxuICAgICAgICB0aGlzLndyaXRlVGV4dCA9IG5ldyBSZWFkV3JpdGVUZXh0KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gQmFzZUJpdG1hcFRleHQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHQoKTogV3JpdGVUZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZVRleHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlYWRUZXh0IGltcGxlbWVudHMgVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWFkV3JpdGVUZXh0IGltcGxlbWVudHMgV3JpdGVUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQml0bWFwVGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVhZFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlYWRXcml0ZVRleHQnOyIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VXb3JsZCBpbXBsZW1lbnRzIFdvcmxkIHtcclxuICAgIHByaXZhdGUgZW50aXR5UG9vbDogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgc3lzdGVtQ29sbGVjdGlvbjogU3lzdGVtQ29sbGVjdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuZW50aXR5UG9vbCA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMuc3lzdGVtQ29sbGVjdGlvbiA9IHN5c3RlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXRpZXMoKTogRW50aXR5UG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5UG9vbDtcclxuICAgIH1cclxuXHJcbiAgICBzeXN0ZW1zKCk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbGxlY3Rpb247XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VXb3JsZCc7IiwiaW1wb3J0IHsgRWNzUG9uZyB9IGZyb20gJy4vRWNzUG9uZyc7XHJcblxyXG5uZXcgRWNzUG9uZygpLnN0YXJ0KCk7IiwiaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBGb250TG9hZCB7XHJcbiAgICBwcml2YXRlIGxvYWRlcjogUGhhc2VyLkxvYWRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKGZvbnRzOiBCaXRtYXBGb250W10pOiBQaGFzZXJCaXRtYXBGb250TG9hZCB7XHJcbiAgICAgICAgZm9udHMuZm9yRWFjaChmb250ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuYml0bWFwRm9udChcclxuICAgICAgICAgICAgICAgIGZvbnQuaWQoKSxcclxuICAgICAgICAgICAgICAgIGZvbnQuaW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIGZvbnQuYXRsYXMoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwRm9udExvYWQnOyIsImV4cG9ydCAqIGZyb20gJy4vZm9udC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC9pbmRleCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUG9zaXRpb24gfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlclRleHQgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0IGltcGxlbWVudHMgQml0bWFwVGV4dENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VDb21wb25lbnRJZChQaGFzZXJCaXRtYXBUZXh0Lm5hbWUpO1xyXG4gICAgcHJpdmF0ZSBiaXRtYXBUZXh0OiBQaGFzZXIuQml0bWFwVGV4dDtcclxuICAgIHByaXZhdGUgdGV4dEZvbnQ6IEJpdG1hcEZvbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogUGhhc2VyLkJpdG1hcFRleHQsIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLmJpdG1hcFRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBmb250O1xyXG4gICAgfVxyXG4gICAgaWQoKTogQ29tcG9uZW50SWQge1xyXG4gICAgICAgIHJldHVybiBQaGFzZXJCaXRtYXBUZXh0LklEO1xyXG4gICAgfVxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFzZVBvc2l0aW9uKHRoaXMuYml0bWFwVGV4dC54LCB0aGlzLmJpdG1hcFRleHQueSk7XHJcbiAgICB9XHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG4gICAgdGV4dCgpOiBXcml0ZVRleHQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyVGV4dCh0aGlzLmJpdG1hcFRleHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSh0ZXh0OiBCaXRtYXBUZXh0Q29tcG9uZW50KTogUGhhc2VyLkJpdG1hcFRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkuYml0bWFwVGV4dChcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueCgpKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueSgpKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuaWQoKSxcclxuICAgICAgICAgICAgdGV4dC50ZXh0KCkudmFsdWUoKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuc2l6ZSgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250U2VhcmNoIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBGb250TG9hZCB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRMb2FkIGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHJpdmF0ZSBwaGFzZTogUGhhc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMucGhhc2UgPSBuZXcgTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBGb250TG9hZChsb2FkZXIpXHJcbiAgICAgICAgICAgICAgICAubG9hZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQml0bWFwRm9udFNlYXJjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKGVudGl0aWVzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlkKCk6IFBoYXNlSWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlLmlkKCk7XHJcbiAgICB9XHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGhhc2UuZXhlY3V0ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN0YXJ0IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0IH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHJpdmF0ZSBwaGFzZTogUGhhc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGZhY3Rvcnk6IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZSA9IG5ldyBTdGFydCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBFbnRpdHlTZWFyY2goQmFzZUJpdG1hcFRleHQuSUQpXHJcbiAgICAgICAgICAgICAgICAuZmluZChlbnRpdGllcylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVudGl0eS5jb21wb25lbnRzKCkuZ2V0PEJpdG1hcFRleHRDb21wb25lbnQ+KEJhc2VCaXRtYXBUZXh0LklEKTtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY29tcG9uZW50cygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5LmNyZWF0ZSh0ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXRhY2godGV4dC5pZCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2UuaWQoKTtcclxuICAgIH1cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5waGFzZS5leGVjdXRlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbSB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dExvYWQgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcblxyXG4vKipcclxuICogTG9hZHMgYW5kIGNyZWF0ZXMgYml0bWFwIHRleHQgdXNpbmcgUGhhc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRTeXN0ZW0gaW1wbGVtZW50cyBTeXN0ZW0ge1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW06IFN5c3RlbTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgbG9hZGVyOiBQaGFzZXIuTG9hZGVyLCBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLnN5c3RlbSA9IG5ldyBCYXNlU3lzdGVtKFtcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRMb2FkKGVudGl0aWVzLCBsb2FkZXIpLFxyXG4gICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dFN0YXJ0KFxyXG4gICAgICAgICAgICAgICAgZW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkoZmFjdG9yeSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG4gICAgcGhhc2VzKCk6IFBoYXNlUG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtLnBoYXNlcygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgV3JpdGVUZXh0IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlclRleHQgaW1wbGVtZW50cyBXcml0ZVRleHQge1xyXG4gICAgcHJpdmF0ZSB0ZXh0T2JqOiB7IHRleHQ6IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IFBoYXNlci5CaXRtYXBUZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0T2JqID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRPYmoudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50ZXh0T2JqLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dExvYWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRTdGFydCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dFN5c3RlbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyVGV4dCc7IiwiZXhwb3J0ICogZnJvbSAnLi9zY29yZS9pbmRleCc7IiwiaW1wb3J0IHsgUHJlZmFiIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQml0bWFwVGV4dCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50UG9vbCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFNjb3JlQ29tcG9uZW50IH0gZnJvbSAnQHBvbmcvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlIGltcGxlbWVudHMgUHJlZmFiIHtcclxuICAgIHByaXZhdGUgcG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBmb250OiBCaXRtYXBGb250O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiBDb21wb25lbnRQb29sIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hcENvbXBvbmVudFBvb2woW1xyXG4gICAgICAgICAgICBuZXcgU2NvcmVDb21wb25lbnQoKSxcclxuICAgICAgICAgICAgbmV3IEJhc2VCaXRtYXBUZXh0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9udCxcclxuICAgICAgICAgICAgICAgICcwJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50LCBTY2FsYXI8bnVtYmVyPiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VDb21wb25lbnRJZChTY29yZUNvbXBvbmVudC5uYW1lKTtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIH1cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gU2NvcmVDb21wb25lbnQuSUQ7XHJcbiAgICB9XHJcbiAgICB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgfVxyXG4gICAgaW5jcmVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vU2NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Njb3JlQ29tcG9uZW50JzsiLCJleHBvcnQgY2xhc3MgRHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIER1cGxpY2F0ZUVycm9yKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBOb3RGb3VuZEVycm9yKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vRHVwbGljYXRlRXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL05vdEZvdW5kRXJyb3InOyIsImV4cG9ydCAqIGZyb20gJy4vZXJyb3JzL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9tYXAvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NjYWxhci9pbmRleCc7IiwiaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQHN5c3RlbS9zY2FsYXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcEZyb21JdGVyYWJsZTxaLCBLLCBWPiBpbXBsZW1lbnRzIFNjYWxhcjxNYXA8SywgVj4+IHtcclxuICAgIHByaXZhdGUgZW50cmllczogWltdO1xyXG4gICAgcHJpdmF0ZSBnZXRLZXlWYWx1ZUZuOiAoejogWikgPT4gW0ssIFZdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudHJpZXM6IFpbXSwgZ2V0S2V5VmFsdWVGbjogKHo6IFopID0+IFtLLCBWXSkge1xyXG4gICAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XHJcbiAgICAgICAgdGhpcy5nZXRLZXlWYWx1ZUZuID0gZ2V0S2V5VmFsdWVGbjtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZSgpOiBNYXA8SywgVj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWFwKFxyXG4gICAgICAgICAgICB0aGlzLmVudHJpZXMubWFwKGVudHJ5ID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEtleVZhbHVlRm4oZW50cnkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufSIsIlxyXG5pbXBvcnQgeyBNYXBGcm9tSXRlcmFibGUgfSBmcm9tICdAc3lzdGVtL21hcC9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU3RpY2t5U2NhbGFyIH0gZnJvbSAnQHN5c3RlbS9zY2FsYXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcE9mPFosIEssIFY+IGltcGxlbWVudHMgTWFwPEssIFY+IHtcclxuICAgIHByaXZhdGUgbWFwOiBTY2FsYXI8TWFwPEssIFY+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRyaWVzOiBNYXBGcm9tSXRlcmFibGU8WiwgSywgVj4gfCBaW10sIGdldEtleVZhbHVlRm4/OiAoejogWikgPT4gW0ssIFZdKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSAgbmV3IFN0aWNreVNjYWxhcjxNYXA8SywgVj4+KFxyXG4gICAgICAgICAgICBlbnRyaWVzIGluc3RhbmNlb2YgTWFwRnJvbUl0ZXJhYmxlID9cclxuICAgICAgICAgICAgICAgIGVudHJpZXMgOlxyXG4gICAgICAgICAgICAgICAgbmV3IE1hcEZyb21JdGVyYWJsZShlbnRyaWVzLCBnZXRLZXlWYWx1ZUZuKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZWFkb25seSBbU3ltYm9sLnRvU3RyaW5nVGFnXTogJ01hcCc7XHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hcC52YWx1ZSgpLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUoa2V5OiBLKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKCkuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcbiAgICBmb3JFYWNoKGNhbGxiYWNrZm46ICh2YWx1ZTogViwga2V5OiBLLCBtYXA6IE1hcDxLLCBWPikgPT4gdm9pZCwgdGhpc0FyZz86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFwLnZhbHVlKCkuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnKTtcclxuICAgIH1cclxuICAgIGdldChrZXk6IEspOiBWIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKS5nZXQoa2V5KTtcclxuICAgIH1cclxuICAgIGhhcyhrZXk6IEspOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKS5oYXMoa2V5KTtcclxuICAgIH1cclxuICAgIHNldChrZXk6IEssIHZhbHVlOiBWKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5tYXAudmFsdWUoKS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpLnNpemU7XHJcbiAgICB9XHJcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYWJsZUl0ZXJhdG9yPFtLLCBWXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgIH1cclxuICAgIGVudHJpZXMoKTogSXRlcmFibGVJdGVyYXRvcjxbSywgVl0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKS5lbnRyaWVzKCk7XHJcbiAgICB9XHJcbiAgICBrZXlzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Sz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpLmtleXMoKTtcclxuICAgIH1cclxuICAgIHZhbHVlcygpOiBJdGVyYWJsZUl0ZXJhdG9yPFY+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKS52YWx1ZXMoKTtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKS50b0pTT04oKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL01hcE9mJztcclxuZXhwb3J0ICogZnJvbSAnLi9NYXBGcm9tSXRlcmFibGUnOyIsImltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vc2NhbGFyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGlja3lTY2FsYXI8VD4gaW1wbGVtZW50cyBTY2FsYXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBzb3VyY2U6IFNjYWxhcjxUPjtcclxuICAgIHByaXZhdGUgcmVzdWx0OiBUO1xyXG4gICAgcHJpdmF0ZSBpc0RvbmU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NhbGFyOiBTY2FsYXI8VD4pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNjYWxhcjtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFsdWUoKTogVCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuc291cmNlLnZhbHVlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gbnVsbDsgLy8gbG9zZSBzb3VyY2UsIG5vIGxvbmdlciBuZWVkIGl0XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb25lID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vc2NhbGFyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdPZiBpbXBsZW1lbnRzIFNjYWxhcjxzdHJpbmc+IHtcclxuICAgIHByaXZhdGUgb2JqOiB7IHRvU3RyaW5nKCk6IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiB7IHRvU3RyaW5nKCk6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5vYmogPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1NjYWxhcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3RpY2t5U2NhbGFyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdHJpbmdPZic7Il19
