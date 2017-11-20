import { FunctionType } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { ResultOf } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Determines if variable is of type {@link Function}.
 */
@final
@frozen
export class IsFunction<T> implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Condition.
     */
    private readonly isFunction: Scalar<boolean>;

    /**
     * Ctor.
     * @param maybeFunc Variable to check.
     */
    constructor(maybeFunc: T) {
        this.isFunction = new ResultOf((): boolean =>
            maybeFunc !== null &&
            typeof maybeFunc === 'object' &&
            (<FunctionType><Object>maybeFunc)['@@__IS_SYSTEM_FUNCTION__@@'] === true
        );
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isFunction.value();
    }
}
