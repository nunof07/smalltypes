import { IsTrue } from '@main/function/index';
import { ToConditionConsequentPair } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { Filtered } from '@main/iterable/index';
import { First } from '@main/iterable/index';
import { Mapped } from '@main/iterable/index';
import { ConditionConsequentLikePair } from '@main/scalar/index';
import { ConditionConsequentPair } from '@main/scalar/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';

/**
 * Conditional scalar.
 */
@final
@frozen
export class Conditioned<T> implements Scalar<T> {
    /**
     * Condition/consequent pairs.
     */
    private readonly firstConditionConsequent: Scalar<IteratorResult<ConditionConsequentPair<T>>>;

    /**
     * Fallback value when all conditions are false.
     */
    private readonly alternative: Scalar<T>;

    /**
     * Ctor.
     *
     * @param alternative Fallback value when all conditions are false.
     * @param conditionConsequents Condition/consequent pairs.
     */
    constructor(alternative: ScalarLike<T>, ...conditionConsequents: ConditionConsequentLikePair<T>[]) {
        this.firstConditionConsequent =
            new First(
                new Filtered(
                    new Mapped(conditionConsequents, new ToConditionConsequentPair<T>()),
                    new IsTrue()
                )
            );
        this.alternative = new ScalarOf(alternative);
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Gets the value.
     */
    public value(): T {
        const first: IteratorResult<ConditionConsequentPair<T>> = this.firstConditionConsequent.value();

        return !first.done ? first.value[1].value() : this.alternative.value();
    }
}
