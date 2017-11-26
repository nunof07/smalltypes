import { Function } from '@main/function/index';
import { FunctionLike } from '@main/function/index';
import { FunctionOf } from '@main/function/index';
import { ToValue } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { BoolLike } from '@main/scalar/index';
import { ConditionConsequentLikePair } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';

/**
 * Converts boolean-like types to boolean.
 */
@final
@frozen
export class ToBool<T> implements Function<BoolLike<T>, boolean> {
    /**
     * Function to convert scalar-like booleans to boolean primitives.
     */
    private readonly toValue: Function<ScalarLike<boolean>, boolean>;

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
