import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Compare values for equality.
 */
export class Equals<T> implements Scalar<boolean> {
    /**
     * Source value.
     */
    private readonly source: Scalar<T>;

    /**
     * Compared value.
     */
    private readonly compared: Scalar<T>;

    /**
     * Ctor.
     * @param source Value.
     * @param compared Compared.
     */
    constructor(source: ScalarLike<T>, compared: ScalarLike<T>) {
        this.source = new ScalarOf(source);
        this.compared = new ScalarOf(compared);
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
        return this.source.value() === this.compared.value();
    }
}
