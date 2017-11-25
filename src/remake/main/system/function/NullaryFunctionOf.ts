import { Function } from '@main/system/function/index';
import { JsFunction } from '@main/system/function/index';
import { NullaryFunction } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Function without arguments.
 */
@final
@frozen
export class NullaryFunctionOf<Y> implements NullaryFunction<Y> {
    /**
     * Function callback.
     */
    private readonly func: Function<undefined, Y>;

    /**
     * Ctor.
     * @param func Function callback.
     */
    constructor(func: () => Y) {
        this.func = new JsFunction(<(input: undefined) => Y>func);
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
