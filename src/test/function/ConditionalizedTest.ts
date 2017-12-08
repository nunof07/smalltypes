import { Conditionalized } from '@main';
import { FunctionOf } from '@main';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Conditionalized} test.
 */
@suite
export class ConditionalizedTest {
    private readonly conditionalized: Conditionalized<boolean>;

    constructor() {
        this.conditionalized = new Conditionalized(
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
}
