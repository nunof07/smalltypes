import { final } from '@main/index';
import { frozen } from '@main/index';
import { Random } from '@main/random/index';

/**
 * RandomSource as {@link Random}.
 */
@final
@frozen
export class RandomOf implements Random {
    /**
     * Random source.
     */
    private readonly source: RandomSource;

    /**
     * Ctor.
     * @param source Random source.
     */
    constructor(source: RandomSource) {
        this.source = source;
    }

    /**
     * Next random value between 0 (inclusive) and 1 (exclusive).
     */
    public next(): number {
        const arr: Uint32Array = new Uint32Array(1);
        this.source.getRandomValues(arr);

        return arr[0] / Math.pow(2, 32);
    }
}
