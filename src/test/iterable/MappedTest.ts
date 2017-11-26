import { FunctionOf } from '@main/function/index';
import { Equals } from '@main/iterable/index';
import { Mapped } from '@main/iterable/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Mapped} test.
 */
@suite
export class MappedTest {
    @test
    public maps(): void {
        expect(
            new Equals(
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
