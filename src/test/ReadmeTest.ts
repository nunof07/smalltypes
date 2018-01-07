import {
    Cached,
    Equals,
    Filtered,
    Limited,
    Mapped,
    ParkMillerRandom,
    RandomizedFloat,
    Rounded,
    Scalar,
    Sum
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * Several misc tests for code that is shown in the readme.
 */
@suite
export class ReadmeTest {
    @test
    public sum(): void {
        const randomFloat: Scalar<number> =
            new RandomizedFloat(// randomized floating point number
                new ParkMillerRandom(), // random number generator
                1,
                10
            );
        expect(
            new Cached(// make sure value is only computed once
                new Rounded(// round number to desired precision
                    new Sum(// calculate total from iterable of numbers
                        new Mapped(// map each item in an iterable to a different value
                            [
                                { id: 1, value: randomFloat.value() },
                                { id: 2, value: randomFloat.value() },
                                { id: 3, value: randomFloat.value() },
                                { id: 4, value: randomFloat.value() },
                                { id: 5, value: randomFloat.value() }
                            ],
                            (item: { readonly value: number }): number =>
                                item.value // only want the value from each item
                        )
                    ),
                    3
                )
            ).value() // calculate and retrieve value
        ).to.be.greaterThan(1);
    }

    @test
    public equals(): void {
        expect(
            new Equals(// compare iterables for equality
                ['Hello', 'World', '!'],
                new Mapped(// map each item in an iterable to a different value
                    new Limited(// limit an iterable to a certain amount of items
                        new Filtered(// filter an iterable to a subset of items that match callback
                            [
                                { id: 1, name: 'Hello', age: 21 },
                                { id: 2, name: 'World', age: 22 },
                                { id: 3, name: '!', age: 23 },
                                { id: 4, name: 'Not', age: 16 }
                            ],
                            (item: { readonly age: number }): boolean =>
                                item.age > 20 // only get items with age greater than 20
                        ),
                        3
                    ),
                    (item: { readonly name: string }): string =>
                        item.name // only want the name from each item
                )
            ).value() // calculate and retrieve value
        ).to.equal(true, 'Iterables must be true');
    }
}
