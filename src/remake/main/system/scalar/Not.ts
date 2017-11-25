import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Negates a logical condition.
 */
@final
@frozen
export class Not implements Scalar<boolean> {
    /**
     * Scalar.
     */
    private readonly scalar: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<boolean>) {
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
        return !this.scalar.value();
    }
}
