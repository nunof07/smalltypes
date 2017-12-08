import { ConditionConsequentLikePair } from '@main';
import { ConditionConsequentPair } from '@main';
import { final } from '@main';
import { frozen } from '@main';
import { Filtered } from '@main';
import { First } from '@main';
import { IsTrue } from '@main';
import { Mapped } from '@main';
import { Scalar } from '@main';
import { ScalarLike } from '@main';
import { ScalarOf } from '@main';
import { ToConditionConsequentPair } from '@main';

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
