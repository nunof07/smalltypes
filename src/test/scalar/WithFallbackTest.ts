import { Null } from '@main';
import { ScalarOf } from '@main';
import { WithFallback } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link WithFallback} test.
 */
@suite
export class WithFallbackTest {
    @test
    public isScalar(): void {
        expect(
            new WithFallback(true, true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public whenBlank(): void {
        expect(
            new WithFallback(new Null(), new ScalarOf(2)).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlank(): void {
        expect(
            new WithFallback(new ScalarOf(1), new ScalarOf(2)).value()
        ).to.equal(1);
    }

    @test
    public whenBlankValue(): void {
        expect(
            new WithFallback(new ScalarOf(null), new ScalarOf(2)).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlankValue(): void {
        expect(
            new WithFallback(1, new ScalarOf(2)).value()
        ).to.equal(1);
    }

    @test
    public whenBlankValueWithValueFallback(): void {
        expect(
            new WithFallback(null, 2).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlankValueWithValueFallback(): void {
        expect(
            new WithFallback(1, 2).value()
        ).to.equal(1);
    }

    @test
    public whenBlankFunctionResult(): void {
        expect(
            new WithFallback((): null => null, (): number => 2).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlankFunctionResult(): void {
        expect(
            new WithFallback((): number => 1, (): number => 2).value()
        ).to.equal(1);
    }
}
