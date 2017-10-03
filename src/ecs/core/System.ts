import Component from './Component';
import Entity from './Entity';

export default interface System {
    components(): Component[];
    process(entity: Entity): void;
    finish(): void;
}