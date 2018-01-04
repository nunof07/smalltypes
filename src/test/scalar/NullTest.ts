import { Null } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Null} test.
 */
@suite
export class NullTest {
    @test
    public isScalar(): void {
        expect(
            new Null().isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public isNull(): void {
        expect(
            new Null().value()
        ).to.equal(null, 'Null value must be null');
    }
}
