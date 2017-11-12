import { FunctionOf } from '@main/system/function/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link FunctionOf} test.
 */
@suite
export class FunctionOfTest {
    private readonly callback: (input: string) => string;
    private readonly func: FunctionOf<string, string>;

    constructor() {
        this.callback = (input: string): string => input;
        this.func = new FunctionOf(this.callback);
    }

    @test
    public fromCallback(): void {
        expect(
            this.func.apply('hello')
        ).to.equal(
            this.callback('hello')
        );
    }
}
