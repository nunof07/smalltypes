/**
 * Mocked RandomSource that always generates the same value.
 */
export class MockRandomSource implements RandomSource {
    /**
     * Fills array with random values.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues
     * @param array Integer-based TypedArray.
     */
    public getRandomValues<T extends Int8Array | Uint8ClampedArray | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array>
    (array: T): T {
        const max: number = Math.pow(2, array.BYTES_PER_ELEMENT * 8);
        array.fill(0.5 * max);

        return array;
    }
}
