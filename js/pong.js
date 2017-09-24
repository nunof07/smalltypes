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
define("states/BootState", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BootState = (function (_super) {
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
});
define("states/PreloaderState", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreloaderState = (function (_super) {
        __extends(PreloaderState, _super);
        function PreloaderState() {
            return _super.call(this) || this;
        }
        PreloaderState.prototype.preload = function () {
            this.game.load.image('paddle', 'assets/images/paddle.png');
            this.game.load.image('ball', 'assets/images/ball.png');
            this.game.load.bitmapFont('Press Start 2P', 'assets/fonts/Press_Start_2P_0.png', 'assets/fonts/Press_Start_2P.fnt');
            this.game.load.audio('hit', ['assets/audio/hit.wav']);
            this.game.load.audio('score', ['assets/audio/score.wav']);
            this.game.load.audio('wall', ['assets/audio/wall.wav']);
            this.game.load.audio('music', ['assets/audio/at-night-psg.mp3', 'assets/audio/at-night-psg.ogg']);
        };
        PreloaderState.prototype.update = function () {
            this.game.state.start('game');
        };
        return PreloaderState;
    }(Phaser.State));
    exports.default = PreloaderState;
});
define("entities/Paddle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Paddle = (function () {
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
});
define("entities/Score", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Score = (function () {
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
});
define("entities/Player", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("entities/Human", ["require", "exports", "entities/Score"], function (require, exports, Score_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Human = (function () {
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
});
define("Randomizer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Randomizer = (function () {
        function Randomizer() {
        }
        Randomizer.prototype.boolean = function () {
            return Math.random() >= 0.5;
        };
        return Randomizer;
    }());
    exports.default = Randomizer;
});
define("entities/Ball", ["require", "exports", "Randomizer"], function (require, exports, Randomizer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ball = (function () {
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
});
define("entities/Computer", ["require", "exports", "entities/Score"], function (require, exports, Score_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Computer = (function () {
        function Computer(state, paddle, ball, maxVelocity, score) {
            if (maxVelocity === void 0) { maxVelocity = 250; }
            if (score === void 0) { score = new Score_2.default(state); }
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
});
define("entities/Music", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Music = (function () {
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
});
define("states/GameState", ["require", "exports", "entities/Human", "entities/Computer", "entities/Ball", "entities/Paddle", "entities/Music"], function (require, exports, Human_1, Computer_1, Ball_1, Paddle_1, Music_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameState = (function (_super) {
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
});
define("PongGame", ["require", "exports", "states/BootState", "states/PreloaderState", "states/GameState"], function (require, exports, BootState_1, PreloaderState_1, GameState_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PongGame = (function () {
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
    exports.PongGame = PongGame;
});
//# sourceMappingURL=pong.js.map