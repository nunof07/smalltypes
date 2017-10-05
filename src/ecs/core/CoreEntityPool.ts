import EntityPool from './EntityPool';
import Entity from './Entity';
import ComponentId from './ComponentId';
import CoreEntity from './CoreEntity';

export default class CoreEntityPool implements EntityPool {
    private entities: Entity[];

    constructor() {
        this.entities = [];
    }

    private getNewId(): string {
        return this.entities.length + '';
    }

    create(): Entity {
        const entity = new CoreEntity(this.getNewId());
        this.entities.push(entity);

        return entity;
    }

    query(components: ComponentId[]): Entity[] {
        return this.entities.filter(entity => {
            return entity.has(components);
        });
    }

}