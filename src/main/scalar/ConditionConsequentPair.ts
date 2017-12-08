import { Scalar } from '@main';

/**
 * Condition/consequent pair.
 */
export type ConditionConsequentPair<T> = [Scalar<boolean>, Scalar<T>];
