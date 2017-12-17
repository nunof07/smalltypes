import { UnaryFunction } from '@main';

/**
 * Function-like union type. Types that can be converted into a {@link UnaryFunction}.
 */
export type FunctionLike<X, Y> = UnaryFunction<X, Y> | ((input: X) => Y);
