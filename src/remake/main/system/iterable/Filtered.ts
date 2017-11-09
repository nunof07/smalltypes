import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Filtered as FilteredIterator } from '@main/system/iterator/index';

/**
 * Filtered iterable.
 */
@final
@frozen
export class Filtered<T> implements Iterable<T> {
    /**
     * Iterable.
     */
    private readonly iterable: Iterable<T>;

    /**
     * Function.
     */
    private readonly func: Function<T, boolean>;

    /**
     * Ctor.
     * @param iterable Iterable.
     * @param func Function.
     */
    constructor(iterable: Iterable<T>, func: Function<T, boolean>) {
        this.iterable = iterable;
        this.func = func;
    }

    /**
     * Iterator.
     */
    public [Symbol.iterator](): Iterator<T> {
        return new FilteredIterator(this.iterable[Symbol.iterator](), this.func);
    }
}
