import {
    IsEmpty,
    Scalar,
    ScalarLike,
    Ternary
} from '@main';

/**
 * Value with a fallback.
 */
export class Fallback<T> implements Scalar<T> {
    /**
     * Source.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Ctor.
     * @param value Value.
     * @param fallback Fallback value.
     */
    constructor(value: ScalarLike<T>, fallback: ScalarLike<T>) {
        this.scalar = new Ternary(
            new IsEmpty(value),
            fallback,
            value
        );
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
    public value(): T {
        return this.scalar.value();
    }
}
