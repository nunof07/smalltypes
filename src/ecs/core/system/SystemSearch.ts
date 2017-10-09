import { SystemCollection } from './SystemCollection';

export interface SystemSearch<T> {
    find(systems: SystemCollection): T[];
}