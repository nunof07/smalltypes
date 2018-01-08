import {
    HasNumberProperty,
    Scalar,
    ScalarLike
} from '@main';

/**
 * Determines if scalar or value has a length property.
 */
export class HasLength<T> implements Scalar<boolean> {
    /**
     * Does it have length?
     */
    private readonly hasLength: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     * @param compared Compared length value.
     */
    constructor(value: ScalarLike<T>, compared: ScalarLike<number>) {
        this.hasLength = new HasNumberProperty(value, 'length', compared);
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.hasLength.value();
    }
}
