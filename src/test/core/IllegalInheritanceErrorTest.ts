import { IllegalInheritanceError } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IllegalInheritanceError} test.
 */
@suite
export class IllegalInheritanceErrorTest {
    @test
    public throwTest(): void {
        expect(
            () => {
                throw new IllegalInheritanceError('My custom message');
            }
        ).to.throw(IllegalInheritanceError);
    }
}
