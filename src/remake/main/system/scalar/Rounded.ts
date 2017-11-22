import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Rounded number.
 * Code adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round.
 */
@final
@frozen
export class Rounded implements Scalar<number> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Number.
     */
    private readonly scalar: Scalar<number>;

    /**
     * Precision. E.g. 1 would round to 1 decimal place.
     */
    private readonly precision: Scalar<number>;

    /**
     * Ctor.
     * @param something Number.
     * @param precision Precision. E.g. 1 would round to 1 decimal place.
     */
    constructor(value: ScalarLike<number>, precision: ScalarLike<number>) {
        this.scalar = new ScalarOf(value);
        this.precision = new ScalarOf(precision);
    }

    /**
     * Get the value.
     */
    public value(): number {
        const factor: number = Math.pow(10, this.precision.value());

        return Math.round(this.scalar.value() * factor) / factor;
    }
}
