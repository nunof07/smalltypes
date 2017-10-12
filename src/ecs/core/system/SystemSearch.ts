import { SystemCollection } from '@core/index';

export interface SystemSearch<T> {
    find(systems: SystemCollection): T[];
}