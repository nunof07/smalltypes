import {
    IsNull,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsNull} test.
 */
@suite
export class IsNullTest {
    @test
    public isScalar(): void {
        expect(
            new IsNull(true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

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

    @test
    public fromFunction(): void {
        expect(
            new IsNull((): null => null).value()
        ).to.equal(true, 'Function that returns null should be true');
    }
}
