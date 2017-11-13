import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';
import * as crypto from 'crypto';

/**
 * Node Crypto.
 */
@final
@frozen
export class NodeCrypto implements Scalar<RandomSource> {
    /**
     * Gets the value.
     */
    public value(): RandomSource {
        return <RandomSource>{
            getRandomValues: <T extends Int8Array | Uint8ClampedArray | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array>
            (array: T): T => {
                array.set(crypto.randomBytes(array.length));

                return array;
            }
        };
    }
}
