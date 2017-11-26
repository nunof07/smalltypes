import { final } from '@main/index';
import { frozen } from '@main/index';
import { Limited } from '@main/iterable/index';
import { Scalar } from '@main/scalar/index';

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
