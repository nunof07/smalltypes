import { Component } from '../component/index';

export interface Prefab {
    create(): Component[];
}