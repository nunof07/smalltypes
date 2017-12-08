import { final } from '@main';
import { frozen } from '@main';
import { Scalar } from '@main';
import { ScalarLike } from '@main';
import { ScalarOf } from '@main';

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
