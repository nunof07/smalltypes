import { NullaryFunction } from '@main';
import { Scalar } from '@main';
import { UnaryFunction } from '@main';

/**
 * Scalar-like union type. Types that can be converted into a {@link Scalar}.
 */
export type ScalarLike<T> = Scalar<T> | NullaryFunction<T> | UnaryFunction<undefined, T> | (() => T) | T;
