import {
    Mapped,
    ScalarLike,
    ToBool
} from '@main';

/**
 * Iterable of logical conditions.
 */
export class Conditions implements Iterable<boolean> {
    /**
     * Iterable.
     */
    private readonly conditions: Iterable<boolean>;

    /**
     * Ctor.
     * @param conditions Conditions.
     */
    constructor(conditions: Iterable<ScalarLike<boolean>>) {
        this.conditions = new Mapped(conditions, new ToBool());
    }

    /**
     * Iterator.
     */
    public [Symbol.iterator](): Iterator<boolean> {
        return this.conditions[Symbol.iterator]();
    }
}
