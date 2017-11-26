import { final } from '@main/index';
import { frozen } from '@main/index';
import { HasTrueResult } from '@main/scalar/index';
import { Scalar } from '@main/scalar/index';

/**
 * Determines if variable is of type {@link Function}.
 */
@final
@frozen
export class IsFunction<T> implements Scalar<boolean> {
    /**
     * Condition.
     */
    private readonly isFunction: Scalar<boolean>;

    /**
     * Ctor.
     * @param maybeFunc Variable to check.
     */
    constructor(maybeFunc: T) {
        this.isFunction = new HasTrueResult(maybeFunc, 'isFunction');
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
        return this.isFunction.value();
    }
}
