import {
    Conditions,
    EqualIterables,
    False,
    True
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Conditions} test.
 */
@suite
export class ConditionsTest {
    @test
    public fromPrimitives(): void {
        expect(
            new EqualIterables(
                new Conditions([true, false, true]),
                [true, false, true]
            ).value()
        ).to.equal(true, 'Must create Conditions from primitives');
    }

    @test
    public fromScalars(): void {
        expect(
            new EqualIterables(
                new Conditions([new True(), new False(), new True()]),
                [true, false, true]
            ).value()
        ).to.equal(true, 'Must create Conditions from scalars');
    }

    @test
    public fromFunctions(): void {
        expect(
            new EqualIterables(
                new Conditions([(): boolean => true, (): boolean => false, (): boolean => true]),
                [true, false, true]
            ).value()
        ).to.equal(true, 'Must create Conditions from functions');
    }
}
