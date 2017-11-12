import { False } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link False} test.
 */
@suite
export class FalseTest {
    @test
    public isFalse(): void {
        expect(
           new False().value()
        ).to.equal(
            false,
            'False value must be false'
        );
    }
}
