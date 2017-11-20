import { Cached } from '@main/system/function/index';
import { FunctionOf } from '@main/system/function/index';
import { ParkMillerRandom } from '@main/system/random/index';
import { Rounded } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
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
        const random: ParkMillerRandom = new ParkMillerRandom(new ScalarOf(1337));
        const cached: Cached<boolean, number> = new Cached(
            new FunctionOf((): number => random.next())
        );
        const expected: number = round(0.010463855699852042);
        expect([
            round(cached.apply(true)),
            round(cached.apply(true)),
            round(cached.apply(true))
        ]).to.be.equalTo([
            expected,
            expected,
            expected
        ]);

        function round(n: number): number {
            return new Rounded(n, 10).value();
        }
    }
}
