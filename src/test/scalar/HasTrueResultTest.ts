import { HasTrueResult } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link HasTrueResult} test.
 */
@suite
export class HasTrueResultTest {
    @test
    public isScalar(): void {
        expect(
            new HasTrueResult({ }, 'myCheck').isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public hasTrueResult(): void {
        expect(
            new HasTrueResult({ myCheck: (): true => true }, 'myCheck').value()
        ).to.equal(true, 'Object with function that returns true must return true');
    }

    @test
    public hasFalseResult(): void {
        expect(
            new HasTrueResult({ myCheck: (): boolean => false }, 'myCheck').value()
        ).to.equal(false, 'Object with function that returns false must return false');
    }

    @test
    public withoutFunction(): void {
        expect(
            new HasTrueResult({}, 'myCheck').value()
        ).to.equal(false, 'Object without function must return false');
    }

    @test
    public isNotObject(): void {
        expect(
            new HasTrueResult(2, 'myCheck').value()
        ).to.equal(false, 'Non-object must return false');
    }
}
