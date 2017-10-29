/**
 * Function.
 */
export interface Function<X, Y> {
    /**
     * Apply the function to the input.
     * @param input Input.
     */
    apply(input: X): Y;
}
