import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Limited } from '@main/system/iterable/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * First item of iterable.
 */
@final
@frozen
export class First<T> implements Scalar<IteratorResult<T>> {
    /**
     * Source value.
     */
    private readonly source: Iterable<T>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: Iterable<T>) {
        this.source = new Limited(value, 1);
    }

    /**
     * Gets the value.
     */
    public value(): IteratorResult<T> {
        return this.source[Symbol.iterator]()
            .next();
    }
}
