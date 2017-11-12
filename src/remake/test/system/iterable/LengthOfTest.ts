import { LengthOf } from '@main/system/iterable/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link LengthOf} test.
 */
@suite
export class LengthOfTest {
    @test
    public valueTest(): void {
        expect(
            new LengthOf([1, 2, 3]).value()
        ).to.equal(
            3
        );
    }
}
