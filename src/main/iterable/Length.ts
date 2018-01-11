import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Length of iterable.
 */
export class Length<T> implements Scalar<number> {
    /**
     * Source value.
     */
    private readonly source: Scalar<Iterable<T>>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<Iterable<T>>) {
        this.source = new ScalarOf(value);
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
        const iterable: Iterable<T> = this.source.value();

        // tslint:disable-next-line:variable-name
        for (const _item of iterable) {
            length += 1;
        }

        return length;
    }
}
