import { HasLength } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link HasLength} test.
 */
@suite
export class HasLengthTest {
    @test
    public isScalar(): void {
        expect(
            new HasLength(1, 1).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public hasLengthTrueTest(): void {
        expect(
            new HasLength({ length: 2 }, 2).value()
        ).to.equal(true, 'Same length should return true');
    }

    @test
    public hasLengthFalseTest(): void {
        expect(
            new HasLength({ length: 2 }, 5).value()
        ).to.equal(false, 'Different length should return false');
    }

    @test
    public noLengthTest(): void {
        expect(
            new HasLength({ a: true }, 5).value()
        ).to.equal(false, 'No length should return false');
    }
}
