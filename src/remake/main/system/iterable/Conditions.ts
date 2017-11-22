import { FunctionOf } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Mapped } from '@main/system/iterable/index';
import { ScalarLike } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

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
        this.conditions = new Mapped(
            conditions,
            new FunctionOf<ScalarLike<boolean>, boolean>((input: ScalarLike<boolean>): boolean =>
                (new ScalarOf(input)).value()
            )
        );
    }

    /**
     * Iterator.
     */
    public [Symbol.iterator](): Iterator<boolean> {
        return this.conditions[Symbol.iterator]();
    }
}
