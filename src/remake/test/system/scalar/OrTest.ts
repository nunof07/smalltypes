import { Or } from '@main/system/scalar/index';
import { True } from '@main/system/scalar/index';
import { False } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Or} test.
 */
@suite
export class OrTest {
    @test
    public isTrue(): void {
        expect(
            new Or(new False(), new True()).value()
        ).to.equal(true, 'When at least one true condition must return true');
    }

    @test
    public isFalse(): void {
        expect(
            new Or(new False(), new False()).value()
        ).to.equal(false, 'When all conditions are false must return false');
    }
}
