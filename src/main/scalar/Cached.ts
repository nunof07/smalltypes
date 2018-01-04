import {
    Memoized,
    Scalar,
    ScalarLike,
    ScalarOf,
    UnaryFunction
} from '@main';

/**
 * Cached scalar.
 */
export class Cached<T> implements Scalar<T> {
    /**
     * Cache result.
     */
    private readonly memoize: UnaryFunction<boolean, T>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.memoize = new Memoized<boolean, T>((): T =>
            new ScalarOf(value).value()
        );
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
    public value(): T {
        return this.memoize.apply(true);
    }
}
