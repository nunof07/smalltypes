import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * False scalar.
 */
@final
@frozen
export class False implements Scalar<boolean> {
    /**
     * Get the value.
     */
    public value(): boolean {
        return false;
    }
}
