import { LengthOf } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link LengthOf} test.
 */
@suite
export class LengthOfTest {
    @test
    public isScalar(): void {
        expect(
            new LengthOf([]).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public valueTest(): void {
        expect(
            new LengthOf([1, 2, 3]).value()
        ).to.equal(3);
    }
}
