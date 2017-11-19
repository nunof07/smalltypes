import { FunctionOf } from '@main/system/function/index';
import { IsFunction } from '@main/system/function/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsFunction} test.
 */
@suite
export class IsFunctionTest {
    @test
    public detectsFunction(): void {
        expect(
            new IsFunction(new FunctionOf((): string => 'HelloWorld')).value()
        ).to.equal(true, 'Function value must return true');
    }

    @test
    public doesNotDetectNonFunction(): void {
        expect(
            new IsFunction('HelloWorld').value()
        ).to.equal(false, 'Non-function value must return false');
    }

    @test
    public doesNotDetectJsFunction(): void {
        expect(
            new IsFunction((): string => 'HelloWorld').value()
        ).to.equal(false, 'Standard JavaScript function value must return false');
    }
}
