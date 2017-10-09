import { Component } from '../component/index';
import { ComponentId } from '../component/index';
import { EntityId } from './EntityId';

export interface Entity {
    id(): EntityId;
    attach(component: Component): Entity;
    attachMany(components: Component[]): Entity;
    detach(id: ComponentId): Entity;
    has(components: ComponentId[]): boolean;
    get<T extends Component>(component: ComponentId): T;
}