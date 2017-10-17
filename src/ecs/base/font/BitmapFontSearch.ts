import { Entities } from '@core/index';
import { Entity } from '@core/index';
import { Search } from '@core/index';
import { BitmapTextComponent } from '@core/index';
import { BitmapFont } from '@core/index';
import { ComponentSearch } from '@base/entity/index';
import { BaseBitmapText } from '@base/text/index';

export class BitmapFontSearch implements Search<Entities, BitmapFont> {
    private search: ComponentSearch<BitmapTextComponent>;

    constructor(search: ComponentSearch<BitmapTextComponent> = new ComponentSearch<BitmapTextComponent>(BaseBitmapText.ID)) {
        this.search = search;
    }
    find(entities: Entities): BitmapFont[] {
        return Array.from(
            new Set(// unique set
                this.search.find(entities)
                    .map(text => text.font())
            )
        );
    }
}