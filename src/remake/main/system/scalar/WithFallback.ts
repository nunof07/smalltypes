import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsBlank } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Cached scalar.
 */
@final
@frozen
export class WithFallback<T> implements Scalar<T> {
    /**
     * Source.
     */
    private source: Scalar<T>;

    /**
     * Fallback value.
     */
    private fallback: Scalar<T>;

    /**
     * Ctor.
     * @param scalar Scalar.
     * @param fallback Fallback.
     */
    constructor(scalar: Scalar<T>, fallback: Scalar<T>) {
        this.source = scalar;
        this.fallback = fallback;
    }

    /**
     * Get the value.
     */
    public value(): T {
        if (new IsBlank(this.source).value()) {
            return this.fallback.value();
        }

        return this.source.value();
    }
}
