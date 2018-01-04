import { False } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link False} test.
 */
@suite
export class FalseTest {
    @test
    public isScalar(): void {
        expect(
            new False().isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public isFalse(): void {
        expect(
            new False().value()
        ).to.equal(false, 'False value must be false');
    }
}
