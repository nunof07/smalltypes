import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { ConditionConsequentLikePair } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Boolean of different possible inputs.
 */
@final
@frozen
export class BoolOf<T> implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Returns value.
     */
    private readonly bool: () => Scalar<boolean>;

    /**
     * Ctor.
     * @param value Boolean-like value.
     */
    constructor(value: ScalarLike<boolean> | ConditionConsequentLikePair<T>) {
        this.bool = (): Scalar<boolean> => {
            const isConditionConsequentLikePair: boolean = (Array.isArray(value) && value.length === 2);

            return new ScalarOf(
                isConditionConsequentLikePair ?
                (<ConditionConsequentLikePair<T>>value)[0] :
                <ScalarLike<boolean>>value
            );
        };
    }

    /**
     * Gets the value.
     */
    public value(): boolean {
        return this.bool().value();
    }
}
