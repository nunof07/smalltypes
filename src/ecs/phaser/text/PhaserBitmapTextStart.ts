import { EntityPool } from '@core/index';
import { BitmapTextComponent } from '@core/index';
import { Phase } from '@core/index';
import { Prefab } from '@core/index';
import { Start } from '@base/index';
import { EntitySearch } from '@base/index';
import { BaseBitmapText } from '@base/index';
import { PhaserBitmapText } from '@phaser/index';
import { PhaserBitmapTextFactory } from '@phaser/index';

export class PhaserBitmapTextStart implements Prefab<Phase> {
    private entities: EntityPool;
    private factory: PhaserBitmapTextFactory;

    constructor(entities: EntityPool, factory: PhaserBitmapTextFactory) {
        this.entities = entities;
        this.factory = factory;
    }
    create(): Phase {
        return new Start(() => {
            new EntitySearch(BaseBitmapText.ID)
                .find(this.entities)
                .forEach(entity => {
                    entity.components()
                        .replace<BitmapTextComponent>(
                            BaseBitmapText.ID,
                            text => new PhaserBitmapText(
                                this.factory.create(text),
                                text.font()
                            )
                        );
                });
        });
    }
}