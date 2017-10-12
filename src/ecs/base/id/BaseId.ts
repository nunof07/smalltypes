import { Id } from '@core/index';

export class BaseId implements Id {
    private id: string;

    constructor(id: Id | string | number) {
        this.id = (id instanceof Object) ?
            (id as Id).print() :
            id + '';
    }

    print(): string {
        return this.id;
    }
}