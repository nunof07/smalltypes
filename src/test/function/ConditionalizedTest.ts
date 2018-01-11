import {
    Conditionalized,
    Scalar,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Conditionalized} test.
 */
@suite
export class ConditionalizedTest {
    private readonly conditionalized: Conditionalized<boolean>;
    private readonly conditionalizedScalar: Conditionalized<boolean>;

    constructor() {
        this.conditionalized = new Conditionalized(
            (input: boolean): boolean => input,
            (input: boolean): void => {
                throw new Error(input.toString());
            }
        );
        this.conditionalizedScalar = new Conditionalized(
            (input: boolean): Scalar<boolean> => new ScalarOf(input),
            (input: boolean): void => {
                throw new Error(input.toString());
            }
        );
    }

    @test
    public isFunction(): void {
        expect(
            this.conditionalized.isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public conditionTrue(): void {
        expect(
            () => {
                this.conditionalized.apply(true);
            }
        ).to.throw(true.toString());
    }

    @test
    public conditionFalse(): void {
        expect(
            () => {
                this.conditionalized.apply(false);
            }
        ).to.not.throw();
    }

    @test
    public scalarConditionTrue(): void {
        expect(
            () => {
                this.conditionalizedScalar.apply(true);
            }
        ).to.throw(true.toString());
    }

    @test
    public scalarConditionFalse(): void {
        expect(
            () => {
                this.conditionalizedScalar.apply(false);
            }
        ).to.not.throw();
    }
}
