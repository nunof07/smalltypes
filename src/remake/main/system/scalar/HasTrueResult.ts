import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Determines if an object has a nullary function that returns true.
 */
@final
@frozen
export class HasTrueResult<T> implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Condition.
     */
    private readonly isResultTrue: () => boolean;

    /**
     * Ctor.
     * @param value Variable.
     * @param functionName Name of the function.
     */
    constructor(value: T, functionName: string) {
        this.isResultTrue = (): boolean =>
            value !== null &&
            typeof value === 'object' &&
            typeof (<{ [key: string]: () => true }><Object>value)[functionName] === 'function' &&
            (<{ [key: string]: () => true }><Object>value)[functionName]();
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isResultTrue();
    }
}
