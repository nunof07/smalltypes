import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Function of arrow function.
 */
@final
@frozen
export class FunctionOf<X, Y> implements Function<X, Y> {
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
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: X): Y {
        return this.func(input);
    }
}
