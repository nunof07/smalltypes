import WriteText from './WriteText';

export default class PhaserText implements WriteText {
    private textObj: { text };

    constructor(text: Phaser.BitmapText) {
        this.textObj = text;
    }

    value(): string {
        return this.textObj.text;
    }

    update(text: string): void {
        this.textObj.text = text;
    }
}