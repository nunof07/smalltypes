import { NullaryFunctionOf } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link NullaryFunctionOf} test.
 */
@suite
export class NullaryFunctionOfTest {
    @test
    public fromJsFunction(): void {
        expect(
            new NullaryFunctionOf(
                (): string => 'hello'
            ).apply()
        ).to.equal('hello');
    }
}
