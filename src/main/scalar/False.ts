import { final } from '@main';
import { frozen } from '@main';
import { Scalar } from '@main';

/**
 * False scalar.
 */
@final
@frozen
export class False implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return false;
    }
}
