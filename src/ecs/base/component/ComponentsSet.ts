import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { Components } from '@core/index';
import { ComponentDuplicateError } from '@base/component/index';
import { ComponentNotFoundError } from '@base/component/index';
import { Entity } from '@core/index';
import { MapOf } from '@system/index';

export class ComponentsSet implements Components {
    private map: Map<ComponentId, Component>;

    constructor(components: Map<ComponentId, Component> | Component[] = new Map()) {
        this.map = components instanceof Map ?
            components :
            new MapOf(components,
                component => [component.id(), component]
            );
    }
    attach(component: Component): Components {
        if (this.map.has(component.id())) {
            throw new ComponentDuplicateError();
        }
        this.map.set(component.id(), component);

        return this;
    }
    detach(id: ComponentId): Components {
        this.map.delete(id);

        return this;
    }
    has(components: ComponentId[]): boolean {
        return components.every(id => this.map.has(id));
    }
    get<T extends Component>(component: ComponentId): T {
        if (!this.map.has(component)) {
            throw new ComponentNotFoundError();
        }

        return this.map.get(component) as T;
    }
    replace<T extends Component>(
        id: ComponentId,
        callback: (component: T) => Component
    ): Components {
        return this.attach(
            callback(
                this.get<T>(id)
            )
        ).detach(id);
    }
    [Symbol.iterator](): Iterator<Component> {
        return this.map.values();
    }
}