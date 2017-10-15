import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { Entity } from '@core/index';

export interface ComponentPool {
    attach(component: Component): ComponentPool;
    detach(id: ComponentId): ComponentPool;
    has(components: ComponentId[]): boolean;
    get<T extends Component>(component: ComponentId): T;
    replace<T extends Component>(
        id: ComponentId,
        callback: (component: T) => Component
    ): ComponentPool;
}