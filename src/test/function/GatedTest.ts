import {
    Gated,
    Scalar,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Gated} test.
 */
@suite
export class GatedTest {
    private readonly gated: Gated<boolean>;
    private readonly gatedScalar: Gated<boolean>;

    constructor() {
        this.gated = new Gated(
            (input: boolean): boolean => input,
            (input: boolean): void => {
                throw new Error(input.toString());
            }
        );
        this.gatedScalar = new Gated(
            (input: boolean): Scalar<boolean> => new ScalarOf(input),
            (input: boolean): void => {
                throw new Error(input.toString());
            }
        );
    }

    @test
    public isFunction(): void {
        expect(
            this.gated.isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public conditionTrue(): void {
        expect(
            () => {
                this.gated.apply(true);
            }
        ).to.throw(true.toString());
    }

    @test
    public conditionFalse(): void {
        expect(
            () => {
                this.gated.apply(false);
            }
        ).to.not.throw();
    }

    @test
    public scalarConditionTrue(): void {
        expect(
            () => {
                this.gatedScalar.apply(true);
            }
        ).to.throw(true.toString());
    }

    @test
    public scalarConditionFalse(): void {
        expect(
            () => {
                this.gatedScalar.apply(false);
            }
        ).to.not.throw();
    }
}
