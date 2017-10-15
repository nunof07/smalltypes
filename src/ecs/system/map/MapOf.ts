
import { MapFromIterable } from '@system/map/index';
import { Scalar } from '@system/scalar/index';
import { StickyScalar } from '@system/scalar/index';

export class MapOf<Z, K, V> implements Map<K, V> {
    private map: Scalar<Map<K, V>>;

    constructor(entries: MapFromIterable<Z, K, V> | Z[], getKeyValueFn?: (z: Z) => [K, V]) {
        this.map =  new StickyScalar<Map<K, V>>(
            entries instanceof MapFromIterable ?
                entries :
                new MapFromIterable(entries, getKeyValueFn)
        );
    }
    readonly [Symbol.toStringTag]: 'Map';
    clear(): void {
        this.map.value().clear();
    }
    delete(key: K): boolean {
        return this.map.value().delete(key);
    }
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
        this.map.value().forEach(callbackfn, thisArg);
    }
    get(key: K): V {
        return this.map.value().get(key);
    }
    has(key: K): boolean {
        return this.map.value().has(key);
    }
    set(key: K, value: V): this {
        this.map.value().set(key, value);
        return this;
    }
    get size(): number {
        return this.map.value().size;
    }
    [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.map.value()[Symbol.iterator]();
    }
    entries(): IterableIterator<[K, V]> {
        return this.map.value().entries();
    }
    keys(): IterableIterator<K> {
        return this.map.value().keys();
    }
    values(): IterableIterator<V> {
        return this.map.value().values();
    }
    toJSON() {
        return this.map.value().toJSON();
    }
}
