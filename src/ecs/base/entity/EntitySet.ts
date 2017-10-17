import { Entity } from '@core/index';
import { EntityId } from '@core/index';
import { Entities } from '@core/index';
import { Prefab } from '@core/index';
import { Components } from '@core/index';
import { BaseEntity } from '@base/entity/index';
import { BaseEntityId } from '@base/entity/index';
import { StringOf } from '@system/index';

export class EntitySet implements Entities {
    private x: Entity[];
    private entities: Set<Entity>;

    constructor(entities: Entity[] | Iterable<Entity> = []) {
        this.entities = new Set(entities);
    }
    create(components?: Components): Entity {
        const entity = new BaseEntity(
            new BaseEntityId(new StringOf(this.entities.size)),
            components
        );
        this.entities.add(entity);

        return entity;
    }
    createMany(prefabs: Prefab<Components>[]): Entities {
        prefabs.forEach(prefab => {
            this.create(
                prefab.create()
            );
        });

        return this;
    }
    [Symbol.iterator](): Iterator<Entity> {
        return this.entities.values();
    }
    values(): Entity[] {
        return Array.from(this.entities);
    }
}