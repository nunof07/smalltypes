import { final } from '@main/index';
import { frozen } from '@main/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';

/**
 * Cached scalar.
 */
@final
@frozen
export class Cached<T> implements Scalar<T> {
    /**
     * Scalar.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Whether {@link scalar} is cached.
     */
    private isCached: boolean;

    /**
     * Cached value from scalar.
     */
    private cache: T;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.scalar = new ScalarOf(value);
        this.isCached = false;
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
        if (!this.isCached) {
            this.cache = this.scalar.value();
            this.isCached = true;
        }

        return this.cache;
    }
}
