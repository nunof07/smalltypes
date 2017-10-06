import ComponentId from './ComponentId';
import EntityPool from './EntityPool';

export default interface System {
    initialize(entities: EntityPool): System;
    start(entities: EntityPool): System;
    process(entities: EntityPool): System;
}