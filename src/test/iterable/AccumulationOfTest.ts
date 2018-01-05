import {
    Accumulation,
    AccumulationOf,
    Equals,
    False,
    True
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link AccumulationOf} test.
 */
@suite
export class AccumulationOfTest {
    @test
    public fromValue(): void {
        const accumulation: Accumulation<string, string> = new AccumulationOf('hello', 'world');

        expect(
            new Equals(
                [accumulation.memo(), accumulation.current()],
                ['hello', 'world']
            ).value()
        ).to.equal(true, 'Must return initial values');
    }

    @test
    public fromScalar(): void {
        const accumulation: Accumulation<boolean, boolean> = new AccumulationOf(new True(), new False());

        expect(
            new Equals(
                [accumulation.memo(), accumulation.current()],
                [true, false]
            ).value()
        ).to.equal(true, 'Must return correct boolean values');
    }

    @test
    public fromFunction(): void {
        const accumulation: Accumulation<string, string> = new AccumulationOf((): string => 'hello', (): string => 'world');

        expect(
            new Equals(
                [accumulation.memo(), accumulation.current()],
                ['hello', 'world']
            ).value()
        ).to.equal(true, 'Must return correct string values');
    }
}
