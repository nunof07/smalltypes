import { final } from '@main/index';
import { frozen } from '@main/index';
import { IsNull } from '@main/scalar/index';
import { IsUndefined } from '@main/scalar/index';
import { Or } from '@main/scalar/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';

/**
 * Determines if scalar or value is null or undefined.
 */
@final
@frozen
export class IsBlank<T> implements Scalar<boolean> {
    /**
     * Scalar.
     */
    private readonly isBlank: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.isBlank = new Or(
            new IsNull(value),
            new IsUndefined(value)
        );
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
        return this.isBlank.value();
    }
}
