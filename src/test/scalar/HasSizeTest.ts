import { HasSize } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link HasSize} test.
 */
@suite
export class HasSizeTest {
    @test
    public isScalar(): void {
        expect(
            new HasSize(1, 1).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public hasSizeTrueTest(): void {
        expect(
            new HasSize({ size: 2 }, 2).value()
        ).to.equal(true, 'Same size should return true');
    }

    @test
    public hasSizeFalseTest(): void {
        expect(
            new HasSize({ size: 2 }, 5).value()
        ).to.equal(false, 'Different size should return false');
    }

    @test
    public noSizeTest(): void {
        expect(
            new HasSize({ a: true, length: 10 }, 5).value()
        ).to.equal(false, 'No size should return false');
    }
}
