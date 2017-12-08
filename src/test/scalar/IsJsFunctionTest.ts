import { IsJsFunction } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsJsFunction} test.
 */
@suite
export class IsJsFunctionTest {
    @test
    public detectsFunction(): void {
        expect(
            new IsJsFunction((): string => 'HelloWorld').value()
        ).to.equal(true, 'Function value must return true');
    }

    @test
    public doesNotDetectNonFunction(): void {
        expect(
            new IsJsFunction('HelloWorld').value()
        ).to.equal(false, 'Non-function value must return false');
    }
}
