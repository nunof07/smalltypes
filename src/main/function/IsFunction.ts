import {
    HasTrueResult,
    Scalar,
    UnaryFunction
} from '@main';

/**
 * Determines if variable is of type {@link UnaryFunction}.
 */
export class IsFunction<T> implements Scalar<boolean> {
    /**
     * Check if function with true result exists.
     */
    private readonly hasTrueResult: UnaryFunction<T, boolean>;

    /**
     * Variable to check.
     */
    private readonly maybeFunc: T;

    /**
     * Ctor.
     * @param maybeFunc Variable to check.
     * @param hasTrueResult Check if function with true result exists.
     */
    constructor(
        maybeFunc: T,
        hasTrueResult: UnaryFunction<T, boolean> = new HasTrueResult('isFunction')
    ) {
        this.hasTrueResult = hasTrueResult;
        this.maybeFunc = maybeFunc;
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
        return this.hasTrueResult.apply(this.maybeFunc);
    }
}
