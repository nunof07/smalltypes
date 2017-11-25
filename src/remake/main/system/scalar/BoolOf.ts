import { Function } from '@main/system/function/index';
import { ToBool } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { BoolLike } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Boolean of different possible inputs.
 */
@final
@frozen
export class BoolOf<T> implements Scalar<boolean> {
    /**
     * Boolean.
     */
    private readonly bool: BoolLike<T>;

    /**
     * Function to convert bool-like types to boolean primitive.
     */
    private readonly toBool: Function<BoolLike<T>, boolean>;

    /**
     * Ctor.
     * @param value Boolean-like value.
     */
    constructor(value: BoolLike<T>, toBool: Function<BoolLike<T>, boolean> = new ToBool()) {
        this.bool = value;
        this.toBool = toBool;
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
        return this.toBool.apply(this.bool);
    }
}
