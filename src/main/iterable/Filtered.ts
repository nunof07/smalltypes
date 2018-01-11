import {
    FunctionLike,
    FunctionOf,
    ScalarLike,
    ToValue,
    UnaryFunction
} from '@main';

/**
 * Filtered iterable.
 */
export class Filtered<T> implements Iterable<T> {
    /**
     * Iterable.
     */
    private readonly iterable: Iterable<T>;

    /**
     * Convert to ScalarLike to value.
     */
    private readonly toBool: UnaryFunction<ScalarLike<boolean>, boolean>;

    /**
     * Function.
     */
    private readonly func: UnaryFunction<T, ScalarLike<boolean>>;

    /**
     * Ctor.
     * @param iterable Iterable.
     * @param func Function.
     */
    constructor(
        iterable: Iterable<T>,
        func: FunctionLike<T, ScalarLike<boolean>>,
        toBool: UnaryFunction<ScalarLike<boolean>, boolean> = new ToValue()
    ) {
        this.iterable = iterable;
        this.func = new FunctionOf(func);
        this.toBool = toBool;
    }

    /**
     * Iterator.
     */
    public *[Symbol.iterator](): Iterator<T> {
        for (const item of this.iterable) {
            if (this.toBool.apply(this.func.apply(item))) {
                yield item;
            }
        }
    }
}
