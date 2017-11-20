import { IsNull } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsNull} test.
 */
@suite
export class IsNullTest {
    @test
    public nullTest(): void {
        expect(
            new IsNull(null).value()
        ).to.equal(true, 'null should be true');
    }

    @test
    public undefinedTest(): void {
        expect(
            new IsNull(undefined).value()
        ).to.equal(false, 'undefined should be false');
    }

    @test
    public emptyStringTest(): void {
        expect(
            new IsNull('').value()
        ).to.equal(false, 'empty string should be false');
    }

    @test
    public nonEmptyStringTest(): void {
        expect(
            new IsNull('Hello World!').value()
        ).to.equal(false, 'non-empty string should be false');
    }

    @test
    public nullScalarTest(): void {
        expect(
            new IsNull(new ScalarOf(null)).value()
        ).to.equal(true, 'Scalar with null should be true');
    }
}
