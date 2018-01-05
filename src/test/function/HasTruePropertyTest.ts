import { HasTrueProperty } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link HasTrueProperty} test.
 */
@suite
export class HasTruePropertyTest {
    @test
    public isFunction(): void {
        expect(
            new HasTrueProperty('myCheck')
                .isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public hasTrueProperty(): void {
        expect(
            new HasTrueProperty('myCheck')
                .apply({ myCheck: true })
        ).to.equal(true, 'Object with property set to true must return true');
    }

    @test
    public hasFalseProperty(): void {
        expect(
            new HasTrueProperty('myCheck')
                .apply({ myCheck: false })
        ).to.equal(false, 'Object with property set to false must return false');
    }

    @test
    public withoutProperty(): void {
        expect(
            new HasTrueProperty('myCheck')
                .apply({ something: true })
        ).to.equal(false, 'Object without property must return false');
    }

    @test
    public isNotObject(): void {
        expect(
            new HasTrueProperty('myCheck')
                .apply(2)
        ).to.equal(false, 'Non-object must return false');
    }
}
