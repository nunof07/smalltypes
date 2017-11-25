import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Random } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Randomized floating point number.
 */
@final
@frozen
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
