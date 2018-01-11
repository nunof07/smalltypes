import {
    EqualIterables,
    Filtered,
    Scalar,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Filtered} test.
 */
@suite
export class FilteredTest {
    @test
    public filters(): void {
        expect(
            new EqualIterables(
                new Filtered(
                    [1, 2, 3, 4, 5],
                    (input: number): boolean =>
                        (input % 2) === 0
                ),
                [2, 4]
            ).value()
        ).to.equal(true, 'Must filter elements');
    }

    @test
    public filtersScalarFunc(): void {
        expect(
            new EqualIterables(
                new Filtered(
                    [1, 2, 3, 4, 5],
                    (input: number): Scalar<boolean> =>
                        new ScalarOf((input % 2) === 0)
                ),
                [2, 4]
            ).value()
        ).to.equal(true, 'Must filter elements with function that returns scalar condition');
    }
}
