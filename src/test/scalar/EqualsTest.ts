import { Equals } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Equals} test.
 */
@suite
export class EqualsTest {
    @test
    public isScalar(): void {
        expect(
            new Equals(true, true).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public equalPrimitives(): void {
        expect(
            new Equals(10, 10).value()
        ).to.equal(true, 'Two equal primitives must return true');
    }

    @test
    public differentPrimitives(): void {
        expect(
            new Equals(10, -1).value()
        ).to.equal(false, 'Two different primitives must return false');
    }

    @test
    public sameReferences(): void {
        const obj: { readonly a: boolean } = { a: true };
        expect(
            new Equals(obj, obj).value()
        ).to.equal(true, 'Same object references must return true');
    }

    @test
    public differentReferences(): void {
        expect(
            new Equals({ a: true }, { a: true }).value()
        ).to.equal(false, 'Different object references with the same composition must return false');
    }
}
