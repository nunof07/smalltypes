import { ParkMillerRandom } from '@main/system/random/index';
import { RandomizedPercentage } from '@main/system/random/index';
import { Rounded } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomizedPercentage} test.
 */
@suite
export class RandomizedPercentageTest {
    @test
    public min(): void {
        expect(
            new RandomizedPercentage({
                next: (): number => 0
            }).value()
        ).to.equal(0);
    }

    @test
    public max(): void {
        expect(
            new RandomizedPercentage({
                next: (): number => 1
            }).value()
        ).to.equal(1);
    }

    @test
    public randomFloat(): void {
        expect(
            new Rounded(
                new RandomizedPercentage(
                    new ParkMillerRandom(new ScalarOf(1337))
                ),
                10
            ).value()
        ).to.equal(
            new Rounded(
                new ScalarOf(0.010463855699852042),
                10
            ).value()
        );
    }
}
