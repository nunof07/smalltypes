import Component from './Component';

export default interface Prefab {
    create(): Component[];
}