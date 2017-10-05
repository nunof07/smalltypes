import Component from './Component';
import ComponentId from './ComponentId';
import ComponentRegistry from './ComponentRegistry';

export default class TypeComponentRegistry implements ComponentRegistry {
    /**
     * Stores type information for each component.
     * Key is component id.
     * Value is component type.
     */
    private types: any;

    public constructor() {
        this.types = {};
    }

    public add(component: Component): any {
        var key = component.id().get();
        this.types[key] = component.constructor;
        
        return this.types[key];
    }

    public get(id: ComponentId): any {
        return this.types[id.get()];
    }

    public getAll(ids: ComponentId[]): any[] {
        return ids.map(id => this.get(id));
    }

}