import {
    IsBlank,
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Determines if scalar or value is not null and not undefined.
 */
export class IsNotBlank<T> implements Scalar<boolean> {
    /**
     * Scalar.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.scalar = new ScalarOf(value);
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
        return !(new IsBlank(this.scalar).value());
    }
}
