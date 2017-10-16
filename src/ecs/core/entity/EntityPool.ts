import { Components } from '@core/index';
import { Prefab } from '@core/index';
import { Entity } from '@core/index';

export interface EntityPool {
    create(components?: Components): Entity;
    createMany(prefabs: Prefab<Components>[]): EntityPool;
    entities(): Entity[];
}