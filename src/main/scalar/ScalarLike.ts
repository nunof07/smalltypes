import {
    NullaryFunction,
    Scalar,
    UnaryFunction
} from '@main';

/**
 * Scalar-like union type. Types that can be converted into a {@link Scalar}.
 */
export type ScalarLike<T> =
    Scalar<T>
    | NullaryFunction<T>
    | NullaryFunction<Scalar<T>>
    | UnaryFunction<undefined, T>
    | UnaryFunction<undefined, Scalar<T>>
    | (() => T)
    | (() => Scalar<T>)
    | T;
