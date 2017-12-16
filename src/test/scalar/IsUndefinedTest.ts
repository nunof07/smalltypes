import { IsUndefined } from '@main';
import { ScalarOf } from '@main';
import { Undefined } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsUndefined} test.
 */
@suite
export class IsUndefinedTest {
    @test
    public isScalar(): void {
        expect(
            new IsUndefined(true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public undefinedTest(): void {
        expect(
            new IsUndefined(undefined).value()
        ).to.equal(true, 'undefined should be true');
    }

    @test
    public undefinedScalarTest(): void {
        expect(
            new IsUndefined(new ScalarOf(undefined)).value()
        ).to.equal(true, 'Scalar with undefined should be true');
    }

    @test
    public scalarUndefinedTest(): void {
        expect(
            new IsUndefined(new Undefined()).value()
        ).to.equal(true, 'Undefined scalar should be true');
    }

    @test
    public nullTest(): void {
        expect(
            new IsUndefined(null).value()
        ).to.equal(false, 'null should be false');
    }

    @test
    public emptyStringTest(): void {
        expect(
            new IsUndefined('').value()
        ).to.equal(false, 'empty string should be false');
    }

    @test
    public nonEmptyStringTest(): void {
        expect(
            new IsUndefined('Hello World!').value()
        ).to.equal(false, 'non-empty string should be false');
    }

    @test
    public fromFunction(): void {
        expect(
            new IsUndefined((): undefined => undefined).value()
        ).to.equal(true, 'Function that returns undefined should be true');
    }
}
