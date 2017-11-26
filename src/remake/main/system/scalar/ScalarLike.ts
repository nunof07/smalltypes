import { Function } from '@main/system/function/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Scalar-like union type. Types that can be converted into a {@link Scalar}.
 */
export type ScalarLike<T> = Scalar<T> | Function<undefined, T> | (() => T) | T;
