export interface BitmapFont {
    id(): string;
    image(): string;
    atlas(): string;
    size(): number;
}