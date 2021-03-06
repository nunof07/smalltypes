import {
    Random,
    RandomizedFloat,
    Scalar
} from '@main';

/**
 * Randomized floating point number between 0 and 1.
 */
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
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): number {
        return this.randomizedFloat.value();
    }
}
