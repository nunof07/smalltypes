import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Undefined scalar.
 */
@final
@frozen
export class Undefined implements Scalar<undefined> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Get the value.
     */
    public value(): undefined {
        return undefined;
    }
}
