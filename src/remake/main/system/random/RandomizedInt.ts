import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Random } from '@main/system/random/index';
import { RandomizedFloat } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Randomized integer.
 */
@final
@frozen
export class RandomizedInt implements Scalar<number> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Randomized floating point number.
     */
    private readonly randomizedFloat: Scalar<number>;

    /**
     * Ctor.
     * @param random Random.
     * @param min Minimum possible value (inclusive).
     * @param max Maximum possible value (inclusive).
     */
    constructor(random: Random, min: number, max: number) {
        this.randomizedFloat = new RandomizedFloat(random, min, max);
    }

    /**
     * Get the value.
     */
    public value(): number {
        return Math.round(this.randomizedFloat.value());
    }
}
