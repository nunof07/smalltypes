import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

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
