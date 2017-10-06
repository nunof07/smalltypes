import Search from './Search';
import Component from './Component';
import ComponentId from './ComponentId';
import EntityPool from './EntityPool';
import Entity from './Entity';
import EntitySearch from './EntitySearch';

export default class ComponentSearch<T extends Component> implements Search<T> {
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
            .map(entity => entity.get(this.id) as T);
    }
}