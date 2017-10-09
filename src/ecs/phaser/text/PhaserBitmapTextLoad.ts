/// <reference path="../../../../typings/index.d.ts"/>

import { EntityPool } from '../../core/index';
import { Load } from '../../base/index';
import { BitmapFontSearch } from '../../base/index';
import { PhaserBitmapFontLoad } from '../font/index';

export class PhaserBitmapTextLoad extends Load {
    private entities: EntityPool;
    private loader: Phaser.Loader;

    constructor(entities: EntityPool, loader: Phaser.Loader) {
        super();
        this.entities = entities;
        this.loader = loader;
    }

    execute(): void {
        new PhaserBitmapFontLoad(this.loader)
            .load(
                new BitmapFontSearch()
                    .find(this.entities)
            );
    }
}