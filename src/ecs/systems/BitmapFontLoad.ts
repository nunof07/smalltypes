import System from '../core/System';
import BitmapText from '../components/BitmapText';
import ComponentId from '../core/ComponentId';
import Entity from '../core/Entity';

export default class BitmapFontLoad implements System {
    private loader: Phaser.Loader;

    constructor(loader: Phaser.Loader) {
        this.loader = loader;
    }

    components(): ComponentId[] {
        return [BitmapText.ID];
    }

    initialize(entity: Entity): System {
        const text = entity.get(BitmapText.ID) as BitmapText;
        const font = text.font();
        this.loader.bitmapFont(
            font.id(),
            font.image(),
            font.atlas()
        );
        return this;
    }

    start(entity: Entity): System {
        // nothing to do
        return this;
    }

    process(entity: Entity): System {
        // nothing to do
        return this;
    }

    finish(entity: Entity): System {
        // nothing to do
        return this;
    }
}