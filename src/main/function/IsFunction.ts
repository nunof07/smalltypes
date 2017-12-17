import { final } from '@main';
import { frozen } from '@main';
import { HasTrueResult } from '@main';
import { Scalar } from '@main';

/**
 * Determines if variable is of type {@link UnaryFunction}.
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
