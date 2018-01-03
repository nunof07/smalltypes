import { FunctionLike } from '@main';
import { FunctionOf } from '@main';
import { UnaryFunction } from '@main';

/**
 * Function that executes conditionally.
 */
export class Conditionalized<X> implements UnaryFunction<X, void> {
    /**
     * Condition.
     */
    private readonly condition: UnaryFunction<X, boolean>;

    /**
     * Function.
     */
    private readonly func: UnaryFunction<X, void>;

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
