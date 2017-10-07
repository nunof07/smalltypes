import EntityPool from './EntityPool';
import SystemCollection from './SystemCollection';

export default interface World {
    entities(): EntityPool;
    systems(): SystemCollection;
}