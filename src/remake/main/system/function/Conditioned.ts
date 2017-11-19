import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Function that executes conditionally.
 */
@final
@frozen
export class Conditioned<X> implements Function<X, void> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_FUNCTION__@@': true = true;

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
    constructor(condition: Function<X, boolean>, func: Function<X, void>) {
        this.condition = condition;
        this.func = func;
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
