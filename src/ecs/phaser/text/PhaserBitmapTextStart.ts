import { EntityPool } from '@core/index';
import { BitmapTextComponent } from '@core/index';
import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { Start } from '@base/index';
import { EntitySearch } from '@base/index';
import { BaseBitmapText } from '@base/index';
import { PhaserBitmapText } from '@phaser/index';
import { PhaserBitmapTextFactory } from '@phaser/index';

export class PhaserBitmapTextStart implements Phase {
    private phase: Phase;

    constructor(entities: EntityPool, factory: PhaserBitmapTextFactory) {
        this.phase = new Start(() => {
            new EntitySearch(BaseBitmapText.ID)
                .find(entities)
                .forEach(entity => {
                    entity.components()
                        .replace<BitmapTextComponent>(
                            BaseBitmapText.ID,
                            text => new PhaserBitmapText(
                                factory.create(text),
                                text.font()
                            )
                        );
                });
        });
    }
    id(): PhaseId {
        return this.phase.id();
    }
    execute(): void {
        this.phase.execute();
    }
}