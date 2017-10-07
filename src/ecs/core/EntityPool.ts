import Entity from './Entity';
import Component from './Component';
import Prefab from './Prefab';

export default interface EntityPool {
    create(components?: Component[]): Entity;
    createMany(prefabs: Prefab[]): EntityPool;
    entities(): Entity[];
}