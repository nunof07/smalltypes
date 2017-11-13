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
        return window.crypto;
    }
}
