import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsBlank } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { Ternary } from '@main/system/scalar/index';

/**
 * Cached scalar.
 */
@final
@frozen
export class WithFallback<T> implements Scalar<T> {
    /**
     * Source.
     */
    private scalar: Scalar<T>;

    /**
     * Ctor.
     * @param scalar Scalar.
     * @param fallback Fallback.
     */
    constructor(scalar: Scalar<T>, fallback: Scalar<T>) {
        this.scalar = new Ternary(
            new IsBlank(scalar),
            fallback,
            scalar
        );
    }

    /**
     * Get the value.
     */
    public value(): T {
        return this.scalar.value();
    }
}
