import { ParkMillerRandom } from '@main';
import { RandomizedInt } from '@main';
import { ScalarOf } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomizedInt} test.
 */
@suite
export class RandomizedIntTest {
    @test
    public isScalar(): void {
        expect(
            new RandomizedInt(
                { next: (): number => 0 },
                1,
                10
            ).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public min(): void {
        expect(
            new RandomizedInt(
                { next: (): number => 0 },
                1,
                10
            ).value()
        ).to.equal(1);
    }

    @test
    public max(): void {
        expect(
            new RandomizedInt(
                { next: (): number => 1 },
                1,
                10
            ).value()
        ).to.equal(10);
    }

    @test
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
