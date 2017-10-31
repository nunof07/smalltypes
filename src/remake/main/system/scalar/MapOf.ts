import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Mapped } from '@main/system/iterable/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Map of iterable and callback.
 */
@final
@frozen
export class MapOf<Z, K, V> implements Scalar<Map<K, V>> {
    /**
     * Items.
     */
    private entries: Iterable<Z>;

    /**
     * Function to get key value entry.
     */
    private getEntry: Function<Z, [K, V]>;

    /**
     * Ctor.
     * @param entries Items.
     * @param getEntry Function to get key value entry.
     */
    constructor(entries: Iterable<Z>, getEntry: Function<Z, [K, V]>) {
        this.entries = entries;
        this.getEntry = getEntry;
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
