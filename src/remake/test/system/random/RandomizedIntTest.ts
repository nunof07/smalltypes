import { ParkMillerRandom } from '@main/system/random/index';
import { RandomizedInt } from '@main/system/random/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomizedInt} test.
 */
@suite
export class RandomizedIntTest {
    @test.only
    public greaterThanOrEqualToMin(): void {
        throw new Error();
    }

    @test.only
    public lessThanMax(): void {
        throw new Error();
    }

    @test.only
    public randomInt(): void {
        expect(
            new RandomizedInt(
                new ParkMillerRandom(new ScalarOf(1337)),
                1,
                10
            ).value()
        ).to.equal(1);
    }
}
