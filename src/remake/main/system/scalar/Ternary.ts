import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Ternary operation.
 */
@final
@frozen
export class Ternary<T> implements Scalar<T> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

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
    constructor(condition: Scalar<boolean>, consequent: Scalar<T>, alternative: Scalar<T>) {
        this.condition = condition;
        this.consequent = consequent;
        this.alternative = alternative;
    }

    /**
     * Gets the value.
     */
    public value(): T {
        return this.condition.value() ? this.consequent.value() : this.alternative.value();
    }
}
