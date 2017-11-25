/**
 * Scalar.
 */
export interface Scalar<T> {
    /**
     * Type determinant.
     */
    isScalar(): true;

    /**
     * Get the value.
     */
    value(): T;
}
