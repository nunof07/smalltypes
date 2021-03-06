import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Limited iterable.
 */
export class Limited<T> implements Iterable<T> {
    /**
     * Iterable.
     */
    private readonly iterable: Iterable<T>;

    /**
     * Function.
     */
    private readonly limit: Scalar<number>;

    /**
     * Ctor.
     * @param iterable Iterable.
     * @param number Limit.
     */
    constructor(iterable: Iterable<T>, limit: ScalarLike<number>) {
        this.iterable = iterable;
        this.limit = new ScalarOf(limit);
    }

    /**
     * Iterator.
     */
    public *[Symbol.iterator](): Iterator<T> {
        let count: number = 0;

        for (const item of this.iterable) {
            if (count >= this.limit.value()) {
                break;
            }
            yield item;
            count += 1;
        }
    }
}
