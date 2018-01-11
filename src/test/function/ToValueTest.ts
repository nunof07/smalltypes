import {
    NullaryFunctionOf,
    Scalar,
    ScalarOf,
    ToValue
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link ToValue} test.
 */
@suite
export class ToValueTest {
    @test
    public isFunction(): void {
        expect(
            new ToValue().isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public fromStringPrimitive(): void {
        expect(
            new ToValue().apply('hello')
        ).to.equal('hello');
    }

    @test
    public fromNumberPrimitive(): void {
        expect(
            new ToValue().apply(1337)
        ).to.equal(1337);
    }

    @test
    public fromBoolPrimitive(): void {
        expect(
            new ToValue().apply(true)
        ).to.equal(true, 'From true primitive must be true');
    }

    @test
    public fromObjectValue(): void {
        expect(
            new ToValue().apply({ a: 'hello' })
        ).to.deep.equal({ a: 'hello' });
    }

    @test
    public fromStringScalar(): void {
        expect(
            new ToValue().apply(new ScalarOf('hello'))
        ).to.equal('hello');
    }

    @test
    public fromNumberScalar(): void {
        expect(
            new ToValue().apply(new ScalarOf(1337))
        ).to.equal(1337);
    }

    @test
    public fromBoolScalar(): void {
        expect(
            new ToValue().apply(new ScalarOf(true))
        ).to.equal(true, 'From true scalar must be true');
    }

    @test
    public fromObjectScalar(): void {
        expect(
            new ToValue().apply(new ScalarOf({ a: 'hello' }))
        ).to.deep.equal({ a: 'hello' });
    }

    @test
    public fromStringJsFunction(): void {
        expect(
            new ToValue().apply((): string => 'hello')
        ).to.equal('hello');
    }

    @test
    public fromScalarStringJsFunction(): void {
        expect(
            new ToValue().apply((): Scalar<string> => new ScalarOf('hello'))
        ).to.equal('hello');
    }

    @test
    public fromNumberJsFunction(): void {
        expect(
            new ToValue().apply((): number => 1337)
        ).to.equal(1337);
    }

    @test
    public fromBoolJsFunction(): void {
        expect(
            new ToValue().apply((): boolean => true)
        ).to.equal(true, 'From true function result must be true');
    }

    @test
    public fromObjectJsFunction(): void {
        expect(
            new ToValue().apply((): Object => {
                return { a: 'hello' };
            })
        ).to.deep.equal({ a: 'hello' });
    }

    @test
    public fromStringFunction(): void {
        expect(
            new ToValue().apply(new NullaryFunctionOf((): string => 'hello'))
        ).to.equal('hello');
    }

    @test
    public fromScalarStringFunction(): void {
        expect(
            new ToValue().apply(new NullaryFunctionOf((): Scalar<string> => new ScalarOf('hello')))
        ).to.equal('hello');
    }
}
