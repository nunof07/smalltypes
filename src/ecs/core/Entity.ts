import Component from './Component';
import ComponentId from './ComponentId';

export default interface Entity {
    id(): string;
    attach(component: Component): Entity;
    attachMany(components: Component[]): Entity;
    has(components: ComponentId[]): boolean;
    get(component: ComponentId): Component;
}