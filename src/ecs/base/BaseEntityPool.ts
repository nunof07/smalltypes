import { Entity } from '../core/index';
import { EntityId } from '../core/index';
import { EntityPool } from '../core/index';
import { ComponentId } from '../core/index';
import { Assemblage } from '../core/index';
import BaseEntity from './BaseEntity';
import BaseEntityId from './BaseEntityId';

export default class BaseEntityPool implements EntityPool {
    private pool: Entity[];

    constructor() {
        this.pool = [];
    }

    private getNewId(): EntityId {
        return new BaseEntityId(this.pool.length + '');
    }

    create(): Entity {
        const entity = new BaseEntity(this.getNewId());
        this.pool.push(entity);

        return entity;
    }

    createMany(assemblages: Assemblage[]): EntityPool {
        assemblages.forEach(assemblage => {
            assemblage.create(this);
        });

        return this;
    }

    entities(): Entity[] {
        return this.pool;
    }

}