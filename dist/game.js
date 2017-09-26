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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvUG9uZ0dhbWUudHMiLCJzcmMvUmFuZG9taXplci50cyIsInNyYy9lbnRpdGllcy9CYWxsLnRzIiwic3JjL2VudGl0aWVzL0NvbXB1dGVyLnRzIiwic3JjL2VudGl0aWVzL0h1bWFuLnRzIiwic3JjL2VudGl0aWVzL011c2ljLnRzIiwic3JjL2VudGl0aWVzL1BhZGRsZS50cyIsInNyYy9lbnRpdGllcy9TY29yZS50cyIsInNyYy9tYWluLnRzIiwic3JjL3N0YXRlcy9Cb290U3RhdGUudHMiLCJzcmMvc3RhdGVzL0dhbWVTdGF0ZS50cyIsInNyYy9zdGF0ZXMvUHJlbG9hZGVyU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLGdEQUEyQztBQUMzQywwREFBcUQ7QUFDckQsZ0RBQTJDO0FBRTNDO0lBR0M7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQztZQUM1QixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxnQkFBZ0I7U0FDeEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLHdCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksbUJBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLHdCQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxtQkFBUyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENB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QUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsQ0FsQjJDLE1BQU0sQ0FBQyxLQUFLLEdBa0J2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQm9vdFN0YXRlIGZyb20gJy4vc3RhdGVzL0Jvb3RTdGF0ZSc7XHJcbmltcG9ydCBQcmVsb2FkZXJTdGF0ZSBmcm9tICcuL3N0YXRlcy9QcmVsb2FkZXJTdGF0ZSc7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSAnLi9zdGF0ZXMvR2FtZVN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbmdHYW1lIHtcclxuXHRwcml2YXRlIF9nYW1lOiBQaGFzZXIuR2FtZTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl9nYW1lID0gbmV3IFBoYXNlci5HYW1lKHtcclxuXHRcdFx0d2lkdGg6IDEwMjQsXHJcblx0XHRcdGhlaWdodDogNTc2LFxyXG5cdFx0XHRyZW5kZXJlcjogUGhhc2VyLkFVVE8sXHJcblx0XHRcdHBhcmVudDogJ2dhbWUtY29udGFpbmVyJ1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhcnQoKSB7XHJcblx0XHR0aGlzLl9nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290U3RhdGUoKSk7XHJcblx0XHR0aGlzLl9nYW1lLnN0YXRlLmFkZCgncHJlbG9hZGVyJywgbmV3IFByZWxvYWRlclN0YXRlKCkpO1xyXG5cdFx0dGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZVN0YXRlKCkpO1xyXG5cdFx0dGhpcy5fZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbWl6ZXIge1xyXG4gICAgcHVibGljIGJvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPj0gMC41O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJhbmRvbWl6ZXIgZnJvbSAnLi4vUmFuZG9taXplcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9zcHJpdGU6IFBoYXNlci5TcHJpdGU7XHJcbiAgICBwcml2YXRlIF9pc0xhdW5jaGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JhbmRvbWl6ZXI6IFJhbmRvbWl6ZXI7XHJcbiAgICBwcml2YXRlIF9nb0xlZnQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3RhdGU6IFBoYXNlci5TdGF0ZSxcclxuICAgICAgICB2ZWxvY2l0eTogbnVtYmVyID0gNDAwLFxyXG4gICAgICAgIGdvTGVmdDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICAgICAgcmFuZG9taXplcjogUmFuZG9taXplciA9IG5ldyBSYW5kb21pemVyKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLl9pc0xhdW5jaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmFuZG9taXplciA9IHJhbmRvbWl6ZXI7XHJcbiAgICAgICAgdGhpcy5fZ29MZWZ0ID0gZ29MZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJZLCAnYmFsbCcpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5ib3VuY2Uuc2V0VG8oMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KGdvTGVmdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS54ID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS55ID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2lzTGF1bmNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nb0xlZnQgPSBnb0xlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxhdW5jaCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgeE11bHRpcGxpZXIgPSB0aGlzLl9nb0xlZnQgPyAtMSA6IDE7XHJcbiAgICAgICAgbGV0IHlNdWx0aXBsaWVyID0gdGhpcy5fcmFuZG9taXplci5ib29sZWFuKCkgPyAtMSA6IDE7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkudmVsb2NpdHkueCA9IHhNdWx0aXBsaWVyICogdGhpcy5fdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkudmVsb2NpdHkueSA9IHlNdWx0aXBsaWVyICogdGhpcy5fdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5faXNMYXVuY2hlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5faXNMYXVuY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KHRoaXMuX2dvTGVmdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhdW5jaCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzcHJpdGUoKTogUGhhc2VyLlNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgUGFkZGxlIGZyb20gJy4vUGFkZGxlJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi9CYWxsJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIgaW1wbGVtZW50cyBQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX3BhZGRsZTogUGFkZGxlO1xyXG4gICAgcHJpdmF0ZSBfYmFsbDogQmFsbDtcclxuICAgIHByaXZhdGUgX21heFZlbG9jaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY29yZTogU2NvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3RhdGU6IFBoYXNlci5TdGF0ZSxcclxuICAgICAgICBwYWRkbGU6IFBhZGRsZSxcclxuICAgICAgICBiYWxsOiBCYWxsLFxyXG4gICAgICAgIG1heFZlbG9jaXR5OiBudW1iZXIgPSAyNTAsXHJcbiAgICAgICAgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKHN0YXRlKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLl9wYWRkbGUgPSBwYWRkbGU7XHJcbiAgICAgICAgdGhpcy5fYmFsbCA9IGJhbGw7XHJcbiAgICAgICAgdGhpcy5fbWF4VmVsb2NpdHkgPSBtYXhWZWxvY2l0eTtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLmNyZWF0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLndpZHRoIC0gOCAsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUuY3JlYXRlKHRoaXMuX3N0YXRlLmdhbWUud29ybGQud2lkdGggLSAxMjgsIDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuc3ByaXRlLmJvZHkudmVsb2NpdHkuc2V0VG8odGhpcy5fYmFsbC5zcHJpdGUuYm9keS52ZWxvY2l0eS55KTtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuc3ByaXRlLmJvZHkudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5Lm1heFZlbG9jaXR5LnkgPSB0aGlzLl9tYXhWZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFkZGxlKCk6IFBhZGRsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZGRsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHNjb3JlKCk6IFNjb3JlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuL1BhZGRsZSc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1bWFuIGltcGxlbWVudHMgUGxheWVyIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9wYWRkbGU6IFBhZGRsZTtcclxuICAgIHByaXZhdGUgX3Njb3JlOiBTY29yZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlLCBwYWRkbGU6IFBhZGRsZSwgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKHN0YXRlKSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlID0gcGFkZGxlO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuY3JlYXRlKDAsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUuY3JlYXRlKDEyOCwgMTI4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5tb3ZlKHRoaXMuX3N0YXRlLmdhbWUuaW5wdXQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhZGRsZSgpOiBQYWRkbGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3JlKCk6IFNjb3JlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpYyB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfc291bmQ6IFBoYXNlci5Tb3VuZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuYXVkaW8oJ211c2ljJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZShwbGF5OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NvdW5kLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmQucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFkZGxlIHtcclxuICAgIHByaXZhdGUgX3Nwcml0ZTogUGhhc2VyLlNwcml0ZTtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9taW5ZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYXhZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCAncGFkZGxlJyk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcy5fc3ByaXRlKTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLnNjYWxlLnNldFRvKDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLl9taW5ZID0gMC41ICogdGhpcy5fc3ByaXRlLmhlaWdodDtcclxuICAgICAgICB0aGlzLl9tYXhZID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5oZWlnaHQgLSAwLjUgKiB0aGlzLl9zcHJpdGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS55ID0geTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZS55IDwgdGhpcy5fbWluWSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHRoaXMuX21pblk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcHJpdGUueSA+IHRoaXMuX21heFkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnkgPSB0aGlzLl9tYXhZO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNwcml0ZSgpOiBQaGFzZXIuU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX2JpdG1hcDogUGhhc2VyLkJpdG1hcFRleHQ7XHJcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQaGFzZXIuU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYml0bWFwID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuYml0bWFwVGV4dChNYXRoLmZsb29yKHgpLCBNYXRoLmZsb29yKHkpLCAnUHJlc3MgU3RhcnQgMlAnLCAnMCcsIDMyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgKz0gMTtcclxuICAgICAgICB0aGlzLl9iaXRtYXAudGV4dCA9ICcnICsgdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IFBvbmdHYW1lIGZyb20gJy4vUG9uZ0dhbWUnO1xyXG5cclxubmV3IFBvbmdHYW1lKCkuc3RhcnQoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb290U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvLyBzY2FsZSB0byBmaXQgc2NyZWVuXHJcbiAgICAgICAgdGhpcy5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZnVsbFNjcmVlblNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mb3JjZUxhbmRzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLndpbmRvd0NvbnN0cmFpbnRzLmJvdHRvbSA9ICd2aXN1YWwnOyAvLyBtYWtlIHN1cmUgaXQgZG9lc24ndCBnbyBvdmVyIHNjcmVlbiBoZWlnaHRcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvLyBrZWVwIHBpeGVscyBzaGFycFxyXG4gICAgICAgIHRoaXMuZ2FtZS5hbnRpYWxpYXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhZ2Uuc21vb3RoZWQgPSBmYWxzZTtcclxuICAgICAgICBQaGFzZXIuQ2FudmFzLnNldEltYWdlUmVuZGVyaW5nQ3Jpc3AodGhpcy5nYW1lLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9lbnRpdGllcy9QbGF5ZXInO1xyXG5pbXBvcnQgSHVtYW4gZnJvbSAnLi4vZW50aXRpZXMvSHVtYW4nO1xyXG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi4vZW50aXRpZXMvQ29tcHV0ZXInO1xyXG5pbXBvcnQgQmFsbCBmcm9tICcuLi9lbnRpdGllcy9CYWxsJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuLi9lbnRpdGllcy9QYWRkbGUnO1xyXG5pbXBvcnQgTXVzaWMgZnJvbSAnLi4vZW50aXRpZXMvTXVzaWMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIHByaXZhdGUgX3BsYXllcnM6IFBsYXllcltdO1xyXG4gICAgcHJpdmF0ZSBfYmFsbDogQmFsbDtcclxuICAgIHByaXZhdGUgX211c2ljOiBNdXNpYztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2JhbGwgPSBuZXcgQmFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gW1xyXG4gICAgICAgICAgICBuZXcgSHVtYW4odGhpcywgbmV3IFBhZGRsZSh0aGlzKSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wdXRlcih0aGlzLCBuZXcgUGFkZGxlKHRoaXMpLCB0aGlzLl9iYWxsKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5fbXVzaWMgPSBuZXcgTXVzaWModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tdXNpYy5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLl9iYWxsLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gcGxheWVyLmNyZWF0ZSgpKTtcclxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljLnRvZ2dsZShcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JhbGwudG9nZ2xlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXIudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKFxyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBhZGRsZS5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWxsLnNwcml0ZSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2FtZS5zb3VuZC5wbGF5KCdoaXQnKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYmFsbC5zcHJpdGUuYm9keS5ibG9ja2VkLnVwIHx8IHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC5kb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5wbGF5KCd3YWxsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fYmFsbC5zcHJpdGUuYm9keS5ibG9ja2VkLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSh0aGlzLl9wbGF5ZXJzWzFdLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLl9iYWxsLnNwcml0ZS5ib2R5LmJsb2NrZWQucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSh0aGlzLl9wbGF5ZXJzWzBdLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjb3JlKHBsYXllcjogUGxheWVyLCBnb0xlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBwbGF5ZXIuc2NvcmUuaW5jcmVhc2UoKTtcclxuICAgICAgICB0aGlzLmdhbWUuc291bmQucGxheSgnc2NvcmUnKTtcclxuICAgICAgICB0aGlzLl9iYWxsLnJlc2V0KGdvTGVmdCk7XHJcbiAgICAgICAgdGhpcy5fbXVzaWMucGF1c2UoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlclN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3BhZGRsZScsICdpbWFnZXMvcGFkZGxlLnBuZycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiYWxsJywgJ2ltYWdlcy9iYWxsLnBuZycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpdG1hcEZvbnQoJ1ByZXNzIFN0YXJ0IDJQJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQXzAucG5nJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQLmZudCcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdoaXQnLCBbJ2F1ZGlvL2hpdC53YXYnXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ3Njb3JlJywgWydhdWRpby9zY29yZS53YXYnXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ3dhbGwnLCBbJ2F1ZGlvL3dhbGwud2F2J10pO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdtdXNpYycsIFsnYXVkaW8vYXQtbmlnaHQtcHNnLm1wMycsICdhdWRpby9hdC1uaWdodC1wc2cub2dnJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICB9XHJcbn0iXX0=
