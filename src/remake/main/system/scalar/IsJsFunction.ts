import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Determines if variable is a standard JavaScript function.
 */
@final
@frozen
export class IsJsFunction<T> implements Scalar<boolean> {
    /**
     * Variable to check.
     */
    private readonly val: T;

    /**
     * Ctor.
     * @param val Variable to check.
     */
    constructor(val: T) {
        this.val = val;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return typeof this.val === 'function';
    }
}
