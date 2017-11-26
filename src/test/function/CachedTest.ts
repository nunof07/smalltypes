import { Cached } from '@main/function/index';
import { FunctionOf } from '@main/function/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Cached} test.
 */
@suite
export class CachedTest {
    @test
    public cachesResults(): void {
        let sum: number = 0;
        const cached: Cached<boolean, number> = new Cached(
            new FunctionOf((): number => {
                sum += 10;

                return sum;
            })
        );
        expect([
            cached.apply(true),
            cached.apply(true),
            cached.apply(true)
        ]).to.be.equalTo([
            10,
            10,
            10
        ]);
    }
}
