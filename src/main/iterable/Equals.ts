import { final } from '@main';
import { frozen } from '@main';
import { Scalar } from '@main';

/**
 * Iterables equals.
 */
@final
@frozen
export class Equals<T> implements Scalar<boolean> {
    /**
     * Source value.
     */
    private readonly source: Iterable<T>;

    /**
     * Compared value.
     */
    private readonly compared: Iterable<T>;

    /**
     * Ctor.
     * @param source Value.
     * @param compared Compared.
     */
    constructor(source: Iterable<T>, compared: Iterable<T>) {
        this.source = source;
        this.compared = compared;
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Gets the value.
     */
    public value(): boolean {
        let result: boolean = true;
        const sourceIterator: Iterator<T> = this.source[Symbol.iterator]();
        const comparedIterator: Iterator<T> = this.compared[Symbol.iterator]();

        do {
            const sourceNext: IteratorResult<T> = sourceIterator.next();
            const comparedNext: IteratorResult<T> = comparedIterator.next();

            if (sourceNext.done === comparedNext.done) {
                if (sourceNext.value !== comparedNext.value) {
                    result = false;
                } else {
                    if (sourceNext.done) {
                        break;
                    }
                }
            } else {
                result = false;
            }
        } while (result);

        return result;
    }
}
