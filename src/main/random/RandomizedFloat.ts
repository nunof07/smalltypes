import { Random } from '@main';
import { Scalar } from '@main';
import { ScalarLike } from '@main';
import { ScalarOf } from '@main';

/**
 * Randomized floating point number.
 */
export class RandomizedFloat implements Scalar<number> {
    /**
     * Random.
     */
    private readonly random: Random;

    /**
     * Minimum possible value (inclusive).
     */
    private readonly min: Scalar<number>;

    /**
     * Maximum possible value (inclusive).
     */
    private readonly max: Scalar<number>;

    /**
     * Ctor.
     * @param random Random.
     * @param min Minimum possible value (inclusive).
     * @param max Maximum possible value (inclusive).
     */
    constructor(random: Random, min: ScalarLike<number>, max: ScalarLike<number>) {
        this.random = random;
        this.min = new ScalarOf(min);
        this.max = new ScalarOf(max);
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
        return this.min.value() + (this.max.value() - this.min.value()) * this.random.next();
    }
}
