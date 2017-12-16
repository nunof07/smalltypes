import { Undefined } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Undefined} test.
 */
@suite
export class UndefinedTest {
    @test
    public isScalar(): void {
        expect(
            new Undefined().isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public isUndefined(): void {
        expect(
            new Undefined().value()
        ).to.equal(undefined, 'Undefined value must be undefined');
    }
}
