import { Scalar } from '@system/scalar/index';

export class StickyScalar<T> implements Scalar<T> {
    private source: Scalar<T>;
    private result: T;
    private isDone: boolean;

    constructor(scalar: Scalar<T>) {
        this.source = scalar;
        this.isDone = false;
    }
    value(): T {
        if (!this.isDone) {
            this.result = this.source.value();
            this.source = null; // lose source, no longer need it
        }

        return this.result;
    }
}