import EntityPool from './EntityPool';

export default interface Search<T> {
    find(pool: EntityPool): T[];
}