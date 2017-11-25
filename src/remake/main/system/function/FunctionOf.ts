import { Function } from '@main/system/function/index';
import { IsFunction } from '@main/system/function/index';
import { JsFunction } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Cached } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { Ternary } from '@main/system/scalar/index';

/**
 * Function of several possible types.
 */
@final
@frozen
export class FunctionOf<X, Y> implements Function<X, Y> {
    /**
     * Function callback.
     */
    private readonly func: Scalar<Function<X, Y>>;

    /**
     * Ctor.
     * @param func Function callback.
     */
    constructor(func: Function<X, Y> | ((input: X) => Y)) {
        this.func = new Cached(
            new Ternary(
                new IsFunction(func),
                new ScalarOf(<Function<X, Y>>func),
                new ScalarOf(new JsFunction(<(input: X) => Y>func))
            )
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
        return this.func.value().apply(input);
    }
}
