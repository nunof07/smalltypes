import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Mapped as MappedIterator } from '@main/system/iterator/index';

/**
 * Mapped iterable.
 */
@final
@frozen
export class Mapped<X, Y> implements Iterable<Y> {
    /**
     * Iterable.
     */
    private readonly iterable: Iterable<X>;

    /**
     * Function.
     */
    private readonly func: Function<X, Y>;

    /**
     * Ctor.
     * @param iterable Iterable.
     * @param func Function.
     */
    constructor(iterable: Iterable<X>, func: Function<X, Y>) {
        this.iterable = iterable;
        this.func = func;
    }

    /**
     * Iterator.
     */
    public [Symbol.iterator](): Iterator<Y> {
        return new MappedIterator(this.iterable[Symbol.iterator](), this.func);
    }
}
