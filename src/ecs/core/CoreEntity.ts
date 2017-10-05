import Entity from './Entity';
import Component from './Component';
import ComponentId from './ComponentId';
import ComponentNotFoundError from './ComponentNotFoundError';
import ComponentDuplicateError from './ComponentDuplicateError';

export default class CoreEntity implements Entity {
    private entityId: string;
    private components: Map<ComponentId, Component>;

    constructor (id: string) {
        this.components = new Map();
        this.entityId = id;
    }

    id(): string {
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

    get(component: ComponentId): Component {
        if (this.components.has(component)) {
            throw new ComponentNotFoundError();
        }

        return this.components.get(component);
    }

}