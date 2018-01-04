import {
    False,
    ScalarOf,
    Ternary,
    True
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Ternary} test.
 */
@suite
export class TernaryTest {
    @test
    public isScalar(): void {
        expect(
            new Ternary(true, true, true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public trueTest(): void {
        expect(
            new Ternary(
                new True(),
                new ScalarOf(1),
                new ScalarOf(2)
            )
            .value()
        ).to.equal(1);
    }

    @test
    public falseTest(): void {
        expect(
            new Ternary(
                new False(),
                new ScalarOf(1),
                new ScalarOf(2)
            )
            .value()
        ).to.equal(2);
    }
}
