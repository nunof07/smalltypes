import { Not } from '@main';
import { True } from '@main';
import { False } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Not} test.
 */
@suite
export class NotTest {
    @test
    public notFalse(): void {
        expect(
            new Not(false).value()
        ).to.equal(true, 'Not false must return true');
    }

    @test
    public notTrue(): void {
        expect(
            new Not(true).value()
        ).to.equal(false, 'Not true must return false');
    }

    @test
    public notFalseScalar(): void {
        expect(
            new Not(new False()).value()
        ).to.equal(true, 'Not false must return true (Scalar)');
    }

    @test
    public notTrueScalar(): void {
        expect(
            new Not(new True()).value()
        ).to.equal(false, 'Not true must return false (Scalar)');
    }

    @test
    public notFalseFunction(): void {
        expect(
            new Not((): boolean => false).value()
        ).to.equal(true, 'Not false must return true (Function)');
    }

    @test
    public notTrueFunction(): void {
        expect(
            new Not((): boolean => true).value()
        ).to.equal(false, 'Not true must return false (Function)');
    }
}
