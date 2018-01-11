import {
    Scalar,
    ScalarLike,
    ScalarOf
} from '@main';

/**
 * Cast to another type.
 */
export class Casted<T> implements Scalar<T> {
    /**
     * Source value.
     */
    // tslint:disable-next-line:no-any
    private readonly source: Scalar<any>;

    /**
     * Ctor.
     * @param source Source value.
     */
    // tslint:disable-next-line:no-any
    constructor(source: ScalarLike<any>) {
        this.source = new ScalarOf(source);
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
    public value(): T {
        return <T>this.source.value();
    }
}
