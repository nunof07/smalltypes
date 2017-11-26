import { final } from '@main/index';
import { frozen } from '@main/index';
import { Scalar } from '@main/scalar/index';

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
