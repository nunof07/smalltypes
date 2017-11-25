import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { HasTrueResult } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Determines if variable is of type {@link Scalar}.
 */
@final
@frozen
export class IsScalar<T> implements Scalar<boolean> {
    /**
     * Condition.
     */
    private readonly isScalarType: Scalar<boolean>;

    /**
     * Ctor.
     * @param maybeScalar Variable to check.
     */
    constructor(maybeScalar: T) {
        this.isScalarType = new HasTrueResult(maybeScalar, 'isScalar');
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isScalarType.value();
    }
}
