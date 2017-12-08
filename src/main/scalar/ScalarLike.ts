import { Function } from '@main';
import { Scalar } from '@main';

/**
 * Scalar-like union type. Types that can be converted into a {@link Scalar}.
 */
export type ScalarLike<T> = Scalar<T> | Function<undefined, T> | (() => T) | T;
