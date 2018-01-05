import {
    Accumulation,
    Folded
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Folded} test.
 */
@suite
export class FoldedTest {
    @test
    public isScalar(): void {
        expect(
            new Folded(
                [2, 2, 2],
                (accumulation: Accumulation<number, number>): number =>
                    accumulation.memo() + accumulation.current(),
                0
            ).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public sum(): void {
        expect(
            new Folded(
                [2, 2, 2],
                (accumulation: Accumulation<number, number>): number =>
                    accumulation.memo() + accumulation.current(),
                0
            ).value()
        ).to.equal(6);
    }

    @test
    public joinStrings(): void {
        expect(
            new Folded(
                ['a', 'b', 'c'],
                (accumulation: Accumulation<string, string>): string =>
                    accumulation.memo() !== ''
                        ? `${accumulation.memo()}, ${accumulation.current()}`
                        : accumulation.current(),
                ''
            ).value()
        ).to.equal('a, b, c');
    }
}
