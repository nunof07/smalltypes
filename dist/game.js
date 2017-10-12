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
var index_1 = require("./base/index");
var index_2 = require("./base/index");
var index_3 = require("./base/index");
var index_4 = require("./base/index");
var index_5 = require("./base/index");
var index_6 = require("./base/index");
var index_7 = require("./base/index");
var index_8 = require("./base/index");
var index_9 = require("./phaser/index");
var index_10 = require("./pong/index");

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

},{"./base/index":19,"./phaser/index":41,"./pong/index":49}],4:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../id/index");

var BaseComponentId = function (_index_1$BaseId) {
  _inherits(BaseComponentId, _index_1$BaseId);

  function BaseComponentId() {
    _classCallCheck(this, BaseComponentId);

    return _possibleConstructorReturn(this, (BaseComponentId.__proto__ || Object.getPrototypeOf(BaseComponentId)).apply(this, arguments));
  }

  return BaseComponentId;
}(index_1.BaseId);

exports.BaseComponentId = BaseComponentId;

},{"../id/index":18}],5:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../system/index");

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

},{"../../system/index":56}],6:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../system/index");

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

},{"../../system/index":56}],7:[function(require,module,exports){
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
var index_1 = require("../component/index");
var index_2 = require("../component/index");

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

},{"../component/index":7}],9:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../id/index");

var BaseEntityId = function (_index_1$BaseId) {
  _inherits(BaseEntityId, _index_1$BaseId);

  function BaseEntityId() {
    _classCallCheck(this, BaseEntityId);

    return _possibleConstructorReturn(this, (BaseEntityId.__proto__ || Object.getPrototypeOf(BaseEntityId)).apply(this, arguments));
  }

  return BaseEntityId;
}(index_1.BaseId);

exports.BaseEntityId = BaseEntityId;

},{"../id/index":18}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = require("./BaseEntity");
var BaseEntityId_1 = require("./BaseEntityId");

var BaseEntityPool = function () {
    function BaseEntityPool() {
        _classCallCheck(this, BaseEntityPool);

        this.pool = [];
    }

    _createClass(BaseEntityPool, [{
        key: "getNewId",
        value: function getNewId() {
            return new BaseEntityId_1.BaseEntityId(this.pool.length + '');
        }
    }, {
        key: "create",
        value: function create(components) {
            var entity = new BaseEntity_1.BaseEntity(this.getNewId(), new Map(components.map(function (component) {
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

},{"./BaseEntity":8,"./BaseEntityId":9}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var EntitySearch_1 = require("./EntitySearch");

var ComponentSearch = function () {
    function ComponentSearch(id) {
        var entitySearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new EntitySearch_1.EntitySearch(id);

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

},{"./EntitySearch":12}],12:[function(require,module,exports){
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
var index_1 = require("../entity/index");
var index_2 = require("../text/index");

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

},{"../entity/index":13,"../text/index":35}],16:[function(require,module,exports){
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
var index_1 = require("../id/index");

var BasePhaseId = function (_index_1$BaseId) {
  _inherits(BasePhaseId, _index_1$BaseId);

  function BasePhaseId() {
    _classCallCheck(this, BasePhaseId);

    return _possibleConstructorReturn(this, (BasePhaseId.__proto__ || Object.getPrototypeOf(BasePhaseId)).apply(this, arguments));
  }

  return BasePhaseId;
}(index_1.BaseId);

exports.BasePhaseId = BasePhaseId;

},{"../id/index":18}],21:[function(require,module,exports){
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
var BasePhaseId_1 = require("./BasePhaseId");

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

Load.ID = new BasePhaseId_1.BasePhaseId(Load.name);
exports.Load = Load;

},{"./BasePhaseId":20}],23:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../system/index");

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

},{"../system/index":31}],24:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var BasePhaseId_1 = require("./BasePhaseId");

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

Start.ID = new BasePhaseId_1.BasePhaseId(Start.name);
exports.Start = Start;

},{"./BasePhaseId":20}],25:[function(require,module,exports){
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
var index_1 = require("../phase/index");

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

},{"../phase/index":25}],29:[function(require,module,exports){
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
var index_1 = require("../../base/index");
var index_2 = require("../../base/index");
var index_3 = require("../text/index");

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

},{"../../base/index":19,"../text/index":48}],43:[function(require,module,exports){
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
var index_1 = require("../../base/index");
var index_2 = require("../../base/index");
var index_3 = require("../font/index");

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

},{"../../base/index":19,"../font/index":40}],45:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base/index");
var index_2 = require("../../base/index");
var index_3 = require("../../base/index");
var PhaserBitmapText_1 = require("./PhaserBitmapText");

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
                entity.attach(new PhaserBitmapText_1.PhaserBitmapText(_this2.factory.create(text), text.font())).detach(text.id());
            });
        }
    }]);

    return PhaserBitmapTextStart;
}(index_1.Start);

