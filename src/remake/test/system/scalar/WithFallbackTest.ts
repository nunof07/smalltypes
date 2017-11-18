import { Null } from '@main/system/scalar/index';
import { WithFallback } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link WithFallback} test.
 */
@suite
export class WithFallbackTest {
    @test
    public whenBlank(): void {
        expect(
            new WithFallback(
                new Null(),
                new ScalarOf(2)
            )
            .value()
        ).to.equal(2);
    }

    @test
    public whenNotBlank(): void {
        expect(
            new WithFallback(
                new ScalarOf(1),
                new ScalarOf(2)
            )
            .value()
        ).to.equal(1);
    }
}
