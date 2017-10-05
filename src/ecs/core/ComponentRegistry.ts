import Component from './Component';
import ComponentId from './ComponentId';

export default interface ComponentRegistry {
    add(component: Component): any;
    get(id: ComponentId): any;
    getAll(ids: ComponentId[]): any[];
}