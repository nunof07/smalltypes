import { final } from '@main';
import { frozen } from '@main';
import { FunctionLike } from '@main';
import { Cached } from '@main';
import { Scalar } from '@main';
import { UnaryFunction } from '@main';

/**
 * Function of several possible types.
 */
@final
@frozen
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
        this.func = new Cached((): ((input: X) => Y) =>
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
