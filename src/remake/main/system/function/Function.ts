import { FunctionType } from '@main/system/function/index';

/**
 * Function.
 */
export interface Function<X, Y> extends FunctionType {
    /**
     * Apply the function to the input.
     * @param input Input.
     */
    apply(input: X): Y;
}
