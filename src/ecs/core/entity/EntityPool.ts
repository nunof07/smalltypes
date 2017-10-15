import { ComponentPool } from '@core/index';
import { Prefab } from '@core/index';
import { Entity } from '@core/index';

export interface EntityPool {
    create(components?: ComponentPool): Entity;
    createMany(prefabs: Prefab[]): EntityPool;
    entities(): Entity[];
}