import {
    And,
    False,
    True
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link And} test.
 */
@suite
export class AndTest {
    @test
    public isScalar(): void {
        expect(
            new And().isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public isTrue(): void {
        expect(
            new And(true, true).value()
        ).to.equal(true, 'When all conditions are true must return true');
    }

    @test
    public isFalse(): void {
        expect(
            new And(true, false).value()
        ).to.equal(false, 'When at least one condition is false must return false (Scalar)');
    }

    @test
    public isTrueScalar(): void {
        expect(
            new And(new True(), new True()).value()
        ).to.equal(true, 'When all conditions are true must return true');
    }

    @test
    public isFalseScalar(): void {
        expect(
            new And(new True(), new False()).value()
        ).to.equal(false, 'When at least one condition is false must return false (Scalar)');
    }

    @test
    public isTrueFunction(): void {
        expect(
            new And((): boolean => true, (): boolean => true).value()
        ).to.equal(true, 'When all conditions are true must return true (Function)');
    }

    @test
    public isFalsFunctione(): void {
        expect(
            new And((): boolean => true, (): boolean => false).value()
        ).to.equal(false, 'When at least one condition is false must return false (Function)');
    }
}
