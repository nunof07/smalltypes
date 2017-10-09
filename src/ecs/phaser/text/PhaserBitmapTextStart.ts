import { EntityPool } from '../../core/index';
import { BitmapTextComponent } from '../../core/index';
import { Start } from '../../base/index';
import { EntitySearch } from '../../base/index';
import { BaseBitmapText } from '../../base/index';
import { PhaserBitmapText } from './PhaserBitmapText';
import { PhaserBitmapTextFactory } from './PhaserBitmapTextFactory';

export class PhaserBitmapTextStart extends Start {
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