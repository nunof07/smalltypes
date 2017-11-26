import { Function } from '@main/system/function/index';
import { FunctionLike } from '@main/system/function/index';
import { FunctionOf } from '@main/system/function/index';
import { ToValue } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { BoolLike } from '@main/system/scalar/index';
import { ConditionConsequentLikePair } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';

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
