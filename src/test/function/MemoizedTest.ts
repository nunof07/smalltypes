import { Memoized } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Memoized} test.
 */
@suite
export class MemoizedTest {
    @test
    public isFunction(): void {
        expect(
            new Memoized((): boolean => {
                return true;
            }).isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public cachesResults(): void {
        let sum: number = 0;
        const cached: Memoized<boolean, number>
            = new Memoized((): number => {
                sum += 10;

                return sum;
            });
        expect([
            cached.apply(true),
            cached.apply(true),
            cached.apply(true)
        ]).to.deep.equal([
            10,
            10,
            10
        ]);
    }
}
