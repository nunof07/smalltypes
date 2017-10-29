import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Cached scalar.
 */
@final
@frozen
export class Cached<T> implements Scalar<T> {
    /**
     * Source.
     */
    private source: Scalar<T>;

    /**
     * Source value.
     */
    private result: T;

    /**
     * Whether {@link result} is cached.
     */
    private isCached: boolean;

    /**
     * Ctor.
     * @param scalar Scalar.
     */
    constructor(scalar: Scalar<T>) {
        this.source = scalar;
        this.isCached = false;
    }

    /**
     * Get the value.
     */
    public value(): T {
        if (!this.isCached) {
            this.result = this.source.value();
            this.source = null; // lose source, no longer need it
            this.isCached = true;
        }

        return this.result;
    }
}
