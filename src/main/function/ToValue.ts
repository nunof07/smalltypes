import { Function } from '@main/function/index';
import { IsFunction } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { IsScalar } from '@main/scalar/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';

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
