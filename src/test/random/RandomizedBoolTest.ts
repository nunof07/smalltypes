import { ParkMillerRandom } from '@main';
import { RandomizedBool } from '@main';
import { ScalarOf } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomizedBool} test.
 */
@suite
export class RandomizedBoolTest {
    @test
    public isScalar(): void {
        expect(
            new RandomizedBool({ next: (): number => 0 })
                .isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public min(): void {
        expect(
            new RandomizedBool({
                next: (): number => 0
            }).value()
        ).to.equal(false, 'Minimum randomized boolean value must be false');
    }

    @test
    public max(): void {
        expect(
            new RandomizedBool({
                next: (): number => 1
            }).value()
        ).to.equal(true, 'Maximum randomized boolean value must be true');
    }

    @test
    public randomBool(): void {
        expect(
            new RandomizedBool(
                new ParkMillerRandom(new ScalarOf(1337))
            ).value()
        ).to.equal(false, 'Randomized boolean must be false');
    }
}
