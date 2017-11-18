import { IllegalStateError } from '@main/system/index';
import { NoBlank } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link NoBlank} test.
 */
@suite
export class NoBlankTest {
    @test
    public nullTest(): void {
        expect(
            () => new NoBlank(
                new ScalarOf(null)
            )
            .value()
        ).to.throw(IllegalStateError);
    }

    @test
    public undefinedTest(): void {
        expect(
            () => new NoBlank(
                new ScalarOf(undefined)
            )
            .value()
        ).to.throw(IllegalStateError);
    }

    @test
    public stringTest(): void {
        expect(
            () => new NoBlank(
                new ScalarOf('hello')
            )
            .value()
        ).to.not.throw(IllegalStateError);
    }
}
