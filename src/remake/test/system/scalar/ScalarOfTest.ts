import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link ScalarOf} test.
 */
@suite
export class ScalarOfTest {
    @test
    public isTrue(): void {
        expect(
            new ScalarOf(true).value()
        ).to.equal(
            true,
            'ScalarOf must be true'
        );
    }

    @test
    public isHelloWorld(): void {
        expect(
            new ScalarOf('HelloWorld').value()
        ).to.equal(
            'HelloWorld'
        );
    }
}
