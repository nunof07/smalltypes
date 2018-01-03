import { Scalar } from '@main';

/**
 * False scalar.
 */
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
