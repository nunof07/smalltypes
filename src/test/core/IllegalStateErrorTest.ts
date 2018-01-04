import { IllegalStateError } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IllegalStateError} test.
 */
@suite
export class IllegalStateErrorTest {
    @test
    public throwTest(): void {
        expect(
            () => {
                throw new IllegalStateError('My custom message');
            }
        ).to.throw(IllegalStateError);
    }
}
