import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';
import { IsNull } from '@main/system/scalar/index';
import { IsUndefined } from '@main/system/scalar/index';

/**
 * Determines if scalar or value is null or undefined.
 */
@final
@frozen
export class IsBlank<T> implements Scalar<boolean> {
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
        return new IsNull(this.scalar).value() || new IsUndefined(this.scalar).value();
    }
}