exports.PhaserBitmapTextStart = PhaserBitmapTextStart;

},{"../../base/index":19,"./PhaserBitmapText":42}],46:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base/index");
var PhaserBitmapTextLoad_1 = require("./PhaserBitmapTextLoad");
var PhaserBitmapTextStart_1 = require("./PhaserBitmapTextStart");
var PhaserBitmapTextFactory_1 = require("./PhaserBitmapTextFactory");
/**
 * Loads and creates bitmap text using Phaser.
 */

var PhaserBitmapTextSystem = function (_index_1$BaseSystem) {
    _inherits(PhaserBitmapTextSystem, _index_1$BaseSystem);

    function PhaserBitmapTextSystem(entities, loader, factory) {
        _classCallCheck(this, PhaserBitmapTextSystem);

        return _possibleConstructorReturn(this, (PhaserBitmapTextSystem.__proto__ || Object.getPrototypeOf(PhaserBitmapTextSystem)).call(this, [new PhaserBitmapTextLoad_1.PhaserBitmapTextLoad(entities, loader), new PhaserBitmapTextStart_1.PhaserBitmapTextStart(entities, new PhaserBitmapTextFactory_1.PhaserBitmapTextFactory(factory))]));
    }

    return PhaserBitmapTextSystem;
}(index_1.BaseSystem);

