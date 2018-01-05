import { Length } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Length} test.
 */
@suite
export class LengthTest {
    @test
    public isScalar(): void {
        expect(
            new Length([]).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public valueTest(): void {
        expect(
            new Length([1, 2, 3]).value()
        ).to.equal(3);
    }

    @test
    public empty(): void {
        expect(
            new Length([]).value()
        ).to.equal(0);
    }
}
