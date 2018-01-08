import {
    Length,
    Scalar
} from '@main';

/**
 * Determines if iterable is empty.
 */
export class IsEmptyIterable<T> implements Scalar<boolean> {
    /**
     * Length of iterable.
     */
    private readonly length: Scalar<number>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: Iterable<T>) {
        this.length = new Length(value);
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
        return this.length.value() === 0;
    }
}
