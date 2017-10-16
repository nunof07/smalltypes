export interface Function<X, Y> {
    apply(input: X): Y;
}