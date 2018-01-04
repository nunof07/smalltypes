import {
    Scalar,
    ScalarLike,
    ToValue,
    UnaryFunction
} from '@main';

/**
 * Scalar of different possible inputs.
 */
export class ScalarOf<T> implements Scalar<T> {
    /**
     * Value.
     */
    private readonly val: ScalarLike<T>;

    /**
     * Function to convert scalar-like types to their respective values.
     */
    private readonly toValue: UnaryFunction<ScalarLike<T>, T>;

    /**
     * Ctor.
     * @param value Scalar, function that returns value, or value.
     */
    constructor(value: ScalarLike<T>, toValue: UnaryFunction<ScalarLike<T>, T> = new ToValue()) {
        this.val = value;
        this.toValue = toValue;
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
    public value(): T {
        return this.toValue.apply(this.val);
    }
}
