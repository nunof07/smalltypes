import {
    EqualIterables,
    FunctionOf,
    Mapped
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Mapped} test.
 */
@suite
export class MappedTest {
    @test
    public maps(): void {
        expect(
            new EqualIterables(
                new Mapped(
                    [1, 2, 3],
                    new FunctionOf((input: number): number => {
                        return input + input;
                    })
                ),
                [2, 4, 6]
            ).value()
        ).to.equal(true, 'Must map elements');
    }
}
