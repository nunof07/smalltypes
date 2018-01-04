import {
    IsObject,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsObject} test.
 */
@suite
export class IsObjectTest {
    @test
    public isScalar(): void {
        expect(
            new IsObject(true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public includesEmptyObject(): void {
        expect(
            new IsObject({}).value()
        ).to.equal(true, 'Empty object must return true');
    }

    @test
    public includesAnonymousObject(): void {
        expect(
            new IsObject({ a: true }).value()
        ).to.equal(true, 'Anonymous object must return true');
    }

    @test
    public excludesFunction(): void {
        expect(
            new IsObject((): Function => {
                return (): string => 'HelloWorld';
            }).value()
        ).to.equal(false, 'Function must return false');
    }

    @test
    public excludesString(): void {
        expect(
            new IsObject('HelloWorld').value()
        ).to.equal(false, 'String must return false');
    }

    @test
    public excludesBoolean(): void {
        expect(
            new IsObject(true).value()
        ).to.equal(false, 'Boolean must return false');
    }

    @test
    public excludesNumber(): void {
        expect(
            new IsObject(10).value()
        ).to.equal(false, 'Number must return false');
    }

    @test
    public excludesScalarPrimitive(): void {
        expect(
            new IsObject(new ScalarOf(10)).value()
        ).to.equal(false, 'Number must return false');
    }

    @test
    public includesScalarObject(): void {
        expect(
            new IsObject(new ScalarOf({ a: true })).value()
        ).to.equal(true, 'Scalar with object must return true');
    }

    @test
    public fromFunction(): void {
        expect(
            new IsObject((): { readonly a: boolean } => {
                return { a : true };
            }).value()
        ).to.equal(true, 'Function that returns object must return true');
    }
}
