import { Equals } from '@main/iterable/index';
import { Conditions } from '@main/iterable/index';
import { False } from '@main/scalar/index';
import { True } from '@main/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Conditions} test.
 */
@suite
export class ConditionsTest {
    @test
    public fromPrimitives(): void {
        expect(
            new Equals(
                new Conditions([true, false, true]),
                [true, false, true]
            ).value()
        ).to.equal(true, 'Must create Conditions from primitives');
    }

    @test
    public fromScalars(): void {
        expect(
            new Equals(
                new Conditions([new True(), new False(), new True()]),
                [true, false, true]
            ).value()
        ).to.equal(true, 'Must create Conditions from scalars');
    }

    @test
    public fromFunctions(): void {
        expect(
            new Equals(
                new Conditions([(): boolean => true, (): boolean => false, (): boolean => true]),
                [true, false, true]
            ).value()
        ).to.equal(true, 'Must create Conditions from functions');
    }
}
