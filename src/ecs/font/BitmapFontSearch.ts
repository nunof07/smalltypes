import { EntityPool } from '../core/index';
import { Search } from '../core/index';
import { ComponentSearch } from '../base/index';
import { BitmapTextComponent } from '../text/index';
import { BaseBitmapText } from '../text/index';
import BitmapFont from './BitmapFont';

export default class BitmapFontSearch implements Search<BitmapFont> {
    private search: ComponentSearch<BitmapTextComponent>;

    constructor(search: ComponentSearch<BitmapTextComponent> = new ComponentSearch<BitmapTextComponent>(BaseBitmapText.ID)) {
        this.search = search;
    }

    find(pool: EntityPool): BitmapFont[] {
        return [...new Set(// unique set
            this.search.find(pool)
                .map(text => text.font())
        )];
    }
}