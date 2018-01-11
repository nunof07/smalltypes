import {
    FunctionLike,
    FunctionOf,
    ScalarLike,
    ToValue,
    UnaryFunction
} from '@main';

/**
 * Function that executes conditionally.
 */
export class Conditionalized<X> implements UnaryFunction<X, void> {
    /**
     * Condition.
     */
    private readonly condition: UnaryFunction<X, ScalarLike<boolean>>;

    /**
     * Convert to ScalarLike to value.
     */
    private readonly toBool: UnaryFunction<ScalarLike<boolean>, boolean>;

    /**
     * Function.
     */
    private readonly func: UnaryFunction<X, void>;

    /**
     * Ctor.
     * @param condition Condition.
     * @param func Function.
     */
    constructor(
        condition: FunctionLike<X, ScalarLike<boolean>>,
        func: FunctionLike<X, void>,
        toBool: UnaryFunction<ScalarLike<boolean>, boolean> = new ToValue()
    ) {
        this.condition = new FunctionOf(condition);
        this.func = new FunctionOf(func);
        this.toBool = toBool;
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
        if (this.toBool.apply(this.condition.apply(input))) {
            this.func.apply(input);
        }
    }
}
