import { Text } from '../../core/index';

export class ReadText implements Text {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    value(): string {
        return this.text;
    }
}