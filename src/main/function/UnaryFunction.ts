/**
 * Function with one argument.
 */
export interface UnaryFunction<X, Y> {
    /**
     * Type determinant.
     */
    isFunction(): true;

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    apply(input: X): Y;
}
