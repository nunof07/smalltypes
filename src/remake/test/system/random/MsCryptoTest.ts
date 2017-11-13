import { MsCrypto } from '@main/system/random/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link MsCrypto} test.
 */
@suite
export class MsCryptoTest {
    @test.only
    public returnsValidRandomSource(): void {
        expect(
            () => new MsCrypto().value()
        ).to.not.throw();
    }
}
