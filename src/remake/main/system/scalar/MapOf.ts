import { Function } from '@main/system/function/index';
import { FunctionOf } from '@main/system/function/index';
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
    private readonly entries: Iterable<Z>;

    /**
     * Function to get key value entry.
     */
    private readonly getEntry: Function<Z, [K, V]>;

    /**
     * Ctor.
     * @param entries Items.
     * @param getEntry Function to get key value entry.
     */
    constructor(entries: Iterable<Z>, getEntry: Function<Z, [K, V]>)
    /**
     * Ctor.
     * @param entries Items.
     * @param getEntry JavaSript function to get key value entry.
     */
    constructor(entries: Iterable<Z>, getEntry: (input: Z) => [K, V])
    /**
     * Ctor.
     * @param entries Items.
     * @param getEntry Function or standard JavaScript function to get key value entry.
     */
    constructor(entries: Iterable<Z>, getEntry: Function<Z, [K, V]> | ((input: Z) => [K, V])) {
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
