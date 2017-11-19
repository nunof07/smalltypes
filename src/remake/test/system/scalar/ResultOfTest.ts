import { ResultOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link ResultOf} test.
 */
@suite
export class ResultOfTest {
    @test
    public convertsFromJsFunction(): void {
        expect(
            new ResultOf(
                (): string => 'HelloWorld'
            ).value()
        ).to.equal('HelloWorld');
    }
}
