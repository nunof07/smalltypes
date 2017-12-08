import { ConditionConsequentLikePair } from '@main';
import { ConditionConsequentPair } from '@main';
import { final } from '@main';
import { frozen } from '@main';
import { Function } from '@main';
import { ScalarOf } from '@main';

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
