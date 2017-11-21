import { ParkMillerRandom } from '@main/system/random/index';
import { Cached } from '@main/system/scalar/index';
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
    public cachesValue(): void {
        const random: ParkMillerRandom = new ParkMillerRandom(new ScalarOf(1337));
        const cached: Cached<number> = new Cached((): number => random.next());
        const expected: number = new Rounded(0.010463855699852042, 10).value();
        expect([
            new Rounded(cached, 10).value(),
            new Rounded(cached, 10).value(),
            new Rounded(cached, 10).value()
        ]).to.be.equalTo([
            expected,
            expected,
            expected
        ]);
    }
}
