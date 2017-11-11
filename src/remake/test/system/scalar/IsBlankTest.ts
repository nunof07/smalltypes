import { IsBlank } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsBlank} test.
 */
@suite
export class IsBlankTest {
    @test
    public nullTest(): void {
        expect(
            new IsBlank(
                new ScalarOf(null)
            ).value()
        ).to.equal(
            true,
            'null should be true'
        );
    }

    @test
    public undefinedTest(): void {
        expect(
            new IsBlank(
                new ScalarOf(undefined)
            ).value()
        ).to.equal(
            true,
            'undefined should be true'
        );
    }

    @test
    public emptyStringTest(): void {
        expect(
            new IsBlank(
                new ScalarOf('')
            ).value()
        ).to.equal(
            false,
            'empty string should be false'
        );
    }

    @test
    public nonEmptyStringTest(): void {
        expect(
            new IsBlank(
                new ScalarOf('Hello World!')
            ).value()
        ).to.equal(
            false,
            'non-empty string should be false'
        );
    }
}
