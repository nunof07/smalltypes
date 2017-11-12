import { FunctionOf } from '@main/system/function/index';
import { SafeNavigation } from '@main/system/function/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link SafeNavigation} test.
 */
@suite
export class SafeNavigationTest {
    private readonly func: SafeNavigation<{ message: string } | undefined>;

    constructor() {
        this.func = new SafeNavigation(
            new FunctionOf((input: { message: string }): void => {
                throw new Error(input.message);
            })
        );
    }

    @test.only
    public blankTest(): void {
        expect(
            () => {
                this.func.apply(undefined);
            }
        ).to.not.throw();
    }

    @test.only
    public nonBlankTest(): void {
        expect(
            () => {
                this.func.apply({ message: 'hello' });
            }
        ).to.throw(
            'hello'
        );
    }
}
