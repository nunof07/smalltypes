import { UnaryFunction } from '@main';

/**
 * Function without arguments.
 */
export interface NullaryFunction<Y> extends UnaryFunction<undefined, Y> {
    /**
     * Apply the function.
     */
    apply(): Y;
}
