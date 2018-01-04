import {
    IsScalar,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsScalar} test.
 */
@suite
export class IsScalarTest {
    @test
    public isScalar(): void {
        expect(
            new IsScalar(true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

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
