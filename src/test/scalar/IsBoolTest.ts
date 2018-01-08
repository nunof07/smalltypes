import {
    False,
    IsBool,
    True
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsBool} test.
 */
@suite
export class IsBoolTest {
    @test
    public isScalar(): void {
        expect(
            new IsBool(true, true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public trueTrueTest(): void {
        expect(
            new IsBool(true, true).value()
        ).to.equal(true, 'True-true should return true');
    }

    @test
    public trueFalseTest(): void {
        expect(
            new IsBool(true, false).value()
        ).to.equal(false, 'True-false should return false');
    }

    @test
    public falseFalseTest(): void {
        expect(
            new IsBool(false, false).value()
        ).to.equal(true, 'False-false should return true');
    }

    @test
    public falseTrueTest(): void {
        expect(
            new IsBool(false, true).value()
        ).to.equal(false, 'False-true should return false');
    }

    @test
    public trueTrueScalarTest(): void {
        expect(
            new IsBool(new True(), new True()).value()
        ).to.equal(true, 'True-true (scalar) should return true');
    }

    @test
    public trueFalseScalarTest(): void {
        expect(
            new IsBool(new True(), new False()).value()
        ).to.equal(false, 'True-false (scalar) should return false');
    }

    @test
    public falseFalseScalarTest(): void {
        expect(
            new IsBool(new False(), new False()).value()
        ).to.equal(true, 'False-false (scalar) should return true');
    }

    @test
    public falseTrueScalarTest(): void {
        expect(
            new IsBool(new False(), new True()).value()
        ).to.equal(false, 'False-true (scalar) should return false');
    }
}
