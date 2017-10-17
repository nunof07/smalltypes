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
            var entities = new index_2.EntitySet().createMany([new index_10.Score(new index_4.BasePosition(0.25 * this.game.world.width - 2 * font.size(), 4 * font.size()), font), new index_10.Score(new index_4.BasePosition(0.75 * this.game.world.width - 2 * font.size(), 4 * font.size()), font)]);
            this.ecs = new index_1.BaseWorld(entities, new index_3.SystemSet([new index_9.PhaserBitmapTextSystem(entities, this.game.load, this.game.add).create()]));
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

},{"../../system":59}],6:[function(require,module,exports){
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

},{"../../system":59}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("../../system");

var ComponentSet = function () {
    function ComponentSet() {
        var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();

        _classCallCheck(this, ComponentSet);

        this.map = components instanceof Map ? components : new index_3.MapOf(components, function (component) {
            return [component.id(), component];
        });
    }

    _createClass(ComponentSet, [{
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
    }, {
        key: Symbol.iterator,
        value: function value() {
            return this.map.values();
        }
    }]);

    return ComponentSet;
}();

exports.ComponentSet = ComponentSet;

},{"../../system":59,"./index":8}],8:[function(require,module,exports){
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
__export(require("./ComponentSet"));

},{"./BaseComponentId":4,"./ComponentDuplicateError":5,"./ComponentNotFoundError":6,"./ComponentSet":7}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../component");

var BaseEntity = function () {
    function BaseEntity(id) {
        var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new index_1.ComponentSet();

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

var ComponentSearch = function () {
    function ComponentSearch(id) {
        var entitySearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new index_1.EntitySearch(id);

        _classCallCheck(this, ComponentSearch);

        this.id = id;
        this.entitySearch = entitySearch;
    }

    _createClass(ComponentSearch, [{
        key: "find",
        value: function find(entities) {
            var _this = this;

            return this.entitySearch.find(entities).map(function (entity) {
                return entity.components().get(_this.id);
            });
        }
    }]);

    return ComponentSearch;
}();

exports.ComponentSearch = ComponentSearch;

},{"./index":14}],12:[function(require,module,exports){
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
        value: function find(entities) {
            var _this = this;

            return Array.from(entities).filter(function (entity) {
                return entity.components().has(_this.ids);
            });
        }
    }]);

    return EntitySearch;
}();

exports.EntitySearch = EntitySearch;

},{}],13:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("../../system");

var EntitySet = function () {
    function EntitySet() {
        var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, EntitySet);

        this.entities = new Set(entities);
    }

    _createClass(EntitySet, [{
        key: "create",
        value: function create(components) {
            var entity = new index_1.BaseEntity(new index_2.BaseEntityId(new index_3.StringOf(this.entities.size)), components);
            this.entities.add(entity);
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
        key: Symbol.iterator,
        value: function value() {
            return this.entities.values();
        }
    }, {
        key: "values",
        value: function values() {
            return Array.from(this.entities);
        }
    }]);

    return EntitySet;
}();

