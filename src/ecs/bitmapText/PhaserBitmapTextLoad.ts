import { Load } from '../base/index';
import { EntityPool } from '../core/index';
import PhaserBitmapFontLoad from './PhaserBitmapFontLoad';
import BitmapFontSearch from './BitmapFontSearch';

export default class PhaserBitmapTextLoad extends Load {
    private entities: EntityPool;
    private loader: Phaser.Loader;

    constructor(entities: EntityPool, loader: Phaser.Loader) {
        super();
        this.entities = entities;
        this.loader = loader;
    }

    execute(): void {
        new PhaserBitmapFontLoad(this.loader).load(
            new BitmapFontSearch().find(this.entities)
        );
    }
}