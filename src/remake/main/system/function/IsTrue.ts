import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { BoolLike } from '@main/system/scalar/index';
import { BoolOf } from '@main/system/scalar/index';

/**
 * Function that caches results.
 */
@final
@frozen
export class IsTrue<T> implements Function<BoolLike<T>, boolean> {
    /**
     * Type determinant.
     */
    public isFunction(): true {
        return true;
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: BoolLike<T>): boolean {
        return new BoolOf(input).value();
    }
}
