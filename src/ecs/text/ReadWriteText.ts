import WriteText from './WriteText';

export default class ReadWriteText implements WriteText {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    value(): string {
        return this.text;
    }

    update(text: string): void {
        this.text = text;
    }
}