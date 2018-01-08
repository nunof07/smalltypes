import { IsNumber } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsNumber} test.
 */
@suite
export class IsNumberTest {
    @test
    public isScalar(): void {
        expect(
            new IsNumber(1, 1).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public numberTrueTest(): void {
        expect(
            new IsNumber(1, 1).value()
        ).to.equal(true, 'Same number should return true');
    }

    @test
    public numberFalseTest(): void {
        expect(
            new IsNumber(1, 2).value()
        ).to.equal(false, 'Different numbers should return false');
    }

    @test
    public booleanTrueTest(): void {
        expect(
            new IsNumber(true, 1).value()
        ).to.equal(false, 'True should return false');
    }

    @test
    public booleanFalseTest(): void {
        expect(
            new IsNumber(false, 0).value()
        ).to.equal(false, 'False should return false');
    }

    @test
    public stringTest(): void {
        expect(
            new IsNumber('1', 1).value()
        ).to.equal(false, 'String should return false');
    }

    @test
    public objectTest(): void {
        expect(
            new IsNumber({}, 1).value()
        ).to.equal(false, 'Object should return false');
    }
}
