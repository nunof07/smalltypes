import BitmapFont from './BitmapFont';
import BitmapText from '../components/BitmapText';
import EntityPool from '../core/EntityPool';
import Search from '../core/Search';
import ComponentSearch from '../core/ComponentSearch';
import BitmapTextSearch from '../assets/BitmapTextSearch';

export default class BitmapFontSearch implements Search<BitmapFont> {
    private search: BitmapTextSearch;

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