(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var BootState_1 = require("./states/BootState");
var PreloaderState_1 = require("./states/PreloaderState");
var GameState_1 = require("./states/GameState");

var PongGame = function () {
    function PongGame() {
        _classCallCheck(this, PongGame);

        this._game = new Phaser.Game({
            width: 1024,
            height: 576,
            renderer: Phaser.AUTO,
            parent: 'game-container'
        });
    }

    _createClass(PongGame, [{
        key: "start",
        value: function start() {
            this._game.state.add('boot', new BootState_1.default());
            this._game.state.add('preloader', new PreloaderState_1.default());
            this._game.state.add('game', new GameState_1.default());
            this._game.state.start('boot');
        }
    }]);

    return PongGame;
}();

exports.default = PongGame;

},{"./states/BootState":10,"./states/GameState":11,"./states/PreloaderState":12}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Randomizer = function () {
    function Randomizer() {
        _classCallCheck(this, Randomizer);
    }

    _createClass(Randomizer, [{
        key: "boolean",
        value: function boolean() {
            return Math.random() >= 0.5;
        }
    }]);

    return Randomizer;
}();

exports.default = Randomizer;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Randomizer_1 = require("../Randomizer");

var Ball = function () {
    function Ball(state) {
        var velocity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
        var goLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var randomizer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Randomizer_1.default();

        _classCallCheck(this, Ball);

        this._state = state;
        this._velocity = velocity;
        this._isLaunched = false;
        this._randomizer = randomizer;
        this._goLeft = goLeft;
    }

    _createClass(Ball, [{
        key: "create",
        value: function create() {
            this._sprite = this._state.game.add.sprite(this._state.game.world.centerX, this._state.game.world.centerY, 'ball');
            this._sprite.anchor.setTo(0.5, 0.5);
            this._state.game.physics.arcade.enable(this._sprite);
            this._sprite.body.collideWorldBounds = true;
            this._sprite.body.bounce.setTo(1, 1);
        }
    }, {
        key: "reset",
        value: function reset(goLeft) {
            this._sprite.x = this._state.game.world.centerX;
            this._sprite.y = this._state.game.world.centerY;
            this._sprite.body.velocity.setTo(0, 0);
            this._isLaunched = false;
            this._goLeft = goLeft;
        }
    }, {
        key: "launch",
        value: function launch() {
            var xMultiplier = this._goLeft ? -1 : 1;
            var yMultiplier = this._randomizer.boolean() ? -1 : 1;
            this._sprite.body.velocity.x = xMultiplier * this._velocity;
            this._sprite.body.velocity.y = yMultiplier * this._velocity;
            this._isLaunched = true;
        }
    }, {
        key: "toggle",
        value: function toggle() {
            if (this._isLaunched) {
                this.reset(this._goLeft);
                return false;
            } else {
                this.launch();
                return true;
            }
        }
    }, {
        key: "sprite",
        get: function get() {
            return this._sprite;
        }
    }]);

    return Ball;
}();

exports.default = Ball;

},{"../Randomizer":2}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Score_1 = require("./Score");

var Computer = function () {
    function Computer(state, paddle, ball) {
        var maxVelocity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 250;
        var score = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Score_1.default(state);

        _classCallCheck(this, Computer);

        this._state = state;
        this._paddle = paddle;
        this._ball = ball;
        this._maxVelocity = maxVelocity;
        this._score = score;
    }

    _createClass(Computer, [{
        key: "create",
        value: function create() {
            this._paddle.create(this._state.game.world.width - 8, this._state.game.world.centerY);
            this._score.create(this._state.game.world.width - 128, 128);
        }
    }, {
        key: "update",
        value: function update() {
            this._paddle.sprite.body.velocity.setTo(this._ball.sprite.body.velocity.y);
            this._paddle.sprite.body.velocity.x = 0;
            this._paddle.sprite.body.maxVelocity.y = this._maxVelocity;
        }
    }, {
        key: "paddle",
        get: function get() {
            return this._paddle;
        }
    }, {
        key: "score",
        get: function get() {
            return this._score;
        }
    }]);

    return Computer;
}();

