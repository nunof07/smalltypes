import { EntityPool } from '@core/index';
import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { Load } from '@base/index';
import { BitmapFontSearch } from '@base/index';
import { PhaserBitmapFontLoad } from '@phaser/index';

export class PhaserBitmapTextLoad implements Phase {
    private phase: Phase;

    constructor(entities: EntityPool, loader: Phaser.Loader) {
        this.phase = new Load(() => {
            new PhaserBitmapFontLoad(loader)
                .load(
                    new BitmapFontSearch()
                        .find(entities)
                );
        });
    }
    id(): PhaseId {
        return this.phase.id();
    }
    execute(): void {
        this.phase.execute();
    }
}