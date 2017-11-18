import { False } from '@main/system/scalar/index';
import { Ternary } from '@main/system/scalar/index';
import { True } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Ternary} test.
 */
@suite
export class TernaryTest {
    @test
    public trueTest(): void {
        expect(
            new Ternary(
                new True(),
                new ScalarOf(1),
                new ScalarOf(2)
            )
            .value()
        ).to.equal(1);
    }

    @test
    public falseTest(): void {
        expect(
            new Ternary(
                new False(),
                new ScalarOf(1),
                new ScalarOf(2)
            )
            .value()
        ).to.equal(2);
    }
}