exports.default = Computer;

},{"./Score":8}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Score_1 = require("./Score");

var Human = function () {
    function Human(state, paddle) {
        var score = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Score_1.default(state);

        _classCallCheck(this, Human);

        this._state = state;
        this._paddle = paddle;
        this._score = score;
    }

    _createClass(Human, [{
        key: "create",
        value: function create() {
            this._paddle.create(0, this._state.game.world.centerY);
            this._score.create(128, 128);
        }
    }, {
        key: "update",
        value: function update() {
            this._paddle.move(this._state.game.input.y);
        }
    }, {
        key: "paddle",
        get: function get() {
            return this._paddle;
        }
    }, {
        key: "score",
        get: function get() {
            return this._score;
        }
    }]);

    return Human;
}();

exports.default = Human;

},{"./Score":8}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Music = function () {
    function Music(state) {
        _classCallCheck(this, Music);

        this._state = state;
    }

    _createClass(Music, [{
        key: "create",
        value: function create() {
            this._sound = this._state.game.add.audio('music');
        }
    }, {
        key: "toggle",
        value: function toggle(play) {
            if (play) {
                if (this._sound.paused) {
                    this._sound.resume();
                } else {
                    this._sound.play();
                }
                return true;
            } else {
                this._sound.pause();
                return false;
            }
        }
    }, {
        key: "pause",
        value: function pause() {
            this._sound.pause();
        }
    }]);

    return Music;
}();

exports.default = Music;

},{}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Paddle = function () {
    function Paddle(state) {
        _classCallCheck(this, Paddle);

        this._state = state;
    }

    _createClass(Paddle, [{
        key: "create",
        value: function create(x, y) {
            this._sprite = this._state.game.add.sprite(x, y, 'paddle');
            this._sprite.anchor.setTo(0.5, 0.5);
            this._state.game.physics.arcade.enable(this._sprite);
            this._sprite.body.collideWorldBounds = true;
            this._sprite.body.immovable = true;
            this._sprite.scale.setTo(0.5, 0.5);
            this._minY = 0.5 * this._sprite.height;
            this._maxY = this._state.game.world.height - 0.5 * this._sprite.height;
        }
    }, {
        key: "move",
        value: function move(y) {
            this._sprite.y = y;
            if (this._sprite.y < this._minY) {
                this._sprite.y = this._minY;
            } else if (this._sprite.y > this._maxY) {
                this._sprite.y = this._maxY;
            }
        }
    }, {
        key: "sprite",
        get: function get() {
            return this._sprite;
        }
    }]);

    return Paddle;
}();

exports.default = Paddle;

},{}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Score = function () {
    function Score(state) {
        _classCallCheck(this, Score);

        this._state = state;
        this._value = 0;
    }

    _createClass(Score, [{
        key: "create",
        value: function create(x, y) {
            this._bitmap = this._state.game.add.bitmapText(Math.floor(x), Math.floor(y), 'Press Start 2P', '0', 32);
        }
    }, {
        key: "increase",
        value: function increase() {
            this._value += 1;
            this._bitmap.text = '' + this._value;
        }
    }]);

    return Score;
}();

exports.default = Score;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PongGame_1 = require("./PongGame");
new PongGame_1.default().start();

},{"./PongGame":1}],10:[function(require,module,exports){
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
            this.game.state.start('preloader');
        }
    }]);

    return BootState;
}(Phaser.State);

exports.default = BootState;

},{}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Human_1 = require("../entities/Human");
var Computer_1 = require("../entities/Computer");
var Ball_1 = require("../entities/Ball");
var Paddle_1 = require("../entities/Paddle");
var Music_1 = require("../entities/Music");