exports.EntitySet = EntitySet;

},{"../../system":59,"./index":14}],14:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseEntity"));
__export(require("./BaseEntityId"));
__export(require("./EntitySet"));
__export(require("./ComponentSearch"));
__export(require("./EntitySearch"));

},{"./BaseEntity":9,"./BaseEntityId":10,"./ComponentSearch":11,"./EntitySearch":12,"./EntitySet":13}],15:[function(require,module,exports){
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
        value: function find(entities) {
            return Array.from(new Set( // unique set
            this.search.find(entities).map(function (text) {
                return text.font();
            })));
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

},{"../../system":59}],19:[function(require,module,exports){
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

},{"./index":26}],23:[function(require,module,exports){
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

},{"../system":32}],24:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../system");

var PhaseSet = function () {
    function PhaseSet(phases) {
        _classCallCheck(this, PhaseSet);

        this.phases = phases instanceof Map ? phases : new index_1.MapOf(phases, function (phase) {
            return [phase.id(), phase];
        });
    }

    _createClass(PhaseSet, [{
        key: "has",
        value: function has(id) {
            return this.phases.has(id);
        }
    }, {
        key: "get",
        value: function get(id) {
            return this.phases.get(id);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            return this.phases.values();
        }
    }]);

    return PhaseSet;
}();

exports.PhaseSet = PhaseSet;

},{"../../system":59}],25:[function(require,module,exports){
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
__export(require("./Load"));
__export(require("./PhaseExecute"));
__export(require("./PhaseSet"));
__export(require("./Start"));

},{"./BasePhaseId":21,"./Load":22,"./PhaseExecute":23,"./PhaseSet":24,"./Start":25}],27:[function(require,module,exports){
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

        this.phaseSet = phases instanceof Array || phases instanceof Map ? new index_1.PhaseSet(phases) : phases;
    }

    _createClass(BaseSystem, [{
        key: "phases",
        value: function phases() {
            return this.phaseSet;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var SystemSet = function () {
    function SystemSet() {
        var systems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, SystemSet);

        this.systems = new Set(systems);
    }

    _createClass(SystemSet, [{
        key: "filter",
        value: function filter(id) {
            return Array.from(this.systems).filter(function (system) {
                return system.phases().has(id);
            });
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            return this.systems.values();
        }
    }]);

    return SystemSet;
}();

exports.SystemSet = SystemSet;

},{}],32:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseSystem"));
__export(require("./PhaseSearch"));
__export(require("./SystemSet"));

},{"./BaseSystem":29,"./PhaseSearch":30,"./SystemSet":31}],33:[function(require,module,exports){
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

        this.entities = entities;
        this.loader = loader;
    }

    _createClass(PhaserBitmapTextLoad, [{
        key: "create",
        value: function create() {
            var _this = this;

            return new index_1.Load(function () {
                new index_3.PhaserBitmapFontLoad(_this.loader).load(new index_2.BitmapFontSearch().find(_this.entities));
            });
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

        this.entities = entities;
        this.factory = factory;
    }

    _createClass(PhaserBitmapTextStart, [{
        key: "create",
        value: function create() {
            var _this = this;

            return new index_1.Start(function () {
                new index_2.EntitySearch(index_3.BaseBitmapText.ID).find(_this.entities).forEach(function (entity) {
                    entity.components().replace(index_3.BaseBitmapText.ID, function (text) {
                        return new index_4.PhaserBitmapText(_this.factory.create(text), text.font());
                    });
                });
            });
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

        this.entities = entities;
        this.loader = loader;
        this.factory = factory;
    }

    _createClass(PhaserBitmapTextSystem, [{
        key: "create",
        value: function create() {
            return new index_1.BaseSystem([new index_2.PhaserBitmapTextLoad(this.entities, this.loader).create(), new index_3.PhaserBitmapTextStart(this.entities, new index_4.PhaserBitmapTextFactory(this.factory)).create()]);
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
            return new index_2.ComponentSet([new index_3.ScoreComponent(), new index_1.BaseBitmapText(this.position, this.font, '0')]);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var StickyFunction = function () {
    function StickyFunction(func) {
        _classCallCheck(this, StickyFunction);

        this.func = func;
        this.cache = new Map();
    }

    _createClass(StickyFunction, [{
        key: "apply",
        value: function apply(input) {
            if (!this.cache.has(input)) {
                this.cache.set(input, this.func(input));
            }
            return this.cache.get(input);
        }
    }]);

    return StickyFunction;
}();

exports.StickyFunction = StickyFunction;

},{}],58:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./StickyFunction"));

},{"./StickyFunction":57}],59:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./errors/index"));
__export(require("./function/index"));
__export(require("./map/index"));
__export(require("./scalar/index"));

},{"./errors/index":56,"./function/index":58,"./map/index":62,"./scalar/index":65}],60:[function(require,module,exports){
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

},{}],61:[function(require,module,exports){
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

},{"../scalar":65,"./index":62}],62:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./MapOf"));
__export(require("./MapFromIterable"));

},{"./MapFromIterable":60,"./MapOf":61}],63:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var StickyScalar = function () {
    function StickyScalar(scalar) {
        _classCallCheck(this, StickyScalar);

        this.source = scalar;
        this.isCached = false;
    }

    _createClass(StickyScalar, [{
        key: "value",
        value: function value() {
            if (!this.isCached) {
                this.result = this.source.value();
                this.source = null; // lose source, no longer need it
                this.isCached = true;
            }
            return this.result;
        }
    }]);

    return StickyScalar;
}();

exports.StickyScalar = StickyScalar;

},{}],64:[function(require,module,exports){
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

},{}],65:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./StickyScalar"));
__export(require("./StringOf"));

},{"./StickyScalar":63,"./StringOf":64}]},{},[39])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9CYXNlQ29tcG9uZW50SWQudHMiLCJzcmMvZWNzL2Jhc2UvY29tcG9uZW50L0NvbXBvbmVudER1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9Db21wb25lbnRTZXQudHMiLCJzcmMvZWNzL2Jhc2UvY29tcG9uZW50L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9CYXNlRW50aXR5LnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9CYXNlRW50aXR5SWQudHMiLCJzcmMvZWNzL2Jhc2UvZW50aXR5L0NvbXBvbmVudFNlYXJjaC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvRW50aXR5U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9FbnRpdHlTZXQudHMiLCJzcmMvZWNzL2Jhc2UvZW50aXR5L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvQmFzZUJpdG1hcEZvbnQudHMiLCJzcmMvZWNzL2Jhc2UvZm9udC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvaWQvQmFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL2lkL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0xvYWQudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvUGhhc2VFeGVjdXRlLnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL1BoYXNlU2V0LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL1N0YXJ0LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3Bvc2l0aW9uL0Jhc2VQb3NpdGlvbi50cyIsInNyYy9lY3MvYmFzZS9wb3NpdGlvbi9pbmRleC50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vQmFzZVN5c3RlbS50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2Uvc3lzdGVtL1N5c3RlbVNldC50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9CYXNlQml0bWFwVGV4dC50cyIsInNyYy9lY3MvYmFzZS90ZXh0L1JlYWRUZXh0LnRzIiwic3JjL2Vjcy9iYXNlL3RleHQvUmVhZFdyaXRlVGV4dC50cyIsInNyYy9lY3MvYmFzZS90ZXh0L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3dvcmxkL0Jhc2VXb3JsZC50cyIsInNyYy9lY3MvYmFzZS93b3JsZC9pbmRleC50cyIsInNyYy9lY3MvbWFpbi50cyIsInNyYy9lY3MvcGhhc2VyL2ZvbnQvUGhhc2VyQml0bWFwRm9udExvYWQudHMiLCJzcmMvZWNzL3BoYXNlci9mb250L2luZGV4LnRzIiwic3JjL2Vjcy9waGFzZXIvaW5kZXgudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHQudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHRGYWN0b3J5LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0TG9hZC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dFN0YXJ0LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0U3lzdGVtLnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJUZXh0LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9pbmRleC50cyIsInNyYy9lY3MvcG9uZy9pbmRleC50cyIsInNyYy9lY3MvcG9uZy9zY29yZS9TY29yZS50cyIsInNyYy9lY3MvcG9uZy9zY29yZS9TY29yZUNvbXBvbmVudC50cyIsInNyYy9lY3MvcG9uZy9zY29yZS9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL2Vycm9ycy9EdXBsaWNhdGVFcnJvci50cyIsInNyYy9lY3Mvc3lzdGVtL2Vycm9ycy9Ob3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9zeXN0ZW0vZXJyb3JzL2luZGV4LnRzIiwic3JjL2Vjcy9zeXN0ZW0vZnVuY3Rpb24vU3RpY2t5RnVuY3Rpb24udHMiLCJzcmMvZWNzL3N5c3RlbS9mdW5jdGlvbi9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9zeXN0ZW0vbWFwL01hcEZyb21JdGVyYWJsZS50cyIsInNyYy9lY3Mvc3lzdGVtL21hcC9NYXBPZi50cyIsInNyYy9lY3Mvc3lzdGVtL21hcC9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL3NjYWxhci9TdGlja3lTY2FsYXIudHMiLCJzcmMvZWNzL3N5c3RlbS9zY2FsYXIvU3RyaW5nT2YudHMiLCJzcmMvZWNzL3N5c3RlbS9zY2FsYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O3NEQ0FBOztJQUF1Qjs7O0FBQ25CO0FBQ0ksQUFBSyxBQUFFLEFBQUMsQUFDWjs7O0FBQUMsQUFFTSxBQUFJOzs7OztBQUNQLEFBQXNCO0FBQ3RCLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFBQVMsWUFBRyxBQUFNLE9BQUMsQUFBWSxhQUFDLEFBQVEsQUFBQztBQUNwRCxBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFtQixzQkFBRyxBQUFNLE9BQUMsQUFBWSxhQUFDLEFBQVEsQUFBQztBQUM5RCxBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFxQix3QkFBRyxBQUFJLEFBQUM7QUFDeEMsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBbUIsc0JBQUcsQUFBSSxBQUFDO0FBQ3RDLEFBQUks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LEFBQUksS0FBQyxBQUFRLEFBQUMsVUFBQyxBQUFDO0FBQ2pCLEFBQUkscUJBQUMsQUFBTSxTQUFHLEFBQUksS0FBQyxBQUFNLE9BQUMsQUFBSyxBQUFFLEFBQUM7QUFDbEMsQUFBSSxxQkFBQyxBQUFNLFNBQUcsQUFBSSxBQUFDLE1BQUMsQUFBaUM7QUFDckQsQUFBSSxxQkFBQyxBQUFRLFdBQUcsQUFBSSxBQUFDLEFBQ3pCO0FBQUM7QUFFRCxBQUFNLG1CQUFDLEFBQUksS0FBQyxBQUFNLEFBQUMsQUFDdkI7QUFBQyxBQUNKOzs7Ozs7QUFsQkQsdUJBa0JDOzs7Ozs7Ozs7c0RDbEJEOzs7QUFHSSxzQkFBWSxBQUE2Qjs7O0FBQ3JDLEFBQUksYUFBQyxBQUFHLE1BQUcsQUFBSyxBQUFDLEFBQ3JCO0FBQUMsQUFDRCxBQUFLOzs7OztBQUNELEFBQU0sbUJBQUMsQUFBSSxLQUFDLEFBQUcsSUFBQyxBQUFRLEFBQUUsQUFBQyxBQUMvQjtBQUFDLEFBQ0o7Ozs7OztBQVRELG1CQVNDOzs7Ozs7Ozs7OztBQ1ZELGlCQUErQjtBQUMvQixpQkFBMkIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIEJvb3RTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIHNjYWxlIHRvIGZpdCBzY3JlZW5cclxuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mdWxsU2NyZWVuU2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUud2luZG93Q29uc3RyYWludHMuYm90dG9tID0gJ3Zpc3VhbCc7IC8vIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG92ZXIgc2NyZWVuIGhlaWdodFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgcGl4ZWxzIHNoYXJwXHJcbiAgICAgICAgdGhpcy5nYW1lLmFudGlhbGlhcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5zbW9vdGhlZCA9IGZhbHNlO1xyXG4gICAgICAgIFBoYXNlci5DYW52YXMuc2V0SW1hZ2VSZW5kZXJpbmdDcmlzcCh0aGlzLmdhbWUuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9vdFN0YXRlIH0gZnJvbSAnLi9Cb290U3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL0dhbWVTdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRWNzUG9uZyB7XHJcbiAgICBwcml2YXRlIF9nYW1lOiBQaGFzZXIuR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9nYW1lID0gbmV3IFBoYXNlci5HYW1lKHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTc2LFxyXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgICAgIHBhcmVudDogJ2dhbWUtY29udGFpbmVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290U3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZVN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VXb3JsZCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5U2V0IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1TZXQgfSBmcm9tICdAYmFzZS8vaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUG9zaXRpb24gfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBGb250IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGFydCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VFeGVjdXRlIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSAnQHBvbmcvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBwcml2YXRlIGVjczogQmFzZVdvcmxkO1xyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZm9udCA9IG5ldyBCYXNlQml0bWFwRm9udCgnUHJlc3MgU3RhcnQgMlAnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlBfMC5wbmcnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlAuZm50JywgMzIpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzID0gbmV3IEVudGl0eVNldCgpXHJcbiAgICAgICAgICAgIC5jcmVhdGVNYW55KFtcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQmFzZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI1ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMiAqIGZvbnQuc2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0ICogZm9udC5zaXplKClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2NvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJhc2VQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NSAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDIgKiBmb250LnNpemUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNCAqIGZvbnQuc2l6ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBmb250XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuZWNzID0gbmV3IEJhc2VXb3JsZChcclxuICAgICAgICAgICAgZW50aXRpZXMsXHJcbiAgICAgICAgICAgIG5ldyBTeXN0ZW1TZXQoW1xyXG4gICAgICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRTeXN0ZW0oZW50aXRpZXMsIHRoaXMuZ2FtZS5sb2FkLCB0aGlzLmdhbWUuYWRkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jcmVhdGUoKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBuZXcgUGhhc2VFeGVjdXRlKHRoaXMuZWNzLnN5c3RlbXMoKSwgTG9hZC5JRClcclxuICAgICAgICAgICAgLmV4ZWN1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlRXhlY3V0ZSh0aGlzLmVjcy5zeXN0ZW1zKCksIFN0YXJ0LklEKVxyXG4gICAgICAgICAgICAuZXhlY3V0ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICdAYmFzZS9pZC9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnRJZCBpbXBsZW1lbnRzIENvbXBvbmVudElkIHtcclxuICAgIHByaXZhdGUgaWQ6IElkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBTY2FsYXI8c3RyaW5nPiB8IElkIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBCYXNlSWQoaWQpO1xyXG4gICAgfVxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZC52YWx1ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnREdXBsaWNhdGVFcnJvciBleHRlbmRzIER1cGxpY2F0ZUVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Tm90Rm91bmRFcnJvciBleHRlbmRzIE5vdEZvdW5kRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQGJhc2UvY29tcG9uZW50L2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50Tm90Rm91bmRFcnJvciB9IGZyb20gJ0BiYXNlL2NvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgTWFwT2YgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTZXQgaW1wbGVtZW50cyBDb21wb25lbnRzIHtcclxuICAgIHByaXZhdGUgbWFwOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50czogTWFwPENvbXBvbmVudElkLCBDb21wb25lbnQ+IHwgQ29tcG9uZW50W10gPSBuZXcgTWFwKCkpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGNvbXBvbmVudHMgaW5zdGFuY2VvZiBNYXAgP1xyXG4gICAgICAgICAgICBjb21wb25lbnRzIDpcclxuICAgICAgICAgICAgbmV3IE1hcE9mKGNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPT4gW2NvbXBvbmVudC5pZCgpLCBjb21wb25lbnRdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhdHRhY2goY29tcG9uZW50OiBDb21wb25lbnQpOiBDb21wb25lbnRzIHtcclxuICAgICAgICBpZiAodGhpcy5tYXAuaGFzKGNvbXBvbmVudC5pZCgpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0KGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGRldGFjaChpZDogQ29tcG9uZW50SWQpOiBDb21wb25lbnRzIHtcclxuICAgICAgICB0aGlzLm1hcC5kZWxldGUoaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhhcyhjb21wb25lbnRzOiBDb21wb25lbnRJZFtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuZXZlcnkoaWQgPT4gdGhpcy5tYXAuaGFzKGlkKSk7XHJcbiAgICB9XHJcbiAgICBnZXQ8VCBleHRlbmRzIENvbXBvbmVudD4oY29tcG9uZW50OiBDb21wb25lbnRJZCk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXAuaGFzKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbXBvbmVudE5vdEZvdW5kRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoY29tcG9uZW50KSBhcyBUO1xyXG4gICAgfVxyXG4gICAgcmVwbGFjZTxUIGV4dGVuZHMgQ29tcG9uZW50PihcclxuICAgICAgICBpZDogQ29tcG9uZW50SWQsXHJcbiAgICAgICAgY2FsbGJhY2s6IChjb21wb25lbnQ6IFQpID0+IENvbXBvbmVudFxyXG4gICAgKTogQ29tcG9uZW50cyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoKFxyXG4gICAgICAgICAgICBjYWxsYmFjayhcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0PFQ+KGlkKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKS5kZXRhY2goaWQpO1xyXG4gICAgfVxyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmF0b3I8Q29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlcygpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQ29tcG9uZW50SWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbXBvbmVudER1cGxpY2F0ZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnROb3RGb3VuZEVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnRTZXQnOyIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAYmFzZS9jb21wb25lbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnREdXBsaWNhdGVFcnJvciB9IGZyb20gJ0BiYXNlL2NvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNldCB9IGZyb20gJ0BiYXNlL2NvbXBvbmVudC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eSBpbXBsZW1lbnRzIEVudGl0eSB7XHJcbiAgICBwcml2YXRlIGVudGl0eUlkOiBFbnRpdHlJZDtcclxuICAgIHByaXZhdGUgZW50aXR5Q29tcG9uZW50czogQ29tcG9uZW50cztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgaWQ6IEVudGl0eUlkLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IENvbXBvbmVudHMgPSBuZXcgQ29tcG9uZW50U2V0KClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZW50aXR5SWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVudGl0eUNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xyXG4gICAgfVxyXG4gICAgaWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eUlkO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlDb21wb25lbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICdAYmFzZS9pZC9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHlJZCBpbXBsZW1lbnRzIEVudGl0eUlkIHtcclxuICAgIHByaXZhdGUgaWQ6IElkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBTY2FsYXI8c3RyaW5nPiB8IElkIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBCYXNlSWQoaWQpO1xyXG4gICAgfVxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZC52YWx1ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdGllcyB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5U2VhcmNoIH0gZnJvbSAnQGJhc2UvZW50aXR5L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTZWFyY2g8VCBleHRlbmRzIENvbXBvbmVudD4gaW1wbGVtZW50cyBTZWFyY2g8RW50aXRpZXMsIFQ+IHtcclxuICAgIHByaXZhdGUgaWQ6IENvbXBvbmVudElkO1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlTZWFyY2g6IEVudGl0eVNlYXJjaDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpZDogQ29tcG9uZW50SWQsXHJcbiAgICAgICAgZW50aXR5U2VhcmNoOiBFbnRpdHlTZWFyY2ggPSBuZXcgRW50aXR5U2VhcmNoKGlkKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZW50aXR5U2VhcmNoID0gZW50aXR5U2VhcmNoO1xyXG4gICAgfVxyXG4gICAgZmluZChlbnRpdGllczogRW50aXRpZXMpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlYXJjaC5maW5kKGVudGl0aWVzKVxyXG4gICAgICAgICAgICAubWFwKGVudGl0eSA9PiBlbnRpdHkuY29tcG9uZW50cygpLmdldDxUPih0aGlzLmlkKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0aWVzIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2VhcmNoIGltcGxlbWVudHMgU2VhcmNoPEVudGl0aWVzLCBFbnRpdHk+IHtcclxuICAgIHByaXZhdGUgaWRzOiBDb21wb25lbnRJZFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkczogQ29tcG9uZW50SWRbXSB8IENvbXBvbmVudElkKSB7XHJcbiAgICAgICAgdGhpcy5pZHMgPSAoaWRzICYmIGlkcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpID9cclxuICAgICAgICAgICAgaWRzIGFzIENvbXBvbmVudElkW10gOlxyXG4gICAgICAgICAgICBbaWRzIGFzIENvbXBvbmVudElkXTtcclxuICAgIH1cclxuICAgIGZpbmQoZW50aXRpZXM6IEVudGl0aWVzKTogRW50aXR5W10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVudGl0aWVzKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuY29tcG9uZW50cygpLmhhcyh0aGlzLmlkcykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXRpZXMgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFByZWZhYiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJ0BiYXNlL2VudGl0eS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VFbnRpdHlJZCB9IGZyb20gJ0BiYXNlL2VudGl0eS9pbmRleCc7XHJcbmltcG9ydCB7IFN0cmluZ09mIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2V0IGltcGxlbWVudHMgRW50aXRpZXMge1xyXG4gICAgcHJpdmF0ZSB4OiBFbnRpdHlbXTtcclxuICAgIHByaXZhdGUgZW50aXRpZXM6IFNldDxFbnRpdHk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlbXSB8IEl0ZXJhYmxlPEVudGl0eT4gPSBbXSkge1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgU2V0KGVudGl0aWVzKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZShjb21wb25lbnRzPzogQ29tcG9uZW50cyk6IEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEJhc2VFbnRpdHkoXHJcbiAgICAgICAgICAgIG5ldyBCYXNlRW50aXR5SWQobmV3IFN0cmluZ09mKHRoaXMuZW50aXRpZXMuc2l6ZSkpLFxyXG4gICAgICAgICAgICBjb21wb25lbnRzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzLmFkZChlbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTWFueShwcmVmYWJzOiBQcmVmYWI8Q29tcG9uZW50cz5bXSk6IEVudGl0aWVzIHtcclxuICAgICAgICBwcmVmYWJzLmZvckVhY2gocHJlZmFiID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICBwcmVmYWIuY3JlYXRlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxFbnRpdHk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcy52YWx1ZXMoKTtcclxuICAgIH1cclxuICAgIHZhbHVlcygpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbnRpdGllcyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VFbnRpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VFbnRpdHlJZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRW50aXR5U2V0JztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnRTZWFyY2gnO1xyXG5leHBvcnQgKiBmcm9tICcuL0VudGl0eVNlYXJjaCc7IiwiZXhwb3J0IGNsYXNzIEJhc2VCaXRtYXBGb250IHtcclxuICAgIHByaXZhdGUga2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhdGxhc1BhdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgZm9udFNpemU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgaW1hZ2VQYXRoOiBzdHJpbmcsIGF0bGFzUGF0aDogc3RyaW5nLCBzaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcclxuICAgICAgICB0aGlzLmF0bGFzUGF0aCA9IGF0bGFzUGF0aDtcclxuICAgICAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBhdGxhcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udFNpemU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdGllcyB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJ0BiYXNlL2VudGl0eS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnQGJhc2UvdGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQml0bWFwRm9udFNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxFbnRpdGllcywgQml0bWFwRm9udD4ge1xyXG4gICAgcHJpdmF0ZSBzZWFyY2g6IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0Q29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWFyY2g6IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0Q29tcG9uZW50PiA9IG5ldyBDb21wb25lbnRTZWFyY2g8Qml0bWFwVGV4dENvbXBvbmVudD4oQmFzZUJpdG1hcFRleHQuSUQpKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XHJcbiAgICB9XHJcbiAgICBmaW5kKGVudGl0aWVzOiBFbnRpdGllcyk6IEJpdG1hcEZvbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oXHJcbiAgICAgICAgICAgIG5ldyBTZXQoLy8gdW5pcXVlIHNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2guZmluZChlbnRpdGllcylcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHRleHQgPT4gdGV4dC5mb250KCkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQml0bWFwRm9udCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQml0bWFwRm9udFNlYXJjaCc7IiwiaW1wb3J0IHsgSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5pbXBvcnQgeyBTdHJpbmdPZiB9IGZyb20gJ0BzeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VJZCBpbXBsZW1lbnRzIElkIHtcclxuICAgIHByaXZhdGUgc2NhbGFyOiBTY2FsYXI8c3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogU2NhbGFyPHN0cmluZz4gfCBJZCB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2NhbGFyID0gdHlwZW9mIGlkID09PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgICAgIG5ldyBTdHJpbmdPZihpZCkgOlxyXG4gICAgICAgICAgICBpZDtcclxuICAgIH1cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGFyLnZhbHVlKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VJZCc7IiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2VudGl0eS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm9udC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaWQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BoYXNlL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9wb3NpdGlvbi9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3lzdGVtL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi93b3JsZC9pbmRleCc7IiwiaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VJZCB9IGZyb20gJ0BiYXNlL2lkL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQHN5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVBoYXNlSWQgaW1wbGVtZW50cyBQaGFzZUlkIHtcclxuICAgIHByaXZhdGUgaWQ6IElkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBTY2FsYXI8c3RyaW5nPiB8IElkIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBCYXNlSWQoaWQpO1xyXG4gICAgfVxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZC52YWx1ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGhhc2UgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQaGFzZUlkIH0gZnJvbSAnQGJhc2UvcGhhc2UvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWQgaW1wbGVtZW50cyBQaGFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VQaGFzZUlkKExvYWQubmFtZSk7XHJcbiAgICBwcml2YXRlIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIExvYWQuSUQ7XHJcbiAgICB9XHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN5c3RlbXMgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlU2VhcmNoIH0gZnJvbSAnQGJhc2Uvc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZUV4ZWN1dGUge1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW1zOiBTeXN0ZW1zO1xyXG4gICAgcHJpdmF0ZSBzZWFyY2g6IFBoYXNlU2VhcmNoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN5c3RlbXM6IFN5c3RlbXMsIHNlYXJjaDogUGhhc2VTZWFyY2ggfCBQaGFzZUlkKSB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zID0gc3lzdGVtcztcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IChzZWFyY2ggaW5zdGFuY2VvZiBQaGFzZVNlYXJjaCkgPyBzZWFyY2ggOiBuZXcgUGhhc2VTZWFyY2goc2VhcmNoKTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoLmZpbmQodGhpcy5zeXN0ZW1zKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChwaGFzZSA9PiBwaGFzZS5leGVjdXRlKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGhhc2VzIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgTWFwT2YgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZVNldCBpbXBsZW1lbnRzIFBoYXNlcyB7XHJcbiAgICBwcml2YXRlIHBoYXNlczogTWFwPFBoYXNlSWQsIFBoYXNlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaGFzZXM6IFBoYXNlW10gfCBNYXA8UGhhc2VJZCwgUGhhc2U+KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZXMgPSBwaGFzZXMgaW5zdGFuY2VvZiBNYXAgP1xyXG4gICAgICAgICAgICBwaGFzZXMgOlxyXG4gICAgICAgICAgICBuZXcgTWFwT2YocGhhc2VzLCBwaGFzZSA9PlxyXG4gICAgICAgICAgICAgICAgW3BoYXNlLmlkKCksIHBoYXNlXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaGFzKGlkOiBQaGFzZUlkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VzLmhhcyhpZCk7XHJcbiAgICB9XHJcbiAgICBnZXQ8VCBleHRlbmRzIFBoYXNlPihpZDogUGhhc2VJZCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlcy5nZXQoaWQpIGFzIFQ7XHJcbiAgICB9XHJcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxQaGFzZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlcy52YWx1ZXMoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VJZCB9IGZyb20gJ0BiYXNlL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydCBpbXBsZW1lbnRzIFBoYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZVBoYXNlSWQoU3RhcnQubmFtZSk7XHJcbiAgICBwcml2YXRlIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXJ0LklEO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZUV4ZWN1dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlU2V0JztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGFydCc7IiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVBvc2l0aW9uIGltcGxlbWVudHMgUG9zaXRpb24ge1xyXG4gICAgcHJpdmF0ZSBjb29yZGluYXRlczogbnVtYmVyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc1swXTtcclxuICAgIH1cclxuXHJcbiAgICB5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXNbMV07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VQb3NpdGlvbic7IiwiaW1wb3J0IHsgUGhhc2VzIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZVNldCB9IGZyb20gJ0BiYXNlL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlU3lzdGVtIGltcGxlbWVudHMgU3lzdGVtIHtcclxuICAgIHByaXZhdGUgcGhhc2VTZXQ6IFBoYXNlcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaGFzZXM6IFBoYXNlcyB8IFBoYXNlW10gfCBNYXA8UGhhc2VJZCwgUGhhc2U+KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZVNldCA9IChwaGFzZXMgaW5zdGFuY2VvZiBBcnJheSB8fCBwaGFzZXMgaW5zdGFuY2VvZiBNYXApID9cclxuICAgICAgICAgICAgbmV3IFBoYXNlU2V0KHBoYXNlcykgOlxyXG4gICAgICAgICAgICBwaGFzZXM7XHJcbiAgICB9XHJcbiAgICBwaGFzZXMoKTogUGhhc2VzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZVNldDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNlYXJjaCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1zIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZVNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxTeXN0ZW1zLCBQaGFzZT4ge1xyXG4gICAgcHJpdmF0ZSBpZDogUGhhc2VJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIGZpbmQoc3lzdGVtczogU3lzdGVtcyk6IFBoYXNlW10ge1xyXG4gICAgICAgIHJldHVybiBzeXN0ZW1zLmZpbHRlcih0aGlzLmlkKVxyXG4gICAgICAgICAgICAubWFwKHN5c3RlbSA9PiBzeXN0ZW0ucGhhc2VzKCkuZ2V0KHRoaXMuaWQpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtcyB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTeXN0ZW1TZXQgaW1wbGVtZW50cyBTeXN0ZW1zIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU2V0PFN5c3RlbT47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3lzdGVtczogU3lzdGVtW10gfCBTZXQ8U3lzdGVtPiA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zID0gbmV3IFNldChzeXN0ZW1zKTtcclxuICAgIH1cclxuICAgIGZpbHRlcihpZDogUGhhc2VJZCk6IFN5c3RlbVtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN5c3RlbXMpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoc3lzdGVtID0+XHJcbiAgICAgICAgICAgICAgICBzeXN0ZW0ucGhhc2VzKCkuaGFzKGlkKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmF0b3I8U3lzdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtcy52YWx1ZXMoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVN5c3RlbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VTZWFyY2gnO1xyXG5leHBvcnQgKiBmcm9tICcuL1N5c3RlbVNldCc7IiwiaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJ0BiYXNlL2NvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IFJlYWRXcml0ZVRleHQgfSBmcm9tICdAYmFzZS90ZXh0L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQml0bWFwVGV4dCBpbXBsZW1lbnRzIEJpdG1hcFRleHRDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoQmFzZUJpdG1hcFRleHQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXh0UG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuICAgIHByaXZhdGUgd3JpdGVUZXh0OiBSZWFkV3JpdGVUZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCwgdGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnRleHRGb250ID0gZm9udDtcclxuICAgICAgICB0aGlzLndyaXRlVGV4dCA9IG5ldyBSZWFkV3JpdGVUZXh0KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gQmFzZUJpdG1hcFRleHQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHQoKTogV3JpdGVUZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZVRleHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlYWRUZXh0IGltcGxlbWVudHMgVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWFkV3JpdGVUZXh0IGltcGxlbWVudHMgV3JpdGVUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQml0bWFwVGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVhZFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlYWRXcml0ZVRleHQnOyIsImltcG9ydCB7IEVudGl0aWVzIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1zIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlV29ybGQgaW1wbGVtZW50cyBXb3JsZCB7XHJcbiAgICBwcml2YXRlIGVudGl0eVBvb2w6IEVudGl0aWVzO1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW1Db2xsZWN0aW9uOiBTeXN0ZW1zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdGllcywgc3lzdGVtczogU3lzdGVtcykge1xyXG4gICAgICAgIHRoaXMuZW50aXR5UG9vbCA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMuc3lzdGVtQ29sbGVjdGlvbiA9IHN5c3RlbXM7XHJcbiAgICB9XHJcbiAgICBlbnRpdGllcygpOiBFbnRpdGllcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5UG9vbDtcclxuICAgIH1cclxuICAgIHN5c3RlbXMoKTogU3lzdGVtcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtQ29sbGVjdGlvbjtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVdvcmxkJzsiLCJpbXBvcnQgeyBFY3NQb25nIH0gZnJvbSAnLi9FY3NQb25nJztcclxuXHJcbm5ldyBFY3NQb25nKCkuc3RhcnQoKTsiLCJpbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcEZvbnRMb2FkIHtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoZm9udHM6IEJpdG1hcEZvbnRbXSk6IFBoYXNlckJpdG1hcEZvbnRMb2FkIHtcclxuICAgICAgICBmb250cy5mb3JFYWNoKGZvbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5iaXRtYXBGb250KFxyXG4gICAgICAgICAgICAgICAgZm9udC5pZCgpLFxyXG4gICAgICAgICAgICAgICAgZm9udC5pbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgZm9udC5hdGxhcygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBGb250TG9hZCc7IiwiZXhwb3J0ICogZnJvbSAnLi9mb250L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0L2luZGV4JzsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgV3JpdGVUZXh0IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQb3NpdGlvbiB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyVGV4dCB9IGZyb20gJ0BwaGFzZXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHQgaW1wbGVtZW50cyBCaXRtYXBUZXh0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKFBoYXNlckJpdG1hcFRleHQubmFtZSk7XHJcbiAgICBwcml2YXRlIGJpdG1hcFRleHQ6IFBoYXNlci5CaXRtYXBUZXh0O1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBQaGFzZXIuQml0bWFwVGV4dCwgZm9udDogQml0bWFwRm9udCkge1xyXG4gICAgICAgIHRoaXMuYml0bWFwVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IGZvbnQ7XHJcbiAgICB9XHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIFBoYXNlckJpdG1hcFRleHQuSUQ7XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNlUG9zaXRpb24odGhpcy5iaXRtYXBUZXh0LngsIHRoaXMuYml0bWFwVGV4dC55KTtcclxuICAgIH1cclxuICAgIGZvbnQoKTogQml0bWFwRm9udCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZvbnQ7XHJcbiAgICB9XHJcbiAgICB0ZXh0KCk6IFdyaXRlVGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQaGFzZXJUZXh0KHRoaXMuYml0bWFwVGV4dCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHRleHQ6IEJpdG1hcFRleHRDb21wb25lbnQpOiBQaGFzZXIuQml0bWFwVGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5iaXRtYXBUZXh0KFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHRleHQucG9zaXRpb24oKS54KCkpLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHRleHQucG9zaXRpb24oKS55KCkpLFxyXG4gICAgICAgICAgICB0ZXh0LmZvbnQoKS5pZCgpLFxyXG4gICAgICAgICAgICB0ZXh0LnRleHQoKS52YWx1ZSgpLFxyXG4gICAgICAgICAgICB0ZXh0LmZvbnQoKS5zaXplKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXRpZXMgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQcmVmYWIgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IExvYWQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnRTZWFyY2ggfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcEZvbnRMb2FkIH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dExvYWQgaW1wbGVtZW50cyBQcmVmYWI8UGhhc2U+IHtcclxuICAgIHByaXZhdGUgZW50aXRpZXM6IEVudGl0aWVzO1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI6IFBoYXNlci5Mb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0aWVzLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKTogUGhhc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBGb250TG9hZCh0aGlzLmxvYWRlcilcclxuICAgICAgICAgICAgICAgIC5sb2FkKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCaXRtYXBGb250U2VhcmNoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5lbnRpdGllcylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdGllcyB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFByZWZhYiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3RhcnQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVNlYXJjaCB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHQgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0U3RhcnQgaW1wbGVtZW50cyBQcmVmYWI8UGhhc2U+IHtcclxuICAgIHByaXZhdGUgZW50aXRpZXM6IEVudGl0aWVzO1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXRpZXMsIGZhY3Rvcnk6IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKTogUGhhc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RhcnQoKCkgPT4ge1xyXG4gICAgICAgICAgICBuZXcgRW50aXR5U2VhcmNoKEJhc2VCaXRtYXBUZXh0LklEKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQodGhpcy5lbnRpdGllcylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNvbXBvbmVudHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZTxCaXRtYXBUZXh0Q29tcG9uZW50PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2VCaXRtYXBUZXh0LklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9PiBuZXcgUGhhc2VyQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhY3RvcnkuY3JlYXRlKHRleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuZm9udCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0aWVzIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQcmVmYWIgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbSB9IGZyb20gJ0BiYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dExvYWQgfSBmcm9tICdAcGhhc2VyL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IH0gZnJvbSAnQHBoYXNlci9pbmRleCc7XHJcblxyXG4vKipcclxuICogTG9hZHMgYW5kIGNyZWF0ZXMgYml0bWFwIHRleHQgdXNpbmcgUGhhc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRTeXN0ZW0gaW1wbGVtZW50cyBQcmVmYWI8U3lzdGVtPiB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdGllcztcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0aWVzLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIsIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCk6IFN5c3RlbSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNlU3lzdGVtKFtcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRMb2FkKHRoaXMuZW50aXRpZXMsIHRoaXMubG9hZGVyKVxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZSgpLFxyXG4gICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dFN0YXJ0KHRoaXMuZW50aXRpZXMsIG5ldyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSh0aGlzLmZhY3RvcnkpKVxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZSgpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyVGV4dCBpbXBsZW1lbnRzIFdyaXRlVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHRPYmo6IHsgdGV4dDogc3RyaW5nIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogUGhhc2VyLkJpdG1hcFRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHRPYmogPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dE9iai50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHRPYmoudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRGYWN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0TG9hZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dFN0YXJ0JztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3lzdGVtJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJUZXh0JzsiLCJleHBvcnQgKiBmcm9tICcuL3Njb3JlL2luZGV4JzsiLCJpbXBvcnQgeyBQcmVmYWIgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRTZXQgfSBmcm9tICdAYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCB9IGZyb20gJ0Bwb25nL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY29yZSBpbXBsZW1lbnRzIFByZWZhYjxDb21wb25lbnRzPiB7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgZm9udDogQml0bWFwRm9udDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogQ29tcG9uZW50cyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnRTZXQoW1xyXG4gICAgICAgICAgICBuZXcgU2NvcmVDb21wb25lbnQoKSxcclxuICAgICAgICAgICAgbmV3IEJhc2VCaXRtYXBUZXh0KHRoaXMucG9zaXRpb24sIHRoaXMuZm9udCwgJzAnKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnQGJhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudCwgU2NhbGFyPG51bWJlcj4ge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoU2NvcmVDb21wb25lbnQubmFtZSk7XHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9XHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIFNjb3JlQ29tcG9uZW50LklEO1xyXG4gICAgfVxyXG4gICAgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgIH1cclxuICAgIGluY3JlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1Njb3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY29yZUNvbXBvbmVudCc7IiwiZXhwb3J0IGNsYXNzIER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBEdXBsaWNhdGVFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgTm90Rm91bmRFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0R1cGxpY2F0ZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ob3RGb3VuZEVycm9yJzsiLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gJ0BzeXN0ZW0vZnVuY3Rpb24vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0aWNreUZ1bmN0aW9uPFgsIFk+IGltcGxlbWVudHMgRnVuY3Rpb248WCwgWT4ge1xyXG4gICAgcHJpdmF0ZSBmdW5jOiAoaW5wdXQ6IFgpID0+IFk7XHJcbiAgICBwcml2YXRlIGNhY2hlOiBNYXA8WCwgWT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnVuYzogKGlucHV0OiBYKSA9PiBZKSB7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcclxuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgYXBwbHkoaW5wdXQ6IFgpOiBZIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FjaGUuaGFzKGlucHV0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlLnNldChpbnB1dCwgdGhpcy5mdW5jKGlucHV0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoaW5wdXQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9GdW5jdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3RpY2t5RnVuY3Rpb24nOyIsImV4cG9ydCAqIGZyb20gJy4vZXJyb3JzL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9mdW5jdGlvbi9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWFwL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9zY2FsYXIvaW5kZXgnOyIsImltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vc2NhbGFyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBGcm9tSXRlcmFibGU8WiwgSywgVj4gaW1wbGVtZW50cyBTY2FsYXI8TWFwPEssIFY+PiB7XHJcbiAgICBwcml2YXRlIGVudHJpZXM6IFpbXTtcclxuICAgIHByaXZhdGUgZ2V0S2V5VmFsdWVGbjogKHo6IFopID0+IFtLLCBWXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRyaWVzOiBaW10sIGdldEtleVZhbHVlRm46ICh6OiBaKSA9PiBbSywgVl0pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4gICAgICAgIHRoaXMuZ2V0S2V5VmFsdWVGbiA9IGdldEtleVZhbHVlRm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogTWFwPEssIFY+IHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hcChcclxuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLm1hcChlbnRyeSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRLZXlWYWx1ZUZuKGVudHJ5KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0iLCJcclxuaW1wb3J0IHsgTWFwRnJvbUl0ZXJhYmxlIH0gZnJvbSAnQHN5c3RlbS9tYXAvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAc3lzdGVtL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFN0aWNreVNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vc2NhbGFyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBPZjxaLCBLLCBWPiBpbXBsZW1lbnRzIE1hcDxLLCBWPiB7XHJcbiAgICBwcml2YXRlIG1hcDogU2NhbGFyPE1hcDxLLCBWPj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50cmllczogTWFwRnJvbUl0ZXJhYmxlPFosIEssIFY+IHwgWltdLCBnZXRLZXlWYWx1ZUZuPzogKHo6IFopID0+IFtLLCBWXSkge1xyXG4gICAgICAgIHRoaXMubWFwID0gIG5ldyBTdGlja3lTY2FsYXI8TWFwPEssIFY+PihcclxuICAgICAgICAgICAgZW50cmllcyBpbnN0YW5jZW9mIE1hcEZyb21JdGVyYWJsZSA/XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzIDpcclxuICAgICAgICAgICAgICAgIG5ldyBNYXBGcm9tSXRlcmFibGUoZW50cmllcywgZ2V0S2V5VmFsdWVGbilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVhZG9ubHkgW1N5bWJvbC50b1N0cmluZ1RhZ106ICdNYXAnO1xyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXAudmFsdWUoKS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlKGtleTogSyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZSgpLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG4gICAgZm9yRWFjaChjYWxsYmFja2ZuOiAodmFsdWU6IFYsIGtleTogSywgbWFwOiBNYXA8SywgVj4pID0+IHZvaWQsIHRoaXNBcmc/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hcC52YWx1ZSgpLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICBnZXQoa2V5OiBLKTogViB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKCkuZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICBoYXMoa2V5OiBLKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKCkuaGFzKGtleSk7XHJcbiAgICB9XHJcbiAgICBzZXQoa2V5OiBLLCB2YWx1ZTogVik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubWFwLnZhbHVlKCkuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKS5zaXplO1xyXG4gICAgfVxyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmFibGVJdGVyYXRvcjxbSywgVl0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKVtTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbiAgICB9XHJcbiAgICBlbnRyaWVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8W0ssIFZdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKCkuZW50cmllcygpO1xyXG4gICAgfVxyXG4gICAga2V5cygpOiBJdGVyYWJsZUl0ZXJhdG9yPEs+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudmFsdWUoKS5rZXlzKCk7XHJcbiAgICB9XHJcbiAgICB2YWx1ZXMoKTogSXRlcmFibGVJdGVyYXRvcjxWPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKCkudmFsdWVzKCk7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlKCkudG9KU09OKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9NYXBPZic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTWFwRnJvbUl0ZXJhYmxlJzsiLCJpbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAc3lzdGVtL3NjYWxhci9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RpY2t5U2NhbGFyPFQ+IGltcGxlbWVudHMgU2NhbGFyPFQ+IHtcclxuICAgIHByaXZhdGUgc291cmNlOiBTY2FsYXI8VD47XHJcbiAgICBwcml2YXRlIHJlc3VsdDogVDtcclxuICAgIHByaXZhdGUgaXNDYWNoZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NhbGFyOiBTY2FsYXI8VD4pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNjYWxhcjtcclxuICAgICAgICB0aGlzLmlzQ2FjaGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YWx1ZSgpOiBUIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDYWNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnNvdXJjZS52YWx1ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7IC8vIGxvc2Ugc291cmNlLCBubyBsb25nZXIgbmVlZCBpdFxyXG4gICAgICAgICAgICB0aGlzLmlzQ2FjaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BzeXN0ZW0vc2NhbGFyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdPZiBpbXBsZW1lbnRzIFNjYWxhcjxzdHJpbmc+IHtcclxuICAgIHByaXZhdGUgb2JqOiB7IHRvU3RyaW5nKCk6IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiB7IHRvU3RyaW5nKCk6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5vYmogPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1NjYWxhcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3RpY2t5U2NhbGFyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdHJpbmdPZic7Il19
