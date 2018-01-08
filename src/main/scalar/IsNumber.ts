import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Determines if scalar or value is a number.
 */
export class IsNumber<T> implements Scalar<boolean> {
    /**
     * Is value a number?
     */
    private readonly isNumber: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     * @param compared Compared value.
     */
    constructor(value: ScalarLike<T>, compared: ScalarLike<number>) {
        this.isNumber = new ScalarOf((): boolean => {
            let isNumber: boolean = false;
            const converted: T = new ScalarOf(value).value();

            if (typeof converted === 'number') {
                const comparedConverted: number = new ScalarOf(compared).value();

                if (converted === comparedConverted) {
                    isNumber = true;
                }
            }

            return isNumber;
        });
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
    public value(): boolean {
        return this.isNumber.value();
    }
}
