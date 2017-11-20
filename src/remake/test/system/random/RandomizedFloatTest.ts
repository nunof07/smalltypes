import { ParkMillerRandom } from '@main/system/random/index';
import { RandomizedFloat } from '@main/system/random/index';
import { Rounded } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomizedFloat} test.
 */
@suite
export class RandomizedFloatTest {
    @test
    public min(): void {
        expect(
            new RandomizedFloat(
                { next: (): number => 0 },
                1,
                10
            ).value()
        ).to.equal(1);
    }

    @test
    public max(): void {
        expect(
            new RandomizedFloat(
                { next: (): number => 1 },
                1,
                10
            ).value()
        ).to.equal(10);
    }

    @test
    public randomFloat(): void {
        expect(
            new Rounded(
                new RandomizedFloat(
                    new ParkMillerRandom(new ScalarOf(1337)),
                    1,
                    10
                ),
                10
            ).value()
        ).to.equal(
            new Rounded(1.0941747012986685, 10).value()
        );
    }
}
