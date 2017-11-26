import { Function } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { ConditionConsequentLikePair } from '@main/scalar/index';
import { ConditionConsequentPair } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';

/**
 * Converts {@link ConditionConsequentLikePair} to {@link ToConditionConsequentPair}.
 */
@final
@frozen
export class ToConditionConsequentPair<T> implements Function<ConditionConsequentLikePair<T>, ConditionConsequentPair<T>> {
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
    public apply(input: ConditionConsequentLikePair<T>): ConditionConsequentPair<T> {
        return [
            new ScalarOf(input[0]),
            new ScalarOf(input[1])
        ];
    }
}
