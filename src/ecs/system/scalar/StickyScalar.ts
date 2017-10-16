import { Scalar } from '@system/scalar/index';

export class StickyScalar<T> implements Scalar<T> {
    private source: Scalar<T>;
    private result: T;
    private isCached: boolean;

    constructor(scalar: Scalar<T>) {
        this.source = scalar;
        this.isCached = false;
    }
    value(): T {
        if (!this.isCached) {
            this.result = this.source.value();
            this.source = null; // lose source, no longer need it
            this.isCached = true;
        }

        return this.result;
    }
}