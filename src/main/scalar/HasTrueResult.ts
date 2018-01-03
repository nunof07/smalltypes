import { Scalar } from '@main';

/**
 * Determines if an object has a nullary function that returns true.
 */
export class HasTrueResult<T> implements Scalar<boolean> {
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
            typeof (<{ readonly [key: string]: () => true }><Object>value)[functionName] === 'function' &&
            (<{ readonly [key: string]: () => true }><Object>value)[functionName]();
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isResultTrue();
    }
}
