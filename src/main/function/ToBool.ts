import {
    BoolLike,
    ConditionConsequentLikePair,
    FunctionLike,
    FunctionOf,
    ScalarLike,
    ToValue,
    UnaryFunction
} from '@main';

/**
 * Converts boolean-like types to boolean.
 */
export class ToBool<T> implements UnaryFunction<BoolLike<T>, boolean> {
    /**
     * Function to convert scalar-like booleans to boolean primitives.
     */
    private readonly toValue: UnaryFunction<ScalarLike<boolean>, boolean>;

    /**
     * Ctor.
     * @param toValue Function to convert scalar-like booleans to boolean primitives.
     */
    constructor(toValue: FunctionLike<ScalarLike<boolean>, boolean> = new ToValue()) {
        this.toValue = new FunctionOf(toValue);
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
    public apply(input: BoolLike<T>): boolean {
        const isConditionConsequentLikePair: boolean = (Array.isArray(input) && input.length === 2);

        return this.toValue.apply(
            isConditionConsequentLikePair ?
            (<ConditionConsequentLikePair<T>>input)[0] :
            <ScalarLike<boolean>>input
        );
    }
}
