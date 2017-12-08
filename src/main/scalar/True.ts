import { final } from '@main';
import { frozen } from '@main';
import { Scalar } from '@main';

/**
 * True scalar.
 */
@final
@frozen
export class True implements Scalar<boolean> {
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
        return true;
    }
}
