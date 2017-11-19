import { FunctionType } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { And } from '@main/system/scalar/index';
import { IsNotBlank } from '@main/system/scalar/index';
import { IsObject } from '@main/system/scalar/index';
import { ResultOf } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Determines if variable is a {@link Function}.
 */
@final
@frozen
export class IsFunction<T> implements Scalar<boolean> {
    /**
     * Condition.
     */
    private readonly isFunction: Scalar<boolean>;

    /**
     * Ctor.
     * @param maybeFunc Variable to check.
     */
    constructor(maybeFunc: T) {
        this.isFunction = new And(
            new IsNotBlank(new ScalarOf(maybeFunc)),
            new IsObject(new ScalarOf(maybeFunc)),
            new ResultOf((): boolean => {
                return (<FunctionType><Object>maybeFunc)['@@__IS_SYSTEM_FUNCTION__@@'] === true;
            })
        );
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isFunction.value();
    }
}
