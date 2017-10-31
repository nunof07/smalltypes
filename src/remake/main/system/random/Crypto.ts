import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Crypto object with IE fallback.
 */
@final
@frozen
export class Crypto implements Scalar<RandomSource> {
    /**
     * Gets the value.
     */
    public value(): RandomSource {
        const msCrypto: RandomSource | undefined = (<{ msCrypto?: RandomSource }>window).msCrypto;

        return msCrypto ? msCrypto : crypto;
    }
}
