import { Start } from '../base/index';
import { EntityPool } from '../core/index';
import { EntitySearch } from '../base/index';
import BaseBitmapText from './BaseBitmapText';
import BitmapTextComponent from './BitmapTextComponent';
import PhaserBitmapText from './PhaserBitmapText';
import PhaserBitmapTextFactory from './PhaserBitmapTextFactory';

export default class PhaserBitmapTextStart extends Start {
    private entities: EntityPool;
    private factory: PhaserBitmapTextFactory;

    constructor(entities: EntityPool, factory: PhaserBitmapTextFactory) {
        super();
        this.entities = entities;
        this.factory = factory;
    }

    execute(): void {
        new EntitySearch(BaseBitmapText.ID)
            .find(this.entities)
            .forEach(entity => {
                const text = entity.get<BitmapTextComponent>(BaseBitmapText.ID);
                entity
                    .attach(
                        new PhaserBitmapText(
                            this.factory.create(text),
                            text.font()
                        )
                    )
                    .detach(text.id());
            });
    }
}