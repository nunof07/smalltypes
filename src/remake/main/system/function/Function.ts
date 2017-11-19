/**
 * Function.
 */
export interface Function<X, Y> {
    /**
     * Type determinant.
     */
    '@@__IS_SYSTEM_FUNCTION__@@': true;

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    apply(input: X): Y;
}
