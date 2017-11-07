import { Sealed } from '@test/system/Sealed';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * Sealed decorator test.
 */
@suite
export class SealedTest {
    @test
    public isSealed(): void {
        expect(
            Object.isSealed(Sealed)
        ).to.equal(
            true,
            'sealed must be true'
        );
    }
}
