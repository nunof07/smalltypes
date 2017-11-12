import { True } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link True} test.
 */
@suite
export class TrueTest {
    @test
    public isTrue(): void {
        expect(
           new True().value()
        ).to.equal(
            true,
            'True must be true'
        );
    }
}
