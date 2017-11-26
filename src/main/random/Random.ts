/**
 * Random source.
 */
export interface Random {
    /**
     * Next random value between 0 (inclusive) and 1 (exclusive).
     */
    next(): number;
}
