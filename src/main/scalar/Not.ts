import { final } from '@main/index';
import { frozen } from '@main/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';

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
