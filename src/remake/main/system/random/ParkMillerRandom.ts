import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Random } from '@main/system/random/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Park-Miller random source.
 * @see http://www.firstpr.com.au/dsp/rand31/
 *
 * For other alternative implementations in JS:
 * @see https://github.com/odogono/prng-parkmiller-js
 * @see https://github.com/SirAnthony/rand31
 * @see https://gist.github.com/blixt/f17b47c62508be59987b
 */
@final
@frozen
export class ParkMillerRandom implements Random {
    /**
     * Maximum (exclusive) possible value.
     */
    private static readonly MAX: number = 2147483647;

    /**
     * Next seed.
     */
    private seed: Scalar<number>;

    /**
     * Ctor.
     * @param seed Seed number. If not provided will use a seed based on the current time.
     */
    constructor(seed: Scalar<number> = new ScalarOf((): number => Date.now())) {
        // make sure seed is number between 1 and MAX
        this.seed = new ScalarOf((): number => {
            let source: number = seed.value();
            source = (source === 0 ? 1 : source);

            return Math.abs(source) % ParkMillerRandom.MAX;
        });
    }

    /**
     * Next random value between 0 (inclusive) and 1 (exclusive).
     */
    public next(): number {
        this.seed = new ScalarOf((this.seed.value() * 16807) % ParkMillerRandom.MAX);

        return this.seed.value() / ParkMillerRandom.MAX;
    }
}