var GameState = function (_Phaser$State) {
    _inherits(GameState, _Phaser$State);

    function GameState() {
        _classCallCheck(this, GameState);

        var _this = _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).call(this));

        _this._ball = new Ball_1.default(_this);
        _this._players = [new Human_1.default(_this, new Paddle_1.default(_this)), new Computer_1.default(_this, new Paddle_1.default(_this), _this._ball)];
        _this._music = new Music_1.default(_this);
        return _this;
    }

    _createClass(GameState, [{
        key: "create",
        value: function create() {
            var _this2 = this;

            this._music.create();
            this._ball.create();
            this._players.forEach(function (player) {
                return player.create();
            });
            this.game.input.onDown.add(function () {
                _this2._music.toggle(_this2._ball.toggle());
            }, this);
        }
    }, {
        key: "update",
        value: function update() {
            var _this3 = this;

            this._players.forEach(function (player) {
                player.update();
                _this3.game.physics.arcade.collide(player.paddle.sprite, _this3._ball.sprite, function () {
                    return _this3.game.sound.play('hit');
                });
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
        }
    }, {
        key: "score",
        value: function score(player, goLeft) {
            player.score.increase();
            this.game.sound.play('score');
            this._ball.reset(goLeft);
            this._music.pause();
        }
    }]);

    return GameState;
}(Phaser.State);

exports.default = GameState;

},{"../entities/Ball":3,"../entities/Computer":4,"../entities/Human":5,"../entities/Music":6,"../entities/Paddle":7}],12:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });

var PreloaderState = function (_Phaser$State) {
    _inherits(PreloaderState, _Phaser$State);

    function PreloaderState() {
        _classCallCheck(this, PreloaderState);

        return _possibleConstructorReturn(this, (PreloaderState.__proto__ || Object.getPrototypeOf(PreloaderState)).call(this));
    }

    _createClass(PreloaderState, [{
        key: "preload",
        value: function preload() {
            this.game.load.image('paddle', 'images/paddle.png');
            this.game.load.image('ball', 'images/ball.png');
            this.game.load.bitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
            this.game.load.audio('hit', ['audio/hit.wav']);
            this.game.load.audio('score', ['audio/score.wav']);
            this.game.load.audio('wall', ['audio/wall.wav']);
            this.game.load.audio('music', ['audio/at-night-psg.mp3', 'audio/at-night-psg.ogg']);
        }
    }, {
        key: "update",
        value: function update() {
            this.game.state.start('game');
        }
    }]);

    return PreloaderState;
}(Phaser.State);

