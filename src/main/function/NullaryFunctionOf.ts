import {
    FunctionOf,
    NullaryFunction,
    UnaryFunction
} from '@main';

/**
 * Function without arguments.
 */
export class NullaryFunctionOf<Y> implements NullaryFunction<Y> {
    /**
     * Function callback.
     */
    private readonly func: UnaryFunction<undefined, Y>;

    /**
     * Ctor.
     * @param func Function callback.
     */
    constructor(func: () => Y) {
        this.func = new FunctionOf<undefined, Y>(func);
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
    public apply(input?: undefined): Y {
        return this.func.apply(input);
    }
}
