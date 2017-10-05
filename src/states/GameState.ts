import Player from '../entities/Player';
import Human from '../entities/Human';
import Computer from '../entities/Computer';
import Ball from '../entities/Ball';
import Paddle from '../entities/Paddle';
import Music from '../entities/Music';

export default class GameState extends Phaser.State {
    private _players: Player[];
    private _ball: Ball;
    private _music: Music;

    constructor() {
        super();
        this._ball = new Ball(this);
        this._players = [
            new Human(this, new Paddle(this)),
            new Computer(this, new Paddle(this), this._ball)
        ];
        this._music = new Music(this);
    }

    public create(): void {
        this._music.create();
        this._ball.create();
        this._players.forEach(player => player.create());
        this.game.input.onDown.add(() => {
            this._music.toggle(
                this._ball.toggle()
            );
        }, this);
    }

    public update(): void {
        this._players.forEach(player => {
            player.update();
            this.game.physics.arcade.collide(
                player.paddle.sprite,
                this._ball.sprite,
                () => this.game.sound.play('hit')
            );
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

    public score(player: Player, goLeft: boolean): void {
        player.score.increase();
        this.game.sound.play('score');
        this._ball.reset(goLeft);
        this._music.pause();
    }
}