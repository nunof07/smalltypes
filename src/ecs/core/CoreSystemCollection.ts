import SystemCollection from './SystemCollection';
import System from './System';
import EntityPool from './EntityPool';
import Entity from './Entity';

export default class CoreSystemCollection implements SystemCollection {
    private systems: System[];

    constructor() {
        this.systems = [];
    }

    register(system: System): SystemCollection {
        this.systems.push(system);

        return this;
    }

    registerMany(systems: System[]): SystemCollection {
        systems.forEach(system => {
            this.register(system);
        });

        return this;
    }

    initialize(entities: EntityPool): SystemCollection {
        this.systems.forEach(system => {
            system.initialize(entities);
        });

        return this;
    }

    start(entities: EntityPool): SystemCollection {
        this.systems.forEach(system => {
            system.start(entities);
        });

        return this;
    }

    process(entities: EntityPool): SystemCollection {
        this.systems.forEach(system => {
            system.process(entities);
        });

        return this;
    }

    finish(entities: EntityPool): SystemCollection {
        this.systems.forEach(system => {
            system.finish(entities);
        });

        return this;
    }
}