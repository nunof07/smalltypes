import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Determines if variable is an object.
 */
@final
@frozen
export class IsObject<T> implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Scalar.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Ctor.
     * @param scalar Scalar.
     */
    constructor(scalar: Scalar<T>) {
        this.scalar = scalar;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return typeof this.scalar.value() === 'object';
    }
}
