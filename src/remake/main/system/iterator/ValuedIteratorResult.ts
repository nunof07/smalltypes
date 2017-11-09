import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Iterator result with a value;
 */
@final
@frozen
export class ValuedIteratorResult<T> implements Scalar<IteratorResult<T>> {
    /**
     * Value.
     */
    private readonly resultValue: T;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: T) {
        this.resultValue = value;
    }

    /**
     * Get the value.
     */
    public value(): IteratorResult<T> {
        return {
            done: true,
            value: this.resultValue
        };
    }
}
