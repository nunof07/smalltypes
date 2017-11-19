import { NullaryFunction } from '@main/system/function/index';
//import { IsFunction } from '@main/system/function/index';
//import { JsFunction } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
// import { Cached } from '@main/system/scalar/index';
// import { ResultOf } from '@main/system/scalar/index';
// import { Scalar } from '@main/system/scalar/index';
// import { ScalarOf } from '@main/system/scalar/index';
// import { Ternary } from '@main/system/scalar/index';

/**
 * Function without arguments.
 */
@final
@frozen
export class NullaryFunctionOf<Y> implements NullaryFunction<Y> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_FUNCTION__@@': true = true;

    /**
     * Function callback.
     */
    //private readonly func: Scalar<Function<X, Y>>;
    private readonly func: (input: undefined) => Y;

    /**
     * Ctor.
     * @param func Function callback.
     */
    //constructor(func: Function<undefined, Y>)
    constructor(func: () => Y) {
    //constructor(func: Function<undefined, Y> | (() => Y)) {
        // this.func = new Cached(
        //     new Ternary(
        //         new IsFunction(func),
        //         new ScalarOf(<Function<X, Y>>func),
        //         new ScalarOf(new JsFunction(<(input: X) => Y>func))
        //     )
        // );
        this.func = <(input: undefined) => Y>func;
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input?: undefined): Y {
        return this.func(input);
    }
}
