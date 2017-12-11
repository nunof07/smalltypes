import { Cached } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Cached} test.
 */
@suite
export class CachedTest {
    @test
    public cachesValue(): void {
        let sum: number = 0;
        const cached: Cached<number> = new Cached((): number => {
            sum += 10;

            return sum;
        });
        expect([
            cached.value(),
            cached.value(),
            cached.value()
        ]).to.deep.equal([
            10,
            10,
            10
        ]);
    }
}
