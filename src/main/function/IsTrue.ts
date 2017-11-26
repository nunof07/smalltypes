import { Function } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { BoolLike } from '@main/scalar/index';
import { BoolOf } from '@main/scalar/index';

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
