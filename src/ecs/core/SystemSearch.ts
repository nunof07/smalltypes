import SystemCollection from './SystemCollection';

export default interface SystemSearch<T> {
    find(systems: SystemCollection): T[];
}