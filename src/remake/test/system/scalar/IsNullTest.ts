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
    @test.only
    public nullTest(): void {
        expect(
            new IsNull(
                new ScalarOf(null)
            ).value()
        ).to.equal(
            true,
            'null should be true'
        );
    }

    @test.only
    public undefinedTest(): void {
        expect(
            new IsNull(
                new ScalarOf(undefined)
            ).value()
        ).to.equal(
            false,
            'undefined should be false'
        );
    }

    @test.only
    public emptyStringTest(): void {
        expect(
            new IsNull(
                new ScalarOf('')
            ).value()
        ).to.equal(
            false,
            'empty string should be false'
        );
    }

    @test.only
    public nonEmptyStringTest(): void {
        expect(
            new IsNull(
                new ScalarOf('Hello World!')
            ).value()
        ).to.equal(
            false,
            'non-empty string should be false'
        );
    }
}
