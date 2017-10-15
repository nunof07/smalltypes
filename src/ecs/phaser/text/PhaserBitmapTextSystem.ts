import { EntityPool } from '@core/index';
import { PhasePool } from '@core/index';
import { System } from '@core/index';
import { BaseSystem } from '@base/index';
import { PhaserBitmapTextLoad } from '@phaser/index';
import { PhaserBitmapTextStart } from '@phaser/index';
import { PhaserBitmapTextFactory } from '@phaser/index';

/**
 * Loads and creates bitmap text using Phaser.
 */
export class PhaserBitmapTextSystem implements System {
    private system: System;

    constructor(entities: EntityPool, loader: Phaser.Loader, factory: Phaser.GameObjectFactory) {
        this.system = new BaseSystem([
            new PhaserBitmapTextLoad(entities, loader),
            new PhaserBitmapTextStart(
                entities,
                new PhaserBitmapTextFactory(factory)
            )
        ]);
    }
    phases(): PhasePool {
        return this.system.phases();
    }
}