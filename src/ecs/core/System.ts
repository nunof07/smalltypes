import ComponentId from './ComponentId';
import Entity from './Entity';

export default interface System {
    components(): ComponentId[];
    initialize(entity: Entity): System;
    start(entity: Entity): System;
    process(entity: Entity): System;
    finish(entity: Entity): System;
}