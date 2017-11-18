import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Random } from '@main/system/random/index';
import { RandomizedFloat } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Randomized floating point number between 0 and 1.
 */
@final
@frozen
export class RandomizedPercentage implements Scalar<number> {
    /**
     * Randomized floating point number.
     */
    private readonly randomizedFloat: Scalar<number>;

    /**
     * Ctor.
     * @param random Random.
     */
    constructor(random: Random) {
        this.randomizedFloat = new RandomizedFloat(random, 0, 1);
    }

    /**
     * Get the value.
     */
    public value(): number {
        return this.randomizedFloat.value();
    }
}
