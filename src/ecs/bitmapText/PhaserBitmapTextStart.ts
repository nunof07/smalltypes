import { Start } from '../base/index';
import { EntityPool } from '../core/index';
import BitmapTextSearch from './BitmapTextSearch';
import PhaserBitmapTextFactory from './PhaserBitmapTextFactory';

export default class PhaserBitmapTextStart extends Start {
    private entities: EntityPool;
    private factory: Phaser.GameObjectFactory;

    constructor(entities: EntityPool, factory: Phaser.GameObjectFactory) {
        super();
        this.entities = entities;
        this.factory = factory;
    }

    execute(): void {
        const factory = new PhaserBitmapTextFactory(this.factory);
        new BitmapTextSearch().find(this.entities)
            .forEach(text => {
                factory.create(text);
            });
    }
}