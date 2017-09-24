export default class Paddle {
    private _sprite: Phaser.Sprite;
    private _state: Phaser.State;
    private _minY: number;
    private _maxY: number;

    constructor(state: Phaser.State) {
        this._state = state;
    }

    public create(x: number, y: number): void {
        this._sprite = this._state.game.add.sprite(x, y, 'paddle');
        this._sprite.anchor.setTo(0.5, 0.5);
        this._state.game.physics.arcade.enable(this._sprite);
        this._sprite.body.collideWorldBounds = true;
        this._sprite.body.immovable = true;
        this._sprite.scale.setTo(0.5, 0.5);
        this._minY = 0.5 * this._sprite.height;
        this._maxY = this._state.game.world.height - 0.5 * this._sprite.height;
    }

    public move(y: number): void {
        this._sprite.y = y;

        if (this._sprite.y < this._minY) {
            this._sprite.y = this._minY;
        } else if (this._sprite.y > this._maxY) {
            this._sprite.y = this._maxY;
        }
    }

    public get sprite(): Phaser.Sprite {
        return this._sprite;
    }
}