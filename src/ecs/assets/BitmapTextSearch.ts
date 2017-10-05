import BitmapText from '../components/BitmapText';
import EntityPool from '../core/EntityPool';

export default class BitmapTextSearch {
    find(entities: EntityPool): BitmapText[] {
        return entities.query([BitmapText.ID])
            .map(entity => entity.get(BitmapText.ID) as BitmapText);
    }
}