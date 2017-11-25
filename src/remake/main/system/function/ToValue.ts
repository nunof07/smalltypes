import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsScalar } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';

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
        } else {
            return <T>input;
        }
    }
}
