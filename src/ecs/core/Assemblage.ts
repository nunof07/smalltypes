import Entity from './Entity';

export default interface Assemblage {
    create(): Entity;
}