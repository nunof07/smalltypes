import { Function } from '@main/system/function/index';
import { AnyIntArray } from '@main/system/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Crypto } from '@main/system/random/index';
import { NoBlank } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Fill array with cryptographically strong random values.
 */
@final
@frozen
export class Randomize implements Function<AnyIntArray, AnyIntArray> {
    /**
     * Random source.
     */
    private readonly source: Scalar<RandomSource>;

    /**
     * Ctor.
     * @param source Source.
     */
    constructor(source: Scalar<RandomSource> = new Crypto()) {
        this.source = new NoBlank(source);
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: AnyIntArray): AnyIntArray {
        this.source.value().getRandomValues(input);

        return input;
    }
}
