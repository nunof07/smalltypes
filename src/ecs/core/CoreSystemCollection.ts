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

    private run(entities: EntityPool, callback: (system: System, entity: Entity) => void): SystemCollection {
        this.systems.forEach(system => {
            entities.query(system.components())
                .forEach(entity => {
                    callback(system, entity);
                });
        });

        return this;
    }

    initialize(entities: EntityPool): SystemCollection {
        return this.run(entities, (system, entity) => {
            system.initialize(entity);
        });
    }

    start(entities: EntityPool): SystemCollection {
        return this.run(entities, (system, entity) => {
            system.start(entity);
        });
    }

    process(entities: EntityPool): SystemCollection {
        return this.run(entities, (system, entity) => {
            system.process(entity);
        });
    }

    finish(entities: EntityPool): SystemCollection {
        return this.run(entities, (system, entity) => {
            system.finish(entity);
        });
    }
}