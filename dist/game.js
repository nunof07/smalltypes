(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootState_1 = require("./states/BootState");
var PreloaderState_1 = require("./states/PreloaderState");
var GameState_1 = require("./states/GameState");
var Game_1 = require("./ecs/Game");
var PongGame = /** @class */ (function () {
    function PongGame() {
        this._game = new Phaser.Game({
            width: 1024,
            height: 576,
            renderer: Phaser.AUTO,
            parent: 'game-container'
        });
    }
    PongGame.prototype.start = function () {
        Game_1.default(this._game.load, this._game.add);
        this._game.state.add('boot', new BootState_1.default());
        this._game.state.add('preloader', new PreloaderState_1.default());
        this._game.state.add('game', new GameState_1.default());
        this._game.state.start('boot');
    };
    return PongGame;
}());
exports.default = PongGame;
},{"./ecs/Game":3,"./states/BootState":30,"./states/GameState":31,"./states/PreloaderState":32}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Randomizer = /** @class */ (function () {
    function Randomizer() {
    }
    Randomizer.prototype.boolean = function () {
        return Math.random() >= 0.5;
    };
    return Randomizer;
}());
exports.default = Randomizer;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreWorld_1 = require("./core/CoreWorld");
var CoreEntityPool_1 = require("./core/CoreEntityPool");
var CoreSystemCollection_1 = require("./core/CoreSystemCollection");
var Score_1 = require("./assemblages/Score");
var BitmapFont_1 = require("./assets/BitmapFont");
var Position_1 = require("./assets/Position");
var PhaserBitmapText_1 = require("./systems/PhaserBitmapText");
function createWorld(loader, factory) {
    var font = new BitmapFont_1.default('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
    var world = new CoreWorld_1.default(new CoreEntityPool_1.default()
        .createMany([
        new Score_1.default(new Position_1.default(128, 128), font),
        new Score_1.default(new Position_1.default(1024 - 128, 128), font)
    ]), new CoreSystemCollection_1.default()
        .registerMany([
        new PhaserBitmapText_1.default(loader, factory)
    ]));
}
exports.default = createWorld;
},{"./assemblages/Score":4,"./assets/BitmapFont":5,"./assets/Position":10,"./core/CoreEntityPool":17,"./core/CoreSystemCollection":18,"./core/CoreWorld":19,"./systems/PhaserBitmapText":22}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score_1 = require("../components/Score");
var BitmapText_1 = require("../components/BitmapText");
var Score = /** @class */ (function () {
    function Score(position, font) {
        this.position = position;
        this.font = font;
    }
    Score.prototype.create = function (pool) {
        return pool.create()
            .attachMany([
            new Score_1.default(),
            new BitmapText_1.default(this.position, this.font, 32)
        ]);
    };
    return Score;
}());
exports.default = Score;
},{"../components/BitmapText":11,"../components/Score":12}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitmapFont = /** @class */ (function () {
    function BitmapFont(key, imagePath, atlasPath) {
        this.key = key;
        this.imagePath = imagePath;
        this.atlasPath = atlasPath;
    }
    BitmapFont.prototype.id = function () {
        return this.key;
    };
    BitmapFont.prototype.image = function () {
        return this.imagePath;
    };
    BitmapFont.prototype.atlas = function () {
        return this.atlasPath;
    };
    return BitmapFont;
}());
exports.default = BitmapFont;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitmapTextSearch_1 = require("./BitmapTextSearch");
var BitmapFontSearch = /** @class */ (function () {
    function BitmapFontSearch() {
    }
    BitmapFontSearch.prototype.find = function (entities) {
        return new Set(// unique set
        new BitmapTextSearch_1.default().find(entities)
            .map(function (text) { return text.font(); })).slice();
    };
    return BitmapFontSearch;
}());
exports.default = BitmapFontSearch;
},{"./BitmapTextSearch":7}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitmapText_1 = require("../components/BitmapText");
var BitmapTextSearch = /** @class */ (function () {
    function BitmapTextSearch() {
    }
    BitmapTextSearch.prototype.find = function (entities) {
        return entities.query([BitmapText_1.default.ID])
            .map(function (entity) { return entity.get(BitmapText_1.default.ID); });
    };
    return BitmapTextSearch;
}());
exports.default = BitmapTextSearch;
},{"../components/BitmapText":11}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhaserBitmapFontLoad = /** @class */ (function () {
    function PhaserBitmapFontLoad(loader) {
        this.loader = loader;
    }
    PhaserBitmapFontLoad.prototype.load = function (fonts) {
        var _this = this;
        fonts.forEach(function (font) {
            _this.loader.bitmapFont(font.id(), font.image(), font.atlas());
        }, this);
        return this;
    };
    return PhaserBitmapFontLoad;
}());
exports.default = PhaserBitmapFontLoad;
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitmapTextFactory = /** @class */ (function () {
    function BitmapTextFactory(factory) {
        this.factory = factory;
    }
    BitmapTextFactory.prototype.create = function (text) {
        this.factory.bitmapText(Math.floor(text.position().x()), Math.floor(text.position().y()), text.font().id(), text.value(), text.size());
        return this;
    };
    return BitmapTextFactory;
}());
exports.default = BitmapTextFactory;
},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.coordinates = [x, y];
    }
    Position.prototype.x = function () {
        return this.coordinates[0];
    };
    Position.prototype.y = function () {
        return this.coordinates[1];
    };
    return Position;
}());
exports.default = Position;
},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId_1 = require("../core/CoreComponentId");
var BitmapText = /** @class */ (function () {
    function BitmapText(position, font, size, text) {
        if (text === void 0) { text = ''; }
        this.textPosition = position;
        this.textFont = font;
        this.textSize = size;
        this.text = text;
    }
    BitmapText.prototype.id = function () {
        return BitmapText.ID;
    };
    BitmapText.prototype.position = function () {
        return this.textPosition;
    };
    BitmapText.prototype.font = function () {
        return this.textFont;
    };
    BitmapText.prototype.size = function () {
        return this.textSize;
    };
    BitmapText.prototype.value = function () {
        return this.text;
    };
    BitmapText.prototype.update = function (value) {
        this.text = value;
        return this;
    };
    BitmapText.ID = new CoreComponentId_1.default('bitmapText');
    return BitmapText;
}());
exports.default = BitmapText;
},{"../core/CoreComponentId":15}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId_1 = require("../core/CoreComponentId");
var Score = /** @class */ (function () {
    function Score() {
        this.score = 0;
    }
    Score.prototype.id = function () {
        return Score.ID;
    };
    Score.prototype.value = function () {
        return this.score;
    };
    Score.prototype.increment = function () {
        this.score += 1;
    };
    Score.ID = new CoreComponentId_1.default('score');
    return Score;
}());
exports.default = Score;
},{"../core/CoreComponentId":15}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DuplicateError_1 = require("./DuplicateError");
var ComponentDuplicateError = /** @class */ (function (_super) {
    __extends(ComponentDuplicateError, _super);
    function ComponentDuplicateError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    return ComponentDuplicateError;
}(DuplicateError_1.default));
exports.default = ComponentDuplicateError;
},{"./DuplicateError":20}],14:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NotFoundError_1 = require("./NotFoundError");
var ComponentNotFoundError = /** @class */ (function (_super) {
    __extends(ComponentNotFoundError, _super);
    function ComponentNotFoundError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    return ComponentNotFoundError;
}(NotFoundError_1.default));
exports.default = ComponentNotFoundError;
},{"./NotFoundError":21}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId = /** @class */ (function () {
    function CoreComponentId(id) {
        this.id = id;
    }
    CoreComponentId.prototype.get = function () {
        return this.id;
    };
    return CoreComponentId;
}());
exports.default = CoreComponentId;
},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentNotFoundError_1 = require("./ComponentNotFoundError");
var ComponentDuplicateError_1 = require("./ComponentDuplicateError");
var CoreEntity = /** @class */ (function () {
    function CoreEntity(id) {
        this.components = new Map();
        this.entityId = id;
    }
    CoreEntity.prototype.id = function () {
        return this.entityId;
    };
    CoreEntity.prototype.attach = function (component) {
        if (this.components.has(component.id())) {
            throw new ComponentDuplicateError_1.default();
        }
        this.components.set(component.id(), component);
        return this;
    };
    CoreEntity.prototype.attachMany = function (components) {
        var _this = this;
        components.forEach(function (component) {
            _this.attach(component);
        });
        return this;
    };
    CoreEntity.prototype.has = function (components) {
        var _this = this;
        return components.every(function (id) { return _this.components.has(id); });
    };
    CoreEntity.prototype.get = function (component) {
        if (this.components.has(component)) {
            throw new ComponentNotFoundError_1.default();
        }
        return this.components.get(component);
    };
    return CoreEntity;
}());
exports.default = CoreEntity;
},{"./ComponentDuplicateError":13,"./ComponentNotFoundError":14}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreEntity_1 = require("./CoreEntity");
var CoreEntityPool = /** @class */ (function () {
    function CoreEntityPool() {
        this.entities = [];
    }
    CoreEntityPool.prototype.getNewId = function () {
        return this.entities.length + '';
    };
    CoreEntityPool.prototype.create = function () {
        var entity = new CoreEntity_1.default(this.getNewId());
        this.entities.push(entity);
        return entity;
    };
    CoreEntityPool.prototype.createMany = function (assemblages) {
        var _this = this;
        assemblages.forEach(function (assemblage) {
            assemblage.create(_this);
        });
        return this;
    };
    CoreEntityPool.prototype.query = function (components) {
        return this.entities.filter(function (entity) {
            return entity.has(components);
        });
    };
    return CoreEntityPool;
}());
exports.default = CoreEntityPool;
},{"./CoreEntity":16}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreSystemCollection = /** @class */ (function () {
    function CoreSystemCollection() {
        this.systems = [];
    }
    CoreSystemCollection.prototype.register = function (system) {
        this.systems.push(system);
        return this;
    };
    CoreSystemCollection.prototype.registerMany = function (systems) {
        var _this = this;
        systems.forEach(function (system) {
            _this.register(system);
        });
        return this;
    };
    CoreSystemCollection.prototype.initialize = function (entities) {
        this.systems.forEach(function (system) {
            system.initialize(entities);
        });
        return this;
    };
    CoreSystemCollection.prototype.start = function (entities) {
        this.systems.forEach(function (system) {
            system.start(entities);
        });
        return this;
    };
    CoreSystemCollection.prototype.process = function (entities) {
        this.systems.forEach(function (system) {
            system.process(entities);
        });
        return this;
    };
    CoreSystemCollection.prototype.finish = function (entities) {
        this.systems.forEach(function (system) {
            system.finish(entities);
        });
        return this;
    };
    return CoreSystemCollection;
}());
exports.default = CoreSystemCollection;
},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreWorld = /** @class */ (function () {
    function CoreWorld(entities, systems) {
        this.entities = entities;
        this.systems = systems;
    }
    CoreWorld.prototype.initialize = function () {
        this.systems.initialize(this.entities);
        return this;
    };
    CoreWorld.prototype.start = function () {
        this.systems.start(this.entities);
        return this;
    };
    CoreWorld.prototype.process = function () {
        this.systems.process(this.entities);
        return this;
    };
    CoreWorld.prototype.finish = function () {
        this.systems.finish(this.entities);
        return this;
    };
    return CoreWorld;
}());
exports.default = CoreWorld;
},{}],20:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DuplicateError = /** @class */ (function (_super) {
    __extends(DuplicateError, _super);
    function DuplicateError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Error.captureStackTrace(_this, DuplicateError);
        return _this;
    }
    return DuplicateError;
}(Error));
exports.default = DuplicateError;
},{}],21:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Error.captureStackTrace(_this, NotFoundError);
        return _this;
    }
    return NotFoundError;
}(Error));
exports.default = NotFoundError;
},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitmapText_1 = require("../components/BitmapText");
var PhaserBitmapFontLoad_1 = require("../assets/PhaserBitmapFontLoad");
var PhaserBitmapTextFactory_1 = require("../assets/PhaserBitmapTextFactory");
var BitmapFontSearch_1 = require("../assets/BitmapFontSearch");
var BitmapTextSearch_1 = require("../assets/BitmapTextSearch");
/**
 * Loads and creates bitmap text using Phaser.
 */
