import { Function } from '@main/function/index';
import { FunctionLike } from '@main/function/index';
import { FunctionOf } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';

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
