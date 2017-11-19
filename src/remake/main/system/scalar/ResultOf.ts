import { Function } from '@main/system/function/index';
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
     * Callback.
     */
    private readonly func: Function<undefined, T>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(func: Function<undefined, T> | (() => T)) {
        this.func = func;
    }

    /**
     * Gets the value.
     */
    public value(): T {
        return this.func.apply(undefined);
    }
}
