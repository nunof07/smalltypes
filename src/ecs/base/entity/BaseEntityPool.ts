import { Entity } from '@core/index';
import { EntityId } from '@core/index';
import { EntityPool } from '@core/index';
import { Prefab } from '@core/index';
import { Components } from '@core/index';
import { BaseEntity } from '@base/entity/index';
import { BaseEntityId } from '@base/entity/index';
import { StringOf } from '@system/index';

export class BaseEntityPool implements EntityPool {
    private pool: Entity[];

    constructor(entities: Entity[] = []) {
        this.pool = entities;
    }
    private getNewId(): EntityId {
        return new BaseEntityId(new StringOf(this.pool.length));
    }
    create(components?: Components): Entity {
        const entity = new BaseEntity(this.getNewId(), components);
        this.pool.push(entity);

        return entity;
    }
    createMany(prefabs: Prefab<Components>[]): EntityPool {
        prefabs.forEach(prefab => {
            this.create(
                prefab.create()
            );
        });

        return this;
    }
    entities(): Entity[] {
        return this.pool;
    }

}