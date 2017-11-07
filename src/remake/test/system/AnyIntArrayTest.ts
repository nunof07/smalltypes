import { AnyIntArray } from '@main/system/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link AnyIntArray} type test.
 */
@suite
export class AnyIntArrayTest {
    private length: (arr: AnyIntArray) => number;

    public before(): void {
        this.length = (arr: AnyIntArray): number => arr.length;
    }

    @test
    public intArrayTest(): void {
        expect(
            this.length(new Int8Array(1))
        ).to.equal(
            1
        );
    }

    @test
    public uintArrayTest(): void {
        expect(
            this.length(new Uint8Array(1))
        ).to.equal(
            1
        );
    }
}
