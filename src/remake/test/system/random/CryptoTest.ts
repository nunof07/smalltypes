import { Crypto } from '@main/system/random/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Crypto} test.
 * Note: Currently jsdom doesn't implement Crypto, so there is no good way to test this at the moment.
 * @see https://github.com/tmpvar/jsdom/issues/1612
 * Additional info: jsdom is a JS implementation of web standards, that is being used in our test environment
 * to allows us to test against the DOM. In this case the implementation is not complete.
 */
@suite
export class CryptoTest {
    @test
    public doesNotThrow(): void {
        expect(
            () => new Crypto().value()
        ).to.not.throw();
    }
}
