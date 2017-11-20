import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsScalar } from '@main/system/scalar/index';
import { ResultOf } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Scalar of value.
 */
@final
@frozen
export class ScalarOf<T> implements Scalar<T> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Source value.
     */
    private readonly source: Scalar<T>;

    /**
     * Ctor.
     * @param scalarOrValue Scalar or value.
     */
    constructor(scalarOrValue: Scalar<T> | T) {
        this.source = new ResultOf((): T =>
            new IsScalar(scalarOrValue).value() ?
            (<Scalar<T>>scalarOrValue).value() :
            <T>scalarOrValue
        );
    }

    /**
     * Gets the value.
     */
    public value(): T {
        return this.source.value();
    }
}
