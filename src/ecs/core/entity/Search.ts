import { EntityPool } from './EntityPool';

export interface Search<T> {
    find(pool: EntityPool): T[];
}