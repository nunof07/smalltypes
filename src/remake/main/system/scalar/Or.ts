import { FunctionOf } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Mapped } from '@main/system/iterable/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

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
    constructor(...conditions: ScalarLike<boolean>[]) {
        this.conditions = new Mapped(
            conditions,
            new FunctionOf((input: ScalarLike<boolean>): Scalar<boolean> =>
                new ScalarOf(input)
            )
        );
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
