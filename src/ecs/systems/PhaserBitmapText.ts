import System from '../core/System';
import BitmapText from '../components/BitmapText';
import ComponentId from '../core/ComponentId';
import EntityPool from '../core/EntityPool';
import PhaserBitmapFontLoad from '../assets/PhaserBitmapFontLoad';
import PhaserBitmapTextFactory from '../assets/PhaserBitmapTextFactory';
import BitmapFontSearch from '../assets/BitmapFontSearch';
import BitmapTextSearch from '../assets/BitmapTextSearch';

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

    components(): ComponentId[] {
        return [BitmapText.ID];
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

    finish(entities: EntityPool): System {
        // nothing to do
        return this;
    }
}