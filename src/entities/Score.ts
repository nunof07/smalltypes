export default class Score {
    private _state: Phaser.State;
    private _bitmap: Phaser.BitmapText;
    private _value: number;

    constructor(state: Phaser.State) {
        this._state = state;
        this._value = 0;
    }

    public create(x: number, y: number): void {
        this._bitmap = this._state.game.add.bitmapText(Math.floor(x), Math.floor(y), 'Press Start 2P', '0', 32);
    }

    public increase(): void {
        this._value += 1;
        this._bitmap.text = '' + this._value;
    }
}