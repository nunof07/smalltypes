import { UnaryFunction } from '@main';

/**
 * Determines if an object has a nullary function that returns true.
 */
export class HasTrueResult<X> implements UnaryFunction<X, boolean> {
    /**
     * Name of the function to check.
     */
    private readonly functionName: string;

    /**
     * Ctor.
     * @param functionName Name of the function to check.
     */
    constructor(functionName: string) {
        this.functionName = functionName;
    }

    /**
     * Type determinant.
     */
    public isFunction(): true {
        return true;
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: X): boolean {
        return input !== null &&
            typeof input === 'object' &&
            typeof (<{ readonly [key: string]: () => true }><Object>input)[this.functionName] === 'function' &&
            (<{ readonly [key: string]: () => true }><Object>input)[this.functionName]();
    }
}
