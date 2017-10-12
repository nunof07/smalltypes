/// <reference path="../../../../typings/index.d.ts"/>

import { BitmapTextComponent } from '@core/index';

export class PhaserBitmapTextFactory {
    private factory: Phaser.GameObjectFactory;

    constructor(factory: Phaser.GameObjectFactory) {
        this.factory = factory;
    }

    create(text: BitmapTextComponent): Phaser.BitmapText {
        return this.factory.bitmapText(
            Math.floor(text.position().x()),
            Math.floor(text.position().y()),
            text.font().id(),
            text.text().value(),
            text.font().size()
        );
    }
}