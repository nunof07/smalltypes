import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { DoneIteratorResult } from '@main/system/iterator/index';
import { ValuedIteratorResult } from '@main/system/iterator/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Filtered iterator.
 */
@final
@frozen
export class Filtered<T> implements Iterator<T> {
    /**
     * Iterator.
     */
    private readonly iterator: Iterator<T>;

    /**
     * Function.
     */
    private readonly filter: Function<T, boolean>;

    /**
     * Ctor.
     * @param iterator Iterator.
     * @param func Function.
     */
    constructor(iterator: Iterator<T>, filter: Function<T, boolean>) {
        this.iterator = iterator;
        this.filter = filter;
    }

    /**
     * Next result.
     * @param value
     */
    // tslint:disable-next-line:no-any
    public next(value?: any): IteratorResult<T> {
        let result: Scalar<IteratorResult<T>> = new DoneIteratorResult<T>();
        let next: IteratorResult<T> = this.iterator.next(value);

        while (!next.done) {
            if (this.filter.apply(next.value)) {
                result = new ValuedIteratorResult(next.value);
                break;
            }
            next = this.iterator.next(value);
        }

        return result.value();
    }
}
