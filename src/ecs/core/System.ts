import ComponentId from './ComponentId';
import EntityPool from './EntityPool';

export default interface System {
    components(): ComponentId[];
    initialize(entities: EntityPool): System;
    start(entities: EntityPool): System;
    process(entities: EntityPool): System;
    finish(entities: EntityPool): System;
}