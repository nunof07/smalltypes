import { False } from '@main';
import { ToBool } from '@main';
import { True } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link ToBool} test.
 */
@suite
export class ToBoolTest {
    @test
    public fromFalsePrimitive(): void {
        expect(
            new ToBool().apply(false)
        ).to.equal(false, 'From false primitive must be false');
    }

    @test
    public fromTruePrimitive(): void {
        expect(
            new ToBool().apply(true)
        ).to.equal(true, 'From true primitive must be true');
    }

    @test
    public fromFalseScalar(): void {
        expect(
            new ToBool().apply(new False())
        ).to.equal(false, 'From false scalar must be false');
    }

    @test
    public fromTrueScalar(): void {
        expect(
            new ToBool().apply(new True())
        ).to.equal(true, 'From true scalar must be true');
    }

    @test
    public fromFalseJsFunction(): void {
        expect(
            new ToBool().apply((): boolean => false)
        ).to.equal(false, 'From false function result must be false');
    }

    @test
    public fromTrueJsFunction(): void {
        expect(
            new ToBool().apply((): boolean => true)
        ).to.equal(true, 'From true function result must be true');
    }

    @test
    public fromFalseConditionConsequentPair(): void {
        expect(
            new ToBool<string>().apply([false, 'something'])
        ).to.equal(false, 'From false condition in ConditionConsequentPair must be false');
    }

    @test
    public fromTrueConditionConsequentPair(): void {
        expect(
            new ToBool<string>().apply([true, 'something'])
        ).to.equal(true, 'From true condition in ConditionConsequentPair must be true');
    }
}
