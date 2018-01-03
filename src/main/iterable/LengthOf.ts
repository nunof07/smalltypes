import { Scalar } from '@main';

/**
 * Length of iterable.
 */
export class LengthOf<T> implements Scalar<number> {
    /**
     * Source value.
     */
    private readonly source: Iterable<T>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: Iterable<T>) {
        this.source = value;
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
    public value(): number {
        let length: number = 0;

        // tslint:disable-next-line:variable-name
        for (const _item of this.source) {
            length += 1;
        }

        return length;
    }
}
