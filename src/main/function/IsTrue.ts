import { BoolLike } from '@main';
import { BoolOf } from '@main';
import { final } from '@main';
import { frozen } from '@main';
import { UnaryFunction } from '@main';

/**
 * Function that caches results.
 */
@final
@frozen
export class IsTrue<T> implements UnaryFunction<BoolLike<T>, boolean> {
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
