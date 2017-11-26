import { ToBool } from '@main/function/index';
import { final } from '@main/index';
import { frozen } from '@main/index';
import { Mapped } from '@main/iterable/index';
import { ScalarLike } from '@main/scalar/index';

/**
 * Iterable of logical conditions.
 */
@final
@frozen
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
