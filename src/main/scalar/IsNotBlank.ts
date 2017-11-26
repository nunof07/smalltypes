import { final } from '@main/index';
import { frozen } from '@main/index';
import { Scalar } from '@main/scalar/index';
import { IsBlank } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';

/**
 * Determines if scalar or value is not null and not undefined.
 */
@final
@frozen
export class IsNotBlank<T> implements Scalar<boolean> {
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
        return !(new IsBlank(this.scalar).value());
    }
}
