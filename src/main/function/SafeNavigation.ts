import { Conditioned } from '@main/function/index';
import { Function } from '@main/function/index';
import { FunctionLike } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { IsNotBlank } from '@main/scalar/index';

/**
 * Function that executes when input is not null or undefined.
 */
@final
@frozen
export class SafeNavigation<X> implements Function<X, void> {
    /**
     * Function.
     */
    private readonly func: Function<X, void>;

    /**
     * Ctor.
     * @param func Function.
     */
    constructor(func: FunctionLike<X, void>) {
        this.func = new Conditioned(
            (input: X): boolean => new IsNotBlank(input).value(),
            func
        );
    }

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
    public apply(input: X): void {
        this.func.apply(input);
    }
}
