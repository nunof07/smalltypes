import { Search } from '@core/index';
import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { Entities } from '@core/index';
import { EntitySearch } from '@base/entity/index';

export class ComponentSearch<T extends Component> implements Search<Entities, T> {
    private id: ComponentId;
    private entitySearch: EntitySearch;

    constructor(
        id: ComponentId,
        entitySearch: EntitySearch = new EntitySearch(id)
    ) {
        this.id = id;
        this.entitySearch = entitySearch;
    }
    find(entities: Entities): T[] {
        return this.entitySearch.find(entities)
            .map(entity => entity.components().get<T>(this.id));
    }
}