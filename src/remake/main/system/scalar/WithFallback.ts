import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsBlank } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { Ternary } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Cached scalar.
 */
@final
@frozen
export class WithFallback<T> implements Scalar<T> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Source.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Ctor.
     * @param scalar Scalar.
     * @param fallback Fallback.
     */
    constructor(scalar: Scalar<T>, fallback: Scalar<T>)
    /**
     * Ctor.
     * @param value Value.
     * @param fallback Fallback.
     */
    constructor(value: T, fallback: Scalar<T>)
    /**
     * Ctor.
     * @param scalar Scalar.
     * @param fallbackValue Fallback value.
     */
    constructor(scalar: Scalar<T>, fallbackValue: T)
    /**
     * Ctor.
     * @param value Value.
     * @param fallbackValue Fallback value.
     */
    constructor(value: T, fallbackValue: T)
    /**
     * Ctor.
     * @param func Function.
     * @param fallback Fallback.
     */
    constructor(func: () => T, fallback: () => T)
    /**
     * Ctor.
     * @param func Function.
     * @param fallbackValue Fallback value.
     */
    constructor(func: () => T, fallbackValue: T)
    /**
     * Ctor.
     * @param value Value.
     * @param fallback Fallback.
     */
    constructor(value: T, fallback: () => T)
    /**
     * Ctor.
     * @param func Function.
     * @param fallback Fallback.
     */
    constructor(func: () => T, fallback: Scalar<T>)
    /**
     * Ctor.
     * @param scalar Scalar.
     * @param fallback Fallback.
     */
    constructor(scalar: Scalar<T>, fallback: () => T)
    /**
     * Ctor.
     * @param something Scalar, function or value.
     * @param fallback Fallback scalar, function or value.
     */
    constructor(something: Scalar<T> | (() => T) | T, fallback: Scalar<T> | (() => T) | T) {
        this.scalar = new Ternary(
            new IsBlank(something),
            new ScalarOf(fallback),
            new ScalarOf(something)
        );
    }

    /**
     * Get the value.
     */
    public value(): T {
        return this.scalar.value();
    }
}
