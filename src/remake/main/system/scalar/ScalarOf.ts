import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsScalar } from '@main/system/scalar/index';
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
     * Returns value.
     */
    private readonly getValue: () => T;

    /**
     * Ctor.
     * @param something Scalar, function that returns value, or value.
     */
    constructor(something: Scalar<T> | (() => T) | T) {
        this.getValue = (): T => {
            if (typeof something === 'function') {
                return something();
            } else if (new IsScalar(something).value()) {
                return (<Scalar<T>>something).value();
            } else {
                return <T>something;
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
