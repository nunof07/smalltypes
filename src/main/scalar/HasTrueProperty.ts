import { final } from '@main/index';
import { frozen } from '@main/index';
import { Scalar } from '@main/scalar/index';

/**
 * Determines if an object has a property set to true.
 */
@final
@frozen
export class HasTrueProperty<T> implements Scalar<boolean> {
    /**
     * Condition.
     */
    private readonly isPropertyTrue: () => boolean;

    /**
     * Ctor.
     * @param value Variable.
     * @param propertyName Name of the property.
     */
    constructor(value: T, propertyName: string) {
        this.isPropertyTrue = (): boolean =>
            value !== null &&
            typeof value === 'object' &&
            (<{ [key: string]: boolean }><Object>value)[propertyName] === true;
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
        return this.isPropertyTrue();
    }
}
