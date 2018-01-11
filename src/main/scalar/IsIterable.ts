import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Determines if scalar or value is an iterable.
 */
export class IsIterable<T> implements Scalar<boolean> {
    /**
     * Is value an iterable?
     */
    private readonly isIterable: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.isIterable = new ScalarOf((): boolean => {
            const converted: T = new ScalarOf(value).value();

            return converted !== null
                && converted !== undefined
                // tslint:disable-next-line:no-any
                && typeof (<any>converted)[Symbol.iterator] === 'function';
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
        return this.isIterable.value();
    }
}
