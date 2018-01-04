import {
    Random,
    RandomizedFloat,
    Scalar,
    ScalarLike
} from '@main';

/**
 * Randomized integer.
 */
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
