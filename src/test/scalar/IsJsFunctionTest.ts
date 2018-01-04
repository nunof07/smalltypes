import { IsJsFunction } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsJsFunction} test.
 */
@suite
export class IsJsFunctionTest {
    @test
    public isScalar(): void {
        expect(
            new IsJsFunction(true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

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
