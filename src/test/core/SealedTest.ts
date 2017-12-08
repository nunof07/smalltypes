import { Sealed } from '@test/core/Sealed';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link sealed} decorator test.
 */
@suite
export class SealedTest {
    @test
    public isSealed(): void {
        expect(
            Object.isSealed(Sealed)
        ).to.equal(true, 'sealed must be true');
    }
}
