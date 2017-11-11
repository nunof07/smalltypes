import { IsUndefined } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsUndefined} test.
 */
@suite
export class IsUndefinedTest {
    @test
    public undefinedTest(): void {
        expect(
            new IsUndefined(
                new ScalarOf(undefined)
            ).value()
        ).to.equal(
            true,
            'undefined should be true'
        );
    }

    @test
    public nullTest(): void {
        expect(
            new IsUndefined(
                new ScalarOf(null)
            ).value()
        ).to.equal(
            false,
            'null should be false'
        );
    }

    @test
    public emptyStringTest(): void {
        expect(
            new IsUndefined(
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
            new IsUndefined(
                new ScalarOf('Hello World!')
            ).value()
        ).to.equal(
            false,
            'non-empty string should be false'
        );
    }
}
