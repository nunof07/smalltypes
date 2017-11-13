import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * IE Crypto.
 */
@final
@frozen
export class MsCrypto implements Scalar<RandomSource | undefined> {
    /**
     * Gets the value.
     */
    public value(): RandomSource | undefined {
        return (<{ msCrypto?: RandomSource }>window).msCrypto;
    }
}
