import { RandomOf } from '@main';
import { MockRandomSource } from '@test/random/MockRandomSource';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

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
        ]).to.deep.equal([
            expected,
            expected,
            expected
        ]);
    }
}
