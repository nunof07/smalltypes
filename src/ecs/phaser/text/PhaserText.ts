import { WriteText } from '@core/index';

export class PhaserText implements WriteText {
    private textObj: { text: string };

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