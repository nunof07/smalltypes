import { ConditionConsequentLikePair } from '@main';
import { ScalarLike } from '@main';

/**
 * Boolean-like union type.
 */
export type BoolLike<T> = ScalarLike<boolean> | ConditionConsequentLikePair<T>;
