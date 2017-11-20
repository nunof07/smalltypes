import { ScalarType } from '@main/system/scalar/index';

/**
 * Scalar.
 */
export interface Scalar<T> extends ScalarType {
    /**
     * Get the value.
     */
    value(): T;
}
