import { NodeCrypto } from '@main/system/random/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link NodeCrypto} test.
 */
@suite
export class NodeCryptoTest {
    @test
    public returnsCorrectSizedArray(): void {
        expect(
            new NodeCrypto()
                .value()
                .getRandomValues(new Int8Array(3))
                .byteLength
        ).to.equal(
            3
        );
    }
}
