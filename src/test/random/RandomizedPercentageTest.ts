import { ParkMillerRandom } from '@main';
import { RandomizedPercentage } from '@main';
import { Rounded } from '@main';
import { ScalarOf } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomizedPercentage} test.
 */
@suite
export class RandomizedPercentageTest {
    @test
    public isScalar(): void {
        expect(
            new RandomizedPercentage({ next: (): number => 0 })
                .isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

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
            new Rounded(0.010463855699852042, 10).value()
        );
    }
}
