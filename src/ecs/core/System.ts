import ComponentId from './ComponentId';
import Entity from './Entity';

export default interface System {
    components(): ComponentId[];
    initialize(entity: Entity): void;
    process(entity: Entity): void;
}