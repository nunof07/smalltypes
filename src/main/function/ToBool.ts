import { BoolLike } from '@main';
import { ConditionConsequentLikePair } from '@main';
import { final } from '@main';
import { frozen } from '@main';
import { Function } from '@main';
import { FunctionLike } from '@main';
import { FunctionOf } from '@main';
import { ScalarLike } from '@main';
import { ToValue } from '@main';

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
