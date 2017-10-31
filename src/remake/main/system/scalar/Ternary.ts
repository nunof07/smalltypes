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
     * Test condition.
     */
    private condition: Scalar<boolean>;

    /**
     * Return when condition is true.
     */
    private ifTrue: Scalar<T>;

    /**
     * Return when condition is false.
     */
    private otherwise: Scalar<T>;

    /**
     * Ctor.
     * @param condition Test condition.
     * @param ifTrue Return when condition is true.
     * @param otherwise Return when condition is true.
     */
    constructor(condition: Scalar<boolean>, ifTrue: Scalar<T>, otherwise: Scalar<T>) {
        this.condition = condition;
        this.ifTrue = ifTrue;
        this.otherwise = otherwise;
    }

    /**
     * Gets the value.
     */
    public value(): T {
        return this.condition.value() ? this.ifTrue.value() : this.otherwise.value();
    }
}
