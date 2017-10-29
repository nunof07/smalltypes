import { Component } from '@main/core/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Multiple components.
 */
@final
@frozen
export class Components implements Component {
    /**
     * Components.
     */
    private components: Iterable<Component>;

    /**
     * Ctor.
     * @param components Components.
     */
    constructor(components: Iterable<Component>) {
        this.components = components;
    }

    /**
     * Execute.
     */
    public execute(): void {
        for (const component of this.components) {
            component.execute();
        }
    }
}
