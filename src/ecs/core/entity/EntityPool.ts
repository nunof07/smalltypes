import { Component } from '../component/index';
import { Prefab } from '../prefab/index';
import { Entity } from './Entity';

export interface EntityPool {
    create(components?: Component[]): Entity;
    createMany(prefabs: Prefab[]): EntityPool;
    entities(): Entity[];
}