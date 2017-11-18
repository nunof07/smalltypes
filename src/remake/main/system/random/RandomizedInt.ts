import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Random } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Randomized integer.
 */
@final
@frozen
export class RandomizedInt implements Scalar<number> {
    /**
     * Random.
     */
    private readonly random: Random;

    /**
     * Minimum possible value.
     */
    private readonly min: number;

    /**
     * Maximum possible value (exclusive).
     */
    private readonly max: number;

    /**
     * Ctor.
     * @param random Random.
     * @param min Minimum possible value.
     * @param max Maximum possible value (exclusive).
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
        return Math.round(
            this.min + (this.max - this.min) * this.random.next()
        );
    }
}
