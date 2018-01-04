import {
    ConditionConsequentLikePair,
    ConditionConsequentPair,
    ScalarOf,
    UnaryFunction
} from '@main';

/**
 * Converts {@link ConditionConsequentLikePair} to {@link ToConditionConsequentPair}.
 */
export class ToConditionConsequentPair<T> implements UnaryFunction<ConditionConsequentLikePair<T>, ConditionConsequentPair<T>> {
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
