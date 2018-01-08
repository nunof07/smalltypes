import {
    HasNumberProperty,
    Scalar,
    ScalarLike
} from '@main';

/**
 * Determines if scalar or value has a size property.
 */
export class HasSize<T> implements Scalar<boolean> {
    /**
     * Does it have size?
     */
    private readonly hasSize: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     * @param compared Compared length value.
     */
    constructor(value: ScalarLike<T>, compared: ScalarLike<number>) {
        this.hasSize = new HasNumberProperty(value, 'size', compared);
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
        return this.hasSize.value();
    }
}
