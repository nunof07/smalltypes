import { EqualIterables } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link EqualIterables} test.
 */
@suite
export class EqualIterablesTest {
    @test
    public isScalar(): void {
        expect(
            new EqualIterables([], []).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public trueTest(): void {
        expect(
            new EqualIterables(
                [1, 2, 3],
                [1, 2, 3]
            ).value()
        ).to.equal(true, 'Equals value must be true');
    }

    @test
    public falseTest(): void {
        expect(
            new EqualIterables(
                [1, 2, 3],
                [1, 2, 4]
            ).value()
        ).to.equal(false, 'Equals value must be false');
    }

    @test
    public differentLengthsTest(): void {
        expect(
            new EqualIterables(
                [1, 2, 3],
                [1, 2, 3, 4]
            ).value()
        ).to.equal(false, 'With different lengths equals value must be false');
    }
}
