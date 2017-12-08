import { final } from '@main';
import { frozen } from '@main';
import { Scalar } from '@main';

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
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return typeof this.val === 'function';
    }
}
