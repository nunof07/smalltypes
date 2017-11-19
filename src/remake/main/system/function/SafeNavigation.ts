import { Conditioned } from '@main/system/function/index';
import { Function } from '@main/system/function/index';
import { FunctionOf } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsNotBlank } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Function that executes when input is not null or undefined.
 */
@final
@frozen
export class SafeNavigation<X> implements Function<X, void> {
    /**
     * Type determinant.
     */
    public '@@__IS_SYSTEM_FUNCTION__@@': true;

    /**
     * Function.
     */
    private readonly func: Function<X, void>;

    /**
     * Ctor.
     * @param func Function.
     */
    constructor(func: Function<X, void>) {
        this.func = new Conditioned(
            new FunctionOf((input: X): boolean =>
                new IsNotBlank(new ScalarOf(input)).value()
            ),
            func
        );
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: X): void {
        this.func.apply(input);
    }
}
