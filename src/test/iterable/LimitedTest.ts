import {
    Equals,
    Limited
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Limited} test.
 */
@suite
export class LimitedTest {
    @test
    public limits(): void {
        expect(
            new Equals(
                new Limited(
                    [1, 2, 3, 4, 5],
                    3
                ),
                [1, 2, 3]
            ).value()
        ).to.equal(true, 'Must limit elements');
    }

    @test
    public emptyIterableTest(): void {
        expect(
            new Equals(
                new Limited(
                    [],
                    3
                ),
                []
            ).value()
        ).to.equal(true, 'Must be empty with empty iterable');
    }

    @test
    public negativeLimitTest(): void {
        expect(
            new Equals(
                new Limited(
                    [1, 2, 3],
                    -1
                ),
                []
            ).value()
        ).to.equal(true, 'Must be empty with negative limit');
    }
}
