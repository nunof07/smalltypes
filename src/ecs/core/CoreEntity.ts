import Entity from './Entity';
import Component from './Component';
import ComponentId from './ComponentId';
import ComponentNotFoundError from './ComponentNotFoundError';

export default class CoreEntity implements Entity {
    private entityId: string;

    /**
     * Hashed collection of components.
     * Key is component id.
     * Value is component object.
     */
    private components: any;

    constructor (id: string) {
        this.components = {};
        this.entityId = id;
    }

    id(): string {
        return this.entityId;
    }

    attach(component: Component): Entity {
        this.components[component.id().get()] = component;
        return this;
    }

    attachMany(components: Component[]): Entity {
        components.forEach(component => {
            this.attach(component);
        });
        return this;
    }

    has(components: ComponentId[]): boolean {
        return components.every(id => {
            return id.get() in this.components;
        });
    }

    get(component: ComponentId): Component {
        if (typeof this.components[component.get()] === 'undefined') {
            throw new ComponentNotFoundError();
        }

        return this.components[component.get()];
    }

}