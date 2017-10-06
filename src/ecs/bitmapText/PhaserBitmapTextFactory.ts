import BitmapText from './BitmapText';

export default class BitmapTextFactory {
    private factory: Phaser.GameObjectFactory;

    constructor(factory: Phaser.GameObjectFactory) {
        this.factory = factory;
    }

    create(text: BitmapText): BitmapTextFactory {
        this.factory.bitmapText(
            Math.floor(text.position().x()),
            Math.floor(text.position().y()),
            text.font().id(),
            text.value(),
            text.size()
        );

        return this;
    }
}