import { NullaryFunction } from '@main/system/function/index';
import { NullaryFunctionOf } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Scalar from callback.
 */
@final
@frozen
export class ResultOf<T> implements Scalar<T> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Callback.
     */
    private readonly func: NullaryFunction<T>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(func: () => T) {
        this.func = new NullaryFunctionOf(func);
    }

    /**
     * Gets the value.
     */
    public value(): T {
        return this.func.apply();
    }
}
