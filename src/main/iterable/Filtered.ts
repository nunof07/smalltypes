import { final } from '@main';
import { frozen } from '@main';
import { FunctionLike } from '@main';
import { FunctionOf } from '@main';
import { UnaryFunction } from '@main';

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
    private readonly func: UnaryFunction<T, boolean>;

    /**
     * Ctor.
     * @param iterable Iterable.
     * @param func Function.
     */
    constructor(iterable: Iterable<T>, func: FunctionLike<T, boolean>) {
        this.iterable = iterable;
        this.func = new FunctionOf(func);
    }

    /**
     * Iterator.
     */
    public *[Symbol.iterator](): Iterator<T> {
        for (const item of this.iterable) {
            if (this.func.apply(item)) {
                yield item;
            }
        }
    }
}
