import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { Entity } from '@core/index';

export interface Components extends Iterable<Component> {
    attach(component: Component): Components;
    detach(id: ComponentId): Components;
    has(components: ComponentId[]): boolean;
    get<T extends Component>(component: ComponentId): T;
    replace<T extends Component>(
        id: ComponentId,
        callback: (component: T) => Component
    ): Components;
}