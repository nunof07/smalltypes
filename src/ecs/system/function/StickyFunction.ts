import { Function } from '@system/function/index';

export class StickyFunction<X, Y> implements Function<X, Y> {
    private func: (input: X) => Y;
    private cache: Map<X, Y>;

    constructor(func: (input: X) => Y) {
        this.func = func;
        this.cache = new Map();
    }
    apply(input: X): Y {
        if (!this.cache.has(input)) {
            this.cache.set(input, this.func(input));
        }

        return this.cache.get(input);
    }
}