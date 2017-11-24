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
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

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
     * Get the value.
     */
    public value(): boolean {
        return !this.scalar.value();
    }
}
