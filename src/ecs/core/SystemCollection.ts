import System from './System';
import EntityPool from './EntityPool';

export default interface SystemCollection {
    register(system: System): SystemCollection;
    registerMany(systems: System[]): SystemCollection;
    initialize(entities: EntityPool): SystemCollection;
    start(entities: EntityPool): SystemCollection;
    process(entities: EntityPool): SystemCollection;
}