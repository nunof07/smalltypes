import {
    NullaryFunctionOf,
    ScalarOf,
    True
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link ScalarOf} test.
 */
@suite
export class ScalarOfTest {
    @test
    public isScalar(): void {
        expect(
            new ScalarOf(1).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public isTrue(): void {
        expect(
            new ScalarOf(true).value()
        ).to.equal(true, 'ScalarOf must be true');
    }

    @test
    public isHelloWorld(): void {
        expect(
            new ScalarOf('HelloWorld').value()
        ).to.equal('HelloWorld');
    }

    @test
    public fromScalar(): void {
        expect(
            new ScalarOf(new True()).value()
        ).to.equal(true, 'Must return scalar value');
    }

    @test
    public fromFunction(): void {
        expect(
            new ScalarOf((): string => 'hello').value()
        ).to.equal('hello');
    }

    @test
    public fromNullaryFunction(): void {
        expect(
            new ScalarOf(new NullaryFunctionOf((): string => 'hello')).value()
        ).to.equal('hello');
    }
}
