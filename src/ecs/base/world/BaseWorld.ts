import { EntityPool } from '../../core/index';
import { SystemCollection } from '../../core/index';
import { World } from '../../core/index';

export class BaseWorld implements World {
    private entityPool: EntityPool;
    private systemCollection: SystemCollection;

    constructor(entities: EntityPool, systems: SystemCollection) {
        this.entityPool = entities;
        this.systemCollection = systems;
    }

    entities(): EntityPool {
        return this.entityPool;
    }

    systems(): SystemCollection {
        return this.systemCollection;
    }
}