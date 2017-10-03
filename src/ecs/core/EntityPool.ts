import Entity from './Entity';
import Component from './Component';

export default interface EntityPool {
    create(): Entity;
    query(components: Component[]): Entity[];
}