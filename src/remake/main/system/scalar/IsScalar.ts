import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { HasTrueProperty } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Determines if variable is of type {@link Scalar}.
 */
@final
@frozen
export class IsScalar<T> implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Condition.
     */
    private readonly isScalar: Scalar<boolean>;

    /**
     * Ctor.
     * @param maybeScalar Variable to check.
     */
    constructor(maybeScalar: T) {
        this.isScalar = new HasTrueProperty(maybeScalar, '@@__IS_SYSTEM_SCALAR__@@');
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isScalar.value();
    }
}
