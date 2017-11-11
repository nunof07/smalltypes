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
}
