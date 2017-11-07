import { IllegalInheritanceError } from '@main/system/index';
import { Final } from '@test/system/Final';
import { FinalSub } from '@test/system/FinalSub';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link final} decorator test.
 */
@suite
export class FinalTest {
    @test
    public keepsType(): void {
        expect(
            new Final() instanceof Final
        ).to.equal(
            true,
            'must be Final'
        );
    }

    @test
    public allowsParameters(): void {
        expect(
            () => new Final('hello')
        ).to.not.throw(
            Error
        );
    }

    @test
    public keepsPrototype(): void {
        expect(
            new Final('hello').hello()
        ).to.equal(
            'hello'
        );
    }

    @test
    public forbidsInheritance(): void {
        expect(
            () => new FinalSub()
        ).to.throw(
            IllegalInheritanceError
        );
    }
}
