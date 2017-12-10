import { Conditionalized } from '@main';
import { final } from '@main';
import { frozen } from '@main';
import { FunctionLike } from '@main';
import { IsNotBlank } from '@main';
import { UnaryFunction } from '@main';

/**
 * Function that executes when input is not null or undefined.
 */
@final
@frozen
export class SafeNavigation<X> implements UnaryFunction<X, void> {
    /**
     * Function.
     */
    private readonly func: UnaryFunction<X, void>;

    /**
     * Ctor.
     * @param func Function.
     */
    constructor(func: FunctionLike<X, void>) {
        this.func = new Conditionalized(
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
