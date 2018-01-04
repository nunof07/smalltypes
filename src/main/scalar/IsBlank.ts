import {
    IsNull,
    IsUndefined,
    Or,
    Scalar,
    ScalarLike
} from '@main';

/**
 * Determines if scalar or value is null or undefined.
 */
export class IsBlank<T> implements Scalar<boolean> {
    /**
     * Scalar.
     */
    private readonly isBlank: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.isBlank = new Or(
            new IsNull(value),
            new IsUndefined(value)
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
    public value(): boolean {
        return this.isBlank.value();
    }
}
