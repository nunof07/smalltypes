import Entity from './Entity';
import EntityPool from './EntityPool';

export default interface Assemblage {
    create(pool: EntityPool): Entity;
}