import {
    Fallback,
    Null,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Fallback} test.
 */
@suite
export class FallbackTest {
    @test
    public isScalar(): void {
        expect(
            new Fallback(true, true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public whenBlank(): void {
        expect(
            new Fallback(new Null(), new ScalarOf(2)).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlank(): void {
        expect(
            new Fallback(new ScalarOf(1), new ScalarOf(2)).value()
        ).to.equal(1);
    }

    @test
    public whenBlankValue(): void {
        expect(
            new Fallback(new ScalarOf(null), new ScalarOf(2)).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlankValue(): void {
        expect(
            new Fallback(1, new ScalarOf(2)).value()
        ).to.equal(1);
    }

    @test
    public whenBlankValueWithValueFallback(): void {
        expect(
            new Fallback(null, 2).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlankValueWithValueFallback(): void {
        expect(
            new Fallback(1, 2).value()
        ).to.equal(1);
    }

    @test
    public whenBlankFunctionResult(): void {
        expect(
            new Fallback((): null => null, (): number => 2).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlankFunctionResult(): void {
        expect(
            new Fallback((): number => 1, (): number => 2).value()
        ).to.equal(1);
    }
}
