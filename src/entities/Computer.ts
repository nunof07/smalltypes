import Player from './Player';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Computer implements Player {
    private _state: Phaser.State;
    private _paddle: Paddle;
    private _ball: Ball;
    private _maxVelocity: number;
    private _score: Score;

    constructor(
        state: Phaser.State,
        paddle: Paddle,
        ball: Ball,
        maxVelocity: number = 250,
        score: Score = new Score(state)
    ) {
        this._state = state;
        this._paddle = paddle;
        this._ball = ball;
        this._maxVelocity = maxVelocity;
        this._score = score;
    }

    public create(): void {
        this._paddle.create(this._state.game.world.width - 8 , this._state.game.world.centerY);
        this._score.create(this._state.game.world.width - 128, 128);
    }

    public update(): void {
        this._paddle.sprite.body.velocity.setTo(this._ball.sprite.body.velocity.y);
        this._paddle.sprite.body.velocity.x = 0;
        this._paddle.sprite.body.maxVelocity.y = this._maxVelocity;
    }

    get paddle(): Paddle {
        return this._paddle;
    }
    
    get score(): Score {
        return this._score;
    }
}