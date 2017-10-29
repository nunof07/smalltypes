import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Scalar of value.
 */
@final
@frozen
export class ScalarOf<T> implements Scalar<T> {
    /**
     * Source value.
     */
    private source: T;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: T) {
        this.source = value;
    }

    /**
     * Gets the value.
     */
    public value(): T {
        return this.source;
    }
}
