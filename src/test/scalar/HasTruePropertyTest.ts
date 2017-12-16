import { HasTrueProperty } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link HasTrueProperty} test.
 */
@suite
export class HasTruePropertyTest {
    @test
    public isScalar(): void {
        expect(
            new HasTrueProperty({ }, 'myCheck').isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public hasTrueProperty(): void {
        expect(
            new HasTrueProperty({ myCheck: true }, 'myCheck').value()
        ).to.equal(true, 'Object with property set to true must return true');
    }

    @test
    public hasFalseProperty(): void {
        expect(
            new HasTrueProperty({ myCheck: false }, 'myCheck').value()
        ).to.equal(false, 'Object with property set to false must return false');
    }

    @test
    public withoutProperty(): void {
        expect(
            new HasTrueProperty({ something: true }, 'myCheck').value()
        ).to.equal(false, 'Object without property must return false');
    }

    @test
    public isNotObject(): void {
        expect(
            new HasTrueProperty(2, 'myCheck').value()
        ).to.equal(false, 'Non-object must return false');
    }
}
