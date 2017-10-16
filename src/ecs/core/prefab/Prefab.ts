import { ComponentPool } from '@core/index';

export interface Prefab<T> {
    create(): T;
}