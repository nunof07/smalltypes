import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Logical disjunction operator.
 */
@final
@frozen
export class Or implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Conditions.
     */
    private readonly conditions: Iterable<Scalar<boolean>>;

    /**
     * Ctor.
     * @param conditions Conditions.
     */
    constructor(...conditions: Scalar<boolean>[]) {
        this.conditions = conditions;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        for (const condition of this.conditions) {
            if (condition.value()) {
                return true;
            }
        }

        return false;
    }
}
