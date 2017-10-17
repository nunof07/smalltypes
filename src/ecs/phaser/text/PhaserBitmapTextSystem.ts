import { Entities } from '@core/index';
import { Prefab } from '@core/index';
import { System } from '@core/index';
import { BaseSystem } from '@base/index';
import { PhaserBitmapTextLoad } from '@phaser/index';
import { PhaserBitmapTextStart } from '@phaser/index';
import { PhaserBitmapTextFactory } from '@phaser/index';

/**
 * Loads and creates bitmap text using Phaser.
 */
export class PhaserBitmapTextSystem implements Prefab<System> {
    private entities: Entities;
    private loader: Phaser.Loader;
    private factory: Phaser.GameObjectFactory;

    constructor(entities: Entities, loader: Phaser.Loader, factory: Phaser.GameObjectFactory) {
        this.entities = entities;
        this.loader = loader;
        this.factory = factory;
    }
    create(): System {
        return new BaseSystem([
            new PhaserBitmapTextLoad(this.entities, this.loader)
                .create(),
            new PhaserBitmapTextStart(this.entities, new PhaserBitmapTextFactory(this.factory))
                .create()
        ]);
    }
}