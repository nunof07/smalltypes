import { Scalar } from '@main';

/**
 * Null scalar.
 */
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
