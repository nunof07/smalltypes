import { FunctionOf } from '@main/system/function/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link FunctionOf} test.
 */
@suite
export class FunctionOfTest {
    @test
    public fromJsFunction(): void {
        expect(
            new FunctionOf(
                (input: string): string => input
            ).apply('hello')
        ).to.equal('hello');
    }

    @test
    public fromFunction(): void {
        expect(
            new FunctionOf({
                '@@__IS_SYSTEM_FUNCTION__@@': true,
                apply: (input: string): string => input
            }).apply('hello')
        ).to.equal('hello');
    }
}
