import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Function of standard JavaScript Function.
 */
@final
@frozen
export class JsFunction<X, Y> implements Function<X, Y> {
    /**
     * Function callback.
     */
    private readonly func: (input: X) => Y;

    /**
     * Ctor.
     * @param func Function callback.
     */
    constructor(func: (input: X) => Y) {
        this.func = func;
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
        return this.func(input);
    }
}
