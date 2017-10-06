import { EntityId } from '../core/index';

export default class BaseEntityId implements EntityId {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    get(): string {
        return this.id;
    }
}