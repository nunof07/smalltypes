import { UintArray } from '@main/system/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link UintArray} type test.
 */
@suite
export class UintArrayTest {
    private readonly length: (arr: UintArray) => number;

    constructor() {
        this.length = (arr: UintArray): number => arr.length;
    }

    @test
    public uint8ArrayTest(): void {
        expect(
            this.length(new Uint8Array(1))
        ).to.equal(
            1
        );
    }

    @test
    public uint16ArrayTest(): void {
        expect(
            this.length(new Uint16Array(1))
        ).to.equal(
            1
        );
    }

    @test
    public uint32ArrayTest(): void {
        expect(
            this.length(new Uint32Array(1))
        ).to.equal(
            1
        );
    }
}
