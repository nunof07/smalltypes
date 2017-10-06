import BitmapText from '../components/BitmapText';
import EntityPool from '../core/EntityPool';
import Search from '../core/Search';
import EntitySearch from '../core/EntitySearch';
import ComponentSearch from '../core/ComponentSearch';

export default class BitmapTextSearch extends ComponentSearch<BitmapText> {
    constructor(entitySearch: EntitySearch = new EntitySearch(BitmapText.ID)) {
        super(BitmapText.ID, entitySearch);
    }
}