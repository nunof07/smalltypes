import { EntityPool } from '@core/index';
import { BaseSystem } from '@base/index';
import { PhaserBitmapTextLoad } from '@phaser/index';
import { PhaserBitmapTextStart } from '@phaser/index';
import { PhaserBitmapTextFactory } from '@phaser/index';

/**
 * Loads and creates bitmap text using Phaser.
 */
export class PhaserBitmapTextSystem extends BaseSystem {
    constructor(entities: EntityPool, loader: Phaser.Loader, factory: Phaser.GameObjectFactory) {
        super([
            new PhaserBitmapTextLoad(entities, loader),
            new PhaserBitmapTextStart(
                entities,
                new PhaserBitmapTextFactory(factory)
            )
        ]);
    }
}