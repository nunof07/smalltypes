import { Scalar } from '@main/scalar/index';

/**
 * Condition/consequent pair.
 */
export type ConditionConsequentPair<T> = [Scalar<boolean>, Scalar<T>];
