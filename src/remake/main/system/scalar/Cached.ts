import { Cached as CachedFunction } from '@main/system/function/index';
import { Function } from '@main/system/function/index';
import { FunctionOf } from '@main/system/function/index';
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
     * Function to return result.
     */
    private readonly func: Function<boolean, T>;

    /**
     * Ctor.
     * @param scalar Scalar.
     */
    constructor(scalar: Scalar<T>) {
        this.func = new CachedFunction(
            new FunctionOf((): T =>
                scalar.value()
            ));
    }

    /**
     * Get the value.
     */
    public value(): T {
        return this.func.apply(true);
    }
}
