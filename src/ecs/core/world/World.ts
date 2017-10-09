import { EntityPool } from '../entity/index';
import { SystemCollection } from '../system/index';

export interface World {
    entities(): EntityPool;
    systems(): SystemCollection;
}