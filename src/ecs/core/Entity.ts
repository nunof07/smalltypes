import Component from './Component';
import ComponentId from './ComponentId';
import EntityId from './EntityId';

export default interface Entity {
    id(): EntityId;
    attach(component: Component): Entity;
    attachMany(components: Component[]): Entity;
    detach(id: ComponentId): Entity;
    has(components: ComponentId[]): boolean;
    get<T extends Component>(component: ComponentId): T;
}