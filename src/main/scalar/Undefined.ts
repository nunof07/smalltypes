import { final } from '@main';
import { frozen } from '@main';
import { Scalar } from '@main';

/**
 * Undefined scalar.
 */
@final
@frozen
export class Undefined implements Scalar<undefined> {
    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): undefined {
        return undefined;
    }
}
