import { Function } from '@main/function/index';
import { FunctionLike } from '@main/function/index';
import { FunctionOf } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';

/**
 * Function that executes conditionally.
 */
@final
@frozen
export class Conditioned<X> implements Function<X, void> {
    /**
     * Condition.
     */
    private readonly condition: Function<X, boolean>;

    /**
     * Function.
     */
    private readonly func: Function<X, void>;

    /**
     * Ctor.
     * @param condition Condition.
     * @param func Function.
     */
    constructor(condition: FunctionLike<X, boolean>, func: FunctionLike<X, void>) {
        this.condition = new FunctionOf(condition);
        this.func = new FunctionOf(func);
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
    public apply(input: X): void {
        if (this.condition.apply(input)) {
            this.func.apply(input);
        }
    }
}
