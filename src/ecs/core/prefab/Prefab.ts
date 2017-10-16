import { Components } from '@core/index';

export interface Prefab<T> {
    create(): T;
}