import { EntityPool } from '@core/index';
import { SystemCollection } from '@core/index';

export interface World {
    entities(): EntityPool;
    systems(): SystemCollection;
}