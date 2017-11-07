import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Function that executes conditionally.
 */
@final
@frozen
export class Conditioned<X> implements Function<X, void> {
    /**
     * Condition.
     */
    private readonly condition: Scalar<boolean>;

    /**
     * Function.
     */
    private readonly func: Function<X, void>;

    /**
     * Ctor.
     * @param condition Condition.
     * @param func Function.
     */
    constructor(condition: Scalar<boolean>, func: Function<X, void>) {
        this.condition = condition;
        this.func = func;
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: X): void {
        if (this.condition.value()) {
            this.func.apply(input);
        }
    }
}
