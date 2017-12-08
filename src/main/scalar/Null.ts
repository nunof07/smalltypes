import { final } from '@main';
import { frozen } from '@main';
import { Scalar } from '@main';

/**
 * Null scalar.
 */
@final
@frozen
export class Null implements Scalar<null> {
    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): null {
        return null;
    }
}
