import { Function } from '@main/function/index';
import { ToValue } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';

/**
 * Scalar of different possible inputs.
 */
@final
@frozen
export class ScalarOf<T> implements Scalar<T> {
    /**
     * Value.
     */
    private readonly val: ScalarLike<T>;

    /**
     * Function to convert scalar-like types to their respective values.
     */
    private readonly toValue: Function<ScalarLike<T>, T>;

    /**
     * Ctor.
     * @param value Scalar, function that returns value, or value.
     */
    constructor(value: ScalarLike<T>, toValue: Function<ScalarLike<T>, T> = new ToValue()) {
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