var PhaserBitmapText = /** @class */ (function () {
    function PhaserBitmapText(loader, factory) {
        this.loader = loader;
        this.factory = factory;
    }
    PhaserBitmapText.prototype.components = function () {
        return [BitmapText_1.default.ID];
    };
    PhaserBitmapText.prototype.initialize = function (entities) {
        new PhaserBitmapFontLoad_1.default(this.loader).load(new BitmapFontSearch_1.default().find(entities));
        return this;
    };
    PhaserBitmapText.prototype.start = function (entities) {
        var factory = new PhaserBitmapTextFactory_1.default(this.factory);
        new BitmapTextSearch_1.default().find(entities)
            .forEach(function (text) {
            factory.create(text);
        });
        return this;
    };
    PhaserBitmapText.prototype.process = function (entities) {
        // nothing to do
        return this;
    };
    PhaserBitmapText.prototype.finish = function (entities) {
        // nothing to do
        return this;
    };
    return PhaserBitmapText;
}());
exports.default = PhaserBitmapText;
},{"../assets/BitmapFontSearch":6,"../assets/BitmapTextSearch":7,"../assets/PhaserBitmapFontLoad":8,"../assets/PhaserBitmapTextFactory":9,"../components/BitmapText":11}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Randomizer_1 = require("../Randomizer");
var Ball = /** @class */ (function () {
    function Ball(state, velocity, goLeft, randomizer) {
        if (velocity === void 0) { velocity = 400; }
        if (goLeft === void 0) { goLeft = true; }
        if (randomizer === void 0) { randomizer = new Randomizer_1.default(); }
        this._state = state;
        this._velocity = velocity;
        this._isLaunched = false;
        this._randomizer = randomizer;
        this._goLeft = goLeft;
    }
    Ball.prototype.create = function () {
        this._sprite = this._state.game.add.sprite(this._state.game.world.centerX, this._state.game.world.centerY, 'ball');
        this._sprite.anchor.setTo(0.5, 0.5);
        this._state.game.physics.arcade.enable(this._sprite);
        this._sprite.body.collideWorldBounds = true;
        this._sprite.body.bounce.setTo(1, 1);
    };
    Ball.prototype.reset = function (goLeft) {
        this._sprite.x = this._state.game.world.centerX;
        this._sprite.y = this._state.game.world.centerY;
        this._sprite.body.velocity.setTo(0, 0);
        this._isLaunched = false;
        this._goLeft = goLeft;
    };
    Ball.prototype.launch = function () {
        var xMultiplier = this._goLeft ? -1 : 1;
        var yMultiplier = this._randomizer.boolean() ? -1 : 1;
        this._sprite.body.velocity.x = xMultiplier * this._velocity;
        this._sprite.body.velocity.y = yMultiplier * this._velocity;
        this._isLaunched = true;
    };
    Ball.prototype.toggle = function () {
        if (this._isLaunched) {
            this.reset(this._goLeft);
            return false;
        }
        else {
            this.launch();
            return true;
        }
    };
    Object.defineProperty(Ball.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        enumerable: true,
        configurable: true
    });
    return Ball;
}());
exports.default = Ball;
},{"../Randomizer":2}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score_1 = require("./Score");
var Computer = /** @class */ (function () {
    function Computer(state, paddle, ball, maxVelocity, score) {
        if (maxVelocity === void 0) { maxVelocity = 250; }
        if (score === void 0) { score = new Score_1.default(state); }
        this._state = state;
        this._paddle = paddle;
        this._ball = ball;
        this._maxVelocity = maxVelocity;
        this._score = score;
    }
    Computer.prototype.create = function () {
        this._paddle.create(this._state.game.world.width - 8, this._state.game.world.centerY);
        this._score.create(this._state.game.world.width - 128, 128);
    };
    Computer.prototype.update = function () {
        this._paddle.sprite.body.velocity.setTo(this._ball.sprite.body.velocity.y);
        this._paddle.sprite.body.velocity.x = 0;
        this._paddle.sprite.body.maxVelocity.y = this._maxVelocity;
    };
    Object.defineProperty(Computer.prototype, "paddle", {
        get: function () {
            return this._paddle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    return Computer;
}());
exports.default = Computer;
},{"./Score":28}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score_1 = require("./Score");
var Human = /** @class */ (function () {
    function Human(state, paddle, score) {
        if (score === void 0) { score = new Score_1.default(state); }
        this._state = state;
        this._paddle = paddle;
        this._score = score;
    }
    Human.prototype.create = function () {
        this._paddle.create(0, this._state.game.world.centerY);
        this._score.create(128, 128);
    };
    Human.prototype.update = function () {
        this._paddle.move(this._state.game.input.y);
    };
    Object.defineProperty(Human.prototype, "paddle", {
        get: function () {
            return this._paddle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    return Human;
}());
exports.default = Human;
},{"./Score":28}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Music = /** @class */ (function () {
    function Music(state) {
        this._state = state;
    }
    Music.prototype.create = function () {
        this._sound = this._state.game.add.audio('music');
    };
    Music.prototype.toggle = function (play) {
        if (play) {
            if (this._sound.paused) {
                this._sound.resume();
            }
            else {
                this._sound.play();
            }
            return true;
        }
        else {
            this._sound.pause();
            return false;
        }
    };
    Music.prototype.pause = function () {
        this._sound.pause();
    };
    return Music;
}());
exports.default = Music;
},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paddle = /** @class */ (function () {
    function Paddle(state) {
        this._state = state;
    }
    Paddle.prototype.create = function (x, y) {
        this._sprite = this._state.game.add.sprite(x, y, 'paddle');
        this._sprite.anchor.setTo(0.5, 0.5);
        this._state.game.physics.arcade.enable(this._sprite);
        this._sprite.body.collideWorldBounds = true;
        this._sprite.body.immovable = true;
        this._sprite.scale.setTo(0.5, 0.5);
        this._minY = 0.5 * this._sprite.height;
        this._maxY = this._state.game.world.height - 0.5 * this._sprite.height;
    };
    Paddle.prototype.move = function (y) {
        this._sprite.y = y;
        if (this._sprite.y < this._minY) {
            this._sprite.y = this._minY;
        }
        else if (this._sprite.y > this._maxY) {
            this._sprite.y = this._maxY;
        }
    };
    Object.defineProperty(Paddle.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        enumerable: true,
        configurable: true
    });
    return Paddle;
}());
exports.default = Paddle;
},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score = /** @class */ (function () {
    function Score(state) {
        this._state = state;
        this._value = 0;
    }
    Score.prototype.create = function (x, y) {
        this._bitmap = this._state.game.add.bitmapText(Math.floor(x), Math.floor(y), 'Press Start 2P', '0', 32);
    };
    Score.prototype.increase = function () {
        this._value += 1;
        this._bitmap.text = '' + this._value;
    };
    return Score;
}());
exports.default = Score;
},{}],29:[function(require,module,exports){
"use strict";
/// <reference path="../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var PongGame_1 = require("./PongGame");
new PongGame_1.default().start();
},{"./PongGame":1}],30:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BootState = /** @class */ (function (_super) {
    __extends(BootState, _super);
    function BootState() {
        return _super.call(this) || this;
    }
    BootState.prototype.init = function () {
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
    };
    BootState.prototype.update = function () {
        this.game.state.start('preloader');
    };
    return BootState;
}(Phaser.State));
exports.default = BootState;
},{}],31:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Human_1 = require("../entities/Human");
var Computer_1 = require("../entities/Computer");
var Ball_1 = require("../entities/Ball");
var Paddle_1 = require("../entities/Paddle");
var Music_1 = require("../entities/Music");
var GameState = /** @class */ (function (_super) {
    __extends(GameState, _super);
    function GameState() {
        var _this = _super.call(this) || this;
        _this._ball = new Ball_1.default(_this);
        _this._players = [
            new Human_1.default(_this, new Paddle_1.default(_this)),
            new Computer_1.default(_this, new Paddle_1.default(_this), _this._ball)
        ];
        _this._music = new Music_1.default(_this);
        return _this;
    }
    GameState.prototype.create = function () {
        var _this = this;
        this._music.create();
        this._ball.create();
        this._players.forEach(function (player) { return player.create(); });
        this.game.input.onDown.add(function () {
            _this._music.toggle(_this._ball.toggle());
        }, this);
    };
    GameState.prototype.update = function () {
        var _this = this;
        this._players.forEach(function (player) {
            player.update();
            _this.game.physics.arcade.collide(player.paddle.sprite, _this._ball.sprite, function () { return _this.game.sound.play('hit'); });
        });
        if (this._ball.sprite.body.blocked.up || this._ball.sprite.body.blocked.down) {
            this.game.sound.play('wall');
        }
        if (this._ball.sprite.body.blocked.left) {
            this.score(this._players[1], false);
        }
        if (this._ball.sprite.body.blocked.right) {
            this.score(this._players[0], true);
        }
    };
    GameState.prototype.score = function (player, goLeft) {
        player.score.increase();
        this.game.sound.play('score');
        this._ball.reset(goLeft);
        this._music.pause();
    };
    return GameState;
}(Phaser.State));
exports.default = GameState;
},{"../entities/Ball":23,"../entities/Computer":24,"../entities/Human":25,"../entities/Music":26,"../entities/Paddle":27}],32:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PreloaderState = /** @class */ (function (_super) {
    __extends(PreloaderState, _super);
    function PreloaderState() {
        return _super.call(this) || this;
    }
    PreloaderState.prototype.preload = function () {
        this.game.load.image('paddle', 'images/paddle.png');
        this.game.load.image('ball', 'images/ball.png');
        this.game.load.bitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
        this.game.load.audio('hit', ['audio/hit.wav']);
        this.game.load.audio('score', ['audio/score.wav']);
        this.game.load.audio('wall', ['audio/wall.wav']);
        this.game.load.audio('music', ['audio/at-night-psg.mp3', 'audio/at-night-psg.ogg']);
    };
    PreloaderState.prototype.update = function () {
        this.game.state.start('game');
    };
    return PreloaderState;
}(Phaser.State));
exports.default = PreloaderState;
},{}]},{},[29])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvUG9uZ0dhbWUudHMiLCJzcmMvUmFuZG9taXplci50cyIsInNyYy9lY3MvR2FtZS50cyIsInNyYy9lY3MvYXNzZW1ibGFnZXMvU2NvcmUudHMiLCJzcmMvZWNzL2Fzc2V0cy9CaXRtYXBGb250LnRzIiwic3JjL2Vjcy9hc3NldHMvQml0bWFwRm9udFNlYXJjaC50cyIsInNyYy9lY3MvYXNzZXRzL0JpdG1hcFRleHRTZWFyY2gudHMiLCJzcmMvZWNzL2Fzc2V0cy9QaGFzZXJCaXRtYXBGb250TG9hZC50cyIsInNyYy9lY3MvYXNzZXRzL1BoYXNlckJpdG1hcFRleHRGYWN0b3J5LnRzIiwic3JjL2Vjcy9hc3NldHMvUG9zaXRpb24udHMiLCJzcmMvZWNzL2NvbXBvbmVudHMvQml0bWFwVGV4dC50cyIsInNyYy9lY3MvY29tcG9uZW50cy9TY29yZS50cyIsInNyYy9lY3MvY29yZS9Db21wb25lbnREdXBsaWNhdGVFcnJvci50cyIsInNyYy9lY3MvY29yZS9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9jb3JlL0NvcmVDb21wb25lbnRJZC50cyIsInNyYy9lY3MvY29yZS9Db3JlRW50aXR5LnRzIiwic3JjL2Vjcy9jb3JlL0NvcmVFbnRpdHlQb29sLnRzIiwic3JjL2Vjcy9jb3JlL0NvcmVTeXN0ZW1Db2xsZWN0aW9uLnRzIiwic3JjL2Vjcy9jb3JlL0NvcmVXb3JsZC50cyIsInNyYy9lY3MvY29yZS9EdXBsaWNhdGVFcnJvci50cyIsInNyYy9lY3MvY29yZS9Ob3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9zeXN0ZW1zL1BoYXNlckJpdG1hcFRleHQudHMiLCJzcmMvZW50aXRpZXMvQmFsbC50cyIsInNyYy9lbnRpdGllcy9Db21wdXRlci50cyIsInNyYy9lbnRpdGllcy9IdW1hbi50cyIsInNyYy9lbnRpdGllcy9NdXNpYy50cyIsInNyYy9lbnRpdGllcy9QYWRkbGUudHMiLCJzcmMvZW50aXRpZXMvU2NvcmUudHMiLCJzcmMvbWFpbi50cyIsInNyYy9zdGF0ZXMvQm9vdFN0YXRlLnRzIiwic3JjL3N0YXRlcy9HYW1lU3RhdGUudHMiLCJzcmMvc3RhdGVzL1ByZWxvYWRlclN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxnREFBMkM7QUFDM0MsMERBQXFEO0FBQ3JELGdEQUEyQztBQUMzQyxtQ0FBcUM7QUFFckM7SUFHSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDckIsTUFBTSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sd0JBQUssR0FBWjtRQUNJLGNBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxtQkFBUyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksd0JBQWMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLG1CQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7Ozs7O0FDeEJEO0lBQUE7SUFJQSxDQUFDO0lBSFUsNEJBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENB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Q3RHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCxxQkFBQztBQUFELENBbEJBLEFBa0JDLENBbEIyQyxNQUFNLENBQUMsS0FBSyxHQWtCdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEJvb3RTdGF0ZSBmcm9tICcuL3N0YXRlcy9Cb290U3RhdGUnO1xyXG5pbXBvcnQgUHJlbG9hZGVyU3RhdGUgZnJvbSAnLi9zdGF0ZXMvUHJlbG9hZGVyU3RhdGUnO1xyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gJy4vc3RhdGVzL0dhbWVTdGF0ZSc7XHJcbmltcG9ydCBjcmVhdGVXb3JsZCBmcm9tICcuL2Vjcy9HYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbmdHYW1lIHtcclxuICAgIHByaXZhdGUgX2dhbWU6IFBoYXNlci5HYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBuZXcgUGhhc2VyLkdhbWUoe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzYsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcclxuICAgICAgICAgICAgcGFyZW50OiAnZ2FtZS1jb250YWluZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGNyZWF0ZVdvcmxkKHRoaXMuX2dhbWUubG9hZCwgdGhpcy5fZ2FtZS5hZGQpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3RTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgncHJlbG9hZGVyJywgbmV3IFByZWxvYWRlclN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdnYW1lJywgbmV3IEdhbWVTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21pemVyIHtcclxuICAgIHB1YmxpYyBib29sZWFuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID49IDAuNTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb3JlV29ybGQgZnJvbSAnLi9jb3JlL0NvcmVXb3JsZCc7XHJcbmltcG9ydCBDb3JlRW50aXR5UG9vbCBmcm9tICcuL2NvcmUvQ29yZUVudGl0eVBvb2wnO1xyXG5pbXBvcnQgQ29yZVN5c3RlbUNvbGxlY3Rpb24gZnJvbSAnLi9jb3JlL0NvcmVTeXN0ZW1Db2xsZWN0aW9uJztcclxuaW1wb3J0IFNjb3JlQXNzZW1ibGFnZSBmcm9tICcuL2Fzc2VtYmxhZ2VzL1Njb3JlJztcclxuaW1wb3J0IEJpdG1hcEZvbnQgZnJvbSAnLi9hc3NldHMvQml0bWFwRm9udCc7XHJcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL2Fzc2V0cy9Qb3NpdGlvbic7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIGZyb20gJy4vc3lzdGVtcy9QaGFzZXJCaXRtYXBUZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdvcmxkKGxvYWRlcjogUGhhc2VyLkxvYWRlciwgZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5KSB7XHJcbiAgICBjb25zdCBmb250ID0gbmV3IEJpdG1hcEZvbnQoJ1ByZXNzIFN0YXJ0IDJQJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQXzAucG5nJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQLmZudCcpO1xyXG4gICAgY29uc3Qgd29ybGQgPSBuZXcgQ29yZVdvcmxkKFxyXG4gICAgICAgIG5ldyBDb3JlRW50aXR5UG9vbCgpXHJcbiAgICAgICAgICAgIC5jcmVhdGVNYW55KFtcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZUFzc2VtYmxhZ2UobmV3IFBvc2l0aW9uKDEyOCwgMTI4KSwgZm9udCksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2NvcmVBc3NlbWJsYWdlKG5ldyBQb3NpdGlvbigxMDI0IC0gMTI4LCAxMjgpLCBmb250KVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICBuZXcgQ29yZVN5c3RlbUNvbGxlY3Rpb24oKVxyXG4gICAgICAgICAgICAucmVnaXN0ZXJNYW55KFtcclxuICAgICAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtKGxvYWRlciwgZmFjdG9yeSlcclxuICAgICAgICAgICAgXSlcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgQXNzZW1ibGFnZSBmcm9tICcuLi9jb3JlL0Fzc2VtYmxhZ2UnO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gJy4uL2NvcmUvRW50aXR5JztcclxuaW1wb3J0IEVudGl0eVBvb2wgZnJvbSAnLi4vY29yZS9FbnRpdHlQb29sJztcclxuaW1wb3J0IFNjb3JlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmUnO1xyXG5pbXBvcnQgQml0bWFwVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL0JpdG1hcFRleHQnO1xyXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi4vYXNzZXRzL1Bvc2l0aW9uJztcclxuaW1wb3J0IEJpdG1hcEZvbnQgZnJvbSAnLi4vYXNzZXRzL0JpdG1hcEZvbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgaW1wbGVtZW50cyBBc3NlbWJsYWdlIHtcclxuICAgIHByaXZhdGUgcG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBmb250OiBCaXRtYXBGb250O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShwb29sOiBFbnRpdHlQb29sKTogRW50aXR5IHtcclxuICAgICAgICByZXR1cm4gcG9vbC5jcmVhdGUoKVxyXG4gICAgICAgICAgICAuYXR0YWNoTWFueShbXHJcbiAgICAgICAgICAgICAgICBuZXcgU2NvcmVDb21wb25lbnQoKSxcclxuICAgICAgICAgICAgICAgIG5ldyBCaXRtYXBUZXh0KFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb250LFxyXG4gICAgICAgICAgICAgICAgICAgIDMyXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0bWFwRm9udCB7XHJcbiAgICBwcml2YXRlIGtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpbWFnZVBhdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgYXRsYXNQYXRoOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIGltYWdlUGF0aDogc3RyaW5nLCBhdGxhc1BhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gaW1hZ2VQYXRoO1xyXG4gICAgICAgIHRoaXMuYXRsYXNQYXRoID0gYXRsYXNQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGF0bGFzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXNQYXRoO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJpdG1hcEZvbnQgZnJvbSAnLi9CaXRtYXBGb250JztcclxuaW1wb3J0IEJpdG1hcFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9CaXRtYXBUZXh0JztcclxuaW1wb3J0IEVudGl0eVBvb2wgZnJvbSAnLi4vY29yZS9FbnRpdHlQb29sJztcclxuaW1wb3J0IEJpdG1hcFRleHRTZWFyY2ggZnJvbSAnLi9CaXRtYXBUZXh0U2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcEZvbnRTZWFyY2gge1xyXG4gICAgZmluZChlbnRpdGllczogRW50aXR5UG9vbCk6IEJpdG1hcEZvbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KC8vIHVuaXF1ZSBzZXRcclxuICAgICAgICAgICAgbmV3IEJpdG1hcFRleHRTZWFyY2goKS5maW5kKGVudGl0aWVzKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0ZXh0ID0+IHRleHQuZm9udCgpKVxyXG4gICAgICAgICldO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJpdG1hcFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9CaXRtYXBUZXh0JztcclxuaW1wb3J0IEVudGl0eVBvb2wgZnJvbSAnLi4vY29yZS9FbnRpdHlQb29sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcFRleHRTZWFyY2gge1xyXG4gICAgZmluZChlbnRpdGllczogRW50aXR5UG9vbCk6IEJpdG1hcFRleHRbXSB7XHJcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzLnF1ZXJ5KFtCaXRtYXBUZXh0LklEXSlcclxuICAgICAgICAgICAgLm1hcChlbnRpdHkgPT4gZW50aXR5LmdldChCaXRtYXBUZXh0LklEKSBhcyBCaXRtYXBUZXh0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBCaXRtYXBGb250IGZyb20gJy4vQml0bWFwRm9udCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJCaXRtYXBGb250TG9hZCB7XHJcbiAgICBwcml2YXRlIGxvYWRlcjogUGhhc2VyLkxvYWRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKGZvbnRzOiBCaXRtYXBGb250W10pOiBQaGFzZXJCaXRtYXBGb250TG9hZCB7XHJcbiAgICAgICAgZm9udHMuZm9yRWFjaChmb250ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuYml0bWFwRm9udChcclxuICAgICAgICAgICAgICAgIGZvbnQuaWQoKSxcclxuICAgICAgICAgICAgICAgIGZvbnQuaW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIGZvbnQuYXRsYXMoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCBCaXRtYXBUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvQml0bWFwVGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaXRtYXBUZXh0RmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSh0ZXh0OiBCaXRtYXBUZXh0KTogQml0bWFwVGV4dEZhY3Rvcnkge1xyXG4gICAgICAgIHRoaXMuZmFjdG9yeS5iaXRtYXBUZXh0KFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHRleHQucG9zaXRpb24oKS54KCkpLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHRleHQucG9zaXRpb24oKS55KCkpLFxyXG4gICAgICAgICAgICB0ZXh0LmZvbnQoKS5pZCgpLFxyXG4gICAgICAgICAgICB0ZXh0LnZhbHVlKCksXHJcbiAgICAgICAgICAgIHRleHQuc2l6ZSgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XHJcbiAgICBwcml2YXRlIGNvb3JkaW5hdGVzOiBudW1iZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc1sxXTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29yZS9Db21wb25lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50SWQgZnJvbSAnLi4vY29yZS9Db21wb25lbnRJZCc7XHJcbmltcG9ydCBDb3JlQ29tcG9uZW50SWQgZnJvbSAnLi4vY29yZS9Db3JlQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQml0bWFwRm9udCBmcm9tICcuLi9hc3NldHMvQml0bWFwRm9udCc7XHJcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuLi9hc3NldHMvUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0bWFwVGV4dCBpbXBsZW1lbnRzIENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IENvcmVDb21wb25lbnRJZCgnYml0bWFwVGV4dCcpO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dFBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgdGV4dEZvbnQ6IEJpdG1hcEZvbnQ7XHJcbiAgICBwcml2YXRlIHRleHRTaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQsIHNpemU6IG51bWJlciwgdGV4dDogc3RyaW5nID0gJycpIHtcclxuICAgICAgICB0aGlzLnRleHRQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBmb250O1xyXG4gICAgICAgIHRoaXMudGV4dFNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogQ29tcG9uZW50SWQge1xyXG4gICAgICAgIHJldHVybiBCaXRtYXBUZXh0LklEO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZm9udCgpOiBCaXRtYXBGb250IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0Rm9udDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh2YWx1ZTogc3RyaW5nKTogQml0bWFwVGV4dCB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29yZS9Db21wb25lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50SWQgZnJvbSAnLi4vY29yZS9Db21wb25lbnRJZCc7XHJcbmltcG9ydCBDb3JlQ29tcG9uZW50SWQgZnJvbSAnLi4vY29yZS9Db3JlQ29tcG9uZW50SWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBDb3JlQ29tcG9uZW50SWQoJ3Njb3JlJyk7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gU2NvcmUuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBEdXBsaWNhdGVFcnJvciBmcm9tICcuL0R1cGxpY2F0ZUVycm9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgRHVwbGljYXRlRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IE5vdEZvdW5kRXJyb3IgZnJvbSAnLi9Ob3RGb3VuZEVycm9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBOb3RGb3VuZEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb21wb25lbnRJZCBmcm9tICcuL0NvbXBvbmVudElkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmVDb21wb25lbnRJZCBpbXBsZW1lbnRzIENvbXBvbmVudElkIHtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcclxuaW1wb3J0IENvbXBvbmVudElkIGZyb20gJy4vQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQ29tcG9uZW50Tm90Rm91bmRFcnJvciBmcm9tICcuL0NvbXBvbmVudE5vdEZvdW5kRXJyb3InO1xyXG5pbXBvcnQgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgZnJvbSAnLi9Db21wb25lbnREdXBsaWNhdGVFcnJvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlRW50aXR5IGltcGxlbWVudHMgRW50aXR5IHtcclxuICAgIHByaXZhdGUgZW50aXR5SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgY29tcG9uZW50czogTWFwPENvbXBvbmVudElkLCBDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuZW50aXR5SWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eUlkO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaChjb21wb25lbnQ6IENvbXBvbmVudCk6IEVudGl0eSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50cy5oYXMoY29tcG9uZW50LmlkKCkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21wb25lbnREdXBsaWNhdGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hNYW55KGNvbXBvbmVudHM6IENvbXBvbmVudFtdKTogRW50aXR5IHtcclxuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2goY29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKGNvbXBvbmVudHM6IENvbXBvbmVudElkW10pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5ldmVyeShpZCA9PiB0aGlzLmNvbXBvbmVudHMuaGFzKGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGNvbXBvbmVudDogQ29tcG9uZW50SWQpOiBDb21wb25lbnQge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbXBvbmVudE5vdEZvdW5kRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuZ2V0KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IEVudGl0eVBvb2wgZnJvbSAnLi9FbnRpdHlQb29sJztcclxuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XHJcbmltcG9ydCBDb21wb25lbnRJZCBmcm9tICcuL0NvbXBvbmVudElkJztcclxuaW1wb3J0IENvcmVFbnRpdHkgZnJvbSAnLi9Db3JlRW50aXR5JztcclxuaW1wb3J0IEFzc2VtYmxhZ2UgZnJvbSAnLi9Bc3NlbWJsYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmVFbnRpdHlQb29sIGltcGxlbWVudHMgRW50aXR5UG9vbCB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZXdJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0aWVzLmxlbmd0aCArICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiBFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBDb3JlRW50aXR5KHRoaXMuZ2V0TmV3SWQoKSk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWFueShhc3NlbWJsYWdlczogQXNzZW1ibGFnZVtdKTogRW50aXR5UG9vbCB7XHJcbiAgICAgICAgYXNzZW1ibGFnZXMuZm9yRWFjaChhc3NlbWJsYWdlID0+IHtcclxuICAgICAgICAgICAgYXNzZW1ibGFnZS5jcmVhdGUodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5KGNvbXBvbmVudHM6IENvbXBvbmVudElkW10pOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZmlsdGVyKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHkuaGFzKGNvbXBvbmVudHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBTeXN0ZW1Db2xsZWN0aW9uIGZyb20gJy4vU3lzdGVtQ29sbGVjdGlvbic7XHJcbmltcG9ydCBTeXN0ZW0gZnJvbSAnLi9TeXN0ZW0nO1xyXG5pbXBvcnQgRW50aXR5UG9vbCBmcm9tICcuL0VudGl0eVBvb2wnO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmVTeXN0ZW1Db2xsZWN0aW9uIGltcGxlbWVudHMgU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICBwcml2YXRlIHN5c3RlbXM6IFN5c3RlbVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHN5c3RlbTogU3lzdGVtKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zLnB1c2goc3lzdGVtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJNYW55KHN5c3RlbXM6IFN5c3RlbVtdKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgc3lzdGVtcy5mb3JFYWNoKHN5c3RlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoc3lzdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZShlbnRpdGllczogRW50aXR5UG9vbCk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5mb3JFYWNoKHN5c3RlbSA9PiB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5pbml0aWFsaXplKGVudGl0aWVzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoZW50aXRpZXM6IEVudGl0eVBvb2wpOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMuZm9yRWFjaChzeXN0ZW0gPT4ge1xyXG4gICAgICAgICAgICBzeXN0ZW0uc3RhcnQoZW50aXRpZXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzKGVudGl0aWVzOiBFbnRpdHlQb29sKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zLmZvckVhY2goc3lzdGVtID0+IHtcclxuICAgICAgICAgICAgc3lzdGVtLnByb2Nlc3MoZW50aXRpZXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goZW50aXRpZXM6IEVudGl0eVBvb2wpOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMuZm9yRWFjaChzeXN0ZW0gPT4ge1xyXG4gICAgICAgICAgICBzeXN0ZW0uZmluaXNoKGVudGl0aWVzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV29ybGQgZnJvbSAnLi9Xb3JsZCc7XHJcbmltcG9ydCBFbnRpdHlQb29sIGZyb20gJy4vRW50aXR5UG9vbCc7XHJcbmltcG9ydCBTeXN0ZW1Db2xsZWN0aW9uIGZyb20gJy4vU3lzdGVtQ29sbGVjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlV29ybGQgaW1wbGVtZW50cyBXb3JsZCB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IHN5c3RlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpOiBXb3JsZCB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zLmluaXRpYWxpemUodGhpcy5lbnRpdGllcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKTogV29ybGQge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5zdGFydCh0aGlzLmVudGl0aWVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzKCk6IFdvcmxkIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMucHJvY2Vzcyh0aGlzLmVudGl0aWVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goKTogV29ybGQge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5maW5pc2godGhpcy5lbnRpdGllcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBEdXBsaWNhdGVFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIE5vdEZvdW5kRXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFN5c3RlbSBmcm9tICcuLi9jb3JlL1N5c3RlbSc7XHJcbmltcG9ydCBCaXRtYXBUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvQml0bWFwVGV4dCc7XHJcbmltcG9ydCBDb21wb25lbnRJZCBmcm9tICcuLi9jb3JlL0NvbXBvbmVudElkJztcclxuaW1wb3J0IEVudGl0eVBvb2wgZnJvbSAnLi4vY29yZS9FbnRpdHlQb29sJztcclxuaW1wb3J0IFBoYXNlckJpdG1hcEZvbnRMb2FkIGZyb20gJy4uL2Fzc2V0cy9QaGFzZXJCaXRtYXBGb250TG9hZCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSBmcm9tICcuLi9hc3NldHMvUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5pbXBvcnQgQml0bWFwRm9udFNlYXJjaCBmcm9tICcuLi9hc3NldHMvQml0bWFwRm9udFNlYXJjaCc7XHJcbmltcG9ydCBCaXRtYXBUZXh0U2VhcmNoIGZyb20gJy4uL2Fzc2V0cy9CaXRtYXBUZXh0U2VhcmNoJztcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhbmQgY3JlYXRlcyBiaXRtYXAgdGV4dCB1c2luZyBQaGFzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0IGltcGxlbWVudHMgU3lzdGVtIHtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBQaGFzZXIuTG9hZGVyLCBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMoKTogQ29tcG9uZW50SWRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtCaXRtYXBUZXh0LklEXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKGVudGl0aWVzOiBFbnRpdHlQb29sKTogU3lzdGVtIHtcclxuICAgICAgICBuZXcgUGhhc2VyQml0bWFwRm9udExvYWQodGhpcy5sb2FkZXIpLmxvYWQoXHJcbiAgICAgICAgICAgIG5ldyBCaXRtYXBGb250U2VhcmNoKCkuZmluZChlbnRpdGllcylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydChlbnRpdGllczogRW50aXR5UG9vbCk6IFN5c3RlbSB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IG5ldyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSh0aGlzLmZhY3RvcnkpO1xyXG4gICAgICAgIG5ldyBCaXRtYXBUZXh0U2VhcmNoKCkuZmluZChlbnRpdGllcylcclxuICAgICAgICAgICAgLmZvckVhY2godGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBmYWN0b3J5LmNyZWF0ZSh0ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3MoZW50aXRpZXM6IEVudGl0eVBvb2wpOiBTeXN0ZW0ge1xyXG4gICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goZW50aXRpZXM6IEVudGl0eVBvb2wpOiBTeXN0ZW0ge1xyXG4gICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCBSYW5kb21pemVyIGZyb20gJy4uL1JhbmRvbWl6ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfc3ByaXRlOiBQaGFzZXIuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBfaXNMYXVuY2hlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3ZlbG9jaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9yYW5kb21pemVyOiBSYW5kb21pemVyO1xyXG4gICAgcHJpdmF0ZSBfZ29MZWZ0OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHN0YXRlOiBQaGFzZXIuU3RhdGUsXHJcbiAgICAgICAgdmVsb2NpdHk6IG51bWJlciA9IDQwMCxcclxuICAgICAgICBnb0xlZnQ6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgICAgIHJhbmRvbWl6ZXI6IFJhbmRvbWl6ZXIgPSBuZXcgUmFuZG9taXplcigpXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5faXNMYXVuY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3JhbmRvbWl6ZXIgPSByYW5kb21pemVyO1xyXG4gICAgICAgIHRoaXMuX2dvTGVmdCA9IGdvTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLnNwcml0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSwgJ2JhbGwnKTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZS5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzLl9zcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuYm91bmNlLnNldFRvKDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldChnb0xlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueCA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWDtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS52ZWxvY2l0eS5zZXRUbygwLCAwKTtcclxuICAgICAgICB0aGlzLl9pc0xhdW5jaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZ29MZWZ0ID0gZ29MZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXVuY2goKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHhNdWx0aXBsaWVyID0gdGhpcy5fZ29MZWZ0ID8gLTEgOiAxO1xyXG4gICAgICAgIGxldCB5TXVsdGlwbGllciA9IHRoaXMuX3JhbmRvbWl6ZXIuYm9vbGVhbigpID8gLTEgOiAxO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnggPSB4TXVsdGlwbGllciAqIHRoaXMuX3ZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnkgPSB5TXVsdGlwbGllciAqIHRoaXMuX3ZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMuX2lzTGF1bmNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTGF1bmNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCh0aGlzLl9nb0xlZnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXVuY2goKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3ByaXRlKCk6IFBoYXNlci5TcHJpdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuL1BhZGRsZSc7XHJcbmltcG9ydCBCYWxsIGZyb20gJy4vQmFsbCc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIGltcGxlbWVudHMgUGxheWVyIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9wYWRkbGU6IFBhZGRsZTtcclxuICAgIHByaXZhdGUgX2JhbGw6IEJhbGw7XHJcbiAgICBwcml2YXRlIF9tYXhWZWxvY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2NvcmU6IFNjb3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHN0YXRlOiBQaGFzZXIuU3RhdGUsXHJcbiAgICAgICAgcGFkZGxlOiBQYWRkbGUsXHJcbiAgICAgICAgYmFsbDogQmFsbCxcclxuICAgICAgICBtYXhWZWxvY2l0eTogbnVtYmVyID0gMjUwLFxyXG4gICAgICAgIHNjb3JlOiBTY29yZSA9IG5ldyBTY29yZShzdGF0ZSlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlID0gcGFkZGxlO1xyXG4gICAgICAgIHRoaXMuX2JhbGwgPSBiYWxsO1xyXG4gICAgICAgIHRoaXMuX21heFZlbG9jaXR5ID0gbWF4VmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSBzY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5jcmVhdGUodGhpcy5fc3RhdGUuZ2FtZS53b3JsZC53aWR0aCAtIDggLCB0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclkpO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlLmNyZWF0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLndpZHRoIC0gMTI4LCAxMjgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnNldFRvKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkudmVsb2NpdHkueSk7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5zcHJpdGUuYm9keS5tYXhWZWxvY2l0eS55ID0gdGhpcy5fbWF4VmVsb2NpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhZGRsZSgpOiBQYWRkbGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkbGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBzY29yZSgpOiBTY29yZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBQYWRkbGUgZnJvbSAnLi9QYWRkbGUnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdW1hbiBpbXBsZW1lbnRzIFBsYXllciB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfcGFkZGxlOiBQYWRkbGU7XHJcbiAgICBwcml2YXRlIF9zY29yZTogU2NvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSwgcGFkZGxlOiBQYWRkbGUsIHNjb3JlOiBTY29yZSA9IG5ldyBTY29yZShzdGF0ZSkpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZSA9IHBhZGRsZTtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLmNyZWF0ZSgwLCB0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclkpO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlLmNyZWF0ZSgxMjgsIDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUubW92ZSh0aGlzLl9zdGF0ZS5nYW1lLmlucHV0LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYWRkbGUoKTogUGFkZGxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY29yZSgpOiBTY29yZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVzaWMge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX3NvdW5kOiBQaGFzZXIuU291bmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zb3VuZCA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLmF1ZGlvKCdtdXNpYycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUocGxheTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zb3VuZC5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc291bmQucGF1c2UoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZGRsZSB7XHJcbiAgICBwcml2YXRlIF9zcHJpdGU6IFBoYXNlci5TcHJpdGU7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfbWluWTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbWF4WTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQaGFzZXIuU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUgPSB0aGlzLl9zdGF0ZS5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgJ3BhZGRsZScpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5pbW1vdmFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5zY2FsZS5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5fbWluWSA9IDAuNSAqIHRoaXMuX3Nwcml0ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fbWF4WSA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuaGVpZ2h0IC0gMC41ICogdGhpcy5fc3ByaXRlLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZSh5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGUueSA8IHRoaXMuX21pblkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnkgPSB0aGlzLl9taW5ZO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3ByaXRlLnkgPiB0aGlzLl9tYXhZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS55ID0gdGhpcy5fbWF4WTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzcHJpdGUoKTogUGhhc2VyLlNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9iaXRtYXA6IFBoYXNlci5CaXRtYXBUZXh0O1xyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2JpdG1hcCA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLmJpdG1hcFRleHQoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSwgJ1ByZXNzIFN0YXJ0IDJQJywgJzAnLCAzMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlICs9IDE7XHJcbiAgICAgICAgdGhpcy5fYml0bWFwLnRleHQgPSAnJyArIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCBQb25nR2FtZSBmcm9tICcuL1BvbmdHYW1lJztcclxuXHJcbm5ldyBQb25nR2FtZSgpLnN0YXJ0KCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8gc2NhbGUgdG8gZml0IHNjcmVlblxyXG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLmZ1bGxTY3JlZW5TY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZm9yY2VMYW5kc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS53aW5kb3dDb25zdHJhaW50cy5ib3R0b20gPSAndmlzdWFsJzsgLy8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgZ28gb3ZlciBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgLy8ga2VlcCBwaXhlbHMgc2hhcnBcclxuICAgICAgICB0aGlzLmdhbWUuYW50aWFsaWFzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLnNtb290aGVkID0gZmFsc2U7XHJcbiAgICAgICAgUGhhc2VyLkNhbnZhcy5zZXRJbWFnZVJlbmRlcmluZ0NyaXNwKHRoaXMuZ2FtZS5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkZXInKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZW50aXRpZXMvUGxheWVyJztcclxuaW1wb3J0IEh1bWFuIGZyb20gJy4uL2VudGl0aWVzL0h1bWFuJztcclxuaW1wb3J0IENvbXB1dGVyIGZyb20gJy4uL2VudGl0aWVzL0NvbXB1dGVyJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi4vZW50aXRpZXMvQmFsbCc7XHJcbmltcG9ydCBQYWRkbGUgZnJvbSAnLi4vZW50aXRpZXMvUGFkZGxlJztcclxuaW1wb3J0IE11c2ljIGZyb20gJy4uL2VudGl0aWVzL011c2ljJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBQbGF5ZXJbXTtcclxuICAgIHByaXZhdGUgX2JhbGw6IEJhbGw7XHJcbiAgICBwcml2YXRlIF9tdXNpYzogTXVzaWM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9iYWxsID0gbmV3IEJhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IFtcclxuICAgICAgICAgICAgbmV3IEh1bWFuKHRoaXMsIG5ldyBQYWRkbGUodGhpcykpLFxyXG4gICAgICAgICAgICBuZXcgQ29tcHV0ZXIodGhpcywgbmV3IFBhZGRsZSh0aGlzKSwgdGhpcy5fYmFsbClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuX211c2ljID0gbmV3IE11c2ljKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbXVzaWMuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fYmFsbC5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci5jcmVhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9tdXNpYy50b2dnbGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWxsLnRvZ2dsZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShcclxuICAgICAgICAgICAgICAgIHBsYXllci5wYWRkbGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFsbC5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdhbWUuc291bmQucGxheSgnaGl0JylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC51cCB8fCB0aGlzLl9iYWxsLnNwcml0ZS5ib2R5LmJsb2NrZWQuZG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc291bmQucGxheSgnd2FsbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUodGhpcy5fcGxheWVyc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlKHRoaXMuX3BsYXllcnNbMF0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NvcmUocGxheWVyOiBQbGF5ZXIsIGdvTGVmdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHBsYXllci5zY29yZS5pbmNyZWFzZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5wbGF5KCdzY29yZScpO1xyXG4gICAgICAgIHRoaXMuX2JhbGwucmVzZXQoZ29MZWZ0KTtcclxuICAgICAgICB0aGlzLl9tdXNpYy5wYXVzZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgncGFkZGxlJywgJ2ltYWdlcy9wYWRkbGUucG5nJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhbGwnLCAnaW1hZ2VzL2JhbGwucG5nJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udCgnUHJlc3MgU3RhcnQgMlAnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlBfMC5wbmcnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlAuZm50Jyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2hpdCcsIFsnYXVkaW8vaGl0LndhdiddKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbygnc2NvcmUnLCBbJ2F1ZGlvL3Njb3JlLndhdiddKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbygnd2FsbCcsIFsnYXVkaW8vd2FsbC53YXYnXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ211c2ljJywgWydhdWRpby9hdC1uaWdodC1wc2cubXAzJywgJ2F1ZGlvL2F0LW5pZ2h0LXBzZy5vZ2cnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICAgIH1cclxufSJdfQ==
