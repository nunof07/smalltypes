import * as nano from 'nano-ecs';
import Entity from '../core/Entity';
import EntityPool from '../core/EntityPool';
import ComponentId from '../core/ComponentId';
import ComponentRegistry from '../core/ComponentRegistry';
import TypeComponentRegistry from '../core/TypeComponentRegistry';
import NanoEntity from './NanoEntity';

export default class NanoEntityPool implements EntityPool {
    /**
     * Entity manager from nano-ecs.
     * @see https://github.com/noffle/nano-ecs#entity-manager-api
     */
    private nano: any;

    /**
     * Entities hash collection.
     * Keys are entity IDs.
     * Values are entity objects.
     */
    private entities: any;

    private registry: ComponentRegistry;

    public constructor() {
        this.nano = nano();
        this.entities = {};
        this.registry = new TypeComponentRegistry();
    }

    public create(): Entity {
        const entity = this.nano.createEntity();
        this.entities[entity.id] = new NanoEntity(entity, this.registry);

        return this.entities[entity.id];
    }

    public query(components: ComponentId[]): Entity[] {
        const entities = this.nano.queryComponents(
            this.registry.getAll(components)
        );

        return entities.map((entity: any) =>
            this.entities[entity.id]
        );
    }

}