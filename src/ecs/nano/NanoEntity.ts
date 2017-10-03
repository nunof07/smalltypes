import Entity from '../core/Entity';
import Component from '../core/Component';
import ComponentId from '../core/ComponentId';

export default class NanoEntity implements Entity {
    /**
     * Entity created from nano-ecs.
     * @see https://github.com/noffle/nano-ecs#entity-api
     */
    private entity: any;

    /**
     * 
     * @param entity Entity created from nano-ecs.
     */
    constructor(entity: any) {
        this.entity = entity;
    }

    public id(): string {
        return this.entity.id;
    }

    public attach(component: Component): void {
        this.entity.addComponent(component);
    }

    public has(components: ComponentId[]): boolean {
        // REDO
        return this.entity.hasAllComponents(
            components.map(component =>
                component.get()
            )
        );
    }

    public get(component: ComponentId): Component {
        return this.entity[component.get()];
    }
}