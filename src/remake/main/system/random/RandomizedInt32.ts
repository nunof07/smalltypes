import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Randomize } from '@main/system/random/index';
import { RandomizedInt } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Generate random signed 32-bit int.
 */
@final
@frozen
export class RandomizedInt32 implements Scalar<number> {
    /**
     * Randomized int.
     */
    private randomizedInt: RandomizedInt;

    /**
     * Ctor.
     * @param source Source.
     */
    constructor(randomize: Randomize = new Randomize()) {
        this.randomizedInt = new RandomizedInt(
            randomize,
            (length: number): Int32Array => new Int32Array(length)
        );
    }

    /**
     * Gets the value.
     */
    public value(): number {
        return this.randomizedInt.value();
    }
}
