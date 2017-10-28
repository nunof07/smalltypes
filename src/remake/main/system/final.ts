import { IllegalInheritanceException } from '@main/system/index';

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
                throw new IllegalInheritanceException('Cannot inherit from final class');
            }
            super(...args);
        }
    };
}
