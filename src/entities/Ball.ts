import Randomizer from '../Randomizer';

export default class Ball {
    private _state: Phaser.State;
    private _sprite: Phaser.Sprite;
    private _isLaunched: boolean;
    private _velocity: number;
    private _randomizer: Randomizer;
    private _goLeft: boolean;

    constructor(
        state: Phaser.State,
        velocity: number = 400,
        goLeft: boolean = true,
        randomizer: Randomizer = new Randomizer()
    ) {
        this._state = state;
        this._velocity = velocity;
        this._isLaunched = false;
        this._randomizer = randomizer;
        this._goLeft = goLeft;
    }

    public create(): void {
        this._sprite = this._state.game.add.sprite(this._state.game.world.centerX, this._state.game.world.centerY, 'ball');
        this._sprite.anchor.setTo(0.5, 0.5);
        this._state.game.physics.arcade.enable(this._sprite);
        this._sprite.body.collideWorldBounds = true;
        this._sprite.body.bounce.setTo(1, 1);
    }

    public reset(goLeft: boolean): void {
        this._sprite.x = this._state.game.world.centerX;
        this._sprite.y = this._state.game.world.centerY;
        this._sprite.body.velocity.setTo(0, 0);
        this._isLaunched = false;
        this._goLeft = goLeft;
    }

    public launch(): void {
        let xMultiplier = this._goLeft ? -1 : 1;
        let yMultiplier = this._randomizer.boolean() ? -1 : 1;
        this._sprite.body.velocity.x = xMultiplier * this._velocity;
        this._sprite.body.velocity.y = yMultiplier * this._velocity;
        this._isLaunched = true;
    }

    public toggle(): boolean {
        if (this._isLaunched) {
            this.reset(this._goLeft);
            return false;
        } else {
            this.launch();
            return true;
        }
    }

    public get sprite(): Phaser.Sprite {
        return this._sprite;
    }
}