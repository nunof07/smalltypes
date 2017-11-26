import { final } from '@main/index';
import { frozen } from '@main/index';
import { Conditions } from '@main/iterable/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';

/**
 * Logical conjunction operator.
 */
@final
@frozen
export class And implements Scalar<boolean> {
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
     * Type determinant.
     */
    public isScalar(): true {
        return true;
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
