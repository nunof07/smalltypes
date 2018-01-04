import {
    IsBlank,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsBlank} test.
 */
@suite
export class IsBlankTest {
    @test
    public isScalar(): void {
        expect(
            new IsBlank(true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public nullTest(): void {
        expect(
            new IsBlank(null).value()
        ).to.equal(true, 'null should be true');
    }

    @test
    public undefinedTest(): void {
        expect(
            new IsBlank(undefined).value()
        ).to.equal(true, 'undefined should be true');
    }

    @test
    public emptyStringTest(): void {
        expect(
            new IsBlank('').value()
        ).to.equal(false, 'empty string should be false');
    }

    @test
    public nonEmptyStringTest(): void {
        expect(
            new IsBlank('Hello World!').value()
        ).to.equal(false, 'non-empty string should be false');
    }

    @test
    public nullScalarTest(): void {
        expect(
            new IsBlank(new ScalarOf(null)).value()
        ).to.equal(true, 'Scalar with null should be true');
    }

    @test
    public fromFunction(): void {
        expect(
            new IsBlank((): null => null).value()
        ).to.equal(true, 'Function that returns null should be true');
    }
}
