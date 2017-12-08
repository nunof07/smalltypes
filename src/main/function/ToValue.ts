import { final } from '@main';
import { frozen } from '@main';
import { Function } from '@main';
import { IsFunction } from '@main';
import { IsScalar } from '@main';
import { Scalar } from '@main';
import { ScalarLike } from '@main';

/**
 * Converts scalar-like types to their respective values.
 */
@final
@frozen
export class ToValue<T> implements Function<ScalarLike<T>, T> {
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
    public apply(input: ScalarLike<T>): T {
        if (typeof input === 'function') {
            return input();
        } else if (new IsScalar(input).value()) {
            return (<Scalar<T>>input).value();
        } else if (new IsFunction(input).value()) {
            return (<Function<undefined, T>>input).apply(undefined);
        } else {
            return <T>input;
        }
    }
}
