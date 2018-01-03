import { Limited } from '@main';
import { Scalar } from '@main';

/**
 * First item of iterable.
 */
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
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Gets the value.
     */
    public value(): IteratorResult<T> {
        return this.source[Symbol.iterator]()
            .next();
    }
}
