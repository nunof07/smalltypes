import {
    ConditionConsequentLikePair,
    ScalarLike
} from '@main';

/**
 * Boolean-like union type.
 */
export type BoolLike<T> = ScalarLike<boolean> | ConditionConsequentLikePair<T>;
