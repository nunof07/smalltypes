import { Null } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Null} test.
 */
@suite
export class NullTest {
    @test
    public isNull(): void {
        expect(
            new Null().value()
        ).to.equal(null, 'Null value must be null');
    }
}
