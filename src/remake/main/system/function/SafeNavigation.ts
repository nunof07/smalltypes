import { Function } from '@main/system/function/index';
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
     * Function.
     */
    private func: Function<X, void>;

    /**
     * Ctor.
     * @param func Function.
     */
    constructor(func: Function<X, void>) {
        this.func = func;
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: X): void {
        if (new IsNotBlank(new ScalarOf(input)).value()) {
            this.func.apply(input);
        }
    }
}
