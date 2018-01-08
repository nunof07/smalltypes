import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Determines if scalar or value has a number property.
 */
export class HasNumberProperty<T> implements Scalar<boolean> {
    /**
     * Scalar.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Name of the property to check.
     */
    private readonly name: Scalar<string>;

    /**
     * Number to be checked.
     */
    private readonly compared: Scalar<number>;

    /**
     * Ctor.
     * @param value Value.
     * @param name Name of the property to check.
     * @param compared Compared value.
     */
    constructor(value: ScalarLike<T>, name: ScalarLike<string>, compared: ScalarLike<number>) {
        this.scalar = new ScalarOf(value);
        this.name = new ScalarOf(name);
        this.compared = new ScalarOf(compared);
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
        const name: string = this.name.value();
        // tslint:disable-next-line:no-any
        const converted: any = <any>this.scalar.value();

        return typeof converted[name] === 'number' && converted[name] === this.compared.value();
    }
}
