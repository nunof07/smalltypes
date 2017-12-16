import { Equals } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Equals} test.
 */
@suite
export class EqualsTest {
    @test
    public isScalar(): void {
        expect(
            new Equals([], []).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public trueTest(): void {
        expect(
            new Equals(
                [1, 2, 3],
                [1, 2, 3]
            ).value()
        ).to.equal(true, 'Equals value must be true');
    }

    @test
    public falseTest(): void {
        expect(
            new Equals(
                [1, 2, 3],
                [1, 2, 4]
            ).value()
        ).to.equal(false, 'Equals value must be false');
    }
}
