import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { EntityId } from '@core/index';

export interface Entity {
    id(): EntityId;
    attach(component: Component): Entity;
    attachMany(components: Component[]): Entity;
    detach(id: ComponentId): Entity;
    has(components: ComponentId[]): boolean;
    get<T extends Component>(component: ComponentId): T;
}