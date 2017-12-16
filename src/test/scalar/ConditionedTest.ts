import { Conditioned } from '@main';
import { False } from '@main';
import { ScalarOf } from '@main';
import { True } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Conditioned} test.
 */
@suite
export class ConditionedTest {
    @test
    public justAlternative(): void {
        expect(
            new Conditioned('hello').value()
        ).to.equal('hello');
    }

    @test
    public oneTrueCondition(): void {
        expect(
            new Conditioned('hello', [true, 'world']).value()
        ).to.equal('world');
    }

    @test
    public oneFalseCondition(): void {
        expect(
            new Conditioned('hello', [false, 'world']).value()
        ).to.equal('hello');
    }

    @test
    public firstTrueCondition(): void {
        expect(
            new Conditioned('hello', [true, 'world'], [false, 'you']).value()
        ).to.equal('world');
    }

    @test
    public secondTrueCondition(): void {
        expect(
            new Conditioned('hello', [false, 'world'], [true, 'you']).value()
        ).to.equal('you');
    }

    @test
    public multipleTrueConditions(): void {
        expect(
            new Conditioned('hello', [true, 'world'], [true, 'you']).value()
        ).to.equal('world');
    }

    @test
    public multipleFalseConditions(): void {
        expect(
            new Conditioned('hello', [false, 'world'], [false, 'you']).value()
        ).to.equal('hello');
    }

    @test
    public secondTrueConditionWithScalars(): void {
        expect(
            new Conditioned(
                new ScalarOf('hello'),
                [new False(), new ScalarOf('world')],
                [new True(), new ScalarOf('you')]
            ).value()
        ).to.equal('you');
    }
}
