import { EntityPool } from '../core/index';
import { SystemCollection } from '../core/index';
import { World } from '../core/index';


export default class BaseWorld implements World {
    private entities: EntityPool;
    private systems: SystemCollection;

    constructor(entities: EntityPool, systems: SystemCollection) {
        this.entities = entities;
        this.systems = systems;
    }

    initialize(): World {
        this.systems.initialize(this.entities);
        return this;
    }

    start(): World {
        this.systems.start(this.entities);
        return this;
    }

    process(): World {
        this.systems.process(this.entities);
        return this;
    }
}