import { Function } from '@main/system/function/index';
import { FunctionLike } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Cached } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Function of several possible types.
 */
@final
@frozen
export class FunctionOf<X, Y> implements Function<X, Y> {
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
