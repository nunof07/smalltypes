import { Scalar } from '@main';
import { ScalarLike } from '@main';
import { ScalarOf } from '@main';

/**
 * Ternary operation.
 */
export class Ternary<T> implements Scalar<T> {
    /**
     * Test condition.
     */
    private readonly condition: Scalar<boolean>;

    /**
     * Return when condition is true.
     */
    private readonly consequent: Scalar<T>;

    /**
     * Return when condition is false.
     */
    private readonly alternative: Scalar<T>;

    /**
     * Ctor.
     * @param condition Test condition.
     * @param consequent Return when condition is true.
     * @param alternative Return when condition is false.
     */
    constructor(condition: ScalarLike<boolean>, consequent: ScalarLike<T>, alternative: ScalarLike<T>) {
        this.condition = new ScalarOf(condition);
        this.consequent = new ScalarOf(consequent);
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
        return this.condition.value() ? this.consequent.value() : this.alternative.value();
    }
}
