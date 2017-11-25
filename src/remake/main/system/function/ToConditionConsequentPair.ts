import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { ConditionConsequentLikePair } from '@main/system/scalar/index';
import { ConditionConsequentPair } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Function that caches results.
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
