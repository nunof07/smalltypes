import Player from './Player';
import Paddle from './Paddle';
import Score from './Score';

export default class Human implements Player {
    private _state: Phaser.State;
    private _paddle: Paddle;
    private _score: Score;

    constructor(state: Phaser.State, paddle: Paddle, score: Score = new Score(state)) {
        this._state = state;
        this._paddle = paddle;
        this._score = score;
    }

    public create(): void {
        this._paddle.create(0, this._state.game.world.centerY);
        this._score.create(128, 128);
    }

    public update(): void {
        this._paddle.move(this._state.game.input.y);
    }

    get paddle(): Paddle {
        return this._paddle;
    }

    get score(): Score {
        return this._score;
    }
}