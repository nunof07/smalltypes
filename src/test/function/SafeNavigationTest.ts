import {
    FunctionOf,
    SafeNavigation
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link SafeNavigation} test.
 */
@suite
export class SafeNavigationTest {
    private readonly func: SafeNavigation<{ readonly message: string } | undefined>;

    constructor() {
        this.func = new SafeNavigation(
            new FunctionOf((input: { readonly message: string }): void => {
                throw new Error(input.message);
            })
        );
    }

    @test
    public isFunction(): void {
        expect(
            this.func.isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public blankTest(): void {
        expect(
            () => {
                this.func.apply(undefined);
            }
        ).to.not.throw();
    }

    @test
    public nonBlankTest(): void {
        expect(
            () => {
                this.func.apply({ message: 'hello' });
            }
        ).to.throw('hello');
    }
}
