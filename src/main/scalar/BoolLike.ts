import { ConditionConsequentLikePair } from '@main/scalar/index';
import { ScalarLike } from '@main/scalar/index';

/**
 * Boolean-like union type.
 */
export type BoolLike<T> = ScalarLike<boolean> | ConditionConsequentLikePair<T>;
