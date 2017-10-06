import { EntityPool } from '../core/index';
import { Search } from '../core/index';
import { ComponentSearch } from '../base/index';
import BitmapFont from './BitmapFont';
import BitmapText from './BitmapText';
import BitmapTextSearch from './BitmapTextSearch';

export default class BitmapFontSearch implements Search<BitmapFont> {
    private search: ComponentSearch<BitmapText>;

    constructor(search: ComponentSearch<BitmapText> = new BitmapTextSearch()) {
        this.search = search;
    }

    find(pool: EntityPool): BitmapFont[] {
        return [...new Set(// unique set
            this.search.find(pool)
                .map(text => text.font())
        )];
    }
}