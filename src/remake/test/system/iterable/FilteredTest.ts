import { FunctionOf } from '@main/system/function/index';
import { Equals } from '@main/system/iterable/index';
import { Filtered } from '@main/system/iterable/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Filtered} test.
 */
@suite
export class FilteredTest {
    @test
    public filters(): void {
        expect(
            new Equals(
                new Filtered(
                    [1, 2, 3, 4, 5],
                    new FunctionOf((input: number): boolean => {
                        return (input % 2) === 0;
                    })
                ),
                [2, 4]
            ).value()
        ).to.equal(true, 'Must filter elements');
    }
}