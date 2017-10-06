export default class BitmapFont {
    private key: string;
    private imagePath: string;
    private atlasPath: string;

    constructor(key: string, imagePath: string, atlasPath: string) {
        this.key = key;
        this.imagePath = imagePath;
        this.atlasPath = atlasPath;
    }

    id(): string {
        return this.key;
    }

    image(): string {
        return this.imagePath;
    }

    atlas(): string {
        return this.atlasPath;
    }
}