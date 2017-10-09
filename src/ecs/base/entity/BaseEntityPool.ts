import { Entity } from '../../core/index';
import { EntityId } from '../../core/index';
import { EntityPool } from '../../core/index';
import { Prefab } from '../../core/index';
import { Component } from '../../core/index';
import { ComponentId } from '../../core/index';
import { BaseEntity } from './BaseEntity';
import { BaseEntityId } from './BaseEntityId';

export class BaseEntityPool implements EntityPool {
    private pool: Entity[];

    constructor() {
        this.pool = [];
    }

    private getNewId(): EntityId {
        return new BaseEntityId(this.pool.length + '');
    }

    create(components?: Component[]): Entity {
        const entity = new BaseEntity(
            this.getNewId(),
            new Map(
                components.map(component => [component.id(), component] as [ComponentId, Component])
            )
        );
        this.pool.push(entity);

        return entity;
    }

    createMany(prefabs: Prefab[]): EntityPool {
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