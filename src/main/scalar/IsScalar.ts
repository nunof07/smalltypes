import {
    HasTrueResult,
    Scalar,
    UnaryFunction
} from '@main';

/**
 * Determines if variable is of type {@link Scalar}.
 */
export class IsScalar<T> implements Scalar<boolean> {
    /**
     * Check if function with true result exists.
     */
    private readonly hasTrueResult: UnaryFunction<T, boolean>;

    /**
     * Variable to check.
     */
    private readonly maybeScalar: T;

    /**
     * Ctor.
     * @param maybeScalar Variable to check.
     * @param hasTrueResult Check if function with true result exists.
     */
    constructor(
        maybeScalar: T,
        hasTrueResult: UnaryFunction<T, boolean> = new HasTrueResult('isScalar')
    ) {
        this.hasTrueResult = hasTrueResult;
        this.maybeScalar = maybeScalar;
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
        return this.hasTrueResult.apply(this.maybeScalar);
    }
}
