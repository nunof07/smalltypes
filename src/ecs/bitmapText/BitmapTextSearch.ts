import { EntitySearch } from '../base/index';
import { ComponentSearch } from '../base/index';
import BitmapText from './BitmapText';

export default class BitmapTextSearch extends ComponentSearch<BitmapText> {
    constructor(entitySearch: EntitySearch = new EntitySearch(BitmapText.ID)) {
        super(BitmapText.ID, entitySearch);
    }
}