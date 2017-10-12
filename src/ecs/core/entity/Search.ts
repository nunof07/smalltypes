import { EntityPool } from '@core/index';

export interface Search<T> {
    find(pool: EntityPool): T[];
}