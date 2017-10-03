import System from './System';
import EntityPool from './EntityPool';

export default interface SystemCollection {
    register(system: System): void;
    initialize(entities: EntityPool): void;
    process(entities: EntityPool): void;
}