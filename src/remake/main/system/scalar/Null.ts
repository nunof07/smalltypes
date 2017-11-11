import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Null scalar.
 */
@final
@frozen
export class Null implements Scalar<null> {
    /**
     * Get the value.
     */
    public value(): null {
        return null;
    }
}
