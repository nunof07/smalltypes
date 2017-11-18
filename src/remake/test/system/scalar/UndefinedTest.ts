import { Undefined } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Undefined} test.
 */
@suite
export class UndefinedTest {
    @test
    public isUndefined(): void {
        expect(
            new Undefined().value()
        ).to.equal(undefined, 'Undefined value must be undefined');
    }
}
