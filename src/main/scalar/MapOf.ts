import { final } from '@main';
import { frozen } from '@main';
import { FunctionLike } from '@main';
import { FunctionOf } from '@main';
import { Mapped } from '@main';
import { Scalar } from '@main';
import { UnaryFunction } from '@main';

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
    private readonly getEntry: UnaryFunction<Z, [K, V]>;

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
