import Component from './Component';
import ComponentId from './ComponentId';
import EntityId from './EntityId';

export default interface Entity {
    id(): EntityId;
    attach(component: Component): Entity;
    attachMany(components: Component[]): Entity;
    has(components: ComponentId[]): boolean;
    get(component: ComponentId): Component;
}