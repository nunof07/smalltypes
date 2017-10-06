import { System } from '../core/index';
import { ComponentId } from '../core/index';
import { EntityPool } from '../core/index';
import BitmapText from './BitmapText';
import BitmapFontSearch from './BitmapFontSearch';
import BitmapTextSearch from './BitmapTextSearch';
import PhaserBitmapFontLoad from './PhaserBitmapFontLoad';
import PhaserBitmapTextFactory from './PhaserBitmapTextFactory';

/**
 * Loads and creates bitmap text using Phaser.
 */
export default class PhaserBitmapText implements System {
    private loader: Phaser.Loader;
    private factory: Phaser.GameObjectFactory;

    constructor(loader: Phaser.Loader, factory: Phaser.GameObjectFactory) {
        this.loader = loader;
        this.factory = factory;
    }

    initialize(entities: EntityPool): System {
        new PhaserBitmapFontLoad(this.loader).load(
            new BitmapFontSearch().find(entities)
        );

        return this;
    }

    start(entities: EntityPool): System {
        const factory = new PhaserBitmapTextFactory(this.factory);
        new BitmapTextSearch().find(entities)
            .forEach(text => {
                factory.create(text);
            });

        return this;
    }

    process(entities: EntityPool): System {
        // nothing to do
        return this;
    }
}