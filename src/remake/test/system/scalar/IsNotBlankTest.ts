import { IsNotBlank } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsNotBlank} test.
 */
@suite
export class IsNotBlankTest {
    @test
    public nullTest(): void {
        expect(
            new IsNotBlank(
                new ScalarOf(null)
            ).value()
        ).to.equal(false, 'null should be false');
    }

    @test
    public undefinedTest(): void {
        expect(
            new IsNotBlank(
                new ScalarOf(undefined)
            ).value()
        ).to.equal(false, 'undefined should be false');
    }

    @test
    public emptyStringTest(): void {
        expect(
            new IsNotBlank(
                new ScalarOf('')
            ).value()
        ).to.equal(true, 'empty string should be true');
    }

    @test
    public nonEmptyStringTest(): void {
        expect(
            new IsNotBlank(
                new ScalarOf('')
            ).value()
        ).to.equal(true, 'non-empty string should be true');
    }
}
