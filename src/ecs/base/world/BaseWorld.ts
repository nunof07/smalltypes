import { Entities } from '@core/index';
import { Systems } from '@core/index';
import { World } from '@core/index';

export class BaseWorld implements World {
    private entityPool: Entities;
    private systemCollection: Systems;

    constructor(entities: Entities, systems: Systems) {
        this.entityPool = entities;
        this.systemCollection = systems;
    }
    entities(): Entities {
        return this.entityPool;
    }
    systems(): Systems {
        return this.systemCollection;
    }
}