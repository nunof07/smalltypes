import { Sum } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Sum} test.
 */
@suite
export class SumTest {
    @test
    public isScalar(): void {
        expect(
            new Sum([]).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public sumOfIntegers(): void {
        expect(
            new Sum([1, 2, 3]).value()
        ).to.equal(6);
    }

    @test
    public sumOfFloats(): void {
        expect(
            new Sum([1.6, 1.6]).value()
        ).to.equal(3.2);
    }

    @test
    public emptySum(): void {
        expect(
            new Sum([]).value()
        ).to.equal(0);
    }
}
