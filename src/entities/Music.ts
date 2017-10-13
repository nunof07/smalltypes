export default class Music {
    private _state: Phaser.State;
    private _sound: Phaser.Sound;

    constructor(state: Phaser.State) {
        this._state = state;
    }

    public create(): void {
        this._sound = this._state.game.add.audio('music');
    }

    public toggle(play: boolean): boolean {
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

    public pause(): void {
        this._sound.pause();
    }
}