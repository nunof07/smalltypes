export class BaseBitmapFont {
    private key: string;
    private imagePath: string;
    private atlasPath: string;
    private fontSize: number;

    constructor(key: string, imagePath: string, atlasPath: string, size: number) {
        this.key = key;
        this.imagePath = imagePath;
        this.atlasPath = atlasPath;
        this.fontSize = size;
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

    size(): number {
        return this.fontSize;
    }
}