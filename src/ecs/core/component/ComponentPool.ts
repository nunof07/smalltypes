import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { Entity } from '@core/index';

export interface ComponentPool {
    attach(component: Component): ComponentPool;
    attachMany(components: Component[]): ComponentPool;
    detach(id: ComponentId): ComponentPool;
    has(components: ComponentId[]): boolean;
    get<T extends Component>(component: ComponentId): T;
}