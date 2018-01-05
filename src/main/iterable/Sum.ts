import {
    Accumulation,
    Folded,
    Scalar
} from '@main';

/**
 * Sum of numbers.
 */
export class Sum implements Scalar<number> {
    /**
     * Folded iterable.
     */
    private readonly folded: Scalar<number>;

    /**
     * Ctor.
     * @param source Source.
     */
    constructor(source: Iterable<number>) {
        this.folded = new Folded(
            source,
            (accumulation: Accumulation<number, number>): number =>
                accumulation.memo() + accumulation.current(),
            0
        );
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Gets the value.
     */
    public value(): number {
        return this.folded.value();
    }
}
