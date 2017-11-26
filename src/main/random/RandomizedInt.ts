import { final } from '@main/index';
import { frozen } from '@main/index';
import { Random } from '@main/random/index';
import { RandomizedFloat } from '@main/random/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';

/**
 * Randomized integer.
 */
@final
@frozen
export class RandomizedInt implements Scalar<number> {
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
    constructor(random: Random, min: ScalarLike<number>, max: ScalarLike<number>) {
        this.randomizedFloat = new RandomizedFloat(random, min, max);
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): number {
        return Math.round(this.randomizedFloat.value());
    }
}
