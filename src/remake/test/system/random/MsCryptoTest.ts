import { MsCrypto } from '@main/system/random/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link MsCrypto} test.
 * Note: This is expected to return a Crypto instance in IE, but there is no way to test it in this environment.
 */
@suite
export class MsCryptoTest {
    @test
    public doestNotThrow(): void {
        expect(
            () => new MsCrypto().value()
        ).to.not.throw();
    }
}
