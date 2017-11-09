import { IntArray } from '@main/system/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link IntArray} type test.
 */
@suite
export class IntArrayTest {
    private readonly length: (arr: IntArray) => number;

    constructor() {
        this.length = (arr: IntArray): number => arr.length;
    }

    @test
    public int8ArrayTest(): void {
        expect(
            this.length(new Int8Array(1))
        ).to.equal(
            1
        );
    }

    @test
    public int16ArrayTest(): void {
        expect(
            this.length(new Int16Array(1))
        ).to.equal(
            1
        );
    }

    @test
    public int32ArrayTest(): void {
        expect(
            this.length(new Int32Array(1))
        ).to.equal(
            1
        );
    }
}
