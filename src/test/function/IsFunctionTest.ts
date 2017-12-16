import { FunctionOf } from '@main';
import { IsFunction } from '@main';
import { UnaryFunction } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsFunction} test.
 */
@suite
export class IsFunctionTest {
    private readonly actualFunction: UnaryFunction<undefined, string>;

    constructor() {
        this.actualFunction = new FunctionOf((): string => 'HelloWorld');
    }

    @test
    public isScalar(): void {
        expect(
            new IsFunction(this.actualFunction).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public detectsFunction(): void {
        expect(
            new IsFunction(this.actualFunction).value()
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
