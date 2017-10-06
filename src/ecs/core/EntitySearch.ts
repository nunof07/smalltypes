import Search from './Search';
import Component from './Component';
import ComponentId from './ComponentId';
import EntityPool from './EntityPool';
import Entity from './Entity';

export default class EntitySearch implements Search<Entity> {
    private ids: ComponentId[];

    constructor(ids: ComponentId[] | ComponentId) {
        this.ids = (ids && ids.constructor === Array) ?
            ids as ComponentId[] :
            [ids as ComponentId];
    }

    find(pool: EntityPool): Entity[] {
        return pool.entities()
            .filter(entity => entity.has(this.ids));
    }
}