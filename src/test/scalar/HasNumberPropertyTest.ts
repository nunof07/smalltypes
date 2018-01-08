import { HasNumberProperty } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link HasNumberProperty} test.
 */
@suite
export class HasNumberPropertyTest {
    @test
    public isScalar(): void {
        expect(
            new HasNumberProperty(1, '', 1).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public hasPropertyTrueTest(): void {
        expect(
            new HasNumberProperty({ hello: 2 }, 'hello', 2).value()
        ).to.equal(true, 'Same property value should return true');
    }

    @test
    public hasPropertyFalseTest(): void {
        expect(
            new HasNumberProperty({ hello: 2 }, 'hello', 5).value()
        ).to.equal(false, 'Different property value should return false');
    }

    @test
    public noPropertyTest(): void {
        expect(
            new HasNumberProperty({ a: true }, 'hello', 5).value()
        ).to.equal(false, 'No property should return false');
    }
}
