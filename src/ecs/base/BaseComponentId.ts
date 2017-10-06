import { ComponentId } from '../core/index';

export default class BaseComponentId implements ComponentId {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    get(): string {
        return this.id;
    }
}