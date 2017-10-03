import nano from 'nano-ecs';
import Entity from '../core/Entity';
import EntityPool from '../core/EntityPool';
import ComponentId from '../core/ComponentId';
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

    public constructor() {
        this.nano = nano();
        this.entities = {};
    }

    public create(): Entity {
        var entity = this.nano.createEntity();
        this.entities[entity.id] = new NanoEntity(entity);

        return this.entities[entity.id];
    }

    public query(components: ComponentId[]): Entity[] {
        // REDO
        var entities = this.nano.queryComponents(components);

        return entities.map(entity =>
            this.entities[entity.id]
        );
    }

}