exports.default = PreloaderState;

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvUG9uZ0dhbWUudHMiLCJzcmMvUmFuZG9taXplci50cyIsInNyYy9lbnRpdGllcy9CYWxsLnRzIiwic3JjL2VudGl0aWVzL0NvbXB1dGVyLnRzIiwic3JjL2VudGl0aWVzL0h1bWFuLnRzIiwic3JjL2VudGl0aWVzL011c2ljLnRzIiwic3JjL2VudGl0aWVzL1BhZGRsZS50cyIsInNyYy9lbnRpdGllcy9TY29yZS50cyIsInNyYy9tYWluLnRzIiwic3JjL3N0YXRlcy9Cb290U3RhdGUudHMiLCJzcmMvc3RhdGVzL0dhbWVTdGF0ZS50cyIsInNyYy9zdGF0ZXMvUHJlbG9hZGVyU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsMEJBQTJDO0FBQzNDLCtCQUFxRDtBQUNyRCwwQkFBMkMsQUFFM0M7OztBQUdJOzs7QUFDSSxBQUFJLGFBQUMsQUFBSyxZQUFPLEFBQU0sT0FBQyxBQUFJO0FBQ3hCLEFBQUssbUJBQUUsQUFBSTtBQUNYLEFBQU0sb0JBQUUsQUFBRztBQUNYLEFBQVEsc0JBQUUsQUFBTSxPQUFDLEFBQUk7QUFDckIsQUFBTSxvQkFBRSxBQUFnQixBQUMzQixBQUFDLEFBQUMsQUFDUDtBQU5pQyxTQUFoQjtBQU1oQixBQUVNLEFBQUs7Ozs7O0FBQ1IsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBSyxNQUFDLEFBQUcsSUFBQyxBQUFNLFFBQUUsSUFBSSxZQUFTLEFBQUUsQUFBQyxBQUFDO0FBQzlDLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFBQUssTUFBQyxBQUFHLElBQUMsQUFBVyxhQUFFLElBQUksaUJBQWMsQUFBRSxBQUFDLEFBQUM7QUFDeEQsQUFBSSxpQkFBQyxBQUFLLE1BQUMsQUFBSyxNQUFDLEFBQUcsSUFBQyxBQUFNLFFBQUUsSUFBSSxZQUFTLEFBQUUsQUFBQyxBQUFDO0FBQzlDLEFBQUksaUJBQUMsQUFBSyxNQUFDLEFB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QUFBSSxLQUFDLEFBQUssTUFBQyxBQUFLLE1BQUMsQUFBTSxBQUFDLEFBQUMsQUFDbEM7QUFBQyxBQUNKOzs7O0VBbEIyQyxBQUFNLE9BQUMsQUFBSzs7QUFBeEQsa0JBa0JDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBCb290U3RhdGUgZnJvbSAnLi9zdGF0ZXMvQm9vdFN0YXRlJztcclxuaW1wb3J0IFByZWxvYWRlclN0YXRlIGZyb20gJy4vc3RhdGVzL1ByZWxvYWRlclN0YXRlJztcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tICcuL3N0YXRlcy9HYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9uZ0dhbWUge1xyXG4gICAgcHJpdmF0ZSBfZ2FtZTogUGhhc2VyLkdhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDI0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDU3NixcclxuICAgICAgICAgICAgcmVuZGVyZXI6IFBoYXNlci5BVVRPLFxyXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lLWNvbnRhaW5lcidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2Jvb3QnLCBuZXcgQm9vdFN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyU3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZVN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbWl6ZXIge1xyXG4gICAgcHVibGljIGJvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPj0gMC41O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJhbmRvbWl6ZXIgZnJvbSAnLi4vUmFuZG9taXplcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9zcHJpdGU6IFBoYXNlci5TcHJpdGU7XHJcbiAgICBwcml2YXRlIF9pc0xhdW5jaGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JhbmRvbWl6ZXI6IFJhbmRvbWl6ZXI7XHJcbiAgICBwcml2YXRlIF9nb0xlZnQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3RhdGU6IFBoYXNlci5TdGF0ZSxcclxuICAgICAgICB2ZWxvY2l0eTogbnVtYmVyID0gNDAwLFxyXG4gICAgICAgIGdvTGVmdDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICAgICAgcmFuZG9taXplcjogUmFuZG9taXplciA9IG5ldyBSYW5kb21pemVyKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLl9pc0xhdW5jaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmFuZG9taXplciA9IHJhbmRvbWl6ZXI7XHJcbiAgICAgICAgdGhpcy5fZ29MZWZ0ID0gZ29MZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJZLCAnYmFsbCcpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5ib3VuY2Uuc2V0VG8oMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KGdvTGVmdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS54ID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS55ID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2lzTGF1bmNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nb0xlZnQgPSBnb0xlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxhdW5jaCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgeE11bHRpcGxpZXIgPSB0aGlzLl9nb0xlZnQgPyAtMSA6IDE7XHJcbiAgICAgICAgbGV0IHlNdWx0aXBsaWVyID0gdGhpcy5fcmFuZG9taXplci5ib29sZWFuKCkgPyAtMSA6IDE7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkudmVsb2NpdHkueCA9IHhNdWx0aXBsaWVyICogdGhpcy5fdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkudmVsb2NpdHkueSA9IHlNdWx0aXBsaWVyICogdGhpcy5fdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5faXNMYXVuY2hlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5faXNMYXVuY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KHRoaXMuX2dvTGVmdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhdW5jaCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzcHJpdGUoKTogUGhhc2VyLlNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgUGFkZGxlIGZyb20gJy4vUGFkZGxlJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi9CYWxsJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIgaW1wbGVtZW50cyBQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX3BhZGRsZTogUGFkZGxlO1xyXG4gICAgcHJpdmF0ZSBfYmFsbDogQmFsbDtcclxuICAgIHByaXZhdGUgX21heFZlbG9jaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY29yZTogU2NvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3RhdGU6IFBoYXNlci5TdGF0ZSxcclxuICAgICAgICBwYWRkbGU6IFBhZGRsZSxcclxuICAgICAgICBiYWxsOiBCYWxsLFxyXG4gICAgICAgIG1heFZlbG9jaXR5OiBudW1iZXIgPSAyNTAsXHJcbiAgICAgICAgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKHN0YXRlKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLl9wYWRkbGUgPSBwYWRkbGU7XHJcbiAgICAgICAgdGhpcy5fYmFsbCA9IGJhbGw7XHJcbiAgICAgICAgdGhpcy5fbWF4VmVsb2NpdHkgPSBtYXhWZWxvY2l0eTtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLmNyZWF0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLndpZHRoIC0gOCAsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUuY3JlYXRlKHRoaXMuX3N0YXRlLmdhbWUud29ybGQud2lkdGggLSAxMjgsIDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuc3ByaXRlLmJvZHkudmVsb2NpdHkuc2V0VG8odGhpcy5fYmFsbC5zcHJpdGUuYm9keS52ZWxvY2l0eS55KTtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuc3ByaXRlLmJvZHkudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5Lm1heFZlbG9jaXR5LnkgPSB0aGlzLl9tYXhWZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFkZGxlKCk6IFBhZGRsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZGRsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHNjb3JlKCk6IFNjb3JlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuL1BhZGRsZSc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1bWFuIGltcGxlbWVudHMgUGxheWVyIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9wYWRkbGU6IFBhZGRsZTtcclxuICAgIHByaXZhdGUgX3Njb3JlOiBTY29yZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlLCBwYWRkbGU6IFBhZGRsZSwgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKHN0YXRlKSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlID0gcGFkZGxlO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuY3JlYXRlKDAsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUuY3JlYXRlKDEyOCwgMTI4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5tb3ZlKHRoaXMuX3N0YXRlLmdhbWUuaW5wdXQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhZGRsZSgpOiBQYWRkbGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3JlKCk6IFNjb3JlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpYyB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfc291bmQ6IFBoYXNlci5Tb3VuZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuYXVkaW8oJ211c2ljJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZShwbGF5OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NvdW5kLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmQucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kLnBhdXNlKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFkZGxlIHtcclxuICAgIHByaXZhdGUgX3Nwcml0ZTogUGhhc2VyLlNwcml0ZTtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9taW5ZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYXhZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCAncGFkZGxlJyk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcy5fc3ByaXRlKTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLnNjYWxlLnNldFRvKDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLl9taW5ZID0gMC41ICogdGhpcy5fc3ByaXRlLmhlaWdodDtcclxuICAgICAgICB0aGlzLl9tYXhZID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5oZWlnaHQgLSAwLjUgKiB0aGlzLl9zcHJpdGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS55ID0geTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZS55IDwgdGhpcy5fbWluWSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHRoaXMuX21pblk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcHJpdGUueSA+IHRoaXMuX21heFkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnkgPSB0aGlzLl9tYXhZO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNwcml0ZSgpOiBQaGFzZXIuU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX2JpdG1hcDogUGhhc2VyLkJpdG1hcFRleHQ7XHJcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQaGFzZXIuU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYml0bWFwID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuYml0bWFwVGV4dChNYXRoLmZsb29yKHgpLCBNYXRoLmZsb29yKHkpLCAnUHJlc3MgU3RhcnQgMlAnLCAnMCcsIDMyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgKz0gMTtcclxuICAgICAgICB0aGlzLl9iaXRtYXAudGV4dCA9ICcnICsgdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9uZ0dhbWUgZnJvbSAnLi9Qb25nR2FtZSc7XHJcblxyXG5uZXcgUG9uZ0dhbWUoKS5zdGFydCgpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3RTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIHNjYWxlIHRvIGZpdCBzY3JlZW5cclxuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mdWxsU2NyZWVuU2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUud2luZG93Q29uc3RyYWludHMuYm90dG9tID0gJ3Zpc3VhbCc7IC8vIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG92ZXIgc2NyZWVuIGhlaWdodFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgcGl4ZWxzIHNoYXJwXHJcbiAgICAgICAgdGhpcy5nYW1lLmFudGlhbGlhcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5zbW9vdGhlZCA9IGZhbHNlO1xyXG4gICAgICAgIFBoYXNlci5DYW52YXMuc2V0SW1hZ2VSZW5kZXJpbmdDcmlzcCh0aGlzLmdhbWUuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncHJlbG9hZGVyJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uL2VudGl0aWVzL1BsYXllcic7XHJcbmltcG9ydCBIdW1hbiBmcm9tICcuLi9lbnRpdGllcy9IdW1hbic7XHJcbmltcG9ydCBDb21wdXRlciBmcm9tICcuLi9lbnRpdGllcy9Db21wdXRlcic7XHJcbmltcG9ydCBCYWxsIGZyb20gJy4uL2VudGl0aWVzL0JhbGwnO1xyXG5pbXBvcnQgUGFkZGxlIGZyb20gJy4uL2VudGl0aWVzL1BhZGRsZSc7XHJcbmltcG9ydCBNdXNpYyBmcm9tICcuLi9lbnRpdGllcy9NdXNpYyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyczogUGxheWVyW107XHJcbiAgICBwcml2YXRlIF9iYWxsOiBCYWxsO1xyXG4gICAgcHJpdmF0ZSBfbXVzaWM6IE11c2ljO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fYmFsbCA9IG5ldyBCYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBIdW1hbih0aGlzLCBuZXcgUGFkZGxlKHRoaXMpKSxcclxuICAgICAgICAgICAgbmV3IENvbXB1dGVyKHRoaXMsIG5ldyBQYWRkbGUodGhpcyksIHRoaXMuX2JhbGwpXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLl9tdXNpYyA9IG5ldyBNdXNpYyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX211c2ljLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2JhbGwuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiBwbGF5ZXIuY3JlYXRlKCkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbXVzaWMudG9nZ2xlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFsbC50b2dnbGUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllci51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGFkZGxlLnNwcml0ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JhbGwuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nYW1lLnNvdW5kLnBsYXkoJ2hpdCcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9iYWxsLnNwcml0ZS5ib2R5LmJsb2NrZWQudXAgfHwgdGhpcy5fYmFsbC5zcHJpdGUuYm9keS5ibG9ja2VkLmRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnBsYXkoJ3dhbGwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9iYWxsLnNwcml0ZS5ib2R5LmJsb2NrZWQubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlKHRoaXMuX3BsYXllcnNbMV0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9iYWxsLnNwcml0ZS5ib2R5LmJsb2NrZWQucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSh0aGlzLl9wbGF5ZXJzWzBdLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjb3JlKHBsYXllcjogUGxheWVyLCBnb0xlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBwbGF5ZXIuc2NvcmUuaW5jcmVhc2UoKTtcclxuICAgICAgICB0aGlzLmdhbWUuc291bmQucGxheSgnc2NvcmUnKTtcclxuICAgICAgICB0aGlzLl9iYWxsLnJlc2V0KGdvTGVmdCk7XHJcbiAgICAgICAgdGhpcy5fbXVzaWMucGF1c2UoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlclN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3BhZGRsZScsICdpbWFnZXMvcGFkZGxlLnBuZycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiYWxsJywgJ2ltYWdlcy9iYWxsLnBuZycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpdG1hcEZvbnQoJ1ByZXNzIFN0YXJ0IDJQJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQXzAucG5nJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQLmZudCcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdoaXQnLCBbJ2F1ZGlvL2hpdC53YXYnXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ3Njb3JlJywgWydhdWRpby9zY29yZS53YXYnXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ3dhbGwnLCBbJ2F1ZGlvL3dhbGwud2F2J10pO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdtdXNpYycsIFsnYXVkaW8vYXQtbmlnaHQtcHNnLm1wMycsICdhdWRpby9hdC1uaWdodC1wc2cub2dnJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICB9XHJcbn0iXX0=
