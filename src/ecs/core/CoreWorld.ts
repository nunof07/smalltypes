import World from './World';
import EntityPool from './EntityPool';
import SystemCollection from './SystemCollection';

export default class CoreWorld implements World {
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

    finish(): World {
        this.systems.finish(this.entities);
        return this;
    }
}