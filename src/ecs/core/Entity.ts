import Component from './Component';

export default interface Entity {
    id(): string;
    attach(component: Component): void;
    has(components: Component[]): boolean;
    get(component: Component): Component;
}