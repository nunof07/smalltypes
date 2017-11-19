import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Logical conjunction operator.
 */
@final
@frozen
export class And implements Scalar<boolean> {
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
            if (!condition.value()) {
                return false;
            }
        }

        return true;
    }
}
