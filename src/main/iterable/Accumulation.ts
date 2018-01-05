/**
 * Accumulation.
 */
export interface Accumulation<U, T> {
    /**
     * Accumulated value.
     */
    memo(): U;

    /**
     * Current value.
     */
    current(): T;
}
