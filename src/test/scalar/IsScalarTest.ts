import { IsScalar } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IsScalar} test.
 */
@suite
export class IsScalarTest {
    @test
    public detectsScalar(): void {
        expect(
            new IsScalar(new ScalarOf('HelloWorld')).value()
        ).to.equal(true, 'Scalar value must return true');
    }

    @test
    public doesNotDetectNonScalar(): void {
        expect(
            new IsScalar('HelloWorld').value()
        ).to.equal(false, 'Non-scalar value must return false');
    }
}
