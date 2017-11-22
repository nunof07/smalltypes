import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsScalar } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';

/**
 * Scalar of different possible inputs.
 */
@final
@frozen
export class ScalarOf<T> implements Scalar<T> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Returns value.
     */
    private readonly getValue: () => T;

    /**
     * Ctor.
     * @param value Scalar, function that returns value, or value.
     */
    constructor(value: ScalarLike<T>) {
        this.getValue = (): T => {
            if (typeof value === 'function') {
                return value();
            } else if (new IsScalar(value).value()) {
                return (<Scalar<T>>value).value();
            } else {
                return <T>value;
            }
        };
    }

    /**
     * Gets the value.
     */
    public value(): T {
        return this.getValue();
    }
}
