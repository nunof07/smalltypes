import { And } from '@main/system/scalar/index';
import { True } from '@main/system/scalar/index';
import { False } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link And} test.
 */
@suite
export class AndTest {
    @test
    public isTrue(): void {
        expect(
            new And(new True(), new True()).value()
        ).to.equal(true, 'When all conditions are true must return true');
    }

    @test
    public isFalse(): void {
        expect(
            new And(new True(), new False()).value()
        ).to.equal(false, 'When at least one condition is false must return false');
    }
}
