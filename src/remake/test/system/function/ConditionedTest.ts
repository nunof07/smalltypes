import { Conditioned } from '@main/system/function/index';
import { FunctionOf } from '@main/system/function/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Conditioned} test.
 */
@suite
export class ConditionedTest {
    private readonly conditioned: Conditioned<boolean>;

    constructor() {
        this.conditioned = new Conditioned(
            new FunctionOf((input: boolean): boolean => {
                return input;
            }),
            new FunctionOf((input: boolean): void => {
                throw new Error(input.toString());
            })
        );
    }

    @test
    public conditionTrue(): void {
        expect(
            () => {
                this.conditioned.apply(true);
            }
        ).to.throw(true.toString());
    }

    @test
    public conditionFalse(): void {
        expect(
            () => {
                this.conditioned.apply(false);
            }
        ).to.not.throw();
    }
}
