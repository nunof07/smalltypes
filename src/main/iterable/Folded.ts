import {
    Accumulation,
    AccumulationOf,
    FunctionLike,
    FunctionOf,
    Scalar,
    ScalarLike,
    ScalarOf,
    UnaryFunction
} from '@main';

/**
 * Reduce iterable to a single value.
 */
export class Folded<T, U> implements Scalar<U> {
    /**
     * Source iterable.
     */
    private readonly source: Iterable<T>;

    /**
     * Accumulation function.
     */
    private readonly accumulator: UnaryFunction<Accumulation<U, T>, ScalarLike<U>>;

    /**
     * Initial value.
     */
    private readonly initial: Scalar<U>;

    /**
     * Ctor.
     * @param source Iterable.
     * @param accumulator Accumulation function.
     * @param initial Initial value.
     */
    constructor(
        source: Iterable<T>,
        accumulator: FunctionLike<Accumulation<U, T>, ScalarLike<U>>,
        initial: ScalarLike<U>
    ) {
        this.source = source;
        this.accumulator = new FunctionOf(accumulator);
        this.initial = new ScalarOf(initial);
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Gets the value.
     */
    public value(): U {
        let memo: ScalarLike<U> = this.initial.value();

        for (const item of this.source) {
            memo = this.accumulator.apply(new AccumulationOf(memo, item));
        }

        return new ScalarOf(memo).value();
    }
}
