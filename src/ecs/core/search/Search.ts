export interface Search<T, U> {
    find(items: T): U[];
}