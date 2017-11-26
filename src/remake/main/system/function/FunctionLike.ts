import { Function } from '@main/system/function/index';

/**
 * Function-like union type. Types that can be converted into a {@link Function}.
 */
export type FunctionLike<X, Y> = Function<X, Y> | ((input: X) => Y);
