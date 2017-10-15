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
        key: "detach",
        value: function detach(id) {
            this.map.delete(id);
            return this;
        }
    }, {
        key: "has",
        value: function has(components) {
            var _this = this;

            return components.every(function (id) {
                return _this.map.has(id);
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
    }, {
        key: "replace",
        value: function replace(id, callback) {
            return this.attach(callback(this.get(id))).detach(id);
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
                entity.components().replace(index_3.BaseBitmapText.ID, function (text) {
                    return new index_4.PhaserBitmapText(factory.create(text), text.font());
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9CYXNlQ29tcG9uZW50SWQudHMiLCJzcmMvZWNzL2Jhc2UvY29tcG9uZW50L0NvbXBvbmVudER1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9NYXBDb21wb25lbnRQb29sLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eS50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eUlkLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9CYXNlRW50aXR5UG9vbC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQ29tcG9uZW50U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9FbnRpdHlTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvZW50aXR5L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvQmFzZUJpdG1hcEZvbnQudHMiLCJzcmMvZWNzL2Jhc2UvZm9udC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvaWQvQmFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL2lkL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZVBvb2wudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvTG9hZC50cyIsInNyYy9lY3MvYmFzZS9waGFzZS9QaGFzZUV4ZWN1dGUudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvU3RhcnQudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvcG9zaXRpb24vQmFzZVBvc2l0aW9uLnRzIiwic3JjL2Vjcy9iYXNlL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtLnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtQ29sbGVjdGlvbi50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2Uvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3RleHQvQmFzZUJpdG1hcFRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9SZWFkVGV4dC50cyIsInNyYy9lY3MvYmFzZS90ZXh0L1JlYWRXcml0ZVRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS93b3JsZC9CYXNlV29ybGQudHMiLCJzcmMvZWNzL2Jhc2Uvd29ybGQvaW5kZXgudHMiLCJzcmMvZWNzL21haW4udHMiLCJzcmMvZWNzL3BoYXNlci9mb250L1BoYXNlckJpdG1hcEZvbnRMb2FkLnRzIiwic3JjL2Vjcy9waGFzZXIvZm9udC9pbmRleC50cyIsInNyYy9lY3MvcGhhc2VyL2luZGV4LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dExvYWQudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHRTdGFydC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dFN5c3RlbS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyVGV4dC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvaW5kZXgudHMiLCJzcmMvZWNzL3BvbmcvaW5kZXgudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmUudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmVDb21wb25lbnQudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvaW5kZXgudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvRHVwbGljYXRlRXJyb3IudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvTm90Rm91bmRFcnJvci50cyIsInNyYy9lY3Mvc3lzdGVtL2Vycm9ycy9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9zeXN0ZW0vbWFwL01hcEZyb21JdGVyYWJsZS50cyIsInNyYy9lY3Mvc3lzdGVtL21hcC9NYXBPZi50cyIsInNyYy9lY3Mvc3lzdGVtL21hcC9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL3NjYWxhci9TdGlja3lTY2FsYXIudHMiLCJzcmMvZWNzL3N5c3RlbS9zY2FsYXIvU3RyaW5nT2YudHMiLCJzcmMvZWNzL3N5c3RlbS9zY2FsYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O3NEQ0FBOztJQUF1Qjs7O0FBQ25CO0FBQ0ksQUFBSyxBQUFFLEFBQUMsQUFDWjs7O0FBQUMsQUFFTSxBQUFJOzs7OztBQUNQLEFBQXNCO0FBQ3RCLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFBQVMsWUFBRyxBQUFNLE9BQUMsQUFBWSxhQUFDLEFBQVEsQUFBQztBQUNwRCxBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFtQixzQkFBRyxBQUFNLE9BQUMsQUFBWSxhQUFDLEFBQVEsQUFBQztBQUM5RCxBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFxQix3QkFBRyxBQUFJLEFBQUM7QUFDeEMsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBbUIsc0JBQUcsQUFBSSxBQUFDO0FBQ3RDLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFBQWMsaUJBQUcsQUFBSSxBQUFDO0FBQ2pDLEFBQUksaUJBQUMs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QWdEQzs7Ozs7Ozs7Ozs7QUNyREQsaUJBQXdCO0FBQ3hCLGlCQUFrQzs7Ozs7Ozs7O3NEQ0NsQzs7O0FBS0ksMEJBQVksQUFBaUI7OztBQUN6QixBQUFJLGFBQUMsQUFBTSxTQUFHLEFBQU0sQUFBQztBQUNyQixBQUFJLGFBQUMsQUFBTSxTQUFHLEFBQUssQUFBQyxBQUN4QjtBQUFDLEFBQ0QsQUFBSzs7Ozs7QUFDRCxBQUFFLEFBQUMsZ0JBQUMsQ0FBQyxBQUFJLEtBQUMsQUFBTSxBQUFDLFFBQUMsQUFBQztBQUNmLEFBQUkscUJBQUMsQUFBTSxTQUFHLEFBQUksS0FBQyxBQUFNLE9BQUMsQUFBSyxBQUFFLEFBQUM7QUFDbEMsQUFBSSxxQkFBQyxBQUFNLFNBQUcsQUFBSSxBQUFDLE1BQUMsQUFBaUM7QUFDckQsQUFBSSxxQkFBQyxBQUFNLFNBQUcsQUFBSSxBQUFDLEFBQ3ZCO0FBQUM7QUFFRCxBQUFNLG1CQUFDLEFBQUksS0FBQyxBQUFNLEFBQUMsQUFDdkI7QUFBQyxBQUNKOzs7Ozs7QUFsQkQsdUJBa0JDOzs7Ozs7Ozs7c0RDbEJEOzs7QUFHSSxzQkFBWSxBQUE2Qjs7O0FBQ3JDLEFBQUksYUFBQyxBQUFHLE1BQUcsQUFBSyxBQUFDLEFBQ3JCO0FBQUMsQUFDRCxBQUFLOzs7OztBQUNELEFBQU0sbUJBQUMsQUFBSSxLQUFDLEFBQUcsSUFBQyxBQUFRLEFBQUUsQUFBQyxBQUMvQjtBQUFDLEFBQ0o7Ozs7OztBQVRELG1CQVNDOzs7Ozs7Ozs7OztBQ1ZELGlCQUErQjtBQUMvQixpQkFBMkIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIEJvb3RTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIHNjYWxlIHRvIGZpdCBzY3JlZW5cclxuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mdWxsU2NyZWVuU2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUud2luZG93Q29uc3RyYWludHMuYm90dG9tID0gJ3Zpc3VhbCc7IC8vIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG92ZXIgc2NyZWVuIGhlaWdodFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgcGl4ZWxzIHNoYXJwXHJcbiAgICAgICAgdGhpcy5nYW1lLmFudGlhbGlhcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5zbW9vdGhlZCA9IGZhbHNlO1xyXG4gICAgICAgIFBoYXNlci5DYW52YXMuc2V0SW1hZ2VSZW5kZXJpbmdDcmlzcCh0aGlzLmdhbWUuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9vdFN0YXRlIH0gZnJvbSAnLi9Cb290U3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL0dhbWVTdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRWNzUG9uZyB7XHJcbiAgICBwcml2YXRlIF9nYW1lOiBQaGFzZXIuR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9nYW1lID0gbmV3IFBoYXNlci5HYW1lKHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTc2LFxyXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgICAgIHBhcmVudDogJ2dhbWUtY29udGFpbmVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290U3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZVN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VXb3JsZCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUVudGl0eVBvb2wgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnQGJhc2UvL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVBvc2l0aW9uIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQml0bWFwRm9udCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgTG9hZCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgU3RhcnQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlRXhlY3V0ZSB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dFN5c3RlbSB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gJ0Bwb25nL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgcHJpdmF0ZSBlY3M6IEJhc2VXb3JsZDtcclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBuZXcgQmFzZUJpdG1hcEZvbnQoJ1ByZXNzIFN0YXJ0IDJQJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQXzAucG5nJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQLmZudCcsIDMyKTtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IG5ldyBCYXNlRW50aXR5UG9vbCgpXHJcbiAgICAgICAgICAgIC5jcmVhdGVNYW55KFtcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQmFzZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI1ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMiAqIGZvbnQuc2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0ICogZm9udC5zaXplKClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2NvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJhc2VQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NSAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDIgKiBmb250LnNpemUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNCAqIGZvbnQuc2l6ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBmb250XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuZWNzID0gbmV3IEJhc2VXb3JsZChcclxuICAgICAgICAgICAgZW50aXRpZXMsXHJcbiAgICAgICAgICAgIG5ldyBCYXNlU3lzdGVtQ29sbGVjdGlvbihbXHJcbiAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dFN5c3RlbShlbnRpdGllcywgdGhpcy5nYW1lLmxvYWQsIHRoaXMuZ2FtZS5hZGQpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZUV4ZWN1dGUodGhpcy5lY3Muc3lzdGVtcygpLCBMb2FkLklEKVxyXG4gICAgICAgICAgICAuZXhlY3V0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBuZXcgUGhhc2VFeGVjdXRlKHRoaXMuZWNzLnN5c3RlbXMoKSwgU3RhcnQuSUQpXHJcbiAgICAgICAgICAgIC5leGVjdXRlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VJZCB9IGZyb20gJ0BiYXNlL2lkL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudElkIGltcGxlbWVudHMgQ29tcG9uZW50SWQge1xyXG4gICAgcHJpdmF0ZSBpZDogSWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IFNjYWxhcjxzdHJpbmc+IHwgSWQgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gbmV3IEJhc2VJZChpZCk7XHJcbiAgICB9XHJcbiAgICB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkLnZhbHVlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEdXBsaWNhdGVFcnJvciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgRHVwbGljYXRlRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnROb3RGb3VuZEVycm9yIGV4dGVuZHMgTm90Rm91bmRFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgfSBmcm9tICdAYmFzZS9jb21wb25lbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnROb3RGb3VuZEVycm9yIH0gZnJvbSAnQGJhc2UvY29tcG9uZW50L2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBNYXBPZiB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudFBvb2wgaW1wbGVtZW50cyBDb21wb25lbnRQb29sIHtcclxuICAgIHByaXZhdGUgbWFwOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50czogTWFwPENvbXBvbmVudElkLCBDb21wb25lbnQ+IHwgQ29tcG9uZW50W10gPSBuZXcgTWFwKCkpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGNvbXBvbmVudHMgaW5zdGFuY2VvZiBNYXAgP1xyXG4gICAgICAgICAgICBjb21wb25lbnRzIDpcclxuICAgICAgICAgICAgbmV3IE1hcE9mKGNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPT4gW2NvbXBvbmVudC5pZCgpLCBjb21wb25lbnRdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhdHRhY2goY29tcG9uZW50OiBDb21wb25lbnQpOiBDb21wb25lbnRQb29sIHtcclxuICAgICAgICBpZiAodGhpcy5tYXAuaGFzKGNvbXBvbmVudC5pZCgpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0KGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGRldGFjaChpZDogQ29tcG9uZW50SWQpOiBDb21wb25lbnRQb29sIHtcclxuICAgICAgICB0aGlzLm1hcC5kZWxldGUoaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhhcyhjb21wb25lbnRzOiBDb21wb25lbnRJZFtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuZXZlcnkoaWQgPT4gdGhpcy5tYXAuaGFzKGlkKSk7XHJcbiAgICB9XHJcbiAgICBnZXQ8VCBleHRlbmRzIENvbXBvbmVudD4oY29tcG9uZW50OiBDb21wb25lbnRJZCk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXAuaGFzKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbXBvbmVudE5vdEZvdW5kRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoY29tcG9uZW50KSBhcyBUO1xyXG4gICAgfVxyXG4gICAgcmVwbGFjZTxUIGV4dGVuZHMgQ29tcG9uZW50PihcclxuICAgICAgICBpZDogQ29tcG9uZW50SWQsXHJcbiAgICAgICAgY2FsbGJhY2s6IChjb21wb25lbnQ6IFQpID0+IENvbXBvbmVudFxyXG4gICAgKTogQ29tcG9uZW50UG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoKFxyXG4gICAgICAgICAgICBjYWxsYmFjayhcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0PFQ+KGlkKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKS5kZXRhY2goaWQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQ29tcG9uZW50SWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbXBvbmVudER1cGxpY2F0ZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnROb3RGb3VuZEVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9NYXBDb21wb25lbnRQb29sJzsiLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnROb3RGb3VuZEVycm9yIH0gZnJvbSAnQGJhc2UvY29tcG9uZW50L2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgfSBmcm9tICdAYmFzZS9jb21wb25lbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnRQb29sIH0gZnJvbSAnQGJhc2UvY29tcG9uZW50L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5IGltcGxlbWVudHMgRW50aXR5IHtcclxuICAgIHByaXZhdGUgZW50aXR5SWQ6IEVudGl0eUlkO1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlDb21wb25lbnRzOiBDb21wb25lbnRQb29sO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBpZDogRW50aXR5SWQsXHJcbiAgICAgICAgY29tcG9uZW50czogQ29tcG9uZW50UG9vbCA9IG5ldyBNYXBDb21wb25lbnRQb29sKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZW50aXR5SWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVudGl0eUNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xyXG4gICAgfVxyXG4gICAgaWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eUlkO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlDb21wb25lbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICdAYmFzZS9pZC9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHlJZCBpbXBsZW1lbnRzIEVudGl0eUlkIHtcclxuICAgIHByaXZhdGUgaWQ6IElkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBTY2FsYXI8c3RyaW5nPiB8IElkIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBCYXNlSWQoaWQpO1xyXG4gICAgfVxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZC52YWx1ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUHJlZmFiIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnQGJhc2UvZW50aXR5L2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUVudGl0eUlkIH0gZnJvbSAnQGJhc2UvZW50aXR5L2luZGV4JztcclxuaW1wb3J0IHsgU3RyaW5nT2YgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5UG9vbCBpbXBsZW1lbnRzIEVudGl0eVBvb2wge1xyXG4gICAgcHJpdmF0ZSBwb29sOiBFbnRpdHlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5W10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IGVudGl0aWVzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXROZXdJZCgpOiBFbnRpdHlJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNlRW50aXR5SWQobmV3IFN0cmluZ09mKHRoaXMucG9vbC5sZW5ndGgpKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZShjb21wb25lbnRzPzogQ29tcG9uZW50UG9vbCk6IEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEJhc2VFbnRpdHkodGhpcy5nZXROZXdJZCgpLCBjb21wb25lbnRzKTtcclxuICAgICAgICB0aGlzLnBvb2wucHVzaChlbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTWFueShwcmVmYWJzOiBQcmVmYWJbXSk6IEVudGl0eVBvb2wge1xyXG4gICAgICAgIHByZWZhYnMuZm9yRWFjaChwcmVmYWIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHByZWZhYi5jcmVhdGUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGVudGl0aWVzKCk6IEVudGl0eVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29sO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFNlYXJjaCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICdAYmFzZS9lbnRpdHkvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFNlYXJjaDxUIGV4dGVuZHMgQ29tcG9uZW50PiBpbXBsZW1lbnRzIFNlYXJjaDxUPiB7XHJcbiAgICBwcml2YXRlIGlkOiBDb21wb25lbnRJZDtcclxuICAgIHByaXZhdGUgZW50aXR5U2VhcmNoOiBFbnRpdHlTZWFyY2g7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IENvbXBvbmVudElkLFxyXG4gICAgICAgIGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoID0gbmV3IEVudGl0eVNlYXJjaChpZClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVudGl0eVNlYXJjaCA9IGVudGl0eVNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlYXJjaC5maW5kKHBvb2wpXHJcbiAgICAgICAgICAgIC5tYXAoZW50aXR5ID0+IGVudGl0eS5jb21wb25lbnRzKCkuZ2V0PFQ+KHRoaXMuaWQpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eVNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxFbnRpdHk+IHtcclxuICAgIHByaXZhdGUgaWRzOiBDb21wb25lbnRJZFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkczogQ29tcG9uZW50SWRbXSB8IENvbXBvbmVudElkKSB7XHJcbiAgICAgICAgdGhpcy5pZHMgPSAoaWRzICYmIGlkcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpID9cclxuICAgICAgICAgICAgaWRzIGFzIENvbXBvbmVudElkW10gOlxyXG4gICAgICAgICAgICBbaWRzIGFzIENvbXBvbmVudElkXTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuZW50aXRpZXMoKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuY29tcG9uZW50cygpLmhhcyh0aGlzLmlkcykpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5SWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VFbnRpdHlQb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnRTZWFyY2gnO1xyXG5leHBvcnQgKiBmcm9tICcuL0VudGl0eVNlYXJjaCc7IiwiZXhwb3J0IGNsYXNzIEJhc2VCaXRtYXBGb250IHtcclxuICAgIHByaXZhdGUga2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhdGxhc1BhdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgZm9udFNpemU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgaW1hZ2VQYXRoOiBzdHJpbmcsIGF0bGFzUGF0aDogc3RyaW5nLCBzaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcclxuICAgICAgICB0aGlzLmF0bGFzUGF0aCA9IGF0bGFzUGF0aDtcclxuICAgICAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBhdGxhcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udFNpemU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJ0BiYXNlL2VudGl0eS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnQGJhc2UvdGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQml0bWFwRm9udFNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxCaXRtYXBGb250PiB7XHJcbiAgICBwcml2YXRlIHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+ID0gbmV3IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0Q29tcG9uZW50PihCYXNlQml0bWFwVGV4dC5JRCkpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBCaXRtYXBGb250W10ge1xyXG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldCgvLyB1bmlxdWUgc2V0XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmZpbmQocG9vbClcclxuICAgICAgICAgICAgICAgIC5tYXAodGV4dCA9PiB0ZXh0LmZvbnQoKSlcclxuICAgICAgICApXTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUJpdG1hcEZvbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0JpdG1hcEZvbnRTZWFyY2gnOyIsImltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuaW1wb3J0IHsgU3RyaW5nT2YgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlSWQgaW1wbGVtZW50cyBJZCB7XHJcbiAgICBwcml2YXRlIHNjYWxhcjogU2NhbGFyPHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IFNjYWxhcjxzdHJpbmc+IHwgSWQgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNjYWxhciA9IHR5cGVvZiBpZCA9PT0gJ3N0cmluZycgP1xyXG4gICAgICAgICAgICBuZXcgU3RyaW5nT2YoaWQpIDpcclxuICAgICAgICAgICAgaWQ7XHJcbiAgICB9XHJcbiAgICB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxhci52YWx1ZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlSWQnOyIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9lbnRpdHkvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZvbnQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lkL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9waGFzZS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcG9zaXRpb24vaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N5c3RlbS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd29ybGQvaW5kZXgnOyIsImltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICdAYmFzZS9pZC9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQaGFzZUlkIGltcGxlbWVudHMgUGhhc2VJZCB7XHJcbiAgICBwcml2YXRlIGlkOiBJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogU2NhbGFyPHN0cmluZz4gfCBJZCB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBuZXcgQmFzZUlkKGlkKTtcclxuICAgIH1cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQudmFsdWUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlUG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IE1hcE9mIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVBoYXNlUG9vbCBpbXBsZW1lbnRzIFBoYXNlUG9vbCB7XHJcbiAgICBwcml2YXRlIHBoYXNlczogTWFwPFBoYXNlSWQsIFBoYXNlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaGFzZXM6IFBoYXNlW10gfCBNYXA8UGhhc2VJZCwgUGhhc2U+KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZXMgPSBwaGFzZXMgaW5zdGFuY2VvZiBNYXAgP1xyXG4gICAgICAgICAgICBwaGFzZXMgOlxyXG4gICAgICAgICAgICBuZXcgTWFwT2YocGhhc2VzLCBwaGFzZSA9PlxyXG4gICAgICAgICAgICAgICAgW3BoYXNlLmlkKCksIHBoYXNlXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhpZDogUGhhc2VJZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlcy5oYXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldDxUIGV4dGVuZHMgUGhhc2U+KGlkOiBQaGFzZUlkKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VzLmdldChpZCkgYXMgVDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VJZCB9IGZyb20gJ0BiYXNlL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkIGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlUGhhc2VJZChMb2FkLm5hbWUpO1xyXG4gICAgcHJpdmF0ZSBjYWxsYmFjazogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuICAgIGlkKCk6IFBoYXNlSWQge1xyXG4gICAgICAgIHJldHVybiBMb2FkLklEO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZVNlYXJjaCB9IGZyb20gJ0BiYXNlL3N5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VFeGVjdXRlIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbjtcclxuICAgIHByaXZhdGUgc2VhcmNoOiBQaGFzZVNlYXJjaDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uLCBzZWFyY2g6IFBoYXNlU2VhcmNoIHwgUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IHN5c3RlbXM7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSAoc2VhcmNoIGluc3RhbmNlb2YgUGhhc2VTZWFyY2gpID8gc2VhcmNoIDogbmV3IFBoYXNlU2VhcmNoKHNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlYXJjaC5maW5kKHRoaXMuc3lzdGVtcylcclxuICAgICAgICAgICAgLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuZXhlY3V0ZSgpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VJZCB9IGZyb20gJ0BiYXNlL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydCBpbXBsZW1lbnRzIFBoYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZVBoYXNlSWQoU3RhcnQubmFtZSk7XHJcbiAgICBwcml2YXRlIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXJ0LklEO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlUGhhc2VQb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZUV4ZWN1dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1N0YXJ0JzsiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUG9zaXRpb24gaW1wbGVtZW50cyBQb3NpdGlvbiB7XHJcbiAgICBwcml2YXRlIGNvb3JkaW5hdGVzOiBudW1iZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc1sxXTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVBvc2l0aW9uJzsiLCJpbXBvcnQgeyBQaGFzZVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQaGFzZVBvb2wgfSBmcm9tICdAYmFzZS9waGFzZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVN5c3RlbSBpbXBsZW1lbnRzIFN5c3RlbSB7XHJcbiAgICBwcml2YXRlIHBoYXNlUG9vbDogUGhhc2VQb29sO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBoYXNlczogUGhhc2VQb29sIHwgUGhhc2VbXSB8IE1hcDxQaGFzZUlkLCBQaGFzZT4pIHtcclxuICAgICAgICB0aGlzLnBoYXNlUG9vbCA9IChwaGFzZXMgaW5zdGFuY2VvZiBBcnJheSB8fCBwaGFzZXMgaW5zdGFuY2VvZiBNYXApID9cclxuICAgICAgICAgICAgbmV3IEJhc2VQaGFzZVBvb2wocGhhc2VzKSA6XHJcbiAgICAgICAgICAgIHBoYXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwaGFzZXMoKTogUGhhc2VQb29sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZVBvb2w7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVN5c3RlbUNvbGxlY3Rpb24gaW1wbGVtZW50cyBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3lzdGVtcz86IFN5c3RlbVtdKSB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zID0gc3lzdGVtcyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihzeXN0ZW06IFN5c3RlbSk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5wdXNoKHN5c3RlbSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyTWFueShzeXN0ZW1zOiBTeXN0ZW1bXSk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHN5c3RlbXMuZm9yRWFjaChzeXN0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHN5c3RlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihpZDogUGhhc2VJZCk6IFN5c3RlbVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1zLmZpbHRlcihzeXN0ZW0gPT5cclxuICAgICAgICAgICAgc3lzdGVtLnBoYXNlcygpLmhhcyhpZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3lzdGVtU2VhcmNoIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZVNlYXJjaCBpbXBsZW1lbnRzIFN5c3RlbVNlYXJjaDxQaGFzZT4ge1xyXG4gICAgcHJpdmF0ZSBpZDogUGhhc2VJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pOiBQaGFzZVtdIHtcclxuICAgICAgICByZXR1cm4gc3lzdGVtcy5maWx0ZXIodGhpcy5pZClcclxuICAgICAgICAgICAgLm1hcChzeXN0ZW0gPT4gc3lzdGVtLnBoYXNlcygpLmdldCh0aGlzLmlkKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VTeXN0ZW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VTeXN0ZW1Db2xsZWN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZVNlYXJjaCc7IiwiaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJ0BiYXNlL2NvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IFJlYWRXcml0ZVRleHQgfSBmcm9tICdAYmFzZS90ZXh0L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQml0bWFwVGV4dCBpbXBsZW1lbnRzIEJpdG1hcFRleHRDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoQmFzZUJpdG1hcFRleHQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXh0UG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuICAgIHByaXZhdGUgd3JpdGVUZXh0OiBSZWFkV3JpdGVUZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCwgdGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnRleHRGb250ID0gZm9udDtcclxuICAgICAgICB0aGlzLndyaXRlVGV4dCA9IG5ldyBSZWFkV3JpdGVUZXh0KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gQmFzZUJpdG1hcFRleHQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHQoKTogV3JpdGVUZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZVRleHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlYWRUZXh0IGltcGxlbWVudHMgVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWFkV3JpdGVUZXh0IGltcGxlbWVudHMgV3JpdGVUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQml0bWFwVGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVhZFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlYWRXcml0ZVRleHQnOyIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VXb3JsZCBpbXBsZW1lbnRzIFdvcmxkIHtcclxuICAgIHByaXZhdGUgZW50aXR5UG9vbDogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgc3lzdGVtQ29sbGVjdGlvbjogU3lzdGVtQ29sbGVjdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuZW50aXR5UG9vbCA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMuc3lzdGVtQ29sbGVjdGlvbiA9IHN5c3RlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXRpZXMoKTogRW50aXR5UG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5UG9vbDtcclxuICAgIH1cclxuXHJcbiAgICBzeXN0ZW1zKCk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbGxlY3Rpb247XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VXb3JsZCc7IiwiaW1wb3J0IHsgRWNzUG9uZyB9IGZyb20gJy4vRWNzUG9uZyc7XHJcblxyXG5uZXcgRWNzUG9uZygpLnN0YXJ0KCk7IiwiaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBGb250TG9hZCB7XHJcbiAgICBwcml2YXRlIGxvYWRlcjogUGhhc2VyLkxvYWRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKGZvbnRzOiBCaXRtYXBGb250W10pOiBQaGFzZXJCaXRtYXBGb250TG9hZCB7XHJcbiAgICAgICAgZm9udHMuZm9yRWFjaChmb250ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuYml0bWFwRm9udChcclxuICAgICAgICAgICAgICAgIGZvbnQuaWQoKSxcclxuICAgICAgICAgICAgICAgIGZvbnQuaW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIGZvbnQuYXRsYXMoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwRm9udExvYWQnOyIsImV4cG9ydCAqIGZyb20gJy4vZm9udC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC9pbmRleCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUG9zaXRpb24gfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlclRleHQgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0IGltcGxlbWVudHMgQml0bWFwVGV4dENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VDb21wb25lbnRJZChQaGFzZXJCaXRtYXBUZXh0Lm5hbWUpO1xyXG4gICAgcHJpdmF0ZSBiaXRtYXBUZXh0OiBQaGFzZXIuQml0bWFwVGV4dDtcclxuICAgIHByaXZhdGUgdGV4dEZvbnQ6IEJpdG1hcEZvbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogUGhhc2VyLkJpdG1hcFRleHQsIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLmJpdG1hcFRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBmb250O1xyXG4gICAgfVxyXG4gICAgaWQoKTogQ29tcG9uZW50SWQge1xyXG4gICAgICAgIHJldHVybiBQaGFzZXJCaXRtYXBUZXh0LklEO1xyXG4gICAgfVxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFzZVBvc2l0aW9uKHRoaXMuYml0bWFwVGV4dC54LCB0aGlzLmJpdG1hcFRleHQueSk7XHJcbiAgICB9XHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG4gICAgdGV4dCgpOiBXcml0ZVRleHQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyVGV4dCh0aGlzLmJpdG1hcFRleHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSh0ZXh0OiBCaXRtYXBUZXh0Q29tcG9uZW50KTogUGhhc2VyLkJpdG1hcFRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkuYml0bWFwVGV4dChcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueCgpKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueSgpKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuaWQoKSxcclxuICAgICAgICAgICAgdGV4dC50ZXh0KCkudmFsdWUoKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuc2l6ZSgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250U2VhcmNoIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBGb250TG9hZCB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRMb2FkIGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHJpdmF0ZSBwaGFzZTogUGhhc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMucGhhc2UgPSBuZXcgTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBGb250TG9hZChsb2FkZXIpXHJcbiAgICAgICAgICAgICAgICAubG9hZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQml0bWFwRm9udFNlYXJjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKGVudGl0aWVzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlkKCk6IFBoYXNlSWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlLmlkKCk7XHJcbiAgICB9XHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGhhc2UuZXhlY3V0ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN0YXJ0IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0IH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHJpdmF0ZSBwaGFzZTogUGhhc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGZhY3Rvcnk6IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZSA9IG5ldyBTdGFydCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBFbnRpdHlTZWFyY2goQmFzZUJpdG1hcFRleHQuSUQpXHJcbiAgICAgICAgICAgICAgICAuZmluZChlbnRpdGllcylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNvbXBvbmVudHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZTxCaXRtYXBUZXh0Q29tcG9uZW50PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2VCaXRtYXBUZXh0LklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9PiBuZXcgUGhhc2VyQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5LmNyZWF0ZSh0ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZCgpOiBQaGFzZUlkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZS5pZCgpO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBoYXNlLmV4ZWN1dGUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlUG9vbCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlU3lzdGVtIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0TG9hZCB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0U3RhcnQgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhbmQgY3JlYXRlcyBiaXRtYXAgdGV4dCB1c2luZyBQaGFzZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dFN5c3RlbSBpbXBsZW1lbnRzIFN5c3RlbSB7XHJcbiAgICBwcml2YXRlIHN5c3RlbTogU3lzdGVtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIsIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtID0gbmV3IEJhc2VTeXN0ZW0oW1xyXG4gICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dExvYWQoZW50aXRpZXMsIGxvYWRlciksXHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0U3RhcnQoXHJcbiAgICAgICAgICAgICAgICBlbnRpdGllcyxcclxuICAgICAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeShmYWN0b3J5KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICBwaGFzZXMoKTogUGhhc2VQb29sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW0ucGhhc2VzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyVGV4dCBpbXBsZW1lbnRzIFdyaXRlVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHRPYmo6IHsgdGV4dDogc3RyaW5nIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogUGhhc2VyLkJpdG1hcFRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHRPYmogPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dE9iai50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHRPYmoudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRGYWN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0TG9hZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dFN0YXJ0JztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3lzdGVtJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJUZXh0JzsiLCJleHBvcnQgKiBmcm9tICcuL3Njb3JlL2luZGV4JzsiLCJpbXBvcnQgeyBQcmVmYWIgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnRQb29sIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU2NvcmVDb21wb25lbnQgfSBmcm9tICdAcG9uZy9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcmUgaW1wbGVtZW50cyBQcmVmYWIge1xyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogUG9zaXRpb247XHJcbiAgICBwcml2YXRlIGZvbnQ6IEJpdG1hcEZvbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBmb250OiBCaXRtYXBGb250KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZm9udCA9IGZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IENvbXBvbmVudFBvb2wge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWFwQ29tcG9uZW50UG9vbChbXHJcbiAgICAgICAgICAgIG5ldyBTY29yZUNvbXBvbmVudCgpLFxyXG4gICAgICAgICAgICBuZXcgQmFzZUJpdG1hcFRleHQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb250LFxyXG4gICAgICAgICAgICAgICAgJzAnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcmVDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnQsIFNjYWxhcjxudW1iZXI+IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKFNjb3JlQ29tcG9uZW50Lm5hbWUpO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG4gICAgaWQoKTogQ29tcG9uZW50SWQge1xyXG4gICAgICAgIHJldHVybiBTY29yZUNvbXBvbmVudC5JRDtcclxuICAgIH1cclxuICAgIHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcbiAgICBpbmNyZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9TY29yZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2NvcmVDb21wb25lbnQnOyIsImV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRHVwbGljYXRlRXJyb3IpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIE5vdEZvdW5kRXJyb3IpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9EdXBsaWNhdGVFcnJvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTm90Rm91bmRFcnJvcic7IiwiZXhwb3J0ICogZnJvbSAnLi9lcnJvcnMvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL21hcC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2NhbGFyL2luZGV4JzsiLCJpbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAc3lzdGVtL3NjYWxhci9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwRnJvbUl0ZXJhYmxlPFosIEssIFY+IGltcGxlbWVudHMgU2NhbGFyPE1hcDxLLCBWPj4ge1xyXG4gICAgcHJpdmF0ZSBlbnRyaWVzOiBaW107XHJcbiAgICBwcml2YXRlIGdldEtleVZhbHVlRm46ICh6OiBaKSA9PiBbSywgVl07XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50cmllczogWltdLCBnZXRLZXlWYWx1ZUZuOiAoejogWikgPT4gW0ssIFZdKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcclxuICAgICAgICB0aGlzLmdldEtleVZhbHVlRm4gPSBnZXRLZXlWYWx1ZUZuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IE1hcDxLLCBWPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoXHJcbiAgICAgICAgICAgIHRoaXMuZW50cmllcy5tYXAoZW50cnkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0S2V5VmFsdWVGbihlbnRyeSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmltcG9ydCB7IE1hcEZyb21JdGVyYWJsZSB9IGZyb20gJ0BzeXN0ZW0vbWFwL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQHN5c3RlbS9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGlja3lTY2FsYXIgfSBmcm9tICdAc3lzdGVtL3NjYWxhci9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwT2Y8WiwgSywgVj4gaW1wbGVtZW50cyBNYXA8SywgVj4ge1xyXG4gICAgcHJpdmF0ZSBtYXA6IFNjYWxhcjxNYXA8SywgVj4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudHJpZXM6IE1hcEZyb21JdGVyYWJsZTxaLCBLLCBWPiB8IFpbXSwgZ2V0S2V5VmFsdWVGbj86ICh6OiBaKSA9PiBbSywgVl0pIHtcclxuICAgICAgICB0aGlzLm1hcCA9ICBuZXcgU3RpY2t5U2NhbGFyPE1hcDxLLCBWPj4oXHJcbiAgICAgICAgICAgIGVudHJpZXMgaW5zdGFuY2VvZiBNYXBGcm9tSXRlcmFibGUgP1xyXG4gICAgICAgICAgICAgICAgZW50cmllcyA6XHJcbiAgICAgICAgICAgICAgICBuZXcgTWFwRnJvbUl0ZXJhYmxlKGVudHJpZXMsIGdldEtleVZhbHVlRm4pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlYWRvbmx5IFtTeW1ib2wudG9TdHJpbmdUYWddOiAnTWFwJztcclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFwLnZhbHVlKCkuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZShrZXk6IEspOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKS5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIGZvckVhY2goY2FsbGJhY2tmbjogKHZhbHVlOiBWLCBrZXk6IEssIG1hcDogTWFwPEssIFY+KSA9PiB2b2lkLCB0aGlzQXJnPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXAudmFsdWUoKS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcpO1xyXG4gICAgfVxyXG4gICAgZ2V0KGtleTogSyk6IFYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpLmdldChrZXkpO1xyXG4gICAgfVxyXG4gICAgaGFzKGtleTogSyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpLmhhcyhrZXkpO1xyXG4gICAgfVxyXG4gICAgc2V0KGtleTogSywgdmFsdWU6IFYpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLm1hcC52YWx1ZSgpLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldCBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKCkuc2l6ZTtcclxuICAgIH1cclxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCk6IEl0ZXJhYmxlSXRlcmF0b3I8W0ssIFZdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKClbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgfVxyXG4gICAgZW50cmllcygpOiBJdGVyYWJsZUl0ZXJhdG9yPFtLLCBWXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpLmVudHJpZXMoKTtcclxuICAgIH1cclxuICAgIGtleXMoKTogSXRlcmFibGVJdGVyYXRvcjxLPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKCkua2V5cygpO1xyXG4gICAgfVxyXG4gICAgdmFsdWVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Vj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpLnZhbHVlcygpO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpLnRvSlNPTigpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vTWFwT2YnO1xyXG5leHBvcnQgKiBmcm9tICcuL01hcEZyb21JdGVyYWJsZSc7IiwiaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQHN5c3RlbS9zY2FsYXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0aWNreVNjYWxhcjxUPiBpbXBsZW1lbnRzIFNjYWxhcjxUPiB7XHJcbiAgICBwcml2YXRlIHNvdXJjZTogU2NhbGFyPFQ+O1xyXG4gICAgcHJpdmF0ZSByZXN1bHQ6IFQ7XHJcbiAgICBwcml2YXRlIGlzRG9uZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2FsYXI6IFNjYWxhcjxUPikge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc2NhbGFyO1xyXG4gICAgICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YWx1ZSgpOiBUIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEb25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5zb3VyY2UudmFsdWUoKTtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsOyAvLyBsb3NlIHNvdXJjZSwgbm8gbG9uZ2VyIG5lZWQgaXRcclxuICAgICAgICAgICAgdGhpcy5pc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQHN5c3RlbS9zY2FsYXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ09mIGltcGxlbWVudHMgU2NhbGFyPHN0cmluZz4ge1xyXG4gICAgcHJpdmF0ZSBvYmo6IHsgdG9TdHJpbmcoKTogc3RyaW5nIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHsgdG9TdHJpbmcoKTogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLm9iaiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmoudG9TdHJpbmcoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vU2NhbGFyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGlja3lTY2FsYXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1N0cmluZ09mJzsiXX0=
