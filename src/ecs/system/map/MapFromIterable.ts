import { Scalar } from '@system/scalar/index';

export class MapFromIterable<Z, K, V> implements Scalar<Map<K, V>> {
    private entries: Z[];
    private getKeyValueFn: (z: Z) => [K, V];

    constructor(entries: Z[], getKeyValueFn: (z: Z) => [K, V]) {
        this.entries = entries;
        this.getKeyValueFn = getKeyValueFn;
    }

    value(): Map<K, V> {
        return new Map(
            this.entries.map(entry =>
                this.getKeyValueFn(entry)
            )
        );
    }

}