import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { DoneIteratorResult } from '@main/system/iterator/index';
import { ValuedIteratorResult } from '@main/system/iterator/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { Ternary } from '@main/system/scalar/index';

/**
 * Iterator result.
 *
 * Helpful class to create iterator result with optional value.
 */
@final
@frozen
export class IteratorResultOf<T> implements Scalar<IteratorResult<T>> {
    /**
     * Is done?
     */
    private readonly done: boolean;

    /**
     * Function to retrieve value when not done.
     */
    private readonly getValue: Function<boolean, T>;

    /**
     * Ctor.
     * @param done Is done?
     * @param getValue Function to retrieve value when not done.
     */
    constructor(done: boolean, getValue: Function<boolean, T>) {
        this.done = done;
        this.getValue = getValue;
    }

    /**
     * Get the value.
     */
    public value(): IteratorResult<T> {
        return new Ternary(
            new ScalarOf(this.done),
            new DoneIteratorResult<T>(),
            new ValuedIteratorResult(this.getValue.apply(this.done))
        ).value();
    }
}
