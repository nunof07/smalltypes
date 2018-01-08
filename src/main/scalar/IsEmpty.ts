import {
    And,
    HasLength,
    HasSize,
    IsBool,
    IsEmptyIterable,
    IsEmptyObject,
    IsIterable,
    IsNull,
    IsNumber,
    IsUndefined,
    Or,
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Determines if scalar or value is empty.
 * Examples of empty values:
 * - null
 * - undefined
 * - Empty string
 * - Empty object
 * - Empty array
 * - Empty iterable
 * - Boolean false
 * - Number zero
 * - Objects with size or length property set to zero
 */
export class IsEmpty<T> implements Scalar<boolean> {
    /**
     * Is value empty?
     */
    private readonly isEmpty: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.isEmpty = new Or(
            new IsNull(value),
            new IsUndefined(value),
            new IsBool(value, false),
            new IsNumber(value, 0),
            new HasLength(value, 0),
            new HasSize(value, 0),
            new IsEmptyObject(value),
            new And(
                new IsIterable(value),
                (): boolean =>
                    new IsEmptyIterable(
                        // tslint:disable-next-line:no-any
                        <Iterable<any>><any>new ScalarOf(value).value()
                    ).value()
            )
        );
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
        return this.isEmpty.value();
    }
}
