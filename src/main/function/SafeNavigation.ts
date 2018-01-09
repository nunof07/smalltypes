import {
    Conditionalized,
    FunctionLike,
    IsNull,
    IsUndefined,
    Not,
    Or,
    UnaryFunction
} from '@main';

/**
 * Function that executes when input is not null or undefined.
 */
export class SafeNavigation<X> implements UnaryFunction<X, void> {
    /**
     * Function.
     */
    private readonly func: UnaryFunction<X, void>;

    /**
     * Ctor.
     * @param func Function.
     */
    constructor(func: FunctionLike<X, void>) {
        this.func = new Conditionalized(
            (input: X): boolean =>
                new Not(
                    new Or(
                        new IsNull(input),
                        new IsUndefined(input)
                    )
                ).value(),
            func
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
    public apply(input: X): void {
        this.func.apply(input);
    }
}
