import { AnyIntArray } from '@main/system/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Randomize } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Generate random int.
 */
@final
@frozen
export class RandomizedInt implements Scalar<number> {
    /**
     * Randomize.
     */
    private randomize: Randomize;

    /**
     * Callback to get array.
     */
    private getArray: (length: number) => AnyIntArray;

    /**
     * Ctor.
     * @param source Source.
     */
    constructor(randomize: Randomize = new Randomize(), getArray: (length: number) => AnyIntArray) {
        this.randomize = randomize;
        this.getArray = getArray;
    }

    /**
     * Gets the value.
     */
    public value(): number {
        return this.randomize.apply(
            this.getArray(1)
        )[0];
    }
}
