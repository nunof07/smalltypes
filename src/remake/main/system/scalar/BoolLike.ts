import { ConditionConsequentLikePair } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';

/**
 * Boolean-like union type.
 */
export type BoolLike<T> = ScalarLike<boolean> | ConditionConsequentLikePair<T>;
