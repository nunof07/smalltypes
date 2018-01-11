import {
    ConditionConsequentLikePair,
    ConditionConsequentPair,
    Filtered,
    First,
    Mapped,
    Scalar,
    ScalarLike,
    ScalarOf,
    ToBool,
    ToConditionConsequentPair
} from '@main';

/**
 * Conditional scalar.
 */
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
                    new ToBool()
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
