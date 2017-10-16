import { EntityPool } from '@core/index';
import { Phase } from '@core/index';
import { Prefab } from '@core/index';
import { Load } from '@base/index';
import { BitmapFontSearch } from '@base/index';
import { PhaserBitmapFontLoad } from '@phaser/index';

export class PhaserBitmapTextLoad implements Prefab<Phase> {
    private entities: EntityPool;
    private loader: Phaser.Loader;

    constructor(entities: EntityPool, loader: Phaser.Loader) {
        this.entities = entities;
        this.loader = loader;
    }
    create(): Phase {
        return new Load(() => {
            new PhaserBitmapFontLoad(this.loader)
                .load(
                    new BitmapFontSearch()
                        .find(this.entities)
                );
        });
    }
}