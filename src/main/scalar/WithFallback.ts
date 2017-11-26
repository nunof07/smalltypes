import { final } from '@main/index';
import { frozen } from '@main/index';
import { IsBlank } from '@main/scalar/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';
import { Ternary } from '@main/scalar/index';

/**
 * Cached scalar.
 */
@final
@frozen
export class WithFallback<T> implements Scalar<T> {
    /**
     * Source.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Ctor.
     * @param value Value.
     * @param fallback Fallback value.
     */
    constructor(value: ScalarLike<T>, fallback: ScalarLike<T>) {
        this.scalar = new Ternary(
            new IsBlank(value),
            new ScalarOf(fallback),
            new ScalarOf(value)
        );
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): T {
        return this.scalar.value();
    }
}
