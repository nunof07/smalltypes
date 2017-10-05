import ComponentId from './ComponentId';

export default class CoreComponentId implements ComponentId {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    get(): string {
        return this.id;
    }

}