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
    private callback: () => T;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(callback: () => T) {
        this.callback = callback;
    }

    /**
     * Gets the value.
     */
    public value(): T {
        return this.callback();
    }
}
