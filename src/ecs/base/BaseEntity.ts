import { Entity } from '../core/index';
import { EntityId } from '../core/index';
import { Component } from '../core/index';
import { ComponentId } from '../core/index';
import ComponentNotFoundError from './ComponentNotFoundError';
import ComponentDuplicateError from './ComponentDuplicateError';

export default class BaseEntity implements Entity {
    private entityId: EntityId;
    private components: Map<ComponentId, Component>;

    constructor (
        id: EntityId,
        components: Map<ComponentId, Component> = new Map()
    ) {
        this.components = components;
        this.entityId = id;
    }

    id(): EntityId {
        return this.entityId;
    }

    attach(component: Component): Entity {
        if (this.components.has(component.id())) {
            throw new ComponentDuplicateError();
        }
        this.components.set(component.id(), component);

        return this;
    }

    attachMany(components: Component[]): Entity {
        components.forEach(component => {
            this.attach(component);
        });

        return this;
    }

    has(components: ComponentId[]): boolean {
        return components.every(id => this.components.has(id));
    }

    get<T extends Component>(component: ComponentId): T {
        if (!this.components.has(component)) {
            throw new ComponentNotFoundError();
        }

        return this.components.get(component) as T;
    }

}