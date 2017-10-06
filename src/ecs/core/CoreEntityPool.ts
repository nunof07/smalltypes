import EntityPool from './EntityPool';
import Entity from './Entity';
import ComponentId from './ComponentId';
import CoreEntity from './CoreEntity';
import Assemblage from './Assemblage';

export default class CoreEntityPool implements EntityPool {
    private pool: Entity[];

    constructor() {
        this.pool = [];
    }

    private getNewId(): string {
        return this.pool.length + '';
    }

    create(): Entity {
        const entity = new CoreEntity(this.getNewId());
        this.pool.push(entity);

        return entity;
    }

    createMany(assemblages: Assemblage[]): EntityPool {
        assemblages.forEach(assemblage => {
            assemblage.create(this);
        });

        return this;
    }

    entities(): Entity[] {
        return this.pool;
    }

}