import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Determines if an object has a property set to true.
 */
@final
@frozen
export class HasTrueProperty<T> implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

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
     * Get the value.
     */
    public value(): boolean {
        return this.isPropertyTrue();
    }
}
