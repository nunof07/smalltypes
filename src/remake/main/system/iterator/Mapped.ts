import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Mapped iterator.
 */
@final
@frozen
export class Mapped<X, Y> implements Iterator<Y> {
    /**
     * Iterator.
     */
    private readonly iterator: Iterator<X>;

    /**
     * Function.
     */
    private readonly func: Function<X, Y>;

    /**
     * Ctor.
     * @param iterator Iterator.
     * @param func Function.
     */
    constructor(iterator: Iterator<X>, func: Function<X, Y>) {
        this.iterator = iterator;
        this.func = func;
    }

    /**
     * Next result.
     * @param value
     */
    // tslint:disable-next-line:no-any
    public next(value?: any): IteratorResult<Y> {
        const iteratorNext: IteratorResult<X> = this.iterator.next(value);

        return {
            done: iteratorNext.done,
            value: this.func.apply(iteratorNext.value)
        };
    }
}
