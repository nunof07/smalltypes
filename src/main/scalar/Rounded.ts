import { final } from '@main/index';
import { frozen } from '@main/index';
import { Scalar } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';

/**
 * Rounded number.
 * Code adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round.
 */
@final
@frozen
export class Rounded implements Scalar<number> {
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
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): number {
        const factor: number = Math.pow(10, this.precision.value());

        return Math.round(this.scalar.value() * factor) / factor;
    }
}
