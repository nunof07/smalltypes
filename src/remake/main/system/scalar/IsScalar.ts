import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { And } from '@main/system/scalar/index';
import { IsNotBlank } from '@main/system/scalar/index';
import { IsObject } from '@main/system/scalar/index';
import { ResultOf } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
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
        this.isScalar = new And(
            new IsNotBlank(new ScalarOf(maybeScalar)),
            new IsObject(new ScalarOf(maybeScalar)),
            new ResultOf((): boolean => {
                return (<ScalarType><Object>maybeScalar)['@@__IS_SYSTEM_SCALAR__@@'] === true;
            })
        );
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isScalar.value();
    }
}
