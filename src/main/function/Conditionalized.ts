import { final } from '@main';
import { frozen } from '@main';
import { Function } from '@main';
import { FunctionLike } from '@main';
import { FunctionOf } from '@main';

/**
 * Function that executes conditionally.
 */
@final
@frozen
export class Conditionalized<X> implements Function<X, void> {
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
