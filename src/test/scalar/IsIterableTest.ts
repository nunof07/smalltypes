import { IsIterable } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link IsIterable} test.
 */
@suite
export class IsIterableTest {
    @test
    public isScalar(): void {
        expect(
            new IsIterable([]).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public emptyArrayTest(): void {
        expect(
            new IsIterable([]).value()
        ).to.equal(true, 'Empty array should return true');
    }

    @test
    public nonEmptyArrayTest(): void {
        expect(
            new IsIterable([1, 2, 3]).value()
        ).to.equal(true, 'Non-empty array should return true');
    }

    @test
    public stringTest(): void {
        expect(
            new IsIterable('Hello World').value()
        ).to.equal(true, 'String should return true');
    }

    @test
    public objectTest(): void {
        expect(
            new IsIterable({ a: true, b: 2 }).value()
        ).to.equal(false, 'Object should return false');
    }
}
