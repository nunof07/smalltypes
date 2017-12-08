import { final } from '@main';
import { frozen } from '@main';
import { Random } from '@main';
import { Scalar } from '@main';

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
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.random.next() >= 0.5;
    }
}
