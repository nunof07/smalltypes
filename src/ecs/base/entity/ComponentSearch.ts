import { Search } from '@core/index';
import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { EntityPool } from '@core/index';
import { Entity } from '@core/index';
import { EntitySearch } from '@base/entity/index';

export class ComponentSearch<T extends Component> implements Search<T> {
    private id: ComponentId;
    private entitySearch: EntitySearch;

    constructor(
        id: ComponentId,
        entitySearch: EntitySearch = new EntitySearch(id)
    ) {
        this.id = id;
        this.entitySearch = entitySearch;
    }

    find(pool: EntityPool): T[] {
        return this.entitySearch.find(pool)
            .map(entity => entity.get<T>(this.id));
    }
}