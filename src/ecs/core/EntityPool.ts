import Entity from './Entity';
import ComponentId from './ComponentId';
import Assemblage from './Assemblage';

export default interface EntityPool {
    create(): Entity;
    createMany(assemblages: Assemblage[]): EntityPool;
    query(components: ComponentId[]): Entity[];
}