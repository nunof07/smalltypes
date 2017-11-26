import { Function } from '@main/function/index';

/**
 * Function without arguments.
 */
export interface NullaryFunction<Y> extends Function<undefined, Y> {
    /**
     * Apply the function.
     */
    apply(): Y;
}
