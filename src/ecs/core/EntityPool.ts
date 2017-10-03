import Entity from './Entity';
import ComponentId from './ComponentId';

export default interface EntityPool {
    create(): Entity;
    query(components: ComponentId[]): Entity[];
}