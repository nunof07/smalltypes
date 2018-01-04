import {
    False,
    IsTrue,
    True
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsTrue} test.
 */
@suite
export class IsTrueTest {
    @test
    public isFunction(): void {
        expect(
            new IsTrue().isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public truePrimitive(): void {
        expect(
            new IsTrue().apply(true)
        ).to.equal(true, 'True primitive input must return true');
    }

    @test
    public falsePrimitive(): void {
        expect(
            new IsTrue().apply(false)
        ).to.equal(false, 'False primitive input must return false');
    }

    @test
    public trueScalar(): void {
        expect(
            new IsTrue().apply(new True())
        ).to.equal(true, 'True scalar input must return true');
    }

    @test
    public falseScalar(): void {
        expect(
            new IsTrue().apply(new False())
        ).to.equal(false, 'False scalar input must return false');
    }

    @test
    public trueFunction(): void {
        expect(
            new IsTrue().apply((): boolean => true)
        ).to.equal(true, 'True result from function as input must return true');
    }

    @test
    public falseFunction(): void {
        expect(
            new IsTrue().apply((): boolean => false)
        ).to.equal(false, 'False result from function as input must return false');
    }

    @test
    public trueConditionConsequent(): void {
        expect(
            new IsTrue().apply([true, 'hello'])
        ).to.equal(true, 'True condition in ConditionConsequentPair as input must return true');
    }

    @test
    public falseConditionConsequent(): void {
        expect(
            new IsTrue().apply([false, 'hello'])
        ).to.equal(false, 'False condition in ConditionConsequentPair as input must return false');
    }
}
