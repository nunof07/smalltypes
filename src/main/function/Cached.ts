import { Function } from '@main/function/index';
import { FunctionLike } from '@main/function/index';
import { FunctionOf } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';

/**
 * Function that caches results.
 */
@final
@frozen
export class Cached<X, Y> implements Function<X, Y> {
    /**
     * Function callback.
     */
    private readonly func: Function<X, Y>;

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
