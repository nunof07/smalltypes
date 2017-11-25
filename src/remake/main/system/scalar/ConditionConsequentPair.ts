import { Scalar } from '@main/system/scalar/index';

/**
 * Condition/consequent pair.
 */
export type ConditionConsequentPair<T> = [Scalar<boolean>, Scalar<T>];
