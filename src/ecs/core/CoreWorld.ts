import World from './World';
import EntityPool from './EntityPool';
import SystemCollection from './SystemCollection';

export default class CoreWorld implements World {
    private entities: EntityPool;
    private systems: SystemCollection;

    public constructor(entities: EntityPool, systems: SystemCollection) {
        this.entities = entities;
        this.systems = systems;
    }

    public initialize(): void {
        this.systems.initialize(this.entities);
    }

    process(): void {
        this.systems.process(this.entities);
    }

}