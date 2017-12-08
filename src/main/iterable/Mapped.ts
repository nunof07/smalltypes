import { Function } from '@main';
import { FunctionLike } from '@main';
import { FunctionOf } from '@main';
import { final } from '@main';
import { frozen } from '@main';

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
    constructor(iterable: Iterable<X>, func: FunctionLike<X, Y>) {
        this.iterable = iterable;
        this.func = new FunctionOf(func);
    }

    /**
     * Iterator.
     */
    public *[Symbol.iterator](): Iterator<Y> {
        for (const item of this.iterable) {
            yield this.func.apply(item);
        }
    }
}
