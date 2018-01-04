import {
    False,
    Or,
    True
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Or} test.
 */
@suite
export class OrTest {
    @test
    public isScalar(): void {
        expect(
            new Or().isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public isTrue(): void {
        expect(
            new Or(false, true).value()
        ).to.equal(true, 'When at least one true condition must return true');
    }

    @test
    public isFalse(): void {
        expect(
            new Or(false, false).value()
        ).to.equal(false, 'When all conditions are false must return false');
    }

    @test
    public isTrueScalar(): void {
        expect(
            new Or(new False(), new True()).value()
        ).to.equal(true, 'When at least one true condition must return true (Scalar)');
    }

    @test
    public isFalseScalar(): void {
        expect(
            new Or(new False(), new False()).value()
        ).to.equal(false, 'When all conditions are false must return false (Scalar)');
    }

    @test
    public isTrueFunction(): void {
        expect(
            new Or((): boolean => false, (): boolean => true).value()
        ).to.equal(true, 'When at least one true condition must return true (Function)');
    }

    @test
    public isFalseFunction(): void {
        expect(
            new Or((): boolean => false, (): boolean => false).value()
        ).to.equal(false, 'When all conditions are false must return false (Function)');
    }
}
