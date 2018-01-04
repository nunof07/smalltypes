import { NullaryFunctionOf } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link NullaryFunctionOf} test.
 */
@suite
export class NullaryFunctionOfTest {
    @test
    public isFunction(): void {
        expect(
            new NullaryFunctionOf(
                (): string => 'hello'
            ).isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public fromJsFunction(): void {
        expect(
            new NullaryFunctionOf(
                (): string => 'hello'
            ).apply()
        ).to.equal('hello');
    }
}
