import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Determines if scalar or value is a boolean.
 */
export class IsBool<T> implements Scalar<boolean> {
    /**
     * Is value a boolean?
     */
    private readonly isBool: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     * @param compared Compared value.
     */
    constructor(value: ScalarLike<T>, compared: ScalarLike<boolean>) {
        this.isBool = new ScalarOf((): boolean => {
            let isBool: boolean = false;
            const converted: T = new ScalarOf(value).value();

            if (typeof converted === 'boolean') {
                const comparedConverted: boolean = new ScalarOf(compared).value();

                if (converted === comparedConverted) {
                    isBool = true;
                }
            }

            return isBool;
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
        return this.isBool.value();
    }
}
