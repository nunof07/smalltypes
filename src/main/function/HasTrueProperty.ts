import { UnaryFunction } from '@main';

/**
 * Determines if an object has a property set to true.
 */
export class HasTrueProperty<X> implements UnaryFunction<X, boolean> {
    /**
     * Name of the property to check.
     */
    private readonly propertyName: string;

    /**
     * Ctor.
     * @param propertyName Name of the property.
     */
    constructor(propertyName: string) {
        this.propertyName = propertyName;
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
            (<{ readonly [key: string]: boolean }><Object>input)[this.propertyName] === true;
    }
}
