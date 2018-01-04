import {
    FunctionLike,
    Scalar,
    ScalarOf,
    UnaryFunction
} from '@main';

/**
 * Function of several possible types.
 */
export class FunctionOf<X, Y> implements UnaryFunction<X, Y> {
    /**
     * Function callback.
     */
    private readonly func: Scalar<(input: X) => Y>;

    /**
     * Ctor.
     * @param func Function callback.
     */
    constructor(func: FunctionLike<X, Y>) {
        this.func = new ScalarOf((): ((input: X) => Y) =>
            typeof func === 'function' ?
            func :
            (input: X): Y => func.apply(input)
        );
    }

    /**
     * Type determinant.
     */
    public isFunction(): true {
        return true;
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: X): Y {
        return this.func.value()(input);
    }
}
