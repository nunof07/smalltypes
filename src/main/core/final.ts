import { IllegalInheritanceError } from '@main';

/**
 * Prevent instances from inherited classes.
 * @param target Class.
 */
// tslint:disable-next-line:no-any
export function final<T extends { new (...args: any[]): object }>(target: T): T {
    return class Final extends target {
        // tslint:disable-next-line:no-any
        constructor(...args: any[]) {
            if (new.target !== Final) {
                throw new IllegalInheritanceError('Cannot inherit from final class');
            }
            super(...args);
        }
    };
}
