import {
    FunctionLike,
    FunctionOf,
    UnaryFunction
} from '@main';

/**
 * Mapped iterable.
 */
export class Mapped<X, Y> implements Iterable<Y> {
    /**
     * Iterable.
     */
    private readonly iterable: Iterable<X>;

    /**
     * Function.
     */
    private readonly func: UnaryFunction<X, Y>;

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
