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
},{"./states/BootState":10,"./states/GameState":11,"./states/PreloaderState":12}],2:[function(require,module,exports){
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
},{"../Randomizer":2}],4:[function(require,module,exports){
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
},{"./Score":8}],5:[function(require,module,exports){
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
},{"./Score":8}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
"use strict";
/// <reference path="../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var PongGame_1 = require("./PongGame");
new PongGame_1.default().start();
},{"./PongGame":1}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{"../entities/Ball":3,"../entities/Computer":4,"../entities/Human":5,"../entities/Music":6,"../entities/Paddle":7}],12:[function(require,module,exports){
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
},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvUG9uZ0dhbWUudHMiLCJzcmMvUmFuZG9taXplci50cyIsInNyYy9lbnRpdGllcy9CYWxsLnRzIiwic3JjL2VudGl0aWVzL0NvbXB1dGVyLnRzIiwic3JjL2VudGl0aWVzL0h1bWFuLnRzIiwic3JjL2VudGl0aWVzL011c2ljLnRzIiwic3JjL2VudGl0aWVzL1BhZGRsZS50cyIsInNyYy9lbnRpdGllcy9TY29yZS50cyIsInNyYy9tYWluLnRzIiwic3JjL3N0YXRlcy9Cb290U3RhdGUudHMiLCJzcmMvc3RhdGVzL0dhbWVTdGF0ZS50cyIsInNyYy9zdGF0ZXMvUHJlbG9hZGVyU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLGdEQUEyQztBQUMzQywwREFBcUQ7QUFDckQsZ0RBQTJDO0FBRTNDO0lBR0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQztZQUN6QixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHdCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksbUJBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLHdCQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxtQkFBUyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENB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QUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsQ0FsQjJDLE1BQU0sQ0FBQyxLQUFLLEdBa0J2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQm9vdFN0YXRlIGZyb20gJy4vc3RhdGVzL0Jvb3RTdGF0ZSc7XHJcbmltcG9ydCBQcmVsb2FkZXJTdGF0ZSBmcm9tICcuL3N0YXRlcy9QcmVsb2FkZXJTdGF0ZSc7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSAnLi9zdGF0ZXMvR2FtZVN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbmdHYW1lIHtcclxuICAgIHByaXZhdGUgX2dhbWU6IFBoYXNlci5HYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBuZXcgUGhhc2VyLkdhbWUoe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzYsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcclxuICAgICAgICAgICAgcGFyZW50OiAnZ2FtZS1jb250YWluZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3RTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgncHJlbG9hZGVyJywgbmV3IFByZWxvYWRlclN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdnYW1lJywgbmV3IEdhbWVTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21pemVyIHtcclxuICAgIHB1YmxpYyBib29sZWFuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID49IDAuNTtcclxuICAgIH1cclxufSIsImltcG9ydCBSYW5kb21pemVyIGZyb20gJy4uL1JhbmRvbWl6ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfc3ByaXRlOiBQaGFzZXIuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBfaXNMYXVuY2hlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3ZlbG9jaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9yYW5kb21pemVyOiBSYW5kb21pemVyO1xyXG4gICAgcHJpdmF0ZSBfZ29MZWZ0OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHN0YXRlOiBQaGFzZXIuU3RhdGUsXHJcbiAgICAgICAgdmVsb2NpdHk6IG51bWJlciA9IDQwMCxcclxuICAgICAgICBnb0xlZnQ6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgICAgIHJhbmRvbWl6ZXI6IFJhbmRvbWl6ZXIgPSBuZXcgUmFuZG9taXplcigpXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5faXNMYXVuY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3JhbmRvbWl6ZXIgPSByYW5kb21pemVyO1xyXG4gICAgICAgIHRoaXMuX2dvTGVmdCA9IGdvTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLnNwcml0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSwgJ2JhbGwnKTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZS5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzLl9zcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuYm91bmNlLnNldFRvKDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldChnb0xlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueCA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWDtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS52ZWxvY2l0eS5zZXRUbygwLCAwKTtcclxuICAgICAgICB0aGlzLl9pc0xhdW5jaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZ29MZWZ0ID0gZ29MZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXVuY2goKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHhNdWx0aXBsaWVyID0gdGhpcy5fZ29MZWZ0ID8gLTEgOiAxO1xyXG4gICAgICAgIGxldCB5TXVsdGlwbGllciA9IHRoaXMuX3JhbmRvbWl6ZXIuYm9vbGVhbigpID8gLTEgOiAxO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnggPSB4TXVsdGlwbGllciAqIHRoaXMuX3ZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnkgPSB5TXVsdGlwbGllciAqIHRoaXMuX3ZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMuX2lzTGF1bmNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTGF1bmNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCh0aGlzLl9nb0xlZnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXVuY2goKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3ByaXRlKCk6IFBoYXNlci5TcHJpdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuL1BhZGRsZSc7XHJcbmltcG9ydCBCYWxsIGZyb20gJy4vQmFsbCc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIGltcGxlbWVudHMgUGxheWVyIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9wYWRkbGU6IFBhZGRsZTtcclxuICAgIHByaXZhdGUgX2JhbGw6IEJhbGw7XHJcbiAgICBwcml2YXRlIF9tYXhWZWxvY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2NvcmU6IFNjb3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHN0YXRlOiBQaGFzZXIuU3RhdGUsXHJcbiAgICAgICAgcGFkZGxlOiBQYWRkbGUsXHJcbiAgICAgICAgYmFsbDogQmFsbCxcclxuICAgICAgICBtYXhWZWxvY2l0eTogbnVtYmVyID0gMjUwLFxyXG4gICAgICAgIHNjb3JlOiBTY29yZSA9IG5ldyBTY29yZShzdGF0ZSlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlID0gcGFkZGxlO1xyXG4gICAgICAgIHRoaXMuX2JhbGwgPSBiYWxsO1xyXG4gICAgICAgIHRoaXMuX21heFZlbG9jaXR5ID0gbWF4VmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSBzY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5jcmVhdGUodGhpcy5fc3RhdGUuZ2FtZS53b3JsZC53aWR0aCAtIDggLCB0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclkpO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlLmNyZWF0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLndpZHRoIC0gMTI4LCAxMjgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnNldFRvKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkudmVsb2NpdHkueSk7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5zcHJpdGUuYm9keS5tYXhWZWxvY2l0eS55ID0gdGhpcy5fbWF4VmVsb2NpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhZGRsZSgpOiBQYWRkbGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkbGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBzY29yZSgpOiBTY29yZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBQYWRkbGUgZnJvbSAnLi9QYWRkbGUnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdW1hbiBpbXBsZW1lbnRzIFBsYXllciB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfcGFkZGxlOiBQYWRkbGU7XHJcbiAgICBwcml2YXRlIF9zY29yZTogU2NvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSwgcGFkZGxlOiBQYWRkbGUsIHNjb3JlOiBTY29yZSA9IG5ldyBTY29yZShzdGF0ZSkpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZSA9IHBhZGRsZTtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLmNyZWF0ZSgwLCB0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLmNlbnRlclkpO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlLmNyZWF0ZSgxMjgsIDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUubW92ZSh0aGlzLl9zdGF0ZS5nYW1lLmlucHV0LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYWRkbGUoKTogUGFkZGxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY29yZSgpOiBTY29yZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVzaWMge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX3NvdW5kOiBQaGFzZXIuU291bmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zb3VuZCA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLmF1ZGlvKCdtdXNpYycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUocGxheTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zb3VuZC5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc291bmQucGF1c2UoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZGRsZSB7XHJcbiAgICBwcml2YXRlIF9zcHJpdGU6IFBoYXNlci5TcHJpdGU7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfbWluWTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbWF4WTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQaGFzZXIuU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUgPSB0aGlzLl9zdGF0ZS5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgJ3BhZGRsZScpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5pbW1vdmFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5zY2FsZS5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5fbWluWSA9IDAuNSAqIHRoaXMuX3Nwcml0ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fbWF4WSA9IHRoaXMuX3N0YXRlLmdhbWUud29ybGQuaGVpZ2h0IC0gMC41ICogdGhpcy5fc3ByaXRlLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZSh5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGUueSA8IHRoaXMuX21pblkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnkgPSB0aGlzLl9taW5ZO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3ByaXRlLnkgPiB0aGlzLl9tYXhZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS55ID0gdGhpcy5fbWF4WTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzcHJpdGUoKTogUGhhc2VyLlNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9iaXRtYXA6IFBoYXNlci5CaXRtYXBUZXh0O1xyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2JpdG1hcCA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLmJpdG1hcFRleHQoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSwgJ1ByZXNzIFN0YXJ0IDJQJywgJzAnLCAzMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlICs9IDE7XHJcbiAgICAgICAgdGhpcy5fYml0bWFwLnRleHQgPSAnJyArIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCBQb25nR2FtZSBmcm9tICcuL1BvbmdHYW1lJztcclxuXHJcbm5ldyBQb25nR2FtZSgpLnN0YXJ0KCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8gc2NhbGUgdG8gZml0IHNjcmVlblxyXG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLmZ1bGxTY3JlZW5TY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZm9yY2VMYW5kc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS53aW5kb3dDb25zdHJhaW50cy5ib3R0b20gPSAndmlzdWFsJzsgLy8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgZ28gb3ZlciBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgLy8ga2VlcCBwaXhlbHMgc2hhcnBcclxuICAgICAgICB0aGlzLmdhbWUuYW50aWFsaWFzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLnNtb290aGVkID0gZmFsc2U7XHJcbiAgICAgICAgUGhhc2VyLkNhbnZhcy5zZXRJbWFnZVJlbmRlcmluZ0NyaXNwKHRoaXMuZ2FtZS5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkZXInKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZW50aXRpZXMvUGxheWVyJztcclxuaW1wb3J0IEh1bWFuIGZyb20gJy4uL2VudGl0aWVzL0h1bWFuJztcclxuaW1wb3J0IENvbXB1dGVyIGZyb20gJy4uL2VudGl0aWVzL0NvbXB1dGVyJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi4vZW50aXRpZXMvQmFsbCc7XHJcbmltcG9ydCBQYWRkbGUgZnJvbSAnLi4vZW50aXRpZXMvUGFkZGxlJztcclxuaW1wb3J0IE11c2ljIGZyb20gJy4uL2VudGl0aWVzL011c2ljJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBQbGF5ZXJbXTtcclxuICAgIHByaXZhdGUgX2JhbGw6IEJhbGw7XHJcbiAgICBwcml2YXRlIF9tdXNpYzogTXVzaWM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9iYWxsID0gbmV3IEJhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IFtcclxuICAgICAgICAgICAgbmV3IEh1bWFuKHRoaXMsIG5ldyBQYWRkbGUodGhpcykpLFxyXG4gICAgICAgICAgICBuZXcgQ29tcHV0ZXIodGhpcywgbmV3IFBhZGRsZSh0aGlzKSwgdGhpcy5fYmFsbClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuX211c2ljID0gbmV3IE11c2ljKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbXVzaWMuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fYmFsbC5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci5jcmVhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9tdXNpYy50b2dnbGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWxsLnRvZ2dsZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShcclxuICAgICAgICAgICAgICAgIHBsYXllci5wYWRkbGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFsbC5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdhbWUuc291bmQucGxheSgnaGl0JylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC51cCB8fCB0aGlzLl9iYWxsLnNwcml0ZS5ib2R5LmJsb2NrZWQuZG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc291bmQucGxheSgnd2FsbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUodGhpcy5fcGxheWVyc1sxXSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlKHRoaXMuX3BsYXllcnNbMF0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NvcmUocGxheWVyOiBQbGF5ZXIsIGdvTGVmdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHBsYXllci5zY29yZS5pbmNyZWFzZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5wbGF5KCdzY29yZScpO1xyXG4gICAgICAgIHRoaXMuX2JhbGwucmVzZXQoZ29MZWZ0KTtcclxuICAgICAgICB0aGlzLl9tdXNpYy5wYXVzZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgncGFkZGxlJywgJ2ltYWdlcy9wYWRkbGUucG5nJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhbGwnLCAnaW1hZ2VzL2JhbGwucG5nJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udCgnUHJlc3MgU3RhcnQgMlAnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlBfMC5wbmcnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlAuZm50Jyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2hpdCcsIFsnYXVkaW8vaGl0LndhdiddKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbygnc2NvcmUnLCBbJ2F1ZGlvL3Njb3JlLndhdiddKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbygnd2FsbCcsIFsnYXVkaW8vd2FsbC53YXYnXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ211c2ljJywgWydhdWRpby9hdC1uaWdodC1wc2cubXAzJywgJ2F1ZGlvL2F0LW5pZ2h0LXBzZy5vZ2cnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICAgIH1cclxufSJdfQ==
