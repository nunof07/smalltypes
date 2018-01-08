import { IsEmptyObject } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsEmptyObject} test.
 */
@suite
export class IsEmptyObjectTest {
    @test
    public isScalar(): void {
        expect(
            new IsEmptyObject(true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public emptyObjectTest(): void {
        expect(
            new IsEmptyObject({}).value()
        ).to.equal(true, 'Empty object should be true');
    }

    @test
    public nonEmptyObjectTest(): void {
        expect(
            new IsEmptyObject({ a: true }).value()
        ).to.equal(false, 'Non-empty object should be false');
    }

    @test
    public nullTest(): void {
        expect(
            new IsEmptyObject(null).value()
        ).to.equal(false, 'null should be false');
    }

    @test
    public undefinedTest(): void {
        expect(
            new IsEmptyObject(undefined).value()
        ).to.equal(false, 'undefined should be false');
    }

    @test
    public emptyStringTest(): void {
        expect(
            new IsEmptyObject('').value()
        ).to.equal(false, 'Empty string should be false');
    }
}
