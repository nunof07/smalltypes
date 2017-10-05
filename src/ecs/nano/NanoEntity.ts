import Entity from '../core/Entity';
import Component from '../core/Component';
import ComponentId from '../core/ComponentId';
import ComponentRegistry from '../core/ComponentRegistry';

export default class NanoEntity implements Entity {
    /**
     * Entity created from nano-ecs.
     * @see https://github.com/noffle/nano-ecs#entity-api
     */
    private entity: any;

    private registry: ComponentRegistry;

    /**
     * 
     * @param entity Entity created from nano-ecs.
     */
    constructor(entity: any, registry: ComponentRegistry) {
        this.entity = entity;
        this.registry = registry;
    }

    public id(): string {
        return this.entity.id;
    }

    public attach(component: Component): void {
        this.registry.add(component);
        this.entity.addComponent(component);
    }

    public has(components: ComponentId[]): boolean {
        return this.entity.hasAllComponents(
            this.registry.getAll(components)
        );
    }

    public get(component: ComponentId): Component {
        return this.entity[component.get()];
    }
}