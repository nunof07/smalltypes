(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootState_1 = require("./states/BootState");
var PreloaderState_1 = require("./states/PreloaderState");
var GameState_1 = require("./states/GameState");
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
        this._game.state.add('boot', new BootState_1.default());
        this._game.state.add('preloader', new PreloaderState_1.default());
        this._game.state.add('game', new GameState_1.default());
        this._game.state.start('boot');
    };
    return PongGame;
}());
exports.default = PongGame;
},{"./states/BootState":19,"./states/GameState":20,"./states/PreloaderState":21}],2:[function(require,module,exports){
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
var CoreComponentId_1 = require("../core/CoreComponentId");
var Collide = /** @class */ (function () {
    function Collide() {
    }
    Collide.prototype.id = function () {
        return new CoreComponentId_1.default('collide');
    };
    return Collide;
}());
exports.default = Collide;
},{"../core/CoreComponentId":7}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId_1 = require("../core/CoreComponentId");
var Display = /** @class */ (function () {
    function Display() {
    }
    Display.prototype.id = function () {
        return new CoreComponentId_1.default('display');
    };
    return Display;
}());
exports.default = Display;
},{"../core/CoreComponentId":7}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId_1 = require("../core/CoreComponentId");
var Move = /** @class */ (function () {
    function Move() {
    }
    Move.prototype.id = function () {
        return new CoreComponentId_1.default('move');
    };
    return Move;
}());
exports.default = Move;
},{"../core/CoreComponentId":7}],6:[function(require,module,exports){
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
},{"./NotFoundError":10}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentNotFoundError_1 = require("./ComponentNotFoundError");
var CoreEntity = /** @class */ (function () {
    function CoreEntity(id) {
        this.components = {};
        this.entityId = id;
    }
    CoreEntity.prototype.id = function () {
        return this.entityId;
    };
    CoreEntity.prototype.attach = function (component) {
        this.components[component.id().get()] = component;
    };
    CoreEntity.prototype.has = function (components) {
        var _this = this;
        return components.every(function (id) {
            return id.get() in _this.components;
        });
    };
    CoreEntity.prototype.get = function (component) {
        if (typeof this.components[component.get()] === 'undefined') {
            throw new ComponentNotFoundError_1.default();
        }
        return this.components[component.get()];
    };
    return CoreEntity;
}());
exports.default = CoreEntity;
},{"./ComponentNotFoundError":6}],9:[function(require,module,exports){
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
    CoreEntityPool.prototype.query = function (components) {
        return this.entities.filter(function (entity) {
            return entity.has(components);
        });
    };
    return CoreEntityPool;
}());
exports.default = CoreEntityPool;
},{"./CoreEntity":8}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = require("./components/Move");
var Collide_1 = require("./components/Collide");
var Display_1 = require("./components/Display");
var CoreComponentId_1 = require("./core/CoreComponentId");
var CoreEntityPool_1 = require("./core/CoreEntityPool");
function default_1() {
    var pool = new CoreEntityPool_1.default();
    var first = pool.create();
    first.attach(new Move_1.default());
    first.attach(new Display_1.default());
    console.log('first has Move, Display', first.has([new CoreComponentId_1.default('move'), new CoreComponentId_1.default('display')]));
    console.log('first has Collide', first.has([new CoreComponentId_1.default('collide')]));
    var second = pool.create();
    second.attach(new Collide_1.default());
    console.log('second has Move, Display', second.has([new CoreComponentId_1.default('move'), new CoreComponentId_1.default('display')]));
    console.log('second has Collide', second.has([new CoreComponentId_1.default('collide')]));
    console.log('all entities with Move, Display', pool.query([new CoreComponentId_1.default('move'), new CoreComponentId_1.default('display')]));
    console.log('all entities with Collide', pool.query([new CoreComponentId_1.default('collide')]));
    console.log('all entities with Move', pool.query([new CoreComponentId_1.default('move')]));
}
exports.default = default_1;
},{"./components/Collide":3,"./components/Display":4,"./components/Move":5,"./core/CoreComponentId":7,"./core/CoreEntityPool":9}],12:[function(require,module,exports){
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
},{"../Randomizer":2}],13:[function(require,module,exports){
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
},{"./Score":17}],14:[function(require,module,exports){
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
},{"./Score":17}],15:[function(require,module,exports){
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
},{}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
"use strict";
/// <reference path="../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./ecs/test");
test_1.default();
var PongGame_1 = require("./PongGame");
new PongGame_1.default().start();
},{"./PongGame":1,"./ecs/test":11}],19:[function(require,module,exports){
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
},{"../entities/Ball":12,"../entities/Computer":13,"../entities/Human":14,"../entities/Music":15,"../entities/Paddle":16}],21:[function(require,module,exports){
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
},{}]},{},[18])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvUG9uZ0dhbWUudHMiLCJzcmMvUmFuZG9taXplci50cyIsInNyYy9lY3MvY29tcG9uZW50cy9Db2xsaWRlLnRzIiwic3JjL2Vjcy9jb21wb25lbnRzL0Rpc3BsYXkudHMiLCJzcmMvZWNzL2NvbXBvbmVudHMvTW92ZS50cyIsInNyYy9lY3MvY29yZS9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9jb3JlL0NvcmVDb21wb25lbnRJZC50cyIsInNyYy9lY3MvY29yZS9Db3JlRW50aXR5LnRzIiwic3JjL2Vjcy9jb3JlL0NvcmVFbnRpdHlQb29sLnRzIiwic3JjL2Vjcy9jb3JlL05vdEZvdW5kRXJyb3IudHMiLCJzcmMvZWNzL3Rlc3QudHMiLCJzcmMvZW50aXRpZXMvQmFsbC50cyIsInNyYy9lbnRpdGllcy9Db21wdXRlci50cyIsInNyYy9lbnRpdGllcy9IdW1hbi50cyIsInNyYy9lbnRpdGllcy9NdXNpYy50cyIsInNyYy9lbnRpdGllcy9QYWRkbGUudHMiLCJzcmMvZW50aXRpZXMvU2NvcmUudHMiLCJzcmMvbWFpbi50cyIsInNyYy9zdGF0ZXMvQm9vdFN0YXRlLnRzIiwic3JjL3N0YXRlcy9HYW1lU3RhdGUudHMiLCJzcmMvc3RhdGVzL1ByZWxvYWRlclN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxnREFBMkM7QUFDM0MsMERBQXFEO0FBQ3JELGdEQUEyQztBQUUzQztJQUdDO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDNUIsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNyQixNQUFNLEVBQUUsZ0JBQWdCO1NBQ3hCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSx3QkFBSyxHQUFaO1FBQ0MsSUFB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MEJBQTBCLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxDQWxCMkMsTUFBTSxDQUFDLEtBQUssR0FrQnZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBCb290U3RhdGUgZnJvbSAnLi9zdGF0ZXMvQm9vdFN0YXRlJztcclxuaW1wb3J0IFByZWxvYWRlclN0YXRlIGZyb20gJy4vc3RhdGVzL1ByZWxvYWRlclN0YXRlJztcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tICcuL3N0YXRlcy9HYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9uZ0dhbWUge1xyXG5cdHByaXZhdGUgX2dhbWU6IFBoYXNlci5HYW1lO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2dhbWUgPSBuZXcgUGhhc2VyLkdhbWUoe1xyXG5cdFx0XHR3aWR0aDogMTAyNCxcclxuXHRcdFx0aGVpZ2h0OiA1NzYsXHJcblx0XHRcdHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcclxuXHRcdFx0cGFyZW50OiAnZ2FtZS1jb250YWluZXInXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGFydCgpIHtcclxuXHRcdHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3RTdGF0ZSgpKTtcclxuXHRcdHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyU3RhdGUoKSk7XHJcblx0XHR0aGlzLl9nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lU3RhdGUoKSk7XHJcblx0XHR0aGlzLl9nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9taXplciB7XHJcbiAgICBwdWJsaWMgYm9vbGVhbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+PSAwLjU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50JztcclxuaW1wb3J0IENvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQ29yZUNvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29yZUNvbXBvbmVudElkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZGUgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb3JlQ29tcG9uZW50SWQoJ2NvbGxpZGUnKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50JztcclxuaW1wb3J0IENvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQ29yZUNvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29yZUNvbXBvbmVudElkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb3JlQ29tcG9uZW50SWQoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50JztcclxuaW1wb3J0IENvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQ29yZUNvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29yZUNvbXBvbmVudElkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmUgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb3JlQ29tcG9uZW50SWQoJ21vdmUnKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgTm90Rm91bmRFcnJvciBmcm9tICcuL05vdEZvdW5kRXJyb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50Tm90Rm91bmRFcnJvciBleHRlbmRzIE5vdEZvdW5kRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudElkIGZyb20gJy4vQ29tcG9uZW50SWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZUNvbXBvbmVudElkIGltcGxlbWVudHMgQ29tcG9uZW50SWQge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50SWQgZnJvbSAnLi9Db21wb25lbnRJZCc7XHJcbmltcG9ydCBDb21wb25lbnROb3RGb3VuZEVycm9yIGZyb20gJy4vQ29tcG9uZW50Tm90Rm91bmRFcnJvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlRW50aXR5IGltcGxlbWVudHMgRW50aXR5IHtcclxuICAgIHByaXZhdGUgZW50aXR5SWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhc2hlZCBjb2xsZWN0aW9uIG9mIGNvbXBvbmVudHMuXHJcbiAgICAgKiBLZXkgaXMgY29tcG9uZW50IGlkLlxyXG4gICAgICogVmFsdWUgaXMgY29tcG9uZW50IG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRzOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmVudGl0eUlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlJZDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50LmlkKCkuZ2V0KCldID0gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhjb21wb25lbnRzOiBDb21wb25lbnRJZFtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuZXZlcnkoaWQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaWQuZ2V0KCkgaW4gdGhpcy5jb21wb25lbnRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChjb21wb25lbnQ6IENvbXBvbmVudElkKTogQ29tcG9uZW50IHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnQuZ2V0KCldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29tcG9uZW50Tm90Rm91bmRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnQuZ2V0KCldO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBFbnRpdHlQb29sIGZyb20gJy4vRW50aXR5UG9vbCc7XHJcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xyXG5pbXBvcnQgQ29tcG9uZW50SWQgZnJvbSAnLi9Db21wb25lbnRJZCc7XHJcbmltcG9ydCBDb3JlRW50aXR5IGZyb20gJy4vQ29yZUVudGl0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlRW50aXR5UG9vbCBpbXBsZW1lbnRzIEVudGl0eVBvb2wge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmV3SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5sZW5ndGggKyAnJztcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogRW50aXR5IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgQ29yZUVudGl0eSh0aGlzLmdldE5ld0lkKCkpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChlbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5KGNvbXBvbmVudHM6IENvbXBvbmVudElkW10pOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZmlsdGVyKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHkuaGFzKGNvbXBvbmVudHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgTm90Rm91bmRFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTW92ZSBmcm9tICcuL2NvbXBvbmVudHMvTW92ZSc7XHJcbmltcG9ydCBDb2xsaWRlIGZyb20gJy4vY29tcG9uZW50cy9Db2xsaWRlJztcclxuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9jb21wb25lbnRzL0Rpc3BsYXknO1xyXG5pbXBvcnQgQ29yZUNvbXBvbmVudElkIGZyb20gJy4vY29yZS9Db3JlQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQ29yZUVudGl0eVBvb2wgZnJvbSAnLi9jb3JlL0NvcmVFbnRpdHlQb29sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHBvb2wgPSBuZXcgQ29yZUVudGl0eVBvb2woKTtcclxuICAgIGNvbnN0IGZpcnN0ID0gcG9vbC5jcmVhdGUoKTtcclxuICAgIGZpcnN0LmF0dGFjaChuZXcgTW92ZSgpKTtcclxuICAgIGZpcnN0LmF0dGFjaChuZXcgRGlzcGxheSgpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnZmlyc3QgaGFzIE1vdmUsIERpc3BsYXknLCBmaXJzdC5oYXMoW25ldyBDb3JlQ29tcG9uZW50SWQoJ21vdmUnKSwgbmV3IENvcmVDb21wb25lbnRJZCgnZGlzcGxheScpXSkpO1xyXG4gICAgY29uc29sZS5sb2coJ2ZpcnN0IGhhcyBDb2xsaWRlJywgZmlyc3QuaGFzKFtuZXcgQ29yZUNvbXBvbmVudElkKCdjb2xsaWRlJyldKSk7XHJcblxyXG4gICAgY29uc3Qgc2Vjb25kID0gcG9vbC5jcmVhdGUoKTtcclxuICAgIHNlY29uZC5hdHRhY2gobmV3IENvbGxpZGUoKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NlY29uZCBoYXMgTW92ZSwgRGlzcGxheScsIHNlY29uZC5oYXMoW25ldyBDb3JlQ29tcG9uZW50SWQoJ21vdmUnKSwgbmV3IENvcmVDb21wb25lbnRJZCgnZGlzcGxheScpXSkpO1xyXG4gICAgY29uc29sZS5sb2coJ3NlY29uZCBoYXMgQ29sbGlkZScsIHNlY29uZC5oYXMoW25ldyBDb3JlQ29tcG9uZW50SWQoJ2NvbGxpZGUnKV0pKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnYWxsIGVudGl0aWVzIHdpdGggTW92ZSwgRGlzcGxheScsIHBvb2wucXVlcnkoW25ldyBDb3JlQ29tcG9uZW50SWQoJ21vdmUnKSwgbmV3IENvcmVDb21wb25lbnRJZCgnZGlzcGxheScpXSkpO1xyXG4gICAgY29uc29sZS5sb2coJ2FsbCBlbnRpdGllcyB3aXRoIENvbGxpZGUnLCBwb29sLnF1ZXJ5KFtuZXcgQ29yZUNvbXBvbmVudElkKCdjb2xsaWRlJyldKSk7XHJcbiAgICBjb25zb2xlLmxvZygnYWxsIGVudGl0aWVzIHdpdGggTW92ZScsIHBvb2wucXVlcnkoW25ldyBDb3JlQ29tcG9uZW50SWQoJ21vdmUnKV0pKTtcclxufSIsImltcG9ydCBSYW5kb21pemVyIGZyb20gJy4uL1JhbmRvbWl6ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfc3ByaXRlOiBQaGFzZXIuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBfaXNMYXVuY2hlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3ZlbG9jaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9yYW5kb21pemVyOiBSYW5kb21pemVyO1xyXG4gICAgcHJpdmF0ZSBfZ29MZWZ0OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHN0YXRlOiBQaGFzZXIuU3RhdGUsXHJcbiAgICAgICAgdmVsb2NpdHk6IG51bWJlciA9IDQwMCxcclxuICAgICAgICBnb0xlZnQ6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgICAgIHJhbmRvbWl6ZXI6IFJhbmRvbWl6ZXIgPSBuZXcgUmFuZG9taXplcigpXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5faXNMYXVuY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3JhbmRvbWl6ZXIgPSByYW5kb21pemVyO1xyXG4gICAgICAgIHRoaXMuX2dvTGVmdCA9IGdvTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLnNwcml0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSwgJ2JhbGwnKTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZS5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzLl9zcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuYm91bmNlLnNldFRvKDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldChnb0xlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueCA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWDtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS52ZWxvY2l0eS5zZXRUbygwLCAwKTtcclxuICAgICAgICB0aGlzLl9pc0xhdW5jaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZ29MZWZ0ID0gZ29MZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXVuY2goKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHhNdWx0aXBsaWVyID0gdGhpcy5fZ29MZWZ0ID8gLTEgOiAxO1xyXG4gICAgICAgIGxldCB5TXVsdGlwbGllciA9IHRoaXMuX3JhbmRvbWl6ZXIuYm9vbGVhbigpID8gLTEgOiAxO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnggPSB4TXVsdGlwbGllciAqIHRoaXMuX3ZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnkgPSB5TXVsdGlwbGllciAqIHRoaXMuX3ZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMuX2lzTGF1bmNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTGF1bmNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCh0aGlzLl9nb0xlZnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXVuY2goKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3ByaXRlKCk6IFBoYXNlci5TcHJpdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuL1BhZGRsZSc7XHJcbmltcG9ydCBCYWxsIGZyb20gJy4vQmFsbCc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIGltcGxlbWVudHMgUGxheWVyIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9wYWRkbGU6IFBhZGRsZTtcclxuICAgIHByaXZhdGUgX2JhbGw6IEJhbGw7XHJcbiAgICBwcml2YXRlIF9tYXhWZWxvY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2NvcmU6IFNjb3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHN0YXRlOiBQaGFzZXIuU3RhdGUsXHJcbiAgICAgICAgcGFkZGxlOiBQYWRkbGUsXHJcbiAgICAgICAgYmFsbDogQmFsbCxcclxuICAgICAgICBtYXhWZWxvY2l0eTogbnVtYmVyID0gMjUwLFxyXG4gICAgICAgIHNjb3JlOiBTY29yZSA9IG5ldyBTY29yZShzdGF0ZSlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlID0gcGFkZGxlO1xyXG4gICAgICAgIHRoaXMuX2JhbGwgPSBiYWxsO1xyXG4gICAgICAgIHRoaXMuX21heFZlbG9jaXR5ID0gbWF4VmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSBzY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5jcmVhdGUodGhpcy5fc3RhdGUuZ2FtZS53b3JsZC53aWR0aCAtIDggLCB0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclkpO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlLmNyZWF0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLndpZHRoIC0gMTI4LCAxMjgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnNldFRvKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkudmVsb2NpdHkueSk7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5zcHJpdGUuYm9keS5tYXhWZWxvY2l0eS55ID0gdGhpcy5fbWF4VmVsb2NpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhZGRsZSgpOiBQYWRkbGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkbGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBzY29yZSgpOiBTY29yZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBQYWRkbGUgZnJvbSAnLi9QYWRkbGUnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdW1hbiBpbXBsZW1lbnRzIFBsYXllciB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfcGFkZGxlOiBQYWRkbGU7XHJcbiAgICBwcml2YXRlIF9zY29yZTogU2NvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSwgcGFkZGxlOiBQYWRkbGUsIHNjb3JlOiBTY29yZSA9IG5ldyBTY29yZShzdGF0ZSkpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZSA9IHBhZGRsZTtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLmNyZWF0ZSgwLCB0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclkpO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlLmNyZWF0ZSgxMjgsIDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUubW92ZSh0aGlzLl9zdGF0ZS5nYW1lLmlucHV0LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYWRkbGUoKTogUGFkZGxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY29yZSgpOiBTY29yZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVzaWMge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX3NvdW5kOiBQaGFzZXIuU291bmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zb3VuZCA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLmF1ZGlvKCdtdXNpYycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUocGxheTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zb3VuZC5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc291bmQucGF1c2UoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZGRsZSB7XHJcbiAgICBwcml2YXRlIF9zcHJpdGU6IFBoYXNlci5TcHJpdGU7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfbWluWTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbWF4WTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQaGFzZXIuU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUgPSB0aGlzLl9zdGF0ZS5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgJ3BhZGRsZScpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5pbW1vdmFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5zY2FsZS5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5fbWluWSA9IDAuNSAqIHRoaXMuX3Nwcml0ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fbWF4WSA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuaGVpZ2h0IC0gMC41ICogdGhpcy5fc3ByaXRlLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZSh5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGUueSA8IHRoaXMuX21pblkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnkgPSB0aGlzLl9taW5ZO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3ByaXRlLnkgPiB0aGlzLl9tYXhZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS55ID0gdGhpcy5fbWF4WTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzcHJpdGUoKTogUGhhc2VyLlNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9iaXRtYXA6IFBoYXNlci5CaXRtYXBUZXh0O1xyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2JpdG1hcCA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLmJpdG1hcFRleHQoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSwgJ1ByZXNzIFN0YXJ0IDJQJywgJzAnLCAzMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlICs9IDE7XHJcbiAgICAgICAgdGhpcy5fYml0bWFwLnRleHQgPSAnJyArIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB0ZXN0IGZyb20gJy4vZWNzL3Rlc3QnO1xyXG50ZXN0KCk7XHJcbmltcG9ydCBQb25nR2FtZSBmcm9tICcuL1BvbmdHYW1lJztcclxuXHJcbm5ldyBQb25nR2FtZSgpLnN0YXJ0KCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8gc2NhbGUgdG8gZml0IHNjcmVlblxyXG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLmZ1bGxTY3JlZW5TY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZm9yY2VMYW5kc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS53aW5kb3dDb25zdHJhaW50cy5ib3R0b20gPSAndmlzdWFsJzsgLy8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgZ28gb3ZlciBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgLy8ga2VlcCBwaXhlbHMgc2hhcnBcclxuICAgICAgICB0aGlzLmdhbWUuYW50aWFsaWFzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLnNtb290aGVkID0gZmFsc2U7XHJcbiAgICAgICAgUGhhc2VyLkNhbnZhcy5zZXRJbWFnZVJlbmRlcmluZ0NyaXNwKHRoaXMuZ2FtZS5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkZXInKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZW50aXRpZXMvUGxheWVyJztcclxuaW1wb3J0IEh1bWFuIGZyb20gJy4uL2VudGl0aWVzL0h1bWFuJztcclxuaW1wb3J0IENvbXB1dGVyIGZyb20gJy4uL2VudGl0aWVzL0NvbXB1dGVyJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi4vZW50aXRpZXMvQmFsbCc7XHJcbmltcG9ydCBQYWRkbGUgZnJvbSAnLi4vZW50aXRpZXMvUGFkZGxlJztcclxuaW1wb3J0IE11c2ljIGZyb20gJy4uL2VudGl0aWVzL011c2ljJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBQbGF5ZXJbXTtcclxuICAgIHByaXZhdGUgX2JhbGw6IEJhbGw7XHJcbiAgICBwcml2YXRlIF9tdXNpYzogTXVzaWM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9iYWxsID0gbmV3IEJhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IFtcclxuICAgICAgICAgICAgbmV3IEh1bWFuKHRoaXMsIG5ldyBQYWRkbGUodGhpcykpLFxyXG4gICAgICAgICAgICBuZXcgQ29tcHV0ZXIodGhpcywgbmV3IFBhZGRsZSh0aGlzKSwgdGhpcy5fYmFsbClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuX211c2ljID0gbmV3IE11c2ljKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbXVzaWMuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fYmFsbC5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci5jcmVhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9tdXNpYy50b2dnbGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWxsLnRvZ2dsZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShcclxuICAgICAgICAgICAgICAgIHBsYXllci5wYWRkbGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFsbC5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdhbWUuc291bmQucGxheSgnaGl0JylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC51cCB8fCB0aGlzLl9iYWxsLnNwcml0ZS5ib2R5LmJsb2NrZWQuZG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc291bmQucGxheSgnd2FsbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUodGhpcy5fcGxheWVyc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5fYmFsbC5zcHJpdGUuYm9keS5ibG9ja2VkLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUodGhpcy5fcGxheWVyc1swXSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY29yZShwbGF5ZXI6IFBsYXllciwgZ29MZWZ0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgcGxheWVyLnNjb3JlLmluY3JlYXNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnBsYXkoJ3Njb3JlJyk7XHJcbiAgICAgICAgdGhpcy5fYmFsbC5yZXNldChnb0xlZnQpO1xyXG4gICAgICAgIHRoaXMuX211c2ljLnBhdXNlKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXJTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdwYWRkbGUnLCAnaW1hZ2VzL3BhZGRsZS5wbmcnKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFsbCcsICdpbWFnZXMvYmFsbC5wbmcnKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5iaXRtYXBGb250KCdQcmVzcyBTdGFydCAyUCcsICdmb250cy9QcmVzc19TdGFydF8yUF8wLnBuZycsICdmb250cy9QcmVzc19TdGFydF8yUC5mbnQnKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbygnaGl0JywgWydhdWRpby9oaXQud2F2J10pO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdzY29yZScsIFsnYXVkaW8vc2NvcmUud2F2J10pO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCd3YWxsJywgWydhdWRpby93YWxsLndhdiddKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbygnbXVzaWMnLCBbJ2F1ZGlvL2F0LW5pZ2h0LXBzZy5tcDMnLCAnYXVkaW8vYXQtbmlnaHQtcHNnLm9nZyddKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgfVxyXG59Il19
