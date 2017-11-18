import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Random } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';

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
    private readonly min: number;

    /**
     * Maximum possible value (inclusive).
     */
    private readonly max: number;

    /**
     * Ctor.
     * @param random Random.
     * @param min Minimum possible value (inclusive).
     * @param max Maximum possible value (inclusive).
     */
    constructor(random: Random, min: number, max: number) {
        this.random = random;
        this.min = min;
        this.max = max;
    }

    /**
     * Get the value.
     */
    public value(): number {
        return this.min + (this.max - this.min) * this.random.next();
    }
}
