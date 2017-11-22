import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Conditions } from '@main/system/iterable/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';

/**
 * Logical conjunction operator.
 */
@final
@frozen
export class And implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Conditions.
     */
    private readonly conditions: Iterable<boolean>;

    /**
     * Ctor.
     * @param conditions Conditions.
     */
    constructor(...conditions: ScalarLike<boolean>[]) {
        this.conditions = new Conditions(conditions);
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        for (const condition of this.conditions) {
            if (!condition) {
                return false;
            }
        }

        return true;
    }
}
