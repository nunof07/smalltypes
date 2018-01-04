import {
    HasTrueResult,
    Scalar
} from '@main';

/**
 * Determines if variable is of type {@link Scalar}.
 */
export class IsScalar<T> implements Scalar<boolean> {
    /**
     * Condition.
     */
    private readonly isScalarType: Scalar<boolean>;

    /**
     * Ctor.
     * @param maybeScalar Variable to check.
     */
    constructor(maybeScalar: T) {
        this.isScalarType = new HasTrueResult(maybeScalar, 'isScalar');
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
        return this.isScalarType.value();
    }
}
