import {
    FunctionLike,
    FunctionOf,
    UnaryFunction
} from '@main';

/**
 * Function that caches results.
 */
export class Memoized<X, Y> implements UnaryFunction<X, Y> {
    /**
     * Function callback.
     */
    private readonly func: UnaryFunction<X, Y>;

    /**
     * Results map.
     */
    private readonly cache: Map<X, Y>;

    /**
     * Ctor.
     * @param func Function callback.
     */
    constructor(func: FunctionLike<X, Y>) {
        this.func = new FunctionOf(func);
        this.cache = new Map();
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
        if (!this.cache.has(input)) {
            this.cache.set(input, this.func.apply(input));
        }

        return <Y>this.cache.get(input);
    }
}
