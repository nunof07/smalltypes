import { ParkMillerRandom } from '@main';
import { RandomizedFloat } from '@main';
import { Rounded } from '@main';
import { ScalarOf } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomizedFloat} test.
 */
@suite
export class RandomizedFloatTest {
    @test
    public isScalar(): void {
        expect(
            new RandomizedFloat(
                { next: (): number => 0 },
                1,
                10
            ).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

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
