import { RandomOf } from '@main/random/index';
import { MockRandomSource } from '@test/random/MockRandomSource';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomOf} test.
 */
@suite
export class RandomOfTest {
    @test
    public returnsNextRandom(): void {
        const rnd: RandomOf = new RandomOf(new MockRandomSource());
        const expected: number = 0.5;
        expect([
            rnd.next(),
            rnd.next(),
            rnd.next()
        ]).to.be.equalTo([
            expected,
            expected,
            expected
        ]);
    }
}
