import { Components } from '@core/index';
import { Prefab } from '@core/index';
import { Entity } from '@core/index';

export interface Entities extends Iterable<Entity> {
    create(components?: Components): Entity;
    createMany(prefabs: Prefab<Components>[]): Entities;
    values(): Entity[];
}