exports.PhaserBitmapTextSystem = PhaserBitmapTextSystem;

},{"../../base/index":19,"./PhaserBitmapTextFactory":43,"./PhaserBitmapTextLoad":44,"./PhaserBitmapTextStart":45}],47:[function(require,module,exports){
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
var index_1 = require("../../base/index");
var ScoreComponent_1 = require("./ScoreComponent");

var Score = function () {
    function Score(position, font) {
        _classCallCheck(this, Score);

        this.position = position;
        this.font = font;
    }

    _createClass(Score, [{
        key: "create",
        value: function create() {
            return [new ScoreComponent_1.ScoreComponent(), new index_1.BaseBitmapText(this.position, this.font, '0')];
        }
    }]);

    return Score;
}();

exports.Score = Score;

},{"../../base/index":19,"./ScoreComponent":51}],51:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../base/index");

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

},{"../../base/index":19}],52:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9CYXNlQ29tcG9uZW50SWQudHMiLCJzcmMvZWNzL2Jhc2UvY29tcG9uZW50L0NvbXBvbmVudER1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eS50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eUlkLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9CYXNlRW50aXR5UG9vbC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQ29tcG9uZW50U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9FbnRpdHlTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvZW50aXR5L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvQmFzZUJpdG1hcEZvbnQudHMiLCJzcmMvZWNzL2Jhc2UvZm9udC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvaWQvQmFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL2lkL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZVBvb2wudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvTG9hZC50cyIsInNyYy9lY3MvYmFzZS9waGFzZS9QaGFzZUV4ZWN1dGUudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvU3RhcnQudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvcG9zaXRpb24vQmFzZVBvc2l0aW9uLnRzIiwic3JjL2Vjcy9iYXNlL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtLnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtQ29sbGVjdGlvbi50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2Uvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3RleHQvQmFzZUJpdG1hcFRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9SZWFkVGV4dC50cyIsInNyYy9lY3MvYmFzZS90ZXh0L1JlYWRXcml0ZVRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS93b3JsZC9CYXNlV29ybGQudHMiLCJzcmMvZWNzL2Jhc2Uvd29ybGQvaW5kZXgudHMiLCJzcmMvZWNzL21haW4udHMiLCJzcmMvZWNzL3BoYXNlci9mb250L1BoYXNlckJpdG1hcEZvbnRMb2FkLnRzIiwic3JjL2Vjcy9waGFzZXIvZm9udC9pbmRleC50cyIsInNyYy9lY3MvcGhhc2VyL2luZGV4LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dExvYWQudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHRTdGFydC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dFN5c3RlbS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyVGV4dC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvaW5kZXgudHMiLCJzcmMvZWNzL3BvbmcvaW5kZXgudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmUudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmVDb21wb25lbnQudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvaW5kZXgudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvRHVwbGljYXRlRXJyb3IudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvTm90Rm91bmRFcnJvci50cyIsInNyYy9lY3Mvc3lzdGVtL2Vycm9ycy9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLEFBQWdEOzs7Ozs7Ozs7O3NEQUVoRDs7SUFBdUI7OztBQUNuQjtBQUNJLEFBQUssQUFBRSxBQUFDLEFBQ1o7OztBQUFDLEFBRU0sQUFBSTs7Ozs7QUFDUCxBQUFzQjtBQUN0QixBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFTLFlBQUcsQUFBTSxPQUFDLEFBQVksYUFBQyxBQUFRLEFBQUM7QUFDcEQsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBbUIsc0JBQUcsQUFBTSxPQUFDLEFBQVksYUFBQyxBQUFRLEFBQUM7QUFDOUQsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBcUIsd0JBQUcsQUFBSSxBQUFDO0FBQ3hDLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFBQW1CLHNCQUFHLEFBQUksQUFBQztBQUN0QyxBQUFJLGlCQUFDLEFBQUssTUFBQyxBQUFjLGlCQUFHLEFBQUksQUFBQztBQUNqQyxBQUFJLGlCQUFDLEFBQUksS0FBQyxBQUFLLE1BQUMsQUFBaUIsa0JBQUMsQUFBTSxTQUFHLEFBQVEsQUFBQyxVQUFDLEFBQTZDO0FBQ2xHLEFBQUksaUJBQUMsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFPLEFBQUUsQUFBQztBQUUxQixBQUFvQjtBQUNwQixBQUFJLGlCQUFDLEFBQUksS0FBQyxBQUFTLFlBQUcsQUFBSyxBQUFDO0FBQzVCLEFBQUksaUJBQUMsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFRLFdBQUcsQUFBSyxBQUFDO0FBQ2pDLEFBQU0s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QUFHLElBQUksUUFBZSxnQkFBQyxBQUFjLGVBQUMsQUFBSSxBQUFDLEFBQUM7QUFEekUseUJBcUJDOzs7Ozs7Ozs7OztBQ3pCRCxpQkFBd0I7QUFDeEIsaUJBQWlDOzs7Ozs7Ozs7OztzRENEakM7O0lBQTRCOzs7QUFDeEIsQUFBWTtBQUNSLEFBQUssQUFBQzs7Ozs7QUFESyxBQUFXOzs7K0pBQ2IsQUFBSSxBQUFDLEFBQUM7O0FBQ2YsQUFBSyxjQUFDLEFBQWlCLEFBQUMsQUFBSSx5QkFBRSxBQUFjLEFBQUMsQUFBQyxBQUNsRDs7QUFBQyxBQUNKOzs7RUFMbUMsQUFBSzs7QUFBekMseUJBS0M7Ozs7Ozs7Ozs7O3NEQ0xEOztJQUEyQjs7O0FBQ3ZCLEFBQVk7QUFDUixBQUFLLEFBQUM7Ozs7O0FBREssQUFBVzs7OzZKQUNiLEFBQUksQUFBQyxBQUFDOztBQUNmLEFBQUssY0FBQyxBQUFpQixBQUFDLEFBQUkseUJBQUUsQUFBYSxBQUFDLEFBQUMsQUFDakQ7O0FBQUMsQUFDSjs7O0VBTGtDLEFBQUs7O0FBQXhDLHdCQUtDOzs7Ozs7Ozs7OztBQ0xELGlCQUFpQztBQUNqQyxpQkFBZ0M7Ozs7Ozs7Ozs7O0FDRGhDLGlCQUErQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIHNjYWxlIHRvIGZpdCBzY3JlZW5cclxuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mdWxsU2NyZWVuU2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUud2luZG93Q29uc3RyYWludHMuYm90dG9tID0gJ3Zpc3VhbCc7IC8vIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG92ZXIgc2NyZWVuIGhlaWdodFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgcGl4ZWxzIHNoYXJwXHJcbiAgICAgICAgdGhpcy5nYW1lLmFudGlhbGlhcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5zbW9vdGhlZCA9IGZhbHNlO1xyXG4gICAgICAgIFBoYXNlci5DYW52YXMuc2V0SW1hZ2VSZW5kZXJpbmdDcmlzcCh0aGlzLmdhbWUuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IEJvb3RTdGF0ZSB9IGZyb20gJy4vQm9vdFN0YXRlJztcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9HYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVjc1Bvbmcge1xyXG4gICAgcHJpdmF0ZSBfZ2FtZTogUGhhc2VyLkdhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDI0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDU3NixcclxuICAgICAgICAgICAgcmVuZGVyZXI6IFBoYXNlci5BVVRPLFxyXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lLWNvbnRhaW5lcidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2Jvb3QnLCBuZXcgQm9vdFN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdnYW1lJywgbmV3IEdhbWVTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgQmFzZVdvcmxkIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUVudGl0eVBvb2wgfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQb3NpdGlvbiB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBGb250IH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgTG9hZCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFN0YXJ0IH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VFeGVjdXRlIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dFN5c3RlbSB9IGZyb20gJy4vcGhhc2VyL2luZGV4JztcclxuaW1wb3J0IHsgU2NvcmUgfSBmcm9tICcuL3BvbmcvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBwcml2YXRlIGVjczogQmFzZVdvcmxkO1xyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZm9udCA9IG5ldyBCYXNlQml0bWFwRm9udCgnUHJlc3MgU3RhcnQgMlAnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlBfMC5wbmcnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlAuZm50JywgMzIpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzID0gbmV3IEJhc2VFbnRpdHlQb29sKClcclxuICAgICAgICAgICAgLmNyZWF0ZU1hbnkoW1xyXG4gICAgICAgICAgICAgICAgbmV3IFNjb3JlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCYXNlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjUgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyICogZm9udC5zaXplKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQgKiBmb250LnNpemUoKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQmFzZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc1ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMiAqIGZvbnQuc2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0ICogZm9udC5zaXplKClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5lY3MgPSBuZXcgQmFzZVdvcmxkKFxyXG4gICAgICAgICAgICBlbnRpdGllcyxcclxuICAgICAgICAgICAgbmV3IEJhc2VTeXN0ZW1Db2xsZWN0aW9uKFtcclxuICAgICAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtKGVudGl0aWVzLCB0aGlzLmdhbWUubG9hZCwgdGhpcy5nYW1lLmFkZClcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlRXhlY3V0ZSh0aGlzLmVjcy5zeXN0ZW1zKCksIExvYWQuSUQpXHJcbiAgICAgICAgICAgIC5leGVjdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZUV4ZWN1dGUodGhpcy5lY3Muc3lzdGVtcygpLCBTdGFydC5JRClcclxuICAgICAgICAgICAgLmV4ZWN1dGUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VJZCB9IGZyb20gJy4uL2lkL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50SWQgZXh0ZW5kcyBCYXNlSWQgaW1wbGVtZW50cyBDb21wb25lbnRJZCB7XHJcbn0iLCJpbXBvcnQgeyBEdXBsaWNhdGVFcnJvciB9IGZyb20gJy4uLy4uL3N5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBEdXBsaWNhdGVFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJy4uLy4uL3N5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Tm90Rm91bmRFcnJvciBleHRlbmRzIE5vdEZvdW5kRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUNvbXBvbmVudElkJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnREdXBsaWNhdGVFcnJvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29tcG9uZW50Tm90Rm91bmRFcnJvcic7IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnROb3RGb3VuZEVycm9yIH0gZnJvbSAnLi4vY29tcG9uZW50L2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnQvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHkgaW1wbGVtZW50cyBFbnRpdHkge1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlJZDogRW50aXR5SWQ7XHJcbiAgICBwcml2YXRlIGNvbXBvbmVudHM6IE1hcDxDb21wb25lbnRJZCwgQ29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgaWQ6IEVudGl0eUlkLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IE1hcDxDb21wb25lbnRJZCwgQ29tcG9uZW50PiA9IG5ldyBNYXAoKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50cztcclxuICAgICAgICB0aGlzLmVudGl0eUlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eUlkO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaChjb21wb25lbnQ6IENvbXBvbmVudCk6IEVudGl0eSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50cy5oYXMoY29tcG9uZW50LmlkKCkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21wb25lbnREdXBsaWNhdGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hNYW55KGNvbXBvbmVudHM6IENvbXBvbmVudFtdKTogRW50aXR5IHtcclxuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2goY29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoKGlkOiBDb21wb25lbnRJZCk6IEVudGl0eSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmRlbGV0ZShpZCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhjb21wb25lbnRzOiBDb21wb25lbnRJZFtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuZXZlcnkoaWQgPT4gdGhpcy5jb21wb25lbnRzLmhhcyhpZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldDxUIGV4dGVuZHMgQ29tcG9uZW50Pihjb21wb25lbnQ6IENvbXBvbmVudElkKTogVCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbXBvbmVudE5vdEZvdW5kRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuZ2V0KGNvbXBvbmVudCkgYXMgVDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICcuLi9pZC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eUlkIGV4dGVuZHMgQmFzZUlkIGltcGxlbWVudHMgRW50aXR5SWQge1xyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUHJlZmFiIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi9CYXNlRW50aXR5JztcclxuaW1wb3J0IHsgQmFzZUVudGl0eUlkIH0gZnJvbSAnLi9CYXNlRW50aXR5SWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHlQb29sIGltcGxlbWVudHMgRW50aXR5UG9vbCB7XHJcbiAgICBwcml2YXRlIHBvb2w6IEVudGl0eVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmV3SWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFzZUVudGl0eUlkKHRoaXMucG9vbC5sZW5ndGggKyAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNvbXBvbmVudHM/OiBDb21wb25lbnRbXSk6IEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEJhc2VFbnRpdHkoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV3SWQoKSxcclxuICAgICAgICAgICAgbmV3IE1hcChcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiBbY29tcG9uZW50LmlkKCksIGNvbXBvbmVudF0gYXMgW0NvbXBvbmVudElkLCBDb21wb25lbnRdKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBvb2wucHVzaChlbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1hbnkocHJlZmFiczogUHJlZmFiW10pOiBFbnRpdHlQb29sIHtcclxuICAgICAgICBwcmVmYWJzLmZvckVhY2gocHJlZmFiID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICBwcmVmYWIuY3JlYXRlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXRpZXMoKTogRW50aXR5W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvb2w7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICcuL0VudGl0eVNlYXJjaCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U2VhcmNoPFQgZXh0ZW5kcyBDb21wb25lbnQ+IGltcGxlbWVudHMgU2VhcmNoPFQ+IHtcclxuICAgIHByaXZhdGUgaWQ6IENvbXBvbmVudElkO1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlTZWFyY2g6IEVudGl0eVNlYXJjaDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpZDogQ29tcG9uZW50SWQsXHJcbiAgICAgICAgZW50aXR5U2VhcmNoOiBFbnRpdHlTZWFyY2ggPSBuZXcgRW50aXR5U2VhcmNoKGlkKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZW50aXR5U2VhcmNoID0gZW50aXR5U2VhcmNoO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5U2VhcmNoLmZpbmQocG9vbClcclxuICAgICAgICAgICAgLm1hcChlbnRpdHkgPT4gZW50aXR5LmdldDxUPih0aGlzLmlkKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2VhcmNoIGltcGxlbWVudHMgU2VhcmNoPEVudGl0eT4ge1xyXG4gICAgcHJpdmF0ZSBpZHM6IENvbXBvbmVudElkW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWRzOiBDb21wb25lbnRJZFtdIHwgQ29tcG9uZW50SWQpIHtcclxuICAgICAgICB0aGlzLmlkcyA9IChpZHMgJiYgaWRzLmNvbnN0cnVjdG9yID09PSBBcnJheSkgP1xyXG4gICAgICAgICAgICBpZHMgYXMgQ29tcG9uZW50SWRbXSA6XHJcbiAgICAgICAgICAgIFtpZHMgYXMgQ29tcG9uZW50SWRdO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IEVudGl0eVtdIHtcclxuICAgICAgICByZXR1cm4gcG9vbC5lbnRpdGllcygpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZW50aXR5ID0+IGVudGl0eS5oYXModGhpcy5pZHMpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUVudGl0eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQmFzZUVudGl0eUlkJztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5UG9vbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29tcG9uZW50U2VhcmNoJztcclxuZXhwb3J0ICogZnJvbSAnLi9FbnRpdHlTZWFyY2gnOyIsImV4cG9ydCBjbGFzcyBCYXNlQml0bWFwRm9udCB7XHJcbiAgICBwcml2YXRlIGtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpbWFnZVBhdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgYXRsYXNQYXRoOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGZvbnRTaXplOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIGltYWdlUGF0aDogc3RyaW5nLCBhdGxhc1BhdGg6IHN0cmluZywgc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5pbWFnZVBhdGggPSBpbWFnZVBhdGg7XHJcbiAgICAgICAgdGhpcy5hdGxhc1BhdGggPSBhdGxhc1BhdGg7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZVBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgYXRsYXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdGxhc1BhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvbnRTaXplO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJy4uL2VudGl0eS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnLi4vdGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQml0bWFwRm9udFNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxCaXRtYXBGb250PiB7XHJcbiAgICBwcml2YXRlIHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+ID0gbmV3IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0Q29tcG9uZW50PihCYXNlQml0bWFwVGV4dC5JRCkpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBCaXRtYXBGb250W10ge1xyXG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldCgvLyB1bmlxdWUgc2V0XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmZpbmQocG9vbClcclxuICAgICAgICAgICAgICAgIC5tYXAodGV4dCA9PiB0ZXh0LmZvbnQoKSlcclxuICAgICAgICApXTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUJpdG1hcEZvbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0JpdG1hcEZvbnRTZWFyY2gnOyIsImltcG9ydCB7IElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUlkIGltcGxlbWVudHMgSWQge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBJZCB8IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaWQgPSAoaWQgaW5zdGFuY2VvZiBPYmplY3QpID9cclxuICAgICAgICAgICAgKGlkIGFzIElkKS5wcmludCgpIDpcclxuICAgICAgICAgICAgaWQgKyAnJztcclxuICAgIH1cclxuXHJcbiAgICBwcmludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlSWQnOyIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9lbnRpdHkvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZvbnQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lkL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9waGFzZS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcG9zaXRpb24vaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N5c3RlbS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd29ybGQvaW5kZXgnOyIsImltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VJZCB9IGZyb20gJy4uL2lkL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUGhhc2VJZCBleHRlbmRzIEJhc2VJZCBpbXBsZW1lbnRzIENvbXBvbmVudElkIHtcclxufSIsImltcG9ydCB7IFBoYXNlUG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVBoYXNlUG9vbCBpbXBsZW1lbnRzIFBoYXNlUG9vbCB7XHJcbiAgICBwcml2YXRlIHBoYXNlczogTWFwPFBoYXNlSWQsIFBoYXNlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaGFzZXM6IFBoYXNlW10gfCBNYXA8UGhhc2VJZCwgUGhhc2U+KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZXMgPSAocGhhc2VzIGluc3RhbmNlb2YgTWFwKSA/IHBoYXNlcyA6XHJcbiAgICAgICAgICAgIG5ldyBNYXAoXHJcbiAgICAgICAgICAgICAgICBwaGFzZXMubWFwKHBoYXNlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgW3BoYXNlLmlkKCksIHBoYXNlXSBhcyBbUGhhc2VJZCwgUGhhc2VdXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKGlkOiBQaGFzZUlkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VzLmhhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0PFQgZXh0ZW5kcyBQaGFzZT4oaWQ6IFBoYXNlSWQpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZXMuZ2V0KGlkKSBhcyBUO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGhhc2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VJZCB9IGZyb20gJy4vQmFzZVBoYXNlSWQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvYWQgaW1wbGVtZW50cyBQaGFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VQaGFzZUlkKExvYWQubmFtZSk7XHJcblxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIExvYWQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZXhlY3V0ZSgpOiB2b2lkO1xyXG59IiwiaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlU2VhcmNoIH0gZnJvbSAnLi4vc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZUV4ZWN1dGUge1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uO1xyXG4gICAgcHJpdmF0ZSBzZWFyY2g6IFBoYXNlU2VhcmNoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24sIHNlYXJjaDogUGhhc2VTZWFyY2ggfCBQaGFzZUlkKSB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zID0gc3lzdGVtcztcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IChzZWFyY2ggaW5zdGFuY2VvZiBQaGFzZVNlYXJjaCkgPyBzZWFyY2ggOiBuZXcgUGhhc2VTZWFyY2goc2VhcmNoKTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoLmZpbmQodGhpcy5zeXN0ZW1zKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChwaGFzZSA9PiBwaGFzZS5leGVjdXRlKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGhhc2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VJZCB9IGZyb20gJy4vQmFzZVBoYXNlSWQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0YXJ0IGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlUGhhc2VJZChTdGFydC5uYW1lKTtcclxuXHJcbiAgICBpZCgpOiBQaGFzZUlkIHtcclxuICAgICAgICByZXR1cm4gU3RhcnQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZXhlY3V0ZSgpOiB2b2lkO1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlUGhhc2VJZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQmFzZVBoYXNlUG9vbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VFeGVjdXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGFydCc7IiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUG9zaXRpb24gaW1wbGVtZW50cyBQb3NpdGlvbiB7XHJcbiAgICBwcml2YXRlIGNvb3JkaW5hdGVzOiBudW1iZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc1sxXTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVBvc2l0aW9uJzsiLCJpbXBvcnQgeyBQaGFzZVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVBoYXNlUG9vbCB9IGZyb20gJy4uL3BoYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlU3lzdGVtIGltcGxlbWVudHMgU3lzdGVtIHtcclxuICAgIHByaXZhdGUgcGhhc2VQb29sOiBQaGFzZVBvb2w7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGhhc2VzOiBQaGFzZVBvb2wgfCBQaGFzZVtdIHwgTWFwPFBoYXNlSWQsIFBoYXNlPikge1xyXG4gICAgICAgIHRoaXMucGhhc2VQb29sID0gKHBoYXNlcyBpbnN0YW5jZW9mIEFycmF5IHx8IHBoYXNlcyBpbnN0YW5jZW9mIE1hcCkgP1xyXG4gICAgICAgICAgICBuZXcgQmFzZVBoYXNlUG9vbChwaGFzZXMpIDpcclxuICAgICAgICAgICAgcGhhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHBoYXNlcygpOiBQaGFzZVBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlUG9vbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN5c3RlbSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlU3lzdGVtQ29sbGVjdGlvbiBpbXBsZW1lbnRzIFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW1zOiBTeXN0ZW1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzeXN0ZW1zPzogU3lzdGVtW10pIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMgPSBzeXN0ZW1zIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHN5c3RlbTogU3lzdGVtKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zLnB1c2goc3lzdGVtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJNYW55KHN5c3RlbXM6IFN5c3RlbVtdKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgc3lzdGVtcy5mb3JFYWNoKHN5c3RlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoc3lzdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGlkOiBQaGFzZUlkKTogU3lzdGVtW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbXMuZmlsdGVyKHN5c3RlbSA9PlxyXG4gICAgICAgICAgICBzeXN0ZW0ucGhhc2VzKCkuaGFzKGlkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW1TZWFyY2ggfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VTZWFyY2ggaW1wbGVtZW50cyBTeXN0ZW1TZWFyY2g8UGhhc2U+IHtcclxuICAgIHByaXZhdGUgaWQ6IFBoYXNlSWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IFBoYXNlSWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uKTogUGhhc2VbXSB7XHJcbiAgICAgICAgcmV0dXJuIHN5c3RlbXMuZmlsdGVyKHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC5tYXAoc3lzdGVtID0+IHN5c3RlbS5waGFzZXMoKS5nZXQodGhpcy5pZCkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlU3lzdGVtJztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlU3lzdGVtQ29sbGVjdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VTZWFyY2gnOyIsImltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuaW1wb3J0IHsgV3JpdGVUZXh0IH0gZnJvbSAnQGNvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICdAYmFzZS9jb21wb25lbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBSZWFkV3JpdGVUZXh0IH0gZnJvbSAnQGJhc2UvdGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUJpdG1hcFRleHQgaW1wbGVtZW50cyBCaXRtYXBUZXh0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKEJhc2VCaXRtYXBUZXh0Lm5hbWUpO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dFBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgdGV4dEZvbnQ6IEJpdG1hcEZvbnQ7XHJcbiAgICBwcml2YXRlIHdyaXRlVGV4dDogUmVhZFdyaXRlVGV4dDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQsIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dFBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IGZvbnQ7XHJcbiAgICAgICAgdGhpcy53cml0ZVRleHQgPSBuZXcgUmVhZFdyaXRlVGV4dCh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIEJhc2VCaXRtYXBUZXh0LklEO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZm9udCgpOiBCaXRtYXBGb250IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0Rm9udDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0KCk6IFdyaXRlVGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVUZXh0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGV4dCB9IGZyb20gJ0Bjb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWFkVGV4dCBpbXBsZW1lbnRzIFRleHQge1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICdAY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVhZFdyaXRlVGV4dCBpbXBsZW1lbnRzIFdyaXRlVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUJpdG1hcFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlYWRUZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9SZWFkV3JpdGVUZXh0JzsiLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlV29ybGQgaW1wbGVtZW50cyBXb3JsZCB7XHJcbiAgICBwcml2YXRlIGVudGl0eVBvb2w6IEVudGl0eVBvb2w7XHJcbiAgICBwcml2YXRlIHN5c3RlbUNvbGxlY3Rpb246IFN5c3RlbUNvbGxlY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmVudGl0eVBvb2wgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLnN5c3RlbUNvbGxlY3Rpb24gPSBzeXN0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGl0aWVzKCk6IEVudGl0eVBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVBvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgc3lzdGVtcygpOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db2xsZWN0aW9uO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlV29ybGQnOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBFY3NQb25nIH0gZnJvbSAnLi9FY3NQb25nJztcclxuXHJcbm5ldyBFY3NQb25nKCkuc3RhcnQoKTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcEZvbnRMb2FkIHtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoZm9udHM6IEJpdG1hcEZvbnRbXSk6IFBoYXNlckJpdG1hcEZvbnRMb2FkIHtcclxuICAgICAgICBmb250cy5mb3JFYWNoKGZvbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5iaXRtYXBGb250KFxyXG4gICAgICAgICAgICAgICAgZm9udC5pZCgpLFxyXG4gICAgICAgICAgICAgICAgZm9udC5pbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgZm9udC5hdGxhcygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBGb250TG9hZCc7IiwiZXhwb3J0ICogZnJvbSAnLi9mb250L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0L2luZGV4JzsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJUZXh0IH0gZnJvbSAnLi4vdGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dCBpbXBsZW1lbnRzIEJpdG1hcFRleHRDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoUGhhc2VyQml0bWFwVGV4dC5uYW1lKTtcclxuXHJcbiAgICBwcml2YXRlIGJpdG1hcFRleHQ6IFBoYXNlci5CaXRtYXBUZXh0O1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBQaGFzZXIuQml0bWFwVGV4dCwgZm9udDogQml0bWFwRm9udCkge1xyXG4gICAgICAgIHRoaXMuYml0bWFwVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IGZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogQ29tcG9uZW50SWQge1xyXG4gICAgICAgIHJldHVybiBQaGFzZXJCaXRtYXBUZXh0LklEO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJhc2VQb3NpdGlvbih0aGlzLmJpdG1hcFRleHQueCwgdGhpcy5iaXRtYXBUZXh0LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvbnQoKTogQml0bWFwRm9udCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dCgpOiBXcml0ZVRleHQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyVGV4dCh0aGlzLmJpdG1hcFRleHQpO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dEZhY3Rvcnkge1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUodGV4dDogQml0bWFwVGV4dENvbXBvbmVudCk6IFBoYXNlci5CaXRtYXBUZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5LmJpdG1hcFRleHQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGV4dC5wb3NpdGlvbigpLngoKSksXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGV4dC5wb3NpdGlvbigpLnkoKSksXHJcbiAgICAgICAgICAgIHRleHQuZm9udCgpLmlkKCksXHJcbiAgICAgICAgICAgIHRleHQudGV4dCgpLnZhbHVlKCksXHJcbiAgICAgICAgICAgIHRleHQuZm9udCgpLnNpemUoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnLi4vLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnRTZWFyY2ggfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwRm9udExvYWQgfSBmcm9tICcuLi9mb250L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0TG9hZCBleHRlbmRzIExvYWQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZXJCaXRtYXBGb250TG9hZCh0aGlzLmxvYWRlcilcclxuICAgICAgICAgICAgLmxvYWQoXHJcbiAgICAgICAgICAgICAgICBuZXcgQml0bWFwRm9udFNlYXJjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5lbnRpdGllcylcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGFydCB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dCB9IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IH0gZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGV4dGVuZHMgU3RhcnQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgZmFjdG9yeTogUGhhc2VyQml0bWFwVGV4dEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGZhY3Rvcnk6IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBFbnRpdHlTZWFyY2goQmFzZUJpdG1hcFRleHQuSUQpXHJcbiAgICAgICAgICAgIC5maW5kKHRoaXMuZW50aXRpZXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZW50aXR5LmdldDxCaXRtYXBUZXh0Q29tcG9uZW50PihCYXNlQml0bWFwVGV4dC5JRCk7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0YWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5jcmVhdGUodGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhY2godGV4dC5pZCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VTeXN0ZW0gfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dExvYWQgfSBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRMb2FkJztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IH0gZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3RhcnQnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSB9IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5cclxuLyoqXHJcbiAqIExvYWRzIGFuZCBjcmVhdGVzIGJpdG1hcCB0ZXh0IHVzaW5nIFBoYXNlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIGV4dGVuZHMgQmFzZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgbG9hZGVyOiBQaGFzZXIuTG9hZGVyLCBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICBzdXBlcihbXHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0TG9hZChlbnRpdGllcywgbG9hZGVyKSxcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRTdGFydChcclxuICAgICAgICAgICAgICAgIGVudGl0aWVzLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KGZhY3RvcnkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJUZXh0IGltcGxlbWVudHMgV3JpdGVUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dE9iajogeyB0ZXh0OiBzdHJpbmcgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBQaGFzZXIuQml0bWFwVGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dE9iaiA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0T2JqLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGV4dE9iai50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRMb2FkJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3RhcnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRTeXN0ZW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlclRleHQnOyIsImV4cG9ydCAqIGZyb20gJy4vc2NvcmUvaW5kZXgnOyIsImltcG9ydCB7IFByZWZhYiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCB9IGZyb20gJy4vU2NvcmVDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlIGltcGxlbWVudHMgUHJlZmFiIHtcclxuICAgIHByaXZhdGUgcG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBmb250OiBCaXRtYXBGb250O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiBDb21wb25lbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgbmV3IFNjb3JlQ29tcG9uZW50KCksXHJcbiAgICAgICAgICAgIG5ldyBCYXNlQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnQsXHJcbiAgICAgICAgICAgICAgICAnMCdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vYmFzZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcmVDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoU2NvcmVDb21wb25lbnQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gU2NvcmVDb21wb25lbnQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCAqIGZyb20gJy4vU2NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Njb3JlQ29tcG9uZW50JzsiLCJleHBvcnQgY2xhc3MgRHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIER1cGxpY2F0ZUVycm9yKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBOb3RGb3VuZEVycm9yKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vRHVwbGljYXRlRXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL05vdEZvdW5kRXJyb3InOyIsImV4cG9ydCAqIGZyb20gJy4vZXJyb3JzL2luZGV4JzsiXX0=
