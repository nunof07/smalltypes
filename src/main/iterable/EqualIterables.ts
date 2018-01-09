import { Scalar } from '@main';

/**
 * Compare two iterables for equality.
 */
export class EqualIterables<T> implements Scalar<boolean> {
    /**
     * Source value.
     */
    private readonly source: Iterable<T>;

    /**
     * Compared value.
     */
    private readonly compared: Iterable<T>;

    /**
     * Compare single values from iterables.
     */
    private readonly equals: (source: T, compared: T) => boolean;

    /**
     * Ctor.
     * @param source Value.
     * @param compared Compared.
     * @param equals Compare single values from iterables.
     */
    constructor(
        source: Iterable<T>,
        compared: Iterable<T>,
        equals: (source: T, compared: T) => boolean =
            (sourceItem: T, comparedItem: T): boolean =>
                sourceItem === comparedItem
    ) {
        this.source = source;
        this.compared = compared;
        this.equals = equals;
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

            if (sourceNext.done !== comparedNext.done) {
                // one has finished and the other hasn't
                result = false;
            } else if (sourceNext.done === true) {
                // both have finished
                break;
            } else if (!this.equals(sourceNext.value, comparedNext.value)) {
                // not finished yet but current items are different
                result = false;
            }
        } while (result);

        return result;
    }
}
