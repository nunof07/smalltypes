import { HasTrueResult } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link HasTrueResult} test.
 */
@suite
export class HasTrueResultTest {
    @test
    public isFunction(): void {
        expect(
            new HasTrueResult('myCheck').isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public hasTrueResult(): void {
        expect(
            new HasTrueResult('myCheck')
                .apply({ myCheck: (): true => true })
        ).to.equal(true, 'Object with function that returns true must return true');
    }

    @test
    public hasFalseResult(): void {
        expect(
            new HasTrueResult('myCheck')
                .apply({ myCheck: (): boolean => false })
        ).to.equal(false, 'Object with function that returns false must return false');
    }

    @test
    public withoutFunction(): void {
        expect(
            new HasTrueResult('myCheck')
                .apply({})
        ).to.equal(false, 'Object without function must return false');
    }

    @test
    public isNotObject(): void {
        expect(
            new HasTrueResult('myCheck')
                .apply(2)
        ).to.equal(false, 'Non-object must return false');
    }
}
