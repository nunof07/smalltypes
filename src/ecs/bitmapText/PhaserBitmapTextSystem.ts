import { System } from '../core/index';
import { EntityPool } from '../core/index';
import { Phase } from '../core/index';
import { PhaseId } from '../core/index';
import { BaseSystem } from '../base/index';
import { BasePhasePool } from '../base/index';
import PhaserBitmapTextLoad from './PhaserBitmapTextLoad';
import PhaserBitmapTextStart from './PhaserBitmapTextStart';

/**
 * Loads and creates bitmap text using Phaser.
 */
export default class PhaserBitmapTextSystem extends BaseSystem {
    constructor(entities: EntityPool, loader: Phaser.Loader, factory: Phaser.GameObjectFactory) {
        super([
            new PhaserBitmapTextLoad(entities, loader),
            new PhaserBitmapTextStart(entities, factory)
        ]);
    }
}