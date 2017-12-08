import { final } from '@main';
import { frozen } from '@main';
import { IsBlank } from '@main';
import { Scalar } from '@main';
import { ScalarLike } from '@main';
import { ScalarOf } from '@main';
import { Ternary } from '@main';

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
