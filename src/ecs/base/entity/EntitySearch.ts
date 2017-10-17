import { Entity } from '@core/index';
import { Entities } from '@core/index';
import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { Search } from '@core/index';

export class EntitySearch implements Search<Entities, Entity> {
    private ids: ComponentId[];

    constructor(ids: ComponentId[] | ComponentId) {
        this.ids = (ids && ids.constructor === Array) ?
            ids as ComponentId[] :
            [ids as ComponentId];
    }
    find(entities: Entities): Entity[] {
        return Array.from(entities)
            .filter(entity => entity.components().has(this.ids));
    }
}