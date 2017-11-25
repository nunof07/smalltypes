import { ScalarLike } from '@main/system/scalar/index';

/**
 * Condition/consequent like pair.
 */
export type ConditionConsequentLikePair<T> = [ScalarLike<boolean>, ScalarLike<T>];
