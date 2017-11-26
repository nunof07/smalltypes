import { Function } from '@main/function/index';
import { FunctionLike } from '@main/function/index';
import { FunctionOf } from '@main/function/index';
import { ToBool } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { BoolLike } from '@main/scalar/index';
import { Scalar } from '@main/scalar/index';

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
    constructor(value: BoolLike<T>, toBool: FunctionLike<BoolLike<T>, boolean> = new ToBool()) {
        this.bool = value;
        this.toBool = new FunctionOf(toBool);
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
