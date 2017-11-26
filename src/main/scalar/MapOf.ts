import { Function } from '@main/function/index';
import { FunctionLike } from '@main/function/index';
import { FunctionOf } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { Mapped } from '@main/iterable/index';
import { Scalar } from '@main/scalar/index';

/**
 * Map of iterable and callback.
 */
@final
@frozen
export class MapOf<Z, K, V> implements Scalar<Map<K, V>> {
    /**
     * Items.
     */
    private readonly entries: Iterable<Z>;

    /**
     * Function to get key value entry.
     */
    private readonly getEntry: Function<Z, [K, V]>;

    /**
     * Ctor.
     * @param entries Items.
     * @param getEntry Function or standard JavaScript function to get key value entry.
     */
    constructor(entries: Iterable<Z>, getEntry: FunctionLike<Z, [K, V]>) {
        this.entries = entries;
        this.getEntry = new FunctionOf(getEntry);
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Gets the value.
     */
    public value(): Map<K, V> {
        return new Map(
            new Mapped(this.entries, this.getEntry)
        );
    }
}
