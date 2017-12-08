import { final } from '@main';
import { frozen } from '@main';
import { IsNull } from '@main';
import { IsUndefined } from '@main';
import { Or } from '@main';
import { Scalar } from '@main';
import { ScalarLike } from '@main';

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
