import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { ResultOf } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarType } from '@main/system/scalar/index';

/**
 * Determines if variable is of type {@link Scalar}.
 */
@final
@frozen
export class IsScalar<T> implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Condition.
     */
    private readonly isScalar: Scalar<boolean>;

    /**
     * Ctor.
     * @param maybeScalar Variable to check.
     */
    constructor(maybeScalar: T) {
        this.isScalar = new ResultOf((): boolean =>
            maybeScalar !== null &&
            typeof maybeScalar === 'object' &&
            (<ScalarType><Object>maybeScalar)['@@__IS_SYSTEM_SCALAR__@@'] === true
        );
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isScalar.value();
    }
}
