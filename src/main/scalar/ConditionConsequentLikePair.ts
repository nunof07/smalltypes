import { ScalarLike } from '@main';

/**
 * Condition/consequent like pair.
 */
export type ConditionConsequentLikePair<T> = [ScalarLike<boolean>, ScalarLike<T>];
