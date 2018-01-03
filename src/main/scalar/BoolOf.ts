import { BoolLike } from '@main';
import { FunctionLike } from '@main';
import { FunctionOf } from '@main';
import { Scalar } from '@main';
import { ToBool } from '@main';
import { UnaryFunction } from '@main';

/**
 * Boolean of different possible inputs.
 */
export class BoolOf<T> implements Scalar<boolean> {
    /**
     * Boolean.
     */
    private readonly bool: BoolLike<T>;

    /**
     * Function to convert bool-like types to boolean primitive.
     */
    private readonly toBool: UnaryFunction<BoolLike<T>, boolean>;

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
