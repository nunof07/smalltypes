import {
    Accumulation,
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Accumulation of scalar like values.
 */
export class AccumulationOf<U, T> implements Accumulation<U, T> {
    /**
     * Accumulated scalar.
     */
    private readonly memoScalar: Scalar<U>;

    /**
     * Current scalar.
     */
    private readonly currentScalar: Scalar<T>;

    /**
     * Ctor.
     * @param memo Accumulated scalar.
     * @param current Current scalar.
     */
    constructor(memo: ScalarLike<U>, current: ScalarLike<T>) {
        this.memoScalar = new ScalarOf(memo);
        this.currentScalar = new ScalarOf(current);
    }

    /**
     * Accumulated value.
     */
    public memo(): U {
        return this.memoScalar.value();
    }

    /**
     * Current value.
     */
    public current(): T {
        return this.currentScalar.value();
    }

}
