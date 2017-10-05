import SystemCollection from './SystemCollection';
import System from './System';
import EntityPool from './EntityPool';
import Entity from './Entity';

export default class CoreSystemCollection implements SystemCollection {
    private systems: System[];

    constructor() {
        this.systems = [];
    }

    register(system: System): void {
        this.systems.push(system);
    }

    private run(entities: EntityPool, callback: (system: System, entity: Entity) => void): void {
        this.systems.forEach(system => {
            const found = entities.query(system.components());
            found.forEach(entity => {
                callback(system, entity);
            });
        });
    }

    initialize(entities: EntityPool): void {
        this.run(entities, (system, entity) => {
            system.initialize(entity);
        });
    }

    process(entities: EntityPool): void {
        this.run(entities, (system, entity) => {
            system.process(entity);
        });
    }
}