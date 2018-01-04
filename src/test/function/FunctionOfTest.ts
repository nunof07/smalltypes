import { FunctionOf } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link FunctionOf} test.
 */
@suite
export class FunctionOfTest {
    @test
    public isFunction(): void {
        expect(
            new FunctionOf(
                (input: string): string => input
            ).isFunction()
        ).to.equal(true, 'Must be a function');
    }

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
                isFunction: (): true => true,
                apply: (input: string): string => input
            }).apply('hello')
        ).to.equal('hello');
    }
}
