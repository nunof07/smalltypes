import { Entity } from '../../core/index';
import { EntityPool } from '../../core/index';
import { Component } from '../../core/index';
import { ComponentId } from '../../core/index';
import { Search } from '../../core/index';

export class EntitySearch implements Search<Entity> {
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