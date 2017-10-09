import { EntityPool } from '../../core/index';
import { BaseSystem } from '../../base/index';
import { PhaserBitmapTextLoad } from './PhaserBitmapTextLoad';
import { PhaserBitmapTextStart } from './PhaserBitmapTextStart';
import { PhaserBitmapTextFactory } from './PhaserBitmapTextFactory';

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