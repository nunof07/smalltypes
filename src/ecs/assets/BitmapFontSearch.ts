import BitmapFont from './BitmapFont';
import BitmapText from '../components/BitmapText';
import EntityPool from '../core/EntityPool';
import BitmapTextSearch from './BitmapTextSearch';

export default class BitmapFontSearch {
    find(entities: EntityPool): BitmapFont[] {
        return [...new Set(// unique set
            new BitmapTextSearch().find(entities)
                .map(text => text.font())
        )];
    }
}