import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Random } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Randomized bool.
 */
@final
@frozen
export class RandomizedBool implements Scalar<boolean> {
    /**
     * Random.
     */
    private readonly random: Random;

    /**
     * Ctor.
     * @param random Random.
     */
    constructor(random: Random) {
        this.random = random;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.random.next() >= 0.5;
    }
}
