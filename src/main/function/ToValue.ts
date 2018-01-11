import {
    IsFunction,
    IsScalar,
    Scalar,
    ScalarLike,
    UnaryFunction
} from '@main';

/**
 * Converts scalar-like types to their respective values.
 */
export class ToValue<T> implements UnaryFunction<ScalarLike<T>, T> {
    /**
     * Type determinant.
     */
    public isFunction(): true {
        return true;
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: ScalarLike<T>): T {
        let result: T;

        if (typeof input === 'function') {
            result = this.fromScalarOrUnit(
                input()
            );
        } else if (new IsScalar(input).value()) {
            result = this.fromScalar(input);
        } else if (new IsFunction(input).value()) {
            result = this.fromFunction(input);
        } else {
            result = this.fromUnit(input);
        }

        return result;
    }

    /**
     * Casts value assuming scalar or unit.
     * @param input Input.
     */
    private fromScalarOrUnit(input: Scalar<T> | T): T {
        return (
            new IsScalar(input).value()
            ? this.fromScalar(input)
            : this.fromUnit(input)
        );
    }

    /**
     * Casts value assuming scalar.
     * @param input Input.
     */
    private fromScalar(input: ScalarLike<T>): T {
        return (<Scalar<T>>input).value();
    }

    /**
     * Casts value assuming unit.
     * @param input Input.
     */
    private fromUnit(input: ScalarLike<T>): T {
        return <T>input;
    }

    /**
     * Gets result assuming function.
     * @param input Input.
     */
    private fromFunction(input: ScalarLike<T>): T {
        const result: Scalar<T> | T = (<UnaryFunction<undefined, Scalar<T> | T>>input).apply(undefined);

        return this.fromScalarOrUnit(result);
    }
}
