/// <reference path="../../../typings/index.d.ts"/>

import BitmapFont from './BitmapFont';

export default class PhaserBitmapFontLoad {
    private loader: Phaser.Loader;

    constructor(loader: Phaser.Loader) {
        this.loader = loader;
    }

    load(fonts: BitmapFont[]): PhaserBitmapFontLoad {
        fonts.forEach(font => {
            this.loader.bitmapFont(
                font.id(),
                font.image(),
                font.atlas()
            );
        }, this);

        return this;
    }
}