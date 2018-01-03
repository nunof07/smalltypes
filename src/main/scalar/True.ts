import { Scalar } from '@main';

/**
 * True scalar.
 */
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
