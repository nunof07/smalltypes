import { Function } from '@main/function/index';
import { Scalar } from '@main/scalar/index';

/**
 * Scalar-like union type. Types that can be converted into a {@link Scalar}.
 */
export type ScalarLike<T> = Scalar<T> | Function<undefined, T> | (() => T) | T;
