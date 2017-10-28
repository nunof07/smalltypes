import { IllegalInheritanceException } from '@main/system/index';

/**
 * Prevents class from behing inherited from.
 * @param target Class.
 */
// tslint:disable-next-line:no-any
export function final<T extends { new (...args: any[]): object }>(target: T): T {
    return class FinalX extends target {
        // tslint:disable-next-line:no-any
        constructor(...args: any[]) {
            if (new.target !== FinalX) {
                throw new IllegalInheritanceException('Cannot inherit from final class');
            }
            super(...args);
        }
    };
}
