import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { HasTrueResult } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

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
