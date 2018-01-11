import {
    IsEmpty,
    Limited,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsEmpty} test.
 */
@suite
export class IsEmptyTest {
    @test
    public isScalar(): void {
        expect(
            new IsEmpty(true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public nullTest(): void {
        expect(
            new IsEmpty(null).value()
        ).to.equal(true, 'null should be true');
    }

    @test
    public undefinedTest(): void {
        expect(
            new IsEmpty(undefined).value()
        ).to.equal(true, 'undefined should be true');
    }

    @test
    public emptyStringTest(): void {
        expect(
            new IsEmpty('').value()
        ).to.equal(true, 'Empty string should be true');
    }

    @test
    public nonEmptyStringTest(): void {
        expect(
            new IsEmpty('Hello World!').value()
        ).to.equal(false, 'Non-empty string should be false');
    }

    @test
    public nullScalarTest(): void {
        expect(
            new IsEmpty(new ScalarOf(null)).value()
        ).to.equal(true, 'Scalar with null should be true');
    }

    @test
    public fromFunction(): void {
        expect(
            new IsEmpty((): null => null).value()
        ).to.equal(true, 'Function that returns null should be true');
    }

    @test
    public emptyObjectTest(): void {
        expect(
            new IsEmpty({}).value()
        ).to.equal(true, 'Empty object should be true');
    }

    @test
    public nonEmptyObjectTest(): void {
        expect(
            new IsEmpty({ a: true }).value()
        ).to.equal(false, 'Non-empty object should be false');
    }

    @test
    public emptyArrayTest(): void {
        expect(
            new IsEmpty([]).value()
        ).to.equal(true, 'Empty array should be true');
    }

    @test
    public nonEmptyArrayTest(): void {
        expect(
            new IsEmpty([1, 2, 3]).value()
        ).to.equal(false, 'Non-empty array should be false');
    }

    @test
    public emptyIterableTest(): void {
        expect(
            new IsEmpty(new Limited([], 10)).value()
        ).to.equal(true, 'Empty iterable should be true');
    }

    @test
    public nonEmptyIterableTest(): void {
        expect(
            new IsEmpty(new Limited([1, 2, 3], 10)).value()
        ).to.equal(false, 'Non-empty iterable should be false');
    }

    @test
    public emptyScalarIterableTest(): void {
        expect(
            new IsEmpty(new ScalarOf(new Limited([], 10))).value()
        ).to.equal(true, 'Empty scalar iterable should be true');
    }

    @test
    public nonEmptyScalarIterableTest(): void {
        expect(
            new IsEmpty(new ScalarOf(new Limited([1, 2, 3], 10))).value()
        ).to.equal(false, 'Non-empty scalar iterable should be false');
    }

    @test
    public falseTest(): void {
        expect(
            new IsEmpty(false).value()
        ).to.equal(true, 'False should return true');
    }

    @test
    public trueTest(): void {
        expect(
            new IsEmpty(true).value()
        ).to.equal(false, 'True should return false');
    }

    @test
    public zeroTest(): void {
        expect(
            new IsEmpty(0).value()
        ).to.equal(true, '0 (zero) should return true');
    }

    @test
    public nonZeroNumberTest(): void {
        expect(
            new IsEmpty(1).value()
        ).to.equal(false, 'Non-zero number should return false');
    }

    @test
    public emptyMapTest(): void {
        expect(
            new IsEmpty(new Map()).value()
        ).to.equal(true, 'Empty map should be true');
    }

    @test
    public nonEmptyMapTest(): void {
        expect(
            new IsEmpty(new Map([[0, 0], [1, 1]])).value()
        ).to.equal(false, 'Non-empty map should be false');
    }

    @test
    public emptySetTest(): void {
        expect(
            new IsEmpty(new Set()).value()
        ).to.equal(true, 'Empty set should be true');
    }

    @test
    public nonEmptySetTest(): void {
        expect(
            new IsEmpty(new Set([1, 2, 3])).value()
        ).to.equal(false, 'Non-empty set should be false');
    }
}
