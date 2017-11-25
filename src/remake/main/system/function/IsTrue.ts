import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { ConditionConsequentLikePair } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';
import { BoolOf } from '@main/system/scalar/index';

/**
 * Function that caches results.
 */
@final
@frozen
export class IsTrue<T> implements Function<ScalarLike<boolean> | ConditionConsequentLikePair<T>, boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_FUNCTION__@@': true = true;

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: ScalarLike<boolean> | ConditionConsequentLikePair<T>): boolean {
        return new BoolOf(input).value();
    }
}
