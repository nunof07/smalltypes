import { IsEmptyIterable } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsEmptyIterable} test.
 */
@suite
export class IsEmptyIterableTest {
    @test
    public isScalar(): void {
        expect(
            new IsEmptyIterable([]).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public emptyTest(): void {
        expect(
            new IsEmptyIterable([]).value()
        ).to.equal(true, 'Empty iterable should return true');
    }

    @test
    public nonEmptyTest(): void {
        expect(
            new IsEmptyIterable([1, 2]).value()
        ).to.equal(false, 'Non-empty iterable should return false');
    }
}
