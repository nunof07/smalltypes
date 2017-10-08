import Text from './Text';

export default class ReadText implements Text {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    value(): string {
        return this.text;
    }
}