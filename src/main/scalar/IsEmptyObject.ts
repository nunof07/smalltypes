import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Determines if scalar or value is an empty object ({}).
 * Null and undefined do not pass as empty object.
 */
export class IsEmptyObject<T> implements Scalar<boolean> {
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
        const converted: T = this.scalar.value();

        return converted !== null && converted !== undefined && (Object.keys(converted).length === 0 && converted.constructor === Object);
    }
}
