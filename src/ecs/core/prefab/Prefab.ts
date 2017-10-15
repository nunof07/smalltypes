import { ComponentPool } from '@core/index';

export interface Prefab {
    create(): ComponentPool;
}