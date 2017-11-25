import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Determines if variable is an object.
 */
@final
@frozen
export class IsObject<T> implements Scalar<boolean> {
    /**
     * Scalar.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.scalar = new ScalarOf(value);
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
        return typeof this.scalar.value() === 'object';
    }
}
