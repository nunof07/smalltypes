import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Limited iterable.
 */
@final
@frozen
export class Limited<T> implements Iterable<T> {
    /**
     * Iterable.
     */
    private readonly iterable: Iterable<T>;

    /**
     * Function.
     */
    private readonly limit: number;

    /**
     * Ctor.
     * @param iterable Iterable.
     * @param number Limit.
     */
    constructor(iterable: Iterable<T>, limit: number) {
        this.iterable = iterable;
        this.limit = limit;
    }

    /**
     * Iterator.
     */
    public *[Symbol.iterator](): Iterator<T> {
        let count: number = 0;

        for (const item of this.iterable) {
            if (count >= this.limit) {
                break;
            }
            yield item;
            count += 1;
        }
    }
}
